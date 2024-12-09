from protocol.types_pb2 import Header


class ResponseHeader:
    @staticmethod
    def SUCCESS(message):
        return Header(code=200, message=message)

    @staticmethod
    def BAD_ARGUMENTS(message):
        return Header(code=400, message=message)

    @staticmethod
    def INTERNAL_ERROR(message):
        return Header(code=500, message=message)
