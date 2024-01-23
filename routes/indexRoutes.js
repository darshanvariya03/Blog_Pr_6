const express = require('express');

const routes = express.Router();

const indexController = require('../controllers/indexController');

const multer = require('multer');

//file upload
const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"uploads")
    },
    filename : (req,file,cb) => {
        let img = Date.now()+"-"+file.originalname
        cb(null,img);
    }
})
const fileUpload = multer({storage : storage}).single('avatar');

routes.get('/',indexController.viewRecord);
routes.get('/add',indexController.add);
routes.post('/addData',fileUpload,indexController.addData);
routes.get('/deleteData',indexController.deleteData);
routes.get('/editData',indexController.editData);
routes.post('/updateRecord',fileUpload,indexController.updateRecord);
routes.get('/mainBlog', indexController.blogData)



module.exports = routes;
