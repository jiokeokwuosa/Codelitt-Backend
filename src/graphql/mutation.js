import { GraphQLInt, GraphQLID, GraphQLString } from 'graphql';
import { userModel } from './../db/models';


const registerUser ={
    type: GraphQLString,
    description:"Registers a new user",
    args:{       
        fullName:{type:GraphQLString},
        type:{type:GraphQLString},
        duration:{type:GraphQLInt},
        role:{type:GraphQLString},
    },
    async resolve(parent, args){
        const {fullName, type, duration,role} = args
        const user = {
            fullName,
            type,
            duration,
            role
        }
        const result = await userModel.create(user)        
        return JSON.stringify(result)
    },

}

const updateUser ={
    type: GraphQLString,
    description:"Update a user",
    args:{       
        id:{type:GraphQLID}, 
        fullName:{type:GraphQLString},
        type:{type:GraphQLString},
        duration:{type:GraphQLInt},
        role:{type:GraphQLString},     
    },
    async resolve(parent, args){
        const {id,fullName, type, duration,role} = args
        const newData = {
            fullName,
            type,
            duration,
            role
        }
        await userModel.findByIdAndUpdate(id,newData)        
        return "User updated successfully"
    },

}

const deleteUser = {
    type: GraphQLString,
    description:"Delete a user",
    args:{       
        id:{type:GraphQLID}        
    },
    async resolve(parent, args){
        const {id} = args      
        await userModel.findByIdAndDelete(id)        
        return "User deleted successfully"
    },
}


export {
    registerUser,
    updateUser,
    deleteUser
}
