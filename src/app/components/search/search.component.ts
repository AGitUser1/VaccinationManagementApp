import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Citizen } from 'src/app/common/citizen';
import { VaccineService } from 'src/app/services/vaccine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public citizen  = new Citizen(0,'','','','','','','','','');
  public userId! : Number;

  public isShow :boolean = true;
  
  // public postData:any [] = [];
  constructor( private service : VaccineService,  private _acroute: ActivatedRoute, private router :Router) { }

  ngOnInit(): void {
    // this.listCitizens();
    // this._acroute.params.subscribe(param=>{
    //   // console.log(param); // console.log(typeof(param));
    //   // this.userId = Number(param.["id"]);
    //   this.userId = Number(this._acroute.snapshot.paramMap.get('id'));
    //   // console.log(this.userId)             //id of post
    // })
  }

  onSubmit(){
    this.service.getCitizenByID(this.userId).subscribe((response : any)=>{
      this.citizen = response;
      this.isShow = false;
      console.log(this.citizen);
      // console.log(this.id);

    },err=>{
      console.log(err);
    })
  }
  
}