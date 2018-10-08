# SCMQ -  Many Project Start Manage

[![NPM version](https://img.shields.io/npm/v/scmq.svg?style=flat)](https://npmjs.org/package/scmq)

---
[中文文档](https://github.com/KnoveZ/scmq/blob/master/README.CN.MD)
## Features

* **Quickly**:  Only once configuration, one key start!
* **Flexible**: Custom directory and boot mode configuration
* **Group**: Multiple project groups, easy to manage
* **No Interference**: Do not affect the original startup characteristics
## Install

```bash
npm install scmq -g
```
## Usages
### On cmd/PowerShell... (Windows)
When you have two project need to start.
```javascript
// see all config
scmq list
// add a group, named: G1          
scmq add g G1
// add a project to G1 : named: p1, directory: D:\p1 , start command: npm start
scmq add G1 p1 D:\p1 "npm start"
// add a project2 to G1 : named: p2, directory: D:\p2 , start command: npm start
scmq add G1 p2 D:\p2 "npm start"
// start !
scmq
```
When you have 2 group (3 project) need to start
```javascript
// see all config
scmq list
// add a group, named: G1          
scmq add g G1
// add a project to G1 : named: p1, directory: D:\p1 , start command: npm start
scmq add G1 p1 D:\p1 "npm start"
// add a project2 to G1 : named: p2, directory: D:\p2 , start command: npm start
scmq add G1 p2 D:\p2 "npm start"
// add a group, named: G2         
scmq add g G2
// add a project to G2 : named: p3, directory: D:\p3 , start command: npm start
scmq add G2 p3 D:\p3 "npm start"
// start G2 !
scmq start G2
// may start G1 !
scmq
```
When you have been configured, the second day want to start :D
```javascript
// start G1！
scmq
```
When you want change the default start group
```javascript
// start G1！
scmq
// may also start G1!
scmq start G1
// set default start group
scmq use G2
// may start G2!
scmq 
```
## API
### scmq list
* **view config**: view all config 
### scmq add <1> <2> <3> <4>
if <1> is "group" or "g", program may add group. now:
* **scmq add group <1>**
* **<1>** group name, Not allowed to repeat.
* **example**: scmq add group G1 // add one group, named G1

if <1> not is "group" or "g", program may add project. now: 
* **scmq add <1> <2> <3> <4>** 
* **<1>** location group name
* **<2>** project name, Not allowed to repeat.
* **<3>** project directory
* **<4>** project start command
* **example**: scmq add G1 p1 D:\p1 "npm start" //add a project to G1 : named: p1, directory: D:\p1 , start command: npm start
### scmq & scmq start / run 
* **scmq start <1>**
* **<1>** optional, group name.If it is empty, the default will be run.
### scmq use
* **scmq use <1>**
* **<1>** Specify the default start Group.
### scmq remove <1> <2> <3> <4>
if <1> is "group" or "g", program may remove group. now:
* **scmq remove group <1>**
* **<1>** group name
* **example**: scmq remove group G1 // remove G1 group

if <1> not is "group" or "g", program may remove project. now: 
* **scmq remove <1> <2>** 
* **<1>** location group name
* **<2>** project name.
* **example**: scmq remove G1 p1 // Remove the p1 project in the G1 group
### scmq version
* **version**: see version
