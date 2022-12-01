const path = require('path')

const uploads = async (req, res) => {
  console.log(req.files)
  const productImage = req.files.userfile
  const filePath = path.join(__dirname, '../csvfile/' + `${productImage.name}`)
  await productImage.mv(filePath)
  res.status(200).json({ image: { src: `/csvfile/${productImage.name}` } })
}

module.exports = uploads
