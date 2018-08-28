(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/TipoTemplateResponse', '../model/TipoTemplateRequest', '../model/DocumentoTemplatePersist', '../model/DocumentoTemplateResponse', '../model/DocumentoDetalhadoResponse', '../model/IntegrarDocumentoRequest', '../model/DocumentoIntegracaoResponse', '../model/PageDocumentoResponse', '../model/PageDocumentoTemplateResponse', '../model/PageTipoTemplateResponse', '../model/DocumentoParametrosRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TipoTemplateResponse'), require('../model/TipoTemplateRequest'), require('../model/DocumentoTemplatePersist'), require('../model/DocumentoTemplateResponse'), require('../model/DocumentoDetalhadoResponse'), require('../model/IntegrarDocumentoRequest'), require('../model/DocumentoIntegracaoResponse'), require('../model/PageDocumentoResponse'), require('../model/PageDocumentoTemplateResponse'), require('../model/PageTipoTemplateResponse'), require('../model/DocumentoParametrosRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagdocumentoApi = factory(root.Pier.ApiClient, root.Pier.TipoTemplateResponse, root.Pier.TipoTemplateRequest, root.Pier.DocumentoTemplatePersist, root.Pier.DocumentoTemplateResponse, root.Pier.DocumentoDetalhadoResponse, root.Pier.IntegrarDocumentoRequest, root.Pier.DocumentoIntegracaoResponse, root.Pier.PageDocumentoResponse, root.Pier.PageDocumentoTemplateResponse, root.Pier.PageTipoTemplateResponse, root.Pier.DocumentoParametrosRequest);
  }
}(this, function(ApiClient, TipoTemplateResponse, TipoTemplateRequest, DocumentoTemplatePersist, DocumentoTemplateResponse, DocumentoDetalhadoResponse, IntegrarDocumentoRequest, DocumentoIntegracaoResponse, PageDocumentoResponse, PageDocumentoTemplateResponse, PageTipoTemplateResponse, DocumentoParametrosRequest) {
  'use strict';

  /**
   * globaltagdocumento service.
   * @module api/GlobaltagdocumentoApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagdocumentoApi. 
   * @alias module:api/GlobaltagdocumentoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT21 operation.
     * @callback module:api/GlobaltagdocumentoApi~alterarUsingPUT21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_template_resource_alterar}}}
     * {{{tipo_template_resource_alterar_notes}}}
     * @param {Integer} id {{{tipo_template_resource_alterar_param_id}}}
     * @param {module:model/TipoTemplateRequest} persist persist
     * @param {module:api/GlobaltagdocumentoApi~alterarUsingPUT21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoTemplateResponse}
     */
    this.alterarUsingPUT21 = function(id, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT21";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling alterarUsingPUT21";
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
      var returnType = TipoTemplateResponse;

      return this.apiClient.callApi(
        '/api/tipos-templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the atualizarUsingPUT4 operation.
     * @callback module:api/GlobaltagdocumentoApi~atualizarUsingPUT4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{documento_template_resource_atualizar}}}
     * {{{documento_template_resource_atualizar_notes}}}
     * @param {Integer} id {{{documento_template_resource_atualizar_param_id}}}
     * @param {module:model/DocumentoTemplatePersist} persist persist
     * @param {module:api/GlobaltagdocumentoApi~atualizarUsingPUT4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoTemplateResponse}
     */
    this.atualizarUsingPUT4 = function(id, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarUsingPUT4";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling atualizarUsingPUT4";
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
     * Callback function to receive the result of the consultarUsingGET19 operation.
     * @callback module:api/GlobaltagdocumentoApi~consultarUsingGET19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoDetalhadoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{documento_resource_consultar}}}
     * {{{documento_resource_consultar_notes}}}
     * @param {Integer} id {{{documento_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagdocumentoApi~consultarUsingGET19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoDetalhadoResponse}
     */
    this.consultarUsingGET19 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET19";
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
      var returnType = DocumentoDetalhadoResponse;

      return this.apiClient.callApi(
        '/api/documentos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET20 operation.
     * @callback module:api/GlobaltagdocumentoApi~consultarUsingGET20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{documento_template_resource_consultar}}}
     * {{{documento_template_resource_consultar_notes}}}
     * @param {Integer} id {{{documento_template_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagdocumentoApi~consultarUsingGET20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoTemplateResponse}
     */
    this.consultarUsingGET20 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET20";
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
     * Callback function to receive the result of the consultarUsingGET49 operation.
     * @callback module:api/GlobaltagdocumentoApi~consultarUsingGET49Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_template_resource_consultar}}}
     * {{{tipo_template_resource_consultar_notes}}}
     * @param {Integer} id {{{tipo_template_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagdocumentoApi~consultarUsingGET49Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoTemplateResponse}
     */
    this.consultarUsingGET49 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET49";
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
      var returnType = TipoTemplateResponse;

      return this.apiClient.callApi(
        '/api/tipos-templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the integrarUsingPOST1 operation.
     * @callback module:api/GlobaltagdocumentoApi~integrarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoIntegracaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{documento_resource_integrar}}}
     * {{{documento_resource_integrar_notes}}}
     * @param {module:model/IntegrarDocumentoRequest} integrarDocumentoRequest integrarDocumentoRequest
     * @param {module:api/GlobaltagdocumentoApi~integrarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoIntegracaoResponse}
     */
    this.integrarUsingPOST1 = function(integrarDocumentoRequest, callback) {
      var postBody = integrarDocumentoRequest;

      // verify the required parameter 'integrarDocumentoRequest' is set
      if (integrarDocumentoRequest == undefined || integrarDocumentoRequest == null) {
        throw "Missing the required parameter 'integrarDocumentoRequest' when calling integrarUsingPOST1";
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
      var returnType = DocumentoIntegracaoResponse;

      return this.apiClient.callApi(
        '/api/documentos/integrar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET22 operation.
     * @callback module:api/GlobaltagdocumentoApi~listarUsingGET22Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageDocumentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{documento_resource_listar}}}
     * {{{documento_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idTemplateDocumento {{{documento_request_id_template_documento_value}}}
     * @param {String} opts.nome {{{documento_request_nome_value}}}
     * @param {module:model/String} opts.extensao {{{documento_request_extensao_value}}}
     * @param {module:api/GlobaltagdocumentoApi~listarUsingGET22Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageDocumentoResponse}
     */
    this.listarUsingGET22 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTemplateDocumento': opts['idTemplateDocumento'],
        'nome': opts['nome'],
        'extensao': opts['extensao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageDocumentoResponse;

      return this.apiClient.callApi(
        '/api/documentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET23 operation.
     * @callback module:api/GlobaltagdocumentoApi~listarUsingGET23Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageDocumentoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{documento_template_resource_listar}}}
     * {{{documento_template_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idTipoTemplate {{{documento_template_request_id_tipo_template_value}}}
     * @param {module:api/GlobaltagdocumentoApi~listarUsingGET23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageDocumentoTemplateResponse}
     */
    this.listarUsingGET23 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTipoTemplate': opts['idTipoTemplate']
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
     * Callback function to receive the result of the listarUsingGET60 operation.
     * @callback module:api/GlobaltagdocumentoApi~listarUsingGET60Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_template_resource_listar}}}
     * {{{tipo_template_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagdocumentoApi~listarUsingGET60Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoTemplateResponse}
     */
    this.listarUsingGET60 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoTemplateResponse;

      return this.apiClient.callApi(
        '/api/tipos-templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST12 operation.
     * @callback module:api/GlobaltagdocumentoApi~salvarUsingPOST12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoDetalhadoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{documento_resource_salvar}}}
     * {{{documento_resource_salvar_notes}}}
     * @param {module:model/DocumentoParametrosRequest} persist persist
     * @param {module:api/GlobaltagdocumentoApi~salvarUsingPOST12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoDetalhadoResponse}
     */
    this.salvarUsingPOST12 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST12";
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
      var returnType = DocumentoDetalhadoResponse;

      return this.apiClient.callApi(
        '/api/documentos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST13 operation.
     * @callback module:api/GlobaltagdocumentoApi~salvarUsingPOST13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{documento_template_resource_salvar}}}
     * {{{documento_template_resource_salvar_notes}}}
     * @param {module:model/DocumentoTemplatePersist} persist persist
     * @param {module:api/GlobaltagdocumentoApi~salvarUsingPOST13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoTemplateResponse}
     */
    this.salvarUsingPOST13 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST13";
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
     * Callback function to receive the result of the salvarUsingPOST32 operation.
     * @callback module:api/GlobaltagdocumentoApi~salvarUsingPOST32Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_template_resource_salvar}}}
     * {{{tipo_template_resource_salvar_notes}}}
     * @param {module:model/TipoTemplateRequest} persist persist
     * @param {module:api/GlobaltagdocumentoApi~salvarUsingPOST32Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoTemplateResponse}
     */
    this.salvarUsingPOST32 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST32";
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
      var returnType = TipoTemplateResponse;

      return this.apiClient.callApi(
        '/api/tipos-templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
