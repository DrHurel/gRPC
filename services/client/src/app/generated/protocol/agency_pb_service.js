// package: protocol.agency
// file: protocol/agency.proto

var protocol_agency_pb = require("../protocol/agency_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AgencyServices = (function () {
  function AgencyServices() {}
  AgencyServices.serviceName = "protocol.agency.AgencyServices";
  return AgencyServices;
}());

AgencyServices.CheckAvailability = {
  methodName: "CheckAvailability",
  service: AgencyServices,
  requestStream: false,
  responseStream: false,
  requestType: protocol_agency_pb.AvailabilityRequest,
  responseType: protocol_agency_pb.AvailabilityResponse
};

AgencyServices.MakeReservation = {
  methodName: "MakeReservation",
  service: AgencyServices,
  requestStream: false,
  responseStream: false,
  requestType: protocol_agency_pb.ReservationRequest,
  responseType: protocol_agency_pb.ReservationResponse
};

AgencyServices.FetchRooms = {
  methodName: "FetchRooms",
  service: AgencyServices,
  requestStream: false,
  responseStream: false,
  requestType: protocol_agency_pb.FetchRoomPayload,
  responseType: protocol_agency_pb.FetchRoomResponse
};

exports.AgencyServices = AgencyServices;

function AgencyServicesClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AgencyServicesClient.prototype.checkAvailability = function checkAvailability(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgencyServices.CheckAvailability, {
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

AgencyServicesClient.prototype.makeReservation = function makeReservation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgencyServices.MakeReservation, {
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

AgencyServicesClient.prototype.fetchRooms = function fetchRooms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AgencyServices.FetchRooms, {
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

exports.AgencyServicesClient = AgencyServicesClient;

