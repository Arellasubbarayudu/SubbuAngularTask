import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserinfoService } from '../userinfo/userinfo.service';

@Component({
  selector: 'app-accountinfo',
  templateUrl: './accountinfo.component.html',
  styleUrls: ['./accountinfo.component.css']
})
export class AccountinfoComponent implements OnInit {
  public regexForAccount="\\-?\\d*\\.?\\d{1,2}";
  public userAccountInfoForm: FormGroup;
  public submitted = false;
  


  constructor(private userService: UserinfoService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.userAccountInfoForm = this.formBuilder.group({
      accountNumber: ['', Validators.required],
      amount: ['', Validators.required],
  });
  }


    // convenience getter for easy access to form fields
    get f() { return this.userAccountInfoForm.controls; }

    onSubmit(): void{
        this.submitted = true;

debugger;
        // stop here if form is invalid
        if (this.userAccountInfoForm.invalid) {
            return;
        }
        this.userService.userInfoData.accountNumber = this.userAccountInfoForm.value.accountNumber;
        this.userService.userInfoData.amount = this.userAccountInfoForm.value.amount;
    }

    onReset() {
        this.submitted = false;
        this.userAccountInfoForm.reset();
        this.router.navigate(['/userinfo']);
    }

    navigateToThirdScreen(): void{
      this.submitted = true;

debugger;
        // stop here if form is invalid
      if (this.userAccountInfoForm.invalid) {
            return;
        }
      this.userService.userInfoData.accountNumber = this.userAccountInfoForm.value.accountNumber;
      this.userService.userInfoData.amount = this.userAccountInfoForm.value.amount;
      this.router.navigate(['/userdata']);

    }



}
