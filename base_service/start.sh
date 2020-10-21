#!/bin/sh


while true; do
server=`ps aux | grep /mnt/uniappadmin/base_service/main  | grep -v grep`
echo $server
if [ ! "$server" ]; then
nohup  /mnt/uniappadmin/base_service/main -c 1 &
sleep 10
fi
sleep 5
done
