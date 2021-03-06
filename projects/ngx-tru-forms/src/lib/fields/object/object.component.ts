import {Component, Input} from '@angular/core';
import {SchemaFormControl} from '../../models/schema-form-control';

@Component({
  template: `
    <div
      jf-component-chooser
      [form]="control"
      [schema]="control.schema"
      [nested]="true">
    </div>`
})
export class ObjectComponent {
  @Input() control: SchemaFormControl;
}

