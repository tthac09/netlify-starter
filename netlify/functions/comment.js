process.env.DETA_RUNTIME = 'true';

const http = require('http');
const Waline = require('@waline/vercel');
const serverless = require('serverless-http');

const app = Waline({
  async preSave(comment) {
  const { userInfo } = this.ctx.state;
  comment.status = think.isEmpty(userInfo) ? 'waiting' : 'approved';
  },
  mailSubjectAdmin: "tthac09's blog 有新评论啦",
});

module.exports.handler = serverless(http.createServer(app));
