const { genererateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
    const email =  req.body.email;
    const findUser =  await User.findOne({email: email});
    if(!findUser) {
        //create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    }
    else {
        //user already Exists
       throw new Error("User Already Exists");
    }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    //check if user exists or not in db
    const findUser = await User.findOne({ email });
    if(findUser && await findUser.isPasswordMatched(password)){
     res.json({
        _id: findUser?._id,
        firstname: findUser?.firstname,
        lastname: findUser?.lastname,
        email: findUser?.email,
        mobile: findUser?.mobile,
        token:genererateToken(findUser?._id),
     });
    }else{
        throw new Error("Invalid Credentials");
    }

});


//get all users
const getallUsers = asyncHandler(async (req, res) => {
    try {
        const getUsers =  await User.find();
        res.json(getUsers);
    }
    catch (error) {
     throw new Error(error);
    }
})

//get a single user
const getaUser = asyncHandler(async (req, res ) => {
    const {id} = req.params;
    try {
   const getaUser =  await User.findById(id);
   res.json ({
    getaUser,
   })
    }catch (error) {
        throw new Error(error);
        }
});


module.exports={createUser, loginUserCtrl, getallUsers, getaUser};