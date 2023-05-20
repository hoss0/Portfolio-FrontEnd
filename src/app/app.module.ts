import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HeaderComponent } from './header/header.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardSoftSkillsComponent } from './hard-soft-skills/hard-soft-skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImagenesFormComponent } from './imagenes-form/imagenes-form.component';
import { CoreModule } from './Services/core.module';
import { ExperienciaService } from './Services/experiencia.service';




@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ExperienciaComponent,
    HeaderComponent,
    AcercaDeComponent,
    EducacionComponent,
    HardSoftSkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LogInComponent,
    ImagenesFormComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    NgCircleProgressModule.forRoot({
      "backgroundOpacity": 0,
      "backgroundStrokeWidth": 0,
      "radius": 101,
      "space": -19,
      "toFixed": 0,
      "maxPercent": 100,
      "unitsFontSize": "28",
      "unitsFontWeight": "500",
      "outerStrokeWidth": 19,
      "outerStrokeColor": "#a4c959",
      "outerStrokeLinecap": "butt",
      "innerStrokeColor": "#d4d4d4",
      "innerStrokeWidth": 19,
      "titleFontSize": "34",
      "titleFontWeight": "400",
      "subtitleFontSize": "24",
      "subtitleFontWeight": "600",
      "animationDuration": 600})
  ],
  providers: [ExperienciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
