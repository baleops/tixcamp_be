const Images = require('../../api/v1/images/model');
const {NotFoundError} = require('../../errors');

const createImages = async (req) => {
    const result = await Images.create({
        urlImages: req.file 
            ? `uploads/${req.file.filename}`
            : 'uploads/avatar/default.jpeg',
    });
    return result
};

// tambahkan function checking Image 
const checkingImage = async (id) => {
  const result = await Images.findOne({ _id: id });
  console.log(result);

  if (!result) throw new NotFoundError(`Tidak ada Gambar dengan id :  ${id}`);

  return result;
};
// jangan lupa export checkingImage

module.exports = {createImages, checkingImage};