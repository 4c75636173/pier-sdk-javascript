(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AcordoDetalheResponse', '../model/PageHistoricoPagamentoResponse', '../model/PageAcordoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AcordoDetalheResponse'), require('../model/PageHistoricoPagamentoResponse'), require('../model/PageAcordoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagpagamentoApi = factory(root.Pier.ApiClient, root.Pier.AcordoDetalheResponse, root.Pier.PageHistoricoPagamentoResponse, root.Pier.PageAcordoResponse);
  }
}(this, function(ApiClient, AcordoDetalheResponse, PageHistoricoPagamentoResponse, PageAcordoResponse) {
  'use strict';

  /**
   * globaltagpagamento service.
   * @module api/GlobaltagpagamentoApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagpagamentoApi. 
   * @alias module:api/GlobaltagpagamentoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET operation.
     * @callback module:api/GlobaltagpagamentoApi~consultarUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AcordoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{acordo_resource_consultar}}}
     * {{{acordo_resource_consultar_notes}}}
     * @param {Integer} id {{{acordo_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagpagamentoApi~consultarUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AcordoDetalheResponse}
     */
    this.consultarUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET";
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
      var returnType = AcordoDetalheResponse;

      return this.apiClient.callApi(
        '/api/acordos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarPagamentosUsingGET1 operation.
     * @callback module:api/GlobaltagpagamentoApi~listarPagamentosUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageHistoricoPagamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{pagamento_resource_listar_pagamentos}}}
     * {{{pagamento_resource_listar_pagamentos_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idConta {{{historico_pagamento_request_id_conta_value}}}
     * @param {Integer} opts.idPagamento {{{historico_pagamento_request_id_pagamento_value}}}
     * @param {Integer} opts.idEstabelecimento {{{historico_pagamento_request_id_estabelecimento_value}}}
     * @param {Integer} opts.idBanco {{{historico_pagamento_request_id_banco_value}}}
     * @param {Integer} opts.idCartao {{{historico_pagamento_request_id_cartao_value}}}
     * @param {String} opts.dataHoraPagamento {{{historico_pagamento_request_data_hora_pagamento_value}}}
     * @param {Integer} opts.status {{{historico_pagamento_request_status_value}}}
     * @param {module:api/GlobaltagpagamentoApi~listarPagamentosUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageHistoricoPagamentoResponse}
     */
    this.listarPagamentosUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idConta': opts['idConta'],
        'idPagamento': opts['idPagamento'],
        'idEstabelecimento': opts['idEstabelecimento'],
        'idBanco': opts['idBanco'],
        'idCartao': opts['idCartao'],
        'dataHoraPagamento': opts['dataHoraPagamento'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageHistoricoPagamentoResponse;

      return this.apiClient.callApi(
        '/api/pagamentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET operation.
     * @callback module:api/GlobaltagpagamentoApi~listarUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAcordoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{acordo_resource_listar}}}
     * {{{acordo_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idConta {{{acordo_request_id_conta_value}}}
     * @param {Integer} opts.statusAcordo {{{acordo_request_status_acordo_value}}}
     * @param {String} opts.dataAcordo {{{acordo_request_data_acordo_value}}}
     * @param {Integer} opts.quantidadeParcelas {{{acordo_request_quantidade_parcelas_value}}}
     * @param {module:api/GlobaltagpagamentoApi~listarUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageAcordoResponse}
     */
    this.listarUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idConta': opts['idConta'],
        'statusAcordo': opts['statusAcordo'],
        'dataAcordo': opts['dataAcordo'],
        'quantidadeParcelas': opts['quantidadeParcelas']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageAcordoResponse;

      return this.apiClient.callApi(
        '/api/acordos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
