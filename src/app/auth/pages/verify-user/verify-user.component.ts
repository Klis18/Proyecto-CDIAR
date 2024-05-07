import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { EmailVerification } from '../../interfaces/email-verification';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styles: `
          .custom-otp-input {
            width: 45px;
            font-size: 36px;
            border: 0 none;
            appearance: none;
            text-align: center;
            transition: all 0.2s;
            background: transparent;
            border-bottom: 2px solid var(--surface-500);
            border-radius: 0px;
            margin: 0 0.2rem;
        }

        .custom-otp-input:focus {
            outline: 0 none;
            box-shadow: none;
            border-bottom-color: var(--primary-color);
        } 
    `,
})
export class VerifyUserComponent {
  value: any;

  public userGroup = new FormGroup({
    email: new FormControl<string>(''),
    token: new FormControl<string>(''),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const email = params['email'];
      this.userGroup.get('email')?.setValue(email);
    });
  }

  get emailVerification(): EmailVerification {
    return this.userGroup.value as EmailVerification;
  }

  onSubmit() {
    if (this.userGroup.invalid) return;

    this.authService.verifyUser(this.emailVerification).subscribe((email) => {
      this.router.navigate(['/auth/login']);
    });
  }
}
