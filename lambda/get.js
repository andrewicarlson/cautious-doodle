/**
NOTE: It is not best practice to store the IAM keys in Lambda expressions. It is
only done here for the purposes of this POC.
**/

var AWS = require("aws-sdk");
var docClient;

const table = "{{ dynamo table name }}";
const indexValue = "{{ value to search by }}";
const createdAt = Math.floor(Date.now());
const dynamoDBConfiguration = {
    "accessKeyId": "{{ access key id (IAM) }}",
    "secretAccessKey": "{{ secret access key (IAM) }}",
    "region": "{{ aws region }}"
};

AWS.config.update(dynamoDBConfiguration);

docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {

    var params = {
        TableName: table,
        KeyConditionExpression: "id = :id",
        Limit: 5,
        ScanIndexForward: false,
        ExpressionAttributeValues: {
            ":id": indexValue,
        }
    };
    docClient.query(params, function(err, data) {
        if (err) {
            console.error("Unable to get item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            callback(null, data);
        }
    });
};
