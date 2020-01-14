const esClient = require('./1-client');

esClient.ping({
// ping usually has a 3000ms timeout
    requestTimeout: Infinity,
    hello: 'Elasticsearch'
}, function (error) {
    if (error) {
        console.trace('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
    }
});
