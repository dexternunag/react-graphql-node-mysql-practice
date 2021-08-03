import { GraphQLID, GraphQLString } from 'graphql'
import { Users } from '../../Entities/Users'
import { UserType } from '../TypeDefs/User'
import { MessageType } from '../TypeDefs/Messages'


export const CREATE_USER = {
    type: UserType,
    args: {
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString}
    },
    async resolve(_: any, args: any) {
        await Users.insert(args)
        return args
    }
}

export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username: {type: GraphQLString},
        oldPassword: {type: GraphQLString},
        newPassword: {type: GraphQLString},
    },
    async resolve(_: any, args: any) {
        const { username, oldPassword, newPassword } = args
        const user = await Users.findOne({username})

        if (!user) throw new Error('User does not exist!')

        const userPassword = user?.password

        if (oldPassword !== userPassword) throw new Error("Passwords do not match!")

        await Users.update({username}, {password: newPassword})

        return {
            successful: true,
            message: 'Password updated!'
        }
    }
}

export const DELETE_USER = {
    type: MessageType,
    args: {
        id: {type: GraphQLID},
    },
    async resolve(_: any, { id }: any) {
        await Users.delete(id)

        return {
            successful: true,
            message: 'User deleted!'
        }
    }
}