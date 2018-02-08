export const fetchItemsAPI = (url) => {
  fetch(url).then((res) => {
          return res.json();
        }).then(data=>{
          return({
            champion: data.id,
            name:data.name
          });
        });
};
