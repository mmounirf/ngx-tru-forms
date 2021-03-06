import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef} from '@angular/core';
import { SchemaFormControl } from '../../models/schema-form-control';
import { JsonFormFieldsService } from '../../services/fields.service';

@Component({
  selector: 'jf-field, [jf-field]',
  template: `
    <ng-content></ng-content>
    <ng-container #container></ng-container>
    <div *ngIf="control.invalid && (control.dirty || control.touched)" class="has-danger">
      <div *ngIf="control.errors && control.errors['required']">
        This field is required.
      </div>
      <div *ngIf="control.errors && control.errors['pattern']">
        Input value is invalid.
      </div>
      <div *ngIf="control.errors && control.errors['minlength']">
        Input has to be a minimum of {{control.errors['minlength']['requiredLength']}} characters.
      </div>
      <div *ngIf="control.errors && control.errors['maxlength']">
        Input can contain a maximum of {{control.errors['maxlength']['requiredLength']}} characters.
      </div>
      <div *ngIf="control.errors && control.errors['min']">
        Enter a value greater than or equal to {{control.errors['min']['min']}}.
      </div>
      <div *ngIf="control.errors && control.errors['max']">
        Enter a value less than or equal to {{control.errors['max']['max']}}.
      </div>
      <div *ngIf="control.errors && control.errors['customError']">
        {{control.errors['customError']}}
      </div>
    </div>
  `
})

export class FieldComponent implements OnInit, OnChanges {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  @Input() control: SchemaFormControl;
  @Input() index: number;
  public patterns;

  constructor(public jsonFormFieldsService: JsonFormFieldsService, public el: ElementRef) {
    this.patterns = {};
  }

  ngOnInit() {
    this.generateField();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.generateField();
  }

  generateField() {
    this.container.clear();
    this.jsonFormFieldsService.setRootViewContainerRef(this.container);
    this.jsonFormFieldsService.addDynamicComponent(this.control, this.index);
    this.el.nativeElement.className = `field margin-bottom ${this.getClass()} form-group`;
  }

  getClass(defaultClass = '') {
    const fieldClass = [defaultClass];
    fieldClass.push(this.control.schema.type);
    fieldClass.push(this.control.schema.key);

    if (this.control.schema.hasOwnProperty('description')) {
      fieldClass.push('has-info');
    }

    if (this.control.style && this.control.style.default && ['radiogroup', 'checkboxgroup'].indexOf(this.control.schema.format) === -1) {
      fieldClass.push(this.control.style.default);
    }

    return fieldClass.filter((d) => d).join(' ');
  }
}
