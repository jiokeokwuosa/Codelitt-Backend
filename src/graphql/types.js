//  A type in graphql is like a model in mongodb,
// here specify what you want to retrieve eg password
//  won't be specified here, remember to add id field which is not 
// explictely defined in mongo model because they are created automatically

import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLEnumType, GraphQLNonNull, GraphQLInt } from 'graphql';
import { userModel, tagModel, tagListModel } from './../db/models';


// A member can either be an employee or contractor
const MembershipEnumType = new GraphQLEnumType({
    name: 'Type',
    values: {
        Employee: { value: 'employee' },
        Contractor: { value: 'contractor' }
    }
});

//graphql user type/model
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        fullName: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(MembershipEnumType) },
        duration: { type: GraphQLInt },
        role: { type: new GraphQLNonNull(GraphQLString) },
        tags:{
            type: TagListType,
            resolve(parent, args){
                return tagListModel.find({tagId:parent.id})
            }
        }      
    })
})

//graphql tag type/model
const TagType = new GraphQLObjectType({
    name: 'Tag',
    description: 'Tag type',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) }      
    })
})

//graphql taglist type/model
const TagListType = new GraphQLObjectType({
    name: 'TagList',
    description: 'TagList type',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        tag: { 
            type: TagType,
            resolve(parent, args){
                return tagModel.findById(parent.tagId)
            }
        },
        user: { 
            type: UserType,
            resolve(parent, args){
                return userModel.findById(parent.userId)
            }
        }         
    })
})

export {
    UserType,
    TagType,
    TagListType
};