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
    root.Pier.GlobaltagbaseApi = factory(root.Pier.ApiClient, root.Pier.BodyAccessToken);
  }
}(this, function(ApiClient, BodyAccessToken) {
  'use strict';

  /**
   * globaltagbase service.
   * @module api/GlobaltagbaseApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagbaseApi. 
   * @alias module:api/GlobaltagbaseApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the limparUsingPOST operation.
     * @callback module:api/GlobaltagbaseApi~limparUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BodyAccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{base_resource_limpar}}}
     * {{{base_resource_limpar_notes}}}
     * @param {module:api/GlobaltagbaseApi~limparUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BodyAccessToken}
     */
    this.limparUsingPOST = function(callback) {
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
      var returnType = BodyAccessToken;

      return this.apiClient.callApi(
        '/api/bases/limpar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
