console.log('the reply bot is starting');

var Twit = require('twit');
var correos = require('correos-chile');
var config = require('./config.js');
var T = new Twit(config);

var stream = T.stream('user');

stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {

    var replyto = eventMsg.in_reply_to_screen_name;
    var text = eventMsg.text;
    var from = eventMsg.user.screen_name;

    console.log(replyto + ' ' + from);

    array = text.split(' ');
    codigo = array[1];

    correos([codigo]).then(
        r => {
            estado1 = JSON.stringify(r[0].registros[0].estado).toLowerCase();
            lugar1 = JSON.stringify(r[0].registros[0].lugar);
            console.log(estado1);
            randNum = Math.floor((Math.random() * 1000) + 1);

            if (replyto === 'Tracking_Bot') {
                var newtweet = '@' + from + ' Tu paquete tiene este estado: ' + estado1 + " en " + lugar1 + " | Tu número de la suerte 😀: " + randNum;
                tweetIt(newtweet);
            }

        }).catch(
        e => {
            console.log(e);
        })
    
}

function tweetIt(txt) {
    var tweet = {
        status: txt
    }

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response){
        if(err){
            console.log("something went wrong");
        } else {
            console.log("it worked");
        }
    }
}
