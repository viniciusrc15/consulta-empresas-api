import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { EmpresaService } from './services/empresa-service'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaDetailComponent } from './empresa-detail/empresa-detail.component';
import { EmpresaFilterComponent } from './empresa-filter/empresa-filter.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from "./guards/auth-guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    EmpresaListComponent,
    EmpresaDetailComponent,
    EmpresaFilterComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    EmpresaService, AuthService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
