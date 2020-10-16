import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideFaded = trigger('slideFaded', [
  state('void',
   style({ opacity: 0, transform: 'translateX(60px)' })),
  transition('void <=> *', [animate('0.5s cubic-bezier(.5,.53,.27,.79)')]),
]);
