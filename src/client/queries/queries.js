import gql from 'graphql-tag';

export const getChatRooms = gql`
    query{
        ChatRooms{
            id
            name
            numOfUsers
            maxUsers
        }
    }
`;

export const getChatRoomData = gql`
    query($id: ID!){
        ChatRoom(id: $id){
            name 
            numOfUsers
            maxUsers
        }
    }
`;