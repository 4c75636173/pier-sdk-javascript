(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PagePlanoParcelamentoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PagePlanoParcelamentoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.FaturaApi = factory(root.Pier.ApiClient, root.Pier.PagePlanoParcelamentoResponse);
  }
}(this, function(ApiClient, PagePlanoParcelamentoResponse) {
  'use strict';

  /**
   * Fatura service.
   * @module api/FaturaApi
   * @version 2.36.2
   */

  /**
   * Constructs a new FaturaApi. 
   * @alias module:api/FaturaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarLancamentosFuturosFaturaUsingGET1 operation.
     * @callback module:api/FaturaApi~consultarLancamentosFuturosFaturaUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePlanoParcelamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar planos de parcelamento
     * Lista os planos de parcelamento da fatura de uma conta.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {String} dataVencimentoPadrao Indica a data de vencimento padr\u00C3\u00A3o das faturas
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/FaturaApi~consultarLancamentosFuturosFaturaUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePlanoParcelamentoResponse}
     */
    this.consultarLancamentosFuturosFaturaUsingGET1 = function(id, dataVencimentoPadrao, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarLancamentosFuturosFaturaUsingGET1";
      }

      // verify the required parameter 'dataVencimentoPadrao' is set
      if (dataVencimentoPadrao == undefined || dataVencimentoPadrao == null) {
        throw "Missing the required parameter 'dataVencimentoPadrao' when calling consultarLancamentosFuturosFaturaUsingGET1";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'dataVencimentoPadrao': dataVencimentoPadrao
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePlanoParcelamentoResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/faturas/planos-parcelamento', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the enviarFaturaEmailUsingPOST operation.
     * @callback module:api/FaturaApi~enviarFaturaEmailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Envia 2\u00C2\u00AA via de fatura por E-mail
     * Envia a segunda via da fatura para o e-mail informado/cadastrado.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {String} dataVencimento Data de Vencimento da fatura (yyyy-MM-dd).
     * @param {Object} opts Optional parameters
     * @param {String} opts.email E-mail para envio da 2\u00C2\u00AA via da fatura, caso n\u00C3\u00A3o seja informado ser\u00C3\u00A1 usado o e-mail cadastrado.
     * @param {module:api/FaturaApi~enviarFaturaEmailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.enviarFaturaEmailUsingPOST = function(id, dataVencimento, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling enviarFaturaEmailUsingPOST";
      }

      // verify the required parameter 'dataVencimento' is set
      if (dataVencimento == undefined || dataVencimento == null) {
        throw "Missing the required parameter 'dataVencimento' when calling enviarFaturaEmailUsingPOST";
      }


      var pathParams = {
        'id': id,
        'dataVencimento': dataVencimento
      };
      var queryParams = {
        'email': opts['email']
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
        '/api/contas/{id}/faturas/{dataVencimento}/enviar-email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the visualizarDocumentoUsingGET operation.
     * @callback module:api/FaturaApi~visualizarDocumentoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite visualizar o extrato da fatura em formato PDF
     * Esta opera\u00C3\u00A7\u00C3\u00A3o permite visualizar o extrato da fatura de uma determinada conta, em formato PDF. Quando ela for a fatura ativa, ou seja, a do m\u00C3\u00AAs corrente, o pdf ser\u00C3\u00A1 composto pelo extrato de lan\u00C3\u00A7amentos e pela ficha de compensa\u00C3\u00A7\u00C3\u00A3o banc\u00C3\u00A1ria. Quando for de uma fatura do hist\u00C3\u00B3rico do cliente, o PDF ser\u00C3\u00A1 composto apenas pelo extrato de transa\u00C3\u00A7\u00C3\u00B5es.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {String} dataVencimento Data de Vencimento da fatura.
     * @param {module:api/FaturaApi~visualizarDocumentoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.visualizarDocumentoUsingGET = function(id, dataVencimento, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling visualizarDocumentoUsingGET";
      }

      // verify the required parameter 'dataVencimento' is set
      if (dataVencimento == undefined || dataVencimento == null) {
        throw "Missing the required parameter 'dataVencimento' when calling visualizarDocumentoUsingGET";
      }


      var pathParams = {
        'id': id,
        'dataVencimento': dataVencimento
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/pdf'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/contas/{id}/faturas/{dataVencimento}/arquivo.pdf', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
