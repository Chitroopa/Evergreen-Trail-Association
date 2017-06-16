import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { HikeProject } from '../hike-project.model';
import { HikeProjectService } from '../hike-project.service';

@Component({
  selector: 'app-hike-project-edit',
  templateUrl: './hike-project-edit.component.html',
  styleUrls: ['./hike-project-edit.component.css'],
  providers: [HikeProjectService]
})
export class HikeProjectEditComponent implements OnInit {

  hikeProjectId: string;
  hikeProjectToUpdate;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private hikeProjectService: HikeProjectService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.hikeProjectId = (urlParameters['id']);
    });
    this.hikeProjectService.getHikeProjectById(this.hikeProjectId).subscribe(dataLastEmittedFromObserver => {
      this.hikeProjectToUpdate = dataLastEmittedFromObserver;
    });
  }

  beginUpdatingProject(hikeProjectToUpdate) {
    this.hikeProjectService.updateHikeProject(hikeProjectToUpdate);
    this.router.navigate(['admin']);
  }
}
