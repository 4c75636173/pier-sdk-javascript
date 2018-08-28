(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ParametroProdutoResponse', '../model/TaxaAntecipacaoRequest', '../model/AntecipacaoResponse', '../model/PageCompraResponse', '../model/AntecipacaoSimuladaResponse', '../model/AntecipacaoSimuladaLoteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ParametroProdutoResponse'), require('../model/TaxaAntecipacaoRequest'), require('../model/AntecipacaoResponse'), require('../model/PageCompraResponse'), require('../model/AntecipacaoSimuladaResponse'), require('../model/AntecipacaoSimuladaLoteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagantecipacaoApi = factory(root.Pier.ApiClient, root.Pier.ParametroProdutoResponse, root.Pier.TaxaAntecipacaoRequest, root.Pier.AntecipacaoResponse, root.Pier.PageCompraResponse, root.Pier.AntecipacaoSimuladaResponse, root.Pier.AntecipacaoSimuladaLoteResponse);
  }
}(this, function(ApiClient, ParametroProdutoResponse, TaxaAntecipacaoRequest, AntecipacaoResponse, PageCompraResponse, AntecipacaoSimuladaResponse, AntecipacaoSimuladaLoteResponse) {
  'use strict';

  /**
   * globaltagantecipacao service.
   * @module api/GlobaltagantecipacaoApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagantecipacaoApi. 
   * @alias module:api/GlobaltagantecipacaoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the configurarTaxaAntecipacaoUsingPOST operation.
     * @callback module:api/GlobaltagantecipacaoApi~configurarTaxaAntecipacaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParametroProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{produto_resource_configurar_taxa_antecipacao}}}
     * {{{produto_resource_configurar_taxa_antecipacao_notes}}}
     * @param {Integer} id {{{produto_resource_configurar_taxa_antecipacao_param_id}}}
     * @param {module:model/TaxaAntecipacaoRequest} taxaAntecipacaoRequest taxaAntecipacaoRequest
     * @param {module:api/GlobaltagantecipacaoApi~configurarTaxaAntecipacaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagantecipacaoApi~consultarTaxaAntecipacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParametroProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{produto_resource_consultar_taxa_antecipacao}}}
     * {{{produto_resource_consultar_taxa_antecipacao_notes}}}
     * @param {Integer} id {{{produto_resource_consultar_taxa_antecipacao_param_id}}}
     * @param {module:model/String} tipoTransacao {{{produto_resource_consultar_taxa_antecipacao_param_tipo_transacao}}}
     * @param {module:api/GlobaltagantecipacaoApi~consultarTaxaAntecipacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagantecipacaoApi~efetivarAntecipacaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AntecipacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{compra_antecipavel_resource_efetivar_antecipacao}}}
     * {{{compra_antecipavel_resource_efetivar_antecipacao_notes}}}
     * @param {Integer} idConta {{{compra_antecipavel_resource_efetivar_antecipacao_param_id_conta}}}
     * @param {Integer} id {{{compra_antecipavel_resource_efetivar_antecipacao_param_id_compra}}}
     * @param {Integer} quantidadeParcelas {{{compra_antecipavel_resource_efetivar_antecipacao_param_quantidade_parcelas}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.complemento {{{compra_antecipavel_resource_efetivar_antecipacao_param_complemento}}}
     * @param {module:api/GlobaltagantecipacaoApi~efetivarAntecipacaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AntecipacaoResponse}
     */
    this.efetivarAntecipacaoUsingPOST = function(idConta, id, quantidadeParcelas, opts, callback) {
      opts = opts || {};
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
        'quantidadeParcelas': quantidadeParcelas,
        'complemento': opts['complemento']
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
     * Callback function to receive the result of the efetivarAntecipacoesUsingPOST operation.
     * @callback module:api/GlobaltagantecipacaoApi~efetivarAntecipacoesUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AntecipacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{compra_antecipavel_resource_efetivar_antecipacoes}}}
     * {{{compra_antecipavel_resource_efetivar_antecipacoes_notes}}}
     * @param {Integer} idConta {{{compra_antecipavel_resource_efetivar_antecipacoes_param_id_conta}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.complemento {{{compra_antecipavel_resource_efetivar_antecipacoes_param_complemento}}}
     * @param {module:api/GlobaltagantecipacaoApi~efetivarAntecipacoesUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AntecipacaoResponse}
     */
    this.efetivarAntecipacoesUsingPOST = function(idConta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling efetivarAntecipacoesUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
        'idConta': idConta,
        'complemento': opts['complemento']
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
        '/api/compras-antecipaveis/efetivar-antecipacao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET14 operation.
     * @callback module:api/GlobaltagantecipacaoApi~listarUsingGET14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCompraResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{compra_antecipavel_resource_listar}}}
     * {{{compra_antecipavel_resource_listar_notes}}}
     * @param {Integer} idConta {{{compra_d_t_o_id_conta_value}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idCompra {{{compra_d_t_o_id_compra_value}}}
     * @param {Boolean} opts.parcelada {{{compra_d_t_o_parcelada_value}}}
     * @param {Boolean} opts.juros {{{compra_d_t_o_juros_value}}}
     * @param {module:model/String} opts.tipoOrigemTransacao {{{compra_d_t_o_tipo_origem_transacao_value}}}
     * @param {module:api/GlobaltagantecipacaoApi~listarUsingGET14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCompraResponse}
     */
    this.listarUsingGET14 = function(idConta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling listarUsingGET14";
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
     * @callback module:api/GlobaltagantecipacaoApi~simularAntecipacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AntecipacaoSimuladaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{compra_antecipavel_resource_simular_antecipacao}}}
     * {{{compra_antecipavel_resource_simular_antecipacao_notes}}}
     * @param {Integer} idConta {{{compra_antecipavel_resource_simular_antecipacao_param_id_conta}}}
     * @param {Integer} id {{{compra_antecipavel_resource_simular_antecipacao_param_id_evento}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.complemento {{{compra_antecipavel_resource_simular_antecipacao_param_complemento}}}
     * @param {module:api/GlobaltagantecipacaoApi~simularAntecipacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AntecipacaoSimuladaResponse}
     */
    this.simularAntecipacaoUsingGET = function(idConta, id, opts, callback) {
      opts = opts || {};
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
        'idConta': idConta,
        'complemento': opts['complemento']
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

    /**
     * Callback function to receive the result of the simularAntecipacoesUsingGET operation.
     * @callback module:api/GlobaltagantecipacaoApi~simularAntecipacoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AntecipacaoSimuladaLoteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{compra_antecipavel_resource_simular_antecipacoes}}}
     * {{{compra_antecipavel_resource_simular_antecipacoes_notes}}}
     * @param {Integer} idConta {{{compra_antecipavel_resource_simular_antecipacoes_param_id_conta}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.complemento {{{compra_antecipavel_resource_simular_antecipacoes_param_complemento}}}
     * @param {module:api/GlobaltagantecipacaoApi~simularAntecipacoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AntecipacaoSimuladaLoteResponse}
     */
    this.simularAntecipacoesUsingGET = function(idConta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling simularAntecipacoesUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'idConta': idConta,
        'complemento': opts['complemento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AntecipacaoSimuladaLoteResponse;

      return this.apiClient.callApi(
        '/api/compras-antecipaveis/simular-antecipacao', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
