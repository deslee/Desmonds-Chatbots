'use strict';

console.log('Loading function');

var reddit = require('./util/reddit');

/**
 * Demonstrates a simple HTTP endpoint using API Gateway. You have full
 * access to the request and response payload, including headers and
 * status code.
 *
 * To scan a DynamoDB table, make a GET request with the TableName as a
 * query string parameter. To put, update, or delete an item, make a POST,
 * PUT, or DELETE request respectively, passing in the payload to the
 * DynamoDB API as a JSON body.
 */
exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    switch (event.httpMethod) {
        case 'DELETE':
            done(new Error(`Unsupported method "${event.httpMethod}"`));
            break;
        case 'GET':
            if (event.queryStringParameters && event.queryStringParameters.subreddit) {
              reddit(event.queryStringParameters.subreddit, done);
            }
            //done(new Error(`Unsupported method "${event.httpMethod}"`));
            break;
        case 'POST':
            done(null, event.body);
            //done(new Error(`Unsupported method "${event.httpMethod}"`));
            break;
        case 'PUT':
            done(null, event);
            //done(new Error(`Unsupported method "${event.httpMethod}"`));
            break;
        default:
            done(new Error(`Unsupported method "${event.httpMethod}"`));
    }
};
