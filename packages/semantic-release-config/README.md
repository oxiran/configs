# semantic-release-config

> Shared semantic-release config of my projects.You can learn more on [**semantic-release**](https://github.com/semantic-release/semantic-release).

## Plugins
This config uses the following plugins:
+ [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer)
+ [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator)
+ [@semantic-release/changelog](https://github.com/semantic-release/changelog)
+ [@semantic-release/npm](https://github.com/semantic-release/npm)
+ [@semantic-release/github](https://github.com/semantic-release/github)
+ [@semantic-release/git](https://github.com/semantic-release/git)

## Install
```shell
npm install --save-dev semantic-release @oxiran/semantic-release-config
```

## Usage
Join in the `extends` of the [semantic-release configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration).

```javascript
// For example in release.config.js.
module.exports = {
  extends: ['@oxiran/semantic-release-config']
}
```
