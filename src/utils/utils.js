export function topKFrequent(elements, k) {
  let hash = {};

  for (let elem of elements) {
    if (!hash[elem]) hash[elem] = 0;
    hash[elem]++;
  }

  const hashToArray = Object.entries(hash);

  const sortedArray = hashToArray.sort((a, b) => b[1] - a[1]);
  const firstKofArray = sortedArray.slice(0, k);

  const sortedFirstKElements = firstKofArray.map(elem => elem[0]).sort();
  
  return sortedFirstKElements;
}