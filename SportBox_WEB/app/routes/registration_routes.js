module.exports = function (app, fs) {
    app.get('/registration', (req, res) => {
        var url = require("url");
        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;
        // console.log('Name ' + query['name']);
        // console.log('Surname ' + query['surname'])
        fs.appendFile('registrationData.txt', query['email'] + ' ' + query['username'] + '\n'
            + query['firstname'] + ' ' + query['secondname'] + '\n'
            + query['city'] + ' ' + query['state'] + '\n' + query['subscribe'] + '\n' + '\n',
            function (err) {
                if (err) throw err;
                console.log(query['email'] + ' ' + query['username'] + '\n'
                    + query['firstname'] + ' ' + query['secondname'] + '\n'
                    + query['city'] + ' ' + query['state'] + '\n' + query['subscribe'] + '\n' + '-registrated!' + '\n');
                res.send();
            });
    });
};