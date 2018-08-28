(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AplicacaoMobileResponse', '../model/AplicacaoMobileUpdateValue', '../model/PageAplicacaoMobileResponse', '../model/AplicacaoMobilePersistValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AplicacaoMobileResponse'), require('../model/AplicacaoMobileUpdateValue'), require('../model/PageAplicacaoMobileResponse'), require('../model/AplicacaoMobilePersistValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagaplicacaomobileApi = factory(root.Pier.ApiClient, root.Pier.AplicacaoMobileResponse, root.Pier.AplicacaoMobileUpdateValue, root.Pier.PageAplicacaoMobileResponse, root.Pier.AplicacaoMobilePersistValue);
  }
}(this, function(ApiClient, AplicacaoMobileResponse, AplicacaoMobileUpdateValue, PageAplicacaoMobileResponse, AplicacaoMobilePersistValue) {
  'use strict';

  /**
   * globaltagaplicacaomobile service.
   * @module api/GlobaltagaplicacaomobileApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagaplicacaomobileApi. 
   * @alias module:api/GlobaltagaplicacaomobileApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the atualizarUsingPUT operation.
     * @callback module:api/GlobaltagaplicacaomobileApi~atualizarUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AplicacaoMobileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{aplicacao_mobile_resource_atualizar}}}
     * {{{aplicacao_mobile_resource_atualizar_notes}}}
     * @param {Integer} id {{{aplicacao_mobile_resource_atualizar_param_id}}}
     * @param {module:model/AplicacaoMobileUpdateValue} update update
     * @param {module:api/GlobaltagaplicacaomobileApi~atualizarUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarUsingGET3 operation.
     * @callback module:api/GlobaltagaplicacaomobileApi~listarUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageAplicacaoMobileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{aplicacao_mobile_resource_listar}}}
     * {{{aplicacao_mobile_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.id {{{aplicacao_mobile_request_id_value}}}
     * @param {Integer} opts.idPlataformaMobile {{{aplicacao_mobile_request_id_plataforma_mobile_value}}}
     * @param {module:api/GlobaltagaplicacaomobileApi~listarUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageAplicacaoMobileResponse}
     */
    this.listarUsingGET3 = function(opts, callback) {
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
     * @callback module:api/GlobaltagaplicacaomobileApi~salvarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AplicacaoMobileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{aplicacao_mobile_resource_salvar}}}
     * {{{aplicacao_mobile_resource_salvar_notes}}}
     * @param {module:model/AplicacaoMobilePersistValue} persist persist
     * @param {module:api/GlobaltagaplicacaomobileApi~salvarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
