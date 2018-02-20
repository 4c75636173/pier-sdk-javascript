(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ArquivoDetalheResponse', '../model/IntegrarArquivoRequest', '../model/PageArquivoAUDResponse', '../model/PageArquivoResponse', '../model/ArquivoPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ArquivoDetalheResponse'), require('../model/IntegrarArquivoRequest'), require('../model/PageArquivoAUDResponse'), require('../model/PageArquivoResponse'), require('../model/ArquivoPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ArquivoApi = factory(root.Pier.ApiClient, root.Pier.ArquivoDetalheResponse, root.Pier.IntegrarArquivoRequest, root.Pier.PageArquivoAUDResponse, root.Pier.PageArquivoResponse, root.Pier.ArquivoPersist);
  }
}(this, function(ApiClient, ArquivoDetalheResponse, IntegrarArquivoRequest, PageArquivoAUDResponse, PageArquivoResponse, ArquivoPersist) {
  'use strict';

  /**
   * Arquivo service.
   * @module api/ArquivoApi
   * @version 2.54.4
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
     * @param {module:model/ArquivoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta de arquivo no PIER Cloud
     * Este recurso permite consultar um determinado arquivo armazenado no PIER Cloud.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do arquivo
     * @param {module:api/ArquivoApi~consultarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ArquivoDetalheResponse}
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
      var returnType = ArquivoDetalheResponse;

      return this.apiClient.callApi(
        '/api/arquivos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the integrarUsingPOST operation.
     * @callback module:api/ArquivoApi~integrarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Integrar Arquivos
     * Este recurso foi desenvolvido para realizar a integra\u00C3\u00A7\u00C3\u00A3o de arquivos do PIER Cloud junto a reposit\u00C3\u00B3rios externos pr\u00C3\u00A9-configurado.
     * @param {module:model/IntegrarArquivoRequest} integrarArquivoRequest integrarArquivoRequest
     * @param {module:api/ArquivoApi~integrarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.integrarUsingPOST = function(integrarArquivoRequest, callback) {
      var postBody = integrarArquivoRequest;

      // verify the required parameter 'integrarArquivoRequest' is set
      if (integrarArquivoRequest == undefined || integrarArquivoRequest == null) {
        throw "Missing the required parameter 'integrarArquivoRequest' when calling integrarUsingPOST";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/arquivos/integrar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET3 operation.
     * @callback module:api/ArquivoApi~listarUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageArquivoAUDResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as auditorias do arquivo
     * Este recurso permite listar as auditorias de um determinado arquivo a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do arquivo
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/ArquivoApi~listarUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageArquivoAUDResponse}
     */
    this.listarUsingGET3 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET3";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
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
      var returnType = PageArquivoAUDResponse;

      return this.apiClient.callApi(
        '/api/arquivos/{id}/auditorias', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET4 operation.
     * @callback module:api/ArquivoApi~listarUsingGET4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageArquivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar arquivos do Pier Cloud
     * Este recurso permite a listagem de todos os arquivos dispon\u00C3\u00ADveis no Pier Cloud.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.nome Nome do arquivo
     * @param {Integer} opts.idTipoArquivo Tipo do arquivo
     * @param {Integer} opts.idStatusArquivo Identificador do status do arquivo
     * @param {String} opts.extensao Extens\u00C3\u00A3o do arquivo
     * @param {module:api/ArquivoApi~listarUsingGET4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageArquivoResponse}
     */
    this.listarUsingGET4 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'nome': opts['nome'],
        'idTipoArquivo': opts['idTipoArquivo'],
        'idStatusArquivo': opts['idStatusArquivo'],
        'extensao': opts['extensao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageArquivoResponse;

      return this.apiClient.callApi(
        '/api/arquivos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST1 operation.
     * @callback module:api/ArquivoApi~salvarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ArquivoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite armazenar arquivos no PIER Cloud
     * Este recurso permite o armazenamento de arquivos no PIER Cloud.
     * @param {module:model/ArquivoPersist} arquivoPersist arquivoPersist
     * @param {module:api/ArquivoApi~salvarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ArquivoDetalheResponse}
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
      var returnType = ArquivoDetalheResponse;

      return this.apiClient.callApi(
        '/api/arquivos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
