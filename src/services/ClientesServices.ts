import { getCustomRepository } from 'typeorm'
import { ClientesRepository } from '../repositories/ClientesRepository'

interface IClientesCreate {
  cliente: string;
  telefone: string;
  email: string;
}

interface IClientesShow {
  id: string
}


interface IClientesUpdate {
  id: string;
  cliente: string;
  telefone: string;
  email: string;
}

class ClientesServices {

  async create({ cliente, telefone, email }: IClientesCreate) {

    const clientesRepository = getCustomRepository(ClientesRepository)

    const clientes = clientesRepository.create({
      cliente,
      telefone,
      email
    })

    await clientesRepository.save(clientes)

    return clientes
  }

  async index() {
    const clientesRepository = getCustomRepository(ClientesRepository)

    const clientes = await clientesRepository.find()

    return clientes;
  }

  async show({ id }: IClientesShow) {
    const clientesRepository = getCustomRepository(ClientesRepository)

    const clientes = await clientesRepository.findOne({ id })

    console.log(clientes)

    if (!clientes) {
      throw new Error('Client id not found!!')
    }

    return clientes;
  }

  async delete({ id }: IClientesShow) {
    const clientesRepository = getCustomRepository(ClientesRepository)

    const clientes = await clientesRepository.findOne({ id })

    if (!clientes) {
      throw new Error('Client id not found!!')
    }

    return await clientesRepository.delete({ id })
  }

  async update({ id, cliente, telefone, email }: IClientesUpdate) {
    const clientesRepository = getCustomRepository(ClientesRepository)

    let clientes = await clientesRepository.findOne({ id })

    if (!clientes) {
      throw new Error('Client id not found!!')
    }

    await clientesRepository.update(
      { id },
      { cliente, telefone, email }
    )

    const clienteAtualizado = await clientesRepository.findOne({ id })

    return clienteAtualizado
  }
}

export { ClientesServices }