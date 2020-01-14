// Mapping is like defining a structure to your documents, it specifies
// how your documents will be stored and indexed.
// To create a mapping we use the putMapping method, as shown in the example below.

const esClient = require('./1-client');
const addmappingToIndex = async function(indexName, mappingType, mapping){
    console.log(mapping);
    return await esClient.indices.putMapping({
        index: indexName,
        type: mappingType,
        body: mapping
    });
};

module.exports = addmappingToIndex;


// test function to explain how to invoke.
async function test(){
    const mapping = {
        properties: {
            title: {
                type: "text"
            },
            tags: {
                type: "keyword"
            },
            body: {
                type: "text"
            },
            timestamp: {
                type: "date",
                format: "epoch_millis"
            }
        }
    };
    try {
        const resp = await addmappingToIndex('blog', 'ciphertrick', mapping);
        console.log(resp);
    } catch (e) {
        console.log(e);
    }
}


//test();
