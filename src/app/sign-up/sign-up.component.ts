import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpform!:FormGroup
signup: any;
  constructor(private fb:FormBuilder,private http:HttpService){

  }
  ngOnInit(){
    this.createForm();
  }
  createForm(){
    this.signUpform = this.fb.group({
      'name':[''],
      'mobileNo':[''],
      'Email':[''],
      'password':['']

    })
    

  }
  signUp(){
      console.log(this.signUpform.value);
      this.http.postDataToserver('users',this.signUpform.value).subscribe(
        (response:any)=>{
          console.log(response);
        },
        (error)=>{
          
        }
      )
  }

}

