const mongoos = require("mongoose");

const PostScheme = new mongoos.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            max: 400
        },
        img: {
            type: String,
            
        },
        likes: {
            type: Array,
            default: [],
        },

    },
    { timestamps: true }
);
module.exports = mongoos.model("Post", PostScheme);