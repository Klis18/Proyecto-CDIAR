import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../interfaces';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


interface TipoUsuario {
  id: number;
  descripcion: string;
}

@Component({
  selector: 'registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styles: `
            
          `
})
export class RegistroUsuarioComponent {
  value: number | undefined;


  userTypes: TipoUsuario[] | undefined;
    
    // formGroup: FormGroup = new FormGroup({});
  

    public userGroup = new FormGroup({
      username: new FormControl<string>(''),
      email: new FormControl<string>(''),
      phoneNumber: new FormControl<string>(''),
      password: new FormControl<string>(''),
      role: new FormControl<string>(''),
    });

    ngOnInit() {
        this.userTypes = [
            { id: 1, descripcion: 'Estudiante' },
            { id:2, descripcion: 'Docente' },
            
        ];
    }

    constructor(private authService:AuthService, private router: Router) {}

    get currentUser(): User {
      const user = this.userGroup.value as User;
      return user;
    }

    onSubmit() {
      if ( this.userGroup.invalid ) return;
      console.log(this.currentUser);

      this.authService.registrarUsuario(this.currentUser)
        .subscribe(user => {
            this.router.navigate(['/auth/login']);
            console.log(user);
          }
        );
    }
}
