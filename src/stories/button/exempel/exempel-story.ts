import { ButtonComponent } from 'projects/komponentkartan/src/lib/controls/button/button.component';
import { PageBlockComponent } from 'projects/komponentkartan/src/lib';

import Readme from './exempel-readme.md';

export const Exempel = () => ({
  moduleMetadata: {
    entryComponents: [ButtonComponent],
    declarations: [ButtonComponent, PageBlockComponent],
  },
  templateUrl: './exempel-component.html',
});
Exempel.story = {
  parameters: {
    notes: {
      markdown: Readme,
    },
  },
};
