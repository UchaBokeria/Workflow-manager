import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'WorkflowManager';
  
  // API LINK: http://tasksapi.docelove.cf 
  
  // DABLA DAWERILI KODI UNDA GADAVIDES SHESABAMIS CHILD COMPONENTSHI
  
  sorting = false;
  sortingDrop = "";
  editMode = false;
  checkAll = false;
  createNew = false;
  
  // DABLA MOCEMULI TASK -> ARRAY UNDA CHAANACVLO API -TI MOTANILI DATA-TI
  
  Tasks = [
  {title:"Workout",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35"},
  {title:"Workout",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35"},
  {title:"Workout",description:" Lorem tu ragac",done:false,starts:"02:35",ends:"03:35"},
  {title:"Workout",description:" Lorem tu ragac",done:true,starts:"02:35",ends:"03:35"}
  ];
  
  CheckAll(){
    for (let i = 0; i < this.Tasks.length; i++)
      this.Tasks[i].done = false;
      
    for (let i = 0; i < this.Tasks.length; i++) 
      this.Tasks[i].done = this.checkAll;
    
    this.checkAll = !this.checkAll;
  }
  
  Done(){}
  Undone(){}
  Clear(){}
  sort(){}
  search(){}
}
