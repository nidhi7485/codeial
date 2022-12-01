const home = (req, res) => {
  console.log(req.cookies)
  res.cookie('user_Id', 11)
  return res.render('home', {
    title: 'Home',
  })
}
module.exports = home
