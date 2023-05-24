import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Citizen } from 'src/app/common/citizen';
import { VaccineService } from 'src/app/services/vaccine.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public date  = new Date;
  // public c1 = new Citizen(5,'','','','','',this.date,this.date,this.date,'');
  public c1 = new Citizen(0,'','','','','','','','','Not Vaccinated');
  // public c1 = new Citizen(1,'Jaya','jaya@gmail.com','jaya1234','47982938','duwdh',new Date,new Date,new Date,'partially vaccinated');

  cities: String [] = ['Bhubaneshwar','cuttack','Delhi','gurgaon','mumbai']
  constructor(private vs : VaccineService,private router : Router) { }

  ngOnInit(): void {
  }

  onSubmitFomr(){

  }onSubmitForm(){
    // this.author.fullName
    console.log(this.c1);
    this.vs.registerCitizen(this.c1).subscribe(response=>{
      console.log(response)
      // this.message = response.message;
      // this.isSuccess=true;
      // this.isError=false;
      this.router.navigate(['/listCitizen']);
    },err=>{
      console.log(err)
      // this.message =  err.error.message;
      // this.isSuccess=false;
      // this.isError=true;
   })
  }

}
