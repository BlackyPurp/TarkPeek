async function searchItem(iName){    
    const apiEndpoint = "https://api.tarkov.dev";
    var {request,gql} = require('graphql-request');
    const query = gql`{
        items(name: "${iName}"){
            id
            name
            shortName
        }
    }`
    return request(apiEndpoint, query);
}

export{
    searchItem
};