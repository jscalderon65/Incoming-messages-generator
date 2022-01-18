const icomingMessages = require('./incomingMessages.js')
const basePhone = 3000000001
const limitPhones = 10
const shortCode = 2020
const messagesResponses = ['3765 Si', '3765 No', '3765 No se']
icomingMessages(basePhone, limitPhones, shortCode, messagesResponses)
