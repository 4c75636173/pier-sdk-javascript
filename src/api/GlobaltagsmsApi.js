(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PageSMSEnvioResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageSMSEnvioResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagsmsApi = factory(root.Pier.ApiClient, root.Pier.PageSMSEnvioResponse);
  }
}(this, function(ApiClient, PageSMSEnvioResponse) {
  'use strict';

  /**
   * globaltagsms service.
   * @module api/GlobaltagsmsApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagsmsApi. 
   * @alias module:api/GlobaltagsmsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listarSMSUsingGET1 operation.
     * @callback module:api/GlobaltagsmsApi~listarSMSUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageSMSEnvioResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{sms_resource_listar_sms}}}
     * {{{sms_resource_listar_sms_notes}}}
     * @param {Integer} idConta {{{sms_envio_request_id_conta_value}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.dataInicio {{{sms_envio_request_data_inicio_value}}}
     * @param {String} opts.dataFim {{{sms_envio_request_data_fim_value}}}
     * @param {module:api/GlobaltagsmsApi~listarSMSUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageSMSEnvioResponse}
     */
    this.listarSMSUsingGET1 = function(idConta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling listarSMSUsingGET1";
      }


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idConta': idConta,
        'dataInicio': opts['dataInicio'],
        'dataFim': opts['dataFim']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageSMSEnvioResponse;

      return this.apiClient.callApi(
        '/api/sms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
