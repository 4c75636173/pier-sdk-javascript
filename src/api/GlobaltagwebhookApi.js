(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/WebHookResponse', '../model/WebHookPersistValue', '../model/PageWebHookResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/WebHookResponse'), require('../model/WebHookPersistValue'), require('../model/PageWebHookResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagwebhookApi = factory(root.Pier.ApiClient, root.Pier.WebHookResponse, root.Pier.WebHookPersistValue, root.Pier.PageWebHookResponse);
  }
}(this, function(ApiClient, WebHookResponse, WebHookPersistValue, PageWebHookResponse) {
  'use strict';

  /**
   * globaltagwebhook service.
   * @module api/GlobaltagwebhookApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagwebhookApi. 
   * @alias module:api/GlobaltagwebhookApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT24 operation.
     * @callback module:api/GlobaltagwebhookApi~alterarUsingPUT24Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebHookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{web_hook_resource_alterar}}}
     * {{{web_hook_resource_alterar_notes}}}
     * @param {Integer} id {{{web_hook_resource_alterar_param_id}}}
     * @param {module:model/WebHookPersistValue} webhook webhook
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status {{{web_hook_resource_alterar_param_status}}}
     * @param {module:api/GlobaltagwebhookApi~alterarUsingPUT24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WebHookResponse}
     */
    this.alterarUsingPUT24 = function(id, webhook, opts, callback) {
      opts = opts || {};
      var postBody = webhook;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT24";
      }

      // verify the required parameter 'webhook' is set
      if (webhook == undefined || webhook == null) {
        throw "Missing the required parameter 'webhook' when calling alterarUsingPUT24";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WebHookResponse;

      return this.apiClient.callApi(
        '/api/webhooks/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET55 operation.
     * @callback module:api/GlobaltagwebhookApi~consultarUsingGET55Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebHookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{web_hook_resource_consultar}}}
     * {{{web_hook_resource_consultar_notes}}}
     * @param {Integer} id {{{web_hook_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagwebhookApi~consultarUsingGET55Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WebHookResponse}
     */
    this.consultarUsingGET55 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET55";
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
      var returnType = WebHookResponse;

      return this.apiClient.callApi(
        '/api/webhooks/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET69 operation.
     * @callback module:api/GlobaltagwebhookApi~listarUsingGET69Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageWebHookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{web_hook_resource_listar}}}
     * {{{web_hook_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{web_hook_request_id_value}}}
     * @param {module:model/String} opts.tipoEvento {{{web_hook_request_tipo_evento_value}}}
     * @param {module:model/String} opts.metodo {{{web_hook_request_metodo_value}}}
     * @param {String} opts.url {{{web_hook_request_url_value}}}
     * @param {module:api/GlobaltagwebhookApi~listarUsingGET69Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageWebHookResponse}
     */
    this.listarUsingGET69 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'tipoEvento': opts['tipoEvento'],
        'metodo': opts['metodo'],
        'url': opts['url']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageWebHookResponse;

      return this.apiClient.callApi(
        '/api/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST36 operation.
     * @callback module:api/GlobaltagwebhookApi~salvarUsingPOST36Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebHookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{web_hook_resource_salvar}}}
     * {{{web_hook_resource_salvar_notes}}}
     * @param {module:model/WebHookPersistValue} webhook webhook
     * @param {module:api/GlobaltagwebhookApi~salvarUsingPOST36Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WebHookResponse}
     */
    this.salvarUsingPOST36 = function(webhook, callback) {
      var postBody = webhook;

      // verify the required parameter 'webhook' is set
      if (webhook == undefined || webhook == null) {
        throw "Missing the required parameter 'webhook' when calling salvarUsingPOST36";
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
      var returnType = WebHookResponse;

      return this.apiClient.callApi(
        '/api/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
