(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AplicacaoMobileUpdate', '../model/AplicacaoMobileResponse', '../model/PageAplicacaoMobileResponse', '../model/AplicacaoMobilePersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AplicacaoMobileUpdate'), require('../model/AplicacaoMobileResponse'), require('../model/PageAplicacaoMobileResponse'), require('../model/AplicacaoMobilePersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.AplicacaoMobileApi = factory(root.Pier.ApiClient, root.Pier.AplicacaoMobileUpdate, root.Pier.AplicacaoMobileResponse, root.Pier.PageAplicacaoMobileResponse, root.Pier.AplicacaoMobilePersist);
  }
}(this, function(ApiClient, AplicacaoMobileUpdate, AplicacaoMobileResponse, PageAplicacaoMobileResponse, AplicacaoMobilePersist) {
  'use strict';

  /**
   * AplicacaoMobile service.
   * @module api/AplicacaoMobileApi
   * @version 2.50.11
   */

  /**
   * Constructs a new AplicacaoMobileApi. 
   * @alias module:api/AplicacaoMobileApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the atualizarUsingPUT operation.
     * @callback module:api/AplicacaoMobileApi~atualizarUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AplicacaoMobileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualiza Aplicacao Mobile
     * Esse recurso permite atualizar aplicacao mobile.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Aplicacao (id).
     * @param {module:model/AplicacaoMobileUpdate} update update
     * @param {module:api/AplicacaoMobileApi~atualizarUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AplicacaoMobileResponse}
     */
    this.atualizarUsingPUT = function(id, update, callback) {
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarUsingPUT";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling atualizarUsingPUT";
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
      var returnType = AplicacaoMobileResponse;

      return this.apiClient.callApi(
        '/api/aplicacoes-mobile/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET2 operation.
     * @callback module:api/AplicacaoMobileApi~listarUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAplicacaoMobileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os aplicacoes mobile cadastradas
     * Este m\u00C3\u00A9todo permite que sejam listadas as aplicacoes mobile existentes na base do PIER.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.id Identificador da Aplicacao Mobile
     * @param {Integer} opts.idPlataformaMobile Identificador da Plataforma Mobile
     * @param {module:api/AplicacaoMobileApi~listarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageAplicacaoMobileResponse}
     */
    this.listarUsingGET2 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'idPlataformaMobile': opts['idPlataformaMobile']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageAplicacaoMobileResponse;

      return this.apiClient.callApi(
        '/api/aplicacoes-mobile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST operation.
     * @callback module:api/AplicacaoMobileApi~salvarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AplicacaoMobileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra Aplicacao Mobile
     * Esse recurso permite cadastrar aplicacoes mobile.
     * @param {module:model/AplicacaoMobilePersist} persist persist
     * @param {module:api/AplicacaoMobileApi~salvarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AplicacaoMobileResponse}
     */
    this.salvarUsingPOST = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST";
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
      var returnType = AplicacaoMobileResponse;

      return this.apiClient.callApi(
        '/api/aplicacoes-mobile', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
