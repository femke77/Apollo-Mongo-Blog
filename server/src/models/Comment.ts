import { Schema, type Document } from 'mongoose';
import dayjs from 'dayjs';

export interface IComment extends Document {
    username: string;
    comment: string;
    dateCreated: Date | string;

}

const commentSchema = new Schema<IComment>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },     
        comment: {
            type: String,
            required: true,
        },
        dateCreated: {
            type: Date,
            default: Date.now,
            get: (timestamp: Date): string => dayjs(timestamp).format('MMM DD, YYYY [at] hh:mm A'),
        },

    },

    {
        toJSON: {
            virtuals: true,
            getters: true
        },
    }
);




export default commentSchema;
