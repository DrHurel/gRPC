pushd ./services
../.venv/bin/python -m grpc_tools.protoc -I. --python_out=. --pyi_out=.  --grpc_python_out=. protocol/*.proto
protoc --plugin=protoc-gen-ts="client/node_modules/.bin/protoc-gen-ts" --ts_out="service=grpc-web:client/src/app/generated" protocol/*.proto
popd