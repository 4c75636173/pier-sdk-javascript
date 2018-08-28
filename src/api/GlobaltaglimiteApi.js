(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PageHistoricoEventosResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageHistoricoEventosResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltaglimiteApi = factory(root.Pier.ApiClient, root.Pier.PageHistoricoEventosResponse);
  }
}(this, function(ApiClient, PageHistoricoEventosResponse) {
  'use strict';

  /**
   * globaltaglimite service.
   * @module api/GlobaltaglimiteApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltaglimiteApi. 
   * @alias module:api/GlobaltaglimiteApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listarHistoricoAlteracoesLimitesUsingGET operation.
     * @callback module:api/GlobaltaglimiteApi~listarHistoricoAlteracoesLimitesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageHistoricoEventosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_listar_historico_alteracoes_limites}}}
     * {{{conta_resource_listar_historico_alteracoes_limites_notes}}}
     * @param {Integer} id {{{conta_resource_listar_historico_alteracoes_limites_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltaglimiteApi~listarHistoricoAlteracoesLimitesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageHistoricoEventosResponse}
     */
    this.listarHistoricoAlteracoesLimitesUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarHistoricoAlteracoesLimitesUsingGET";
      }


      var pathParams = {
        'id': id
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
      var returnType = PageHistoricoEventosResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/historicos-alteracoes-limites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
