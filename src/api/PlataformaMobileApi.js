(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PlataformaMobileUpdate', '../model/PlataformaMobileResponse', '../model/PagePlataformaMobileResponse', '../model/PlataformaMobilePersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PlataformaMobileUpdate'), require('../model/PlataformaMobileResponse'), require('../model/PagePlataformaMobileResponse'), require('../model/PlataformaMobilePersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PlataformaMobileApi = factory(root.Pier.ApiClient, root.Pier.PlataformaMobileUpdate, root.Pier.PlataformaMobileResponse, root.Pier.PagePlataformaMobileResponse, root.Pier.PlataformaMobilePersist);
  }
}(this, function(ApiClient, PlataformaMobileUpdate, PlataformaMobileResponse, PagePlataformaMobileResponse, PlataformaMobilePersist) {
  'use strict';

  /**
   * PlataformaMobile service.
   * @module api/PlataformaMobileApi
   * @version 2.38.1
   */

  /**
   * Constructs a new PlataformaMobileApi. 
   * @alias module:api/PlataformaMobileApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the atualizarUsingPUT1 operation.
     * @callback module:api/PlataformaMobileApi~atualizarUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PlataformaMobileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualiza Plataforma Mobile
     * Esse recurso permite atualizar plataforma mobile.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id).
     * @param {module:model/PlataformaMobileUpdate} update update
     * @param {module:api/PlataformaMobileApi~atualizarUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PlataformaMobileResponse}
     */
    this.atualizarUsingPUT1 = function(id, update, callback) {
      var postBody = update;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarUsingPUT1";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling atualizarUsingPUT1";
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
      var returnType = PlataformaMobileResponse;

      return this.apiClient.callApi(
        '/api/plataformas-mobile/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET19 operation.
     * @callback module:api/PlataformaMobileApi~listarUsingGET19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePlataformaMobileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as plataformas mobile cadastradas
     * Este m\u00C3\u00A9todo permite que sejam listadas as plataformas mobile existentes na base do PIER.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.nome Nome da Plataforma Mobile
     * @param {module:api/PlataformaMobileApi~listarUsingGET19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePlataformaMobileResponse}
     */
    this.listarUsingGET19 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'nome': opts['nome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePlataformaMobileResponse;

      return this.apiClient.callApi(
        '/api/plataformas-mobile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST14 operation.
     * @callback module:api/PlataformaMobileApi~salvarUsingPOST14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PlataformaMobileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra Plataforma Mobile
     * Esse recurso permite cadastrar plataformas mobile.
     * @param {module:model/PlataformaMobilePersist} persist persist
     * @param {module:api/PlataformaMobileApi~salvarUsingPOST14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PlataformaMobileResponse}
     */
    this.salvarUsingPOST14 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST14";
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
      var returnType = PlataformaMobileResponse;

      return this.apiClient.callApi(
        '/api/plataformas-mobile', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
