import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/library', {
            useNewUrlParser: true
        });
        console.log('>>> DB is connected');
    } catch(e) {
        console.log('Something goes wrong');
        console.log(e);
    }
}
