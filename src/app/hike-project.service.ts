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

  updateHikeProject(localUpdatedProject) {
    var projectEntryInFirebase = this.getHikeProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({
      name: localUpdatedProject.name,
      startDate: localUpdatedProject.startDate,
      endDate: localUpdatedProject.endDate,
      region: localUpdatedProject.region,
      imageUrl: localUpdatedProject.imageUrl,
      type: localUpdatedProject.type,
      leader: localUpdatedProject.leader,
      elevation: localUpdatedProject.elevation,
      fitnessLevel: localUpdatedProject.fitnessLevel,
      fitnessNotes: localUpdatedProject.fitnessNotes,
      totalHiking: localUpdatedProject.totalHiking,
      requiredVolunteers: localUpdatedProject.requiredVolunteers,
      campingType: localUpdatedProject.campingType
    });
  }

}
