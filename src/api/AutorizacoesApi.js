(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/TransacaoOnUsResponse', '../model/CancelamentoTransacaoOnUsRequest', '../model/AutorizacaoOnUsRequest', '../model/DesfazimentoTransacaoOnURequest', '../model/TransacaoOnUsRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TransacaoOnUsResponse'), require('../model/CancelamentoTransacaoOnUsRequest'), require('../model/AutorizacaoOnUsRequest'), require('../model/DesfazimentoTransacaoOnURequest'), require('../model/TransacaoOnUsRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AutorizacoesApi = factory(root.Pier.ApiClient, root.Pier.TransacaoOnUsResponse, root.Pier.CancelamentoTransacaoOnUsRequest, root.Pier.AutorizacaoOnUsRequest, root.Pier.DesfazimentoTransacaoOnURequest, root.Pier.TransacaoOnUsRequest);
  }
}(this, function(ApiClient, TransacaoOnUsResponse, CancelamentoTransacaoOnUsRequest, AutorizacaoOnUsRequest, DesfazimentoTransacaoOnURequest, TransacaoOnUsRequest) {
  'use strict';

  /**
   * Autorizacoes service.
   * @module api/AutorizacoesApi
   * @version 2.15.5
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
     * Callback function to receive the result of the cancelarUsingPOST operation.
     * @callback module:api/AutorizacoesApi~cancelarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransacaoOnUsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancela Transa\u00C3\u00A7\u00C3\u00A3o financeira
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
     * Callback function to receive the result of the desfazerUsingPOST operation.
     * @callback module:api/AutorizacoesApi~desfazerUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TransacaoOnUsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Autoriza transa\u00C3\u00A7\u00C3\u00A3o financeira
     * Este m\u00C3\u00A9todo faz uma autoriza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o financeira.
     * @param {module:model/AutorizacaoOnUsRequest} autorizacaoOnUsRequest autorizacaoOnUsRequest
     * @param {module:api/AutorizacoesApi~desfazerUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransacaoOnUsResponse}
     */
    this.desfazerUsingPOST = function(autorizacaoOnUsRequest, callback) {
      var postBody = autorizacaoOnUsRequest;

      // verify the required parameter 'autorizacaoOnUsRequest' is set
      if (autorizacaoOnUsRequest == undefined || autorizacaoOnUsRequest == null) {
        throw "Missing the required parameter 'autorizacaoOnUsRequest' when calling desfazerUsingPOST";
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
     * Callback function to receive the result of the desfazerUsingPOST1 operation.
     * @callback module:api/AutorizacoesApi~desfazerUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TransacaoOnUsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Desfazimento de Transa\u00C3\u00A7\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite que seja desfeita uma transa\u00C3\u00A7\u00C3\u00A3o.
     * @param {module:model/DesfazimentoTransacaoOnURequest} desfazimentoRequest desfazimentoRequest
     * @param {module:api/AutorizacoesApi~desfazerUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TransacaoOnUsResponse}
     */
    this.desfazerUsingPOST1 = function(desfazimentoRequest, callback) {
      var postBody = desfazimentoRequest;

      // verify the required parameter 'desfazimentoRequest' is set
      if (desfazimentoRequest == undefined || desfazimentoRequest == null) {
        throw "Missing the required parameter 'desfazimentoRequest' when calling desfazerUsingPOST1";
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
        '/api/desfazer-transacao', 'POST',
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
     * Simula Compra Parcelada
     * Este m\u00C3\u00A9todo permite que seja simulada uma compra parcelada.
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
