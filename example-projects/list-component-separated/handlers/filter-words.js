function filterHandler() {
  debugger;
  // read user input
  const newQuery = document.getElementById('query-field').value;

  // read state
  const allWords = words.all.concat();

  // search state
  const newFiltered = allWords.filter(word => word.includes(newQuery));

  // update state
  words.filtered = newFiltered;
  words.query = newQuery;

  // update UI with state
  const listEl = document.getElementById('filtered-words');
  listEl.innerHTML = '';
  const newWordsList = wordsList(words.filtered);
  listEl.appendChild(newWordsList);

  // log user interaction
  //  story name, user input, copy of state
  log.push({
    handler: 'filter',
    newQuery,
    words: JSON.parse(JSON.stringify(words))
  })
}
