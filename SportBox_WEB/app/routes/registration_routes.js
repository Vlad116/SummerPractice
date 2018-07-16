bodyParser = require('body-parser').json();

module.exports = function (app, fs) {

    app.post('/registration', (request, response) => {

        var body = request.body;

        fs.appendFile('registrationData.txt', body.email + ' ' + body.username + ' '
            + body.confirmpassword + ' '
            + body.firstname + ' ' + body.secondname + ' '
            + body.city + ' ' + body.state + ' ' + body.subscribe + '\n',
            function (err) {
                if (err) throw err;
                console.log(body.email + ' ' + body.username + '\n'
                    + body.confirmpassword + '\n'
                    + body.firstname + ' ' + body.secondname + '\n'
                    + body.city + ' ' + body.state + '\n' + body.subscribe + '\n' + '-registrated!' + '\n');
                response.redirect("/html/account.html");
            });
    });

};