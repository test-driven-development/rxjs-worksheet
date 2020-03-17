import { keypresses$ } from './key-presses'
import { searchWikipedia } from './search-wikipedia'
import { Observable } from 'rxjs'

keypresses$.forEach(k => console.log(k.keyCode))

function getWikipediaSearchResults$() {
  return Observable.create(function forEach(observer) {
    let isCancelled = false
    searchWikipedia().then(results => {
      if (!isCancelled) {
        observer.next(results)
        observer.complete()
      }
    })
    return function dispose() {
      isCancelled = true
    }
  })
}

getWikipediaSearchResults$()
  .forEach(results => console.log(results))
  .then(() => console.log('completed'))
