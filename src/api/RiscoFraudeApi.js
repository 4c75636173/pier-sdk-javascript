(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/RiscoFraudeDetalhadoResponse', '../model/RiscoFraudeResponsePage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RiscoFraudeDetalhadoResponse'), require('../model/RiscoFraudeResponsePage'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.RiscoFraudeApi = factory(root.Pier.ApiClient, root.Pier.RiscoFraudeDetalhadoResponse, root.Pier.RiscoFraudeResponsePage);
  }
}(this, function(ApiClient, RiscoFraudeDetalhadoResponse, RiscoFraudeResponsePage) {
  'use strict';

  /**
   * RiscoFraude service.
   * @module api/RiscoFraudeApi
   * @version 2.16.6
   */

  /**
   * Constructs a new RiscoFraudeApi. 
   * @alias module:api/RiscoFraudeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET12 operation.
     * @callback module:api/RiscoFraudeApi~consultarUsingGET12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/RiscoFraudeDetalhadoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar uma transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude
     * Consulta os detalhes de uma transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude
     * @param {module:api/RiscoFraudeApi~consultarUsingGET12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RiscoFraudeDetalhadoResponse}
     */
    this.consultarUsingGET12 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET12";
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RiscoFraudeDetalhadoResponse;

      return this.apiClient.callApi(
        '/api/riscos-fraudes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET19 operation.
     * @callback module:api/RiscoFraudeApi~listarUsingGET19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/RiscoFraudeResponsePage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar as transa\u00C3\u00A7\u00C3\u00B5es com resolu\u00C3\u00A7\u00C3\u00A3o de risco fraude pendente
     * Este recurso permite que sejam listados os riscos de fraudes existentes
     * @param {Integer} idConta Id Conta
     * @param {module:model/String} confirmacaoFraude Confirma\u00C3\u00A7\u00C3\u00A3o da fraude
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/RiscoFraudeApi~listarUsingGET19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RiscoFraudeResponsePage}
     */
    this.listarUsingGET19 = function(idConta, confirmacaoFraude, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling listarUsingGET19";
      }

      // verify the required parameter 'confirmacaoFraude' is set
      if (confirmacaoFraude == undefined || confirmacaoFraude == null) {
        throw "Missing the required parameter 'confirmacaoFraude' when calling listarUsingGET19";
      }


      var pathParams = {
      };
      var queryParams = {
        'id_conta': idConta,
        'confirmacao_fraude': confirmacaoFraude,
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RiscoFraudeResponsePage;

      return this.apiClient.callApi(
        '/api/riscos-fraudes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the negarUsingPOST operation.
     * @callback module:api/RiscoFraudeApi~negarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RiscoFraudeDetalhadoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Negar autenticidade da transa\u00C3\u00A7\u00C3\u00A3o com risco de fraude
     * Nega a realiza\u00C3\u00A7\u00C3\u00A3o da transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude
     * @param {module:api/RiscoFraudeApi~negarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RiscoFraudeDetalhadoResponse}
     */
    this.negarUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling negarUsingPOST";
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RiscoFraudeDetalhadoResponse;

      return this.apiClient.callApi(
        '/api/riscos-fraudes/{id}/negar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reconhecerUsingPOST operation.
     * @callback module:api/RiscoFraudeApi~reconhecerUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RiscoFraudeDetalhadoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reconhecer a transa\u00C3\u00A7\u00C3\u00A3o com risco de fraude
     * Confirma a autenticidade da transa\u00C3\u00A7\u00C3\u00A3o classificada com risco de fraude.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do risco de fraude
     * @param {module:api/RiscoFraudeApi~reconhecerUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RiscoFraudeDetalhadoResponse}
     */
    this.reconhecerUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling reconhecerUsingPOST";
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RiscoFraudeDetalhadoResponse;

      return this.apiClient.callApi(
        '/api/riscos-fraudes/{id}/reconhecer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
