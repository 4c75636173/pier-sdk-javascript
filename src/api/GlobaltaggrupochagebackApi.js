(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PageCodigoChargebackResponse', '../model/PageGrupoChargebackResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageCodigoChargebackResponse'), require('../model/PageGrupoChargebackResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltaggrupochagebackApi = factory(root.Pier.ApiClient, root.Pier.PageCodigoChargebackResponse, root.Pier.PageGrupoChargebackResponse);
  }
}(this, function(ApiClient, PageCodigoChargebackResponse, PageGrupoChargebackResponse) {
  'use strict';

  /**
   * globaltaggrupochageback service.
   * @module api/GlobaltaggrupochagebackApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltaggrupochagebackApi. 
   * @alias module:api/GlobaltaggrupochagebackApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listarCodigosUsingGET operation.
     * @callback module:api/GlobaltaggrupochagebackApi~listarCodigosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCodigoChargebackResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{codigo_chargeback_resource_listar}}}
     * {{{codigo_chargeback_resource_listar_notes}}}
     * @param {Integer} grupoChargebackId grupoChargebackId
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id 
     * @param {String} opts.descricao 
     * @param {Boolean} opts.flagAtm 
     * @param {Integer} opts.grupoChargebackId2 
     * @param {module:api/GlobaltaggrupochagebackApi~listarCodigosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCodigoChargebackResponse}
     */
    this.listarCodigosUsingGET = function(grupoChargebackId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'grupoChargebackId' is set
      if (grupoChargebackId == undefined || grupoChargebackId == null) {
        throw "Missing the required parameter 'grupoChargebackId' when calling listarCodigosUsingGET";
      }


      var pathParams = {
        'grupoChargebackId': grupoChargebackId
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'descricao': opts['descricao'],
        'flagAtm': opts['flagAtm'],
        'grupoChargebackId': opts['grupoChargebackId2']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCodigoChargebackResponse;

      return this.apiClient.callApi(
        '/api/grupos-chargeback/{grupoChargebackId}/codigos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET28 operation.
     * @callback module:api/GlobaltaggrupochagebackApi~listarUsingGET28Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageGrupoChargebackResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{grupo_chargeback_resource_listar}}}
     * {{{grupo_chargeback_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltaggrupochagebackApi~listarUsingGET28Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageGrupoChargebackResponse}
     */
    this.listarUsingGET28 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageGrupoChargebackResponse;

      return this.apiClient.callApi(
        '/api/grupos-chargeback', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
