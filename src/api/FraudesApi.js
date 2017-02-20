(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AtendimentoCliente', '../model/PageAtendimentoClientes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AtendimentoCliente'), require('../model/PageAtendimentoClientes'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.FraudesApi = factory(root.Pier.ApiClient, root.Pier.AtendimentoCliente, root.Pier.PageAtendimentoClientes);
  }
}(this, function(ApiClient, AtendimentoCliente, PageAtendimentoClientes) {
  'use strict';

  /**
   * Fraudes service.
   * @module api/FraudesApi
   * @version 2.6.1
   */

  /**
   * Constructs a new FraudesApi. 
   * @alias module:api/FraudesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET operation.
     * @callback module:api/FraudesApi~consultarUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AtendimentoCliente} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Atendimento
     * Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Atendimento a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (idAtendimento).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do atendimento cliente (id).
     * @param {module:api/FraudesApi~consultarUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AtendimentoCliente}
     */
    this.consultarUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AtendimentoCliente;

      return this.apiClient.callApi(
        '/api/atendimento-clientes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET operation.
     * @callback module:api/FraudesApi~listarUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAtendimentoClientes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista todos os atendimentos
     * Este m\u00C3\u00A9todo permite que sejam listados todos os Registro de Atendimento, independente do Tipo.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.idAtendimento C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Atendimento (id)
     * @param {Integer} opts.idTipoAtendimento C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo de Atendimento (id)
     * @param {Integer} opts.idConta C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de conta (id).
     * @param {String} opts.nomeAtendente Apresenta o nome do Atendente que registrou o Atendimento.
     * @param {Date} opts.dataAtendimento Apresenta a data em que o Atendimento foi realizado.
     * @param {module:api/FraudesApi~listarUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageAtendimentoClientes}
     */
    this.listarUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'idAtendimento': opts['idAtendimento'],
        'idTipoAtendimento': opts['idTipoAtendimento'],
        'idConta': opts['idConta'],
        'nomeAtendente': opts['nomeAtendente'],
        'dataAtendimento': opts['dataAtendimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageAtendimentoClientes;

      return this.apiClient.callApi(
        '/api/atendimento-clientes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST operation.
     * @callback module:api/FraudesApi~salvarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AtendimentoCliente} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastro um novo Atendimento do tipo Gen\u00C3\u00A9rico para uma Conta
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o Atendimento est\u00C3\u00A1 associado
     * @param {String} opts.conteudoAtendimento Apresenta as informa\u00C3\u00A7\u00C3\u00B5es que foram utilizadas para consultar, cadastrar ou alterar informa\u00C3\u00A7\u00C3\u00B5es relacionadas ao Atendimento.
     * @param {String} opts.detalhesAtendimento Apresenta os detalhes lan\u00C3\u00A7ados pelo sistema ou pelo Atendente durante relacionados ao Atendimento.
     * @param {String} opts.nomeAtendente Apresenta o nome do Atendente que registrou o Atendimento.
     * @param {Date} opts.dataAtendimento Apresenta a data em que o Atendimento foi realizado.
     * @param {Date} opts.dataAgendamento Quando utilizado, de acordo com o Tipo de Atendimento, apresenta a data para processamento ou a data para retorno do Atendimento.
     * @param {Date} opts.dataHoraInicioAtendimento Apresenta a data e hora em que o Atendimento foi iniciado. Quando utilizado, serve para medir a performance dos Atendimentos.
     * @param {Date} opts.dataHoraFimAtendimento Apresenta a data e hora em que o Atendimento foi iniciado. Quando utilizado, serve para medir a performance dos Atendimentos.
     * @param {module:api/FraudesApi~salvarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AtendimentoCliente}
     */
    this.salvarUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idConta': opts['idConta'],
        'conteudoAtendimento': opts['conteudoAtendimento'],
        'detalhesAtendimento': opts['detalhesAtendimento'],
        'nomeAtendente': opts['nomeAtendente'],
        'dataAtendimento': opts['dataAtendimento'],
        'dataAgendamento': opts['dataAgendamento'],
        'dataHoraInicioAtendimento': opts['dataHoraInicioAtendimento'],
        'dataHoraFimAtendimento': opts['dataHoraFimAtendimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AtendimentoCliente;

      return this.apiClient.callApi(
        '/api/atendimento-clientes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
