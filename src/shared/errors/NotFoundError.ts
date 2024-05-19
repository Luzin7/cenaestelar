import { ErrorUseCase } from '@shared/core/errors/ErrorUseCase'

export class NotFoundError extends Error implements ErrorUseCase {
  statusCode: number

  constructor() {
    super('Conteúdo não encontrado')
    this.statusCode = 404
  }
}
