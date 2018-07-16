bodyParser = require('body-parser').json();
// var notRegistered = false;

module.exports = function (app, fs) {

    app.post('/login', bodyParser, (request, response) => {

        var body = request.body;
        // var notRegistered = false;

        // console.log(body);
        fs.readFile('registrationData.txt', 'utf-8', function (err, data) {

            var lines = data.split('\n');

            var strName = body.username;
            var strPass = body.password;

            var log = '';
            for (var i = 0; i < lines.length; i++) {

                if (((lines[i].split(' ')[0].localeCompare(strName) === 0)
                    || (lines[i].split(' ')[1].localeCompare(strName) === 0))
                    && (lines[i].split(' ')[2].localeCompare(strPass) === 0)) {
                    log = 'Good';
                    console.log(log);
                    console.log(body.username + ' ' + body.password + ' ' + '- visit log!');
                    // notRegistered = false;
                    response.redirect("/html/account.html");
                    return;
                }
                // 0-email
                // 1-username
                // 2-password
            }

            console.log(body.username + ' ' + body.password + '\n');
            log = 'The user is not registered or you entered the data incorrectly';
            console.log(log);
            // notRegistered = true;
            response.redirect("/html/login.html");

        });

        // console.log(notRegistered);
        // if (notRegistered) {
        //     fs.appendFile('loginData.txt', body.username + ' ' + body.password + ' ' + body.rememberMe + '\n',
        //         function (err) {
        //             if (err) throw err;
        //             console.log(body.username + ' ' + body.password + ' ' + '- visit log!');
        //             response.redirect("/html/account.html");
        //         });
        // }
    });
};


//     app.get('/login', function (request, response) {
//         fs.readFile('registrationData.txt', 'utf-8', function(err, data) {
//            
//             var lines = data.split('\n');
//
//             var result = [];
//            
//
//
//             for (var i = 0; i < lines.length; i++) {
//                 result.push({'name' : lines[i].split(' ')[0],
//                     'surname': lines[i].split(' ')[1]});
//             }
//
//             response.setHeader('Content-Type', 'application/json');
//             response.send(JSON.stringify(result));
//         });
//     });
// };