import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatDatepickerModule, DateAdapter, MatNativeDateModule, MatInputModule, MatIconModule, MatFormFieldModule, MatCardModule, MatListModule, MatStepperModule, MatButtonModule, MatTabBody, MatTooltipModule } from '@angular/material'
import {MatSelectModule} from '@angular/material/select';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InfoSectionComponent } from './info-section/info-section.component';

import { RouterModule, Routes } from '@angular/router';


import { SocketService } from '../services/sockets/sockets.service'
import { Route } from '@angular/compiler/src/core';

const appRoutes: Routes = [
  {path: 'info', component: InfoSectionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    InfoSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule.forRoot(
      appRoutes,
        {enableTracing: true}
    )
   ],
  providers: [MatDatepickerModule, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
