var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';
var SelectComponent = /** @class */ (function (_super) {
    __extends(SelectComponent, _super);
    function SelectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectComponent.prototype.enumNames = function (index) {
        return typeof (this.schema.enumNames) === 'undefined'
            ? this.schema.enum[index]
            : this.schema.enumNames[index];
    };
    SelectComponent.prototype.emptyOption = function () {
        return _super.prototype.title.call(this).replace(/[^A-Z0-9]+$/ig, '');
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    template: "\n    <div class=\"select-container\">\n      <label [attr.class]=\"schema.key\" [ngClass]=\"{required: isRequired()}\">\n        {{title()}}<sup *ngIf=\"isRequired()\">*</sup>\n      </label>\n      <button type=\"button\" *ngIf=\"this.schema.description\" [attr.class]=\"'info'\" [attr.title]=\"this.schema.description\">Info</button>\n      <select\n        class=\"form-control\"\n        name=\"name\"\n        [formControl]=\"control\"\n      >\n        <option value=\"\" [selected]=\"control.value === ''\" [disabled]=\"true\">\n          Select {{emptyOption()}}\n        </option>\n        <option\n          *ngFor=\"let en of this.schema.enum; let i = index\"\n          [selected]=\"control.value === en\"\n          [ngValue]=\"en\">\n          {{enumNames(i)}}\n        </option>\n      </select>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return []; };
    return SelectComponent;
}(CommonComponent));
export { SelectComponent };
