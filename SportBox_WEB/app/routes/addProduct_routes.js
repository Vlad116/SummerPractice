bodyParser = require('body-parser').json();

module.exports = function (app, fs) {

    app.post('/addproduct', bodyParser, function (request, response) {

        var body = request.body;

        // console.log(body);
        var d = new Date();
        var month = ["January", "February", "March", "April", "may", " June",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var Time = d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear() + " year " + d.getHours() + ":" + d.getMinutes();

        fs.appendFile('catalogueData.txt', body.productname + ' ' + body.price + ' '
            // + Time + ' '
            + body.available
            // + ' '
            // + body.shortdescription + ' '
            // + body.description + ' '
            // + body.characteristics
            + '\n',

            function (err) {
                if (err) throw err;

                console.log(body.productname + ' ' + body.price + '\n'
                    + "Added in " + Time + '\n'
                    + body.available + '\n'
                    // + body.shortdescription + '\n'
                    // + body.description + '\n'
                    // + body.characteristics + '\n'
                    + '- product added!'
                );
                response.redirect("/html/account.html");
            });
    });

    app.get('/addproduct', function (request, response) {

        fs.readFile('catalogueData.txt', 'utf-8', function (err, data) {

            var lines = data.split('\n');
            var result = [];

            for (var i = 0; i < lines.length; i++) {
                result.push({
                    'productname': lines[i].split(' ')[0],
                    'price': lines[i].split(' ')[1],
                    // 'date'
                    'available': lines[i].split(' ')[2],
                    // 'shortdescription': lines[i].split(' ')[3],
                    // 'description': lines[i].split(' ')[4],
                    // '.characteristics': lines[i].split(' ')[5]
                });
            }

            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify(result));

        });
    });

};
