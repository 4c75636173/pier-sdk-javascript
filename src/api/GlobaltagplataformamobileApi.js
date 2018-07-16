(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PlataformaMobileResponse', '../model/PlataformaMobileUpdateValue', '../model/PagePlataformaMobileResponse', '../model/PlataformaMobilePersistValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PlataformaMobileResponse'), require('../model/PlataformaMobileUpdateValue'), require('../model/PagePlataformaMobileResponse'), require('../model/PlataformaMobilePersistValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagplataformamobileApi = factory(root.Pier.ApiClient, root.Pier.PlataformaMobileResponse, root.Pier.PlataformaMobileUpdateValue, root.Pier.PagePlataformaMobileResponse, root.Pier.PlataformaMobilePersistValue);
  }
}(this, function(ApiClient, PlataformaMobileResponse, PlataformaMobileUpdateValue, PagePlataformaMobileResponse, PlataformaMobilePersistValue) {
  'use strict';

  /**
   * globaltagplataformamobile service.
   * @module api/GlobaltagplataformamobileApi
   * @version 2.68.0
   */

  /**
   * Constructs a new GlobaltagplataformamobileApi. 
   * @alias module:api/GlobaltagplataformamobileApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the atualizarUsingPUT1 operation.
     * @callback module:api/GlobaltagplataformamobileApi~atualizarUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PlataformaMobileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{plataforma_mobile_resource_atualizar}}}
     * {{{plataforma_mobile_resource_atualizar_notes}}}
     * @param {Integer} id {{{plataforma_mobile_resource_atualizar_param_id}}}
     * @param {module:model/PlataformaMobileUpdateValue} update update
     * @param {module:api/GlobaltagplataformamobileApi~atualizarUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarUsingGET40 operation.
     * @callback module:api/GlobaltagplataformamobileApi~listarUsingGET40Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePlataformaMobileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{plataforma_mobile_resource_listar}}}
     * {{{plataforma_mobile_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.nome {{{plataforma_mobile_request_nome_value}}}
     * @param {module:api/GlobaltagplataformamobileApi~listarUsingGET40Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePlataformaMobileResponse}
     */
    this.listarUsingGET40 = function(opts, callback) {
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
     * Callback function to receive the result of the salvarUsingPOST26 operation.
     * @callback module:api/GlobaltagplataformamobileApi~salvarUsingPOST26Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PlataformaMobileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{plataforma_mobile_resource_salvar}}}
     * {{{plataforma_mobile_resource_salvar_notes}}}
     * @param {module:model/PlataformaMobilePersistValue} persist persist
     * @param {module:api/GlobaltagplataformamobileApi~salvarUsingPOST26Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PlataformaMobileResponse}
     */
    this.salvarUsingPOST26 = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST26";
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
