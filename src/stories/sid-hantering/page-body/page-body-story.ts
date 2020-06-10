import { PageBodyComponent } from 'projects/komponentkartan/src/lib';
import { PageBlockComponent } from 'projects/komponentkartan/src/lib/controls/page-block/page-block.component';

import * as Readme from './page-body-readme.md';

export const PageBody = () => ({
  moduleMetadata: {
    entryComponents: [PageBodyComponent],
    declarations: [PageBodyComponent, PageBlockComponent],
  },
  templateUrl: './page-body-component.html',
});
PageBody.story = {
  parameters: {
    notes: {
      markdown: Readme,
    },
  },
};
