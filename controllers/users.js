const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
//
//
//
//
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json(users);
  } catch (error) { 
    console.log(error);
    res.status(500).send(error.message);
  }
};
//
//
//
//

const getUser = async (req, res) => {
  try {
    const{id}=req.params;
    const users = await User.findById(id);
    res.status(201).json(users);
  } catch (error) { 
    console.log(error);
    res.status(500).send(error.message);
  }
};
//
//
//
//
const updateUser = async (req, res) => {
  try {
    const {body,params:{id},
        }=req;
    const users = await User.findByIdAndUpdate(id, body,{new:true});//new:true returns the new updates
    res.status(201).json(users);
  } catch (error) { 
    console.log(error);
    res.status(500).send(error.message);
  }
};
//
//
//
//
//
const deleteUser = async (req, res) => {
  try {
    const { params:{id},
        }=req;
    const users = await User.findByIdAndDelete(id);
    res.status(201).json(users);
  } catch (error) { 
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};
