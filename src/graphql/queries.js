import { GraphQLList, GraphQLID } from 'graphql';
import { UserType } from './types';
import { userModel } from './../db/models';

const getAllUsers = {
    type: new GraphQLList(UserType),
    description:"Retrieves all users",
    resolve(parent, args) {
        return userModel.find()
    }
}

const getSingleUser = {
    type: UserType,
    description:"Retrieves single user",
    args:{
        id:{type: GraphQLID}
    },
    resolve(parent, args) {
        return userModel.findById(args.id)
    }
}


export {
    getAllUsers,
    getSingleUser
}