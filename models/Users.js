const { Schema, model} = require('mongoose');

const UserSchema = new Schema ({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a vaild email adress!!"]
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Thoughts",
        },
      ],
  
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "Users",
        },
      ],
    },
    {
      toJSON: {
        virtuals: true,
      },
  
      id: false,
    

});

const Users = model("Users", UserSchema);

module.exports = Users;