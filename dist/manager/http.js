"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("isomorphic-fetch");

var _httpErrors = require("http-errors");

var _httpErrors2 = _interopRequireDefault(_httpErrors);

var _regions = require("../regions");

var _regions2 = _interopRequireDefault(_regions);

var _url = require("url");

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var checkStatus = function checkStatus(response) {
  if (response.status < 200 || response.status >= 300) {
    throw (0, _httpErrors2.default)(response.status, response.statusText);
  }
  return response;
};

var normalize = function normalize() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var withProtocol = url.indexOf("://") === -1 ? "http://".concat(url) : url;

  var u = _url2.default.parse(withProtocol);
  if (!u.port) {
    u.host = u.host.concat(":8084");
  }

  return _url2.default.format(u);
};

var HTTP = function () {
  function HTTP() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, HTTP);

    if (options.key && options.token) {
      return this.error('Both key and token given');
    }

    if (!options.key && !options.token) {
      return this._error('No key or token given');
    }

    this.key = options.key;
    this.token = options.token;

    if (options.region && options.base) {
      return this._error('Both region and base are given, only one is allowed');
    }

    if (!options.region && !options.base) {
      return this._error('No region or base are given');
    }

    if (options.region) {
      this.region = _regions2.default.validate(options.region);
    }

    this.base = options.base || normalize(this.region);

    this.headers = options.headers || {};
  }

  // throw a prefixed error


  _createClass(HTTP, [{
    key: "_error",
    value: function _error(msg) {
      throw new Error("HTTP: " + (msg || 'unknown error'));
    }

    // perform a request

  }, {
    key: "_request",
    value: function _request() {
      var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'GET';
      var uri = arguments[1];
      var body = arguments[2];

      var url = _url2.default.resolve(this.base, uri);

      return fetch(url, {
        method: method,
        headers: _extends({}, this.headers || {}, {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: this.key ? "Key " + this.key : "Bearer " + this.token
        }),
        body: body && JSON.stringify(body)
      }).then(checkStatus).then(function (r) {
        return r.json();
      });
    }
  }, {
    key: "getApplication",
    value: function getApplication(appID) {
      return this._request('GET', "/applications/" + appID);
    }
  }, {
    key: "registerApplication",
    value: function registerApplication(app) {
      return this._request('POST', '/applications', app);
    }
  }, {
    key: "setApplication",
    value: function setApplication(app_id) {
      var app = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this._request('POST', "/applications/" + app_id, _extends({ app_id: app_id }, app));
    }
  }, {
    key: "deleteApplication",
    value: function deleteApplication(appID) {
      return this._request('DELETE', "/applications/" + appID);
    }
  }, {
    key: "getDevicesForApplication",
    value: function getDevicesForApplication(appID) {
      return this._request('GET', "/applications/" + appID + "/devices");
    }
  }, {
    key: "getDevice",
    value: function getDevice(appID, devID) {
      return this._request('GET', "/applications/" + appID + "/devices/" + devID);
    }
  }, {
    key: "registerDevice",
    value: function registerDevice(appID) {
      var device = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.setDevice(appID, device.devID, device);
    }
  }, {
    key: "setDevice",
    value: function setDevice(appID, dev_id) {
      var device = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this._request('POST', "/applications/" + appID + "/devices", _extends({ dev_id: dev_id }, device));
    }
  }, {
    key: "deleteDevice",
    value: function deleteDevice(appID, devID) {
      return this._request('DELETE', "/applications/" + appID + "/devices");
    }
  }]);

  return HTTP;
}();

module.exports = HTTP;