var AWS = require('aws-sdk');
    AWS.config.loadFromPath('./config.json');

var sns = new AWS.SNS();

var publishParams = { 
  TopicArn : "arn:aws:sns:eu-central-1:714093434206:myTopic",
  Message: "Hello World" 
};

sns.publish(publishParams, publishCallback);

function publishCallback(err, data) {
  if (err) console.error(err)
  console.log("published message");
  console.log(data);
}