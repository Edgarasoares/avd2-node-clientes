import { Router } from 'express'

import { ClientesController } from './controllers/ClientesController'

const routes = Router();

const clientesController = new ClientesController()

routes.post('/clientes', clientesController.create)
routes.get('/clientes', clientesController.index)
routes.get('/clientes/:id', clientesController.show)
routes.delete('/clientes/:id', clientesController.delete)
routes.put('/clientes/:id', clientesController.update)

export { routes }

