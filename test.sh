#!/usr/bin/env bash

npm test
if [ "$?" -eq 0 ];then
  status="GREEN"
else
  status="RED"
fi

git add -A
git commit -m "$status $(date +%s)"
