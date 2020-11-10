import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { TestPortalComponent } from './test-portal/test-portal.component';
import { TestPortalService } from './test-portal.service';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    TestPortalComponent,
    MainComponent,
    InstructionsComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TestPortalService],
  bootstrap: [MainComponent]
})
export class AppModule { }
