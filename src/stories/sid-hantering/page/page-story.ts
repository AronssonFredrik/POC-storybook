import { PageBodyComponent, PageComponent } from 'projects/komponentkartan/src/lib';
import { PageBlockComponent } from 'projects/komponentkartan/src/lib/controls/page-block/page-block.component';

import * as Readme from './page-readme.md';

export const Page = () => ({
  moduleMetadata: {
    entryComponents: [PageComponent],
    declarations: [PageBodyComponent, PageBodyComponent, PageBlockComponent],
  },
  templateUrl: './page-component.html',
});
Page.story = {
  parameters: {
    notes: {
      markdown: Readme,
    },
  },
};
