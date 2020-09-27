[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)


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

```html
<script type="module">
  import "add-to-slack-button/add-to-slack-button.js";
</script>

<add-to-slack-button
  endpoint="<your endpoint that exposes the OAuth 2.0 install URL>"
  height="60"
></add-to-slack-button>
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
