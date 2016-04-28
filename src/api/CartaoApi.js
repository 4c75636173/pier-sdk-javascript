(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CancelarCartaoResponse', '../model/ConsultarCartaoResponse', '../model/ConsultarExtratoContaResponse', '../model/ConsultarSaldoLimitesResponse', '../model/DesbloquearCartaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CancelarCartaoResponse'), require('../model/ConsultarCartaoResponse'), require('../model/ConsultarExtratoContaResponse'), require('../model/ConsultarSaldoLimitesResponse'), require('../model/DesbloquearCartaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CartaoApi = factory(root.Pier.ApiClient, root.Pier.CancelarCartaoResponse, root.Pier.ConsultarCartaoResponse, root.Pier.ConsultarExtratoContaResponse, root.Pier.ConsultarSaldoLimitesResponse, root.Pier.DesbloquearCartaoResponse);
  }
}(this, function(ApiClient, CancelarCartaoResponse, ConsultarCartaoResponse, ConsultarExtratoContaResponse, ConsultarSaldoLimitesResponse, DesbloquearCartaoResponse) {
  'use strict';

  /**
   * Cartao service.
   * @module api/CartaoApi
   * @version 0.0.1
   */

  /**
   * Constructs a new CartaoApi. 
   * @alias module:api/CartaoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cancelarCartaoUsingPOST operation.
     * @callback module:api/CartaoApi~cancelarCartaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CancelarCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /contas/{idConta}/cartoes/{idCartao}/cancelar
     * Cancelar um determinado cart\u00C3\u00A3o
     * @param {Integer} idConta ID da Conta
     * @param {Integer} idCartao ID do Cart\u00C3\u00A3o que deseja cancelar
     * @param {Integer} motivo Motivo do cancelamento
     * @param {String} observacao Alguma observa\u00C3\u00A7\u00C3\u00A3o para o cancelamento
     * @param {module:api/CartaoApi~cancelarCartaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CancelarCartaoResponse}
     */
    this.cancelarCartaoUsingPOST = function(idConta, idCartao, motivo, observacao, callback) {
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling cancelarCartaoUsingPOST";
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling cancelarCartaoUsingPOST";
      }

      // verify the required parameter 'motivo' is set
      if (motivo == undefined || motivo == null) {
        throw "Missing the required parameter 'motivo' when calling cancelarCartaoUsingPOST";
      }

      // verify the required parameter 'observacao' is set
      if (observacao == undefined || observacao == null) {
        throw "Missing the required parameter 'observacao' when calling cancelarCartaoUsingPOST";
      }


      var pathParams = {
        'idConta': idConta,
        'idCartao': idCartao
      };
      var queryParams = {
        'motivo': motivo,
        'observacao': observacao
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CancelarCartaoResponse;

      return this.apiClient.callApi(
        '/api/v1/contas/{idConta}/cartoes/{idCartao}/cancelar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarCartaoUsingGET operation.
     * @callback module:api/CartaoApi~consultarCartaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsultarCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /contas/{idConta}/cartoes/{idCartao}
     * Consultar as informa\u00C3\u00A7\u00C3\u00B5es de um determinado cart\u00C3\u00A3o de uma conta
     * @param {Integer} idConta ID da Conta que pertence o cart\u00C3\u00A3o
     * @param {Integer} idCartao ID do Cart\u00C3\u00A3o que deseja consultar
     * @param {Object} opts Optional parameters
     * @param {String} opts.numeroCartao N\u00C3\u00BAmero do Cart\u00C3\u00A3o que deseja consultar (opcional)
     * @param {module:api/CartaoApi~consultarCartaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConsultarCartaoResponse}
     */
    this.consultarCartaoUsingGET = function(idConta, idCartao, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling consultarCartaoUsingGET";
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling consultarCartaoUsingGET";
      }


      var pathParams = {
        'idConta': idConta,
        'idCartao': idCartao
      };
      var queryParams = {
      };
      var headerParams = {
        'numeroCartao': opts['numeroCartao']
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ConsultarCartaoResponse;

      return this.apiClient.callApi(
        '/api/v1/contas/{idConta}/cartoes/{idCartao}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarCartoesUsingGET operation.
     * @callback module:api/CartaoApi~consultarCartoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsultarCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /contas/{idConta}/cartoes
     * Consultar todos os cart\u00C3\u00B5es de uma determinada conta
     * @param {Integer} idConta ID da Conta
     * @param {module:api/CartaoApi~consultarCartoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConsultarCartaoResponse}
     */
    this.consultarCartoesUsingGET = function(idConta, callback) {
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling consultarCartoesUsingGET";
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
      var returnType = ConsultarCartaoResponse;

      return this.apiClient.callApi(
        '/api/v1/contas/{idConta}/cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarExtratoFaturasUsingGET operation.
     * @callback module:api/CartaoApi~consultarExtratoFaturasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsultarExtratoContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /contas/{idConta}/cartoes/{idCartao}/faturas
     * Consulte os extratos/faturas do cart\u00C3\u00A3o de uma determinada conta
     * @param {Integer} idConta ID da Conta
     * @param {Integer} idCartao ID do Cart\u00C3\u00A3o que deseja consultar o extrato
     * @param {String} dataVencimento Data limite para o vencimento das transa\u00C3\u00A7\u00C3\u00B5es
     * @param {module:api/CartaoApi~consultarExtratoFaturasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConsultarExtratoContaResponse}
     */
    this.consultarExtratoFaturasUsingGET = function(idConta, idCartao, dataVencimento, callback) {
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling consultarExtratoFaturasUsingGET";
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling consultarExtratoFaturasUsingGET";
      }

      // verify the required parameter 'dataVencimento' is set
      if (dataVencimento == undefined || dataVencimento == null) {
        throw "Missing the required parameter 'dataVencimento' when calling consultarExtratoFaturasUsingGET";
      }


      var pathParams = {
        'idConta': idConta,
        'idCartao': idCartao
      };
      var queryParams = {
        'dataVencimento': dataVencimento
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ConsultarExtratoContaResponse;

      return this.apiClient.callApi(
        '/api/v1/contas/{idConta}/cartoes/{idCartao}/faturas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarSaldosLimitesUsingGET operation.
     * @callback module:api/CartaoApi~consultarSaldosLimitesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsultarSaldoLimitesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /contas/{idConta}/cartoes/{idCartao}/limites
     * Consulte os limites de um determinado cart\u00C3\u00A3o
     * @param {Integer} idConta ID da Conta
     * @param {Integer} idCartao ID do Cart\u00C3\u00A3o que deseja consultar o saldo/limite
     * @param {module:api/CartaoApi~consultarSaldosLimitesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConsultarSaldoLimitesResponse}
     */
    this.consultarSaldosLimitesUsingGET = function(idConta, idCartao, callback) {
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling consultarSaldosLimitesUsingGET";
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling consultarSaldosLimitesUsingGET";
      }


      var pathParams = {
        'idConta': idConta,
        'idCartao': idCartao
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
      var returnType = ConsultarSaldoLimitesResponse;

      return this.apiClient.callApi(
        '/api/v1/contas/{idConta}/cartoes/{idCartao}/limites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desbloquearCartaoUsingPOST operation.
     * @callback module:api/CartaoApi~desbloquearCartaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DesbloquearCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /contas/{idConta}/cartoes/{idCartao}/desbloquear
     * Desbloquear cart\u00C3\u00A3o de uma determinada conta
     * @param {Integer} idConta ID da Conta
     * @param {Integer} idCartao ID do Cart\u00C3\u00A3o que deseja consultar o saldo/limite
     * @param {String} codigoSegurancao C\u00C3\u00B3digo seguran\u00C3\u00A7a do cart\u00C3\u00A3o
     * @param {module:api/CartaoApi~desbloquearCartaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DesbloquearCartaoResponse}
     */
    this.desbloquearCartaoUsingPOST = function(idConta, idCartao, codigoSegurancao, callback) {
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling desbloquearCartaoUsingPOST";
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling desbloquearCartaoUsingPOST";
      }

      // verify the required parameter 'codigoSegurancao' is set
      if (codigoSegurancao == undefined || codigoSegurancao == null) {
        throw "Missing the required parameter 'codigoSegurancao' when calling desbloquearCartaoUsingPOST";
      }


      var pathParams = {
        'idConta': idConta,
        'idCartao': idCartao
      };
      var queryParams = {
      };
      var headerParams = {
        'codigoSegurancao': codigoSegurancao
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DesbloquearCartaoResponse;

      return this.apiClient.callApi(
        '/api/v1/contas/{idConta}/cartoes/{idCartao}/desbloquear', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
