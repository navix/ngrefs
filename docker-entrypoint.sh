#!/bin/sh

PORT=80 pm2-docker ./dist/server.js --name='ssr'
