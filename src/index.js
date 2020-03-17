import { fromEvent } from 'rxjs'
import { searchWikipedia } from './search-wikipedia'

const textbox = document.getElementById('textbox')
const keypresses$ = fromEvent(textbox, 'keypress')
keypresses$.forEach(k => console.log(k.keyCode))

searchWikipedia()
