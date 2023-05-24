import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Citizen } from 'src/app/common/citizen';
import { VaccineService } from 'src/app/services/vaccine.service';
import { MatDialog, MatDialogRef } from  '@angular/material/dialog'
// 
import { MessageComponent } from 'src/app/message/message.component';

@Component({
  selector: 'app-citizen-list',
  templateUrl: './citizen-list.component.html',
  styleUrls: ['./citizen-list.component.css']
})
export class CitizenListComponent implements OnInit {

  isShow = true;

  citizens : Citizen [] = [];
  // public postData:any [] = [];
  constructor(private  dialog:  MatDialog, private service : VaccineService, private router :Router) { }

  ngOnInit(): void {
    // this.listCitizens();


    this.service.listAllCitizens().subscribe(response=>{
      this.citizens =response;
      
      console.log(this.citizens);
      // console.log(this.id);

    },err=>{
      console.log(err);
    })
  }
  test(i:any){
    console.log(this.citizens[i].id);
    if(this.citizens[i].vaccinationStatus == 'Fully Vaccinated'){
      this.service.deletePost(this.citizens[i].id).subscribe(response=>{
        this.citizens =response.post;
        console.log(this.citizens);
        alert("Deleted successfully");
  
       },err=>{
        console.log(err);
      })
    }
    else{
      alert("Not Fully Vaccinated");
      // this.dialog.open(MessageComponent,{ data: {
      //   message:  "Not Fully Vaccinated"
      //   }});
    }
    
  }

  // listCitizens(){
  //   // throw new Error("Method not implemented");
  //   this.service.getCitizenList().subscribe(
  //     (data : Citizen []) =>{
  //       this.citizens = data
  //       console.log(this.citizens);

  //     },(error:any) => console.error()
      
  //   );
    
  // }

}
