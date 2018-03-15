(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/LimiteDisponibilidadeResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LimiteDisponibilidadeResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.LimiteDisponibilidadeApi = factory(root.Pier.ApiClient, root.Pier.LimiteDisponibilidadeResponse);
  }
}(this, function(ApiClient, LimiteDisponibilidadeResponse) {
  'use strict';

  /**
   * LimiteDisponibilidade service.
   * @module api/LimiteDisponibilidadeApi
   * @version 2.57.0
   */

  /**
   * Constructs a new LimiteDisponibilidadeApi. 
   * @alias module:api/LimiteDisponibilidadeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT9 operation.
     * @callback module:api/LimiteDisponibilidadeApi~alterarUsingPUT9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/LimiteDisponibilidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a altera\u00E7\u00E3o dos limites da conta
     * Esse recurso permite realizar a altera\u00E7\u00E3o dos Limites de uma determinada Conta.
     * @param {Integer} idConta C\u00F3digo de identifica\u00E7\u00E3o da Conta.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limiteGlobal Apresenta o valor do limite de cr\u00E9dito que o portador do cart\u00E3o possui.
     * @param {Number} opts.limiteCompra Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador possui para uso exclusivo em Compras Nacionais.
     * @param {Number} opts.limiteParcelado Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador possui para realizar transa\u00E7\u00F5es de compras parceladas.
     * @param {Number} opts.limiteParcelas Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que portador pode acumular a partir da soma das parcelas das compras que forem realizadas nesta modalidade.
     * @param {Number} opts.limiteSaqueGlobal Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Nacional.
     * @param {Number} opts.limiteSaquePeriodo Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Nacional dentro de cada ciclo de faturamento.
     * @param {Number} opts.limiteConsignado Quando utilizado pelo emissor, este campo apresenta o valor da margem de cr\u00E9dito que ele poder\u00E1 utilizar para ser cobrado de forma consignada (desconto em folha) em seu sal\u00E1rio/vencimentos.
     * @param {Number} opts.limiteInternacionalCompra Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador possui para uso exclusivo em Compras Internacionais.
     * @param {Number} opts.limiteInternacionalParcelado Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador possui para realizar transa\u00E7\u00F5es Internacionais de Compras Parceladas.
     * @param {Number} opts.limiteInternacionalParcelas Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que portador pode acumular a partir da soma das parcelas das compras internacionais que forem realizadas nesta modalidade.
     * @param {Number} opts.limiteInternacionalSaqueGlobal Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Internacional.
     * @param {Number} opts.limiteInternacionalSaquePeriodo Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00E9dito que o portador pode utilizar para realizar transa\u00E7\u00F5es de Saque Internacional dentro de cada ciclo de faturamento.
     * @param {Number} opts.limiteMaximo Valor m\u00E1ximo do limite de cr\u00E9dito para realizar transa\u00E7\u00F5es.
     * @param {module:api/LimiteDisponibilidadeApi~alterarUsingPUT9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidadeResponse}
     */
    this.alterarUsingPUT9 = function(idConta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling alterarUsingPUT9";
      }


      var pathParams = {
      };
      var queryParams = {
        'limiteGlobal': opts['limiteGlobal'],
        'limiteCompra': opts['limiteCompra'],
        'limiteParcelado': opts['limiteParcelado'],
        'limiteParcelas': opts['limiteParcelas'],
        'limiteSaqueGlobal': opts['limiteSaqueGlobal'],
        'limiteSaquePeriodo': opts['limiteSaquePeriodo'],
        'limiteConsignado': opts['limiteConsignado'],
        'limiteInternacionalCompra': opts['limiteInternacionalCompra'],
        'limiteInternacionalParcelado': opts['limiteInternacionalParcelado'],
        'limiteInternacionalParcelas': opts['limiteInternacionalParcelas'],
        'limiteInternacionalSaqueGlobal': opts['limiteInternacionalSaqueGlobal'],
        'limiteInternacionalSaquePeriodo': opts['limiteInternacionalSaquePeriodo'],
        'limiteMaximo': opts['limiteMaximo'],
        'idConta': idConta
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
        '/api/limites-disponibilidades', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET20 operation.
     * @callback module:api/LimiteDisponibilidadeApi~consultarUsingGET20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/LimiteDisponibilidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os limites da conta
     * Este m\u00E9todo permite consultar os Limites configurados para uma determinada Conta, a partir do c\u00F3digo de identifica\u00E7\u00E3o da conta (id).
     * @param {Integer} idConta Id Conta
     * @param {module:api/LimiteDisponibilidadeApi~consultarUsingGET20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidadeResponse}
     */
    this.consultarUsingGET20 = function(idConta, callback) {
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling consultarUsingGET20";
      }


      var pathParams = {
      };
      var queryParams = {
        'idConta': idConta
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
        '/api/limites-disponibilidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
