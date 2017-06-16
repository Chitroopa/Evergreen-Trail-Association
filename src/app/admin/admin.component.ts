import { Component, OnInit } from '@angular/core';
import { HikeProject } from '../hike-project.model';
import { HikeProjectService } from '../hike-project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [HikeProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private hikeProjectService: HikeProjectService) { }

  ngOnInit() { }

  submitForm(newName: string,newStartDate: number,newEndDate: number,newRegion: string,newImageUrl: string,newType: string,newLeader: string,newElevation: string,newDescription: string,newLevel: string,newNotes: string,newTotalHiking: string,newRequiredVolunteers: string,newCampingType: string) {

    var newTotalHikingFormated = parseInt(newTotalHiking);
    var newRequiredVolunteersFormated = parseInt(newRequiredVolunteers);
    var newElevationFormated = parseInt(newElevation);

    var newHikeProject = new HikeProject (newName,newStartDate,newEndDate,newRegion,newImageUrl,newType,newLeader,newElevationFormated,newDescription,newLevel,newNotes,newTotalHikingFormated,newRequiredVolunteersFormated,newCampingType)
    console.log(newHikeProject);
    this.hikeProjectService.addHikeProject(newHikeProject);

  }


}
