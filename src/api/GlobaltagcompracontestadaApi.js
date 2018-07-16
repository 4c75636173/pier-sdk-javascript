(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PageGrupoChargebackResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageGrupoChargebackResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagcompracontestadaApi = factory(root.Pier.ApiClient, root.Pier.PageGrupoChargebackResponse);
  }
}(this, function(ApiClient, PageGrupoChargebackResponse) {
  'use strict';

  /**
   * globaltagcompracontestada service.
   * @module api/GlobaltagcompracontestadaApi
   * @version 2.68.0
   */

  /**
   * Constructs a new GlobaltagcompracontestadaApi. 
   * @alias module:api/GlobaltagcompracontestadaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the detalheCartaoUsingGET operation.
     * @callback module:api/GlobaltagcompracontestadaApi~detalheCartaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageGrupoChargebackResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{compra_contestada_detalhe_cartao_resource_listar}}}
     * {{{compra_contestada_detalhe_cartao_resource_listar_notes}}}
     * @param {Integer} idCartao idCartao
     * @param {module:api/GlobaltagcompracontestadaApi~detalheCartaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageGrupoChargebackResponse}
     */
    this.detalheCartaoUsingGET = function(idCartao, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling detalheCartaoUsingGET";
      }


      var pathParams = {
        'idCartao': idCartao
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
      var returnType = PageGrupoChargebackResponse;

      return this.apiClient.callApi(
        '/api/cartoes-com-contestacoes/{idCartao}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET12 operation.
     * @callback module:api/GlobaltagcompracontestadaApi~listarUsingGET12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageGrupoChargebackResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_com_compra_contestada_resource_listar}}}
     * {{{cartao_com_compra_contestada_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcompracontestadaApi~listarUsingGET12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageGrupoChargebackResponse}
     */
    this.listarUsingGET12 = function(opts, callback) {
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
      var returnType = PageGrupoChargebackResponse;

      return this.apiClient.callApi(
        '/api/cartoes-com-contestacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transacaoUsingGET operation.
     * @callback module:api/GlobaltagcompracontestadaApi~transacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageGrupoChargebackResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{compra_contestada_transacoes_resource_listar}}}
     * {{{compra_contestada_transacoes_resource_listar_notes}}}
     * @param {Integer} idCartao idCartao
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcompracontestadaApi~transacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageGrupoChargebackResponse}
     */
    this.transacaoUsingGET = function(idCartao, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling transacaoUsingGET";
      }


      var pathParams = {
        'idCartao': idCartao
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
      var returnType = PageGrupoChargebackResponse;

      return this.apiClient.callApi(
        '/api/cartoes-com-contestacoes/{idCartao}/transacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
