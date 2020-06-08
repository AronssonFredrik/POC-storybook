import { ButtonComponent } from 'projects/komponentkartan/src/lib/controls/button/button.component';
import { PageBlockComponent } from 'projects/komponentkartan/src/lib/controls/page-block/page-block.component';
import { IconComponent } from 'projects/komponentkartan/src/lib/controls/icon/icon.component';

import ButtonReadme from './example/example.md';
import saveCancelReadMe from './save-cancel/save-cancel.md';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconModule } from 'projects/komponentkartan/src/lib/controls/icon/icon.module';

export default {
  title: 'Button'
};

export const Example = () => ({
  moduleMetadata: {
    entryComponents: [ButtonComponent],
    declarations: [ButtonComponent, PageBlockComponent]
  },
  templateUrl: './example/example.component.html'
});
Example.story = {
  parameters: {
    notes: {
      markdown: ButtonReadme
    }
  }
};

export const SaveCancelLock = () => ({
  moduleMetadata: {
    entryComponents: [ButtonComponent],
    declarations: [ButtonComponent, PageBlockComponent, IconComponent],
    imports: [FontAwesomeModule, IconModule]
  },
  templateUrl: './save-cancel/save-cancel.component.html'
});
SaveCancelLock.story = {
  parameters: {
    notes: {
      markdown: saveCancelReadMe
     }
  }
};
