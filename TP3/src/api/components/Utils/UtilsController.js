//Ping
exports.ping = (req, res) => {
    return res.status(200).json({ result: 'pong' });
};