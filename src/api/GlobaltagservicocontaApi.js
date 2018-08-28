(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PageAnuidadeResponse', '../model/PageOperadoraResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageAnuidadeResponse'), require('../model/PageOperadoraResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagservicocontaApi = factory(root.Pier.ApiClient, root.Pier.PageAnuidadeResponse, root.Pier.PageOperadoraResponse);
  }
}(this, function(ApiClient, PageAnuidadeResponse, PageOperadoraResponse) {
  'use strict';

  /**
   * globaltagservicoconta service.
   * @module api/GlobaltagservicocontaApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagservicocontaApi. 
   * @alias module:api/GlobaltagservicocontaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the ativarAnuidadeUsingPOST operation.
     * @callback module:api/GlobaltagservicocontaApi~ativarAnuidadeUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_ativar_anuidade}}}
     * {{{conta_resource_ativar_anuidade_notes}}}
     * @param {Integer} id {{{conta_resource_ativar_anuidade_param_id}}}
     * @param {Integer} idAnuidade {{{anuidade_request_id_anuidade_value}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.DDD {{{anuidade_request_d_d_d_value}}}
     * @param {String} opts.celular {{{anuidade_request_celular_value}}}
     * @param {Integer} opts.idOperadora {{{anuidade_request_id_operadora_value}}}
     * @param {Integer} opts.idOrigemComercial {{{anuidade_request_id_origem_comercial_value}}}
     * @param {module:api/GlobaltagservicocontaApi~ativarAnuidadeUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.ativarAnuidadeUsingPOST = function(id, idAnuidade, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling ativarAnuidadeUsingPOST";
      }

      // verify the required parameter 'idAnuidade' is set
      if (idAnuidade == undefined || idAnuidade == null) {
        throw "Missing the required parameter 'idAnuidade' when calling ativarAnuidadeUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idAnuidade': idAnuidade,
        'DDD': opts['DDD'],
        'celular': opts['celular'],
        'idOperadora': opts['idOperadora'],
        'idOrigemComercial': opts['idOrigemComercial']
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
        '/api/contas/{id}/atribuir-anuidade', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ativarEnvioFaturaEmailUsingPOST operation.
     * @callback module:api/GlobaltagservicocontaApi~ativarEnvioFaturaEmailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_ativar_envio_fatura_email}}}
     * {{{conta_resource_ativar_envio_fatura_email_notes}}}
     * @param {Integer} id {{{conta_resource_ativar_envio_fatura_email_param_id}}}
     * @param {module:api/GlobaltagservicocontaApi~ativarEnvioFaturaEmailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.ativarEnvioFaturaEmailUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling ativarEnvioFaturaEmailUsingPOST";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/contas/{id}/ativar-fatura-email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desativarEnvioFaturaEmailUsingPOST operation.
     * @callback module:api/GlobaltagservicocontaApi~desativarEnvioFaturaEmailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_desativar_envio_fatura_email}}}
     * {{{conta_resource_desativar_envio_fatura_email_notes}}}
     * @param {Integer} id {{{conta_resource_desativar_envio_fatura_email_param_id}}}
     * @param {module:api/GlobaltagservicocontaApi~desativarEnvioFaturaEmailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.desativarEnvioFaturaEmailUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desativarEnvioFaturaEmailUsingPOST";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/contas/{id}/desativar-fatura-email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarAnuidadesUsingGET operation.
     * @callback module:api/GlobaltagservicocontaApi~listarAnuidadesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAnuidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{anuidade_resource_listar_anuidades}}}
     * {{{anuidade_resource_listar_anuidades_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagservicocontaApi~listarAnuidadesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageAnuidadeResponse}
     */
    this.listarAnuidadesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageAnuidadeResponse;

      return this.apiClient.callApi(
        '/api/anuidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarOperadorasTelefonicasUsingGET operation.
     * @callback module:api/GlobaltagservicocontaApi~listarOperadorasTelefonicasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOperadoraResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{operadora_resource_listar_operadoras_telefonicas}}}
     * {{{operadora_resource_listar_operadoras_telefonicas_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagservicocontaApi~listarOperadorasTelefonicasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOperadoraResponse}
     */
    this.listarOperadorasTelefonicasUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageOperadoraResponse;

      return this.apiClient.callApi(
        '/api/operadoras-telefonicas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
