(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DocumentoParametrosRequest', '../model/DocumentoResponse', '../model/DocumentoTemplateRequest', '../model/DocumentoTemplateResponse', '../model/DocumentoTipoResponse', '../model/DocumentoTipoRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DocumentoParametrosRequest'), require('../model/DocumentoResponse'), require('../model/DocumentoTemplateRequest'), require('../model/DocumentoTemplateResponse'), require('../model/DocumentoTipoResponse'), require('../model/DocumentoTipoRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.DocumentosApi = factory(root.Pier.ApiClient, root.Pier.DocumentoParametrosRequest, root.Pier.DocumentoResponse, root.Pier.DocumentoTemplateRequest, root.Pier.DocumentoTemplateResponse, root.Pier.DocumentoTipoResponse, root.Pier.DocumentoTipoRequest);
  }
}(this, function(ApiClient, DocumentoParametrosRequest, DocumentoResponse, DocumentoTemplateRequest, DocumentoTemplateResponse, DocumentoTipoResponse, DocumentoTipoRequest) {
  'use strict';

  /**
   * Documentos service.
   * @module api/DocumentosApi
   * @version 2.35.2
   */

  /**
   * Constructs a new DocumentosApi. 
   * @alias module:api/DocumentosApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the salvarUsingPOST5 operation.
     * @callback module:api/DocumentosApi~salvarUsingPOST5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra documentos
     * Esse recurso permite cadastrar documentos.
     * @param {module:model/DocumentoParametrosRequest} persist persist
     * @param {module:api/DocumentosApi~salvarUsingPOST5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoResponse}
     */
    this.salvarUsingPOST5 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST5";
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
      var returnType = DocumentoResponse;

      return this.apiClient.callApi(
        '/api/documentos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST6 operation.
     * @callback module:api/DocumentosApi~salvarUsingPOST6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra os templates dos documentos
     * Esse recurso permite cadastrar templates dos documentos.
     * @param {module:model/DocumentoTemplateRequest} persist persist
     * @param {module:api/DocumentosApi~salvarUsingPOST6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoTemplateResponse}
     */
    this.salvarUsingPOST6 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST6";
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
      var returnType = DocumentoTemplateResponse;

      return this.apiClient.callApi(
        '/api/templates-documentos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST7 operation.
     * @callback module:api/DocumentosApi~salvarUsingPOST7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoTipoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra os tipos de documentos
     * Esse recurso permite cadastrar tipos de documentos.
     * @param {module:model/DocumentoTipoRequest} persist persist
     * @param {module:api/DocumentosApi~salvarUsingPOST7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoTipoResponse}
     */
    this.salvarUsingPOST7 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST7";
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
      var returnType = DocumentoTipoResponse;

      return this.apiClient.callApi(
        '/api/tipos-documentos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
