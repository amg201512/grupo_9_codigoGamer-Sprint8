const db=require('../database/models');
const Op=db.Sequelize.Op;

module.exports={
    all:(req,res)=>{
        db.Product
        .findAll()
        .then(products=>{
            return res.json({
            count:products.length,
            products:products 
            })
        })
    },
    countByCategory:(req,res)=>{
        db.Category
        .findAll()
        .then(categories=>{
            return res.json({
               totalCategories:categories.length,
               categories:categories,

            })
        })
    },
    showProduct:(req,res)=>{
        db.Product
        .findByPk(req.params.id)
        .then(product=>{
            return res.json({
            data:product
            })
        })
    }
}

