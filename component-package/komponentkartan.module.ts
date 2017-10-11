// Core
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Common
import { ModalService } from './services/modalService';
import { SafePipe } from './pipes/safePipe';
import { TruncatePipe } from './pipes/truncatePipe';
import { FilterPipe } from './pipes/filterPipe';
import * as $ from 'jquery';

// UI Components
import { DropdownItemToSelectedTextPipe } from './pipes/dropdownItemToSelectedTextPipe';
import { DropdownComponent } from './controls/dropdown/dropdown.component';
import { DropdownMultiselectComponent } from './controls/dropdown-multiselect/dropdown-multiselect.component';
import { FilterTextboxComponent } from './controls/filterTextbox/filterTextbox.component';
import { ExpandableContainerComponent } from './controls/expandableContainer/expandableContainer.component';
import { ExpandableContainerJqeuryHelper } from './controls/expandableContainer/expandableContainerJqueryHelper';
import { ExpandableContainerListComponent } from './controls/expandableContainerList/expandableContainerList.component';
import { ButtonComponent } from './controls/button/button.component';
import { LockButtonComponent } from './controls/lockButton/lockButton.component';
import { SaveCancelComponent } from './controls/saveCancel/saveCancel.component';
import { PageHeaderComponent } from './controls/pageHeader/pageHeader.component';
import { RadioGroupComponent } from './controls/radioGroup/radioGroup.component';
import { HeaderComponent } from './controls/header/header.component';
import { LoginInformationComponent } from './controls/loginInformation/loginInformation.component';
import { MenuComponent } from './controls/sidebar-menu/menu.component';
import { SidebarMenuComponent } from './controls/sidebar-menu/sidebarMenu.component';
import { HeaderMenuComponent } from './controls/headerMenu/headerMenu.component';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ModalPlaceholderComponent } from './controls/modal/modal.component';
import { MonthpickerComponent } from './controls/monthpicker/monthpicker.component';
import { DatepickerComponent } from './controls/datepicker/datepicker.component';
import { InputComponent } from './controls/input/input.component';
import { CardComponent } from './controls/card/card.component';
import { CardSectionComponent } from './controls/card/cardSection.component';
import { TitleValueComponent } from './controls/titleValue/titleValue.component';
import { LoaderComponent } from './controls/loader/loader.component';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
        BrowserAnimationsModule
    ],

    declarations: [
        SafePipe,
        TruncatePipe,
        FilterPipe,
        DropdownItemToSelectedTextPipe,
        DropdownComponent,
        FilterTextboxComponent,
        ExpandableContainerComponent,
        ExpandableContainerListComponent,
        ButtonComponent,
        LockButtonComponent,
        SaveCancelComponent,
        PageHeaderComponent,
        RadioGroupComponent,
        LoginInformationComponent,
        HeaderComponent,
        MenuComponent,
        SidebarMenuComponent,
        HeaderMenuComponent,
        CheckboxComponent,
        ModalPlaceholderComponent,
        DropdownMultiselectComponent,
        MonthpickerComponent,
        DatepickerComponent,
        InputComponent,
        CardComponent,
        CardSectionComponent,
        TitleValueComponent,
        LoaderComponent
    ],
    exports: [
        SafePipe,
        TruncatePipe,
        FilterPipe,
        DropdownItemToSelectedTextPipe,
        DropdownComponent,
        FilterTextboxComponent,
        ExpandableContainerComponent,
        ExpandableContainerListComponent,
        ButtonComponent,
        LockButtonComponent,
        SaveCancelComponent,
        PageHeaderComponent,
        RadioGroupComponent,
        HeaderComponent,
        MenuComponent,
        SidebarMenuComponent,
        LoginInformationComponent,
        HeaderMenuComponent,
        PerfectScrollbarModule,
        CheckboxComponent,
        ModalPlaceholderComponent,
        DropdownMultiselectComponent,
        MonthpickerComponent,
        DatepickerComponent,
        InputComponent,
        CardComponent,
        CardSectionComponent,
        TitleValueComponent,
        LoaderComponent
    ],
    providers: [ModalService, ExpandableContainerJqeuryHelper]
})

export class KomponentkartanModule { }
