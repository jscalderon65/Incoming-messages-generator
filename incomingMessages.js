const axios = require('axios')
module.exports = (basePhone, limitPhones, shortCode, messagesResponses) => {
  const telephones = []
  const url = process.env.API_URL

  const params = (phone, message) => {
    return (
      url +
      `/v1/inalambriaSMS?shortCode=${shortCode}&telephone=${phone}&message=${message}`
    )
  }

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  if (basePhone.toString().length === 10) {
    for (let i = 0; i < limitPhones; i++) {
      telephones.push(basePhone + i)
    }
    const arrayResponse = telephones.map(async (phone) => {
      try {
        const randomMessage =
          messagesResponses[randomNumber(0, messagesResponses.length - 1)]
        const response = await axios.get(params(phone, randomMessage))
        return {...response.data, phone, randomMessage}
      } catch (error) {
        return error
      }
    })
    arrayResponse.map((item) =>
      item
        .then((resp) => console.log(resp))
        .catch((error) => console.log(error)),
    )
  } else {
    console.log('Número con menos o más de diez dígitos')
  }
}
