import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { HikeProjectListComponent } from './hike-project-list/hike-project-list.component';
import { HikeProjectDetailComponent } from './hike-project-detail/hike-project-detail.component';
import { HikeProjectEditComponent } from './hike-project-edit/hike-project-edit.component';
import { AboutComponent } from './about/about.component';
import { HikeProjectJoinComponent } from './hike-project-join/hike-project-join.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'upcoming-events',
    component: HikeProjectListComponent
  },
  {
    path: 'upcoming-events/detail/:id',
    component: HikeProjectDetailComponent
  },
  {
    path: 'hike-projects/delete/:id',
    component: HikeProjectEditComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'upcoming-events/detail/join/:id',
    component: HikeProjectJoinComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
