export async function searchWikipedia() {
  const url =
    'https://en.wikipedia.org/w/api.php?' +
    'action=query&format=json&origin=*' +
    '&list=search&srsearch=Terminator'

  const response = await fetch(url)
  const data = await response.json()
  const result = data.query.search.map(s => s.title)
  console.log(JSON.stringify(result))
}
