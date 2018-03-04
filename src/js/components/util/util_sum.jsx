export const fetchSumAPI = (url) => {
  fetch(url).then((res) => {
          res.json();
        });
};

export const fetchMasteryAPI = (url) => {
  fetch(url,{method:'GET', headers: {
    "Origin": "https://localhost:8080",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Riot-Token": "RGAPI-0598451f-57b5-402f-a3fc-7f408ffe13b4",
    "Accept-Language": "en-US,en;q=0.9",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
  }
}).then((res) => {
          return res.json();
        }).catch(error=> console.log(error));
};
