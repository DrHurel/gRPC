pushd ./docker
sudo docker compose down -v
sudo docker compose up --build 
popd