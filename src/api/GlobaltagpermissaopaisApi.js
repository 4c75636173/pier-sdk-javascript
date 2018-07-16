(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PaisResponse', '../model/PagePaisResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PaisResponse'), require('../model/PagePaisResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagpermissaopaisApi = factory(root.Pier.ApiClient, root.Pier.PaisResponse, root.Pier.PagePaisResponse);
  }
}(this, function(ApiClient, PaisResponse, PagePaisResponse) {
  'use strict';

  /**
   * globaltagpermissaopais service.
   * @module api/GlobaltagpermissaopaisApi
   * @version 2.68.0
   */

  /**
   * Constructs a new GlobaltagpermissaopaisApi. 
   * @alias module:api/GlobaltagpermissaopaisApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarPaisUsingGET operation.
     * @callback module:api/GlobaltagpermissaopaisApi~consultarPaisUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaisResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{permissao_pais_resource_consultar_pais}}}
     * {{{permissao_pais_resource_consultar_pais_notes}}}
     * @param {Integer} id {{{permissao_pais_resource_consultar_pais_param_id}}}
     * @param {module:api/GlobaltagpermissaopaisApi~consultarPaisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PaisResponse}
     */
    this.consultarPaisUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarPaisUsingGET";
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
      var returnType = PaisResponse;

      return this.apiClient.callApi(
        '/api/paises/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarContinentesUsingGET operation.
     * @callback module:api/GlobaltagpermissaopaisApi~listarContinentesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{enum_resource_listar_continentes}}}
     * {{{enum_resource_listar_continentes_notes}}}
     * @param {module:api/GlobaltagpermissaopaisApi~listarContinentesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<Object>}
     */
    this.listarContinentesUsingGET = function(callback) {
      var postBody = null;


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
      var returnType = [Object];

      return this.apiClient.callApi(
        '/api/continentes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarPaisesUsingGET operation.
     * @callback module:api/GlobaltagpermissaopaisApi~listarPaisesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePaisResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{permissao_pais_resource_listar_paises}}}
     * {{{permissao_pais_resource_listar_paises_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.codigo {{{pais_request_codigo_value}}}
     * @param {String} opts.sigla {{{pais_request_sigla_value}}}
     * @param {String} opts.descricao {{{pais_request_descricao_value}}}
     * @param {module:model/String} opts.continente {{{pais_request_continente_value}}}
     * @param {Boolean} opts.flagAtivo {{{pais_request_flag_ativo_value}}}
     * @param {module:api/GlobaltagpermissaopaisApi~listarPaisesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePaisResponse}
     */
    this.listarPaisesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'codigo': opts['codigo'],
        'sigla': opts['sigla'],
        'descricao': opts['descricao'],
        'continente': opts['continente'],
        'flagAtivo': opts['flagAtivo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePaisResponse;

      return this.apiClient.callApi(
        '/api/paises', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
