import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform: any;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(){
    this.createForm();
  }
  createForm(){
    this.loginform = this.fb.group({
     
      'Email':[''],
      'password':['']

    })
    

  }
  login(){

  }


}
