/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express'),
    app = express();
    
require('./lib/reverser')(app);

app.listen(8080);