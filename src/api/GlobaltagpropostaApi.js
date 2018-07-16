(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PropostaResponse', '../model/StatusPropostaUpdate', '../model/PageStatusPropostaResponse', '../model/PagePropostaResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PropostaResponse'), require('../model/StatusPropostaUpdate'), require('../model/PageStatusPropostaResponse'), require('../model/PagePropostaResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagpropostaApi = factory(root.Pier.ApiClient, root.Pier.PropostaResponse, root.Pier.StatusPropostaUpdate, root.Pier.PageStatusPropostaResponse, root.Pier.PagePropostaResponse);
  }
}(this, function(ApiClient, PropostaResponse, StatusPropostaUpdate, PageStatusPropostaResponse, PagePropostaResponse) {
  'use strict';

  /**
   * globaltagproposta service.
   * @module api/GlobaltagpropostaApi
   * @version 2.68.0
   */

  /**
   * Constructs a new GlobaltagpropostaApi. 
   * @alias module:api/GlobaltagpropostaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPOST operation.
     * @callback module:api/GlobaltagpropostaApi~alterarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PropostaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{proposta_resource_alterar_status}}}
     * {{{proposta_resource_alterar_status_notes}}}
     * @param {Integer} id {{{proposta_resource_alterar_status_param_id}}}
     * @param {module:model/StatusPropostaUpdate} update update
     * @param {module:api/GlobaltagpropostaApi~alterarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PropostaResponse}
     */
    this.alterarUsingPOST = function(id, update, callback) {
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPOST";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling alterarUsingPOST";
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
      var returnType = PropostaResponse;

      return this.apiClient.callApi(
        '/api/propostas/{id}/alterar-status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET33 operation.
     * @callback module:api/GlobaltagpropostaApi~consultarUsingGET33Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PropostaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{proposta_resource_consultar}}}
     * {{{proposta_resource_consultar_notes}}}
     * @param {Integer} id {{{proposta_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagpropostaApi~consultarUsingGET33Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PropostaResponse}
     */
    this.consultarUsingGET33 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET33";
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
      var returnType = PropostaResponse;

      return this.apiClient.callApi(
        '/api/propostas/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarStatusPropostaUsingGET operation.
     * @callback module:api/GlobaltagpropostaApi~listarStatusPropostaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageStatusPropostaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{proposta_resource_listar_status}}}
     * {{{proposta_resource_listar_status_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.status {{{status_proposta_request_status_value}}}
     * @param {Boolean} opts.flagPermiteAlteracao {{{status_proposta_request_flag_permite_alteracao_value}}}
     * @param {module:api/GlobaltagpropostaApi~listarStatusPropostaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageStatusPropostaResponse}
     */
    this.listarStatusPropostaUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'status': opts['status'],
        'flagPermiteAlteracao': opts['flagPermiteAlteracao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageStatusPropostaResponse;

      return this.apiClient.callApi(
        '/api/status-propostas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET44 operation.
     * @callback module:api/GlobaltagpropostaApi~listarUsingGET44Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePropostaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{proposta_resource_listar}}}
     * {{{proposta_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.status {{{proposta_request_status_value}}}
     * @param {module:api/GlobaltagpropostaApi~listarUsingGET44Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePropostaResponse}
     */
    this.listarUsingGET44 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePropostaResponse;

      return this.apiClient.callApi(
        '/api/propostas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
