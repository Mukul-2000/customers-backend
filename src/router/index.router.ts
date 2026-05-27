import express, { NextFunction, Request, Response } from 'express';
import { IServer } from '../lib/interfaces';
import CustomerRouter from './customerRouter';

export default class Routes {

    static init(server: IServer): void {
        const router: express.Router = express.Router();

        server.app.use('/', router);
        // Health check
        server.app.get('/healthCheck', async (req: Request, res: Response, next: NextFunction) => {
            const healthcheck: any = {
                dbConnect: server.isDbConnected,
                uptime: process.uptime(),
                message: 'OK',
                time: new Date().toLocaleString()
            };
            try {
                res.send(healthcheck);
            } catch (e) {
                healthcheck.message = e;
                res.status(503).send(healthcheck);
            }
        });

        server.app.use('/api/v1', new CustomerRouter().router )
    }
}        