const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};


// List of Sets
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
const renderSet = (req, res, responseBody) => {
  let message = null;
  if (!(responseBody instanceof Array)) {
    message = 'API lookup error';
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = 'No sets found';
    }
  }
  res.render('oneset',
    {
      set: responseBody,
      message
    }
  );
};

const set = (req, res) => {
  const path = `/api/sets/63689572ae361318fe9c1fe4`;
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
