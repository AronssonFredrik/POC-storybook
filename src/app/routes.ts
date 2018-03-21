// Core
import { Routes } from '@angular/router';

// Domain
import { InputfieldsComponent } from './inputfields/inputfields.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MonthpickerComponent } from './monthpicker/monthpicker.component';
import { ColoursComponent } from './colours/colours.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownmultiselectComponent } from './dropdownmultiselect/dropdownmultiselect.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { FormattemplateComponent } from './formattemplate/formattemplate.component';
import { HeadersComponent } from './headers/headers.component';
import { ListsComponent } from './lists/lists.component';
import { LoaderComponent } from './loader/loader.component';
import { LockbuttonComponent } from './lockbutton/lockbutton.component';
import { ClosebuttonComponent } from './closebutton/closebutton.component';
import { ModaldialogComponent } from './modaldialog/modaldialog.component';
import { PanelsComponent } from './panels/panels.component';
import { RadiobuttonsComponent } from './radiobuttons/radiobuttons.component';
import { TextbuttonsComponent } from './textbuttons/textbuttons.component';
import { SavecancelComponent } from './savecancel/savecancel.component';
import { BacktotopComponent } from './backtotop/backtotop.component';
import { StartComponent } from './start/start.component';
import { ThemingComponent } from './theming/theming.component';
import { TitleValueComponent } from './title-value/title-value.component';
import { FiltertexboxComponent } from './filtertexbox/filtertexbox.component';
import { PageStructureComponent } from './page-structure/page-structure.component';
import { CardComponent } from './card/card.component';
import { SizesComponent } from './sizes/sizes.component';
import { MenuComponent } from './menu/menu.component';
import { ListexampleComponent } from './lists/examples/withnotifications/listexample.component';
import { ListcodeexampleComponent } from './lists/examples/simple/listcodeexample.component';
import { ListExampleWithActionButtonsComponent } from './lists/examples/withactionbuttons/listexamplewithactionbuttons.component';
import { ReactiveformsexampleComponent } from './reactiveforms-example/reactiveforms-example.component';
import { ExpandableDivComponent } from './expandable-div/expandable-div.component';
import { ListexamplewithexpandabledivComponent } from './lists/examples/withexpandablediv/listexamplewithexpandablediv.component';
import { ExamplesListwithcardsComponent } from './examples-listwithcards/examples-listwithcards.component';
import { ExamplesListwithlistsComponent } from './examples-listwithlists/examples-listwithlists.component';

import { IconsComponent } from './icons/icons.component';
import { ActionPanelsComponent } from './actionpanels/actionpanels.component';

export const appRoutes: Routes = [

    { path: 'inputFields', component: InputfieldsComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'textbuttons', component: TextbuttonsComponent },
    { path: 'radioButtons', component: RadiobuttonsComponent },
    { path: 'checkbox', component: CheckboxComponent },
    { path: 'closebutton', component: ClosebuttonComponent },
    { path: 'colours', component: ColoursComponent },
    { path: 'dropdownmultiselect', component: DropdownmultiselectComponent },
    { path: 'dropdowns', component: DropdownsComponent },
    { path: 'datepicker', component: DatepickerComponent },
    { path: 'monthpicker', component: MonthpickerComponent },
    { path: 'formattemplate', component: FormattemplateComponent },
    { path: 'headers', component: HeadersComponent },
    { path: 'loader', component: LoaderComponent },
    { path: 'lists', component: ListsComponent },
    { path: 'listexample-notifications', component: ListexampleComponent },
    { path: 'lockbutton', component: LockbuttonComponent },
    { path: 'panels', component: PanelsComponent },
    { path: 'modaldialog', component: ModaldialogComponent },
    { path: 'savecancel', component: SavecancelComponent },
    { path: 'backtotop', component: BacktotopComponent },
    { path: '', component: StartComponent },
    { path: 'theming', component: ThemingComponent },
    { path: 'titlevalue', component: TitleValueComponent },
    { path: 'filtertextbox', component: FiltertexboxComponent },
    { path: 'pagestructure', component: PageStructureComponent },
    { path: 'card', component: CardComponent },
    { path: 'sizes', component: SizesComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'listexample-simple', component: ListcodeexampleComponent },
    { path: 'listexample-actionbuttons', component: ListExampleWithActionButtonsComponent },
    { path: 'reactiveformsexample', component: ReactiveformsexampleComponent },
    { path: 'expandablediv', component: ExpandableDivComponent },
    { path: 'listexample-expandable-div', component: ListexamplewithexpandabledivComponent },
    { path: 'examples-listwithcards', component: ExamplesListwithcardsComponent },
    { path: 'examples-listwithlists', component: ExamplesListwithlistsComponent },
    { path: 'actionPanels', component: ActionPanelsComponent },
    { path: '**', redirectTo: '/' }
];
