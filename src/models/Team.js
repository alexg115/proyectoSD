const {Schema, model} = require('mongoose');

const teamSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: false
    },
    user: String,
    team: [String]
    
}, {
    timestamps: true
});

module.exports = model('Team', teamSchema);