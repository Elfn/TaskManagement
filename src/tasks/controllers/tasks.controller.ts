import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';
import { CreateTaskDto } from '../dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private _tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this._tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() taskDto: CreateTaskDto): Task {
    console.log(taskDto);
    return this._tasksService.createTask(taskDto);
  }

  // helloWorld() {
  //   this._tasksService.displayMsg('Elimane');
  // }
}
