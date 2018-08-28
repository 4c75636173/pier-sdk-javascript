(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/TipoFaturamentoPersistValue', '../model/TipoFaturamentoResponse', '../model/TipoFaturamentoPorContaPersistValue', '../model/TipoFaturamentoPorContaResponse', '../model/PageTipoFaturamentoPorContaResponse', '../model/PageTipoFaturamentoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TipoFaturamentoPersistValue'), require('../model/TipoFaturamentoResponse'), require('../model/TipoFaturamentoPorContaPersistValue'), require('../model/TipoFaturamentoPorContaResponse'), require('../model/PageTipoFaturamentoPorContaResponse'), require('../model/PageTipoFaturamentoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagfaturamentoApi = factory(root.Pier.ApiClient, root.Pier.TipoFaturamentoPersistValue, root.Pier.TipoFaturamentoResponse, root.Pier.TipoFaturamentoPorContaPersistValue, root.Pier.TipoFaturamentoPorContaResponse, root.Pier.PageTipoFaturamentoPorContaResponse, root.Pier.PageTipoFaturamentoResponse);
  }
}(this, function(ApiClient, TipoFaturamentoPersistValue, TipoFaturamentoResponse, TipoFaturamentoPorContaPersistValue, TipoFaturamentoPorContaResponse, PageTipoFaturamentoPorContaResponse, PageTipoFaturamentoResponse) {
  'use strict';

  /**
   * globaltagfaturamento service.
   * @module api/GlobaltagfaturamentoApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagfaturamentoApi. 
   * @alias module:api/GlobaltagfaturamentoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarTipoFaturamentoUsingPUT operation.
     * @callback module:api/GlobaltagfaturamentoApi~alterarTipoFaturamentoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoFaturamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{faturamento_resource_alterar_tipo_faturamento}}}
     * {{{faturamento_resource_alterar_tipo_faturamento_notes}}}
     * @param {Integer} id {{{faturamento_resource_alterar_tipo_faturamento_param_id_tipo_faturamento}}}
     * @param {module:model/TipoFaturamentoPersistValue} tipoFaturamentoPersist tipoFaturamentoPersist
     * @param {module:api/GlobaltagfaturamentoApi~alterarTipoFaturamentoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoFaturamentoResponse}
     */
    this.alterarTipoFaturamentoUsingPUT = function(id, tipoFaturamentoPersist, callback) {
      var postBody = tipoFaturamentoPersist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarTipoFaturamentoUsingPUT";
      }

      // verify the required parameter 'tipoFaturamentoPersist' is set
      if (tipoFaturamentoPersist == undefined || tipoFaturamentoPersist == null) {
        throw "Missing the required parameter 'tipoFaturamentoPersist' when calling alterarTipoFaturamentoUsingPUT";
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
      var returnType = TipoFaturamentoResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarFaturamentoPorContaUsingPOST operation.
     * @callback module:api/GlobaltagfaturamentoApi~cadastrarFaturamentoPorContaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoFaturamentoPorContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{faturamento_resource_cadastrar_faturamento_por_conta}}}
     * {{{faturamento_resource_cadastrar_faturamento_por_conta_notes}}}
     * @param {module:model/TipoFaturamentoPorContaPersistValue} tipoFaturamentoPorContaPersist tipoFaturamentoPorContaPersist
     * @param {module:api/GlobaltagfaturamentoApi~cadastrarFaturamentoPorContaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoFaturamentoPorContaResponse}
     */
    this.cadastrarFaturamentoPorContaUsingPOST = function(tipoFaturamentoPorContaPersist, callback) {
      var postBody = tipoFaturamentoPorContaPersist;

      // verify the required parameter 'tipoFaturamentoPorContaPersist' is set
      if (tipoFaturamentoPorContaPersist == undefined || tipoFaturamentoPorContaPersist == null) {
        throw "Missing the required parameter 'tipoFaturamentoPorContaPersist' when calling cadastrarFaturamentoPorContaUsingPOST";
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
      var returnType = TipoFaturamentoPorContaResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento-conta', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarTipoFaturamentoUsingPOST operation.
     * @callback module:api/GlobaltagfaturamentoApi~cadastrarTipoFaturamentoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoFaturamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{faturamento_resource_cadastrar_tipo_faturamento}}}
     * {{{faturamento_resource_cadastrar_tipo_faturamento_notes}}}
     * @param {module:model/TipoFaturamentoPersistValue} tipoFaturamentoPersist tipoFaturamentoPersist
     * @param {module:api/GlobaltagfaturamentoApi~cadastrarTipoFaturamentoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoFaturamentoResponse}
     */
    this.cadastrarTipoFaturamentoUsingPOST = function(tipoFaturamentoPersist, callback) {
      var postBody = tipoFaturamentoPersist;

      // verify the required parameter 'tipoFaturamentoPersist' is set
      if (tipoFaturamentoPersist == undefined || tipoFaturamentoPersist == null) {
        throw "Missing the required parameter 'tipoFaturamentoPersist' when calling cadastrarTipoFaturamentoUsingPOST";
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
      var returnType = TipoFaturamentoResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarTipoFaturamentoUsingGET operation.
     * @callback module:api/GlobaltagfaturamentoApi~consultarTipoFaturamentoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoFaturamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{faturamento_resource_consultar_tipo_faturamento}}}
     * {{{faturamento_resource_consultar_tipo_faturamento_notes}}}
     * @param {Integer} id {{{faturamento_resource_consultar_tipo_faturamento_param_id_tipo_faturamento}}}
     * @param {module:api/GlobaltagfaturamentoApi~consultarTipoFaturamentoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoFaturamentoResponse}
     */
    this.consultarTipoFaturamentoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarTipoFaturamentoUsingGET";
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
      var returnType = TipoFaturamentoResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desativarFaturamentoPorContaUsingPOST operation.
     * @callback module:api/GlobaltagfaturamentoApi~desativarFaturamentoPorContaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoFaturamentoPorContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{faturamento_resource_desativar_faturamento_por_conta}}}
     * {{{faturamento_resource_desativar_faturamento_por_conta_notes}}}
     * @param {Integer} id {{{faturamento_resource_desativar_faturamento_por_conta_param_id}}}
     * @param {module:api/GlobaltagfaturamentoApi~desativarFaturamentoPorContaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoFaturamentoPorContaResponse}
     */
    this.desativarFaturamentoPorContaUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desativarFaturamentoPorContaUsingPOST";
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
      var returnType = TipoFaturamentoPorContaResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento-conta/{id}/desativar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desativarTipoFaturamentoUsingPOST operation.
     * @callback module:api/GlobaltagfaturamentoApi~desativarTipoFaturamentoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoFaturamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{faturamento_resource_desativar_tipo_faturamento}}}
     * {{{faturamento_resource_desativar_tipo_faturamento_notes}}}
     * @param {Integer} id {{{faturamento_resource_desativar_tipo_faturamento_param_id_tipo_faturamento}}}
     * @param {module:api/GlobaltagfaturamentoApi~desativarTipoFaturamentoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoFaturamentoResponse}
     */
    this.desativarTipoFaturamentoUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desativarTipoFaturamentoUsingPOST";
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
      var returnType = TipoFaturamentoResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento/{id}/desativar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarFaturamentoPorContaUsingGET operation.
     * @callback module:api/GlobaltagfaturamentoApi~listarFaturamentoPorContaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoFaturamentoPorContaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{faturamento_resource_listar_faturamento_por_conta}}}
     * {{{faturamento_resource_listar_faturamento_por_conta_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idTipoFaturamentoPorConta {{{tipo_faturamento_por_conta_request_id_tipo_faturamento_por_conta_value}}}
     * @param {Boolean} opts.ativo {{{tipo_faturamento_por_conta_request_status_value}}}
     * @param {Integer} opts.idConta {{{tipo_faturamento_por_conta_request_id_conta_value}}}
     * @param {Integer} opts.idTipoFaturamento {{{tipo_faturamento_por_conta_request_id_tipo_faturamento_value}}}
     * @param {String} opts.dataHoraInclusao {{{tipo_faturamento_por_conta_request_data_hora_inclusao_value}}}
     * @param {String} opts.dataHoraCancelamento {{{tipo_faturamento_por_conta_request_data_hora_cancelamento_value}}}
     * @param {String} opts.modificadoPor {{{tipo_faturamento_por_conta_request_modificado_por_value}}}
     * @param {module:api/GlobaltagfaturamentoApi~listarFaturamentoPorContaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoFaturamentoPorContaResponse}
     */
    this.listarFaturamentoPorContaUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTipoFaturamentoPorConta': opts['idTipoFaturamentoPorConta'],
        'ativo': opts['ativo'],
        'idConta': opts['idConta'],
        'idTipoFaturamento': opts['idTipoFaturamento'],
        'dataHoraInclusao': opts['dataHoraInclusao'],
        'dataHoraCancelamento': opts['dataHoraCancelamento'],
        'modificadoPor': opts['modificadoPor']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoFaturamentoPorContaResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento-conta', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTipoFaturamentoUsingGET operation.
     * @callback module:api/GlobaltagfaturamentoApi~listarTipoFaturamentoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoFaturamentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{faturamento_resource_listar_tipo_faturamento}}}
     * {{{faturamento_resource_listar_tipo_faturamento_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idTipoFaturamento {{{tipo_faturamento_request_id_tipo_faturamento_value}}}
     * @param {String} opts.descricao {{{tipo_faturamento_request_descricao_value}}}
     * @param {Boolean} opts.flagApenasDemonstrativo {{{tipo_faturamento_request_flag_apenas_demonstrativo_value}}}
     * @param {Integer} opts.idConvenio {{{tipo_faturamento_request_id_convenio_value}}}
     * @param {module:api/GlobaltagfaturamentoApi~listarTipoFaturamentoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoFaturamentoResponse}
     */
    this.listarTipoFaturamentoUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idTipoFaturamento': opts['idTipoFaturamento'],
        'descricao': opts['descricao'],
        'flagApenasDemonstrativo': opts['flagApenasDemonstrativo'],
        'idConvenio': opts['idConvenio']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoFaturamentoResponse;

      return this.apiClient.callApi(
        '/api/tipos-faturamento', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
