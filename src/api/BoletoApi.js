(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/BoletoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BoletoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.BoletoApi = factory(root.Pier.ApiClient, root.Pier.BoletoResponse);
  }
}(this, function(ApiClient, BoletoResponse) {
  'use strict';

  /**
   * Boleto service.
   * @module api/BoletoApi
   * @version 2.49.5
   */

  /**
   * Constructs a new BoletoApi. 
   * @alias module:api/BoletoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the registrarBoletoUsingPOST operation.
     * @callback module:api/BoletoApi~registrarBoletoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoletoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Registra uma cobranca na entidade banco relacionada a cobranca informado.
     * Este recurso registra uma cobranca emitido.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Cobranca (id)
     * @param {module:api/BoletoApi~registrarBoletoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BoletoResponse}
     */
    this.registrarBoletoUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling registrarBoletoUsingPOST";
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
      var returnType = BoletoResponse;

      return this.apiClient.callApi(
        '/api/boletos/{id}/registrar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
