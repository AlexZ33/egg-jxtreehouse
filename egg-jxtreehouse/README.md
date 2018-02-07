# jxtreehouse

镜心的小树屋博客网站

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Install Node.js

Use [nvm][nvm] to manage Node versions:

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
$ exit
$ nvm install 9.3
$ nvm alias default 9.3
```

### Install MongoDB

To install MongoDB on Ubuntu 16.04, please refer to [MongoDB Docs][mongo-ubuntu]:

```bash
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
$ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
```

### Development

```bash
$ npm install
$ mkdir /data
$ chmod 775 -R /data
$ mkdir /data/db
$ npm run mongod
$ npm run dev
$ firefox http://localhost:8001/
```

### Deploy

Use `EGG_SERVER_ENV=prod` to enable prod mode

```bash
$ EGG_SERVER_ENV=prod nohup node index.js > stdout.log 2> stderr.log &
```

### 内网环境

To install Node.js on Linux:

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

To install MongoDB on Linux, please refer to [MongoDB Docs][mongo-linux]:

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

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod][autod] for more detail.


[egg]: https://eggjs.org
[nvm]: https://github.com/creationix/nvm
[mongo-ubuntu]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
[mongo-centos]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/
[mongo-linux]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-linux/
[autod]: https://www.npmjs.com/package/autod
