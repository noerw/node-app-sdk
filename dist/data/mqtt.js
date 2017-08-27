'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mqtt = require('mqtt');
var util = require('util');
var EventEmitter = require('events');
var regions = require('../regions');

var Client = function () {
  function Client(region, appId, appAccessKey) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Client);

    var host = regions.validate(region);

    this.appId = appId;
    this.ee = new EventEmitter();
    options.username = appId;
    options.password = appAccessKey;
    this.mqtt = mqtt.connect('mqtts://' + host + ':8883', options);
    this.mqtt.on('connect', this._connect.bind(this));
    this.mqtt.on('error', this._error.bind(this));
    this.mqtt.on('message', this._handleMessage.bind(this));
  }

  _createClass(Client, [{
    key: 'end',
    value: function end() {
      var _mqtt;

      return (_mqtt = this.mqtt).end.apply(_mqtt, arguments);
    }
  }, {
    key: 'on',
    value: function on() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var eventName = args[0];
      var listener = args.pop();

      var topic = this._eventToTopic.apply(this, args);
      if (topic) {
        this.mqtt.subscribe(topic);
        eventName = topic;
      }

      this.ee.on(eventName, listener);
    }
  }, {
    key: 'off',
    value: function off() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var eventName = args[0];
      var listener = args.pop();

      var topic = this._eventToTopic.apply(this, args);
      if (topic) {
        this.mqtt.unsubscribe(topic);
        eventName = topic;
      }

      this.ee.off(eventName, listener);
    }
  }, {
    key: 'send',
    value: function send(devId, payload, port) {
      var topic = util.format('%s/devices/%s/down', this.appId, devId);
      var message = {
        port: port || 1
      };
      if (Array.isArray(payload)) {
        payload = new Buffer(payload);
      }
      if (Buffer.isBuffer(payload)) {
        message.payload_raw = payload.toString('base64');
      } else {
        message.payload_fields = payload;
      }
      this.mqtt.publish(topic, JSON.stringify(message));
    }
  }, {
    key: '_connect',
    value: function _connect(connack) {
      this.ee.emit('connect', connack);
    }
  }, {
    key: '_error',
    value: function _error(err) {
      this.ee.emit('error', err);
    }
  }, {
    key: '_handleMessage',
    value: function _handleMessage(topic, message) {
      var event = this._topicToEvent(topic);
      if (!event.name) {
        return;
      }
      var payload = JSON.parse(message.toString());
      if (payload === Object(payload) && typeof payload.payload_raw === 'string') {
        payload.payload_raw = new Buffer(payload.payload_raw, 'base64');
      }
      this.ee.emit(topic, event.devId, payload); // full topic, including field if any
      this.ee.emit(this._eventToTopic(event.name, null, event.field), event.devId, payload); // any device
      if (event.name === 'device') {
        this.ee.emit(this._eventToTopic(event.name, event.devId, null), event.devId, payload); // any field
        this.ee.emit(this._eventToTopic(event.name, null, null), event.devId, payload); // any device or field
      }
    }
  }, {
    key: '_eventToTopic',
    value: function _eventToTopic(name, devId, field) {
      if (devId && /[+#\/]+/.test(devId)) {
        throw new Error('devId may not contain path separator and wildcards.');
      }
      if (field && /[+#]+/.test(field)) {
        throw new Error('field may not contain wildcards.');
      }
      if (name === 'activation') {
        // deprecated
        return this._eventToTopic('device', devId, 'activations');
      }
      var topic = this.appId + '/devices/' + (devId || '+') + '/';
      if (name === 'message') {
        topic += 'up' + (field ? '/' + field : '');
      } else if (name === 'device') {
        topic += 'events/' + (field || '#');
      } else {
        topic = null;
      }
      return topic;
    }
  }, {
    key: '_topicToEvent',
    value: function _topicToEvent(topic) {
      var matches = topic.match(new RegExp('^' + this.appId + '\/devices\/([^\/]+)\/(?:(up)(?:\/(.+)$)?|(events)\/(.+))'));
      if (!matches) {
        return;
      }
      var event = {
        devId: matches[1]
      };
      if (matches[2] === 'up') {
        event.name = 'message';
        event.field = matches[3];
      } else if (matches[4] === 'events') {
        event.name = 'device';
        event.field = matches[5];
      }
      return event;
    }
  }]);

  return Client;
}();

module.exports = Client;