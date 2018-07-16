(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/BodyAccessToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BodyAccessToken'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagtokenApi = factory(root.Pier.ApiClient, root.Pier.BodyAccessToken);
  }
}(this, function(ApiClient, BodyAccessToken) {
  'use strict';

  /**
   * globaltagtoken service.
   * @module api/GlobaltagtokenApi
   * @version 2.68.0
   */

  /**
   * Constructs a new GlobaltagtokenApi. 
   * @alias module:api/GlobaltagtokenApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the callbackUsingPOST operation.
     * @callback module:api/GlobaltagtokenApi~callbackUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BodyAccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{token_resource_callback}}}
     * {{{token_resource_callback_notes}}}
     * @param {module:model/BodyAccessToken} bodyAccessToken bodyAccessToken
     * @param {module:api/GlobaltagtokenApi~callbackUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BodyAccessToken}
     */
    this.callbackUsingPOST = function(bodyAccessToken, callback) {
      var postBody = bodyAccessToken;

      // verify the required parameter 'bodyAccessToken' is set
      if (bodyAccessToken == undefined || bodyAccessToken == null) {
        throw "Missing the required parameter 'bodyAccessToken' when calling callbackUsingPOST";
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
      var returnType = BodyAccessToken;

      return this.apiClient.callApi(
        '/api/tokens/callback', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
