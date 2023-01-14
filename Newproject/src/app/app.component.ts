import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title='Newproject';

// @ViewChild('f') signupForm:NgForm;

//   onSubmit()
//   {
//     console.log(this.signupForm);
//   }


anss= ['Morning (9am- 12pm)', 'Evening (6pm-9pm)'];
default="Morning (9am- 12pm)";
submitted=false;

formData={
  username:' ',
  Email:'',
  Course:' ',
  BatchTime:' '

}

  onSubmit(form:NgForm)
  {
    console.log(form);
    this.submitted=true;
 }

}
 
