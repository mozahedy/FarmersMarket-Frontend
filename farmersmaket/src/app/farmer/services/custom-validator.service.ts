import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { }

  validateName(control: FormControl): {[s: string]: boolean}{
      return null;
  }
}
