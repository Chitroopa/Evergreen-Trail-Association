import { Pipe, PipeTransform } from '@angular/core';
import { HikeProject } from './hike-project.model';

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(input: HikeProject[], levelFilter) {
    var output: HikeProject[] = [];
    if(levelFilter === "Easy-Moderate")
    {
      for (var i = 0; i< input.length; i++)
      {
        if (input[i].fitnessLevel === "Easy-Moderate")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(levelFilter === "Moderate")
    {
      for (var i = 0; i< input.length; i++)
      {
        if (input[i].fitnessLevel === "Moderate")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(levelFilter === "Moderate-Difficult")
    {
      for (var i = 0; i< input.length; i++)
      {
        if (input[i].fitnessLevel === "Moderate-Difficult")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(levelFilter === "Strenuous")
    {
      for (var i = 0; i< input.length; i++)
      {
        if (input[i].fitnessLevel === "Strenuous")
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(levelFilter === "all")
    {
      return input;
    }
  }

}
