import { SystemJsNgModuleLoader } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";


export class CustomValidator {

    static checkPassword(control: AbstractControl): ValidationErrors | null {
      console.log('password: ' + control.get('password') + ' confirmation: ' + control.get('passwordConfirmation'))
        if (control.get('password')?.value !== control.get('passwordConfirmation')?.value) {
          return { samePassword: true }
        }
        return null;
      }




}