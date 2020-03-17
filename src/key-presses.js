import { fromEvent } from 'rxjs'

export const keypresses$ = fromEvent(
  document.getElementById('textbox'),
  'keypress'
)
