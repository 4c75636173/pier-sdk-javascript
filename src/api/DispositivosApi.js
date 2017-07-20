(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DispositivoResponse', '../model/PageDispositivoResponse', '../model/DispositivoPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DispositivoResponse'), require('../model/PageDispositivoResponse'), require('../model/DispositivoPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.DispositivosApi = factory(root.Pier.ApiClient, root.Pier.DispositivoResponse, root.Pier.PageDispositivoResponse, root.Pier.DispositivoPersist);
  }
}(this, function(ApiClient, DispositivoResponse, PageDispositivoResponse, DispositivoPersist) {
  'use strict';

  /**
   * Dispositivos service.
   * @module api/DispositivosApi
   * @version 2.24.0
   */

  /**
   * Constructs a new DispositivosApi. 
   * @alias module:api/DispositivosApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the ativarUsingPOST operation.
     * @callback module:api/DispositivosApi~ativarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispositivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ativa Dispositivo
     * Esse recurso permite ativar dispositivo.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id).
     * @param {module:api/DispositivosApi~ativarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DispositivoResponse}
     */
    this.ativarUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling ativarUsingPOST";
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
      var returnType = DispositivoResponse;

      return this.apiClient.callApi(
        '/api/dispositivos/{id}/ativar-dispositivo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desativarUsingPOST operation.
     * @callback module:api/DispositivosApi~desativarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispositivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Desativa Dispositivo
     * Esse recurso permite desativar dispositivo.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id).
     * @param {module:api/DispositivosApi~desativarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DispositivoResponse}
     */
    this.desativarUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desativarUsingPOST";
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
      var returnType = DispositivoResponse;

      return this.apiClient.callApi(
        '/api/dispositivos/{id}/desativar-dispositivo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET8 operation.
     * @callback module:api/DispositivosApi~listarUsingGET8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageDispositivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os dispositivos cadastrados
     * Este m\u00C3\u00A9todo permite que sejam listados os dispositivos existentes na base do PIER.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.token Token do Dispositivo
     * @param {Integer} opts.idUsuario Identificador do Usu\u00C3\u00A1rio
     * @param {Integer} opts.idAplicacaoMobile Identificador da aplica\u00C3\u00A7\u00C3\u00A3o
     * @param {String} opts.dataCriacao Apresenta a data e em que o registro foi criado.
     * @param {String} opts.dataDesativacao Apresenta a data e em que o registro foi desativado.
     * @param {module:api/DispositivosApi~listarUsingGET8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageDispositivoResponse}
     */
    this.listarUsingGET8 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'token': opts['token'],
        'idUsuario': opts['idUsuario'],
        'idAplicacaoMobile': opts['idAplicacaoMobile'],
        'dataCriacao': opts['dataCriacao'],
        'dataDesativacao': opts['dataDesativacao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageDispositivoResponse;

      return this.apiClient.callApi(
        '/api/dispositivos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST4 operation.
     * @callback module:api/DispositivosApi~salvarUsingPOST4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DispositivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra Dispositivo
     * Esse recurso permite cadastrar dispositivos.
     * @param {module:model/DispositivoPersist} persist persist
     * @param {module:api/DispositivosApi~salvarUsingPOST4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DispositivoResponse}
     */
    this.salvarUsingPOST4 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST4";
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
      var returnType = DispositivoResponse;

      return this.apiClient.callApi(
        '/api/dispositivos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
