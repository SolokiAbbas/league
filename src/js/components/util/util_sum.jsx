export const fetchSumAPI = (url) => {
  fetch(url,{method:'GET', headers: {
    "Origin": "https://developer.riotgames.com",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Riot-Token": "RGAPI-0b8d853c-dc2a-4eec-9051-2abdc7e452db",
    "Accept-Language": "en-US,en;q=0.9",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
  }
}).then((res) => {
          return res.json();
        }).catch(error=> console.log(error));
};
