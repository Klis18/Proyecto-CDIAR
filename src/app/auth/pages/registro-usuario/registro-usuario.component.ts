import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../interfaces';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Role, RespuestaRol } from '../../interfaces/role';


// interface TipoUsuario {
//   id: string;
//   descripcion: string;
// }

@Component({
  selector: 'registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styles: `
            
          `
})
export class RegistroUsuarioComponent {
  value: string | undefined;


  userTypes: any;
    
    // formGroup: FormGroup = new FormGroup({});
    


    public userGroup = new FormGroup({
      username: new FormControl<string>(''),
      email: new FormControl<string>(''),
      phoneNumber: new FormControl<string>(''),
      password: new FormControl<string>(''),
      rolId: new FormControl<string>(''),
    });


    ngOnInit() {
      this.authService.obtenerRoles().subscribe((respuesta: RespuestaRol) => {
        console.log(respuesta);
        this.userTypes = respuesta.data.map(role => ({
          label: role.rolName,
          value: role.rolId
        }));
      });
    }
    

    constructor(private authService:AuthService, private router: Router) {}

    get currentUser(): User {
      const user = this.userGroup.value as User;
      return user;
    }

    onSubmit() {
      if ( this.userGroup.invalid ) return;
      console.log(this.currentUser);

      if (this.userGroup.value.username) {
        this.userGroup.value.username = this.userGroup.value.username.replace(/\s/g, '');
      }
      
      this.authService.registrarUsuario(this.currentUser)
        .subscribe(user => {
            this.router.navigate(['/auth/login']);
            console.log(user);
          }
        );
    }
}
