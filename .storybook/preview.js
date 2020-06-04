import '!style-loader!css-loader!sass-loader!../projects/komponentkartan/src/assets/komponentkartan.scss';

import { addParameters } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import docJson from '../documentation.json';

setCompodocJson(docJson);

addParameters({
  docs: {
    inlineStories: true,
    iframeHeight: '60px',
    container: DocsContainer,
    page: DocsPage,
  }
});