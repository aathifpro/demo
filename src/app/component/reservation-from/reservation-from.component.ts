import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reservation-from',
  templateUrl: './reservation-from.component.html',
  styleUrls: ['./reservation-from.component.css']
})
export class ReservationFromComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    person: new FormControl(''),
  });

  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ] ],
        email: ['', [ Validators.required, Validators.email ] ],
        phone: ['', [ Validators.required, Validators.pattern(/^\d{10}$/) ] ],
        date: ['', [ Validators.required, this.dateValidator ] ],
        time: ['', [ Validators.required, this.timeValidator ] ],
      }
    )
  }

  get f(): { [key: string]: AbstractControl} {
    return this.form.controls;
  }

  onSubmit(): void {
    console.log('Error while submitting form:', this.form.value);
    this.submitted = true;

    if(this.form.invalid){
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    console.log('Form submitted successfully:', this.form.value);
  }

  onRest(): void {
    this.submitted = false;
    this.form.reset();
  }

  dateValidator(control: any) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      return { pastDate: true };
    }
    return null;
  }

  timeValidator(control: any) {
    const selectedTime = new Date('1970-01-01T' + control.value);
    const currentTime = new Date();

    if (selectedTime.getHours() < currentTime.getHours() ||
        (selectedTime.getHours() === currentTime.getHours() && selectedTime.getMinutes() < currentTime.getMinutes())) {
      return { pastTime: true };
    }
    return null;
  }

}
