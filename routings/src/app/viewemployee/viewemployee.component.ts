import { Component, OnInit } from '@angular/core';
import{DateService} from'../../app/myservices/date.service';
@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
age:any;
dobvalue;
  constructor(private da:DateService) { }

  ngOnInit() {

   
  }

  getdob()
  {
    this.age=this.da.getage(this.dobvalue);
    console.log(this.age);
    
  }

}
