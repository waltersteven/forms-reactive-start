import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required), //parameters: the initial value, validators, null for empty. We set the validators here because it's Reactive
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),      
      'gender': new FormControl('male'), //with initial value
      'hobbies': new FormArray([]) //we initialize it with []
    }); 
  }

  onSubmit() {
    console.log(this.signupForm); //we got access to the form because we created from here.
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required); //null it's the default value
    (<FormArray>this.signupForm.get('hobbies')).push(control) //first we are casting with <FormArray> and then pushing the new control
  }

}
