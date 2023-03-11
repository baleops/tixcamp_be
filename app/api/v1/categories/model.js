const mongoose = require("mongoose");
const {model, Schema} = mongoose;

let categoryShema = Schema (
    {
        name : {
            type: String,
            minlength: [3, 'Panjang nama kategori minimal 3 karakter'],
            maxlength: [40, 'Panjang maksimum kategori 40 karakter'],
            required: [true, 'Nama kategori harus diisi'],
        },
        organizer: {
            type: mongoose.Types.ObjectId,
            ref: 'Organizer',
            required: true,
          },
    },
    {timestamps : true},
);

module.exports = model('Category', categoryShema);