(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ContestarCompraRequest', '../model/PageGrupoChargebackResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ContestarCompraRequest'), require('../model/PageGrupoChargebackResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagcompracontestadaApi = factory(root.Pier.ApiClient, root.Pier.ContestarCompraRequest, root.Pier.PageGrupoChargebackResponse);
  }
}(this, function(ApiClient, ContestarCompraRequest, PageGrupoChargebackResponse) {
  'use strict';

  /**
   * globaltagcompracontestada service.
   * @module api/GlobaltagcompracontestadaApi
   * @version 2.74.2
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
     * Callback function to receive the result of the contestarUsingPOST operation.
     * @callback module:api/GlobaltagcompracontestadaApi~contestarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{compra_contestada_transacoes_resource_contestar}}}
     * {{{compra_contestada_transacoes_resource_contestar_notes}}}
     * @param {Integer} idCartao idCartao
     * @param {module:model/ContestarCompraRequest} request request
     * @param {Object} opts Optional parameters
     * @param {String} opts.login login
     * @param {module:api/GlobaltagcompracontestadaApi~contestarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.contestarUsingPOST = function(idCartao, request, opts, callback) {
      opts = opts || {};
      var postBody = opts['login'];

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling contestarUsingPOST";
      }

      // verify the required parameter 'request' is set
      if (request == undefined || request == null) {
        throw "Missing the required parameter 'request' when calling contestarUsingPOST";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/cartoes-com-contestacoes/{idCartao}/contestar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

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
     * Callback function to receive the result of the listarUsingGET13 operation.
     * @callback module:api/GlobaltagcompracontestadaApi~listarUsingGET13Callback
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
     * @param {Integer} opts.agingContestacao 
     * @param {String} opts.nome 
     * @param {String} opts.bandeira 
     * @param {String} opts.cartao 
     * @param {String} opts.cpf 
     * @param {String} opts.conta 
     * @param {Integer} opts.statusCartao 
     * @param {Integer} opts.statusContestacao 
     * @param {String} opts.dataContestacao 
     * @param {String} opts.dataAlteracao 
     * @param {String} opts.dataReapresentacao 
     * @param {Integer} opts.diasContestacao 
     * @param {Integer} opts.diasCompra 
     * @param {String} opts.modoEntrada 
     * @param {String} opts.motivo 
     * @param {Number} opts.valorCompra 
     * @param {module:api/GlobaltagcompracontestadaApi~listarUsingGET13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageGrupoChargebackResponse}
     */
    this.listarUsingGET13 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'agingContestacao': opts['agingContestacao'],
        'nome': opts['nome'],
        'bandeira': opts['bandeira'],
        'cartao': opts['cartao'],
        'cpf': opts['cpf'],
        'conta': opts['conta'],
        'statusCartao': opts['statusCartao'],
        'statusContestacao': opts['statusContestacao'],
        'dataContestacao': opts['dataContestacao'],
        'dataAlteracao': opts['dataAlteracao'],
        'dataReapresentacao': opts['dataReapresentacao'],
        'diasContestacao': opts['diasContestacao'],
        'diasCompra': opts['diasCompra'],
        'modoEntrada': opts['modoEntrada'],
        'motivo': opts['motivo'],
        'valorCompra': opts['valorCompra']
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
     * @param {Integer} opts.agingContestacao 
     * @param {String} opts.nome 
     * @param {String} opts.bandeira 
     * @param {String} opts.cartao 
     * @param {String} opts.cpf 
     * @param {String} opts.conta 
     * @param {Integer} opts.statusCartao 
     * @param {Integer} opts.statusContestacao 
     * @param {String} opts.dataContestacao 
     * @param {String} opts.dataAlteracao 
     * @param {String} opts.dataReapresentacao 
     * @param {Integer} opts.diasContestacao 
     * @param {Integer} opts.diasCompra 
     * @param {String} opts.modoEntrada 
     * @param {String} opts.motivo 
     * @param {Number} opts.valorCompra 
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
        'limit': opts['limit'],
        'agingContestacao': opts['agingContestacao'],
        'nome': opts['nome'],
        'bandeira': opts['bandeira'],
        'cartao': opts['cartao'],
        'cpf': opts['cpf'],
        'conta': opts['conta'],
        'statusCartao': opts['statusCartao'],
        'statusContestacao': opts['statusContestacao'],
        'dataContestacao': opts['dataContestacao'],
        'dataAlteracao': opts['dataAlteracao'],
        'dataReapresentacao': opts['dataReapresentacao'],
        'diasContestacao': opts['diasContestacao'],
        'diasCompra': opts['diasCompra'],
        'modoEntrada': opts['modoEntrada'],
        'motivo': opts['motivo'],
        'valorCompra': opts['valorCompra']
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
