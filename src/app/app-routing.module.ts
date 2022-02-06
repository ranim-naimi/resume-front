import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { MotivationComponent } from './motivation/motivation.component';
import {ResumeComponent} from "./resume/resume.component";
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  { path : 'resume' , component: ResumeComponent},
  { path : 'resume/contact' , component: ContactInfoComponent},
  { path : 'resume/education', component: EducationDetailsComponent},
  { path : 'resume/general' , component: GeneralInfoComponent},
  { path : 'resume/motivation' , component: MotivationComponent},
  { path : 'resume/skills' , component: SkillsComponent},
  { path : 'resume/work' , component: WorkExperienceComponent},
  { path : 'form' , component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

