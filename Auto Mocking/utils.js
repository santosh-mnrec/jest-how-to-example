const utils = {
    getJSON: data => JSON.stringify(data),
    authorize: () => 'token',
    isAuthorized: secret => secret === 'wizard'
  };
  
 module.exports= utils;