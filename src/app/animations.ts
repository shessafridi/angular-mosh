import {
  animate,
  animation,
  keyframes,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

export const fadeDown = trigger('fadeDown', [
  state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
  transition(':enter, :leave', [animate('400ms ease-in-out')]),
]);

export const bounceOutLeftAnimation = animation(
  animate(
    '0.6s ease-in-out',
    keyframes([
      style({
        offset: 0.2,
        opacity: 1,
        transform: 'translateX(60px)',
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

export const slideFaded = trigger('slideFaded', [
  // state('void', style({ opacity: 0, transform: 'translateX(60px)' })),

  transition(':enter', useAnimation(slideInRight)),
  transition(':leave', useAnimation(bounceOutLeftAnimation)),
]);


export const slideInAndBouceOut = name => trigger(name, [
  transition(':enter', useAnimation(slideInRight)),
  transition(':leave', useAnimation(bounceOutLeftAnimation)),
]
) 