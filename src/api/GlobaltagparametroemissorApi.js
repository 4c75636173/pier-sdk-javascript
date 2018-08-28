(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ParametroEmissorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ParametroEmissorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagparametroemissorApi = factory(root.Pier.ApiClient, root.Pier.ParametroEmissorResponse);
  }
}(this, function(ApiClient, ParametroEmissorResponse) {
  'use strict';

  /**
   * globaltagparametroemissor service.
   * @module api/GlobaltagparametroemissorApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagparametroemissorApi. 
   * @alias module:api/GlobaltagparametroemissorApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET29 operation.
     * @callback module:api/GlobaltagparametroemissorApi~consultarUsingGET29Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ParametroEmissorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{parametro_emissor_recurso}}}
     * {{{parametro_emissor_recurso_notas}}}
     * @param {String} codigo {{{parametro_emissor_recurso_pesquisa_codigo_param}}}
     * @param {module:api/GlobaltagparametroemissorApi~consultarUsingGET29Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParametroEmissorResponse}
     */
    this.consultarUsingGET29 = function(codigo, callback) {
      var postBody = null;

      // verify the required parameter 'codigo' is set
      if (codigo == undefined || codigo == null) {
        throw "Missing the required parameter 'codigo' when calling consultarUsingGET29";
      }


      var pathParams = {
        'codigo': codigo
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
      var returnType = ParametroEmissorResponse;

      return this.apiClient.callApi(
        '/api/parametros-emissor/{codigo}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
