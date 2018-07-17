bodyParser = require('body-parser').json();
// var notRegistered = false;

module.exports = function (app, fs) {

    app.post('/login', bodyParser, (request, response) => {

        var body = request.body;

        fs.readFile('registrationData.txt', 'utf-8',function (err, data) {

            var lines = data.split('\n');

            var strName = body.username;
            var strPass = body.password;

            var log = '';
            for (var i = 0; i < lines.length - 1; i++) {

                if (((lines[i].split(' ')[0].localeCompare(strName) === 0)
                    || (lines[i].split(' ')[1].localeCompare(strName) === 0))
                    && (lines[i].split(' ')[2].localeCompare(strPass) === 0)) {
                    log = 'Good';
                    console.log(log);
                    console.log(body.username + ' ' + body.password + ' ' + '- visit log!');

                    response.redirect("/html/account.html");
                    return;
                } else {

                }

            }

            log = 'The user is not registered or you entered the data incorrectly';
            console.log(log);
            // notRegistered = true;
            response.redirect("/html/login.html");

        });

    });
};
