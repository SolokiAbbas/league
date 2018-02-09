export const fetchItemsAPI = (url) => {
  fetch(url).then((res) => {
          return res.json();
        });
};
