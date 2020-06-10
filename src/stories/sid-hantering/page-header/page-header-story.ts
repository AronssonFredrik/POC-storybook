import { PageHeaderComponent, ButtonComponent } from 'projects/komponentkartan/src/lib';
import { PageBlockComponent } from 'projects/komponentkartan/src/lib/controls/page-block/page-block.component';

import * as Readme from './page-header-readme.md';

export const PageHeader = () => ({
  moduleMetadata: {
    entryComponents: [PageHeaderComponent],
    declarations: [PageHeaderComponent, PageBlockComponent, ButtonComponent],
  },
  templateUrl: './page-header-component.html',
});
PageHeader.story = {
  parameters: {
    notes: {
      markdown: Readme,
    },
  },
};
