import { Component, OnInit } from '@angular/core';
import { GetTasksService } from '../../get-tasks.service';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.sass']
})
export class AlltasksComponent implements OnInit {
  

  Tasks;
  constructor(private Task:GetTasksService) { }

  ngOnInit(): void {
    this.Tasks = this.Task.getAll();
  }
  

}
