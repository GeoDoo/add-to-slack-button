import { html, css, LitElement } from "lit-element";

export class AddToSlackButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--add-to-slack-button-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      href: { type: String },
      height: { type: Number },
    };
  }

  constructor() {
    super();
    this.href = "";
    this.height = 40;
  }

  firstUpdated() {
    fetch("https://post-your-standup-api.codinginsights.blog/install-url")
      .then((r) => r.json())
      .then((r) => {
        this.href = r.installUrl;
      });
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
