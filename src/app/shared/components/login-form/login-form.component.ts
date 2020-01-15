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
  response: any;

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
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      ],

      cnfpasswd: ['',
        [
          passValidator,
        ],
      ]
    });
    this.form.controls.password.valueChanges.subscribe(res => this.form.controls.cnfpasswd.updateValueAndValidity());
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
