import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from './Mutations/User'
import { GET_ALL_USERS } from './Queries/User'

const query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getAllUsers: GET_ALL_USERS
    }
})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: CREATE_USER,
        updatePassword: UPDATE_PASSWORD,
        deleteUser: DELETE_USER
    }
})


export const schema = new GraphQLSchema({ query, mutation });