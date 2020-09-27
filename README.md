[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/add-to-slack-button)

# \<add-to-slack-button>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i add-to-slack-button
```

## Usage

This component is supposed to be used when you have an app that needs to generate an OAuth 2.0 dynamic install URL. The limitation of this package is that you will need to expose this URL to an endpoint (within your app or separate API?) in this form:

```json
{
  "installUrl": "<the dynamic URL here>"
}
```

More info about OAuth in [The OAuth Flow](https://api.slack.com/legacy/oauth#authenticating-users-with-oauth__the-oauth-flow)

```html
<script type="module">
  import "add-to-slack-button/add-to-slack-button.js";
</script>

<add-to-slack-button
  endpoint="<your endpoint that exposes the OAuth 2.0 install URL>"
  height="60"
></add-to-slack-button>
```

If you want to use it for your website, you can also do the following:

```html
<!-- Polyfills if needed -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-loader.js"></script>
<script
  type="module"
  src="https://unpkg.com/add-to-slack-button@latest/add-to-slack-button.js?module"
></script>
<add-to-slack-button
  endpoint="<your endpoint that exposes the OAuth 2.0 install URL>"
></add-to-slack-button>
```

## Live demo

You can check the Add to Slack button on the sidebar of my blog: https://geodoo.work

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
