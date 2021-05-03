import mongoose from 'mongoose';

const playerSchema = mongoose.Schema({
    accountName: String,
    kills: String,
    deaths: String,
    asists: String,
    points: String,
});

const PlayerMessage = mongoose.model('PlayerMessage', playerSchema)

export default PlayerMessage;