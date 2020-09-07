import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountinfoComponent } from './accountinfo/accountinfo.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { RouterModule, Routes } from '@angular/router';
import { UserdataComponent } from './userdata/userdata.component';
const routes: Routes = [
  { path: '', component: UserinfoComponent },
  {path:'accountinfo', component:AccountinfoComponent},
  {
    path:'userdata' , component:UserdataComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  RouterModule.forRoot(routes),
  

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
