# jxtreehouse

镜心的小树屋博客网站

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 安装 Node.js

推荐使用 [nvm][nvm] 来管理Node版本：

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
$ exit
$ nvm install 9.3
$ nvm alias default 9.3
```

### 安装 MongoDB

在 Ubuntu 16.04 上安装 MongoDB 可参考 [MongoDB Docs][mongo-ubuntu]：

```bash
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
$ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
```

### 本地开发

```bash
$ npm install
$ mkdir /data
$ chmod 775 -R /data
$ mkdir /data/db
$ npm run mongod
$ npm run dev
$ firefox http://localhost:8001/
```

### 部署

线上正式环境用 `EGG_SERVER_ENV=prod` 来启动。

```bash
$ EGG_SERVER_ENV=prod nohup node index.js > stdout.log 2> stderr.log &
```

### 内网环境

在 Linux 上安装 Node.js：

```bash
$ curl -O https://nodejs.org/dist/v8.4.0/node-v8.4.0-linux-x64.tar.xz
$ tar -xvf node-v8.4.0-linux-x64.tar.xz
$ mv node-v8.4.0-linux-x64 nodejs
$ vi ~/.bashrc
export NODE_HOME=/home/root/nodejs
export PATH=$PATH:$NODE_HOME/bin
export NODE_PATH=$NODE_HOME/lib/node_modules
export EGG_SERVER_ENV=prod
```

在 Linux 上安装 MongoDB 可参考 [MongoDB Docs][mongo-linux]：

```bash
$ curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.4.7.tgz
$ tar -zxvf mongodb-linux-x86_64-3.4.7.tgz
$ mv mongodb-linux-x86_64-3.4.7 mongodb
$ vi ~/.bashrc
export PATH=/home/root/mongodb/bin:$PATH
$ mkdir /data
$ chmod 775 -R /data
$ mkdir /data/db
$ /home/root/mongodb/bin/mongod --dbpath=/data/db/ --logpath=/data/db/mongod.log --fork
```

### 单元测试
- [egg-bin][egg-bin] 内置了 [mocha][mochajs], [power-assert][power-assert], [istanbul][istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert][power-assert]。
- 具体参见 [egg 文档 -单元测试][egg-unittest]。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod][autod] 。


[egg]: https://eggjs.org
[nvm]: https://github.com/creationix/nvm
[mongo-ubuntu]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
[mongo-centos]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/
[mongo-linux]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-linux/
[egg-bin]: https://github.com/eggjs/egg-bin
[mochajs]: https://mochajs.org/
[power-assert]: https://github.com/power-assert-js/power-assert
[istanbul]: https://github.com/gotwarlost/istanbul
[egg-unittest]: https://eggjs.org/zh-cn/core/unittest
[autod]: https://www.npmjs.com/package/autod
