
const axios = require('axios');
const token = '0510e000416dcfd13c63498c4300d1150db4f75e';
let makeQrCode = async() => {
  
   let jfhskdjfh = await  get ();
   console.log(jfhskdjfh);
    
  
}
let get = async() => {
  return new Promise(async(resolve, reject) =>{
    try {
      const resp =  await axios.post('https://api-ssl.bitly.com/v4/shorten', {
        long_url: "https://dev.bitly.com",
        domain: "bit.ly",
        group_guid: "Ba1bc23dE4F"
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
      }
      })
      resolve(resp);
    } catch (error) {
      reject(error);
    }
  })
}
console.log(makeQrCode());