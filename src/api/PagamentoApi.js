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
    root.Pier.PagamentoApi = factory(root.Pier.ApiClient, root.Pier.AcordoDetalheResponse, root.Pier.PageHistoricoPagamentoResponse, root.Pier.PageAcordoResponse);
  }
}(this, function(ApiClient, AcordoDetalheResponse, PageHistoricoPagamentoResponse, PageAcordoResponse) {
  'use strict';

  /**
   * Pagamento service.
   * @module api/PagamentoApi
   * @version 2.57.0
   */

  /**
   * Constructs a new PagamentoApi. 
   * @alias module:api/PagamentoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET operation.
     * @callback module:api/PagamentoApi~consultarUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AcordoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta os dados de um determinado acordo
     * Este m\u00E9todo permite consultar dados de um determinado acordo a partir de seu codigo de identifica\u00E7\u00E3o (id).
     * @param {Integer} id C\u00F3digo de identifica\u00E7\u00E3o do acordo (id).
     * @param {module:api/PagamentoApi~consultarUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/PagamentoApi~listarPagamentosUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageHistoricoPagamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista hist\u00F3rico de pagamentos
     * Este recurso permite listar todos os Pagamentos realizados independente do seu Status de Processamento.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {Integer} opts.idConta C\u00F3digo de Identifica\u00E7\u00E3o da Conta
     * @param {Integer} opts.idPagamento C\u00F3digo de Identifica\u00E7\u00E3o do Pagamento
     * @param {Integer} opts.idEstabelecimento C\u00F3digo de Identifica\u00E7\u00E3o do Estabelecimento onde o Pagamento foi realizado, quando este for o local de pagamento
     * @param {Integer} opts.idBanco C\u00F3digo de Identifica\u00E7\u00E3o da Institui\u00E7\u00E3o Banc\u00E1ria onde o Pagamento foi realizado, quando este for o local de pagamento
     * @param {Integer} opts.idCartao C\u00F3digo de Identifica\u00E7\u00E3o do Cart\u00E3o
     * @param {String} opts.dataHoraPagamento Data e Hora da realiza\u00E7\u00E3o do Pagamento. Quando feito em Institui\u00E7\u00E3o Banc\u00E1ria, o hor\u00E1rio do pagamento \u00E9 exibido com valor zero
     * @param {Integer} opts.status C\u00F3digo de Identifica\u00E7\u00E3o do Status do Pagamento
     * @param {module:api/PagamentoApi~listarPagamentosUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/PagamentoApi~listarUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAcordoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os acordos existentes na base
     * Este m\u00E9todo permite que sejam listados todos os acordos existentes na base do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {Integer} opts.idConta C\u00F3digo Identificador da conta na base (id)
     * @param {Integer} opts.statusAcordo Status do acordo na base
     * @param {String} opts.dataAcordo Data do acordo
     * @param {Integer} opts.quantidadeParcelas Quantidade de parcelas
     * @param {module:api/PagamentoApi~listarUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
