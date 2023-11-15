const url =
  "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json ";

async function GetApiData(url, CallBack) {
  const data = await fetch(url);
  const res = await data.json();
  CallBack(res);
}
function CallBack(res) {
  console.log(res);
  const dele = res.map((item) => {
    const obj = { ...item };
    delete obj["description"];
    return obj;
  });
  console.log(dele);
  const calcul = res.reduce((acc, val) => {
    return acc + val.votes;
  }, 0);
  console.log(calcul);
}

console.log(GetApiData(url, CallBack));
