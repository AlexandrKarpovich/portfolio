import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})


export class ContactsComponent {

  title = 'Contacts'
  
constructor(private formBuilder:FormBuilder){}

 profileForm = this.formBuilder.group({
   firstName:[''],
   lastName:[''],
   address:[''],
   dob:[''],
   gender:['']
 });

 saveForm(){
   console.log('Form data is ', this.profileForm.value);
 }

}
