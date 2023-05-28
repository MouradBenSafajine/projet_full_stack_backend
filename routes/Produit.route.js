const express = require('express');
const router = express.Router();
const Produit = require("../models/Produit")
// afficher la liste des Produit.
router.get('/', async (req, res,) => {
    try {
        const Produits = await
        Produit.find().populate("categorieId").exec();
       
        res.status(200).json(Produits);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// créer un nouvel Produit
router.post('/', async (req, res) => {
    const nouvprod = new Produit(req.body)
    try {
    await nouvprod.save();
    res.status(200).json(nouvprod );
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    
});
// chercher un Produit
router.get('/:ProduitId', async (req, res) => {
    try {
        const Prd= await Produit.findById(req.params.ProduitId);
        res.status(200).json(Prd);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// modifier un Produit
router.put('/:ProduitId', async (req, res) => {
    const { reference,nom, designation, prix, marque, qtestock, imageart, categorieId } = req.body;
    const id = req.params.ProduitId;
    try {
        const Prd1 = {
            reference: reference,nom:nom, designation: designation, prix: prix, marque: marque, qtestock: qtestock, imageart: imageart, categorieId: categorieId
        };
        await Produit.findByIdAndUpdate(id, Prd1);
        res.json(Prd1);
        19
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// Supprimer un Produit
router.delete('/:ProduitId', async (req, res) => {
    const id = req.params.ProduitId;
    await Produit.findByIdAndDelete(id);
    res.json({ message: "Produit deleted successfully." });
});
module.exports = router;
