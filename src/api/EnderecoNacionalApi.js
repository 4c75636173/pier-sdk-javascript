(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/EnderecoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EnderecoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.EnderecoNacionalApi = factory(root.Pier.ApiClient, root.Pier.EnderecoResponse);
  }
}(this, function(ApiClient, EnderecoResponse) {
  'use strict';

  /**
   * EnderecoNacional service.
   * @module api/EnderecoNacionalApi
   * @version 2.47.3
   */

  /**
   * Constructs a new EnderecoNacionalApi. 
   * @alias module:api/EnderecoNacionalApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarEnderecoUsingGET operation.
     * @callback module:api/EnderecoNacionalApi~consultarEnderecoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar Endere\u00C3\u00A7o
     * Este recurso permite consultar endere\u00C3\u00A7os atrav\u00C3\u00A9s do CEP.
     * @param {String} CEP CEP
     * @param {module:api/EnderecoNacionalApi~consultarEnderecoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EnderecoResponse}
     */
    this.consultarEnderecoUsingGET = function(CEP, callback) {
      var postBody = null;

      // verify the required parameter 'CEP' is set
      if (CEP == undefined || CEP == null) {
        throw "Missing the required parameter 'CEP' when calling consultarEnderecoUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'CEP': CEP
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EnderecoResponse;

      return this.apiClient.callApi(
        '/api/ceps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
