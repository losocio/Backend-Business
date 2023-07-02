const { loggerStream } = require("./handleLogger.js")

const handleHTTPError = (res, message, statusCode) => {
    res.status(statusCode).send(message)

    loggerStream(message, statusCode)
}

module.exports = { handleHTTPError }