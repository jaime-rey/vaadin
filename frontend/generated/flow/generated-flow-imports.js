import '@vaadin/tooltip/src/vaadin-tooltip.js';
import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/message-input/src/vaadin-message-input.js';
import 'Frontend/generated/jar-resources/messageListConnector.js';
import '@vaadin/message-list/src/vaadin-message-list.js';
import '@vaadin/vertical-layout/src/vaadin-vertical-layout.js';
import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/vaadin-lumo-styles/color-global.js';
import '@vaadin/vaadin-lumo-styles/typography-global.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';

const loadOnDemand = (key) => {
  const pending = [];
  if (key === '517f1fe759e244ef00bbd2fd6d0e22e9f36b7162cbaaadedddd7bae8d7d6870f') {
    pending.push(import('./chunks/chunk-517f1fe759e244ef00bbd2fd6d0e22e9f36b7162cbaaadedddd7bae8d7d6870f.js'));
  }
  return Promise.all(pending);
}

window.Vaadin = window.Vaadin || {};
window.Vaadin.Flow = window.Vaadin.Flow || {};
window.Vaadin.Flow.loadOnDemand = loadOnDemand;