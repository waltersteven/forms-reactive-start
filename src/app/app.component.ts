import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];

  signupForm: FormGroup;

  ngOnInit(){
    this.signupForm = new FormGroup({
      //adding controls
      'username': new FormControl(null), //parameters: the initial value, validators, null for empty
      'email': new FormControl(null),
      'gender': new FormControl('male') //with initial value
    }); 
  }

}
