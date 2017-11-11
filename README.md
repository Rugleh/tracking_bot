# @Tracking_bot

@Tracking_bot es un Twitter bot que permite realizar consultas de seguimiento de paquete a Correos de Chile mediante un tweet.

## Instrucciones de uso 

Enviar un tweet mencionando a @Tracking_Bot seguido del código de envío del paquete a consultar.

**Ejemplo:**

@Tracking_bot 990053938289

**Resultado**

@Usuario1 Estado de tu paquete: "recibido en planta origen" en "PLANTA CEP RM" 🍍♣️

**Emojis**

El uso de emojis al final de cada tweet de respuesta por parte del bot es debido a que Twitter no permite enviar tweets duplicados.

**Posibles problemas**

Twitter no permite el envío de dos tweets iguales, si se desea consultar el mismo paquete nuevamente será necesario escribir cualquier caracter luego del código de envío.

* @Tracking_bot 990053938289 xyz

El tweet es transformado en un arreglo de STRING separando palabras por cada espacio que encuentre, siendo la ubicación 1 del arreglo perteneciente al código de envío y el único que será utilizado por el bot, el resto será ignorado.
Cualquier caracter luego del STRING de código de envío mitigará la alerta de tweet duplicado. 

`
Tweet[0] = @Tracking_bot
Tweet[1] = 990053938289
`

## Desarrollo

* [NodeJS](https://nodejs.org/en/) 

## Hosting

* [Heroku](https://www.heroku.com/) 

## Módulos NPM utilizados

* [Twit](https://www.npmjs.com/package/twit)
* [correos-chile-npm](https://github.com/josemontesp/correos-chile-npm)
* [random-emoji](https://github.com/lukekarrys/random-emoji)

