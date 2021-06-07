const { saveCallId, getCallId } = require("./model")

exports.saveCallId = async(req, res) => {
    try {
        const { id, signalData } = req.body;
        await saveCallId(id, signalData);
        res.status(200).send(true);
    } catch (er) {
        res.status(400).send(er.message);

    }
}
exports.getCallId = async(req, res) => {
    try {
        const { id } = req.params;
        const code = await getCallId(id);
        res.status(200).send({ code });
    } catch (er) {
        res.status(400).send(er.message);

    }
}