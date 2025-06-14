import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/text-field/src/vaadin-text-field.js';
import '@vaadin/vertical-layout/src/vaadin-vertical-layout.js';
import '@vaadin/app-layout/src/vaadin-app-layout.js';
import '@vaadin/tooltip/src/vaadin-tooltip.js';
import '@vaadin/horizontal-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/button/src/vaadin-button.js';
import 'Frontend/generated/jar-resources/buttonFunctions.js';
import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/vaadin-lumo-styles/color-global.js';
import '@vaadin/vaadin-lumo-styles/typography-global.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';

const loadOnDemand = (key) => {
  const pending = [];
  if (key === '12d802e85f3396de46de2f80c58580ee2d225d7c28280a609cb19cf66b44d5a1') {
    pending.push(import('./chunks/chunk-26160dc255c9fe9415213b54b4df9793a9b5afcafe5179f053d9f2714b46e049.js'));
  }
  if (key === 'cfb2782b47f65bdb2348c2f3bfffa1e03555d6b33faa63865b8488accd6b5883') {
    pending.push(import('./chunks/chunk-26160dc255c9fe9415213b54b4df9793a9b5afcafe5179f053d9f2714b46e049.js'));
  }
  if (key === '3d0ddf83ef64710cd32bec8adae6f5858a12c8c0c000fd5cc4f65007e18abb04') {
    pending.push(import('./chunks/chunk-2b85016f1cabb717e4158dae3c8677ae41f9291654ee67baa2145b62651a1f1d.js'));
  }
  if (key === '73233d454ab969f6e42d175fc3890eeae6b1a7a1ce185d56857a7f778a9aad96') {
    pending.push(import('./chunks/chunk-2b85016f1cabb717e4158dae3c8677ae41f9291654ee67baa2145b62651a1f1d.js'));
  }
  if (key === '7a86839c3ae3948927e790445fb297ddf19dce12841b23d01e9a747a4f842ecd') {
    pending.push(import('./chunks/chunk-26160dc255c9fe9415213b54b4df9793a9b5afcafe5179f053d9f2714b46e049.js'));
  }
  if (key === '09a6b68ea4e84f22637ae9ec975216c678f1315a87f340a1e6b8d2154e8da098') {
    pending.push(import('./chunks/chunk-26160dc255c9fe9415213b54b4df9793a9b5afcafe5179f053d9f2714b46e049.js'));
  }
  if (key === 'f6e585c0a55492d8c57fdfc95001580680f89736979449540de819b43559aed9') {
    pending.push(import('./chunks/chunk-26160dc255c9fe9415213b54b4df9793a9b5afcafe5179f053d9f2714b46e049.js'));
  }
  if (key === 'e4464952760733adcde679988b2506e77eb01af882892167d406a41ca612d1db') {
    pending.push(import('./chunks/chunk-2b85016f1cabb717e4158dae3c8677ae41f9291654ee67baa2145b62651a1f1d.js'));
  }
  if (key === 'f61b1a7d3cb5831c6701419a97903cd23d23abf6af567f32ed41bd03e0b98435') {
    pending.push(import('./chunks/chunk-2b85016f1cabb717e4158dae3c8677ae41f9291654ee67baa2145b62651a1f1d.js'));
  }
  if (key === '4e45a0a0daded43a15ffc0196878d93f1d609acd06f40067322760cc839b9314') {
    pending.push(import('./chunks/chunk-2b85016f1cabb717e4158dae3c8677ae41f9291654ee67baa2145b62651a1f1d.js'));
  }
  if (key === 'd3a2882f388ce6c8b18e86702d95ecc0cb05658b3369730afb7a3c1f2d6b6237') {
    pending.push(import('./chunks/chunk-975fb8a3e1d255fd3c42d4925f8b2a34cca3c1dacd4a2e20a64c81450711bf85.js'));
  }
  if (key === '2fb5d820728a3862e99a9fc6446b4b5feaf77970faf348149f59df151f27ccd1') {
    pending.push(import('./chunks/chunk-26160dc255c9fe9415213b54b4df9793a9b5afcafe5179f053d9f2714b46e049.js'));
  }
  if (key === '1a0a9a312487c5ecc9c6beed8ee7836f7bb4bf805b128795e950f5fe2f4da883') {
    pending.push(import('./chunks/chunk-2b85016f1cabb717e4158dae3c8677ae41f9291654ee67baa2145b62651a1f1d.js'));
  }
  return Promise.all(pending);
}

window.Vaadin = window.Vaadin || {};
window.Vaadin.Flow = window.Vaadin.Flow || {};
window.Vaadin.Flow.loadOnDemand = loadOnDemand;
window.Vaadin.Flow.resetFocus = () => {
 let ae=document.activeElement;
 while(ae&&ae.shadowRoot) ae = ae.shadowRoot.activeElement;
 return !ae || ae.blur() || ae.focus() || true;
}