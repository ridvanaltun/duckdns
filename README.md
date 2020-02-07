# duckdns

> An another updater tool & lib for [DuckDNS](https://www.duckdns.org/).

# Table of Contents

- [duckdns](#duckdns)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Lib Usage](#lib-usage)
- [CLI Usage](#cli-usage)

# Installation

```bash
# for projects
$ npm i duckdns --save

# for cli tool
$ npm i duckdns -g
```

# Lib Usage

```js
const {clear, updateIpAddress} = require('duckdns');

(async function() {
  const res = await updateIpAddress('ip-address', 'your-domain', 'your-token');
  console.log(res);
})();
```

# CLI Usage

```bash
# simple usage
$ duckdns --token abc --ip 0.0.0.0 --domain just4test

# show help
$ duckdns --help
```
