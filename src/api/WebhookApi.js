(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/WebHookResponse', '../model/PageWebHookResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/WebHookResponse'), require('../model/PageWebHookResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.WebhookApi = factory(root.Pier.ApiClient, root.Pier.WebHookResponse, root.Pier.PageWebHookResponse);
  }
}(this, function(ApiClient, WebHookResponse, PageWebHookResponse) {
  'use strict';

  /**
   * Webhook service.
   * @module api/WebhookApi
   * @version 2.47.3
   */

  /**
   * Constructs a new WebhookApi. 
   * @alias module:api/WebhookApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT20 operation.
     * @callback module:api/WebhookApi~alterarUsingPUT20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebHookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar Webhook
     * Este m\u00C3\u00A9todo permite que seja modificado um webhooks j\u00C3\u00A1 cadastrado
     * @param {Integer} id C\u00C3\u00B3digo identificador do Webhook
     * @param {module:model/String} tipoEvento TipoEvento a ser chamado pelo WebHook
     * @param {String} url URL que a ser consumida pelo WebHook
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status Status
     * @param {module:api/WebhookApi~alterarUsingPUT20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WebHookResponse}
     */
    this.alterarUsingPUT20 = function(id, tipoEvento, url, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT20";
      }

      // verify the required parameter 'tipoEvento' is set
      if (tipoEvento == undefined || tipoEvento == null) {
        throw "Missing the required parameter 'tipoEvento' when calling alterarUsingPUT20";
      }

      // verify the required parameter 'url' is set
      if (url == undefined || url == null) {
        throw "Missing the required parameter 'url' when calling alterarUsingPUT20";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'status': opts['status'],
        'tipoEvento': tipoEvento,
        'url': url
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
     * Callback function to receive the result of the consultarUsingGET40 operation.
     * @callback module:api/WebhookApi~consultarUsingGET40Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebHookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar Webhook
     * Este m\u00C3\u00A9todo permite que sejam consultado um webhook do emissor atrav\u00C3\u00A9s de um id especifico
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Webhook (id).
     * @param {module:api/WebhookApi~consultarUsingGET40Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WebHookResponse}
     */
    this.consultarUsingGET40 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET40";
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
     * Callback function to receive the result of the listarUsingGET46 operation.
     * @callback module:api/WebhookApi~listarUsingGET46Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageWebHookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Webhooks
     * Este m\u00C3\u00A9todo permite que sejam listados os webhooks existentes
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id Id do WebHook
     * @param {module:model/String} opts.tipoEvento TipoEvento a ser chamado pelo WebHook
     * @param {module:model/String} opts.metodo M\u00C3\u00A9todo que a ser chamado pelo WebHook
     * @param {String} opts.url URL que a ser consumida pelo WebHook
     * @param {module:api/WebhookApi~listarUsingGET46Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageWebHookResponse}
     */
    this.listarUsingGET46 = function(opts, callback) {
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
     * Callback function to receive the result of the salvarUsingPOST26 operation.
     * @callback module:api/WebhookApi~salvarUsingPOST26Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebHookResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Salvar Webhook
     * Este m\u00C3\u00A9todo permite que seja adicionado um novo webhook
     * @param {module:model/String} tipoEvento TipoEvento a ser chamado pelo WebHook
     * @param {String} url URL que a ser consumida pelo WebHook
     * @param {module:api/WebhookApi~salvarUsingPOST26Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WebHookResponse}
     */
    this.salvarUsingPOST26 = function(tipoEvento, url, callback) {
      var postBody = null;

      // verify the required parameter 'tipoEvento' is set
      if (tipoEvento == undefined || tipoEvento == null) {
        throw "Missing the required parameter 'tipoEvento' when calling salvarUsingPOST26";
      }

      // verify the required parameter 'url' is set
      if (url == undefined || url == null) {
        throw "Missing the required parameter 'url' when calling salvarUsingPOST26";
      }


      var pathParams = {
      };
      var queryParams = {
        'tipoEvento': tipoEvento,
        'url': url
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
