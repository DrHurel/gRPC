// package: protocol.hotel
// file: protocol/hotel.proto

import * as protocol_hotel_pb from "../protocol/hotel_pb";
var grpc = require("@improbable-eng/grpc-web").grpc;

var HotelService = (function () {
  function HotelService() {}
  HotelService.serviceName = "protocol.hotel.HotelService";
  return HotelService;
}());

HotelService.FetchRooms = {
  methodName: "FetchRooms",
  service: HotelService,
  requestStream: false,
  responseStream: false,
  requestType: protocol_hotel_pb.FetchRoomPayload,
  responseType: protocol_hotel_pb.FetchRoomResponse
};

HotelService.MakeReservation = {
  methodName: "MakeReservation",
  service: HotelService,
  requestStream: false,
  responseStream: false,
  requestType: protocol_hotel_pb.ReservationRequest,
  responseType: protocol_hotel_pb.ReservationResponse
};

exports.HotelService = HotelService;

function HotelServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

HotelServiceClient.prototype.fetchRooms = function fetchRooms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HotelService.FetchRooms, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

HotelServiceClient.prototype.makeReservation = function makeReservation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(HotelService.MakeReservation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.HotelServiceClient = HotelServiceClient;

