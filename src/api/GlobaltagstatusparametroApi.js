(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/EstagioCartaoResponse', '../model/StatusCartaoResponse', '../model/StatusContaResponse', '../model/StatusImpressaoResponse', '../model/PageEstagioCartaoResponse', '../model/PageStatusCartaoResponse', '../model/PageStatusContaResponse', '../model/PageStatusImpressaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EstagioCartaoResponse'), require('../model/StatusCartaoResponse'), require('../model/StatusContaResponse'), require('../model/StatusImpressaoResponse'), require('../model/PageEstagioCartaoResponse'), require('../model/PageStatusCartaoResponse'), require('../model/PageStatusContaResponse'), require('../model/PageStatusImpressaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagstatusparametroApi = factory(root.Pier.ApiClient, root.Pier.EstagioCartaoResponse, root.Pier.StatusCartaoResponse, root.Pier.StatusContaResponse, root.Pier.StatusImpressaoResponse, root.Pier.PageEstagioCartaoResponse, root.Pier.PageStatusCartaoResponse, root.Pier.PageStatusContaResponse, root.Pier.PageStatusImpressaoResponse);
  }
}(this, function(ApiClient, EstagioCartaoResponse, StatusCartaoResponse, StatusContaResponse, StatusImpressaoResponse, PageEstagioCartaoResponse, PageStatusCartaoResponse, PageStatusContaResponse, PageStatusImpressaoResponse) {
  'use strict';

  /**
   * globaltagstatusparametro service.
   * @module api/GlobaltagstatusparametroApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagstatusparametroApi. 
   * @alias module:api/GlobaltagstatusparametroApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarEstagioCartaoUsingGET operation.
     * @callback module:api/GlobaltagstatusparametroApi~consultarEstagioCartaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EstagioCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{estagio_cartao_resource_consultar_estagio_cartao}}}
     * {{{estagio_cartao_resource_consultar_estagio_cartao_notes}}}
     * @param {Integer} id {{{estagio_cartao_resource_consultar_estagio_cartao_param_id}}}
     * @param {module:api/GlobaltagstatusparametroApi~consultarEstagioCartaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstagioCartaoResponse}
     */
    this.consultarEstagioCartaoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarEstagioCartaoUsingGET";
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
      var returnType = EstagioCartaoResponse;

      return this.apiClient.callApi(
        '/api/estagios-cartoes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarStatusCartaoUsingGET operation.
     * @callback module:api/GlobaltagstatusparametroApi~consultarStatusCartaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{status_cartao_resource_consultar_status_cartao}}}
     * {{{status_cartao_resource_consultar_status_cartao_notes}}}
     * @param {Integer} id {{{status_cartao_resource_consultar_status_cartao_param_id}}}
     * @param {module:api/GlobaltagstatusparametroApi~consultarStatusCartaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/StatusCartaoResponse}
     */
    this.consultarStatusCartaoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarStatusCartaoUsingGET";
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
      var returnType = StatusCartaoResponse;

      return this.apiClient.callApi(
        '/api/status-cartoes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET35 operation.
     * @callback module:api/GlobaltagstatusparametroApi~consultarUsingGET35Callback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{status_conta_resource_consultar}}}
     * {{{status_conta_resource_consultar_notes}}}
     * @param {Integer} id {{{status_conta_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagstatusparametroApi~consultarUsingGET35Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/StatusContaResponse}
     */
    this.consultarUsingGET35 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET35";
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
      var returnType = StatusContaResponse;

      return this.apiClient.callApi(
        '/api/status-contas/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET36 operation.
     * @callback module:api/GlobaltagstatusparametroApi~consultarUsingGET36Callback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusImpressaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{status_impressao_resource_consultar}}}
     * {{{status_impressao_resource_consultar_notes}}}
     * @param {Integer} id {{{status_impressao_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagstatusparametroApi~consultarUsingGET36Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/StatusImpressaoResponse}
     */
    this.consultarUsingGET36 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET36";
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
      var returnType = StatusImpressaoResponse;

      return this.apiClient.callApi(
        '/api/status-impressoes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarEstagiosCartoesUsingGET operation.
     * @callback module:api/GlobaltagstatusparametroApi~listarEstagiosCartoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageEstagioCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{estagio_cartao_resource_listar_estagios_cartoes}}}
     * {{{estagio_cartao_resource_listar_estagios_cartoes_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{estagio_cartao_request_id_value}}}
     * @param {String} opts.nome {{{estagio_cartao_request_nome_value}}}
     * @param {module:api/GlobaltagstatusparametroApi~listarEstagiosCartoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageEstagioCartaoResponse}
     */
    this.listarEstagiosCartoesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageEstagioCartaoResponse;

      return this.apiClient.callApi(
        '/api/estagios-cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarStatusCartoesUsingGET operation.
     * @callback module:api/GlobaltagstatusparametroApi~listarStatusCartoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{status_cartao_resource_listar_status_cartoes}}}
     * {{{status_cartao_resource_listar_status_cartoes_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{status_cartao_request_id_value}}}
     * @param {String} opts.nome {{{status_cartao_request_nome_value}}}
     * @param {Integer} opts.permiteDesbloquear {{{status_cartao_request_permite_desbloquear_value}}}
     * @param {Integer} opts.permiteAtribuirComoBloqueio {{{status_cartao_request_permite_atribuir_como_bloqueio_value}}}
     * @param {Integer} opts.permiteAtribuirComoCancelamento {{{status_cartao_request_permite_atribuir_como_cancelamento_value}}}
     * @param {Integer} opts.cobrarTarifaAoEmitirNovaVia {{{status_cartao_request_cobrar_tarifa_ao_emitir_nova_via_value}}}
     * @param {module:api/GlobaltagstatusparametroApi~listarStatusCartoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusCartaoResponse}
     */
    this.listarStatusCartoesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome'],
        'permiteDesbloquear': opts['permiteDesbloquear'],
        'permiteAtribuirComoBloqueio': opts['permiteAtribuirComoBloqueio'],
        'permiteAtribuirComoCancelamento': opts['permiteAtribuirComoCancelamento'],
        'cobrarTarifaAoEmitirNovaVia': opts['cobrarTarifaAoEmitirNovaVia']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageStatusCartaoResponse;

      return this.apiClient.callApi(
        '/api/status-cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTiposEventosTransacoesUsingGET operation.
     * @callback module:api/GlobaltagstatusparametroApi~listarTiposEventosTransacoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{enum_resource_listar_tipos_eventos_transacoes}}}
     * {{{enum_resource_listar_tipos_eventos_transacoes_notes}}}
     * @param {module:api/GlobaltagstatusparametroApi~listarTiposEventosTransacoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<Object>}
     */
    this.listarTiposEventosTransacoesUsingGET = function(callback) {
      var postBody = null;


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
      var returnType = [Object];

      return this.apiClient.callApi(
        '/api/tipos-eventos-transacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET47 operation.
     * @callback module:api/GlobaltagstatusparametroApi~listarUsingGET47Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{status_conta_resource_listar}}}
     * {{{status_conta_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{status_conta_request_id_value}}}
     * @param {String} opts.nome {{{status_conta_request_nome_value}}}
     * @param {Integer} opts.permiteAlterarVencimento {{{status_conta_request_permite_alterar_vencimento_value}}}
     * @param {Integer} opts.permiteAlterarLimite {{{status_conta_request_permite_alterar_limite_value}}}
     * @param {Integer} opts.permiteEmitirNovaViaCartao {{{status_conta_request_permite_emitir_nova_via_cartao_value}}}
     * @param {Integer} opts.permiteFazerTransferencia {{{status_conta_request_permite_fazer_transferencia_value}}}
     * @param {Integer} opts.permiteReceberTransferencia {{{status_conta_request_permite_receber_transferencia_value}}}
     * @param {Integer} opts.permiteCriarAcordoCobranca {{{status_conta_request_permite_criar_acordo_cobranca_value}}}
     * @param {Integer} opts.permiteAtribuirComoBloqueio {{{status_conta_request_permite_atribuir_como_bloqueio_value}}}
     * @param {Integer} opts.permiteDesbloquear {{{status_conta_request_permite_desbloquear_value}}}
     * @param {Integer} opts.permiteAtribuirComoCancelamento {{{status_conta_request_permite_atribuir_como_cancelamento_value}}}
     * @param {module:api/GlobaltagstatusparametroApi~listarUsingGET47Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusContaResponse}
     */
    this.listarUsingGET47 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome'],
        'permiteAlterarVencimento': opts['permiteAlterarVencimento'],
        'permiteAlterarLimite': opts['permiteAlterarLimite'],
        'permiteEmitirNovaViaCartao': opts['permiteEmitirNovaViaCartao'],
        'permiteFazerTransferencia': opts['permiteFazerTransferencia'],
        'permiteReceberTransferencia': opts['permiteReceberTransferencia'],
        'permiteCriarAcordoCobranca': opts['permiteCriarAcordoCobranca'],
        'permiteAtribuirComoBloqueio': opts['permiteAtribuirComoBloqueio'],
        'permiteDesbloquear': opts['permiteDesbloquear'],
        'permiteAtribuirComoCancelamento': opts['permiteAtribuirComoCancelamento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageStatusContaResponse;

      return this.apiClient.callApi(
        '/api/status-contas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET48 operation.
     * @callback module:api/GlobaltagstatusparametroApi~listarUsingGET48Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusImpressaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{status_impressao_resource_listar}}}
     * {{{status_impressao_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{status_impressao_request_id_value}}}
     * @param {String} opts.nome {{{status_impressao_request_nome_value}}}
     * @param {module:api/GlobaltagstatusparametroApi~listarUsingGET48Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusImpressaoResponse}
     */
    this.listarUsingGET48 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageStatusImpressaoResponse;

      return this.apiClient.callApi(
        '/api/status-impressoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
