import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitizenListComponent } from './components/citizen-list/citizen-list.component';
import { HttpClientModule } from '@angular/common/http';
import {VaccineService} from './services/vaccine.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component'
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { SearchComponent } from './components/search/search.component';
import {MatDialogModule } from '@angular/material/dialog';
import { MessageComponent } from './message/message.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CitizenListComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    EditComponent,
    SearchComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule
    
  ],
  providers: [VaccineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
