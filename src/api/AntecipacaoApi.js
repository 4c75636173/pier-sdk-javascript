(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ParametroProdutoResponse', '../model/TaxaAntecipacaoRequest', '../model/AntecipacaoResponse', '../model/PageCompraResponse', '../model/AntecipacaoSimuladaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ParametroProdutoResponse'), require('../model/TaxaAntecipacaoRequest'), require('../model/AntecipacaoResponse'), require('../model/PageCompraResponse'), require('../model/AntecipacaoSimuladaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AntecipacaoApi = factory(root.Pier.ApiClient, root.Pier.ParametroProdutoResponse, root.Pier.TaxaAntecipacaoRequest, root.Pier.AntecipacaoResponse, root.Pier.PageCompraResponse, root.Pier.AntecipacaoSimuladaResponse);
  }
}(this, function(ApiClient, ParametroProdutoResponse, TaxaAntecipacaoRequest, AntecipacaoResponse, PageCompraResponse, AntecipacaoSimuladaResponse) {
  'use strict';

  /**
   * Antecipacao service.
   * @module api/AntecipacaoApi
   * @version 2.32.0
   */

  /**
   * Constructs a new AntecipacaoApi. 
   * @alias module:api/AntecipacaoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the configurarTaxaAntecipacaoUsingPOST operation.
     * @callback module:api/AntecipacaoApi~configurarTaxaAntecipacaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParametroProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configura a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto
     * Este recurso permite configurar a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto, a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id Id Produto
     * @param {module:model/TaxaAntecipacaoRequest} taxaAntecipacaoRequest taxaAntecipacaoRequest
     * @param {module:api/AntecipacaoApi~configurarTaxaAntecipacaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParametroProdutoResponse}
     */
    this.configurarTaxaAntecipacaoUsingPOST = function(id, taxaAntecipacaoRequest, callback) {
      var postBody = taxaAntecipacaoRequest;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling configurarTaxaAntecipacaoUsingPOST";
      }

      // verify the required parameter 'taxaAntecipacaoRequest' is set
      if (taxaAntecipacaoRequest == undefined || taxaAntecipacaoRequest == null) {
        throw "Missing the required parameter 'taxaAntecipacaoRequest' when calling configurarTaxaAntecipacaoUsingPOST";
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
      var returnType = ParametroProdutoResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}/configurar-taxa-antecipacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarTaxaAntecipacaoUsingGET operation.
     * @callback module:api/AntecipacaoApi~consultarTaxaAntecipacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParametroProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto
     * Este recurso permite consultar a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto, a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id Id Produto
     * @param {module:model/String} tipoTransacao Tipo da Transa\u00C3\u00A7\u00C3\u00A3o (ON-US ou OFF-US)
     * @param {module:api/AntecipacaoApi~consultarTaxaAntecipacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParametroProdutoResponse}
     */
    this.consultarTaxaAntecipacaoUsingGET = function(id, tipoTransacao, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarTaxaAntecipacaoUsingGET";
      }

      // verify the required parameter 'tipoTransacao' is set
      if (tipoTransacao == undefined || tipoTransacao == null) {
        throw "Missing the required parameter 'tipoTransacao' when calling consultarTaxaAntecipacaoUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'tipoTransacao': tipoTransacao
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParametroProdutoResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}/consultar-taxa-antecipacao', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the efetivarAntecipacaoUsingPOST operation.
     * @callback module:api/AntecipacaoApi~efetivarAntecipacaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AntecipacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Faz a efetiva\u00C3\u00A7\u00C3\u00A3o da antecipa\u00C3\u00A7\u00C3\u00A3o
     * M\u00C3\u00A9todo responsavel pela efetiva\u00C3\u00A7\u00C3\u00A3o da antecipa\u00C3\u00A7\u00C3\u00A3o, cujo desconto \u00C3\u00A9 calculado baseado na data da \u00C3\u00BAltima parcela em aberto.
     * @param {Integer} idConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do evento.
     * @param {Integer} quantidadeParcelas Quantidade de parcelas para serem antecipadas.
     * @param {module:api/AntecipacaoApi~efetivarAntecipacaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
        '/api/compras-antecipaveis/{id}/efetivar-antecipacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET7 operation.
     * @callback module:api/AntecipacaoApi~listarUsingGET7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCompraResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar compras com parcelas antecip\u00C3\u00A1veis
     * Lista as compras antecip\u00C3\u00A1veis de uma conta.
     * @param {Integer} idConta C\u00C3\u00B3digo identificador da conta da Compra.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idCompra C\u00C3\u00B3digo identificador da Compra.
     * @param {Boolean} opts.parcelada Indica se a compra \u00C3\u00A9 parcelada.
     * @param {Boolean} opts.juros Indica se a compra \u00C3\u00A9 com ou sem juros.
     * @param {module:model/String} opts.tipoOrigemTransacao Indica se a compra \u00C3\u00A9 ON-US ou OFF-US
     * @param {module:api/AntecipacaoApi~listarUsingGET7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCompraResponse}
     */
    this.listarUsingGET7 = function(idConta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling listarUsingGET7";
      }


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idCompra': opts['idCompra'],
        'idConta': idConta,
        'parcelada': opts['parcelada'],
        'juros': opts['juros'],
        'tipoOrigemTransacao': opts['tipoOrigemTransacao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCompraResponse;

      return this.apiClient.callApi(
        '/api/compras-antecipaveis', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the simularAntecipacaoUsingGET operation.
     * @callback module:api/AntecipacaoApi~simularAntecipacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AntecipacaoSimuladaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Simular antecipa\u00C3\u00A7\u00C3\u00A3o de parcelas
     * Simula a antecipa\u00C3\u00A7\u00C3\u00A3o de parcelas de um evento, listando todos os planos de parcelamento dispon\u00C3\u00ADveis, cujo desconto \u00C3\u00A9 calculado baseado na data da \u00C3\u00BAltima parcela em aberto.
     * @param {Integer} idConta C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do evento.
     * @param {module:api/AntecipacaoApi~simularAntecipacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
        '/api/compras-antecipaveis/{id}/simular-antecipacao', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
