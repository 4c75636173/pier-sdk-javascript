(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ArquivoDetalheResponse', '../model/IntegrarArquivoRequest', '../model/PageArquivoAUDResponse', '../model/PageStatusArquivoResponse', '../model/PageTipoArquivoResponse', '../model/PageArquivoResponse', '../model/ArquivoPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ArquivoDetalheResponse'), require('../model/IntegrarArquivoRequest'), require('../model/PageArquivoAUDResponse'), require('../model/PageStatusArquivoResponse'), require('../model/PageTipoArquivoResponse'), require('../model/PageArquivoResponse'), require('../model/ArquivoPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagarquivoApi = factory(root.Pier.ApiClient, root.Pier.ArquivoDetalheResponse, root.Pier.IntegrarArquivoRequest, root.Pier.PageArquivoAUDResponse, root.Pier.PageStatusArquivoResponse, root.Pier.PageTipoArquivoResponse, root.Pier.PageArquivoResponse, root.Pier.ArquivoPersist);
  }
}(this, function(ApiClient, ArquivoDetalheResponse, IntegrarArquivoRequest, PageArquivoAUDResponse, PageStatusArquivoResponse, PageTipoArquivoResponse, PageArquivoResponse, ArquivoPersist) {
  'use strict';

  /**
   * globaltagarquivo service.
   * @module api/GlobaltagarquivoApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagarquivoApi. 
   * @alias module:api/GlobaltagarquivoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET6 operation.
     * @callback module:api/GlobaltagarquivoApi~consultarUsingGET6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ArquivoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{arquivo_resource_consultar}}}
     * {{{arquivo_resource_consultar_notes}}}
     * @param {Integer} id {{{arquivo_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagarquivoApi~consultarUsingGET6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ArquivoDetalheResponse}
     */
    this.consultarUsingGET6 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET6";
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
     * @callback module:api/GlobaltagarquivoApi~integrarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{arquivo_resource_integrar}}}
     * {{{arquivo_resource_integrar_notes}}}
     * @param {module:model/IntegrarArquivoRequest} integrarArquivoRequest integrarArquivoRequest
     * @param {module:api/GlobaltagarquivoApi~integrarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarPorNumeroReceitaFederalUsingGET operation.
     * @callback module:api/GlobaltagarquivoApi~listarPorNumeroReceitaFederalUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageArquivoAUDResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{arquivo_a_u_d_resource_listar_por_numero_receita_federal}}}
     * {{{arquivo_a_u_d_resource_listar_por_numero_receita_federal_notes}}}
     * @param {String} numeroReceitaFederal {{{arquivo_a_u_d_resource_listar_por_numero_receita_federal_param_numero_receita_federal}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {module:api/GlobaltagarquivoApi~listarPorNumeroReceitaFederalUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageArquivoAUDResponse}
     */
    this.listarPorNumeroReceitaFederalUsingGET = function(numeroReceitaFederal, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'numeroReceitaFederal' is set
      if (numeroReceitaFederal == undefined || numeroReceitaFederal == null) {
        throw "Missing the required parameter 'numeroReceitaFederal' when calling listarPorNumeroReceitaFederalUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numeroReceitaFederal': numeroReceitaFederal,
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
        '/api/arquivos-auditorias', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarStatusArquivosUsingGET operation.
     * @callback module:api/GlobaltagarquivoApi~listarStatusArquivosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusArquivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{arquivo_resource_listar_status_arquivos}}}
     * {{{arquivo_resource_listar_status_arquivos_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.nome {{{status_arquivo_request_nome_value}}}
     * @param {String} opts.descricao {{{status_arquivo_request_descricao_value}}}
     * @param {module:api/GlobaltagarquivoApi~listarStatusArquivosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusArquivoResponse}
     */
    this.listarStatusArquivosUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'nome': opts['nome'],
        'descricao': opts['descricao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageStatusArquivoResponse;

      return this.apiClient.callApi(
        '/api/status-arquivos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTiposArquivosUsingGET operation.
     * @callback module:api/GlobaltagarquivoApi~listarTiposArquivosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoArquivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{arquivo_resource_listar_tipos_arquivos}}}
     * {{{arquivo_resource_listar_tipos_arquivos_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.nome {{{tipo_arquivo_request_nome_value}}}
     * @param {String} opts.descricao {{{tipo_arquivo_request_descricao_value}}}
     * @param {module:api/GlobaltagarquivoApi~listarTiposArquivosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoArquivoResponse}
     */
    this.listarTiposArquivosUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'nome': opts['nome'],
        'descricao': opts['descricao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoArquivoResponse;

      return this.apiClient.callApi(
        '/api/tipos-arquivos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET6 operation.
     * @callback module:api/GlobaltagarquivoApi~listarUsingGET6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageArquivoAUDResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{arquivo_a_u_d_resource_listar}}}
     * {{{arquivo_a_u_d_resource_listar_notes}}}
     * @param {Integer} id {{{arquivo_a_u_d_resource_listar_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {module:api/GlobaltagarquivoApi~listarUsingGET6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageArquivoAUDResponse}
     */
    this.listarUsingGET6 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET6";
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
     * Callback function to receive the result of the listarUsingGET7 operation.
     * @callback module:api/GlobaltagarquivoApi~listarUsingGET7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageArquivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{arquivo_resource_listar}}}
     * {{{arquivo_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.nome {{{arquivo_request_nome_value}}}
     * @param {Integer} opts.idTipoArquivo {{{arquivo_request_id_tipo_arquivo_value}}}
     * @param {Integer} opts.idStatusArquivo {{{arquivo_request_id_status_arquivo_value}}}
     * @param {String} opts.extensao {{{arquivo_request_extensao_value}}}
     * @param {module:api/GlobaltagarquivoApi~listarUsingGET7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageArquivoResponse}
     */
    this.listarUsingGET7 = function(opts, callback) {
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
     * @callback module:api/GlobaltagarquivoApi~salvarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ArquivoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{arquivo_resource_salvar}}}
     * {{{arquivo_resource_salvar_notes}}}
     * @param {module:model/ArquivoPersist} arquivoPersist arquivoPersist
     * @param {module:api/GlobaltagarquivoApi~salvarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
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
