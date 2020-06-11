import { PageBlockComponent, DropdownSelectComponent, DropdownItemComponent, IconComponent } from 'projects/komponentkartan/src/lib';
import { IconModule } from 'projects/komponentkartan/src/lib/controls/icon/icon.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import * as Readme from './exempel-readme.md';

export const Exempel = () => ({
  moduleMetadata: {
    entryComponents: [DropdownSelectComponent],
    declarations: [DropdownSelectComponent, DropdownItemComponent, PageBlockComponent, IconComponent],
    imports: [FontAwesomeModule, IconModule],
  },
  templateUrl: './exempel-component.html',
  props: {
    items: ['Apelsin', 'Banan', 'Citron']
  }
});
Exempel.story = {
  parameters: {
    notes: {
      markdown: Readme,
    }
  }
};
