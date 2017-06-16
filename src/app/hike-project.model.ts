export class HikeProject {

  public availableVolunteers: number = 0;

  constructor(
    public name: string,
    public startDate: number,
    public endDate: number,
    public region: string,
    public imageUrl: string,
    public type: string,
    public leader: string,
    public elevation: number,
    public description: string,
    public fitnessLevel: string,
    public fitnessNotes: string,
    public totalHiking: number,
    public requiredVolunteers: number,
    public campingType: string
  ) { }
}
