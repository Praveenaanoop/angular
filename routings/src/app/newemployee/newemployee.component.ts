import { Component, OnInit } from '@angular/core';
import{ RoutService } from '../../app/myservices/rout.service';


@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {
date:any;
  constructor(private ds:RoutService) { }

  ngOnInit() {
    this.date=this.ds.getcurrentdate();
  }

}
