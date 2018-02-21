(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/TransacaoOnUsResponse', '../model/TransacaoOnUsPorIdCartaoRequest', '../model/AutorizacaoOnUsRequest', '../model/CancelamentoTransacaoPorIdCartaoRequest', '../model/CancelamentoTransacaoOnUsRequest', '../model/TransacaoOnUsRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TransacaoOnUsResponse'), require('../model/TransacaoOnUsPorIdCartaoRequest'), require('../model/AutorizacaoOnUsRequest'), require('../model/CancelamentoTransacaoPorIdCartaoRequest'), require('../model/CancelamentoTransacaoOnUsRequest'), require('../model/TransacaoOnUsRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AutorizacaoApi = factory(root.Pier.ApiClient, root.Pier.TransacaoOnUsResponse, root.Pier.TransacaoOnUsPorIdCartaoRequest, root.Pier.AutorizacaoOnUsRequest, root.Pier.CancelamentoTransacaoPorIdCartaoRequest, root.Pier.CancelamentoTransacaoOnUsRequest, root.Pier.TransacaoOnUsRequest);
  }
}(this, function(ApiClient, TransacaoOnUsResponse, TransacaoOnUsPorIdCartaoRequest, AutorizacaoOnUsRequest, CancelamentoTransacaoPorIdCartaoRequest, CancelamentoTransacaoOnUsRequest, TransacaoOnUsRequest) {
  'use strict';

  /**
   * Autorizacao service.
   * @module api/AutorizacaoApi
   * @version 2.54.5
   */

  /**
   * Constructs a new AutorizacaoApi. 
   * @alias module:api/AutorizacaoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the autorizarPorContaUsingPOST operation.
     * @callback module:api/AutorizacaoApi~autorizarPorContaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransacaoOnUsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Autoriza transa\u00C3\u00A7\u00C3\u00A3o financeira por idConta
     * Este m\u00C3\u00A9todo faz uma autoriza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o financeira com o idConta.
     * @param {Integer} id Id Conta
     * @param {module:model/TransacaoOnUsPorIdCartaoRequest} transacaoOnUsPorIdCartaoRequest transacaoOnUsPorIdCartaoRequest
     * @param {module:api/AutorizacaoApi~autorizarPorContaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransacaoOnUsResponse}
     */
    this.autorizarPorContaUsingPOST = function(id, transacaoOnUsPorIdCartaoRequest, callback) {
      var postBody = transacaoOnUsPorIdCartaoRequest;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling autorizarPorContaUsingPOST";
      }

      // verify the required parameter 'transacaoOnUsPorIdCartaoRequest' is set
      if (transacaoOnUsPorIdCartaoRequest == undefined || transacaoOnUsPorIdCartaoRequest == null) {
        throw "Missing the required parameter 'transacaoOnUsPorIdCartaoRequest' when calling autorizarPorContaUsingPOST";
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
      var returnType = TransacaoOnUsResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/autorizar-transacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the autorizarUsingPOST operation.
     * @callback module:api/AutorizacaoApi~autorizarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransacaoOnUsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Autoriza transa\u00C3\u00A7\u00C3\u00A3o financeira
     * Este m\u00C3\u00A9todo faz uma autoriza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o financeira.
     * @param {module:model/AutorizacaoOnUsRequest} autorizacaoOnUsRequest autorizacaoOnUsRequest
     * @param {module:api/AutorizacaoApi~autorizarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransacaoOnUsResponse}
     */
    this.autorizarUsingPOST = function(autorizacaoOnUsRequest, callback) {
      var postBody = autorizacaoOnUsRequest;

      // verify the required parameter 'autorizacaoOnUsRequest' is set
      if (autorizacaoOnUsRequest == undefined || autorizacaoOnUsRequest == null) {
        throw "Missing the required parameter 'autorizacaoOnUsRequest' when calling autorizarUsingPOST";
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
      var returnType = TransacaoOnUsResponse;

      return this.apiClient.callApi(
        '/api/autorizar-transacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the autorizarUsingPOST1 operation.
     * @callback module:api/AutorizacaoApi~autorizarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TransacaoOnUsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Autoriza transa\u00C3\u00A7\u00C3\u00A3o financeira por idCartao
     * Este m\u00C3\u00A9todo faz uma autoriza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o financeira com o idCartao.
     * @param {Integer} id Id Cartao
     * @param {module:model/TransacaoOnUsPorIdCartaoRequest} transacaoOnUsPorIdCartaoRequest transacaoOnUsPorIdCartaoRequest
     * @param {module:api/AutorizacaoApi~autorizarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransacaoOnUsResponse}
     */
    this.autorizarUsingPOST1 = function(id, transacaoOnUsPorIdCartaoRequest, callback) {
      var postBody = transacaoOnUsPorIdCartaoRequest;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling autorizarUsingPOST1";
      }

      // verify the required parameter 'transacaoOnUsPorIdCartaoRequest' is set
      if (transacaoOnUsPorIdCartaoRequest == undefined || transacaoOnUsPorIdCartaoRequest == null) {
        throw "Missing the required parameter 'transacaoOnUsPorIdCartaoRequest' when calling autorizarUsingPOST1";
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
      var returnType = TransacaoOnUsResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/autorizar-transacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelarPorIdContaUsingPOST operation.
     * @callback module:api/AutorizacaoApi~cancelarPorIdContaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransacaoOnUsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancela transa\u00C3\u00A7\u00C3\u00A3o financeira por idConta
     * Este m\u00C3\u00A9todo permite que seja cancelada uma transa\u00C3\u00A7\u00C3\u00A3o a partir do idConta.
     * @param {Integer} id Id Conta
     * @param {module:model/CancelamentoTransacaoPorIdCartaoRequest} cancelamentoRequest cancelamentoRequest
     * @param {module:api/AutorizacaoApi~cancelarPorIdContaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransacaoOnUsResponse}
     */
    this.cancelarPorIdContaUsingPOST = function(id, cancelamentoRequest, callback) {
      var postBody = cancelamentoRequest;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling cancelarPorIdContaUsingPOST";
      }

      // verify the required parameter 'cancelamentoRequest' is set
      if (cancelamentoRequest == undefined || cancelamentoRequest == null) {
        throw "Missing the required parameter 'cancelamentoRequest' when calling cancelarPorIdContaUsingPOST";
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
      var returnType = TransacaoOnUsResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/cancelar-transacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelarUsingPOST2 operation.
     * @callback module:api/AutorizacaoApi~cancelarUsingPOST2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TransacaoOnUsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancela transa\u00C3\u00A7\u00C3\u00A3o financeira
     * Este m\u00C3\u00A9todo permite que seja cancelada uma transa\u00C3\u00A7\u00C3\u00A3o.
     * @param {module:model/CancelamentoTransacaoOnUsRequest} cancelamentoRequest cancelamentoRequest
     * @param {module:api/AutorizacaoApi~cancelarUsingPOST2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransacaoOnUsResponse}
     */
    this.cancelarUsingPOST2 = function(cancelamentoRequest, callback) {
      var postBody = cancelamentoRequest;

      // verify the required parameter 'cancelamentoRequest' is set
      if (cancelamentoRequest == undefined || cancelamentoRequest == null) {
        throw "Missing the required parameter 'cancelamentoRequest' when calling cancelarUsingPOST2";
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
      var returnType = TransacaoOnUsResponse;

      return this.apiClient.callApi(
        '/api/cancelar-transacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelarUsingPOST3 operation.
     * @callback module:api/AutorizacaoApi~cancelarUsingPOST3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TransacaoOnUsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancela transa\u00C3\u00A7\u00C3\u00A3o financeira por idCartao
     * Este m\u00C3\u00A9todo permite que seja cancelada uma transa\u00C3\u00A7\u00C3\u00A3o a partir do idCartao.
     * @param {Integer} id Id Cartao
     * @param {module:model/CancelamentoTransacaoPorIdCartaoRequest} cancelamentoRequest cancelamentoRequest
     * @param {module:api/AutorizacaoApi~cancelarUsingPOST3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransacaoOnUsResponse}
     */
    this.cancelarUsingPOST3 = function(id, cancelamentoRequest, callback) {
      var postBody = cancelamentoRequest;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling cancelarUsingPOST3";
      }

      // verify the required parameter 'cancelamentoRequest' is set
      if (cancelamentoRequest == undefined || cancelamentoRequest == null) {
        throw "Missing the required parameter 'cancelamentoRequest' when calling cancelarUsingPOST3";
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
      var returnType = TransacaoOnUsResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/cancelar-transacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarCodigosProcessamentoAutorizacaoUsingGET operation.
     * @callback module:api/AutorizacaoApi~listarCodigosProcessamentoAutorizacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retorna c\u00C3\u00B3digos de processamento de autoriza\u00C3\u00A7\u00C3\u00A3o
     * Este m\u00C3\u00A9todo retorna a lista dos c\u00C3\u00B3digos de processamento para autoriza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00B5es financeiras.
     * @param {module:api/AutorizacaoApi~listarCodigosProcessamentoAutorizacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<Object>}
     */
    this.listarCodigosProcessamentoAutorizacaoUsingGET = function(callback) {
      var postBody = null;


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
      var returnType = [Object];

      return this.apiClient.callApi(
        '/api/consultar-codigos-processamento-autorizacao', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the simularUsingPOST operation.
     * @callback module:api/AutorizacaoApi~simularUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransacaoOnUsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Simula planos de transa\u00C3\u00A7\u00C3\u00B5es
     * Este m\u00C3\u00A9todo permite que seja simulada um plano de transa\u00C3\u00A7\u00C3\u00B5es.
     * @param {module:model/TransacaoOnUsRequest} transacoesRequest transacoesRequest
     * @param {module:api/AutorizacaoApi~simularUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransacaoOnUsResponse}
     */
    this.simularUsingPOST = function(transacoesRequest, callback) {
      var postBody = transacoesRequest;

      // verify the required parameter 'transacoesRequest' is set
      if (transacoesRequest == undefined || transacoesRequest == null) {
        throw "Missing the required parameter 'transacoesRequest' when calling simularUsingPOST";
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
      var returnType = TransacaoOnUsResponse;

      return this.apiClient.callApi(
        '/api/simular-transacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
