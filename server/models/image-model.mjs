import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String
}, {
    timestamps: true
})

const galleryShcema = new mongoose.Schema({
    title: String,
    images: [imageSchema]
})

export default new mongoose.model('Images', galleryShcema);