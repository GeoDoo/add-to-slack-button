# \<add-to-slack-button>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i add-to-slack-button
```

## Usage

```html
<script type="module">
  import "add-to-slack-button/add-to-slack-button.js";
</script>

<add-to-slack-button
  endpoint="https://post-your-standup-api.codinginsights.blog/install-url"
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
