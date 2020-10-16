import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Todo } from 'src/models/Todo';

@Injectable({
  providedIn: 'root',
})
export class FireService {
  constructor(private db: AngularFirestore) {}

  addTodo(body) {
    this.db.collection('todos').add({
      body: body,
      time: new Date(),
    });
  }

  deleteTodo(todo) {
    return this.db.doc('todos/' + todo.id).delete();
  }
  getTodos() {
    return this.db
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
