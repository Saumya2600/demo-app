import { EmailService } from './../../service/email.service';

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
data={
  to:"",
  subject:"",
  message:""
}
  flag=false;
  constructor(private email:EmailService,private snak:MatSnackBar) { }

  ngOnInit(): void {
  }
  doSubmitForm(){
    console.log("try to submit form");
    console.log("data",this.data);
    if(this.data.to==''||this.data.subject==''||this.data.message==''){
      this.snak.open("fields cannot be empty");
      return;
    }
    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      (      response: any) =>{
        console.log(response);
        this.flag=false;
        this.snak.open("send success")
      }
      ,(      error: any)=>{
        console.log(error);
        this.flag=false;
        this.snak.open("error")
        
      }
      
    )
  }
}
