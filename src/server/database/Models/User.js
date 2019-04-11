import { Schema } from 'mongoose';
import mongoose from '../mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    currentChatRoom: {
        type: String,
        default: null
    }
});

export default mongoose.model('User', userSchema);