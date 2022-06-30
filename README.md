# DEPRECATED

:warning: This package is no longer maintained.

-----

chatwork-messages
-----------------

[![npm](https://img.shields.io/npm/v/chatwork-messages.svg?style=flat-square)](https://www.npmjs.org/package/chatwork-messages)
[![Build Status](https://img.shields.io/travis/pine/chatwork-messages/master.svg?style=flat-square)](https://travis-ci.org/pine/chatwork-messages)
[![Build Status](https://img.shields.io/appveyor/ci/pine/chatwork-messages/master.svg?style=flat-square&maxAge=2592000)](https://ci.appveyor.com/project/pine/chatwork-messages/branch/master)
[![Dependency Status](https://img.shields.io/david/pine/chatwork-messages.svg?style=flat-square)](https://david-dm.org/pine/chatwork-messages)
[![devDependency Status](https://img.shields.io/david/dev/pine/chatwork-messages.svg?style=flat-square)](https://david-dm.org/pine/chatwork-messages#info=devDependencies)

## Requirements

- Node v6 or later

## Getting started

```
$ yarn add chatwork-messages
```

or

```
$ npm i -S chatwork-messages
```

Enjoy!

```javascript
const chatworkMessages = require('chatwork-messages')({ token: 'XXX' })

chatworkMessages({ roomId: 40000000 })
  .then(messages => console.log(messages))
  .catch(err => console.error(err))
```

## References
### require('chatwork-messages')({ token: 'XXX', ... })
Create fetch message function. Default values are following.

```javascript
{
  force: false,
  endpoint: 'https://api.chatwork.com/v2/rooms/<%= roomId %>/messages?force=<%= force %>',
}
```

### chatworkMessages({ roomId: 1111111, ... })
Fetch chatwork message function.
The following parameters are usable.

```javascript
{
  token: 'XXX',
  force: false,
  endpoint: 'https://api.chatwork.com/v2/rooms/<%= roomId %>/messages?force=<%= force %>',
  roomId: 1234567,
}
```

## License

MIT &copy; Pine Mizune
