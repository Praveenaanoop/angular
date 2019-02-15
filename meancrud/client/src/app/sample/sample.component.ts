import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
jsn;
msg;
list=[];
id;
name;
salary;
  constructor(private http:HttpClient) { }
getdata(){
  console.log("hsbdh")
this.http.get("http://localhost:8000/data").subscribe(data=>{
  console.log(data);
  this.jsn=data;
});
}
gettable(){
  this.http.get("http://localhost:8000/data").subscribe(data=>{
    this.list=Array.of(data);
console.log(this.list);


})
}
add(){
  let emp={"id":this.id,"name":this.name,"salary":this.salary}
  this.http.post("http://localhost:8000/insert",{Emploo:emp}).subscribe(data=>{
console.log(data)
  })
}
  ngOnInit() {
  }

}
