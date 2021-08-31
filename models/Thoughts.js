const {Schema, model} = require('mongoose');

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minlength:1,
        maxlength:180

    },
    createdAt:{
        type: Date,
        defualt: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true,
      },
      reactions: [ReactionSchema],
    },
    {
      toJSON: {
          getters: true,
        virtuals: true,
      },
  
      id: false,

});



ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });


const Thoughts = model("Thoughts", ThoughtSchema);

module.exports = Thoughts;