import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetTasksService {
  link = "";
  
  tasks = [
   {title:"Workout",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35"},
   {title:"Workout",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35"},
   {title:"Workout",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35"},
   {title:"Workout",description:" Lorem tu ragac",done:true,starts:"02:35",ends:"03:35"}
   ];
  
  constructor(private Http:HttpClient) { }
  
  getAll(){
    // return this.Http.get(this.link);
    return this.tasks;
  }
}
