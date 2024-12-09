pushd ./services
python -m grpc_tools.protoc -I. --python_out=. --pyi_out=.  --grpc_python_out=. protocol/*.proto
popd