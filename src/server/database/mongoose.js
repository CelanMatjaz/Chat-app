import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/chat_app', { useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log('Connection established');
}).on('error', error => {
    console.log('Connection error:', error);
});

export default mongoose;