import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passValidator } from './custom-validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  hide = true;
  form: FormGroup;
  meterValue = 0;
  passwordStatus = " ";
  
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      hideRequired: false,
      floatLabel: 'true',
      username: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          Validators.pattern('^([A-Z][a-z]*((\\s[A-Za-z])?[a-z]*)*)$')
        ]
      ],
      email: ['',
        [
          Validators.email,
          Validators.minLength(5),
          Validators.maxLength(30)
        ]
      ],

      password: ['',
        [
          Validators.required,
          Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')
        ]
      ],

      cnfpasswd: ['',
        [
          passValidator,
        ],
      ]
    });
    this.form.controls.password.valueChanges.subscribe(res => this.form.controls.cnfpasswd.updateValueAndValidity());
    this.form.controls.password.valueChanges.subscribe((response) => {
      if (response.match('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')) {
        this.meterValue = 100;
        this.passwordStatus = 'very-strong';
      }

      else if (response.match('.{7,}')) {
        console.log("you have entereed 7 character");
        this.meterValue = 60;
        this.passwordStatus = 'strong';
      }

      else if (response.match('.{5,}')) {
        this.meterValue = 20;
        this.passwordStatus = 'weak';
      }

      else {
        this.meterValue = 2;
        this.passwordStatus = 'weak';
      }
    }
    );
  }

  ngOnInit() { }
  onSubmit() {
    console.log(this.form.value);
  }
}
