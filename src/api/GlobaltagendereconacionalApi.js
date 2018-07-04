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
    root.Pier.GlobaltagendereconacionalApi = factory(root.Pier.ApiClient, root.Pier.EnderecoResponse);
  }
}(this, function(ApiClient, EnderecoResponse) {
  'use strict';

  /**
   * globaltagendereconacional service.
   * @module api/GlobaltagendereconacionalApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagendereconacionalApi. 
   * @alias module:api/GlobaltagendereconacionalApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarEnderecoUsingGET operation.
     * @callback module:api/GlobaltagendereconacionalApi~consultarEnderecoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{c_e_p_endereco_resource_consultar_endereco}}}
     * {{{c_e_p_endereco_resource_consultar_endereco_notes}}}
     * @param {String} CEP CEP
     * @param {module:api/GlobaltagendereconacionalApi~consultarEnderecoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
