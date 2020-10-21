#!/bin/sh

export GOPROXY=https://goproxy.io
cd /mnt/uniappadmin/base_service
/mnt/go/bin/go  mod tidy
/mnt/go/bin/go build main.go
chmod 755 /mnt/uniappadmin/base_service/start.sh
nohup /mnt/uniappadmin/base_service/start.sh &


#start mysql
/etc/init.d/mysql start
# start uniappadmin
cd /mnt/uniappadmin/adminEditor
nohup npm start &
nohup npm run dev &
cd /mnt/uniappadmin/admin
nohup npm run dev &
nohup /mnt/uniappadmin/base_service/main &
npm start


while true; do
server=`ps aux | grep /mnt/uniappadmin/base_service/main  | grep -v grep`
echo $server
if [ ! "$server" ]; then
nohup  /mnt/uniappadmin/base_service/main -c 1 &
sleep 10
fi
sleep 5
done
