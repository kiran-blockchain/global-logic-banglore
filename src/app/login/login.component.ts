import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private fb:FormBuilder) { }
 // f:any;
  ngOnInit() {
    this.loginForm = this.fb.group({
      username:['kiran',[Validators.required,Validators.email]],
      password:['pwd',Validators.required]
    });
  }
  get f(){
    return this.loginForm.controls;
  }
  onSubmit(){
    if(this.loginForm.valid){
      alert("successs");
    }
    else{
      alert("failure");
    }
  }

}
