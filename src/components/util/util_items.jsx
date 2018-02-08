export const fetchItemsAPI = (url,app) => {
  fetch(url).then((res) => {
          return res.json();
        }).then(data=>{
          app.setState({
            champion: data.id,
            name:data.name
          });
        });
};
