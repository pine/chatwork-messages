'use strict'

const http = require('http')
const chatworkMessages = require('./')({ token: 'XXX' })

const MESSAGE = {
  "message_id": "5",
  "account": {
    "account_id": 123,
    "name": "Bob",
    "avatar_image_url": "https://example.com/ico_avatar.png"
  },
  "body": "Hello Chatwork!",
  "send_time": 1384242850,
  "update_time": 0
}

var server
var req
beforeAll(cb => {
  server = http.createServer((_req, res) => {
    req = _req
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify([ MESSAGE ]))
  })
  server.listen(cb)
})

afterAll(() => {
  server.close()
})

test('chatworkMessages', () => {
  const { port } = server.address()
  return chatworkMessages({
    endpoint: `http://127.0.0.1:${port}/v2/rooms/<%= roomId %>/messages?force=<%= force %>`,
    roomId: 12345,
  })
    .then(messages => {
      expect(messages).toEqual([ MESSAGE ])
      expect(req.headers).toHaveProperty('x-chatworktoken', 'XXX')
      expect(req.url).toEqual('/v2/rooms/12345/messages?force=0')
    })
})

test('chatworkMessages (force=1)', () => {
  const { port } = server.address()
  return chatworkMessages({
    endpoint: `http://127.0.0.1:${port}/v2/rooms/<%= roomId %>/messages?force=<%= force %>`,
    roomId: 12345,
    force: true,
  })
    .then(messages => {
      expect(messages).toEqual([ MESSAGE ])
      expect(req.headers).toHaveProperty('x-chatworktoken', 'XXX')
      expect(req.url).toEqual('/v2/rooms/12345/messages?force=1')
    })
})
