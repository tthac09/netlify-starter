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
  mailTemplateAdmin："您在 tthac09's_blog 上的文章有新评论啦",
  mailSubject: "您在 tthac09's blog 上的评论有新回复啦",
  mailTemplate："您在 tthac09's_blog 上的评论有新回复啦，快来看看呀",
});

module.exports.handler = serverless(http.createServer(app));
