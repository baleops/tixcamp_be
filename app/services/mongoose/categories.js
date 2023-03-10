const Categories = require('../../api/v1/categories/model');
const { BadRequestError, NotFoundError } = require('../../errors');

const getAllCategories = async () => {
    const result = await Categories.find();
    return result;
};

const createCategories = async (req) => {
    const {name} = req.body;
    const check = await Categories.findOne({name});
    if(check) throw new BadRequestError('Nama kategori sudah digunakan')
    const result = await Categories.create({name});
    return result;
};

const getOneCategories = async(req) => {
    const {id} = req.params;
    const check = await Categories.findOne({_id: id});
    if(!check) throw new NotFoundError(`Id '${id}' tidak ditemukan`);
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
}

const deleteCategories = async (req) => {
    const {id} = req.params;
    const check = await Categories.findOneAndDelete({_id: id});
    if(!check) throw new NotFoundError(`Id '${id}' Tidak ditemukan `);
    return check;
}


module.exports = {
    getAllCategories,
    createCategories,
    getOneCategories,
    updateCategories,
    deleteCategories,
};