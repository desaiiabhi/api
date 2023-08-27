var cart=require('../model/cartmodel');
var product=require('../model/pdmodel');

exports.cart_add = async (req,res) => {     //get method -> api==http://localhost:3000/cart/cart_add/ <-id apvi
    try {
        var id = req.params.id;   //id api ma pass kravi

        var data1 = await product.findById(id)  //product na tabel ma je id api hoy tena data lidha and tene data1 ma store karavya

        var obj =       //product mathi find kareli id na data ne object mathi cart name na tabel ma data moklavya
        {
            "title":data1.title,
            "description": data1.description,
             "price": data1.price,
             "discountPercentage": data1.discountPercentage,
             "rating": data1.rating,
             "stock":  data1.stock,
             "brand": data1.brand,
             "category": data1.category,
             "thumbnail": data1.thumbnail,
             "images": data1.images,
             "quantity":1
        }

        var data = await cart.find({"title":data1.title})   //cart na tabel mathi title match karavyu tene data ma store karavyu

            if(data.length==0)          //data ni length check karavi jo je api ma apeli id na match data ny hoy to create thy jashe.
            {
                var data = await cart.create(obj);
            }
            else        //jo id na match thata data already hashe to quantity plus thy jashe.
            {
                var qty =  parseInt(data[0].quantity); 

                var obj = {
                    "quantity":qty+1
                }

                var id = data[0].id;

                var data = await cart.findByIdAndUpdate(id,obj);
            }
            

        res.status(200).json({
            status:"insert succesful",
            data

        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
   
}


exports.cart_update = async (req,res) => {   //get method -> api===http://localhost:3000/cart/cart_update/<-id apvi 

    var id= req.params.id;   //id api mathi leva

    var data = await cart.find(); //all data find karava

    var qty =  parseInt(data[0].quantity);  //all data mathi quantitiy ni value lidhi
    
    var obj = {
        "quantity":qty-1    //object ni andar quantity ni value increment or update karava
    }

    var id = data[0].id;   // all data mathi id lidhi and update krva teno use karva mate
   
    var data1 = await cart.findByIdAndUpdate(id,obj);  //id and obj call karavya 

    res.status(200).json({
        status:"cart updated succesful",
        data1
    })
}

exports.cart_delete = async (req,res) => // get method -> api=http://localhost:3000/cart/cart_delete/<-id apvi
{
    try {
        var id = req.params.id;

        await cart.findByIdAndDelete(id)

        res.status(200).json({
            status:"cart deletd succesfull"
        })
        } catch (error) {
            res.status(200).json({
                error
         })
    }
}

exports.cart_show = async (req,res) => //get method api=http://localhost:3000/cart/cart_show
{
    try {

        await cart.find()

        res.status(200).json({
            status:"cart data show succesfull"
        })
        } catch (error) {
            res.status(200).json({
                error
         })
    }
}

exports.cart_show_single = async (req,res) => //get method api=http://localhost:3000/cart/cart_show_single/<-id apvi
{
    try {
         var id = req.params.id;

        var data= await cart.findById(id)

        res.status(200).json({
            status:"single cart show succesfull",
            data
        })
        } catch (error) {
            res.status(200).json({
                error
         })
    }
}