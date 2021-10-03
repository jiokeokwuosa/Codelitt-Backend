//import required stuff from graphql
import {GraphQLSchema, GraphQLObjectType} from 'graphql';
//import queries
import {getAllUsers, getSingleUser} from './queries';
//import mutations
import {registerUser, updateUser, deleteUser} from './mutation';

//Define QueryType
const QueryType = new GraphQLObjectType({
    name:'QueryType',
    description:'Queries',
    fields:{getAllUsers, getSingleUser}
})

//Define MutationType
const MutationType = new GraphQLObjectType({
    name:'MutationType',
    description:'Mutations',
    fields:{registerUser, updateUser, deleteUser}
})

export default new GraphQLSchema({
    query:QueryType,
    mutation:MutationType    
})