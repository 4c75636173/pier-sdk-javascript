(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PlataformaMobileUpdate', '../model/PlataformaMobile', '../model/PagePlataformasMobile', '../model/PlataformaMobilePersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PlataformaMobileUpdate'), require('../model/PlataformaMobile'), require('../model/PagePlataformasMobile'), require('../model/PlataformaMobilePersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.PlataformasMobileApi = factory(root.Pier.ApiClient, root.Pier.PlataformaMobileUpdate, root.Pier.PlataformaMobile, root.Pier.PagePlataformasMobile, root.Pier.PlataformaMobilePersist);
  }
}(this, function(ApiClient, PlataformaMobileUpdate, PlataformaMobile, PagePlataformasMobile, PlataformaMobilePersist) {
  'use strict';

  /**
   * PlataformasMobile service.
   * @module api/PlataformasMobileApi
   * @version 2.15.5
   */

  /**
   * Constructs a new PlataformasMobileApi. 
   * @alias module:api/PlataformasMobileApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the atualizarUsingPUT1 operation.
     * @callback module:api/PlataformasMobileApi~atualizarUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PlataformaMobile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualiza Plataforma Mobile
     * Esse recurso permite atualizar plataforma mobile.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Plataforma (id).
     * @param {module:model/PlataformaMobileUpdate} update update
     * @param {module:api/PlataformasMobileApi~atualizarUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PlataformaMobile}
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
      var returnType = PlataformaMobile;

      return this.apiClient.callApi(
        '/api/plataformas-mobile/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET12 operation.
     * @callback module:api/PlataformasMobileApi~listarUsingGET12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePlataformasMobile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as plataformas mobile cadastradas
     * Este m\u00C3\u00A9todo permite que sejam listadas as plataformas mobile existentes na base do PIER.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {String} opts.nome Nome da Plataforma Mobile
     * @param {module:api/PlataformasMobileApi~listarUsingGET12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePlataformasMobile}
     */
    this.listarUsingGET12 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PagePlataformasMobile;

      return this.apiClient.callApi(
        '/api/plataformas-mobile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST8 operation.
     * @callback module:api/PlataformasMobileApi~salvarUsingPOST8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PlataformaMobile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastra Plataforma Mobile
     * Esse recurso permite cadastrar plataformas mobile.
     * @param {module:model/PlataformaMobilePersist} persist persist
     * @param {module:api/PlataformasMobileApi~salvarUsingPOST8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PlataformaMobile}
     */
    this.salvarUsingPOST8 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST8";
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
      var returnType = PlataformaMobile;

      return this.apiClient.callApi(
        '/api/plataformas-mobile', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
