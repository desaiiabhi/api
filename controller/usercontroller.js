const { name } = require('ejs');
var user = require('../model/usermodel');

exports.add_user = async (req,res) => { // post == http://localhost:3000/users/add_user
    var data = await user.create(req.body);

    res.status(200).json({
        status:"user insert successfully",
        data
    })
}

exports.all_user = async (req,res) => { // get== http://localhost:3000/users/all_user
    var data = await user.find();

    res.status(200).json({
        status:"user show successfully",
        data
    })
}

exports.update_user = async (req,res) => { // post == http://localhost:3000/users/update_user/<-- user id apvi
    var id = req.params.id;

     await user.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"user update successfully",
    }) 
}

exports.delete_user = async (req,res) => { // get == http://localhost:3000/users/delete_user/<-- user id apvi
    var id = req.params.id;

     await user.findByIdAndDelete(id);

    res.status(200).json({
        status:"user deleted successfully",
    }) 
}

exports.single_user = async (req,res) => { // get == http://localhost:3000/users/single_user/<-- id apvi user ni
    var id= req.params.id;

    var data = await user.findById(id);

    res.status(200).json({
        status:"single user show succesfully",
        data
    })
}

exports.search_user = async (req,res) => { // get == http://localhost:3000/users/search_user?name=abhi <-- user name search krvanu
    var name = req.query.name;

    var data = await user.find({firstName:name});

    res.status(200).json({
        status:"single search name succesfull",
        data
    })
}

exports.filter_user = async (req,res) => {
    var key = req.query;

    var data = await user.find(key);

    res.status(200).json({
        status:"single filtername succesfull",
        data
    })
}


exports.limitskip_user = async(req,res) =>
{
    var limit = 5;
    var total_record = await user.find().count();

    var page_no = req.query.page_no;

    if(page_no==undefined)
    {
        page_no=1;
    }

    var skip= (page_no-1)*limit;
    var data = await user.find().limit(limit).skip(skip);

    var page = Math.ceil(total_record/limit);

    res.status(200).json({
        status:"successfully",
        data,
        total_record,
        page,
        page_no
    })
}