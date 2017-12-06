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
    root.Pier.PermissaoPaisApi = factory(root.Pier.ApiClient, root.Pier.PaisResponse, root.Pier.PagePaisResponse);
  }
}(this, function(ApiClient, PaisResponse, PagePaisResponse) {
  'use strict';

  /**
   * PermissaoPais service.
   * @module api/PermissaoPaisApi
   * @version 2.47.3
   */

  /**
   * Constructs a new PermissaoPaisApi. 
   * @alias module:api/PermissaoPaisApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarPaisUsingGET operation.
     * @callback module:api/PermissaoPaisApi~consultarPaisUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaisResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de um determinado pa\u00C3\u00ADs
     * Este m\u00C3\u00A9todo permite consultar dados de um determinado pa\u00C3\u00ADs a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do pa\u00C3\u00ADs (id).
     * @param {module:api/PermissaoPaisApi~consultarPaisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/PermissaoPaisApi~listarContinentesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os continentes
     * Este recurso permite listar os continentes utilizados no recurso de permiss\u00C3\u00A3o de uso do cart\u00C3\u00A3o no exterior
     * @param {module:api/PermissaoPaisApi~listarContinentesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/PermissaoPaisApi~listarPaisesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePaisResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os pa\u00C3\u00ADses
     * Este recurso permite listar os pa\u00C3\u00ADses.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.codigo C\u00C3\u00B3digo do pa\u00C3\u00ADs
     * @param {String} opts.sigla Sigla do pa\u00C3\u00ADs
     * @param {String} opts.descricao Nome do pa\u00C3\u00ADs
     * @param {module:model/String} opts.continente Continente no qual o pa\u00C3\u00ADs faz parte
     * @param {Boolean} opts.flagAtivo Atributo que representa se o pa\u00C3\u00ADs est\u00C3\u00A1 ativo
     * @param {module:api/PermissaoPaisApi~listarPaisesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
