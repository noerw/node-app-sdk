/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var ttn_api_protocol_lorawan_lorawan_pb = require('../../../ttn/api/protocol/lorawan/lorawan_pb.js');
goog.exportSymbol('proto.protocol.ActivationMetadata', null, global);
goog.exportSymbol('proto.protocol.Message', null, global);
goog.exportSymbol('proto.protocol.RxMetadata', null, global);
goog.exportSymbol('proto.protocol.TxConfiguration', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.protocol.Message.oneofGroups_);
};
goog.inherits(proto.protocol.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.Message.displayName = 'proto.protocol.Message';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protocol.Message.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.protocol.Message.ProtocolCase = {
  PROTOCOL_NOT_SET: 0,
  LORAWAN: 1
};

/**
 * @return {proto.protocol.Message.ProtocolCase}
 */
proto.protocol.Message.prototype.getProtocolCase = function() {
  return /** @type {proto.protocol.Message.ProtocolCase} */(jspb.Message.computeOneofCase(this, proto.protocol.Message.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Message} msg The msg instance to transform.
 * @return {!Object}
 */
proto.protocol.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    lorawan: (f = msg.getLorawan()) && ttn_api_protocol_lorawan_lorawan_pb.Message.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.Message}
 */
proto.protocol.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Message;
  return proto.protocol.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Message}
 */
proto.protocol.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ttn_api_protocol_lorawan_lorawan_pb.Message;
      reader.readMessage(value,ttn_api_protocol_lorawan_lorawan_pb.Message.deserializeBinaryFromReader);
      msg.setLorawan(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Message} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.protocol.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLorawan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ttn_api_protocol_lorawan_lorawan_pb.Message.serializeBinaryToWriter
    );
  }
};


/**
 * optional lorawan.Message lorawan = 1;
 * @return {?proto.lorawan.Message}
 */
proto.protocol.Message.prototype.getLorawan = function() {
  return /** @type{?proto.lorawan.Message} */ (
    jspb.Message.getWrapperField(this, ttn_api_protocol_lorawan_lorawan_pb.Message, 1));
};


/** @param {?proto.lorawan.Message|undefined} value */
proto.protocol.Message.prototype.setLorawan = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.protocol.Message.oneofGroups_[0], value);
};


proto.protocol.Message.prototype.clearLorawan = function() {
  this.setLorawan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.Message.prototype.hasLorawan = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.RxMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.protocol.RxMetadata.oneofGroups_);
};
goog.inherits(proto.protocol.RxMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.RxMetadata.displayName = 'proto.protocol.RxMetadata';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protocol.RxMetadata.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.protocol.RxMetadata.ProtocolCase = {
  PROTOCOL_NOT_SET: 0,
  LORAWAN: 1
};

/**
 * @return {proto.protocol.RxMetadata.ProtocolCase}
 */
proto.protocol.RxMetadata.prototype.getProtocolCase = function() {
  return /** @type {proto.protocol.RxMetadata.ProtocolCase} */(jspb.Message.computeOneofCase(this, proto.protocol.RxMetadata.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.RxMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.RxMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.RxMetadata} msg The msg instance to transform.
 * @return {!Object}
 */
proto.protocol.RxMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    lorawan: (f = msg.getLorawan()) && ttn_api_protocol_lorawan_lorawan_pb.Metadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.RxMetadata}
 */
proto.protocol.RxMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.RxMetadata;
  return proto.protocol.RxMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.RxMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.RxMetadata}
 */
proto.protocol.RxMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ttn_api_protocol_lorawan_lorawan_pb.Metadata;
      reader.readMessage(value,ttn_api_protocol_lorawan_lorawan_pb.Metadata.deserializeBinaryFromReader);
      msg.setLorawan(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.RxMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.RxMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.RxMetadata} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.protocol.RxMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLorawan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ttn_api_protocol_lorawan_lorawan_pb.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional lorawan.Metadata lorawan = 1;
 * @return {?proto.lorawan.Metadata}
 */
proto.protocol.RxMetadata.prototype.getLorawan = function() {
  return /** @type{?proto.lorawan.Metadata} */ (
    jspb.Message.getWrapperField(this, ttn_api_protocol_lorawan_lorawan_pb.Metadata, 1));
};


/** @param {?proto.lorawan.Metadata|undefined} value */
proto.protocol.RxMetadata.prototype.setLorawan = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.protocol.RxMetadata.oneofGroups_[0], value);
};


proto.protocol.RxMetadata.prototype.clearLorawan = function() {
  this.setLorawan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.RxMetadata.prototype.hasLorawan = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.TxConfiguration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.protocol.TxConfiguration.oneofGroups_);
};
goog.inherits(proto.protocol.TxConfiguration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.TxConfiguration.displayName = 'proto.protocol.TxConfiguration';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protocol.TxConfiguration.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.protocol.TxConfiguration.ProtocolCase = {
  PROTOCOL_NOT_SET: 0,
  LORAWAN: 1
};

/**
 * @return {proto.protocol.TxConfiguration.ProtocolCase}
 */
proto.protocol.TxConfiguration.prototype.getProtocolCase = function() {
  return /** @type {proto.protocol.TxConfiguration.ProtocolCase} */(jspb.Message.computeOneofCase(this, proto.protocol.TxConfiguration.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.TxConfiguration.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.TxConfiguration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.TxConfiguration} msg The msg instance to transform.
 * @return {!Object}
 */
proto.protocol.TxConfiguration.toObject = function(includeInstance, msg) {
  var f, obj = {
    lorawan: (f = msg.getLorawan()) && ttn_api_protocol_lorawan_lorawan_pb.TxConfiguration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.TxConfiguration}
 */
proto.protocol.TxConfiguration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.TxConfiguration;
  return proto.protocol.TxConfiguration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.TxConfiguration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.TxConfiguration}
 */
proto.protocol.TxConfiguration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ttn_api_protocol_lorawan_lorawan_pb.TxConfiguration;
      reader.readMessage(value,ttn_api_protocol_lorawan_lorawan_pb.TxConfiguration.deserializeBinaryFromReader);
      msg.setLorawan(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.TxConfiguration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.TxConfiguration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.TxConfiguration} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.protocol.TxConfiguration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLorawan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ttn_api_protocol_lorawan_lorawan_pb.TxConfiguration.serializeBinaryToWriter
    );
  }
};


/**
 * optional lorawan.TxConfiguration lorawan = 1;
 * @return {?proto.lorawan.TxConfiguration}
 */
proto.protocol.TxConfiguration.prototype.getLorawan = function() {
  return /** @type{?proto.lorawan.TxConfiguration} */ (
    jspb.Message.getWrapperField(this, ttn_api_protocol_lorawan_lorawan_pb.TxConfiguration, 1));
};


/** @param {?proto.lorawan.TxConfiguration|undefined} value */
proto.protocol.TxConfiguration.prototype.setLorawan = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.protocol.TxConfiguration.oneofGroups_[0], value);
};


proto.protocol.TxConfiguration.prototype.clearLorawan = function() {
  this.setLorawan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.TxConfiguration.prototype.hasLorawan = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.ActivationMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.protocol.ActivationMetadata.oneofGroups_);
};
goog.inherits(proto.protocol.ActivationMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.protocol.ActivationMetadata.displayName = 'proto.protocol.ActivationMetadata';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.protocol.ActivationMetadata.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.protocol.ActivationMetadata.ProtocolCase = {
  PROTOCOL_NOT_SET: 0,
  LORAWAN: 1
};

/**
 * @return {proto.protocol.ActivationMetadata.ProtocolCase}
 */
proto.protocol.ActivationMetadata.prototype.getProtocolCase = function() {
  return /** @type {proto.protocol.ActivationMetadata.ProtocolCase} */(jspb.Message.computeOneofCase(this, proto.protocol.ActivationMetadata.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.ActivationMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.ActivationMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.ActivationMetadata} msg The msg instance to transform.
 * @return {!Object}
 */
proto.protocol.ActivationMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    lorawan: (f = msg.getLorawan()) && ttn_api_protocol_lorawan_lorawan_pb.ActivationMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.ActivationMetadata}
 */
proto.protocol.ActivationMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.ActivationMetadata;
  return proto.protocol.ActivationMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.ActivationMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.ActivationMetadata}
 */
proto.protocol.ActivationMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ttn_api_protocol_lorawan_lorawan_pb.ActivationMetadata;
      reader.readMessage(value,ttn_api_protocol_lorawan_lorawan_pb.ActivationMetadata.deserializeBinaryFromReader);
      msg.setLorawan(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.ActivationMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.ActivationMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.ActivationMetadata} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.protocol.ActivationMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLorawan();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ttn_api_protocol_lorawan_lorawan_pb.ActivationMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional lorawan.ActivationMetadata lorawan = 1;
 * @return {?proto.lorawan.ActivationMetadata}
 */
proto.protocol.ActivationMetadata.prototype.getLorawan = function() {
  return /** @type{?proto.lorawan.ActivationMetadata} */ (
    jspb.Message.getWrapperField(this, ttn_api_protocol_lorawan_lorawan_pb.ActivationMetadata, 1));
};


/** @param {?proto.lorawan.ActivationMetadata|undefined} value */
proto.protocol.ActivationMetadata.prototype.setLorawan = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.protocol.ActivationMetadata.oneofGroups_[0], value);
};


proto.protocol.ActivationMetadata.prototype.clearLorawan = function() {
  this.setLorawan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.protocol.ActivationMetadata.prototype.hasLorawan = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.protocol);
