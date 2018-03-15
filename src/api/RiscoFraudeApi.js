(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/RiscoFraudeDetalhadoResponse', '../model/TipoResolucaoResponse', '../model/DadosPortadorRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RiscoFraudeDetalhadoResponse'), require('../model/TipoResolucaoResponse'), require('../model/DadosPortadorRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.RiscoFraudeApi = factory(root.Pier.ApiClient, root.Pier.RiscoFraudeDetalhadoResponse, root.Pier.TipoResolucaoResponse, root.Pier.DadosPortadorRequest);
  }
}(this, function(ApiClient, RiscoFraudeDetalhadoResponse, TipoResolucaoResponse, DadosPortadorRequest) {
  'use strict';

  /**
   * RiscoFraude service.
   * @module api/RiscoFraudeApi
   * @version 2.57.0
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
     * Callback function to receive the result of the consultarUsingGET27 operation.
     * @callback module:api/RiscoFraudeApi~consultarUsingGET27Callback
     * @param {String} error Error message, if any.
     * @param {module:model/RiscoFraudeDetalhadoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar uma transa\u00E7\u00E3o classificada com risco de fraude
     * Consulta os detalhes de uma transa\u00E7\u00E3o classificada como risco de fraude.
     * @param {Integer} id C\u00F3digo de identifica\u00E7\u00E3o do risco de fraude
     * @param {module:api/RiscoFraudeApi~consultarUsingGET27Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RiscoFraudeDetalhadoResponse}
     */
    this.consultarUsingGET27 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET27";
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
     * Callback function to receive the result of the listarTiposResolucaoUsingGET operation.
     * @callback module:api/RiscoFraudeApi~listarTiposResolucaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoResolucaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar os tipos de resolu\u00E7\u00E3o de fraude
     * Este recurso permite que sejam listados os tipos de resolu\u00E7\u00E3o de fraude, cadastrados para um emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {module:api/RiscoFraudeApi~listarTiposResolucaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoResolucaoResponse}
     */
    this.listarTiposResolucaoUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = TipoResolucaoResponse;

      return this.apiClient.callApi(
        '/api/tipos-resolucao', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the negarUsingPOST operation.
     * @callback module:api/RiscoFraudeApi~negarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Negar autenticidade de uma transa\u00E7\u00E3o classificada como risco de fraude
     * Nega a realiza\u00E7\u00E3o de uma transa\u00E7\u00E3o classificada como risco de fraude.
     * @param {Integer} id C\u00F3digo de identifica\u00E7\u00E3o do risco de fraude
     * @param {module:api/RiscoFraudeApi~negarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
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
      var returnType = Object;

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
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reconhecer autenticidade de uma transa\u00E7\u00E3o classificada como risco de fraude
     * Confirma a autenticidade de uma transa\u00E7\u00E3o classificada como risco de fraude.
     * @param {Integer} id C\u00F3digo de identifica\u00E7\u00E3o do risco de fraude
     * @param {module:api/RiscoFraudeApi~reconhecerUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/riscos-fraudes/{id}/reconhecer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarDadosPortadorUsingPOST operation.
     * @callback module:api/RiscoFraudeApi~validarDadosPortadorUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Val\u00EDda os dados informados, consultando as informa\u00E7\u00F5es na base do emissor
     * Verif\u00EDca a exist\u00EAncias das informa\u00E7\u00F5es na base do emissor.
     * @param {module:model/DadosPortadorRequest} request request
     * @param {module:api/RiscoFraudeApi~validarDadosPortadorUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.validarDadosPortadorUsingPOST = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request == undefined || request == null) {
        throw "Missing the required parameter 'request' when calling validarDadosPortadorUsingPOST";
      }


      var pathParams = {
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/riscos-fraudes/validar-dados-portador', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
