
/**
 * Função que retorna uma resposta de erro para a API.
 * @param {Object} res - O objeto de resposta do Express.
 * @param {number} statusCode - O código de status HTTP da resposta.
 * @param {string} message - A mensagem de erro.
 */
const errorResponse = (res, statusCode, message) => {
    res.status(statusCode).json({
        status: "error",
        message: message,
    });
};

/**
 * Função que retorna uma resposta de sucesso para a API.
 * @param {Object} res - O objeto de resposta do Express.
 * @param {number} statusCode - O código de status HTTP da resposta.
 * @param {any} data - Os dados da resposta.
 */
const successResponse = (res, statusCode, data) => {
    res.status(statusCode).json({
        status: "success",
        data: data,
    });
};

module.exports = {
    errorResponse,
    successResponse,
};