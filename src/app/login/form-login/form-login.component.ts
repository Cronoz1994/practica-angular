
import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';

@Component({
  selector: 'ap-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent implements OnInit {
  hide   : boolean;
  message: string;
  user; 

  constructor(private router: Router) {
    this.hide    = true;
    this.message = ''
    this.user    = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  submit(): void {
    if(this.user.username == 'test' && this.user.password == 'test') {
      // this.message = 'Correcto';
      this.router.navigate(['dashboard']);
    } else {
      this.message = 'Datos incorrectos, verifique';
    }
  }
}
