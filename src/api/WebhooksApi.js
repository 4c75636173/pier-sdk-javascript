(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ModelObject', '../model/WebHook', '../model/PageWebHooks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelObject'), require('../model/WebHook'), require('../model/PageWebHooks'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.WebhooksApi = factory(root.Pier.ApiClient, root.Pier.ModelObject, root.Pier.WebHook, root.Pier.PageWebHooks);
  }
}(this, function(ApiClient, ModelObject, WebHook, PageWebHooks) {
  'use strict';

  /**
   * Webhooks service.
   * @module api/WebhooksApi
   * @version 2.0.0
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
     * Callback function to receive the result of the alterarUsingPUT3 operation.
     * @callback module:api/WebhooksApi~alterarUsingPUT3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar Webhook
     * Este m\u00C3\u00A9todo permite que seja modificado um webhooks j\u00C3\u00A1 cadastrado
     * @param {Integer} id C\u00C3\u00B3digo identificador do Webhook
     * @param {module:model/ModelObject} evento Evento a ser chamado pelo WebHook
     * @param {module:model/ModelObject} metodo M\u00C3\u00A9todo que a ser chamado pelo WebHook
     * @param {String} url URL que a ser consumida pelo WebHook
     * @param {module:api/WebhooksApi~alterarUsingPUT3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WebHook}
     */
    this.alterarUsingPUT3 = function(id, evento, metodo, url, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT3";
      }

      // verify the required parameter 'evento' is set
      if (evento == undefined || evento == null) {
        throw "Missing the required parameter 'evento' when calling alterarUsingPUT3";
      }

      // verify the required parameter 'metodo' is set
      if (metodo == undefined || metodo == null) {
        throw "Missing the required parameter 'metodo' when calling alterarUsingPUT3";
      }

      // verify the required parameter 'url' is set
      if (url == undefined || url == null) {
        throw "Missing the required parameter 'url' when calling alterarUsingPUT3";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
        'evento': evento,
        'metodo': metodo,
        'url': url
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WebHook;

      return this.apiClient.callApi(
        '/api/webhooks', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET9 operation.
     * @callback module:api/WebhooksApi~consultarUsingGET9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar Webhook
     * Este m\u00C3\u00A9todo permite que sejam consultado um webhook do emissor atrav\u00C3\u00A9s de um id especifico
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Webhook (id).
     * @param {module:api/WebhooksApi~consultarUsingGET9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WebHook}
     */
    this.consultarUsingGET9 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET9";
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

      var authNames = ['access_token'];
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
     * Callback function to receive the result of the listarUsingGET10 operation.
     * @callback module:api/WebhooksApi~listarUsingGET10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageWebHooks} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Webhooks
     * Este m\u00C3\u00A9todo permite que sejam listados os webhooks existentes
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id Id do WebHook
     * @param {module:model/ModelObject} opts.evento Evento a ser chamado pelo WebHook
     * @param {module:model/ModelObject} opts.metodo M\u00C3\u00A9todo que a ser chamado pelo WebHook
     * @param {String} opts.url URL que a ser consumida pelo WebHook
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/WebhooksApi~listarUsingGET10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageWebHooks}
     */
    this.listarUsingGET10 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'evento': opts['evento'],
        'metodo': opts['metodo'],
        'url': opts['url'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
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
     * Callback function to receive the result of the salvarUsingPOST3 operation.
     * @callback module:api/WebhooksApi~salvarUsingPOST3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/WebHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Salvar Webhook
     * Este m\u00C3\u00A9todo permite que seja adicionado um novo webhook
     * @param {module:model/ModelObject} evento Evento a ser chamado pelo WebHook
     * @param {module:model/ModelObject} metodo M\u00C3\u00A9todo que a ser chamado pelo WebHook
     * @param {String} url URL que a ser consumida pelo WebHook
     * @param {module:api/WebhooksApi~salvarUsingPOST3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/WebHook}
     */
    this.salvarUsingPOST3 = function(evento, metodo, url, callback) {
      var postBody = null;

      // verify the required parameter 'evento' is set
      if (evento == undefined || evento == null) {
        throw "Missing the required parameter 'evento' when calling salvarUsingPOST3";
      }

      // verify the required parameter 'metodo' is set
      if (metodo == undefined || metodo == null) {
        throw "Missing the required parameter 'metodo' when calling salvarUsingPOST3";
      }

      // verify the required parameter 'url' is set
      if (url == undefined || url == null) {
        throw "Missing the required parameter 'url' when calling salvarUsingPOST3";
      }


      var pathParams = {
      };
      var queryParams = {
        'evento': evento,
        'metodo': metodo,
        'url': url
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
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
