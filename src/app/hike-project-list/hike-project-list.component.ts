import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { HikeProject } from '../hike-project.model';
import { Router } from '@angular/router';
import { HikeProjectService } from '../hike-project.service';

@Component({
  selector: 'app-hike-project-list',
  templateUrl: './hike-project-list.component.html',
  styleUrls: ['./hike-project-list.component.css'],
  providers: [HikeProjectService]
})
export class HikeProjectListComponent implements OnInit {

  hikeProjects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private hikeProjectService: HikeProjectService) { }

  ngOnInit() {
    this.hikeProjects = this.hikeProjectService.getHikeProjects();
  }

  goToDetailHikeProject(clickedHikeProject) {
    this.router.navigate(['upcoming-events/detail', clickedHikeProject.$key]);
  }

}
