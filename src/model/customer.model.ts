import { Schema, Document, model } from 'mongoose';


export interface ICustomer extends Document{
    firstName: string,
    lastName: string,
    billingAddress: String,
    phone: number,
    email: string,
    
}

const customerSchema = new Schema<ICustomer>({
    firstName: {
        type: String,
    },
    lastName: {type: String},
    billingAddress: {type: String},
    phone: {type: Number},
    email: {type: String}
}, {
    collection: 'customers',
    versionKey: false,
    timestamps: true
})

export const CustomerModel = model<ICustomer>('customers', customerSchema)