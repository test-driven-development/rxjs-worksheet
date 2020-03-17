import { keypresses$ } from './key-presses'
import { searchWikipedia } from './search-wikipedia'

keypresses$.forEach(k => console.log(k.keyCode))
searchWikipedia().then(x => console.log(x))
