const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const validator = require("validator");
const schema = mongoose.Schema;

const userSchema = new schema({
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


userSchema.statics.signup = async function(fullName, email, phoneNumber, password) {
    if (!fullName || !email || !phoneNumber || !password) {
        throw Error("All fields must be filled");
    }

    if (!validator.isEmail(email)) {
        throw Error("Email must be valid");
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Password must be strong");
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("Email already in use");
    }

    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);

    const user = await this.create({
        fullName,
        phoneNumber,
        email,
        password: hash
    });

    return user;
};

userSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error("All field must be important")
    }

    const user = await this.findOne({email});

    if(!user){
        throw Error("Incorrect Mail")
    }

    const match = await bcryptjs.compare(password,user.password);

    if(!match){
        throw Error("Incorrect Password");
    }

    return user;
}

const Auth = mongoose.model("Auth", userSchema);
module.exports = Auth;
