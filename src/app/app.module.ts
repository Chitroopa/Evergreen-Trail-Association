import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { HikeProjectListComponent } from './hike-project-list/hike-project-list.component';
import { HikeProjectDetailComponent } from './hike-project-detail/hike-project-detail.component';
import { HikeProjectEditComponent } from './hike-project-edit/hike-project-edit.component';
import { LevelPipe } from './level.pipe';
import { TripTypePipe } from './trip-type.pipe';
import { AboutComponent } from './about/about.component';
import { HikeProjectJoinComponent } from './hike-project-join/hike-project-join.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AdminComponent,
    HikeProjectListComponent,
    HikeProjectDetailComponent,
    HikeProjectEditComponent,
    LevelPipe,
    TripTypePipe,
    AboutComponent,
    HikeProjectJoinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
