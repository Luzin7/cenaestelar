import { ErrorUseCase } from "../core/errors/ErrorUseCase";

export class ErrorPresenter {
  static hadleError(error: ErrorUseCase) {
    throw new Error(`${error.message}` ?? "Erro interno");
  }
}
