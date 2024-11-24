import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component'; 
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ListeusersComponent } from './listeusers/listeusers.component';
import { UpdateUserComponent } from './update-user/update-user.component'; 
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ListeusersComponent,
    UpdateUserComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    
    provideHttpClient(withFetch()) ,
    provideClientHydration(),
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
