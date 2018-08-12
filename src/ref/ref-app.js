import { RefElement, html } from './ref-element.js';
import './ref-form.js';
import './ref-table.js';

const hostStyle = {
  display: 'block',
};

const formStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
}

export class RefApp extends RefElement {
  static get properties() {
    return {
      rows: Number,
      cols: Number,
    };
  }

  constructor() {
    super();
    this.rows = 8;
    this.cols = 8;
  }

  _renderHost({ at }) {
    return {
      ...at(hostStyle),
    };
  }

  _render({ rows, cols, cl }) {
    return html`
      <ref-form
        class$="${cl(formStyle)}"
        rows="${rows}"
        cols="${cols}"
        on-rows-changed="${this.__onRowsChanged.bind(this)}"
        on-cols-changed="${this.__onColsChanged.bind(this)}"
      ></ref-form>
      <div>
        <ref-table
          rows="${rows}"
          cols="${cols}"
        ></ref-table>
      </div>
    `;
  }

  __onRowsChanged(event) {
    this.rows = event.detail.value;
  }

  __onColsChanged(event) {
    this.cols = event.detail.value;
  }
}

customElements.define('ref-app', RefApp);