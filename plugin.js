var chatserver = new chat.server();
window.commands["clearChat"] = function (args) {
    chatserver.clearChat()
}