(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DocumentoTemplatePersist', '../model/DocumentoTemplateResponse', '../model/PageDocumentoTemplateResponse', '../model/DocumentoParametrosRequest', '../model/DocumentoResponse', '../model/DocumentoTipoResponse', '../model/DocumentoTipoRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DocumentoTemplatePersist'), require('../model/DocumentoTemplateResponse'), require('../model/PageDocumentoTemplateResponse'), require('../model/DocumentoParametrosRequest'), require('../model/DocumentoResponse'), require('../model/DocumentoTipoResponse'), require('../model/DocumentoTipoRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.DocumentoApi = factory(root.Pier.ApiClient, root.Pier.DocumentoTemplatePersist, root.Pier.DocumentoTemplateResponse, root.Pier.PageDocumentoTemplateResponse, root.Pier.DocumentoParametrosRequest, root.Pier.DocumentoResponse, root.Pier.DocumentoTipoResponse, root.Pier.DocumentoTipoRequest);
  }
}(this, function(ApiClient, DocumentoTemplatePersist, DocumentoTemplateResponse, PageDocumentoTemplateResponse, DocumentoParametrosRequest, DocumentoResponse, DocumentoTipoResponse, DocumentoTipoRequest) {
  'use strict';

  /**
   * Documento service.
   * @module api/DocumentoApi
   * @version 2.36.2
   */

  /**
   * Constructs a new DocumentoApi. 
   * @alias module:api/DocumentoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the atualizarUsingPUT operation.
     * @callback module:api/DocumentoApi~atualizarUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualizar templates dos documentos
     * Esse recurso permite atualizar templates dos documentos.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do documento template (id).
     * @param {module:model/DocumentoTemplatePersist} persist persist
     * @param {module:api/DocumentoApi~atualizarUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoTemplateResponse}
     */
    this.atualizarUsingPUT = function(id, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarUsingPUT";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling atualizarUsingPUT";
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
      var returnType = DocumentoTemplateResponse;

      return this.apiClient.callApi(
        '/api/templates-documentos/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET7 operation.
     * @callback module:api/DocumentoApi~consultarUsingGET7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar templates dos documentos
     * Esse recurso permite consultar templates dos documentos.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do documento template (id).
     * @param {module:api/DocumentoApi~consultarUsingGET7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoTemplateResponse}
     */
    this.consultarUsingGET7 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET7";
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
      var returnType = DocumentoTemplateResponse;

      return this.apiClient.callApi(
        '/api/templates-documentos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET10 operation.
     * @callback module:api/DocumentoApi~listarUsingGET10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageDocumentoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os templates dos documentos
     * Esse recurso permite listar os templates dos documentos.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idTipoDocumento C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo do documento.
     * @param {module:api/DocumentoApi~listarUsingGET10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageDocumentoTemplateResponse}
     */
    this.listarUsingGET10 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTipoDocumento': opts['idTipoDocumento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageDocumentoTemplateResponse;

      return this.apiClient.callApi(
        '/api/templates-documentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST5 operation.
     * @callback module:api/DocumentoApi~salvarUsingPOST5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra documentos
     * Esse recurso permite cadastrar documentos.
     * @param {module:model/DocumentoParametrosRequest} persist persist
     * @param {module:api/DocumentoApi~salvarUsingPOST5Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/DocumentoApi~salvarUsingPOST6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra os templates dos documentos
     * Esse recurso permite cadastrar templates dos documentos.
     * @param {module:model/DocumentoTemplatePersist} persist persist
     * @param {module:api/DocumentoApi~salvarUsingPOST6Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/DocumentoApi~salvarUsingPOST7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoTipoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra os tipos de documentos
     * Esse recurso permite cadastrar tipos de documentos.
     * @param {module:model/DocumentoTipoRequest} persist persist
     * @param {module:api/DocumentoApi~salvarUsingPOST7Callback} callback The callback function, accepting three arguments: error, data, response
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
