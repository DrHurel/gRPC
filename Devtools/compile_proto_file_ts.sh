pushd ./services
protoc  --plugin=protoc-gen-ts="client/node_modules/.bin/protoc-gen-ts" --plugin=protoc-gen-js="client/node_modules/.bin/protoc-gen-js" --js_out=import_style="commonjs,binary:client/src/app/generated" --ts_out="service=grpc-web:client/src/app/generated" protocol/*.proto
popd