pushd ./services
../.venv/bin/python -m grpc_tools.protoc -I. --python_out=. --pyi_out=.  --grpc_python_out=. protocol/*.proto
protoc --plugin=protoc-gen-ts_proto="client/node_modules/.bin/protoc-gen-ts_proto" --ts_proto_out="client/src/app/generated" --ts_proto_opt=esModuleInterop=true protocol/*.proto
popd