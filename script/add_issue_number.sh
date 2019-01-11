#!/usr/bin/env bash

COMMIT_MSG_FILE=$1

branch_name=`git rev-parse --abbrev-ref HEAD`
issue_number=`echo ${branch_name} | cut -d '-' -f1`
first_line = `head -n1 ${COMMIT_MSG_FILE}`

# if COMMIT_MSG_FILE's first_line is empth,
# add issue number in commit_msg
if [ -z "$first_line"]; then
    sed -i ".bak" "1s/^/[#$issue_number] /" ${COMMIT_MSG_FILE}
fi
