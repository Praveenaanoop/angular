import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { DelemployeeComponent } from './delemployee/delemployee.component';
import{RouterModule,Route, Routes} from '@angular/router'
import{RoutService} from '../app/myservices/rout.service'
import{FootService} from '../app/myservices/foot.service'
import{DateService} from '../app/myservices/date.service'
import {CookieService} from 'angular2-cookie/services/cookies.service'

const appRoutes:Routes=[
  {path:"",component:ViewemployeeComponent},
  {path:"new",component:NewemployeeComponent},
  {path:"edit",component:EditemployeeComponent},
  {path:"del",component:DelemployeeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NewemployeeComponent,
    ViewemployeeComponent,
    EditemployeeComponent,
    DelemployeeComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RoutService,FootService,DateService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
