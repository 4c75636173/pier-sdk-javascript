(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/DispositivoResponse', '../model/PageDispositivoResponse', '../model/DispositivoPersistValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DispositivoResponse'), require('../model/PageDispositivoResponse'), require('../model/DispositivoPersistValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagdispositivoApi = factory(root.Pier.ApiClient, root.Pier.DispositivoResponse, root.Pier.PageDispositivoResponse, root.Pier.DispositivoPersistValue);
  }
}(this, function(ApiClient, DispositivoResponse, PageDispositivoResponse, DispositivoPersistValue) {
  'use strict';

  /**
   * globaltagdispositivo service.
   * @module api/GlobaltagdispositivoApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagdispositivoApi. 
   * @alias module:api/GlobaltagdispositivoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the ativarUsingPOST operation.
     * @callback module:api/GlobaltagdispositivoApi~ativarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispositivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{dispositivo_resource_ativar}}}
     * {{{dispositivo_resource_ativar_notes}}}
     * @param {Integer} id {{{dispositivo_resource_ativar_param_id}}}
     * @param {module:api/GlobaltagdispositivoApi~ativarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagdispositivoApi~desativarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispositivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{dispositivo_resource_desativar}}}
     * {{{dispositivo_resource_desativar_notes}}}
     * @param {Integer} id {{{dispositivo_resource_desativar_param_id}}}
     * @param {module:api/GlobaltagdispositivoApi~desativarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarUsingGET21 operation.
     * @callback module:api/GlobaltagdispositivoApi~listarUsingGET21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageDispositivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{dispositivo_resource_listar}}}
     * {{{dispositivo_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.token {{{dispositivo_request_token_value}}}
     * @param {Integer} opts.idUsuario {{{dispositivo_request_id_usuario_value}}}
     * @param {Integer} opts.idAplicacaoMobile {{{dispositivo_request_id_aplicacao_mobile_value}}}
     * @param {String} opts.dataCriacao {{{dispositivo_request_data_criacao_value}}}
     * @param {String} opts.dataDesativacao {{{dispositivo_request_data_desativacao_value}}}
     * @param {module:api/GlobaltagdispositivoApi~listarUsingGET21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageDispositivoResponse}
     */
    this.listarUsingGET21 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
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
     * Callback function to receive the result of the salvarUsingPOST11 operation.
     * @callback module:api/GlobaltagdispositivoApi~salvarUsingPOST11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/DispositivoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{dispositivo_resource_salvar}}}
     * {{{dispositivo_resource_salvar_notes}}}
     * @param {module:model/DispositivoPersistValue} persist persist
     * @param {module:api/GlobaltagdispositivoApi~salvarUsingPOST11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DispositivoResponse}
     */
    this.salvarUsingPOST11 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST11";
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
