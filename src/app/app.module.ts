import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, Action, createSelector } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CntComponent } from './components/cnt/cnt.component';
import { counterReducer } from 'src/app/store/counter';
import { metaReducers } from './store';
import { featureReducers } from './store/feature';

@NgModule({
  declarations: [
    AppComponent,
    CntComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ cnt: counterReducer },{ metaReducers }),
    StoreModule.forFeature('fea', featureReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
