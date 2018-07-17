bodyParser = require('body-parser').json();

module.exports = function (app, fs) {

    app.post('/registration', (request, response) => {

        var body = request.body;

        fs.readFile('registrationData.txt', 'utf-8', function (err, data) {

            var lines = data.split('\n');
            var strEmail = body.email;
            var strUsername = body.username;

            var log = '';
            for (var i = 0; i < lines.length; i++) {

                if ((lines[i].split(' ')[0].localeCompare(strEmail) === 0) && (lines[i].split(' ')[1].localeCompare(strUsername) === 0)) {
                    log = ' - This email is already registered and this username' + body.username + 'is already taken!';
                    console.log(body.email + log);
                    notRegistered = false;
                    response.redirect("/html/registration.html");
                    return;
                } else if (lines[i].split(' ')[0].localeCompare(strEmail) === 0) {
                    log = ' - This email is already registered!';
                    console.log(body.email + log);
                    notRegistered = false;
                    response.redirect("/html/registration.html");
                    return;
                }

            }

            fs.appendFile('registrationData.txt', body.email + ' ' + body.username + ' '
                + body.confirmpassword + ' '
                + body.firstname + ' ' + body.secondname + ' '
                + body.city + ' ' + body.state + ' ' + body.subscribe + '\n',
                function (err) {
                    if (err) throw err;
                    console.log(body.email + ' ' + body.username + '\n'
                        + body.confirmpassword + '\n'
                        + body.firstname + ' ' + body.secondname + '\n'
                        + body.city + ' ' + body.state + '\n' + body.subscribe + '\n' + '- registrated!' + '\n');
                    response.redirect("/html/account.html");
                });

        });
    });
};