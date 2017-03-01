var express = require("express");
var dateFormat = require('dateformat');

var app = express();

app.get('/:userTime', function (req, res) {
  var userTimeInputStr = req.params.userTime;
  var userTimeNaturel;
  var userTimeUnix;
  var response;
  if (Number.isNaN(parseInt(userTimeInputStr))){
    userTimeUnix = Math.round((new Date(userTimeInputStr)).getTime() / 1000);
    if (Number.isNaN(userTimeUnix)){
      //not both return null
      response = {unix : null, natural: null};
      res.send(response);
      return;
    }else{
      //natural
      userTimeNaturel = userTimeInputStr;
      response = {unix : userTimeUnix, natural: userTimeNaturel};
      res.send(response);
      return;
    }
  }else{
    //Unix
    userTimeNaturel = dateFormat(new Date(parseInt(userTimeInputStr) * 1000), 'longDate');
    userTimeUnix = parseInt(userTimeInputStr);
    response = {unix : userTimeUnix, natural: userTimeNaturel};
    res.send(response);
    return;
  }
});

app.get('/', function(req, res){
  res.send('Alfred Zaki FreeCodeCamp TimeStamp Project');
});

app.listen(443, function () {
  //console.log('Timestamp app listening on port 8080!');
});
