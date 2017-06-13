(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Job', '../model/PageJob'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Job'), require('../model/PageJob'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.JobsApi = factory(root.Pier.ApiClient, root.Pier.Job, root.Pier.PageJob);
  }
}(this, function(ApiClient, Job, PageJob) {
  'use strict';

  /**
   * Jobs service.
   * @module api/JobsApi
   * @version 2.16.2
   */

  /**
   * Constructs a new JobsApi. 
   * @alias module:api/JobsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the ativarJobUsingPOST operation.
     * @callback module:api/JobsApi~ativarJobUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ativar Job
     * Este recurso adiciona o job ao agendador de tarefas.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Job (id).
     * @param {module:api/JobsApi~ativarJobUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Job}
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
      var returnType = Job;

      return this.apiClient.callApi(
        '/api/jobs/{id}/ativar-job', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the atualizarUsingPUT operation.
     * @callback module:api/JobsApi~atualizarUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualizar Job
     * Este recurso permite atualizar os dados de um job cadastrado.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Job (id).
     * @param {String} descricao descricao.
     * @param {String} cron Cron do Job.
     * @param {String} groovy groovy
     * @param {module:api/JobsApi~atualizarUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Job}
     */
    this.atualizarUsingPUT = function(id, descricao, cron, groovy, callback) {
      var postBody = groovy;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarUsingPUT";
      }

      // verify the required parameter 'descricao' is set
      if (descricao == undefined || descricao == null) {
        throw "Missing the required parameter 'descricao' when calling atualizarUsingPUT";
      }

      // verify the required parameter 'cron' is set
      if (cron == undefined || cron == null) {
        throw "Missing the required parameter 'cron' when calling atualizarUsingPUT";
      }

      // verify the required parameter 'groovy' is set
      if (groovy == undefined || groovy == null) {
        throw "Missing the required parameter 'groovy' when calling atualizarUsingPUT";
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
      var returnType = Job;

      return this.apiClient.callApi(
        '/api/jobs/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desativarJobUsingPOST operation.
     * @callback module:api/JobsApi~desativarJobUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Desativar Job
     * Este recurso retira o job do agendador de tarefas.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Job (id).
     * @param {module:api/JobsApi~desativarJobUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Job}
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
      var returnType = Job;

      return this.apiClient.callApi(
        '/api/jobs/{id}/desativar-job', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET11 operation.
     * @callback module:api/JobsApi~listarUsingGET11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageJob} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Jobs
     * Este recurso permite que sejam listados os jobs existentes na base do PIER.
     * @param {Object} opts Optional parameters
     * @param {String} opts.groovy Script Groovy do Job
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do Job
     * @param {String} opts.cron Cron do Job
     * @param {module:model/String} opts.status Status do Job
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/JobsApi~listarUsingGET11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageJob}
     */
    this.listarUsingGET11 = function(opts, callback) {
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
      var returnType = PageJob;

      return this.apiClient.callApi(
        '/api/jobs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST5 operation.
     * @callback module:api/JobsApi~salvarUsingPOST5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Job} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastrar Job
     * Esse recurso permite cadastrar jobs.
     * @param {String} descricao descricao.
     * @param {String} cron Cron do Job.
     * @param {String} groovy groovy
     * @param {module:api/JobsApi~salvarUsingPOST5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Job}
     */
    this.salvarUsingPOST5 = function(descricao, cron, groovy, callback) {
      var postBody = groovy;

      // verify the required parameter 'descricao' is set
      if (descricao == undefined || descricao == null) {
        throw "Missing the required parameter 'descricao' when calling salvarUsingPOST5";
      }

      // verify the required parameter 'cron' is set
      if (cron == undefined || cron == null) {
        throw "Missing the required parameter 'cron' when calling salvarUsingPOST5";
      }

      // verify the required parameter 'groovy' is set
      if (groovy == undefined || groovy == null) {
        throw "Missing the required parameter 'groovy' when calling salvarUsingPOST5";
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
      var returnType = Job;

      return this.apiClient.callApi(
        '/api/jobs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
