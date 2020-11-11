import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  addUser: function(userCreds){
    console.log('button click');
    axios.post('/api/addusers',{
        userCreds
    }).then((res)=>{
        console.log(res.data)
    });
    
  },
  getUser: function(username, email){
        axios.get('/api/checkuser', {
        }).then(function(data){
          console.log(data);
          console.log('mock user',data.data);
        })
      },
      
  

};

