(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/VinculoCartoesResponse', '../model/CartaoMultiAppPersistValue', '../model/ContaMultiAppResponse', '../model/ContaMultiAppPersistValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VinculoCartoesResponse'), require('../model/CartaoMultiAppPersistValue'), require('../model/ContaMultiAppResponse'), require('../model/ContaMultiAppPersistValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagcontamultiApi = factory(root.Pier.ApiClient, root.Pier.VinculoCartoesResponse, root.Pier.CartaoMultiAppPersistValue, root.Pier.ContaMultiAppResponse, root.Pier.ContaMultiAppPersistValue);
  }
}(this, function(ApiClient, VinculoCartoesResponse, CartaoMultiAppPersistValue, ContaMultiAppResponse, ContaMultiAppPersistValue) {
  'use strict';

  /**
   * globaltagcontamulti service.
   * @module api/GlobaltagcontamultiApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagcontamultiApi. 
   * @alias module:api/GlobaltagcontamultiApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the criarCartoesMultiAppUsingPOST operation.
     * @callback module:api/GlobaltagcontamultiApi~criarCartoesMultiAppUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VinculoCartoesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_cadastrar_cartao_multiapp}}}
     * {{{conta_resource_cadastrar_cartao_multiapp_notes}}}
     * @param {module:model/CartaoMultiAppPersistValue} cartaoMultiAppPersist cartaoMultiAppPersist
     * @param {module:api/GlobaltagcontamultiApi~criarCartoesMultiAppUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VinculoCartoesResponse}
     */
    this.criarCartoesMultiAppUsingPOST = function(cartaoMultiAppPersist, callback) {
      var postBody = cartaoMultiAppPersist;

      // verify the required parameter 'cartaoMultiAppPersist' is set
      if (cartaoMultiAppPersist == undefined || cartaoMultiAppPersist == null) {
        throw "Missing the required parameter 'cartaoMultiAppPersist' when calling criarCartoesMultiAppUsingPOST";
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
      var returnType = VinculoCartoesResponse;

      return this.apiClient.callApi(
        '/api/cartoes/gerar-cartoes-multiapp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the criarContasMultiAppUsingPOST operation.
     * @callback module:api/GlobaltagcontamultiApi~criarContasMultiAppUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContaMultiAppResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_resource_cadastrar_conta_multiapp}}}
     * {{{conta_resource_cadastrar_conta_multiapp_notes}}}
     * @param {module:model/ContaMultiAppPersistValue} contaMultiAppPersist contaMultiAppPersist
     * @param {module:api/GlobaltagcontamultiApi~criarContasMultiAppUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ContaMultiAppResponse}
     */
    this.criarContasMultiAppUsingPOST = function(contaMultiAppPersist, callback) {
      var postBody = contaMultiAppPersist;

      // verify the required parameter 'contaMultiAppPersist' is set
      if (contaMultiAppPersist == undefined || contaMultiAppPersist == null) {
        throw "Missing the required parameter 'contaMultiAppPersist' when calling criarContasMultiAppUsingPOST";
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
      var returnType = ContaMultiAppResponse;

      return this.apiClient.callApi(
        '/api/contas/cadastrar-conta-multiapp', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
