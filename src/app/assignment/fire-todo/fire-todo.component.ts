import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Todo } from '../../../models/Todo';

@Component({
  selector: 'app-fire-todo',
  templateUrl: './fire-todo.component.html',
  styleUrls: ['./fire-todo.component.scss'],
})
export class FireTodoComponent implements OnInit {
  todos$: Observable<Todo[]>;
  constructor(private db: AngularFirestore) {}

  add(form: FormGroup) {
    this.db.collection('todos').add({
      body: form.value.body,
      time: new Date(),
    });
    form.reset();
  }
  delete(todo) {
    this.db.doc('todos/' + todo.id).delete();
  }

  ngOnInit(): void {
    this.todos$ = this.db
      .collection('todos', (todos) => todos.orderBy('time', 'desc'))
      .snapshotChanges()
      .pipe(
        map((todos) => {
          return todos.map((todo) => {
            const data = todo.payload.doc.data() as Todo;
            const id = todo.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }
}
