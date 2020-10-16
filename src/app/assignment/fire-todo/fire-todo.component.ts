import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { slideFaded } from 'src/app/animations';
import { FireService } from 'src/app/services/fire.service';
import { Todo } from '../../../models/Todo';

@Component({
  selector: 'app-fire-todo',
  templateUrl: './fire-todo.component.html',
  styleUrls: ['./fire-todo.component.scss'],
  animations: [slideFaded],
})
export class FireTodoComponent implements OnInit {
  todos$: Observable<Todo[]>;
  constructor(private db: FireService) {}

  trackById(index: number, todo: Todo): string {
    return todo.id;
  }

  add(form: FormGroup) {
    this.db.addTodo(form.value.body);
    form.reset();
  }
  delete(todo) {
    this.db.deleteTodo(todo);
  }

  ngOnInit(): void {
    this.todos$ = this.db.getTodos();
  }
}
