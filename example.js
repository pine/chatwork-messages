'use strict'

// References:
//   - http://developer.chatwork.com/ja/index.html
//   - http://blog-ja.chatwork.com/2013/11/api-preview.html
//   - https://help.chatwork.com/hc/ja/articles/115000019401

// Please set your chatwork API token.
const chatworkMessages = require('./')({ token: 'XXX' })

// Please set room id `41100000`
// if your chat room URL is `https://www.chatwork.com/#!rid41100000`.
chatworkMessages({ roomId: 41100000, force: true })
  .then(messages => console.log(messages))
  .catch(err => console.error(err))
