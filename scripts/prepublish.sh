#!/usr/bin/env sh

# abort on errors
set -e

# prettify and lint
npm run prettify && npm run lint

# build
npm run build
