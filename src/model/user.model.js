import { Schema, model } from "mongoose";

const userSchema = new Schema({

    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true,
        minlength: 8
    },
    email:{
        type: String,
        require: true,
        trim: true,
        lowercase: true,
    }
});