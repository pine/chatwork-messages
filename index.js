'use strict'

const got = require('got')
const template = require('lodash.template')

module.exports = defaults => opts => {
  const { token, endpoint, roomId, force } = Object.assign({
    endpoint: 'https://api.chatwork.com/v2/rooms/<%= roomId %>/messages?force=<%= force %>',
    force: false,
  }, defaults, opts)

  const fullPath = template(endpoint)({ roomId, force: +force })
  return got(fullPath, {
    json: true,
    headers: { 'X-ChatWorkToken': token },
  }).then(res => res.body)
}
