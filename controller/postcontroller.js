var post = require('../model/postmodel');

exports.add_post = async (req,res) => { //post == > http://localhost:3000/post/add_post

    var data = await post.create(req.body);

    res.status(200).json({
        status:"insert successufully",
        data
    })
}

exports.update_post = async (req,res) => { //post == > http://localhost:3000/post/update_post/<- id apvi

    var id = req.params.id;

    var data = await post.findByIdAndUpdate(id,req.body);

    res.status(200).json({
        status:"update post succesfully",
        data
    })
}

exports.delete_post = async (req,res) =>{  //get == > http://localhost:3000/post/delete_post/< id apvi
    var id = req.params.id ;
    
    var data = await post.findByIdAndDelete(id);

    res.status(200).json({
        status:"delete post succesfully"
    })
} 

exports.show_post = async (req,res) => { //get == > http://localhost:3000/post/show_post
    var data = await post.find();  

    res.status(200).json({
        stauts:"all post show succesfully",
        data
    })
}

exports.single_post = async (req,res) => { //get == > http://localhost:3000/post/single_post/<- id apvi
    var id = req.params.id ;

    var data = await post.findById(id);

    res.status(200).json({
        status:"single post succesfully",
        data
    })
}

exports.search_post = async (req,res) => {
     
    var body = req.query.body;

    var data = await post.find({body:body})

    res.status(200).json({
        status:"search succesfullly",
        data
    })

}

exports.limit_skip_post = async(req,res) => {

    var limit = 5;
    var total_record = await post.find().count();
    var page_no = req.query.page;

    if(page_no==undefined)
    {
        page_no=1;
    }

    var skip = (page_no-1)*5;
    
    var data1= await post.find().limit(limit).skip(skip);

    var page = Math.ceil(total_record/limit);

    res.status(200).json({
        status:"limit skip sucessfully",
        data1,
        page,
        page_no,
        limit,
        skip,
        total_record
    })
}