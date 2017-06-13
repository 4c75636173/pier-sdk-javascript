(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/TransacaoOnUsResponse', '../model/AutorizacaoOnUsRequest', '../model/CancelamentoTransacaoOnUsRequest', '../model/TransacaoOnUsRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TransacaoOnUsResponse'), require('../model/AutorizacaoOnUsRequest'), require('../model/CancelamentoTransacaoOnUsRequest'), require('../model/TransacaoOnUsRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AutorizacoesApi = factory(root.Pier.ApiClient, root.Pier.TransacaoOnUsResponse, root.Pier.AutorizacaoOnUsRequest, root.Pier.CancelamentoTransacaoOnUsRequest, root.Pier.TransacaoOnUsRequest);
  }
}(this, function(ApiClient, TransacaoOnUsResponse, AutorizacaoOnUsRequest, CancelamentoTransacaoOnUsRequest, TransacaoOnUsRequest) {
  'use strict';

  /**
   * Autorizacoes service.
   * @module api/AutorizacoesApi
   * @version 2.16.2
   */

  /**
   * Constructs a new AutorizacoesApi. 
   * @alias module:api/AutorizacoesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the autorizarUsingPOST operation.
     * @callback module:api/AutorizacoesApi~autorizarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransacaoOnUsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Autoriza transa\u00C3\u00A7\u00C3\u00A3o financeira
     * Este m\u00C3\u00A9todo faz uma autoriza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o financeira.
     * @param {module:model/AutorizacaoOnUsRequest} autorizacaoOnUsRequest autorizacaoOnUsRequest
     * @param {module:api/AutorizacoesApi~autorizarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the cancelarUsingPOST operation.
     * @callback module:api/AutorizacoesApi~cancelarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransacaoOnUsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancela transa\u00C3\u00A7\u00C3\u00A3o financeira
     * Este m\u00C3\u00A9todo permite que seja cancelada uma transa\u00C3\u00A7\u00C3\u00A3o.
     * @param {module:model/CancelamentoTransacaoOnUsRequest} cancelamentoRequest cancelamentoRequest
     * @param {module:api/AutorizacoesApi~cancelarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransacaoOnUsResponse}
     */
    this.cancelarUsingPOST = function(cancelamentoRequest, callback) {
      var postBody = cancelamentoRequest;

      // verify the required parameter 'cancelamentoRequest' is set
      if (cancelamentoRequest == undefined || cancelamentoRequest == null) {
        throw "Missing the required parameter 'cancelamentoRequest' when calling cancelarUsingPOST";
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
     * Callback function to receive the result of the listarCodigosProcessamentoAutorizacaoUsingGET operation.
     * @callback module:api/AutorizacoesApi~listarCodigosProcessamentoAutorizacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retorna c\u00C3\u00B3digos de processamento de autoriza\u00C3\u00A7\u00C3\u00A3o
     * Este m\u00C3\u00A9todo retorna a lista dos c\u00C3\u00B3digos de processamento para autoriza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00B5es financeiras.
     * @param {module:api/AutorizacoesApi~listarCodigosProcessamentoAutorizacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/AutorizacoesApi~simularUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransacaoOnUsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Simula planos de pagamento
     * Este m\u00C3\u00A9todo permite que seja simulada um plano de pagamento.
     * @param {module:model/TransacaoOnUsRequest} transacoesRequest transacoesRequest
     * @param {module:api/AutorizacoesApi~simularUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
