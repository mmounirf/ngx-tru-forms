import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormComponent } from './json-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChooserComponent } from './components/chooser/chooser.component';
import { SelectComponent } from './fields/select/select.component';
import { StringComponent } from './fields/string/string.component';
import { NumberComponent } from './fields/number/number.component';
import { BooleanComponent } from './fields/boolean/boolean.component';
import { FieldComponent } from './components/field/field.component';
import { PhotoComponent } from './fields/photo/photo.component';
import { JsonFormDefaultsService } from './services/defaults.service';
import { JsonFormFieldsService } from './services/fields.service';
import { JsonFormValidatorsService } from './services/validators.service';
import { TextareaComponent } from './fields/textarea/textarea.component';
import { ObjectComponent } from './fields/object/object.component';
import { ArrayComponent } from './fields/array/array.component';
import { CheckboxgroupComponent } from './fields/checkboxgroup/checkboxgroup.component';
import { RadiogroupComponent } from './fields/radiogroup/radiogroup.component';
import { CommonComponent } from './fields/common/common.component';
import { TextMaskModule } from 'angular2-text-mask';
import { MultiselectComponent } from './fields/multiselect/multiselect.component';
import { MoneyComponent } from './fields/money/money.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { WorkingSpinnerComponent } from './components/working-spinner/working-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    TextMaskModule,
    ReactiveFormsModule
  ],
  declarations: [
    JsonFormComponent,
    SelectComponent,
    ChooserComponent,
    StringComponent,
    FieldComponent,
    NumberComponent,
    BooleanComponent,
    PhotoComponent,
    TextareaComponent,
    ObjectComponent,
    ArrayComponent,
    CheckboxgroupComponent,
    RadiogroupComponent,
    CommonComponent,
    MultiselectComponent,
    MoneyComponent,
    FormButtonComponent,
    WorkingSpinnerComponent
  ],
  exports: [
    JsonFormComponent,
    CommonComponent
  ],
  entryComponents: [
    StringComponent,
    SelectComponent,
    NumberComponent,
    BooleanComponent,
    PhotoComponent,
    TextareaComponent,
    ObjectComponent,
    ArrayComponent,
    RadiogroupComponent,
    CheckboxgroupComponent,
    JsonFormComponent,
    MultiselectComponent,
    MoneyComponent
  ],
  providers: [
    JsonFormDefaultsService,
    JsonFormFieldsService,
    JsonFormValidatorsService
  ]
})

export class JsonFormModule { }
