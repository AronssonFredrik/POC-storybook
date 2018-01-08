import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'vgr-example-layout',
    templateUrl: 'example-layout.component.html'
})
export class ExampleLayoutComponent {
    constructor() { }

    onExpandedChanged(isExpanded: boolean) {
        console.log(isExpanded ? 'expanded' : 'collapsed');
    }
}
