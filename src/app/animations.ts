import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeDown = trigger('fadeDown', [
  state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
  transition(':enter, :leave', [animate('400ms ease-in-out')]),
]);

export const slideFaded = trigger('slideFaded', [
  // state('void', style({ opacity: 0, transform: 'translateX(60px)' })),
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(60px)' }),
    animate('0.5s cubic-bezier(.5,.53,.27,.79)'),
  ]),
  transition(':leave', [
    animate(
      '0.7s ease-in-out',
      keyframes([
        style({
          offset: 0.2,
          opacity: 1,
          transform: 'translateX(20px) scaleX(0.9)',
        }),
        style({
          offset: 1,
          opacity: 0,
          transform: 'translateX(-100%) scaleX(2)',
        }),
      ])
    ),
  ]),
]);
