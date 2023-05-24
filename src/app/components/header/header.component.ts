import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isShow = true;
  constructor() { }

  ngOnInit(): void {

    if (localStorage.getItem('token')) {
      this.isShow = false;
    }
    else {
      this.isShow = true;
    }
  }
  onLogout() {
    localStorage.clear();
  }
}
