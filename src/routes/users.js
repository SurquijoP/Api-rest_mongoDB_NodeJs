const express = require("express");
const userSchema = require("../schemas/user.schema");
const router = express.Router();

//create
router.post('/Users', (req, res)=>{
   const user = userSchema(req.body);
   user.save()
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

//get all
router.get('/Users', (req, res)=>{
   userSchema
   .find()
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

//get by id
router.get('/Users/:id', (req, res)=>{
   const { id } = req.params;
   userSchema
   .findById(id)
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

//Put
router.put('/Users/:id', (req, res)=>{
   const { id }= req.params;
   const { name, age, email } = req.body;
   userSchema
   .updateOne({ _id: id }, { $set: {name, age, email} })
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

//delete
router.delete('/Users/:id', (req, res)=>{
   const { id }= req.params;
   userSchema
   .remove({ _id: id })
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});


module.exports = router;

