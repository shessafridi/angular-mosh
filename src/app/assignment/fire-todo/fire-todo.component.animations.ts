import {
  animateChild,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { slideInAndBouceOut } from 'src/app/animations';

export const fireTodoAnimations = [
  trigger('fireAnimations', [
    transition(
      ':enter',
      query(
        '@todoAnimation',
        [style({ opacity: 0 }), stagger(200, animateChild())],
        { optional: true }
      )
    ),
  ]),
  slideInAndBouceOut('todoAnimation'),
];
