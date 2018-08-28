(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ParametroProdutoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ParametroProdutoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagparametrosprodutoApi = factory(root.Pier.ApiClient, root.Pier.ParametroProdutoResponse);
  }
}(this, function(ApiClient, ParametroProdutoResponse) {
  'use strict';

  /**
   * globaltagparametrosproduto service.
   * @module api/GlobaltagparametrosprodutoApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagparametrosprodutoApi. 
   * @alias module:api/GlobaltagparametrosprodutoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listarUsingGET37 operation.
     * @callback module:api/GlobaltagparametrosprodutoApi~listarUsingGET37Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ParametroProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{parametro_produto_listar}}}
     * {{{parametro_produto_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{parametro_produto_request_id_value}}}
     * @param {String} opts.codigo {{{parametro_produto_request_codigo_value}}}
     * @param {String} opts.tipo {{{parametro_produto_request_tipo_value}}}
     * @param {Integer} opts.idProduto {{{parametro_produto_request_id_produto_value}}}
     * @param {module:api/GlobaltagparametrosprodutoApi~listarUsingGET37Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParametroProdutoResponse}
     */
    this.listarUsingGET37 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'codigo': opts['codigo'],
        'tipo': opts['tipo'],
        'idProduto': opts['idProduto']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParametroProdutoResponse;

      return this.apiClient.callApi(
        '/api/parametros-produto', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
