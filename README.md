## 启动后台 
main -config ./conf/app.conf

将 mysql 数据库服务添加到lcp网络下，使得 lcp-back能访问mysql
docker network connect lcp mysql



docker run -d -p 3306:3306 --network  lcp --restart=always  --name mysql  -e MYSQL_ROOT_PASSWORD=root1234   -v e:/docker/mysql/data:/var/lib/mysql  mysql