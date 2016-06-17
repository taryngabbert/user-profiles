const users= [
    {
      name: 'Preston McNeil',
      password: 'password1',
      friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
      name: 'Ryan Rasmussen',
      password: '$akgfl#',
      friends: ['Lindsey Mayer']
    },
    {
      name: 'Terri Ruff',
      password: 'hunter2',
      friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
      name: 'Lindsey Mayer',
      password: '777mittens777',
      friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
  ]

module.exports = {
  login (req, res, next) {
    for (let i=0; i<users.length; i++) {
      if (req.body.name === users[i].name && req.body.password === users[i].password) {
        req.session.friends =  users[i].friends;
        req.session.currentUser= req.body.name;
        return res.status(200).json({userFound: true});
      };
    } return res.status(200).json({userFound: false});
  }
}
