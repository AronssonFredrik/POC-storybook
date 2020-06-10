import { ButtonComponent } from 'projects/komponentkartan/src/lib/controls/button/button.component';
import { PageBlockComponent } from 'projects/komponentkartan/src/lib/controls/page-block/page-block.component';
import { IconComponent } from 'projects/komponentkartan/src/lib/controls/icon/icon.component';
import { IconModule } from 'projects/komponentkartan/src/lib/controls/icon/icon.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import Readme from './spara-avbryt-readme.md';

export const SparaAvbryt = () => ({
  moduleMetadata: {
    entryComponents: [ButtonComponent],
    declarations: [ButtonComponent, PageBlockComponent, IconComponent],
    imports: [FontAwesomeModule, IconModule],
  },
  templateUrl: './spara-avbryt-component.html',
});
SparaAvbryt.story = {
  parameters: {
    notes: {
      markdown: Readme,
    },
  },
};
