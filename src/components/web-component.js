export default class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const n = document.createElement('div');
    this.shadowRoot.appendChild(n);
    const { h, patch } = window.asmDom;
    const vnode = h('div', {}, [ 'This is Web Components' ]);
    patch(n, vnode);
  }
}