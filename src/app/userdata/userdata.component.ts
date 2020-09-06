import { Component, OnInit } from '@angular/core';
import { UserinfoService } from '../userinfo/userinfo.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  public userDataFirstname;
  public userDataLastname;
  public userDataAccountNumber;
  public userDataamount;

  constructor(private userService: UserinfoService) { }

  ngOnInit(): void {
    console.log(this.userService.userInfoData);
    this.userDataFirstname = this.userService.userInfoData.firstname;
    this.userDataLastname = this.userService.userInfoData.lastname;
    this.userDataAccountNumber = this.userService.userInfoData.accountNumber;
    this.userDataamount = this.userService.userInfoData.amount;
  }

}
