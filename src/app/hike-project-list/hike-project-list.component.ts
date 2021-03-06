import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { HikeProject } from '../hike-project.model';
import { HikeProjectService } from '../hike-project.service';

@Component({
  selector: 'app-hike-project-list',
  templateUrl: './hike-project-list.component.html',
  styleUrls: ['./hike-project-list.component.css'],
  providers: [HikeProjectService]
})
export class HikeProjectListComponent implements OnInit {

  hikeProjects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByLevel: string = "all";
  filterByType: string ="all";

  constructor(
    private router: Router,
    private hikeProjectService: HikeProjectService
  ) { }

  ngOnInit() {
    this.hikeProjects = this.hikeProjectService.getHikeProjects();
  }

  goToDetailHikeProject(clickedHikeProject) {
    this.router.navigate(['upcoming-events/detail', clickedHikeProject.$key]);
  }

  deleteHikeProject(clickedHikeProject) {
    if(confirm("Are you sure? Do you want to delete this hike project?")){
      this.hikeProjectService.deleteHikeProject(clickedHikeProject.$key);
    }
  }

  updateHikeProject(clickedHikeProject) {
    this.router.navigate(['hike-projects/delete', clickedHikeProject.$key]);
  }

  onChangeLevel(option) {
    this.filterByLevel = option;
  }

  onChangeType(option) {
    this.filterByType = option;
  }

}
