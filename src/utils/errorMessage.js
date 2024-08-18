export const errorMessage = (code, message) => {
    return res.status(code).send({
        status: code,
        message: message
    });
}