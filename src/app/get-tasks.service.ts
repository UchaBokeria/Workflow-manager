import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetTasksService {
  link = "";
  
  tasks = [
     {id:1,title:"Workout",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35"},
     {id:2,title:"Workout",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35"},
     {id:3,title:"Workout",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35"},
     {id:4,title:"Workout",description:" Lorem tu ragac",done:true,starts:"02:35",ends:"03:35"}
   ];
  
  constructor(private Http:HttpClient) { }
  
  getAll(){
    // return this.Http.get(this.link);
    return this.tasks;
  }
  getQuant(date){
    // return this.Http.get(this.link + "?date=" + date);
    return this.tasks.length;
  }
}
