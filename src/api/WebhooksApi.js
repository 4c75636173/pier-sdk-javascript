(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/WebHook', '../model/PageWebHooks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/WebHook'), require('../model/PageWebHooks'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.WebhooksApi = factory(root.Pier.ApiClient, root.Pier.WebHook, root.Pier.PageWebHooks);
  }
}(this, function(ApiClient, WebHook, PageWebHooks) {
  'use strict';

  /**
   * Webhooks service.
   * @module api/WebhooksApi
   * @version 2.15.5
   */

  /**
   * Constructs a new WebhooksApi. 
   * @alias module:api/WebhooksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT10 operation.
     * @callback module:api/WebhooksApi~alterarUsingPUT10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar Webhook
     * Este m\u00C3\u00A9todo permite que seja modificado um webhooks j\u00C3\u00A1 cadastrado
     * @param {Integer} id C\u00C3\u00B3digo identificador do Webhook
     * @param {module:model/String} tipoEvento TipoEvento a ser chamado pelo WebHook
     * @param {String} url URL que a ser consumida pelo WebHook
     * @param {module:api/WebhooksApi~alterarUsingPUT10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WebHook}
     */
    this.alterarUsingPUT10 = function(id, tipoEvento, url, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT10";
      }

      // verify the required parameter 'tipoEvento' is set
      if (tipoEvento == undefined || tipoEvento == null) {
        throw "Missing the required parameter 'tipoEvento' when calling alterarUsingPUT10";
      }

      // verify the required parameter 'url' is set
      if (url == undefined || url == null) {
        throw "Missing the required parameter 'url' when calling alterarUsingPUT10";
      }


      var pathParams = {
        'id': id
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
      var returnType = WebHook;

      return this.apiClient.callApi(
        '/api/webhooks/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET23 operation.
     * @callback module:api/WebhooksApi~consultarUsingGET23Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar Webhook
     * Este m\u00C3\u00A9todo permite que sejam consultado um webhook do emissor atrav\u00C3\u00A9s de um id especifico
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Webhook (id).
     * @param {module:api/WebhooksApi~consultarUsingGET23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WebHook}
     */
    this.consultarUsingGET23 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET23";
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
      var returnType = WebHook;

      return this.apiClient.callApi(
        '/api/webhooks/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET25 operation.
     * @callback module:api/WebhooksApi~listarUsingGET25Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageWebHooks} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Webhooks
     * Este m\u00C3\u00A9todo permite que sejam listados os webhooks existentes
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.id Id do WebHook
     * @param {module:model/String} opts.tipoEvento TipoEvento a ser chamado pelo WebHook
     * @param {module:model/String} opts.metodo M\u00C3\u00A9todo que a ser chamado pelo WebHook
     * @param {String} opts.url URL que a ser consumida pelo WebHook
     * @param {module:api/WebhooksApi~listarUsingGET25Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageWebHooks}
     */
    this.listarUsingGET25 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageWebHooks;

      return this.apiClient.callApi(
        '/api/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST13 operation.
     * @callback module:api/WebhooksApi~salvarUsingPOST13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Salvar Webhook
     * Este m\u00C3\u00A9todo permite que seja adicionado um novo webhook
     * @param {module:model/String} tipoEvento TipoEvento a ser chamado pelo WebHook
     * @param {String} url URL que a ser consumida pelo WebHook
     * @param {module:api/WebhooksApi~salvarUsingPOST13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WebHook}
     */
    this.salvarUsingPOST13 = function(tipoEvento, url, callback) {
      var postBody = null;

      // verify the required parameter 'tipoEvento' is set
      if (tipoEvento == undefined || tipoEvento == null) {
        throw "Missing the required parameter 'tipoEvento' when calling salvarUsingPOST13";
      }

      // verify the required parameter 'url' is set
      if (url == undefined || url == null) {
        throw "Missing the required parameter 'url' when calling salvarUsingPOST13";
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
      var returnType = WebHook;

      return this.apiClient.callApi(
        '/api/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
