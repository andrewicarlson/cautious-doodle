/**
NOTE: It is not best practice to store the IAM keys in Lambda expressions. It is
only done here for the purposes of this POC.
**/

var AWS = require("aws-sdk");
var docClient;

const table = "{{ dynamo table name }}";
const indexValue = "{{ primary index value (used to query) }}";
const createdAt = Date.now();
const dynamoDBConfiguration = {
    "accessKeyId": "{{ access key id (IAM) }}",
    "secretAccessKey": "{{ secret access key (IAM) }}",
    "region": "{{ aws region }}"
};

AWS.config.update(dynamoDBConfiguration);
docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: table,
    ConsistentRead: true,
    Item: {
        "id": indexValue,
        "created_at": createdAt
    }
};

exports.handler = (event, context, callback) => {

    docClient.put(params, function(err, data) {
        if (err) {
            callback(null, "Unable to add item.");
        } else {
            callback(null, "Added item.");
        }
    });
};
