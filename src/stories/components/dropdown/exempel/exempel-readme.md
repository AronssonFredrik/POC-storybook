# Dropdown

## Användning
Import it via:

```html
<vgr-dropdown-select>
    <vgr-dropdown-item *ngFor="let item of items" [value]="item">{{item}}</vgr-dropdown-item>
</vgr-dropdown-select>
```

## Properties
Följande props finns tillgängliga

### `vgr-dropdown-select`

| Prop              | Type          | Description      | Example  | Default     |
| -------------     |-------------  | -----            | -----    |     -----   |
| width             | string        | Sätter storlek på komponenten, anges i enhetmått, e.g. px och %. Vid användning av width så skriver man över användningen av small. Default så sätts bredd baserat på small propertyn. | width="100%" | undefined |
| small             | boolean       | Gör det valda alternativet kortare. | [small]="true" | false |
| value             | any           | Värdet på kontrollen. Gör det möjligt att programmatiskt styra värdet när form control inte används. Kan sättas till en array om flervalsläge är satt.	 | [value]="someObject" | undefined |
| multi             | boolean        | Ger möjlighet att välja fler än ett val. | [multi]="true" | false |
| deselectable      | boolean        | Visar en knapp som gör det möjligt att återställa till inget val efter att ett val gjorts. | [deselectable]="true" | false |
| simpleLabel       | boolean        | Gör texten för valda alternativ kortare vid multi. | [simpleLabel]="true" | false |
| noItemSelectedLabel | string      | Ändrar texten som visas då inget val gjorts.  | noItemSelectedLabel="'Gör ett val'" | 'Välj' |
| readonly            | boolean     | Gör att textfält med valt värde visas. | [readonly]="true" | false |
| disabled            | boolean     | Förhindrar interaktion. | [disabled]="true" | false |
| showValidation            | boolean     | Anger om valideringsfel ska visas eller ej. | [showValidation]="true" | false |
| errorMessage            | any     | Meddelande som skall visas vid valideringsfel. Nyckel för meddelandet skall vara valideringens namn. | [errorMessage]="{ required: 'Du måste välja ett värde.' }" | { required: "Obligatoriskt" } |
| labelId            | string     | ID för det element som är rubrik. Används av skärmläsare. | [labelId]="someLabelId" | undefined |
| readonly            | boolean     | Gör att textfält med valt värde visas. | [readonly]="true" | false |




### `vgr-dropdown-item`

| Prop              | Type          | Description      | Example  | Default     |
| -------------     |-------------  | -----            | -----    |     -----   |
| selectedLabel     | string        | Ger möjlighet att visa en annan text när alternativet är valt. | selectedLabel="text" | undefined |
| value             | any           | Värdet som sätts på kontrollen när alternativet väljs.	     | [value]="someObject" | undefined |
| default           | boolean       | Ger möjlighet att låta alternativet vara förvalt utan att använda reactive forms. Detta är främst användbart när kontrollen används som ett sätt att styra flödet i en applikation, snarare än för att populera ett formulär. Förvalt värde är false.	| [default]="true" | true |



## Event Emitters
### `vgr-dropdown-select`

| Prop | Description | Example |
| ------------- |-------------| -----| -----|
| selectedChanged | Event som triggas när val ändras av användaren. Värdet är det nya valet. Detta är främst användbart när kontrollen används som ett sätt att styra flödet i en applikation, snarare än för att populera ett formulär. | (selectedChanged)="onSelectedChanged()" |


## Accessibility
Följer WCAG-krav för listbox, [i enlighet med w3](https://www.w3.org/TR/wai-aria-practices-1.1/#Listbox).

| Keystroke         | Notes |
| ---------         |------ |
| `Enter`             | Väljer ett fokuserat alternativ och stänger listan |
| `Mellanslag`        | Väljer ett fokuserat alternativ |
| `Esc`               | Stänger listan utan att göra ett val |
| `Home`              | Går till listans första alternativ |
| `End`               | Går till listans sista alternativ |
| `Pil Upp`           | Blädrar i listan |
| `Pil Ner`           | Blädrar i listan |
| `CTRL + A`          | Väljer alla alternativ |