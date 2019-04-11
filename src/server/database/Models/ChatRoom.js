import { Schema } from 'mongoose';
import mongoose from '../mongoose';

const chatRoomSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    numOfUsers: {
        type: Number,
        default: 0
    },
    maxUsers: {
        type: Number,
        required: true
    },
    creator: {
        type: String,
        required: true
    }
});

export default mongoose.model('ChatRoom', chatRoomSchema);