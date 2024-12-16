// source: protocol/hotel.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var protocol_types_pb = require('../protocol/types_pb.js');
goog.object.extend(proto, protocol_types_pb);
goog.exportSymbol('proto.protocol.hotel.FetchRoomPayload', null, global);
goog.exportSymbol('proto.protocol.hotel.FetchRoomResponse', null, global);
goog.exportSymbol('proto.protocol.hotel.ReservationRequest', null, global);
goog.exportSymbol('proto.protocol.hotel.ReservationResponse', null, global);
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
proto.protocol.hotel.FetchRoomPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.hotel.FetchRoomPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.hotel.FetchRoomPayload.displayName = 'proto.protocol.hotel.FetchRoomPayload';
}
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
proto.protocol.hotel.FetchRoomResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocol.hotel.FetchRoomResponse.repeatedFields_, null);
};
goog.inherits(proto.protocol.hotel.FetchRoomResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.hotel.FetchRoomResponse.displayName = 'proto.protocol.hotel.FetchRoomResponse';
}
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
proto.protocol.hotel.ReservationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.hotel.ReservationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.hotel.ReservationRequest.displayName = 'proto.protocol.hotel.ReservationRequest';
}
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
proto.protocol.hotel.ReservationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.hotel.ReservationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.hotel.ReservationResponse.displayName = 'proto.protocol.hotel.ReservationResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.hotel.FetchRoomPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.hotel.FetchRoomPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.hotel.FetchRoomPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.hotel.FetchRoomPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
startdate: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
enddate: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
beds: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
minsize: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
minprize: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
maxprice: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.protocol.hotel.FetchRoomPayload}
 */
proto.protocol.hotel.FetchRoomPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.hotel.FetchRoomPayload;
  return proto.protocol.hotel.FetchRoomPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.hotel.FetchRoomPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.hotel.FetchRoomPayload}
 */
proto.protocol.hotel.FetchRoomPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartdate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnddate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBeds(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinsize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinprize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxprice(value);
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
proto.protocol.hotel.FetchRoomPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.hotel.FetchRoomPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.hotel.FetchRoomPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.hotel.FetchRoomPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string startDate = 1;
 * @return {string}
 */
proto.protocol.hotel.FetchRoomPayload.prototype.getStartdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.hotel.FetchRoomPayload} returns this
 */
proto.protocol.hotel.FetchRoomPayload.prototype.setStartdate = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.hotel.FetchRoomPayload} returns this
 */
proto.protocol.hotel.FetchRoomPayload.prototype.clearStartdate = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.hotel.FetchRoomPayload.prototype.hasStartdate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string endDate = 2;
 * @return {string}
 */
proto.protocol.hotel.FetchRoomPayload.prototype.getEnddate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.hotel.FetchRoomPayload} returns this
 */
proto.protocol.hotel.FetchRoomPayload.prototype.setEnddate = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.hotel.FetchRoomPayload} returns this
 */
proto.protocol.hotel.FetchRoomPayload.prototype.clearEnddate = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.hotel.FetchRoomPayload.prototype.hasEnddate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 beds = 3;
 * @return {number}
 */
proto.protocol.hotel.FetchRoomPayload.prototype.getBeds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.hotel.FetchRoomPayload} returns this
 */
proto.protocol.hotel.FetchRoomPayload.prototype.setBeds = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.hotel.FetchRoomPayload} returns this
 */
proto.protocol.hotel.FetchRoomPayload.prototype.clearBeds = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.hotel.FetchRoomPayload.prototype.hasBeds = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 minsize = 4;
 * @return {number}
 */
proto.protocol.hotel.FetchRoomPayload.prototype.getMinsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.hotel.FetchRoomPayload} returns this
 */
proto.protocol.hotel.FetchRoomPayload.prototype.setMinsize = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.hotel.FetchRoomPayload} returns this
 */
proto.protocol.hotel.FetchRoomPayload.prototype.clearMinsize = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.hotel.FetchRoomPayload.prototype.hasMinsize = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 minprize = 5;
 * @return {number}
 */
proto.protocol.hotel.FetchRoomPayload.prototype.getMinprize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.hotel.FetchRoomPayload} returns this
 */
proto.protocol.hotel.FetchRoomPayload.prototype.setMinprize = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.hotel.FetchRoomPayload} returns this
 */
proto.protocol.hotel.FetchRoomPayload.prototype.clearMinprize = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.hotel.FetchRoomPayload.prototype.hasMinprize = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 maxprice = 6;
 * @return {number}
 */
proto.protocol.hotel.FetchRoomPayload.prototype.getMaxprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.hotel.FetchRoomPayload} returns this
 */
proto.protocol.hotel.FetchRoomPayload.prototype.setMaxprice = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.hotel.FetchRoomPayload} returns this
 */
proto.protocol.hotel.FetchRoomPayload.prototype.clearMaxprice = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.hotel.FetchRoomPayload.prototype.hasMaxprice = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocol.hotel.FetchRoomResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.hotel.FetchRoomResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.hotel.FetchRoomResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.hotel.FetchRoomResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.hotel.FetchRoomResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
header: (f = msg.getHeader()) && protocol_types_pb.Header.toObject(includeInstance, f),
roomsList: jspb.Message.toObjectList(msg.getRoomsList(),
    protocol_types_pb.Room.toObject, includeInstance)
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
 * @return {!proto.protocol.hotel.FetchRoomResponse}
 */
proto.protocol.hotel.FetchRoomResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.hotel.FetchRoomResponse;
  return proto.protocol.hotel.FetchRoomResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.hotel.FetchRoomResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.hotel.FetchRoomResponse}
 */
proto.protocol.hotel.FetchRoomResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new protocol_types_pb.Header;
      reader.readMessage(value,protocol_types_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new protocol_types_pb.Room;
      reader.readMessage(value,protocol_types_pb.Room.deserializeBinaryFromReader);
      msg.addRooms(value);
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
proto.protocol.hotel.FetchRoomResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.hotel.FetchRoomResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.hotel.FetchRoomResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.hotel.FetchRoomResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      protocol_types_pb.Header.serializeBinaryToWriter
    );
  }
  f = message.getRoomsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      protocol_types_pb.Room.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocol.Header header = 1;
 * @return {?proto.protocol.Header}
 */
proto.protocol.hotel.FetchRoomResponse.prototype.getHeader = function() {
  return /** @type{?proto.protocol.Header} */ (
    jspb.Message.getWrapperField(this, protocol_types_pb.Header, 1));
};


/**
 * @param {?proto.protocol.Header|undefined} value
 * @return {!proto.protocol.hotel.FetchRoomResponse} returns this
*/
proto.protocol.hotel.FetchRoomResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.hotel.FetchRoomResponse} returns this
 */
proto.protocol.hotel.FetchRoomResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.hotel.FetchRoomResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocol.Room rooms = 2;
 * @return {!Array<!proto.protocol.Room>}
 */
proto.protocol.hotel.FetchRoomResponse.prototype.getRoomsList = function() {
  return /** @type{!Array<!proto.protocol.Room>} */ (
    jspb.Message.getRepeatedWrapperField(this, protocol_types_pb.Room, 2));
};


/**
 * @param {!Array<!proto.protocol.Room>} value
 * @return {!proto.protocol.hotel.FetchRoomResponse} returns this
*/
proto.protocol.hotel.FetchRoomResponse.prototype.setRoomsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocol.Room=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocol.Room}
 */
proto.protocol.hotel.FetchRoomResponse.prototype.addRooms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocol.Room, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocol.hotel.FetchRoomResponse} returns this
 */
proto.protocol.hotel.FetchRoomResponse.prototype.clearRoomsList = function() {
  return this.setRoomsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.hotel.ReservationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.hotel.ReservationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.hotel.ReservationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.hotel.ReservationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
startDate: jspb.Message.getFieldWithDefault(msg, 2, ""),
endDate: jspb.Message.getFieldWithDefault(msg, 3, ""),
agencyId: jspb.Message.getFieldWithDefault(msg, 4, ""),
passwordId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.protocol.hotel.ReservationRequest}
 */
proto.protocol.hotel.ReservationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.hotel.ReservationRequest;
  return proto.protocol.hotel.ReservationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.hotel.ReservationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.hotel.ReservationRequest}
 */
proto.protocol.hotel.ReservationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartDate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgencyId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasswordId(value);
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
proto.protocol.hotel.ReservationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.hotel.ReservationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.hotel.ReservationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.hotel.ReservationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartDate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEndDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAgencyId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPasswordId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.protocol.hotel.ReservationRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.hotel.ReservationRequest} returns this
 */
proto.protocol.hotel.ReservationRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string start_date = 2;
 * @return {string}
 */
proto.protocol.hotel.ReservationRequest.prototype.getStartDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.hotel.ReservationRequest} returns this
 */
proto.protocol.hotel.ReservationRequest.prototype.setStartDate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string end_date = 3;
 * @return {string}
 */
proto.protocol.hotel.ReservationRequest.prototype.getEndDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.hotel.ReservationRequest} returns this
 */
proto.protocol.hotel.ReservationRequest.prototype.setEndDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string agency_id = 4;
 * @return {string}
 */
proto.protocol.hotel.ReservationRequest.prototype.getAgencyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.hotel.ReservationRequest} returns this
 */
proto.protocol.hotel.ReservationRequest.prototype.setAgencyId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string password_id = 5;
 * @return {string}
 */
proto.protocol.hotel.ReservationRequest.prototype.getPasswordId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.hotel.ReservationRequest} returns this
 */
proto.protocol.hotel.ReservationRequest.prototype.setPasswordId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.hotel.ReservationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.hotel.ReservationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.hotel.ReservationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.hotel.ReservationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
header: (f = msg.getHeader()) && protocol_types_pb.Header.toObject(includeInstance, f),
success: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
confirmationCode: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.protocol.hotel.ReservationResponse}
 */
proto.protocol.hotel.ReservationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.hotel.ReservationResponse;
  return proto.protocol.hotel.ReservationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.hotel.ReservationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.hotel.ReservationResponse}
 */
proto.protocol.hotel.ReservationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new protocol_types_pb.Header;
      reader.readMessage(value,protocol_types_pb.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfirmationCode(value);
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
proto.protocol.hotel.ReservationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.hotel.ReservationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.hotel.ReservationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.hotel.ReservationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      protocol_types_pb.Header.serializeBinaryToWriter
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getConfirmationCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional protocol.Header header = 1;
 * @return {?proto.protocol.Header}
 */
proto.protocol.hotel.ReservationResponse.prototype.getHeader = function() {
  return /** @type{?proto.protocol.Header} */ (
    jspb.Message.getWrapperField(this, protocol_types_pb.Header, 1));
};


/**
 * @param {?proto.protocol.Header|undefined} value
 * @return {!proto.protocol.hotel.ReservationResponse} returns this
*/
proto.protocol.hotel.ReservationResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocol.hotel.ReservationResponse} returns this
 */
proto.protocol.hotel.ReservationResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.hotel.ReservationResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.protocol.hotel.ReservationResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocol.hotel.ReservationResponse} returns this
 */
proto.protocol.hotel.ReservationResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string confirmation_code = 3;
 * @return {string}
 */
proto.protocol.hotel.ReservationResponse.prototype.getConfirmationCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.hotel.ReservationResponse} returns this
 */
proto.protocol.hotel.ReservationResponse.prototype.setConfirmationCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.protocol.hotel);
