import { Schema } from 'mongoose';
import mongoose from '../mongoose';

const messageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    chatId: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    userId: {
        type: String,
        required: true
    }
});

export default mongoose.model('Message', messageSchema);