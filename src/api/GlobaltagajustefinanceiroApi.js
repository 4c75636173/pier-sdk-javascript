(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AjusteFinanceiroResponse', '../model/PageAjusteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AjusteFinanceiroResponse'), require('../model/PageAjusteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagajustefinanceiroApi = factory(root.Pier.ApiClient, root.Pier.AjusteFinanceiroResponse, root.Pier.PageAjusteResponse);
  }
}(this, function(ApiClient, AjusteFinanceiroResponse, PageAjusteResponse) {
  'use strict';

  /**
   * globaltagajustefinanceiro service.
   * @module api/GlobaltagajustefinanceiroApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagajustefinanceiroApi. 
   * @alias module:api/GlobaltagajustefinanceiroApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the ajustarContaUsingPOST operation.
     * @callback module:api/GlobaltagajustefinanceiroApi~ajustarContaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AjusteFinanceiroResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{ajuste_financeiro_resource_ajustar_conta}}}
     * {{{ajuste_financeiro_resource_ajustar_conta_notes}}}
     * @param {Integer} idTipoAjuste {{{ajuste_financeiro_persist_id_tipo_ajuste_value}}}
     * @param {String} dataAjuste {{{ajuste_financeiro_persist_data_ajuste_value}}}
     * @param {Number} valorAjuste {{{ajuste_financeiro_persist_valor_ajuste_value}}}
     * @param {Integer} idConta {{{ajuste_financeiro_persist_id_conta_value}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.identificadorExterno {{{ajuste_financeiro_persist_identificador_externo_value}}}
     * @param {Integer} opts.idTransacaoOriginal {{{ajuste_persist_id_transacao_original}}}
     * @param {module:api/GlobaltagajustefinanceiroApi~ajustarContaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AjusteFinanceiroResponse}
     */
    this.ajustarContaUsingPOST = function(idTipoAjuste, dataAjuste, valorAjuste, idConta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idTipoAjuste' is set
      if (idTipoAjuste == undefined || idTipoAjuste == null) {
        throw "Missing the required parameter 'idTipoAjuste' when calling ajustarContaUsingPOST";
      }

      // verify the required parameter 'dataAjuste' is set
      if (dataAjuste == undefined || dataAjuste == null) {
        throw "Missing the required parameter 'dataAjuste' when calling ajustarContaUsingPOST";
      }

      // verify the required parameter 'valorAjuste' is set
      if (valorAjuste == undefined || valorAjuste == null) {
        throw "Missing the required parameter 'valorAjuste' when calling ajustarContaUsingPOST";
      }

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling ajustarContaUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
        'idTipoAjuste': idTipoAjuste,
        'dataAjuste': dataAjuste,
        'valorAjuste': valorAjuste,
        'identificadorExterno': opts['identificadorExterno'],
        'idConta': idConta,
        'idTransacaoOriginal': opts['idTransacaoOriginal']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AjusteFinanceiroResponse;

      return this.apiClient.callApi(
        '/api/ajustes-financeiros', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET3 operation.
     * @callback module:api/GlobaltagajustefinanceiroApi~consultarUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AjusteFinanceiroResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{ajuste_financeiro_resource_consultar}}}
     * {{{ajuste_financeiro_resource_consultar_notes}}}
     * @param {Integer} id {{{ajuste_financeiro_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagajustefinanceiroApi~consultarUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AjusteFinanceiroResponse}
     */
    this.consultarUsingGET3 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET3";
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
      var returnType = AjusteFinanceiroResponse;

      return this.apiClient.callApi(
        '/api/ajustes-financeiros/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET2 operation.
     * @callback module:api/GlobaltagajustefinanceiroApi~listarUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAjusteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{ajuste_financeiro_resource_listar}}}
     * {{{ajuste_financeiro_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idTipoAjuste {{{ajuste_request_id_tipo_ajuste_value}}}
     * @param {String} opts.dataAjuste {{{ajuste_request_data_ajuste_value}}}
     * @param {Number} opts.valorAjuste {{{ajuste_request_valor_ajuste_value}}}
     * @param {String} opts.identificadorExterno {{{ajuste_request_identificador_externo_value}}}
     * @param {Integer} opts.idConta {{{ajuste_request_id_conta_value}}}
     * @param {module:api/GlobaltagajustefinanceiroApi~listarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageAjusteResponse}
     */
    this.listarUsingGET2 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTipoAjuste': opts['idTipoAjuste'],
        'dataAjuste': opts['dataAjuste'],
        'valorAjuste': opts['valorAjuste'],
        'identificadorExterno': opts['identificadorExterno'],
        'idConta': opts['idConta']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageAjusteResponse;

      return this.apiClient.callApi(
        '/api/ajustes-financeiros', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
