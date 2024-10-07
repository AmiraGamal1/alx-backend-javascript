export default function cleanSet(set, startString) {
  let res;
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  res = Array.from(set).filter((w) => typeof w === 'string' && w.startsWith(startString));
  res = res.map((w) => w.slice(startString.length));
  return res.join('-');
}
