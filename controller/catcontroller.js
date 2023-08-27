var cat = require('../model/catmodel');

exports.cat_insert = async (req,res) => {
    try {
        var data = await cat.create(req.body);

        res.status(200).json({
            status:"insert succesful"
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

exports.cat_show = async (req,res) => {

    try {
        var data = await cat.find();

        res.status(200).json({
            status:"category show succesful",
            data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

exports.cat_update = async (req,res) => {

    try {
        var id = req.query.id;

        await cat.findByIdAndUpdate(id,req.body)

        res.status(200).json({
            status:"category update succesful"
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

exports.cat_delete = async (req,res) => {

    try {
        var id = req.query.id;

      await cat.findByIdAndDelete(id);

        res.status(200).json({
            status:"category delete succesful"
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}