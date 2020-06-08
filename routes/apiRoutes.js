module.exports = function (app, db) {
    //crud
    app.get('/api/all', function (req, res) {
        console.log('GET /api/all----------------> ');
        db.item.findAll({}).then((result) => res.json(result));
    });
    app.post('/api/new', function (req, res) {
        console.log('REQ----->>> body name',req.body.name);
        db.item.create({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        }).then((result) => res.json(result)
        );
    });
    app.put('/api/update/:id', function (req, res) {
        db.item.update({
            name: req.body.name,
            price: req.body.price
        }, {
            where: {
                id: req.params.id
            }
        }).then((result) => res.json(result));

    });
    app.delete('/api/delete/:id', function (req,res) {
        db.item.destroy({
            where:{
                id: req.params.id
            }
        }).then(result => res.json(result));
    })
}