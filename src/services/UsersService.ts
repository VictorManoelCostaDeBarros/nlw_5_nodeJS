import { UsersRepository } from '../repositories/UsersRepository'
import { getCustomRepository, Repository } from "typeorm"
import { User } from '../entities/User'

class UsersService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }
    async create(email: string) {
        // verificar se o usuario existe
        const userExists = await this.usersRepository.findOne({
            email,
        })
        // se existir retorna o id
        if(userExists) {
            return userExists;
        }
        const user = this.usersRepository.create({
            email,
        })

        await this.usersRepository.save(user);
        // se não existir, salvar no DB
        return user;
    }

    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({
            email
        })

        return user
    }
}

export { UsersService }