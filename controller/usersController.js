require("dotenv-safe").config();

const userModel = require("../models/userModels");

//ok
const findAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find();
    res.status(200).json(allUsers);
  } catch {
    console.log(error);
    res.status(500).json({ message: error.message });
  };
};

const findUserById = async (req, res) => {
  try {
    const findUser = await userModel.findById(req.params.id);
    res.status(200).json(findUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const updateUserPassword = async (req, res) => {
  try {
    const {
      email,
      password,
      
      
    } = req.body;
    const updateUserPass = await userModel.findByIdAndUpdate(req.params.id, {
      email,
      password,
    });

    res.status(200).json({ message: "User password successfully updated", updateUserPass });
  } catch {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};


//ok
const addNewUser = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      password,
      cpf,
      birth,
     street,
     neighborhood, 
     number,
     city,
    state 
    
    } = req.body;
    const newUser = new userModel({
      name,
      phone,
      email,
      password,
      cpf,
      birth,
      street,
      neighborhood,
      number,
      city, 
      state 
    
    });

    const savedUser = await newUser.save();

    res.status(201).json({ message: "New user successfully added", savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  };
};

const updateUser = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      password,
      cpf,
      birth,
       street,
       neighborhood, 
       number,
      city, 
      state 
    
    } = req.body;
    const UpdateUser = await userModel.findByIdAndUpdate(req.params.id, {
       name,
      phone,
      email,
      password,
      cpf,
      birth,
      street,
      neighborhood,
       number,
      city, 
      state 
    
    
    });

    res.status(200).json({ message: "User successfully updated", UpdateUser });
  } catch {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

//ok
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await userModel.findByIdAndDelete(id);
    const message = `The user with id ${deleteUser.id } was successfully deleted` ;
    res.status(200).json({ message });
  } catch (error){
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};


const findByNameUser = async (req, res) => {
  
  try {
  
    const findUser = await userModel.find({ nome : req.params.name } )
    return res.status(200).json(findUser);
   
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const findByUserEmail = async (req, res) => {
  try {
    const findUser = await userModel.find(req.params.email);
    res.status(200).json(findUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};


module.exports = {
  findAllUsers,
  findUserById,
  addNewUser,
  updateUserPassword,
  updateUser,
  deleteUser,


  findByNameUser,
  findByUserEmail,

  
};