import { searchWikipedia } from './search-wikipedia'
import { Observable } from 'rxjs'

export function getWikipediaSearchResults$() {
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
