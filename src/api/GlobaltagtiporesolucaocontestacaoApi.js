(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PageTipoResolucaoContestacaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageTipoResolucaoContestacaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagtiporesolucaocontestacaoApi = factory(root.Pier.ApiClient, root.Pier.PageTipoResolucaoContestacaoResponse);
  }
}(this, function(ApiClient, PageTipoResolucaoContestacaoResponse) {
  'use strict';

  /**
   * globaltagtiporesolucaocontestacao service.
   * @module api/GlobaltagtiporesolucaocontestacaoApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagtiporesolucaocontestacaoApi. 
   * @alias module:api/GlobaltagtiporesolucaocontestacaoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listarTipoResolucaoContestacaoUsingGET operation.
     * @callback module:api/GlobaltagtiporesolucaocontestacaoApi~listarTipoResolucaoContestacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoResolucaoContestacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_resolucao_contestacao_resource_listar_tipo_contestacao}}}
     * {{{tipo_resolucao_contestacao_resource_listar_tipo_resolucao_contestacao_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idTipoResolucaoContestacao {{{tipo_resolucao_contestacao_request_idTipoResolucaoContestacao_value}}}
     * @param {String} opts.descricao {{{tipo_resolucao_contestacao_request_descricao_value}}}
     * @param {module:api/GlobaltagtiporesolucaocontestacaoApi~listarTipoResolucaoContestacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoResolucaoContestacaoResponse}
     */
    this.listarTipoResolucaoContestacaoUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTipoResolucaoContestacao': opts['idTipoResolucaoContestacao'],
        'descricao': opts['descricao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoResolucaoContestacaoResponse;

      return this.apiClient.callApi(
        '/api/tipos-resolucoes-contestacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
