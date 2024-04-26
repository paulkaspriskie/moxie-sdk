#!/bin/sh

FILE_BUILD=$PWD/lib/util/build.sh

if [ ! -x "$FILE_BUILD" ]; then
  chmod +x $FILE_BUILD
fi

if [ -z "${1}" ]; then
  CLI_INPUT='moxie-wiki'
else
  CLI_INPUT=$1
fi

NODE_ENV=production node_modules/.bin/webpack --config ./lib/config/webpack.config.js --entry ./apps/$CLI_INPUT/src/js/index.js