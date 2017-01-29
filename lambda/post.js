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
    ConditionExpression: "attribute_not_exists(created_at)",
    Item: {
        "id": "vue-demo"
    }
};

exports.handler = (event, context, callback) => {

    params.Item.created_at = (event.created_at === undefined ? 'No-Date' : event.created_at);

    docClient.put(params, function(err, data) {
        if (err) {
            callback(null, "Unable to add item: " + err);
        } else {

            callback(null, "Added item: " + JSON.stringify(data));
        }
    });
};
