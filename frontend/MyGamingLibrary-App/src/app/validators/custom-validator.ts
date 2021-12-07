import { AbstractControl, ValidationErrors } from "@angular/forms";


export class CustomValidator {

    static checkPassword(control: AbstractControl): ValidationErrors | null {
        if (control.get('password')?.value !== control.get('passwordConfirmation')?.value) {
          return { samePassword: true }
        }
        return null;
      }




}