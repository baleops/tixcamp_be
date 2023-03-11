const Categories = require('../../api/v1/categories/model');
const { BadRequestError, NotFoundError } = require('../../errors');

const getAllCategories = async (req) => {
    const result = await Categories.find({organizer: req.user.organizer});
    return result;
};

const createCategories = async (req) => {
    const {name} = req.body;
    const check = await Categories.findOne({name});
    if(check) throw new BadRequestError('Nama kategori sudah digunakan')
    const result = await Categories.create({name, organizer: req.user.organizer});
    return result;
};

const getOneCategories = async(req) => {
    const {id} = req.params;
    const check = await Categories.findOne({_id: id, organizer: req.user.organizer});
    if(!check) throw new NotFoundError(`kategori tidak ditemukan`);
    return check;
};

const updateCategories = async (req) => {
    const {id} = req.params;
    const {name} = req.body;

    const check = await Categories.findOne({name, _id: {$ne:  id}},);
    if(check) throw new BadRequestError('Nama kategori sudah ada');

    const result = await Categories.findOneAndUpdate(
        {_id: id}, 
        {name}, 
        {new: true, runValidators: true});

    if(!result) throw new NotFoundError(`Tidak ada kategori dengan id : ${id}`);
    return result;
};

const deleteCategories = async (req) => {
    const {id} = req.params;
    const check = await Categories.findOneAndDelete({_id: id, organizer: req.user.organizer});
    if(!check) throw new NotFoundError(`Id '${id}' Tidak ditemukan `);
    return check;
};

const checkingCategories = async (id) => {
    const result = await Categories.findOne({ _id: id });
  
    if (!result) throw new NotFoundError(`Tidak ada Kategori dengan id :  ${id}`);
  
    return result;
};


module.exports = {
    getAllCategories,
    createCategories,
    getOneCategories,
    updateCategories,
    deleteCategories,
    checkingCategories,
};