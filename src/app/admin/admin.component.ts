import { Component, OnInit } from '@angular/core';
import { HikeProject } from '../hike-project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submitForm(newName: string,newStartDate: number,newEndDate: number,newRegion: string,newImageUrl: string,newType: string,newLeader: string,newElevation: string,newDescription: string,newLevel: string,newNotes: string,newTotalHiking: string,newRequiredVolunteers: string,newCampingType: string) {

    var newTotalHikingFormated = parseInt(newTotalHiking);
    var newRequiredVolunteersFormated = parseInt(newRequiredVolunteers);

    var newHikeProject = new HikeProject (newName,newStartDate,newEndDate,newRegion,newImageUrl,newType,newLeader,newElevation,newDescription,newLevel,newNotes,newTotalHikingFormated,newRequiredVolunteersFormated,newCampingType)
    console.log(newHikeProject);

  }


}
