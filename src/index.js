async function searchWikipedia() {
  const url =
    'https://en.wikipedia.org/w/api.php?action=query&' +
    'format=json&origin=*&list=search&srsearch=Terminator'

  const response = await fetch(url)
  if (response && response.status >= 200 && response.status < 400) {
    const data = await response.json()
    const result = data.query.search.map(s => s.title)
    console.log(JSON.stringify(result))
  } else {
    console.log('error')
  }
}

searchWikipedia()
