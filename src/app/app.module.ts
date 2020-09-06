import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { AccountinfoComponent } from './accountinfo/accountinfo.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {UserinfoService} from './userinfo/userinfo.service';
import { UserdataComponent } from './userdata/userdata.component';

import { DecimalNumberDirective } from './decimal-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
    AccountinfoComponent,
    UserdataComponent,
    
    DecimalNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
