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
    root.Pier.AjusteFinanceiroApi = factory(root.Pier.ApiClient, root.Pier.AjusteFinanceiroResponse, root.Pier.PageAjusteResponse);
  }
}(this, function(ApiClient, AjusteFinanceiroResponse, PageAjusteResponse) {
  'use strict';

  /**
   * AjusteFinanceiro service.
   * @module api/AjusteFinanceiroApi
   * @version 2.54.5
   */

  /**
   * Constructs a new AjusteFinanceiroApi. 
   * @alias module:api/AjusteFinanceiroApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the ajustarContaUsingPOST operation.
     * @callback module:api/AjusteFinanceiroApi~ajustarContaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AjusteFinanceiroResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lan\u00C3\u00A7a um ajuste para a conta informada
     * Este recurso insere um ajuste para a conta do id informado
     * @param {Integer} idTipoAjuste C\u00C3\u00B3digo identificador do tipo de ajuste.
     * @param {String} dataAjuste Data do ajuste no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ.
     * @param {Number} valorAjuste Valor do ajuste
     * @param {Integer} idConta C\u00C3\u00B3digo identificador da conta.
     * @param {Object} opts Optional parameters
     * @param {String} opts.identificadorExterno Codigo Hexadecimal
     * @param {module:api/AjusteFinanceiroApi~ajustarContaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
        'idConta': idConta
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
     * Callback function to receive the result of the consultarUsingGET1 operation.
     * @callback module:api/AjusteFinanceiroApi~consultarUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AjusteFinanceiroResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de um determinado ajuste financeiro
     * Este m\u00C3\u00A9todo permite consultar dados de um determinado ajuste a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do ajuste (id).
     * @param {module:api/AjusteFinanceiroApi~consultarUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AjusteFinanceiroResponse}
     */
    this.consultarUsingGET1 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET1";
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
     * Callback function to receive the result of the listarUsingGET1 operation.
     * @callback module:api/AjusteFinanceiroApi~listarUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAjusteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista ajustes existentes na base de dados do Emissor
     * Este recurso permite listar ajustes existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idTipoAjuste C\u00C3\u00B3digo identificador do tipo de ajuste.
     * @param {String} opts.dataAjuste Data do ajuste no formato yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ.
     * @param {Number} opts.valorAjuste Valor do ajuste
     * @param {String} opts.identificadorExterno Codigo Hexadecimal
     * @param {Integer} opts.idConta C\u00C3\u00B3digo identificador da conta.
     * @param {module:api/AjusteFinanceiroApi~listarUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageAjusteResponse}
     */
    this.listarUsingGET1 = function(opts, callback) {
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
