const esClient = require('./1-client');
const createIndex = async function(indexName){
    return await esClient.indices.create({
        index: indexName
    });
};

module.exports = createIndex;

async function test(){
    try {
        const resp = await createIndex('blog');
        console.log(resp);
    } catch (e) {
        console.log(e);
    }
}
test();

// A simple function that takes an index. To test this let’s add a test
// function which will create an index named blog.
