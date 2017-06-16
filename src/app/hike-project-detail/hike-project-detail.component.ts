import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { HikeProject } from '../hike-project.model';
import { HikeProjectService } from '../hike-project.service';


@Component({
  selector: 'app-hike-project-detail',
  templateUrl: './hike-project-detail.component.html',
  styleUrls: ['./hike-project-detail.component.css'],
  providers: [HikeProjectService]
})

export class HikeProjectDetailComponent implements OnInit {

  hikeProjectId: string;
  hikeProjectToDisplay;

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
    this.hikeProjectToDisplay = this.hikeProjectService.getHikeProjectById(this.hikeProjectId);
  }
}
