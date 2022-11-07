const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://pure-temple-67771.herokuapp.com';
}

// List of Sets
// Renders Home page
const renderHomepage = (req, res, responseBody) => {
  let message = null;
  if (!(responseBody instanceof Array)) {
    message = 'API lookup error';
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = 'No sets found';
    }
  }
  res.render('sets-list',
    {
      sets: responseBody,
      message
    }
  );
};
// Requests the list of sets from API
const homelist = (req, res) => {
  const path = '/api/sets';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, {statusCode}, body) => {renderHomepage(req, res, body);}
  );
};

// One Set
// Renders one set page
const renderSet = (req, res, responseBody) => {
  let message = null;
  // // Returns error for some reason
  // if (!(responseBody instanceof Array)) {
  //   message = 'API lookup error';
  //   responseBody = [];
  // } else {
  //   if (!responseBody.length) {
  //     message = 'No sets found';
  //   }
  // }
  res.render('one-set',
    {
      set: responseBody,
      message
    }
  );
};

// Requests one set from API
const set = (req, res) => {
  const setid = req.params.setid;
  const path = `/api/sets/${setid}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  };
  request(
    requestOptions,
    (err, {statusCode}, body) => {renderSet(req, res, body);}
  );
};



module.exports = {
  homelist,
  set
};
