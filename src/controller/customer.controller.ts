import express from 'express'
import CustomerDao from '../lib/dao/customer.dao'
import CustomerService from '../services/customer.service'

export default class CustomerController{
    static async createCustomer(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const payload = req.body
            const customer = await CustomerService.createCustomer(payload)
            res.send(customer)
        }
        catch(error){
            next(error)
        }
    }

    static async getAllCustomers(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const customer = await CustomerService.getAllCustomers()
            if(!customer){
                res.status(404).send("not found")
            }
            res.send(customer)
        }
        catch(error){
            next(error)
        }
    }

    static async getCustomerById(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const customer = await CustomerDao.getCustomerById(req.params.customerId)
            if(!customer){
                res.status(404).send("not found")
            }
            res.send(customer)
        }
        catch(error){
            next(error)
        }
    }

    static async removeCustomer(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const customer = await CustomerDao.removeCustomer(req.params.id)
            if(!customer){
                res.status(404).send("not found")
            }
            res.send(customer)
        }
        catch(error){
            next(error)
        }
    }

    static async editCustomer(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const payload = req.body
            const customer = await CustomerDao.editCustomer(req.params.customerId, payload)
            if(!customer){
                res.status(404).send("not found")
            }
            res.send(customer)
        }
        catch(error){
            next(error)
        }
    }
}