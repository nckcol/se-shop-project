#!/bin/bash
git submodule update --init
npm install
npm run build-docs
cd ./se-shop-frontend
npm install
npm run build
cd ../se-shop-external-api-integration
python3 -m venv ./venv
./venv/bin/pip install -r requirements.txt
./venv/bin/python manage.py migrate
cd ../se-shop-backend
sbt compile
cd ../se-shop-android
./gradlew app:assembleRelease