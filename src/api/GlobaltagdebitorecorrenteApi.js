(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ContaDebitoRecorrentePersistValue', '../model/ContaDebitoRecorrenteResponse', '../model/PageContaDebitoRecorrenteResponse', '../model/PageTipoDebitoRecorrenteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ContaDebitoRecorrentePersistValue'), require('../model/ContaDebitoRecorrenteResponse'), require('../model/PageContaDebitoRecorrenteResponse'), require('../model/PageTipoDebitoRecorrenteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagdebitorecorrenteApi = factory(root.Pier.ApiClient, root.Pier.ContaDebitoRecorrentePersistValue, root.Pier.ContaDebitoRecorrenteResponse, root.Pier.PageContaDebitoRecorrenteResponse, root.Pier.PageTipoDebitoRecorrenteResponse);
  }
}(this, function(ApiClient, ContaDebitoRecorrentePersistValue, ContaDebitoRecorrenteResponse, PageContaDebitoRecorrenteResponse, PageTipoDebitoRecorrenteResponse) {
  'use strict';

  /**
   * globaltagdebitorecorrente service.
   * @module api/GlobaltagdebitorecorrenteApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagdebitorecorrenteApi. 
   * @alias module:api/GlobaltagdebitorecorrenteApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the aderirDebitoRecorrenteUsingPOST operation.
     * @callback module:api/GlobaltagdebitorecorrenteApi~aderirDebitoRecorrenteUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaDebitoRecorrenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_debito_recorrente_resource_aderir}}}
     * {{{conta_debito_recorrente_resource_aderir_notes}}}
     * @param {module:model/ContaDebitoRecorrentePersistValue} contaDebitoRecorrentePersist contaDebitoRecorrentePersist
     * @param {module:api/GlobaltagdebitorecorrenteApi~aderirDebitoRecorrenteUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaDebitoRecorrenteResponse}
     */
    this.aderirDebitoRecorrenteUsingPOST = function(contaDebitoRecorrentePersist, callback) {
      var postBody = contaDebitoRecorrentePersist;

      // verify the required parameter 'contaDebitoRecorrentePersist' is set
      if (contaDebitoRecorrentePersist == undefined || contaDebitoRecorrentePersist == null) {
        throw "Missing the required parameter 'contaDebitoRecorrentePersist' when calling aderirDebitoRecorrenteUsingPOST";
      }


      var pathParams = {
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
      var returnType = ContaDebitoRecorrenteResponse;

      return this.apiClient.callApi(
        '/api/debitos-recorrentes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelarDebitoRecorrenteUsingPOST operation.
     * @callback module:api/GlobaltagdebitorecorrenteApi~cancelarDebitoRecorrenteUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaDebitoRecorrenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_debito_recorrente_resource_cancelar}}}
     * {{{conta_debito_recorrente_resource_cancelar_notes}}}
     * @param {Integer} id {{{conta_debito_recorrente_resource_cancelar_param_id_debito_recorrente}}}
     * @param {module:model/ContaDebitoRecorrentePersistValue} contaDebitoRecorrentePersist contaDebitoRecorrentePersist
     * @param {module:api/GlobaltagdebitorecorrenteApi~cancelarDebitoRecorrenteUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaDebitoRecorrenteResponse}
     */
    this.cancelarDebitoRecorrenteUsingPOST = function(id, contaDebitoRecorrentePersist, callback) {
      var postBody = contaDebitoRecorrentePersist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling cancelarDebitoRecorrenteUsingPOST";
      }

      // verify the required parameter 'contaDebitoRecorrentePersist' is set
      if (contaDebitoRecorrentePersist == undefined || contaDebitoRecorrentePersist == null) {
        throw "Missing the required parameter 'contaDebitoRecorrentePersist' when calling cancelarDebitoRecorrenteUsingPOST";
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
      var returnType = ContaDebitoRecorrenteResponse;

      return this.apiClient.callApi(
        '/api/debitos-recorrentes/{id}/cancelar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET17 operation.
     * @callback module:api/GlobaltagdebitorecorrenteApi~listarUsingGET17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageContaDebitoRecorrenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_debito_recorrente_resource_listar}}}
     * {{{conta_debito_recorrente_resource_listar_notes}}}
     * @param {Integer} idConta {{{conta_debito_recorrente_resource_listar_param_id_conta}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idTipoDebitoRecorrente {{{conta_debito_recorrente_resource_listar_param_id_tipo_debito_recorrente}}}
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.dataHoraInicio {{{conta_debito_recorrente_request_data_hora_inicio_value}}}
     * @param {String} opts.dataHoraFim {{{conta_debito_recorrente_request_data_hora_fim_value}}}
     * @param {Boolean} opts.ativo {{{conta_debito_recorrente_request_ativo_value}}}
     * @param {String} opts.dataHoraUltimoPagamento {{{conta_debito_recorrente_request_data_hora_ultimo_pagamento_value}}}
     * @param {module:api/GlobaltagdebitorecorrenteApi~listarUsingGET17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageContaDebitoRecorrenteResponse}
     */
    this.listarUsingGET17 = function(idConta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling listarUsingGET17";
      }


      var pathParams = {
      };
      var queryParams = {
        'idConta': idConta,
        'idTipoDebitoRecorrente': opts['idTipoDebitoRecorrente'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'dataHoraInicio': opts['dataHoraInicio'],
        'dataHoraFim': opts['dataHoraFim'],
        'ativo': opts['ativo'],
        'dataHoraUltimoPagamento': opts['dataHoraUltimoPagamento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageContaDebitoRecorrenteResponse;

      return this.apiClient.callApi(
        '/api/debitos-recorrentes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET53 operation.
     * @callback module:api/GlobaltagdebitorecorrenteApi~listarUsingGET53Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoDebitoRecorrenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{tipo_debito_recorrente_resource_listar}}}
     * {{{tipo_debito_recorrente_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{tipo_debito_recorrente_request_id_value}}}
     * @param {String} opts.descricao {{{tipo_debito_recorrente_request_descricao_value}}}
     * @param {Number} opts.valor {{{tipo_debito_recorrente_request_valor_value}}}
     * @param {Boolean} opts.flagAtivo {{{tipo_debito_recorrente_request_flag_ativo_value}}}
     * @param {module:api/GlobaltagdebitorecorrenteApi~listarUsingGET53Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoDebitoRecorrenteResponse}
     */
    this.listarUsingGET53 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'descricao': opts['descricao'],
        'valor': opts['valor'],
        'flagAtivo': opts['flagAtivo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoDebitoRecorrenteResponse;

      return this.apiClient.callApi(
        '/api/tipos-debitos-recorrentes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
