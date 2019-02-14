import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootService {
getfooterdata(){
  return "footer come down";
}
  constructor() { }
}
