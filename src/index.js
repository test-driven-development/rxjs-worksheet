import { keypresses$ } from './key-presses'
import { searchWikipedia } from './search-wikipedia'

keypresses$.forEach(k => console.log(k.keyCode))

function getWikipediaSearchResults$() {
  return {
    forEach: function forEach(observer) {
      let isCancelled = false
      searchWikipedia().then(results => {
        if (!isCancelled) {
          observer.next(results)
          observer.complete()
        }
      })

      return {
        dispose: function dispose() {
          isCancelled = true
        }
      }
    }
  }
}

getWikipediaSearchResults$().forEach({
  next: results => console.log(results),
  complete: () => console.log('completed')
})
