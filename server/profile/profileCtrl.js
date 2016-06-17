const profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
]

module.exports = {
  getProfile (req, res, next) {
    friendsProfiles = [];
    for (let i =0; i<profiles.length; i++) {
      for (let n = 0; n < req.session.friends.length; n++) {
        if (profiles[i].name === req.session.friends[n]) {
          friendsProfiles.push(profiles[i]);
        }
      }
    }
    return res.status(200).json({
      currentUser: req.session.currentUser,
      friends: friendsProfiles
    });
  },
  deleteFriend (req, res, next) {
    console.log(req.body);
  }
}
