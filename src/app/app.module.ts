import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IllustrationComponent } from './components/card/illustration/illustration.component';
import { StatisticComponent } from './components/card/statistic/statistic.component';
import { TableComponent } from './components/card/table/table.component';
import {HeaderComponent} from "./components/global/header/header.component";
import { SituationAvrilComponent } from './view/situation-avril/situation-avril.component';
import {FooterComponent} from "./components/global/footer/footer.component";
import { MyProjectComponent } from './view/my-project/my-project.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    IllustrationComponent,
    StatisticComponent,
    TableComponent,
    HeaderComponent,
    SituationAvrilComponent,
    FooterComponent,
    MyProjectComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
