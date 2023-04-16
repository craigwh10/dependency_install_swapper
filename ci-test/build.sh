# chmod +x ./build.sh
docker build -t ci-dis-test -f ./dockerfile ../ &> ./build.log
