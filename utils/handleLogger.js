const { IncomingWebhook } = require("@slack/webhook")
require("dotenv").config("../.env")

const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK)

const loggerStream = async (message, statusCode) => {
    await webHook.send({
        text: statusCode + ": " + message,
        channel: "#logs",
        username: "HTTP Error Logger"
    })
}

module.exports = { loggerStream }