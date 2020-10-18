import {
  animate,
  animation,
  keyframes,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

export const bounceOutLeftAnimation = animation(
  animate(
    '0.5s ease-in-out',
    keyframes([
      style({
        offset: 0.2,
        opacity: 1,
        transform: 'translateX(50px)',
      }),
      style({
        offset: 0.4,
        opacity: 0,
        transform: 'translateX(-40%)',
      }),
      style({
        offset: 1,
        opacity: 0,
        transform: 'translateX(-100%)',
      }),
    ])
  )
);

export const slideInRight = animation(
  [
    style({ opacity: 0, transform: 'translateX(60px)' }),
    animate('{{duration}} {{easing}}'),
  ],
  {
    params: {
      duration: '0.5s',
      easing: 'cubic-bezier(.5,.53,.27,.79)',
    },
  }
);

export const slideInAndBouceOut = (name) =>
  trigger(name, [
    transition(':enter', useAnimation(slideInRight)),
    transition(':leave', useAnimation(bounceOutLeftAnimation)),
  ]);
