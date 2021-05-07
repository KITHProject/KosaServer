import PlayerMessage from '../models/playerMessage.js'

export const getPlayers = async (req, res) => {
    try {
        const playerMessages = await PlayerMessage.find().sort({"kills": -1}).exec() ;

        res.status(200).json(playerMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPlayer = async (req, res) => {
    const player = req.body;

    const newPlayer = new PlayerMessage(player);

    try {
        await newPlayer.save();

        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}