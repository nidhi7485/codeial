const profile = (req, res) => {
  return res.render('userProfile', {
    title: 'Profile',
  })
}

module.exports = profile
