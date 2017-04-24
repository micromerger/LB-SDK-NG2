import { Component } from '@angular/core';
import { Task, FireLoopRef } from './shared/sdk/models';
import { RealTime } from './shared/sdk/services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private task      : Task = new Task();
  private tasks     : Task[] = new Array<Task>();
 private taskRef : FireLoopRef<Task>;
  constructor(private rt: RealTime) {
    this.rt.onReady().subscribe(() => {
    this.taskRef = this.rt.FireLoop.ref<Task>(Task);
    this.taskRef.on('change').subscribe((tasks: Task[]) => this.tasks = tasks);
    });
  }
  create(): void {
    this.taskRef.create(this.task).subscribe(() => this.task = new Task());
  }

  update(todo: Task): void {
    this.taskRef.upsert(todo).subscribe();
  }

  remove(todo: Task): void {
    this.taskRef.remove(todo).subscribe();
  }
}
