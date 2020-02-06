import { Component,ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  formData = {
    userName: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  }

  defaultValue : string = 'pet';
  genders:string[] = ['male','female'];

  isSubmitted:boolean= false;


 @ViewChild('f',{static:true}) ngForm:NgForm;
  // onSubmit(elementRef:ElementRef)
  // {
  // console.log("Submitted!")
  // console.log(elementRef);
  // }

  //  onSubmit(htmlElement:HTMLElement)
  // {
  // console.log("Submitted!")
  // console.log(htmlElement);
  // }

  // onSubmit(ngForm:NgForm)
  // {
  // console.log("Submitted!")
  // console.log(ngForm);
  // }
  onSubmit()
  {
    console.log("Submitted!")
    console.log(this.ngForm);

    this.formData.userName = this.ngForm.value.userdata.username;
    this.formData.email = this.ngForm.value.userdata.email;
    this.formData.secret = this.ngForm.value.secret;
    this.formData.questionAnswer = this.ngForm.value.questionAnswer;
    this.formData.gender = this.ngForm.value.gender;
    this.isSubmitted = true;

  }

  // OnSuggestUserNameClick()
  // {
  //   this.ngForm.setValue({
  //     userdata:
  //     {
  //       username:"Nikhil",
  //       email:'nikhil.karanjkar@tpt.com'
  //     }
  //     ,
  //     secret:"pet",
  //     questionAnswer: 'secret text',
  //     gender:"male"
  //   })
  // }

  OnSuggestUserNameClick()
  {
    this.ngForm.form.patchValue({
      userdata:
      {
        username:"Nikhil"
      }

    })
  }

  resetForm()
  {
    this.ngForm.reset();
  }


}
