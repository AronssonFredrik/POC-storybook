import * as Readme from './tema-readme.md';
import { HeaderMenuComponent, HeaderComponent, PageHeaderComponent } from 'projects/komponentkartan/src/lib';

export default {
  title: 'Tema',
};

export const Tema = () => ({
  moduleMetadata: {
    entryComponents: [HeaderComponent],
    declarations: [HeaderComponent, PageHeaderComponent, HeaderMenuComponent],
  },
  templateUrl: './tema-component.html',
});
Tema.story = {
  parameters: {
    notes: {
      markdown: Readme,
    },
  },
};
