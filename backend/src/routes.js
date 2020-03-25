const express = require('express');

const routes = express.Router().

  routes.get('/', (request, response) => {
    return response.json({
      evento: 'Semana Omnistack 11.0',
      aluno: 'Enderson Garcia'
    });
  });

module.exports = routes;