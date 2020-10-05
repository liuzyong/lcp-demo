#!/bin/sh


while true; do
ps aux | grep /mnt/uniappadmin/base_service/main  | grep -v grep
if [ ! "$server" ]; then
nohup  /mnt/uniappadmin/base_service/main -c 1 &
sleep 10
fi
sleep 5
done
