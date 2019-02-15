import { Component, OnInit } from '@angular/core';
import{CookieService} from 'angular2-cookie/core'

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  constructor(private cook:CookieService) { }
name;
breed;
item=[];
  ngOnInit() {
    
  }
  setlocal(){
    localStorage.setItem("user","payasam")
    console.log("set local")
  }
setvalue(){
  this.cook.put("test","samplecookie")
  console.log("value set")
}
getvalue(){
  let value=this.cook.get("test")
  console.log(value)
 
 
}
getlocal()
{
  let local=localStorage.getItem("user")
  console.log(local)
}
setsession(){
  sessionStorage.setItem("ses","helllooooo")
  console.log("all set")
}
getsession(){
  let session=sessionStorage.getItem("ses")
  console.log("hiiiiiii")
}
set()
{
  let obj={name:this.name,breed:this.breed}
  localStorage.setItem("animal",JSON.stringify(obj))
  
  console.log("value set")
}
get(){
 this.item=JSON.parse(localStorage.getItem("animal"))
  console.log(this.item)
}
}
