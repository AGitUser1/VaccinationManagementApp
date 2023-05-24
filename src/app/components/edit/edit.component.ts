import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Citizen } from 'src/app/common/citizen';
import { VaccineService } from 'src/app/services/vaccine.service';
import { ActivatedRoute } from '@angular/router';
// import { Citizen } from 'src/app/common/citizen';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public date! : Date ;
  // displayDate = this.date.getDate+'-'+
  vaccinationStatus: String [] = ['Not Vaccinated','Partially Vaccinated','Fully Vaccinated']
  // public c1 = new Citizen(0,'','','','','',this.date,this.date,this.date,'');
  public c1 = new Citizen(0,'','','','','','','','','');
  // public c1 = new Citizen(1,'Jaya','jaya@gmail.com','jaya1234','47982938','puwdh',new Date,new Date,new Date,'partially vaccinated');


  cities: String [] = ['Bhubaneshwar','cuttack','Delhi','gurgaon','mumbai']
  constructor(private vs : VaccineService, private _acroute: ActivatedRoute, private router : Router) { }

  public userId! : Number;
  ngOnInit(): void {
    this._acroute.params.subscribe(param=>{
      
      // this.userId = Number(param.["id"]);
      this.userId = Number(this._acroute.snapshot.paramMap.get('id'));
      // console.log(this.userId)             //id of post
    })
    this.vs.getCitizenByID(this.userId).subscribe((rs: any) => {
     
      this.c1 = rs;
      console.log(this.c1);
      

    }, err => {
      console.log(err);
    })
  }
  onSubmitForm() {
    
    var temp  = JSON.stringify(this.c1.firstDose);
    let date1 : Date = new  Date(temp);
    var temp  = JSON.stringify(this.c1.secondDose);
    let date2 : Date = new  Date(temp);
    var temp  = JSON.stringify(this.c1.boosterDose);
    let date3 : Date = new  Date(temp);
    
    // let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    // if(date1!=null|| date2!=null|| date3!=null){
      if(this.c1.boosterDose!=null && this.c1.secondDose!=null){
        var diffDays = (date3.getTime()-date2.getTime()) / (1000 * 60 * 60 * 24); 
        if((diffDays) < 180){
            throw (err: any) => {
                    console.log(err)
            }
        }
      }
      else if(this.c1.secondDose!=null && this.c1.firstDose!=null){
        var diffDays = (date2.getTime()-date1.getTime()) / (1000 * 60 * 60 * 24); 
        if((diffDays) < 180){
            throw (err: any) => {
                    console.log(err)
            }
        }
      }
    // }


    this.vs.updatePost(this.userId, this.c1).subscribe(rs => {
      
      this.router.navigate(['/listCitizen']);
    }, err => {
      console.log(err)
    })
  }

}

