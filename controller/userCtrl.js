const User = require("../models/userModel");

const createUser = async (req, res) => {
    const email =  req.body.email;
    const findUser =  await User.findOne({email: email});
    if(!findUser) {
        //create a new user
        const newuser = User.create(req.body);
        res.json(newuser);
    }
    else {
        //user already Exists
        res.json({
            msg: "User Already Exists",
            success: false,
        });
    }
}

module.exports={createUser};