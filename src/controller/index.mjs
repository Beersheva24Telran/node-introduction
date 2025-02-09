import service from "../service/Service.mjs";
import protocolObj from "./protocol.mjs";
import http from 'node:http'

const server = http.createServer();

function protocol(protocolObj) {
    //subscribing
    for ( const eventName in protocolObj) {
        server.on(eventName, protocolObj[eventName]);
    }

}

server.listen(3500);
server.on('request', async (req, res) => {
   let data = '';
   for await (const part of req) {
      data += part;
   }
   
  
})
