import { trigger, state, style, transition, animate } from "@angular/animations";


export let fade = trigger('fade', [
    state('void',  style({opacity:0})),

    transition('void => *', [
    animate(2000)
    ])

    // transition('* => void', [
    //   animate(2000, style({opacity : 0 }))
    // ])
])
  