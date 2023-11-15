const url =
  "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json ";

async function Getdata(url, onlydata) {
  const data = await fetch(url);
  const res = await data.json();
  onlydata(res);
}

function onlydata(res) {
  console.log(res);
  const desc = res.map((item) => {
    const obj = { ...item };
    delete obj["description"];
    return obj;
  });
  console.log(desc);

  const filterData = desc.filter((item) => item.year == 2020);
  console.log(filterData);
  //votes

  const vote = desc.reduce((acc, val) => {
    return acc + val.votes;
  }, 0);
  console.log(vote);
}

console.log(Getdata(url, onlydata));

const arr = [1, 2, 3, 4, 5, 6];

const mapp = arr.map((item, index, arr) => item * 2);
console.log(mapp);

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
