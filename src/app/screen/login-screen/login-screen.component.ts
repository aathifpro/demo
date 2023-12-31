import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  signinForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitted = false;

  constructor(
    private service: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });

    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  get s(): { [key: string]: AbstractControl } {
    return this.signinForm.controls;
  }

  container: HTMLElement | null = null;

  ngAfterViewInit() {
    this.initializeLoginPage();
  }

  initializeLoginPage() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    this.container = document.getElementById('container');

    if (signUpButton && signInButton && this.container) {
      signUpButton.addEventListener('click', () => {
        this.container?.classList.add('right-panel-active');
      });

      signInButton.addEventListener('click', () => {
        this.container?.classList.remove('right-panel-active');
      });
    }
  }

  private passwordMatchValidator(formBuilder: FormGroup) {
    const password = formBuilder.get('password')?.value;
    const confirmPassword = formBuilder.get('confirmPassword')?.value;
    if (password != confirmPassword) {
      formBuilder.get("confirmPassword")?.setErrors({ passwordMismatch: true });
    } else {
      formBuilder.get('confirmPassword')?.setErrors(null);
    }
  }

  signup() {
    console.log(this.signupForm.value);
    this.service.signup(this.signupForm.value)
      .subscribe({
        next: (response) => {
          console.log(response);
          alert("User is created");
          this.submitted = true;
          this.signupForm.reset();
        },
        error: (e) => {
          console.error(e)
          alert("Error while creating a user")
        }
      });
  }

  login() {
    console.log(this.signinForm.value);
    this.service.login(this.signinForm.value)
      .subscribe({
        next: (response) => {
          console.log(response);
          alert("User is Logged");
          this.toastr.success('Login successful!', 'Success');
          this.submitted = true;
          if (response.jwtToken) {
            const jwtToken = response.jwtToken;
            localStorage.setItem('JWT', jwtToken);
            this.router.navigateByUrl('/home');
          }
        }, 
        error: (e) => {
          console.error(e)
          alert("Error while creating a user")
          this.toastr.warning('Login Successfull!', 'Warning');
        }
      })
  }

}
