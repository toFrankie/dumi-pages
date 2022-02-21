---
nav:
  title: require() 路径查找
  path: /blogs/node/require
---

`require()` 参数很简单，那么 `require()` 内部是如何查找模块的呢？

简单可以分为几类：

- 加载 Node 内置模块，形式如：`require('fs')`、`require('http')` 等。
- 相对路径、绝对路径加载模块，形式如：`require('./file')`、`require('../file')`、`require('/file')`。
- 加载第三方模块（即非内置模块），形式如：`require('react')`、`require('lodash/debounce')`、`require('some-library')`、`require('#some-library')` 等。

其中以绝对路径形式在实际中几乎不用、而 `require('#some-library')` 形式目前仍在试验阶段...
