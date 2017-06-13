(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AntecipacaoResponse', '../model/PageCompras', '../model/AntecipacaoSimuladaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AntecipacaoResponse'), require('../model/PageCompras'), require('../model/AntecipacaoSimuladaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CompraApi = factory(root.Pier.ApiClient, root.Pier.AntecipacaoResponse, root.Pier.PageCompras, root.Pier.AntecipacaoSimuladaResponse);
  }
}(this, function(ApiClient, AntecipacaoResponse, PageCompras, AntecipacaoSimuladaResponse) {
  'use strict';

  /**
   * Compra service.
   * @module api/CompraApi
   * @version 2.16.2
   */

  /**
   * Constructs a new CompraApi. 
   * @alias module:api/CompraApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the efetivarAntecipacaoUsingPOST operation.
     * @callback module:api/CompraApi~efetivarAntecipacaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AntecipacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Faz a efetiva\u00C3\u00A7\u00C3\u00A3o da antecipa\u00C3\u00A7\u00C3\u00A3o
     * Metodo responsavel pela efetiva\u00C3\u00A7\u00C3\u00A3o da antecipa\u00C3\u00A7\u00C3\u00A3o.
     * @param {Integer} idConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da compra.
     * @param {Integer} quantidadeParcelas Quantidade de parcelas para serem antecipadas (quantidadeParcelas).
     * @param {module:api/CompraApi~efetivarAntecipacaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AntecipacaoResponse}
     */
    this.efetivarAntecipacaoUsingPOST = function(idConta, id, quantidadeParcelas, callback) {
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling efetivarAntecipacaoUsingPOST";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling efetivarAntecipacaoUsingPOST";
      }

      // verify the required parameter 'quantidadeParcelas' is set
      if (quantidadeParcelas == undefined || quantidadeParcelas == null) {
        throw "Missing the required parameter 'quantidadeParcelas' when calling efetivarAntecipacaoUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'idConta': idConta,
        'quantidadeParcelas': quantidadeParcelas
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AntecipacaoResponse;

      return this.apiClient.callApi(
        '/api/compras/{id}/efetivar-antecipacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET5 operation.
     * @callback module:api/CompraApi~listarUsingGET5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCompras} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar compras
     * Lista as compras de uma conta.
     * @param {Integer} idConta C\u00C3\u00B3digo identificador da conta da Compra.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idCompra C\u00C3\u00B3digo identificador da Compra.
     * @param {Boolean} opts.parcelada Indica se a compra \u00C3\u00A9 parcelada.
     * @param {Boolean} opts.juros Indica se a compra \u00C3\u00A9 com ou sem juros.
     * @param {module:model/String} opts.tipoTransacao Indica se a compra \u00C3\u00A9 ON-US ou OFF-US
     * @param {module:api/CompraApi~listarUsingGET5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCompras}
     */
    this.listarUsingGET5 = function(idConta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling listarUsingGET5";
      }


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'idCompra': opts['idCompra'],
        'idConta': idConta,
        'parcelada': opts['parcelada'],
        'juros': opts['juros'],
        'tipoTransacao': opts['tipoTransacao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCompras;

      return this.apiClient.callApi(
        '/api/compras', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the simularAntecipacaoUsingGET operation.
     * @callback module:api/CompraApi~simularAntecipacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AntecipacaoSimuladaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Simular antecipa\u00C3\u00A7\u00C3\u00A3o de parcelas
     * Simula a antecipa\u00C3\u00A7\u00C3\u00A3o de parcelas de uma compra, listando todos os planos de parcelamento dispon\u00C3\u00ADveis.
     * @param {Integer} idConta C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da compra.
     * @param {module:api/CompraApi~simularAntecipacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AntecipacaoSimuladaResponse}
     */
    this.simularAntecipacaoUsingGET = function(idConta, id, callback) {
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling simularAntecipacaoUsingGET";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling simularAntecipacaoUsingGET";
      }


      var pathParams = {
        'id': id
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
      var returnType = AntecipacaoSimuladaResponse;

      return this.apiClient.callApi(
        '/api/compras/{id}/simular-antecipacao', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
