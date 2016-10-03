(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/StatusImpressao', '../model/PageStatusImpressao'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/StatusImpressao'), require('../model/PageStatusImpressao'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.StatusImpressaoApi = factory(root.Pier.ApiClient, root.Pier.StatusImpressao, root.Pier.PageStatusImpressao);
  }
}(this, function(ApiClient, StatusImpressao, PageStatusImpressao) {
  'use strict';

  /**
   * StatusImpressao service.
   * @module api/StatusImpressaoApi
   * @version 1.1.0
   */

  /**
   * Constructs a new StatusImpressaoApi. 
   * @alias module:api/StatusImpressaoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET3 operation.
     * @callback module:api/StatusImpressaoApi~consultarUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusImpressao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Status Impress\u00C3\u00A3o 
     * Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Status de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).  
     * @param {Integer} idStatusImpressao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/StatusImpressaoApi~consultarUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/StatusImpressao}
     */
    this.consultarUsingGET3 = function(idStatusImpressao, callback) {
      var postBody = null;

      // verify the required parameter 'idStatusImpressao' is set
      if (idStatusImpressao == undefined || idStatusImpressao == null) {
        throw "Missing the required parameter 'idStatusImpressao' when calling consultarUsingGET3";
      }


      var pathParams = {
        'id_status_impressao': idStatusImpressao
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
      var returnType = StatusImpressao;

      return this.apiClient.callApi(
        '/api/status-impressoes/{id_status_impressao}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET3 operation.
     * @callback module:api/StatusImpressaoApi~listarUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusImpressao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as op\u00C3\u00A7\u00C3\u00B5es de Status Impress\u00C3\u00A3o 
     * Este m\u00C3\u00A9todo permite que sejam listadas as op\u00C3\u00A7\u00C3\u00B5es de Status Impress\u00C3\u00A3o que podem ser atribu\u00C3\u00ADdas aos Cart\u00C3\u00B5es.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id Id do est\u00C3\u00A1gio cart\u00C3\u00A3o
     * @param {String} opts.nome Nome do status impress\u00C3\u00A3o
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/StatusImpressaoApi~listarUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusImpressao}
     */
    this.listarUsingGET3 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'nome': opts['nome'],
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
      var returnType = PageStatusImpressao;

      return this.apiClient.callApi(
        '/api/status-impressoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
