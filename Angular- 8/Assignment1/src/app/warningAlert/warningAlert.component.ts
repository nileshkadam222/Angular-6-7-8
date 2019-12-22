import { Component } from '@angular/core';
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Component({
    selector:'app-warningAlert',
    template:`<div class="errorMessage">Something went wrong</div>`,
    styles:[`.errorMessage{color:red;}`]
})
export class warningAlert{


}