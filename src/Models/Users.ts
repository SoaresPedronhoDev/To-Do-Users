import { Schema, model, Document } from 'mongoose';

interface IItem {
    name: string;
    quantity: number;
}

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    items: IItem[]; 
}

const itemSchema = new Schema<IItem>({
    name: { type: String, required: true },
    quantity: { type: Number, required: true }
});

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    items: { type: [itemSchema], default: [] }
});

const User = model<IUser>('User', userSchema);

export default User;
