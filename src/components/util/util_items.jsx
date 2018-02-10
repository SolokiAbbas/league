export const fetchItemsAPI = (url) => {
  fetch(url,{method:'GET', headers: {
    "Origin": "http://localhost:8080",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Riot-Token": "RGAPI-93111a49-da86-4648-99e0-84ae8b063dae",
    "Accept-Language": "en-US,en;q=0.9",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
  }
}).then((res) => {
          return res.json();
        });
};
