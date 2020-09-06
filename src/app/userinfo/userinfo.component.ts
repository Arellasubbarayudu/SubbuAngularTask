import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserinfoService } from './userinfo.service';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  public  registerForm: FormGroup;
    public submitted = false;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private userService: UserinfoService) { }

    ngOnInit():void {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit():void{
        this.submitted = true;

debugger;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.userService.userInfoData.firstname = this.registerForm.value.firstName;
        this.userService.userInfoData.lastname = this.registerForm.value.lastName;
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

    navigateToSecondScreen():void{
      this.submitted = true;
        // stop here if form is invalid
      if (this.registerForm.invalid) {
            return;
        }
      this.userService.userInfoData.firstname = this.registerForm.value.firstName;
      this.userService.userInfoData.lastname = this.registerForm.value.lastName;
      this.router.navigate(['/accountinfo']);

    }
}
