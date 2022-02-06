import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ResumeComponent } from './resume/resume.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { MotivationComponent } from './motivation/motivation.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    GeneralInfoComponent,
    ContactInfoComponent,
    EducationDetailsComponent,
    WorkExperienceComponent,
    SkillsComponent,
    MotivationComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
