import CustomerDao from "../lib/dao/customer.dao";

export default class CustomerService{
    static async createCustomer(payload: any){
        return await CustomerDao.createCustomer(payload)
    }

    static async getAllCustomers(){
        return await CustomerDao.getAllCustomers()
    }
}