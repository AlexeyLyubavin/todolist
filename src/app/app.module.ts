import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusyModule} from 'angular2-busy';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { TaskComponent } from './components/task/task.component';
import { ListService }          from './services/list.service';

@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    TaskComponent
  ],
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,
    BusyModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ListService],
  bootstrap: [MainComponent]
})
export class AppModule { }
