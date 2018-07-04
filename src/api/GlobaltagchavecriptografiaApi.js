(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ChaveCriptografiaResponse', '../model/ChaveCriptografiaRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ChaveCriptografiaResponse'), require('../model/ChaveCriptografiaRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagchavecriptografiaApi = factory(root.Pier.ApiClient, root.Pier.ChaveCriptografiaResponse, root.Pier.ChaveCriptografiaRequest);
  }
}(this, function(ApiClient, ChaveCriptografiaResponse, ChaveCriptografiaRequest) {
  'use strict';

  /**
   * globaltagchavecriptografia service.
   * @module api/GlobaltagchavecriptografiaApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagchavecriptografiaApi. 
   * @alias module:api/GlobaltagchavecriptografiaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the descriptografarUsingPOST operation.
     * @callback module:api/GlobaltagchavecriptografiaApi~descriptografarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChaveCriptografiaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{chave_criptografia_recurso_descriptografar}}}
     * {{{chave_criptografia_recurso_descriptografar_notas}}}
     * @param {module:model/ChaveCriptografiaRequest} chaveCriptografiaRequest chaveCriptografiaRequest
     * @param {module:api/GlobaltagchavecriptografiaApi~descriptografarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ChaveCriptografiaResponse}
     */
    this.descriptografarUsingPOST = function(chaveCriptografiaRequest, callback) {
      var postBody = chaveCriptografiaRequest;

      // verify the required parameter 'chaveCriptografiaRequest' is set
      if (chaveCriptografiaRequest == undefined || chaveCriptografiaRequest == null) {
        throw "Missing the required parameter 'chaveCriptografiaRequest' when calling descriptografarUsingPOST";
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
      var returnType = ChaveCriptografiaResponse;

      return this.apiClient.callApi(
        '/api/chaves-criptografia/descriptografar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
