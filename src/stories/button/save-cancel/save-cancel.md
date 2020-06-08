# Save Cancel Lock

Är ett designmönster som används vid redigering av data där man kan ändra mellan hoppa mellan read-only läge.

## Implementation

```html
<vgr-button buttonStyle="secondary" (click)="onLockChange()" [disabled]="locked">
    Avbryt
</vgr-button>
<vgr-button type="submit" [disabled]="locked" (click)="onLockChange()">
    Spara
</vgr-button>
<vgr-button [disabled]="!locked" (onClick)="onLockChange()">
    <vgr-icon icon="lock" color="light" *ngIf="locked"></vgr-icon>
    <vgr-icon icon="lock-open" color="light" *ngIf="!locked"></vgr-icon>
</vgr-button>
```


```typescript
@Component({})
export class SaveCancelComponent implements OnInit {
    @Input() locked = true;

    constructor() { }

    ngOnInit(): void {  }

    onLockChange() {
        this.locked = !this.locked;
    }
}
```
