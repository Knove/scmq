# SCMQ Quick Project Start

[![NPM version](https://img.shields.io/npm/v/scmq.svg?style=flat)](https://npmjs.org/package/scmq)
[![NPM downloads](http://img.shields.io/npm/dm/scmq.svg?style=flat)](https://npmjs.org/package/scmq)

FOR Node.js

---
[中文文档](https://github.com/KnoveZ/scmq/blob/master/README.CN.MD)
## Features

* **quickly DIY config**:  No longer go through folders and change configuration directly
* **Quckly**: One button can be started, convenient and quick

## Install

```bash
npm install scmq -g
```
## Usages
### On cmd/PowerShell... (Windows)

```javascript
scmq config-set dir1 D:/xxx/xxx  // set primary project path
scmq config-set dir2 D:/xxx/xxx  // set secondary project path
scmq config-set type dev         // set run type
scmq config                      // see config
scmq go                          // go!
```
## API
### scmq config 
* **view config**: view all config , inclues dir1, dir2, type
### scmq config-set 
* **set config**: set config , have : dir1, dir2, type.
type only use [dev, tst, test]
* **eg**: scmq config-set dir1 D:/choice/merchants
### scmq go
* **start!**: go! but must config set first.
### scmq version
* **version**: see version