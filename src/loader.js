function sortByTitle(a, b) {
  const na = a.title.toLowerCase();
  const nb = b.title.toLowerCase();

  if (na < nb) {
    return -1;
  }

  if (na > nb) {
    return 1;
  }

  return 0;
}

export default async function loader() {
  const data = await fetch('/songs')
    .then((r) => r.json());

  return data.sort(sortByTitle);
}
