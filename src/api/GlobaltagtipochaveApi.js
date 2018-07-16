(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PageTipoChaveResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageTipoChaveResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagtipochaveApi = factory(root.Pier.ApiClient, root.Pier.PageTipoChaveResponse);
  }
}(this, function(ApiClient, PageTipoChaveResponse) {
  'use strict';

  /**
   * Globaltagtipochave service.
   * @module api/GlobaltagtipochaveApi
   * @version 2.68.0
   */

  /**
   * Constructs a new GlobaltagtipochaveApi. 
   * @alias module:api/GlobaltagtipochaveApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listarTipoChaveUsingGET operation.
     * @callback module:api/GlobaltagtipochaveApi~listarTipoChaveUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoChaveResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_chave_resource_listar_tipos_chaves}}}
     * {{{tipo_chave_resource_listar_tipos_chaves_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{tipo_chave_request_id_value}}}
     * @param {String} opts.descricao {{{tipo_chave_request_descricao_value}}}
     * @param {module:api/GlobaltagtipochaveApi~listarTipoChaveUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoChaveResponse}
     */
    this.listarTipoChaveUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'descricao': opts['descricao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoChaveResponse;

      return this.apiClient.callApi(
        '/api/tipos-chaves', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
