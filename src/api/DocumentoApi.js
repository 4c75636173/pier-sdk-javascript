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
    root.Pier.DocumentoApi = factory(root.Pier.ApiClient, root.Pier.TipoTemplateResponse, root.Pier.TipoTemplateRequest, root.Pier.DocumentoTemplatePersist, root.Pier.DocumentoTemplateResponse, root.Pier.DocumentoDetalhadoResponse, root.Pier.IntegrarDocumentoRequest, root.Pier.DocumentoIntegracaoResponse, root.Pier.PageDocumentoResponse, root.Pier.PageDocumentoTemplateResponse, root.Pier.PageTipoTemplateResponse, root.Pier.DocumentoParametrosRequest);
  }
}(this, function(ApiClient, TipoTemplateResponse, TipoTemplateRequest, DocumentoTemplatePersist, DocumentoTemplateResponse, DocumentoDetalhadoResponse, IntegrarDocumentoRequest, DocumentoIntegracaoResponse, PageDocumentoResponse, PageDocumentoTemplateResponse, PageTipoTemplateResponse, DocumentoParametrosRequest) {
  'use strict';

  /**
   * Documento service.
   * @module api/DocumentoApi
   * @version 2.50.11
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
     * Callback function to receive the result of the alterarUsingPUT17 operation.
     * @callback module:api/DocumentoApi~alterarUsingPUT17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera o tipo de template
     * Esse recurso permite alterar os dados do tipo de template.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do tipo de template (id).
     * @param {module:model/TipoTemplateRequest} persist persist
     * @param {module:api/DocumentoApi~alterarUsingPUT17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoTemplateResponse}
     */
    this.alterarUsingPUT17 = function(id, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT17";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling alterarUsingPUT17";
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
     * Callback function to receive the result of the atualizarUsingPUT2 operation.
     * @callback module:api/DocumentoApi~atualizarUsingPUT2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualizar templates dos documentos
     * Esse recurso permite atualizar templates dos documentos.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do documento template (id).
     * @param {module:model/DocumentoTemplatePersist} persist persist
     * @param {module:api/DocumentoApi~atualizarUsingPUT2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoTemplateResponse}
     */
    this.atualizarUsingPUT2 = function(id, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarUsingPUT2";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling atualizarUsingPUT2";
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
     * Callback function to receive the result of the consultarUsingGET13 operation.
     * @callback module:api/DocumentoApi~consultarUsingGET13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoDetalhadoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta documentos
     * Esse recurso permite consultar um documento espec\u00C3\u00ADfico a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do documento (id).
     * @param {module:api/DocumentoApi~consultarUsingGET13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoDetalhadoResponse}
     */
    this.consultarUsingGET13 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET13";
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
     * Callback function to receive the result of the consultarUsingGET14 operation.
     * @callback module:api/DocumentoApi~consultarUsingGET14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar templates dos documentos
     * Esse recurso permite consultar templates dos documentos.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do documento template (id).
     * @param {module:api/DocumentoApi~consultarUsingGET14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoTemplateResponse}
     */
    this.consultarUsingGET14 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET14";
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
     * Callback function to receive the result of the consultarUsingGET36 operation.
     * @callback module:api/DocumentoApi~consultarUsingGET36Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar tipo de template
     * Esse recurso permite consultar um determinado tipo de template a partir do id recebido e do id do emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do tipo de template (id).
     * @param {module:api/DocumentoApi~consultarUsingGET36Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoTemplateResponse}
     */
    this.consultarUsingGET36 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET36";
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
     * Callback function to receive the result of the integrarUsingPOST operation.
     * @callback module:api/DocumentoApi~integrarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoIntegracaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Integra um arquivo a reposit\u00C3\u00B3rios remotos.
     * Este recurso permite integrar um documento ao reposit\u00C3\u00B3rio pre-configurado.
     * @param {module:model/IntegrarDocumentoRequest} integrarDocumentoRequest integrarDocumentoRequest
     * @param {module:api/DocumentoApi~integrarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoIntegracaoResponse}
     */
    this.integrarUsingPOST = function(integrarDocumentoRequest, callback) {
      var postBody = integrarDocumentoRequest;

      // verify the required parameter 'integrarDocumentoRequest' is set
      if (integrarDocumentoRequest == undefined || integrarDocumentoRequest == null) {
        throw "Missing the required parameter 'integrarDocumentoRequest' when calling integrarUsingPOST";
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
     * Callback function to receive the result of the listarUsingGET16 operation.
     * @callback module:api/DocumentoApi~listarUsingGET16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageDocumentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista documentos
     * Esse recurso permite listar documentos.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idTemplateDocumento C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do template do documento.
     * @param {String} opts.nome Nome do documento.
     * @param {module:model/String} opts.extensao Extensao do documento.
     * @param {module:api/DocumentoApi~listarUsingGET16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageDocumentoResponse}
     */
    this.listarUsingGET16 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET17 operation.
     * @callback module:api/DocumentoApi~listarUsingGET17Callback
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
     * @param {Integer} opts.idTipoTemplate C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo do template.
     * @param {module:api/DocumentoApi~listarUsingGET17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageDocumentoTemplateResponse}
     */
    this.listarUsingGET17 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET40 operation.
     * @callback module:api/DocumentoApi~listarUsingGET40Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos de templates
     * Esse recurso permite listar os tipos de templates associados ao emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/DocumentoApi~listarUsingGET40Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoTemplateResponse}
     */
    this.listarUsingGET40 = function(opts, callback) {
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
     * Callback function to receive the result of the salvarUsingPOST10 operation.
     * @callback module:api/DocumentoApi~salvarUsingPOST10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra os templates dos documentos
     * Esse recurso permite cadastrar templates dos documentos.
     * @param {module:model/DocumentoTemplatePersist} persist persist
     * @param {module:api/DocumentoApi~salvarUsingPOST10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoTemplateResponse}
     */
    this.salvarUsingPOST10 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST10";
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
     * Callback function to receive the result of the salvarUsingPOST23 operation.
     * @callback module:api/DocumentoApi~salvarUsingPOST23Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoTemplateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra os tipos de templates
     * Esse recurso permite cadastrar tipos de templates.
     * @param {module:model/TipoTemplateRequest} persist persist
     * @param {module:api/DocumentoApi~salvarUsingPOST23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoTemplateResponse}
     */
    this.salvarUsingPOST23 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST23";
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

    /**
     * Callback function to receive the result of the salvarUsingPOST9 operation.
     * @callback module:api/DocumentoApi~salvarUsingPOST9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentoDetalhadoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra documentos
     * Esse recurso permite cadastrar documentos.
     * @param {module:model/DocumentoParametrosRequest} persist persist
     * @param {module:api/DocumentoApi~salvarUsingPOST9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DocumentoDetalhadoResponse}
     */
    this.salvarUsingPOST9 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST9";
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
  };

  return exports;
}));
