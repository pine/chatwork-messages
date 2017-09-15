chatwork-messages
-----------------

## Getting started

```
$ yarn add chatwork-messages
```

```javascript
const chatworkMessages = require('chatwork-messages')({ token: 'XXX' })

chatworkMessages({ roomId: 40000000 })
  .then(messages => console.log(messages))
  .catch(err => console.error(err))
```

## References
### require('chatwork-messages')({ token: 'XXX', ... })
Create fetch message function. Default values are following.

```
{
  force: false,
  endpoint: 'https://api.chatwork.com/v2/rooms/<%= roomId %>/messages?force=<%= force %>',
}
```

### chatworkMessages({ roomId: 1111111, ... })
Fetch chatwork message function.
The following parameters are usable.

```
{
  token: 'XXX',
  force: false,
  endpoint: 'https://api.chatwork.com/v2/rooms/<%= roomId %>/messages?force=<%= force %>',
  roomId: 1234567,
}
```

## License

MIT &copy; Pine Mizune
