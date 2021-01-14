# 0.0.3 API Reference

- [MailService](#mailservice)
  - [`constructor(config)`](#constructor-config)
  - [`send(templateName, [templateData, [data]])`](#sendtemplatename-templatedata-data)

## MailService

Class which creates instances to sent emails.

### `constructor([config])`

#### Arguments:
- `config` - *(Object)* optional object with options of the service.
  - `isSendEmail` - *(Boolean)* if `true` then we send emails using mailer service
  - `savedEmailHtmlPath` - *(String)* path to html files
  - `mailgun` - *(Object)* - object with options for `mailgun-js`
    - `apiKey` - *(String)* - Your Mailgun API KEY
    - `publicApiKey` - *(String)* - Your public Mailgun API KEY
    - `domain` - *(String)* - Your Mailgun Domain (Please note: domain field is `MY-DOMAIN-NAME.com`, not `https://api.mailgun.net/v3/MY-DOMAIN-NAME.com`)
    - `mute` - *(Boolena)* - Set to `true` if you wish to mute the console error logs in validateWebhook() function
    - `agent` - The [Agent](https://nodejs.org/docs/latest-v10.x/api/http.html#http_class_http_agent) to use - see [request](https://nodejs.org/docs/latest-v10.x/api/http.html#http_http_request_options_callback) options for the provided values. **Note** When providing an `agent` it must be able to handle the provided (or default) `protocol`.
    - `timeout` - *(Number)* - Request timeout in milliseconds
    - `host` - *(String)* - the mailgun host (default: `'api.mailgun.net'`)
    - `protocol` - *(String)* - the mailgun protocol (default: `'https:'`, possible values: `'http:'` or `'https:'`)
    - `port` - *(String)* - the mailgun port (default: `'443'`)
    - `endpoint` - *(String)* - the mailgun host (default: `'/v3'`)
    - `retry` - *(Number)* - the number of total attempts to do when performing requests. Default is `1`. That is, we will try an operation only once with no retries on error. You can also use a config object compatible with the async library for more control as to how the retries take place. See docs here

#### Example:
```javascript
const mailService = new MailService({
  isSendEmail: false,
  savedEmailHtmlPath: __dirname,
  mailgun: {
    apiKey: 'test',
    domain: 'test.info',
  },
  templatesDir: __dirname,
});
```

### `send(templateName, [templateData, [data]])`

Async function to send email using email template.

#### Arguments:
- `templateName` - *(String)* - name of the template in the directory that was specified in the option `templatesDir`
- `templateData` - *(Object)* - optional object with data that need for constructing resulting html
- `data` - *(Object)* - optional object where we specify data for sending emails
  - `from` - *(String)* - email sender
  - `to` - *(String)* - receiver of the email
  - `subject` - *(String)* - subject of the email

#### Returns:
Promise which resolve data of the mailgun.

#### Example:
```javascript
const mailService = new MailService({
  // ...
});

const result = await mailService.send(
  'email.html',
  { name: 'User name' },
  {
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'test@test.com',
    subject: 'Test email',
  }
);
```
