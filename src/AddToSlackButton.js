import { html, css, LitElement } from "lit-element";

export class AddToSlackButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 24px;
      }
    `;
  }

  static get properties() {
    return {
      endpoint: { type: String },
      href: { type: String },
      height: { type: Number },
    };
  }

  constructor() {
    super();
    this.endpoint = "";
    this.href = "";
    this.height = 40;
  }

  async firstUpdated() {
    const { endpoint } = this;

    const response = await fetch(endpoint);
    const data = await response.json();
    this.href = data.installUrl;
  }

  render() {
    const { href, height } = this;

    return html`
      <a href=${href}
        ><img
          alt="Add to Slack"
          height=${height}
          src="https://platform.slack-edge.com/img/add_to_slack.png"
          srcset="
            https://platform.slack-edge.com/img/add_to_slack.png    1x,
            https://platform.slack-edge.com/img/add_to_slack@2x.png 2x
          "
      /></a>
    `;
  }
}
