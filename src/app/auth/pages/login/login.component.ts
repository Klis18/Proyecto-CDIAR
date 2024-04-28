import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: `
            img{
              width:40%;
            }
          `
})
export class LoginComponent {
  value: number | undefined;
}
