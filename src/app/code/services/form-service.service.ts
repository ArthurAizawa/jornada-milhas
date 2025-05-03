import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  formBusca: FormGroup;
  
  constructor() {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false)
    })
   }
}
