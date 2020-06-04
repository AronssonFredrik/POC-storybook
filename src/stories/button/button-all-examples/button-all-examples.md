# Button

## Användning
Import it via script tag:

```html
<vgr-button>Klicka på mig!</vgr-button>
```
## Properties
Följande props finns tillgängliga till `vgr-button`.

| Prop | Type | Description | Example | Default |
| ------------- |-------------| -----| -----|
| disabled | boolean | Inaktivera knapp | [disabled]="true" | false |
| button-style | string | Ändra utseende. Möjliga värden är primary/secondary/discreet. Default är primary. | buttonStyle="secondary" | primary |

## Event Emitters

| Prop | Description | Example |
| ------------- |-------------| -----| -----|
| click | Event när knapp trycks ner | (click)="onClick()" |


## Accessibility

| Keystroke | Notes |
| --------- |------ |
| `Enter` | triggers an action or event |
| `Space` | triggers an action or event |