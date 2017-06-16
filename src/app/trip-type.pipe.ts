import { Pipe, PipeTransform } from '@angular/core';
import { HikeProject } from './hike-project.model';

@Pipe({
  name: 'tripType'
})
export class TripTypePipe implements PipeTransform {

  transform(input: HikeProject[], tripTypeFilter) {

    var output: HikeProject[] = [];

    if(tripTypeFilter === "day")
    {
      for (var i = 0; i< input.length; i++)
      {
        if (input[i].type === "Day Project")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(tripTypeFilter === "extended")
    {
      for (var i = 0; i< input.length; i++)
      {
        if (input[i].type === "Extended Trip")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(tripTypeFilter === "short")
    {
      for (var i = 0; i< input.length; i++)
      {
        if (input[i].type === "Short Trip")
        {
          output.push(input[i]);
        }
      }
      return output;
    }    
    else if(tripTypeFilter === "all")
    {
      return input;
    }
  }

}
