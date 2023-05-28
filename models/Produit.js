const mongoose = require("mongoose")
const Categorie = require("./Categorie");
const ProduitSchema = mongoose.Schema({
    reference: { type: String, required: true, unique: true },
    nom: { type: String, required: true },
    prix: { type: Number, required: false },
    marque: { type: String, required: true },
    qtestock: { type: Number, required: false },
    imageart: { type: String, required: true },
    categorieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Categorie
    }
})
module.exports = mongoose.model('Produit', ProduitSchema)