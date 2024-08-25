import { Schema, model, models } from 'mongoose';


export interface IPost {
    title: string,
    content: string
}
const PostSchema = new Schema<IPost>({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true});


export const Post = models.Post || model<IPost>('post', PostSchema)
