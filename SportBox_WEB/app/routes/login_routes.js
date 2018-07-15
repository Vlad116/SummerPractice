module.exports = function (app, fs) {
    app.get('/login', (req, res) => {
        var url = require("url");
        var url_parts = url.parse(req.url, true);
        var query = url_parts.query;
        // console.log('Name ' + query['name']);
        // console.log('Surname ' + query['surname'])
        fs.appendFile('loginData.txt', query['username'] + ' ' + query['password'] + ' ' + query['rememberMe'] + '\n',
            function (err) {
                if (err) throw err;
                console.log(query['username'] + ' ' + query['password'] + ' ' + '- visit log!');
                res.send();
            });
    });
};