import { keypresses$ } from './key-presses'
import { getWikipediaSearchResults$ } from './get-wikipedia-search-results'

keypresses$.forEach(k => console.log(k.keyCode))

getWikipediaSearchResults$()
  .forEach(results => console.log(results))
  .then(() => console.log('completed'))
