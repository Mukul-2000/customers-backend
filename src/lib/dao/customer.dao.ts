import { CustomerModel } from "../../model/customer.model";

export default class CustomerDao{
    static async createCustomer(payload: any){
        const newCustomer =  new CustomerModel({
            firstName: payload.firstName,
            lastName: payload.lastName,
            billingAddress: payload.billingAddress,
            phone: payload.phone,
            email: payload.email
        })
        newCustomer.save()
        return newCustomer
    }

    static async getAllCustomers(){
        return await CustomerModel.find()
    }

    static async getCustomerById(id: any){
        return await CustomerModel.findById(id)
    }

    static async editCustomer(id: any, payload: any){
        return await CustomerModel.findOneAndUpdate({_id: id},
            {
                $set: {
                    firstName: payload.firstName,
                    lastName: payload.lastName,
                    email: payload.email,
                    phone: payload.phone,
                    billingAddress: payload.billingAddress
                }
            }, {new: true})
    }

    static async removeCustomer(id: any){
        return await CustomerModel.findByIdAndDelete(id)
    }
}