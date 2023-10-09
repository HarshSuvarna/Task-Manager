let hh = [
  { id: 1, complete: false },
  { id: 2, complete: false },
  { id: 3, complete: false },
  { id: 4, complete: false },
  { id: 5, complete: false },
];

console.log((hh[hh.findIndex((e) => e.id === 2)].complete = false));
