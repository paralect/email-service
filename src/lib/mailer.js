const mailgun = require('@paralect/mailgun-js');
const assert = require('assert');

const logger = require('./logger');

class Mailer {
  constructor(config) {
    assert.ok(config.apiKey);
    assert.ok(config.domain);

    this.mailgun = mailgun(config);
  }

  send(data) {
    return new Promise((resolve, reject) => {
      this.mailgun.messages().send(data, (err, body) => {
        if (err) {
          logger.error("Email hasn't been sent...", err);
          return reject(err);
        }
        return resolve(body);
      });
    });
  }
}

module.exports = Mailer;
