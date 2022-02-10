"use strict";

var _typeorm = require("typeorm");

(0, _typeorm.createConnection)().then(() => console.log("Conectado com Sucesso")).catch(e => console.log(e));