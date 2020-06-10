import { ButtonComponent } from 'projects/komponentkartan/src/lib/controls/button/button.component';
import { IconComponent } from 'projects/komponentkartan/src/lib/controls/icon/icon.component';
import { IconModule } from 'projects/komponentkartan/src/lib/controls/icon/icon.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import Readme from './icon-button-readme.md';

export const Ikon = () => ({
  moduleMetadata: {
    entryComponents: [ButtonComponent],
    declarations: [ButtonComponent, IconComponent],
    imports: [FontAwesomeModule, IconModule],
  },
  templateUrl: './icon-button-component.html',
});
Ikon.story = {
  parameters: {
    notes: {
      markdown: Readme,
    },
  },
};