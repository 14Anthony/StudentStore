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
    return axios.post('/api/addusers',{
        userCreds
    })
    
  },
  getUser: function(email , password ){
      return axios.post('/api/checkuser', {
         password , email
        })
      },
      
  

};

