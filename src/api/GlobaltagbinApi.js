(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PageBinResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageBinResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagbinApi = factory(root.Pier.ApiClient, root.Pier.PageBinResponse);
  }
}(this, function(ApiClient, PageBinResponse) {
  'use strict';

  /**
   * Globaltagbin service.
   * @module api/GlobaltagbinApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagbinApi. 
   * @alias module:api/GlobaltagbinApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listarBinUsingGET operation.
     * @callback module:api/GlobaltagbinApi~listarBinUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBinResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{Bin_resource_listar_bins}}}
     * {{{Bin_resource_listar_Bin_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{bin_request_id_value}}}
     * @param {Integer} opts.proximaConta {{{bin_request_proximaconta_value}}}
     * @param {Integer} opts.flagCartaoVirtual {{{bin_request_flagcartaocirtual_value}}}
     * @param {Integer} opts.flagProvisorio {{{bin_request_flagprovisorio_value}}}
     * @param {Integer} opts.serviceCode {{{bin_request_servicecode_value}}}
     * @param {module:api/GlobaltagbinApi~listarBinUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageBinResponse}
     */
    this.listarBinUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'proximaConta': opts['proximaConta'],
        'flagCartaoVirtual': opts['flagCartaoVirtual'],
        'flagProvisorio': opts['flagProvisorio'],
        'serviceCode': opts['serviceCode']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageBinResponse;

      return this.apiClient.callApi(
        '/api/bins', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
