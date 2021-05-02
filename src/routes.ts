import { Router } from 'express'
import { MessagesController } from './controllers/MessagesController';
import { SettingsController } from './controllers/SettingsController'
import { UsersController } from './controllers/UsersController';

/**
 * GET = Busca
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
 */

const routes = Router()

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

/**
 * Tipos de parametros
 * Route Params = Parametros de rotas = https://localhost:3333/settings/1
 * Query Params = Filtro e buscas = https://localhost:3333/settings/1?search=algumacoisa
 * Body Params = Inserções = {"search" => "algumacoisa"} 
 */

routes.post('/settings', settingsController.create)
routes.get('/settings/:username', settingsController.findByUsername)
routes.put('/settings/:username', settingsController.update)


routes.post('/users', usersController.create)

routes.post('/messages', messagesController.create)
routes.get('/messages/:id', messagesController.showByUser)




export { routes }