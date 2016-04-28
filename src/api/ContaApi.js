(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ConsultarContaResponse', '../model/ContaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ConsultarContaResponse'), require('../model/ContaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ContaApi = factory(root.Pier.ApiClient, root.Pier.ConsultarContaResponse, root.Pier.ContaResponse);
  }
}(this, function(ApiClient, ConsultarContaResponse, ContaResponse) {
  'use strict';

  /**
   * Conta service.
   * @module api/ContaApi
   * @version 0.0.1
   */

  /**
   * Constructs a new ContaApi. 
   * @alias module:api/ContaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the buscarContaUsingGET operation.
     * @callback module:api/ContaApi~buscarContaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsultarContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /contas/buscar
     * Consulte contas filtrando pelos campos id do emissor, n\u00C3\u00BAmero do cart\u00C3\u00A3o, nome ou CPF/CNPJ 
     * @param {Object} opts Optional parameters
     * @param {String} opts.nome Nome
     * @param {String} opts.cpf CPF (opcional caso nao informe o n\u00C3\u00BAmero do cart\u00C3\u00A3o ou id da conta)
     * @param {String} opts.numeroCartao N\u00C3\u00BAmero do cart\u00C3\u00A3o (opcional caso n\u00C3\u00A3o informa o cpf ou id da conta)
     * @param {Integer} opts.idConta ID da Conta (opcional caso n\u00C3\u00A3o informe o n\u00C3\u00BAmero do cart\u00C3\u00A3o ou cpf)
     * @param {module:api/ContaApi~buscarContaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConsultarContaResponse}
     */
    this.buscarContaUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'nome': opts['nome'],
        'cpf': opts['cpf'],
        'numeroCartao': opts['numeroCartao'],
        'idConta': opts['idConta']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ConsultarContaResponse;

      return this.apiClient.callApi(
        '/api/v1/contas/buscar', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarContaUsingGET operation.
     * @callback module:api/ContaApi~consultarContaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /contas/{idConta}
     * Consulte informa\u00C3\u00A7\u00C3\u00B5es de uma determinada conta
     * @param {Integer} idConta ID da Conta
     * @param {module:api/ContaApi~consultarContaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaResponse}
     */
    this.consultarContaUsingGET = function(idConta, callback) {
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling consultarContaUsingGET";
      }


      var pathParams = {
        'idConta': idConta
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
      var returnType = ContaResponse;

      return this.apiClient.callApi(
        '/api/v1/contas/{idConta}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
