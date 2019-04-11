import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema
} from 'graphql';

import User from '../Models/User';
import ChatRoom from '../Models/ChatRoom';

const ChatRoomType = new GraphQLObjectType({
    name: 'ChatRoom',
    args: { id: { type: GraphQLID } },
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        numOfUsers: { type: GraphQLInt },
        maxUsers: { type: GraphQLInt },
        creator: {
            type: UserType,
            resolve: (parent) => {

            }
        },
        currentUsers: {
            type: new GraphQLList(UserType),
            resolve: async parent => await User.find({ currentChatRoom: parent.id })
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    args: { id: { type: GraphQLID } },
    fields: () => ({
        name: { type: GraphQLString },
        currentChatRoom: { 
            type: ChatRoomType,
            
        },
        
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        ChatRooms: {
            type: new GraphQLList(ChatRoomType),
            resolve: async () => {
                return await ChatRoom.find({});
            }
        },
        ChatRoom: {
            type: ChatRoomType,
            args: { id: { type: GraphQLID } },
            resolve: async (parent, { id }) => {
                return await ChatRoom.findById(id);
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQuery
});