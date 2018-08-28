(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/BinChaveUpdate', '../model/BinChavePersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BinChaveUpdate'), require('../model/BinChavePersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.BinchaveresourceApi = factory(root.Pier.ApiClient, root.Pier.BinChaveUpdate, root.Pier.BinChavePersist);
  }
}(this, function(ApiClient, BinChaveUpdate, BinChavePersist) {
  'use strict';

  /**
   * Binchaveresource service.
   * @module api/BinchaveresourceApi
   * @version 2.74.2
   */

  /**
   * Constructs a new BinchaveresourceApi. 
   * @alias module:api/BinchaveresourceApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarBinChaveUsingPUT operation.
     * @callback module:api/BinchaveresourceApi~alterarBinChaveUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * alterarBinChave
     * @param {Integer} id id
     * @param {module:model/BinChaveUpdate} request request
     * @param {String} login login
     * @param {module:api/BinchaveresourceApi~alterarBinChaveUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.alterarBinChaveUsingPUT = function(id, request, login, callback) {
      var postBody = request;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarBinChaveUsingPUT";
      }

      // verify the required parameter 'request' is set
      if (request == undefined || request == null) {
        throw "Missing the required parameter 'request' when calling alterarBinChaveUsingPUT";
      }

      // verify the required parameter 'login' is set
      if (login == undefined || login == null) {
        throw "Missing the required parameter 'login' when calling alterarBinChaveUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'login': login
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/bins-chaves/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET10 operation.
     * @callback module:api/BinchaveresourceApi~consultarUsingGET10Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * consultar
     * @param {Integer} id id
     * @param {module:api/BinchaveresourceApi~consultarUsingGET10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.consultarUsingGET10 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET10";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/bins-chaves/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarBinChaveUsingGET operation.
     * @callback module:api/BinchaveresourceApi~listarBinChaveUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * listarBinChave
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id 
     * @param {Integer} opts.idTipoChave 
     * @param {Integer} opts.idBin 
     * @param {String} opts.chave 
     * @param {String} opts.checkValue 
     * @param {String} opts.validade 
     * @param {Boolean} opts.flagDescriptografado 
     * @param {String} opts.label 
     * @param {module:api/BinchaveresourceApi~listarBinChaveUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.listarBinChaveUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'idTipoChave': opts['idTipoChave'],
        'idBin': opts['idBin'],
        'chave': opts['chave'],
        'checkValue': opts['checkValue'],
        'validade': opts['validade'],
        'flagDescriptografado': opts['flagDescriptografado'],
        'label': opts['label']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/bins-chaves', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST4 operation.
     * @callback module:api/BinchaveresourceApi~salvarUsingPOST4Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * salvar
     * @param {module:model/BinChavePersist} binChavePersist binChavePersist
     * @param {String} login login
     * @param {module:api/BinchaveresourceApi~salvarUsingPOST4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.salvarUsingPOST4 = function(binChavePersist, login, callback) {
      var postBody = binChavePersist;

      // verify the required parameter 'binChavePersist' is set
      if (binChavePersist == undefined || binChavePersist == null) {
        throw "Missing the required parameter 'binChavePersist' when calling salvarUsingPOST4";
      }

      // verify the required parameter 'login' is set
      if (login == undefined || login == null) {
        throw "Missing the required parameter 'login' when calling salvarUsingPOST4";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'login': login
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/bins-chaves', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
