import { Injectable } from '@angular/core';
import { HikeProject } from './hike-project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class HikeProjectService {

  hikeProjects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.hikeProjects = database.list('hikeProjects');
  }

  getHikeProjects() {
    return this.hikeProjects;
  }

  addHikeProject(newHikeProject: HikeProject){
    this.hikeProjects.push(newHikeProject);
  }

  getHikeProjectById(hikeProjectId: string) {
    return this.database.object('hikeProjects/' + hikeProjectId);
  }

  deleteHikeProject(localHikeProjectToDelete){
    var projectEntryInFirebase = this.getHikeProjectById(localHikeProjectToDelete);
    projectEntryInFirebase.remove();
  }

}
