(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Dispositivo', '../model/PageDispositivos', '../model/ModelDate', '../model/DispositivoPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Dispositivo'), require('../model/PageDispositivos'), require('../model/ModelDate'), require('../model/DispositivoPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.DispositivosApi = factory(root.Pier.ApiClient, root.Pier.Dispositivo, root.Pier.PageDispositivos, root.Pier.ModelDate, root.Pier.DispositivoPersist);
  }
}(this, function(ApiClient, Dispositivo, PageDispositivos, ModelDate, DispositivoPersist) {
  'use strict';

  /**
   * Dispositivos service.
   * @module api/DispositivosApi
   * @version 2.15.0
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
     * @param {module:model/Dispositivo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ativa Dispositivo
     * Esse recurso permite ativar dispositivo.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id).
     * @param {module:api/DispositivosApi~ativarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Dispositivo}
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
      var returnType = Dispositivo;

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
     * @param {module:model/Dispositivo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Desativa Dispositivo
     * Esse recurso permite desativar dispositivo.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id).
     * @param {module:api/DispositivosApi~desativarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Dispositivo}
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
      var returnType = Dispositivo;

      return this.apiClient.callApi(
        '/api/dispositivos/{id}/desativar-dispositivo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET5 operation.
     * @callback module:api/DispositivosApi~listarUsingGET5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageDispositivos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os dispositivos cadastrados
     * Este m\u00C3\u00A9todo permite que sejam listados os dispositivos existentes na base do PIER.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {String} opts.token Token do Dispositivo
     * @param {Integer} opts.idUsuario Identificador do Usu\u00C3\u00A1rio
     * @param {Integer} opts.idAplicacaoMobile Identificador da aplica\u00C3\u00A7\u00C3\u00A3o
     * @param {module:model/ModelDate} opts.dataCriacao Apresenta a data e em que o registro foi criado.
     * @param {module:model/ModelDate} opts.dataDesativacao Apresenta a data e em que o registro foi desativado.
     * @param {module:api/DispositivosApi~listarUsingGET5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageDispositivos}
     */
    this.listarUsingGET5 = function(opts, callback) {
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
      var returnType = PageDispositivos;

      return this.apiClient.callApi(
        '/api/dispositivos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST3 operation.
     * @callback module:api/DispositivosApi~salvarUsingPOST3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Dispositivo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra Dispositivo
     * Esse recurso permite cadastrar dispositivos.
     * @param {module:model/DispositivoPersist} persist persist
     * @param {module:api/DispositivosApi~salvarUsingPOST3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Dispositivo}
     */
    this.salvarUsingPOST3 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST3";
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
      var returnType = Dispositivo;

      return this.apiClient.callApi(
        '/api/dispositivos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
