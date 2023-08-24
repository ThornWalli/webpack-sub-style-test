import { defineAsyncComponent, defineCustomElement } from 'vue'

import Component0 from './components/Example.vue';

const defineTags = () => {
  [
    ['custom-element-example', (typeof Component0 === 'function' ? (new Component0).$options : Component0), {"props":{"title":"Live Example"}}]
  ].forEach(([name, component, options]) => {
    const CustomElement = defineCustomElement(component, options);
    window.customElements.define(name, CustomElement);
  })
};



const setup = () => {
  defineTags();
};

setup();
