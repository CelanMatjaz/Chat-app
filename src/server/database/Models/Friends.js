import { Schema } from 'mongoose';
import mongoose from '../mongoose';

const friendsSchema = new Schema({
    userId1: {
        type: String,
        required: true
    },
    userId2: {
        type: String,
        required: true
    }
});

export default mongoose.model('Friends', friendsSchema);