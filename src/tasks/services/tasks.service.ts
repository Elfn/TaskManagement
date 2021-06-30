import { Injectable } from '@nestjs/common';
import { Task } from '../models/task.model';
import { v4 } from 'uuid';
import { CreateTaskDto } from '../dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  public getAllTasks(): Task[] {
    return this.tasks;
  }

  public createTask(taskDto: CreateTaskDto): Task {
    const { title, description } = taskDto;
    const task: Task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
