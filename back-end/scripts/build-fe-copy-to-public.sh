cd ../front-end/
rm -rf build/
yarn build
rm -rf ../back-end/public/
mkdir -p ../back-end/public/
cp -a build/* ../back-end/public/
cd ../back-end/