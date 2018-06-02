#!/bin/bash
rm -rf ./node_modules
rm -rf ./docs-html
cd ./se-shop-frontend
rm -rf ./node_modules
rm -rf ./build
cd ../se-shop-external-api-integration
rm -rf ./venv
find ./ -name "*.pyc" -exec rm {} +
cd ../se-shop-backend
rm -rf ./target
rm -rf ./project/target
cd ../se-shop-android
rm -rf ./.gradle
rm -rf ./build
rm -rf ./app/build
rm -rf ./app/release