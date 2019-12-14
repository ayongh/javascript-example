// Sourced from Medium
// Author: Sebastian Eschweiler
var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
var datainfo = require('./UFC')

var schema = buildSchema(`
    type Query {
        fighter(name: String!): fighter
        fighters(weight_class: String): [fighter]
    },
    
    type fighter {
        name: String
        nickName: String
        win: Int
        losses: Int
        height: String
        weightClass: String
        country:String
        State:String
    }
`);

var FigherData = datainfo.data

var getfighter = function(args) { 
    var Name = args.name;
    var fighterInfo ;

    FigherData.forEach(fighter => {
        if(fighter.name == Name)
        {
            fighterInfo = fighter;
        }
    })

    return fighterInfo;
}

var getCourses = function(args) {
    if (args.weight_class) {
        var weightclass = args.weight_class;
        return FigherData.filter(fighters => fighters.weightClass === weightclass);
    } else {
        return FigherData;
    }
}
var root = {
    fighter: getfighter,
    fighters: getCourses
};


var app = express();
app.use('/graphQL', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));


app.listen(3000, () => console.log('Express GraphQL Server Now Running On localhost:3000/graphQL'));