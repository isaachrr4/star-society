const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema ({
    reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 180
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },  
},
{
    toJSON: {
        getters: true,
      virtuals: true,
    },

    id: false,
}
);
 const Reactions = model("Reactions", ReactionSchema);
 module.exports = Reactions;