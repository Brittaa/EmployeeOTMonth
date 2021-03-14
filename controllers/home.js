const Info = require('../models/home');

exports.getEditInfo = (req, res) =>{
    const editMode = true;
    const infoId = 1;

    Info.findById(infoId, info => { console.log(info)
        if(!info) {
            return res.redirect('/');
        }
        res.render('admin/edit-info.ejs', {
            pageTitle: 'Edit Info',
            path: '/admin/edit-info',
            editing: editMode,
            info: info
        });

    });
}; 

exports.postEditInfo = (req, res) => {
    const infoId = 1;
    const updatedName = req.body.name;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;

    const updatedInfos = new Info(infoId, updatedName, updatedImageUrl, updatedDescription);
    updatedInfos.save();

};

exports.getInfos = (req, res) => {
    Info.fetchAll(infos => {
        res.render('admin/home.ejs',
        {
            infos: infos, 
            pageTitle: 'Admin Info',
            path: '/admin/home'
        }
        );
    });
};