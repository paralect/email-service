# Email service

[![Stack](https://raw.githubusercontent.com/paralect/stack/master/stack-component-template/stack.png)](https://github.com/paralect/stack)

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
[![npm version](https://badge.fury.io/js/%40paralect%2Femail-service.svg)](https://badge.fury.io/js/%40paralect%2Femail-service) 
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Build Status](http://product-stack-ci.paralect.com/api/badges/paralect/email-service/status.svg)](http://product-stack-ci.paralect.com/paralect/email-sercice)
[![David Dependancy Status](https://david-dm.org/paralect/email-service.svg)](https://david-dm.org/paralect/email-service)
[![Coverage Status](https://coveralls.io/repos/github/paralect/email-service/badge.svg?branch=master)](https://coveralls.io/github/paralect/email-service?branch=master)


[![Watch on GitHub](https://img.shields.io/github/watchers/paralect/email-service.svg?style=social&label=Watch)](https://github.com/paralect/email-service/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/paralect/email-service.svg?style=social&label=Stars)](https://github.com/paralect/email-service/stargazers)
[![Follow](https://img.shields.io/twitter/follow/paralect.svg?style=social&label=Follow)](https://twitter.com/paralect)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/paralect/stack.svg?style=social)](https://twitter.com/intent/tweet?text=I%27m%20using%20Stack%20components%20to%20build%20my%20next%20product%20🚀.%20Check%20it%20out:%20https://github.com/paralect/stack)

Email service is using [mailgun node client](https://www.npmjs.com/package/mailgun-js) to send emails.
We are inspired by [mjml](https://github.com/mjmlio/mjml) project. So, you can use mjml in your project and
after compiling templates to simple html files use our project to inject params by handlebars and send emails.
Let's dive into the docs.

## Installation

```
npm i @paralect/email-service
```

## Quick example

To create a MailService class you should provide several params to its constructor
```javascript
const MailService = require('@paralect/mail-service-client');

const mailService = new MailService({
  isSendEmail: false, // you can prevent email sending by this param
  savedEmailHtmlPath: __dirname, // if you want to save your email as html in development mode
  mailgun: {  // configs for https://www.npmjs.com/package/mailgun-js
    apiKey: 'test',
    domain: 'test.info',
  },
  templatesDir: __dirname, // absolute path to templates directory
});
```

After that you are able to run **send** method with several params


**send(templateName, templateData, data = {})**

**templateName** - the template name which can be built by **mail-service-build** command (it should contain extension now, for example, report.html)<br />
**templateData** - template data which will be injected to the template <br />
**data** - additional email data (subject, email logo and etc.)

## Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every release is documented on the Github [Releases](https://github.com/paralect/node-mongo/releases) page.

## License

Node-mongo is released under the [MIT License](LICENSE).

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/14125982?v=4" width="100px;"/><br /><sub><b>KuhArt</b></sub>](https://github.com/KuhArt)<br />[💻](https://github.com/paralect/email-service/commits?author=KuhArt "Code") [📖](https://github.com/paralect/email-service/commits?author=KuhArt "Documentation") [🤔](#ideas-KuhArt "Ideas, Planning, & Feedback") [🎨](#design-KuhArt "Design") | [<img src="https://avatars2.githubusercontent.com/u/6461311?v=4" width="100px;"/><br /><sub><b>Evgeny Zhivitsa</b></sub>](https://github.com/ezhivitsa)<br />[💻](https://github.com/paralect/email-service/commits?author=ezhivitsa "Code") [📖](https://github.com/paralect/email-service/commits?author=ezhivitsa "Documentation") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
