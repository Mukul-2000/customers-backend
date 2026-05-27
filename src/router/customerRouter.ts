import { Router } from 'express';
import CustomerController from '../controller/customer.controller';

export default class CustomerRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        // GET
        this.router.get('/getAllCustomers', CustomerController.getAllCustomers)
        this.router.get('/getCustomerById/:customerId', CustomerController.getCustomerById)
        // POST
        this.router.post('/createCustomer', CustomerController.createCustomer);

        // PUT
        this.router.put('/editCustomer/:customerId', CustomerController.editCustomer)

        //DELETE
        this.router.delete('/removeCustomer/:id', CustomerController.removeCustomer)
    }
}
