import { Schema, model } from 'mongoose';
import { User, UserFlags } from '../interfaces/User';

const userSchema = new Schema<User>(
	{
		id: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		flags: {
			type: Number,
			enum: UserFlags,
			required: true,
		},
	},
	{ timestamps: true }
);

export default model<User>('User', userSchema);
