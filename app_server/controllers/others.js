/* GET Static Pages */
const about = (req, res) => {
  res.render('generic-text',
    {
      title: 'Default Text',
      content: 'Default Text.'
    }
  );
};

module.exports = {
  about
};
