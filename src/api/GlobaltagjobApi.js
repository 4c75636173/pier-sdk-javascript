(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/JobResponse', '../model/PageJobResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/JobResponse'), require('../model/PageJobResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagjobApi = factory(root.Pier.ApiClient, root.Pier.JobResponse, root.Pier.PageJobResponse);
  }
}(this, function(ApiClient, JobResponse, PageJobResponse) {
  'use strict';

  /**
   * globaltagjob service.
   * @module api/GlobaltagjobApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagjobApi. 
   * @alias module:api/GlobaltagjobApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the ativarJobUsingPOST operation.
     * @callback module:api/GlobaltagjobApi~ativarJobUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{job_resource_ativar_job}}}
     * {{{job_resource_ativar_job_notes}}}
     * @param {Integer} id {{{job_resource_ativar_job_param_id}}}
     * @param {module:api/GlobaltagjobApi~ativarJobUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobResponse}
     */
    this.ativarJobUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling ativarJobUsingPOST";
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
      var returnType = JobResponse;

      return this.apiClient.callApi(
        '/api/jobs/{id}/ativar-job', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the atualizarUsingPUT4 operation.
     * @callback module:api/GlobaltagjobApi~atualizarUsingPUT4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/JobResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{job_resource_atualizar}}}
     * {{{job_resource_atualizar_notes}}}
     * @param {Integer} id {{{job_resource_atualizar_param_id}}}
     * @param {String} descricao {{{job_resource_atualizar_param_descricao}}}
     * @param {String} cron {{{job_resource_atualizar_param_cron}}}
     * @param {String} groovy groovy
     * @param {module:api/GlobaltagjobApi~atualizarUsingPUT4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobResponse}
     */
    this.atualizarUsingPUT4 = function(id, descricao, cron, groovy, callback) {
      var postBody = groovy;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarUsingPUT4";
      }

      // verify the required parameter 'descricao' is set
      if (descricao == undefined || descricao == null) {
        throw "Missing the required parameter 'descricao' when calling atualizarUsingPUT4";
      }

      // verify the required parameter 'cron' is set
      if (cron == undefined || cron == null) {
        throw "Missing the required parameter 'cron' when calling atualizarUsingPUT4";
      }

      // verify the required parameter 'groovy' is set
      if (groovy == undefined || groovy == null) {
        throw "Missing the required parameter 'groovy' when calling atualizarUsingPUT4";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'descricao': descricao,
        'cron': cron
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['text/plain'];
      var accepts = ['application/json'];
      var returnType = JobResponse;

      return this.apiClient.callApi(
        '/api/jobs/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desativarJobUsingPOST operation.
     * @callback module:api/GlobaltagjobApi~desativarJobUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JobResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{job_resource_desativar_job}}}
     * {{{job_resource_desativar_job_notes}}}
     * @param {Integer} id {{{job_resource_desativar_job_param_id}}}
     * @param {module:api/GlobaltagjobApi~desativarJobUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobResponse}
     */
    this.desativarJobUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desativarJobUsingPOST";
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
      var returnType = JobResponse;

      return this.apiClient.callApi(
        '/api/jobs/{id}/desativar-job', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET31 operation.
     * @callback module:api/GlobaltagjobApi~listarUsingGET31Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageJobResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{job_resource_listar}}}
     * {{{job_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.groovy {{{job_d_t_o_groovy_value}}}
     * @param {String} opts.descricao {{{job_d_t_o_descricao_value}}}
     * @param {String} opts.cron {{{job_d_t_o_cron_value}}}
     * @param {module:model/String} opts.status {{{job_d_t_o_status_value}}}
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {module:api/GlobaltagjobApi~listarUsingGET31Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageJobResponse}
     */
    this.listarUsingGET31 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'groovy': opts['groovy'],
        'descricao': opts['descricao'],
        'cron': opts['cron'],
        'status': opts['status'],
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
      var returnType = PageJobResponse;

      return this.apiClient.callApi(
        '/api/jobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST17 operation.
     * @callback module:api/GlobaltagjobApi~salvarUsingPOST17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/JobResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{job_resource_salvar}}}
     * {{{job_resource_salvar_notes}}}
     * @param {String} descricao {{{job_resource_salvar_param_descricao}}}
     * @param {String} cron {{{job_resource_salvar_param_cron}}}
     * @param {String} groovy groovy
     * @param {module:api/GlobaltagjobApi~salvarUsingPOST17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/JobResponse}
     */
    this.salvarUsingPOST17 = function(descricao, cron, groovy, callback) {
      var postBody = groovy;

      // verify the required parameter 'descricao' is set
      if (descricao == undefined || descricao == null) {
        throw "Missing the required parameter 'descricao' when calling salvarUsingPOST17";
      }

      // verify the required parameter 'cron' is set
      if (cron == undefined || cron == null) {
        throw "Missing the required parameter 'cron' when calling salvarUsingPOST17";
      }

      // verify the required parameter 'groovy' is set
      if (groovy == undefined || groovy == null) {
        throw "Missing the required parameter 'groovy' when calling salvarUsingPOST17";
      }


      var pathParams = {
      };
      var queryParams = {
        'descricao': descricao,
        'cron': cron
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['text/plain'];
      var accepts = ['application/json'];
      var returnType = JobResponse;

      return this.apiClient.callApi(
        '/api/jobs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
