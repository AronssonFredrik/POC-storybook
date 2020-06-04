import { ButtonComponent } from 'projects/komponentkartan/src/lib/controls/button/button.component';
import { PageBlockComponent } from 'projects/komponentkartan/src/lib/controls/page-block/page-block.component';
import {
  select,
  boolean,
  number,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import ButtonReadme from './button-all-examples/button-all-examples.md';

export default {
  title: 'Button',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: ButtonReadme }
  }
};

export const Example = () => ({
  moduleMetadata: {
    entryComponents: [ButtonComponent],
    declarations: [ButtonComponent, PageBlockComponent],
  },
  templateUrl: './button-all-examples/button-all-examples.component.html',
  // props: {
  //   text: 'Action only'
  // },
});

export const SaveCancle = () => ({
  moduleMetadata: {
    entryComponents: [ButtonComponent],
    declarations: [ButtonComponent],
  }

});

export const Playground = () => ({
  moduleMetadata: {
    entryComponents: [ButtonComponent],
    declarations: [ButtonComponent],
  },
  template: `<vgr-button [disabled]="disabled" [buttonStyle]="buttonStyle">
  Playground
  </vgr-button>`,

  props: {
    buttonStyle: select(
      'buttonStyle',
      ['primary', 'secondary', 'discreet'],
      'primary'
    ),
    disabled: boolean('disabled', false),
  },
});
