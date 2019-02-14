import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
   getage(birth:any){
     const today=new Date();
     const dob=new Date(birth);
     let age=today.getFullYear()-dob.getFullYear();
     return age;

   }
}
