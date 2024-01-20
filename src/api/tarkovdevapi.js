async function searchItem(iName){    
    const apiEndpoint = "https://api.tarkov.dev";
    var {request,gql} = require('graphql-request');
    const query = gql`{
        items(name: "${iName}"){
            name
            image8xLink
            usedInTasks{
              name
              objectives{
                ... on TaskObjectiveItem{
                  item{
                    name
                  }
                    count
                }
              }
              trader{
                name
              }
            }
        }
    }`
    return request(apiEndpoint, query);
}

export{
    searchItem
};