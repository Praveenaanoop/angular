import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutService {

  constructor() { }
  getcurrentdate(){
    return new Date();
  }
}
