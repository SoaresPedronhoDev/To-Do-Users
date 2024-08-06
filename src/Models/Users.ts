import { Schema, model, Document } from 'mongoose';

interface IItem {
    text: string;
    description : string;
    done?: boolean;
}

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    items: IItem[];
}

const itemSchema = new Schema<IItem>({
    text: { type: String, required: true },
    description : {type : String, required : true},
    done: { type: Boolean, default: false }
});

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    items: { type: [itemSchema], default: [] }  // Campo de items que referencia itemSchema
});

const User = model<IUser>('User', userSchema);

export default User;
