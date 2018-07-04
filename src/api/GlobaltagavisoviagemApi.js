(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AvisoViagemResponse', '../model/PageAvisoViagemResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AvisoViagemResponse'), require('../model/PageAvisoViagemResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagavisoviagemApi = factory(root.Pier.ApiClient, root.Pier.AvisoViagemResponse, root.Pier.PageAvisoViagemResponse);
  }
}(this, function(ApiClient, AvisoViagemResponse, PageAvisoViagemResponse) {
  'use strict';

  /**
   * globaltagavisoviagem service.
   * @module api/GlobaltagavisoviagemApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagavisoviagemApi. 
   * @alias module:api/GlobaltagavisoviagemApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET6 operation.
     * @callback module:api/GlobaltagavisoviagemApi~consultarUsingGET6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AvisoViagemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{aviso_viagem_resource_consultar}}}
     * {{{aviso_viagem_resource_consultar_notes}}}
     * @param {Integer} id {{{aviso_viagem_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagavisoviagemApi~consultarUsingGET6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AvisoViagemResponse}
     */
    this.consultarUsingGET6 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET6";
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
      var returnType = AvisoViagemResponse;

      return this.apiClient.callApi(
        '/api/avisos-viagens/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desabilitarUsingPOST operation.
     * @callback module:api/GlobaltagavisoviagemApi~desabilitarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AvisoViagemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{aviso_viagem_resource_desabilitar}}}
     * {{{aviso_viagem_resource_desabilitar_notes}}}
     * @param {Integer} id {{{aviso_viagem_resource_desabilitar_param_id}}}
     * @param {module:api/GlobaltagavisoviagemApi~desabilitarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AvisoViagemResponse}
     */
    this.desabilitarUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desabilitarUsingPOST";
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
      var returnType = AvisoViagemResponse;

      return this.apiClient.callApi(
        '/api/avisos-viagens/{id}/desabilitar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the habilitarUsingPOST operation.
     * @callback module:api/GlobaltagavisoviagemApi~habilitarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AvisoViagemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{aviso_viagem_resource_habilitar}}}
     * {{{aviso_viagem_resource_habilitar_notes}}}
     * @param {Integer} id {{{aviso_viagem_resource_habilitar_param_id}}}
     * @param {module:api/GlobaltagavisoviagemApi~habilitarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AvisoViagemResponse}
     */
    this.habilitarUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling habilitarUsingPOST";
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
      var returnType = AvisoViagemResponse;

      return this.apiClient.callApi(
        '/api/avisos-viagens/{id}/habilitar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET8 operation.
     * @callback module:api/GlobaltagavisoviagemApi~listarUsingGET8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAvisoViagemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{aviso_viagem_resource_listar}}}
     * {{{aviso_viagem_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idCartao {{{aviso_viagem_request_id_cartao_value}}}
     * @param {String} opts.codigoPais {{{aviso_viagem_request_codigo_pais_value}}}
     * @param {String} opts.dataInicio {{{aviso_viagem_request_data_inicio_value}}}
     * @param {String} opts.dataFim {{{aviso_viagem_request_data_fim_value}}}
     * @param {Integer} opts.flagAtivo {{{aviso_viagem_request_flag_ativo_value}}}
     * @param {module:api/GlobaltagavisoviagemApi~listarUsingGET8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageAvisoViagemResponse}
     */
    this.listarUsingGET8 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idCartao': opts['idCartao'],
        'codigoPais': opts['codigoPais'],
        'dataInicio': opts['dataInicio'],
        'dataFim': opts['dataFim'],
        'flagAtivo': opts['flagAtivo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageAvisoViagemResponse;

      return this.apiClient.callApi(
        '/api/avisos-viagens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST3 operation.
     * @callback module:api/GlobaltagavisoviagemApi~salvarUsingPOST3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AvisoViagemResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{aviso_viagem_resource_salvar}}}
     * {{{aviso_viagem_resource_salvar_notes}}}
     * @param {Integer} idCartao {{{aviso_viagem_persist_id_cartao_value}}}
     * @param {String} codigoPais {{{aviso_viagem_persist_codigo_pais_value}}}
     * @param {String} dataInicio {{{aviso_viagem_persist_data_inicio_value}}}
     * @param {String} dataFim {{{aviso_viagem_persist_data_fim_value}}}
     * @param {module:api/GlobaltagavisoviagemApi~salvarUsingPOST3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AvisoViagemResponse}
     */
    this.salvarUsingPOST3 = function(idCartao, codigoPais, dataInicio, dataFim, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling salvarUsingPOST3";
      }

      // verify the required parameter 'codigoPais' is set
      if (codigoPais == undefined || codigoPais == null) {
        throw "Missing the required parameter 'codigoPais' when calling salvarUsingPOST3";
      }

      // verify the required parameter 'dataInicio' is set
      if (dataInicio == undefined || dataInicio == null) {
        throw "Missing the required parameter 'dataInicio' when calling salvarUsingPOST3";
      }

      // verify the required parameter 'dataFim' is set
      if (dataFim == undefined || dataFim == null) {
        throw "Missing the required parameter 'dataFim' when calling salvarUsingPOST3";
      }


      var pathParams = {
      };
      var queryParams = {
        'idCartao': idCartao,
        'codigoPais': codigoPais,
        'dataInicio': dataInicio,
        'dataFim': dataFim
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AvisoViagemResponse;

      return this.apiClient.callApi(
        '/api/avisos-viagens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
