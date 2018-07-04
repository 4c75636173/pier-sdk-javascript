(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/FaturaDetalheResponse', '../model/PagePlanoParcelamentoResponse', '../model/PageFaturaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FaturaDetalheResponse'), require('../model/PagePlanoParcelamentoResponse'), require('../model/PageFaturaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagfaturaApi = factory(root.Pier.ApiClient, root.Pier.FaturaDetalheResponse, root.Pier.PagePlanoParcelamentoResponse, root.Pier.PageFaturaResponse);
  }
}(this, function(ApiClient, FaturaDetalheResponse, PagePlanoParcelamentoResponse, PageFaturaResponse) {
  'use strict';

  /**
   * globaltagfatura service.
   * @module api/GlobaltagfaturaApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagfaturaApi. 
   * @alias module:api/GlobaltagfaturaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarFaturaUsingGET1 operation.
     * @callback module:api/GlobaltagfaturaApi~consultarFaturaUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/FaturaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{fatura_resource_consultar_fatura}}}
     * {{{fatura_resource_consultar_fatura_notes}}}
     * @param {String} dataVencimento {{{fatura_resource_consultar_fatura_param_data_vencimento}}}
     * @param {Integer} idConta {{{fatura_resource_consultar_fatura_param_id_conta}}}
     * @param {module:api/GlobaltagfaturaApi~consultarFaturaUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FaturaDetalheResponse}
     */
    this.consultarFaturaUsingGET1 = function(dataVencimento, idConta, callback) {
      var postBody = null;

      // verify the required parameter 'dataVencimento' is set
      if (dataVencimento == undefined || dataVencimento == null) {
        throw "Missing the required parameter 'dataVencimento' when calling consultarFaturaUsingGET1";
      }

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling consultarFaturaUsingGET1";
      }


      var pathParams = {
        'dataVencimento': dataVencimento
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
      var returnType = FaturaDetalheResponse;

      return this.apiClient.callApi(
        '/api/faturas/{dataVencimento}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarLancamentosFuturosFaturaUsingGET1 operation.
     * @callback module:api/GlobaltagfaturaApi~consultarLancamentosFuturosFaturaUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePlanoParcelamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{fatura_conta_resource_consultar_lancamentos_futuros_fatura}}}
     * {{{fatura_conta_resource_consultar_lancamentos_futuros_fatura_notes}}}
     * @param {Integer} id {{{fatura_conta_resource_consultar_lancamentos_futuros_fatura_param_id_conta}}}
     * @param {String} dataVencimentoPadrao {{{plano_parcelamento_request_data_vencimento_padrao_value}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagfaturaApi~consultarLancamentosFuturosFaturaUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagfaturaApi~enviarFaturaEmailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{fatura_conta_resource_enviar_fatura_email}}}
     * {{{fatura_conta_resource_enviar_fatura_email_notes}}}
     * @param {Integer} id {{{fatura_conta_resource_enviar_fatura_email_param_id_conta}}}
     * @param {String} dataVencimento {{{fatura_conta_resource_enviar_fatura_email_param_data_vencimento}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.email {{{fatura_conta_resource_enviar_fatura_email_param_email}}}
     * @param {module:api/GlobaltagfaturaApi~enviarFaturaEmailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarFaturasUsingGET1 operation.
     * @callback module:api/GlobaltagfaturaApi~listarFaturasUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageFaturaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{fatura_resource_listar_faturas}}}
     * {{{fatura_resource_listar_faturas_notes}}}
     * @param {Integer} idConta {{{fatura_resource_listar_faturas_param_id_conta}}}
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.situacaoProcessamento {{{fatura_resource_listar_faturas_param_situacao_processamento}}} (default to TODAS)
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagfaturaApi~listarFaturasUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageFaturaResponse}
     */
    this.listarFaturasUsingGET1 = function(idConta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling listarFaturasUsingGET1";
      }


      var pathParams = {
      };
      var queryParams = {
        'idConta': idConta,
        'situacaoProcessamento': opts['situacaoProcessamento'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
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
      var returnType = PageFaturaResponse;

      return this.apiClient.callApi(
        '/api/faturas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the visualizarDocumentoUsingGET operation.
     * @callback module:api/GlobaltagfaturaApi~visualizarDocumentoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{fatura_conta_resource_visualizar_documento}}}
     * {{{fatura_conta_resource_visualizar_documento_notes}}}
     * @param {Integer} id {{{fatura_conta_resource_visualizar_documento_param_id_conta}}}
     * @param {String} dataVencimento {{{fatura_conta_resource_visualizar_documento_param_data_vencimento}}}
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.flagApenasDemostrativo {{{fatura_conta_resource_enviar_fatura_email_param_flag_apenas_demostrativo}}}
     * @param {Boolean} opts.flagRegistraBoleto {{{fatura_conta_resource_enviar_fatura_email_param_flag_registra_boleto}}}
     * @param {module:api/GlobaltagfaturaApi~visualizarDocumentoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.visualizarDocumentoUsingGET = function(id, dataVencimento, opts, callback) {
      opts = opts || {};
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
        'flagApenasDemostrativo': opts['flagApenasDemostrativo'],
        'flagRegistraBoleto': opts['flagRegistraBoleto']
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
