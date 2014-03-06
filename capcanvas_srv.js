var http = require('http'),
    fs   = require('fs');


var PORT     = 9999,
    ROWS     = 4,
    FILE_TPL = './frames/{FRAME}.png',
    I        = 0;


var zeroPad = function(nr, rows) {
    var nrS = nr.toString();
    var l = nrS.length;
    if (l === rows) { return nrS; }
    var pad = new Array(rows - l + 1).join('0');
    return pad + nrS;
};


var cb = function(err) {};


var srv = http.createServer(function(req, res) {

    var i = I++;

    console.log('#%d start', i);

    var body = [];

    req.on('data', function(data) {
        body.push( data.toString() );
    });

    req.on('end', function(data) {
        body = body.join('');

        res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
        res.end('');

        var data64 = body.replace(/^data:image\/png;base64,/, '');

        var buf = new Buffer(data64, 'base64');

        var fileName = FILE_TPL.replace('{FRAME}', zeroPad(i, ROWS));

        fs.writeFile(fileName, buf, 'binary', cb);

        console.log('#%d -> %s', i, fileName);

        res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
        res.end('');
    });
});

console.log('capcanvas server running on port %d...', PORT);
srv.listen(PORT);
