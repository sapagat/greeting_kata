#!/usr/bin/env bash
OUTPUT=/tmp/kata-tracker.txt

npm test | tee $OUTPUT
if [ "${PIPESTATUS[0]}" -eq 0 ];then
  status="GREEN"
else
  status="RED"
fi

git add -A
message="$status $(date +%s)"
description="$(cat $OUTPUT)"
git commit -m "$message" -m "$description"
