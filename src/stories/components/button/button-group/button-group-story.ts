import { ButtonComponent } from 'projects/komponentkartan/src/lib/controls/button/button.component';
import { PageBlockComponent } from 'projects/komponentkartan/src/lib/controls/page-block/page-block.component';
import { IconComponent } from 'projects/komponentkartan/src/lib/controls/icon/icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconModule } from 'projects/komponentkartan/src/lib/controls/icon/icon.module';

import * as Readme from './button-group-readme.md';

export const Grupperad = () => ({
  moduleMetadata: {
    entryComponents: [ButtonComponent],
    declarations: [ButtonComponent, PageBlockComponent, IconComponent],
    imports: [FontAwesomeModule, IconModule],
  },
  templateUrl: './button-group-component.html',
});
Grupperad.story = {
  parameters: {
    notes: {
      markdown: Readme,
    },
  },
};
