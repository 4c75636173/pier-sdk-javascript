(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LimiteDisponibilidadeResponse', '../model/PageHistoricoEventosResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LimiteDisponibilidadeResponse'), require('../model/PageHistoricoEventosResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GestaoLimitesApi = factory(root.Pier.ApiClient, root.Pier.LimiteDisponibilidadeResponse, root.Pier.PageHistoricoEventosResponse);
  }
}(this, function(ApiClient, LimiteDisponibilidadeResponse, PageHistoricoEventosResponse) {
  'use strict';

  /**
   * GestaoLimites service.
   * @module api/GestaoLimitesApi
   * @version 2.24.0
   */

  /**
   * Constructs a new GestaoLimitesApi. 
   * @alias module:api/GestaoLimitesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarLimiteUsingPUT operation.
     * @callback module:api/GestaoLimitesApi~alterarLimiteUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LimiteDisponibilidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a altera\u00C3\u00A7\u00C3\u00A3o dos limites da conta
     * Esse recurso permite realizar a altera\u00C3\u00A7\u00C3\u00A3o dos Limites de uma determinada Conta.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Number} limiteGlobal Apresenta o valor do limite de cr\u00C3\u00A9dito que o portador do cart\u00C3\u00A3o possui.
     * @param {Number} limiteCompra Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Nacionais.
     * @param {Number} limiteParcelado Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es de compras parceladas.
     * @param {Number} limiteParcelas Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras que forem realizadas nesta modalidade.
     * @param {Number} limiteSaqueGlobal Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional.
     * @param {Number} limiteSaquePeriodo Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional dentro de cada ciclo de faturamento.
     * @param {Number} limiteConsignado Quando utilizado pelo emissor, este campo apresenta o valor da margem de cr\u00C3\u00A9dito que ele poder\u00C3\u00A1 utilizar para ser cobrado de forma consignada (desconto em folha) em seu sal\u00C3\u00A1rio/vencimentos.
     * @param {Number} limiteInternacionalCompra Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Internacionais.
     * @param {Number} limiteInternacionalParcelado Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es Internacionais de Compras Parceladas.
     * @param {Number} limiteInternacionalParcelas Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras internacionais que forem realizadas nesta modalidade.
     * @param {Number} limiteInternacionalSaqueGlobal Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional.
     * @param {Number} limiteInternacionalSaquePeriodo Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional dentro de cada ciclo de faturamento.
     * @param {Number} limiteMaximo Valor m\u00C3\u00A1ximo do limite de cr\u00C3\u00A9dito para realizar transa\u00C3\u00A7\u00C3\u00B5es.
     * @param {module:api/GestaoLimitesApi~alterarLimiteUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidadeResponse}
     */
    this.alterarLimiteUsingPUT = function(id, limiteGlobal, limiteCompra, limiteParcelado, limiteParcelas, limiteSaqueGlobal, limiteSaquePeriodo, limiteConsignado, limiteInternacionalCompra, limiteInternacionalParcelado, limiteInternacionalParcelas, limiteInternacionalSaqueGlobal, limiteInternacionalSaquePeriodo, limiteMaximo, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteGlobal' is set
      if (limiteGlobal == undefined || limiteGlobal == null) {
        throw "Missing the required parameter 'limiteGlobal' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteCompra' is set
      if (limiteCompra == undefined || limiteCompra == null) {
        throw "Missing the required parameter 'limiteCompra' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteParcelado' is set
      if (limiteParcelado == undefined || limiteParcelado == null) {
        throw "Missing the required parameter 'limiteParcelado' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteParcelas' is set
      if (limiteParcelas == undefined || limiteParcelas == null) {
        throw "Missing the required parameter 'limiteParcelas' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteSaqueGlobal' is set
      if (limiteSaqueGlobal == undefined || limiteSaqueGlobal == null) {
        throw "Missing the required parameter 'limiteSaqueGlobal' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteSaquePeriodo' is set
      if (limiteSaquePeriodo == undefined || limiteSaquePeriodo == null) {
        throw "Missing the required parameter 'limiteSaquePeriodo' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteConsignado' is set
      if (limiteConsignado == undefined || limiteConsignado == null) {
        throw "Missing the required parameter 'limiteConsignado' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalCompra' is set
      if (limiteInternacionalCompra == undefined || limiteInternacionalCompra == null) {
        throw "Missing the required parameter 'limiteInternacionalCompra' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalParcelado' is set
      if (limiteInternacionalParcelado == undefined || limiteInternacionalParcelado == null) {
        throw "Missing the required parameter 'limiteInternacionalParcelado' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalParcelas' is set
      if (limiteInternacionalParcelas == undefined || limiteInternacionalParcelas == null) {
        throw "Missing the required parameter 'limiteInternacionalParcelas' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalSaqueGlobal' is set
      if (limiteInternacionalSaqueGlobal == undefined || limiteInternacionalSaqueGlobal == null) {
        throw "Missing the required parameter 'limiteInternacionalSaqueGlobal' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalSaquePeriodo' is set
      if (limiteInternacionalSaquePeriodo == undefined || limiteInternacionalSaquePeriodo == null) {
        throw "Missing the required parameter 'limiteInternacionalSaquePeriodo' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteMaximo' is set
      if (limiteMaximo == undefined || limiteMaximo == null) {
        throw "Missing the required parameter 'limiteMaximo' when calling alterarLimiteUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'limiteGlobal': limiteGlobal,
        'limiteCompra': limiteCompra,
        'limiteParcelado': limiteParcelado,
        'limiteParcelas': limiteParcelas,
        'limiteSaqueGlobal': limiteSaqueGlobal,
        'limiteSaquePeriodo': limiteSaquePeriodo,
        'limiteConsignado': limiteConsignado,
        'limiteInternacionalCompra': limiteInternacionalCompra,
        'limiteInternacionalParcelado': limiteInternacionalParcelado,
        'limiteInternacionalParcelas': limiteInternacionalParcelas,
        'limiteInternacionalSaqueGlobal': limiteInternacionalSaqueGlobal,
        'limiteInternacionalSaquePeriodo': limiteInternacionalSaquePeriodo,
        'limiteMaximo': limiteMaximo
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LimiteDisponibilidadeResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/alterar-limites', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarLimiteDisponibilidadeUsingGET1 operation.
     * @callback module:api/GestaoLimitesApi~consultarLimiteDisponibilidadeUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/LimiteDisponibilidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os limites da conta
     * Este m\u00C3\u00A9todo permite consultar os Limites configurados para uma determinada Conta, a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} id Id Conta
     * @param {module:api/GestaoLimitesApi~consultarLimiteDisponibilidadeUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidadeResponse}
     */
    this.consultarLimiteDisponibilidadeUsingGET1 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarLimiteDisponibilidadeUsingGET1";
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
      var returnType = LimiteDisponibilidadeResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/limites-disponibilidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarHistoricoAlteracoesLimitesUsingGET operation.
     * @callback module:api/GestaoLimitesApi~listarHistoricoAlteracoesLimitesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageHistoricoEventosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista o hist\u00C3\u00B3rico de altera\u00C3\u00A7\u00C3\u00B5es de limites da conta
     * Este recurso consulta o hist\u00C3\u00B3rico com as altera\u00C3\u00A7\u00C3\u00B5es de limites da conta informada
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/GestaoLimitesApi~listarHistoricoAlteracoesLimitesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageHistoricoEventosResponse}
     */
    this.listarHistoricoAlteracoesLimitesUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarHistoricoAlteracoesLimitesUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
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
      var returnType = PageHistoricoEventosResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/historicos-alteracoes-limites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
