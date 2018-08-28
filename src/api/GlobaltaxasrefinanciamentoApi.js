(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PageTaxasRefinanciamentoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageTaxasRefinanciamentoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltaxasrefinanciamentoApi = factory(root.Pier.ApiClient, root.Pier.PageTaxasRefinanciamentoResponse);
  }
}(this, function(ApiClient, PageTaxasRefinanciamentoResponse) {
  'use strict';

  /**
   * globaltaxasrefinanciamento service.
   * @module api/GlobaltaxasrefinanciamentoApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltaxasrefinanciamentoApi. 
   * @alias module:api/GlobaltaxasrefinanciamentoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listarUsingGET51 operation.
     * @callback module:api/GlobaltaxasrefinanciamentoApi~listarUsingGET51Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTaxasRefinanciamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{taxas_refinanciamento_listar}}}
     * {{{taxas_refinanciamento_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{taxas_refinanciamento_request_id_value}}}
     * @param {Integer} opts.idProduto {{{taxas_refinanciamento_request_id_produto_value}}}
     * @param {String} opts.dataEntrada {{{taxas_refinanciamento_request_data_entrada_value}}}
     * @param {String} opts.vencimento {{{taxas_refinanciamento_request_vencimento_value}}}
     * @param {module:api/GlobaltaxasrefinanciamentoApi~listarUsingGET51Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTaxasRefinanciamentoResponse}
     */
    this.listarUsingGET51 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'idProduto': opts['idProduto'],
        'dataEntrada': opts['dataEntrada'],
        'vencimento': opts['vencimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTaxasRefinanciamentoResponse;

      return this.apiClient.callApi(
        '/api/taxas-refinanciamento', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
