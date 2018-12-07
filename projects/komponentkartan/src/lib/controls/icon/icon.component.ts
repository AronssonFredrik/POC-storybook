import { Component, Input } from '@angular/core';

@Component({
  selector: 'vgr-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {
  @Input() icon: string;
  @Input() solid = true;
  @Input() size = '';
  @Input() neutral = false;
  @Input() disabled = false;
  @Input() focusable = true;
  @Input() ariaLabel = '';

  get tabindex(): number {
    return this.focusable ? 0 : -1;
  }

  get prefix(): string {
    return this.solid ? 'fas' : 'far';
  }
}
