module.exports = function (app, fs) {
    app.get('/addproduct', (req, res) => {
        var url = require("url");
        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;
        // console.log('Name ' + query['name']);
        // console.log('Surname ' + query['surname'])
        fs.appendFile('catalogueData.txt', query['productname'] + ' ' + query['price'] + '\n'
            + query['available'] + '\n'
            + query['shortdescription'] + '\n'
            + query['description'] + '\n'
            + query['characteristics'] + '\n',
            function (err) {
                if (err) throw err;
                console.log(query['productname'] + ' ' + query['price'] + '\n'
                    + query['available'] + '\n'
                    + query['shortdescription'] + '\n'
                    + query['description'] + '\n'
                    + query['characteristics'] + '\n' +
                    '- product added!');
                res.send();
            });
    });
};