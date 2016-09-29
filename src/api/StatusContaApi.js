(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/StatusConta', '../model/PageStatusContas'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/StatusConta'), require('../model/PageStatusContas'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.StatusContaApi = factory(root.Pier.ApiClient, root.Pier.StatusConta, root.Pier.PageStatusContas);
  }
}(this, function(ApiClient, StatusConta, PageStatusContas) {
  'use strict';

  /**
   * StatusConta service.
   * @module api/StatusContaApi
   * @version 1.1.0
   */

  /**
   * Constructs a new StatusContaApi. 
   * @alias module:api/StatusContaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET2 operation.
     * @callback module:api/StatusContaApi~consultarUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusConta} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Status Conta
     * Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Status Conta a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} idStatusConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status da Conta (id).
     * @param {module:api/StatusContaApi~consultarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/StatusConta}
     */
    this.consultarUsingGET2 = function(idStatusConta, callback) {
      var postBody = null;

      // verify the required parameter 'idStatusConta' is set
      if (idStatusConta == undefined || idStatusConta == null) {
        throw "Missing the required parameter 'idStatusConta' when calling consultarUsingGET2";
      }


      var pathParams = {
        'id_status_conta': idStatusConta
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
      var returnType = StatusConta;

      return this.apiClient.callApi(
        '/api/status-contas/{id_status_conta}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET2 operation.
     * @callback module:api/StatusContaApi~listarUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusContas} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Status Contas cadastrados para o Emissor 
     * Este m\u00C3\u00A9todo permite que sejam listados os Status Contas existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status da Conta (id).
     * @param {String} opts.nome Nome atribu\u00C3\u00ADdo ao Status da Conta.
     * @param {Integer} opts.flagAlteraLimite Par\u00C3\u00A2metro que define se o Status da Conta permite realizar a Altera\u00C3\u00A7\u00C3\u00A3o de Limites do Portador, sendo: 0: Inativo e 1: Ativo.
     * @param {String} opts.mensagemConsultaNegada Apresenta o texto com o motivo que ser\u00C3\u00A1 apresentado na resposta as opera\u00C3\u00A7\u00C3\u00B5es de Listar e Consultar LimitesDisponibilidades.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/StatusContaApi~listarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusContas}
     */
    this.listarUsingGET2 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'nome': opts['nome'],
        'flagAlteraLimite': opts['flagAlteraLimite'],
        'mensagemConsultaNegada': opts['mensagemConsultaNegada'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageStatusContas;

      return this.apiClient.callApi(
        '/api/status-contas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
