import { Request, response, Response } from 'express'
import { ClientesServices } from '../services/ClientesServices'

class ClientesController {

  async create(request: Request, response: Response) {
    const { cliente, telefone, email } = request.body

    const clientesServices = new ClientesServices()

    try {
      const teachers = await clientesServices.create({ cliente, telefone, email })
      return response.json(teachers)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const clientesServices = new ClientesServices()

    try {
      const teachers = await clientesServices.index()
      return response.json(teachers)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const clientesServices = new ClientesServices()
    const { id } = request.params
    try {
      const teachers = await clientesServices.show({ id })
      return response.json(teachers)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const clientesServices = new ClientesServices()
    const { id } = request.params

    try {
      const teachers = await clientesServices.delete({ id })
      return response.json({ message: 'Teacher id deleted successfully !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    const { cliente, telefone, email  } = request.body
    const { id } = request.params

    const clientesServices = new ClientesServices()

    try {
      const teachers = await clientesServices.update({ id, cliente, telefone, email })
      return response.json(teachers)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { ClientesController }

