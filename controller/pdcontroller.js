var user = require('../model/pdmodel');

exports.pd_insert = async (req,res) => {
    try {
        var data = await user.create(req.body);

        res.status(200).json({
            status:"insert succesful"
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

exports.pd_show = async (req,res) => {

    try {
        var data = await user.find();

        res.status(200).json({
            status:"product show succesful",
            data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

exports.pd_update = async (req,res) => {

    try {
        var id = req.query.id;

        await user.findByIdAndUpdate(id,req.body)

        res.status(200).json({
            status:"product update succesful"
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

exports.pd_delete = async (req,res) => {

    try {
        var id = req.query.id;

        await user.findByIdAndDelete(id)

        res.status(200).json({
            status:"product delete succesful"
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

exports.pd_id_search = async (req,res) => {

    try {
        var id = req.params.id;

        var data = await user.findById(id)
      
     
        res.status(200).json({
            status:"product search succesful",
            data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}


exports.pd_nm_search = async (req,res) => {

    try {
        var title = req.query.title;

        var data = await user.find({title})
      
     
        res.status(200).json({
            status:"product search name succesful",
            data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}


exports.pd_limit_skip = async (req,res) => {

    try {
        var limit =5;
        var total = await user.find().count();
        var skip = (limit-1)*5;
        var page_no=req.query.page_no;
        
        if(page_no==undefined)
        {
            page_no=1;

        }

        page=Math.ceil(total/limit);

        var data = await user.find().limit(limit).skip(skip);
      
     
        res.status(200).json({
            status:"product search name succesful",
            data,
            limit,
            total,
            page_no,
            page,
            skip
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}


exports.pd_category = async (req,res) => {

    try {
        var a = req.query.category;

        var data = await user.find({category:a})
      
     
        res.status(200).json({
            status:"category of product succesful",
            data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

exports.category = async (req,res) => {

    try {

        var data = await user.find(req.body.category);
      
        res.status(200).json({
            status:"category all succesful",
            data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}
