import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor() { }
  public userInfoData = {
    firstname: '',
    lastname: '',
    accountNumber:'',
    amount:''


  }
}
