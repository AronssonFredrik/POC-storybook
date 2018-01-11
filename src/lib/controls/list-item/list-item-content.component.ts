import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'vgr-list-item-content',
    moduleId: module.id,
    template: `<ng-content></ng-content>`
})

export class ListItemContentComponent {
    constructor() {
    }
}
