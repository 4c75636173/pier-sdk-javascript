(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ArquivoResponse', '../model/ArquivoPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ArquivoResponse'), require('../model/ArquivoPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ArquivoApi = factory(root.Pier.ApiClient, root.Pier.ArquivoResponse, root.Pier.ArquivoPersist);
  }
}(this, function(ApiClient, ArquivoResponse, ArquivoPersist) {
  'use strict';

  /**
   * Arquivo service.
   * @module api/ArquivoApi
   * @version 2.51.0
   */

  /**
   * Constructs a new ArquivoApi. 
   * @alias module:api/ArquivoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET2 operation.
     * @callback module:api/ArquivoApi~consultarUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ArquivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta de arquivo no PIER Cloud
     * Este recurso permite consultar um determinado arquivo armazenado no PIER Cloud.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do arquivo
     * @param {module:api/ArquivoApi~consultarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ArquivoResponse}
     */
    this.consultarUsingGET2 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET2";
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
      var returnType = ArquivoResponse;

      return this.apiClient.callApi(
        '/api/arquivos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST1 operation.
     * @callback module:api/ArquivoApi~salvarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ArquivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite armazenar arquivos no PIER Cloud
     * Este recurso permite o armazenamento de arquivos no PIER Cloud.
     * @param {module:model/ArquivoPersist} arquivoPersist arquivoPersist
     * @param {module:api/ArquivoApi~salvarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ArquivoResponse}
     */
    this.salvarUsingPOST1 = function(arquivoPersist, callback) {
      var postBody = arquivoPersist;

      // verify the required parameter 'arquivoPersist' is set
      if (arquivoPersist == undefined || arquivoPersist == null) {
        throw "Missing the required parameter 'arquivoPersist' when calling salvarUsingPOST1";
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
      var returnType = ArquivoResponse;

      return this.apiClient.callApi(
        '/api/arquivos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
