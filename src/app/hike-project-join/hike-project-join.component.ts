import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { HikeProject } from '../hike-project.model';
import { HikeProjectService } from '../hike-project.service';
@Component({
  selector: 'app-hike-project-join',
  templateUrl: './hike-project-join.component.html',
  styleUrls: ['./hike-project-join.component.css'],
  providers: [HikeProjectService]
})
export class HikeProjectJoinComponent implements OnInit {
  hikeProjectId: string;
  hikeProjectToJoin;
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
      this.hikeProjectToJoin = dataLastEmittedFromObserver;
    });
  }

  submitFund(newName: string, newEmail: string) {
    var volunteersJoined = parseInt(this.hikeProjectToJoin.availableVolunteers) + 1;
    this.hikeProjectService.updateHikeProjectVolunteer(this.hikeProjectId, volunteersJoined);
    this.router.navigate(['upcoming-events/detail/', this.hikeProjectId]);
  }


}
