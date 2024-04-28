import { ErrorUseCase } from "@/shared/core/errors/ErrorUseCase";

export class BadRequestError extends Error implements ErrorUseCase {
  statusCode: number;

  constructor() {
    super("Houve erro na requisição");
    this.statusCode = 400;
  }
}
