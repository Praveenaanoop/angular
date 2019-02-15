import { Component, OnInit } from '@angular/core';
import{CookieService}from 'angular2-cookie/core'

@Component({
  selector: 'app-delemployee',
  templateUrl: './delemployee.component.html',
  styleUrls: ['./delemployee.component.css']
})
export class DelemployeeComponent implements OnInit {
value;
local;
session;
  constructor(private ts:CookieService) { }

  ngOnInit() {
    this.value=this.ts.get("test")
    this.local=localStorage.getItem("user")
    this.session=sessionStorage.getItem("ses")
  }

}
