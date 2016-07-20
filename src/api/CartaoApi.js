(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CancelarCartaoResponse', '../model/ConsultarCartaoResponse', '../model/DesbloquearCartaoResponse', '../model/EmbossadoCartaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CancelarCartaoResponse'), require('../model/ConsultarCartaoResponse'), require('../model/DesbloquearCartaoResponse'), require('../model/EmbossadoCartaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CartaoApi = factory(root.Pier.ApiClient, root.Pier.CancelarCartaoResponse, root.Pier.ConsultarCartaoResponse, root.Pier.DesbloquearCartaoResponse, root.Pier.EmbossadoCartaoResponse);
  }
}(this, function(ApiClient, CancelarCartaoResponse, ConsultarCartaoResponse, DesbloquearCartaoResponse, EmbossadoCartaoResponse) {
  'use strict';

  /**
   * Cartao service.
   * @module api/CartaoApi
   * @version 2.0.0
   */

  /**
   * Constructs a new CartaoApi. 
   * @alias module:api/CartaoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the bloquearCartaoUsingPOST operation.
     * @callback module:api/CartaoApi~bloquearCartaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CancelarCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bloqueia um cart\u00C3\u00A3o
     * Bloquear um determinado cart\u00C3\u00A3o
     * @param {Integer} idConta ID da Conta
     * @param {Integer} idCartao ID do Cart\u00C3\u00A3o que deseja cancelar
     * @param {Integer} motivo Motivo do bloqueio
     * @param {Object} opts Optional parameters
     * @param {String} opts.observacao Alguma observa\u00C3\u00A7\u00C3\u00A3o para o bloqueio
     * @param {module:api/CartaoApi~bloquearCartaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CancelarCartaoResponse}
     */
    this.bloquearCartaoUsingPOST = function(idConta, idCartao, motivo, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling bloquearCartaoUsingPOST";
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling bloquearCartaoUsingPOST";
      }

      // verify the required parameter 'motivo' is set
      if (motivo == undefined || motivo == null) {
        throw "Missing the required parameter 'motivo' when calling bloquearCartaoUsingPOST";
      }


      var pathParams = {
        'idConta': idConta,
        'idCartao': idCartao
      };
      var queryParams = {
        'motivo': motivo,
        'observacao': opts['observacao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CancelarCartaoResponse;

      return this.apiClient.callApi(
        '/api/contas/{idConta}/cartoes/{idCartao}/bloquear', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarCartaoUsingGET operation.
     * @callback module:api/CartaoApi~consultarCartaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsultarCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retorna um cart\u00C3\u00A3o
     * Consultar as informa\u00C3\u00A7\u00C3\u00B5es de um determinado cart\u00C3\u00A3o de uma conta
     * @param {Integer} idConta ID da Conta que pertence o cart\u00C3\u00A3o
     * @param {Integer} idCartao ID do Cart\u00C3\u00A3o que deseja consultar
     * @param {Object} opts Optional parameters
     * @param {String} opts.numeroCartao N\u00C3\u00BAmero do Cart\u00C3\u00A3o que deseja consultar (opcional)
     * @param {module:api/CartaoApi~consultarCartaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConsultarCartaoResponse}
     */
    this.consultarCartaoUsingGET = function(idConta, idCartao, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling consultarCartaoUsingGET";
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling consultarCartaoUsingGET";
      }


      var pathParams = {
        'idConta': idConta,
        'idCartao': idCartao
      };
      var queryParams = {
      };
      var headerParams = {
        'numeroCartao': opts['numeroCartao']
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ConsultarCartaoResponse;

      return this.apiClient.callApi(
        '/api/contas/{idConta}/cartoes/{idCartao}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarCartoesUsingGET operation.
     * @callback module:api/CartaoApi~consultarCartoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConsultarCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retorna todos os cart\u00C3\u00B5es
     * Consultar todos os cart\u00C3\u00B5es de uma determinada conta
     * @param {Integer} idConta ID da Conta
     * @param {module:api/CartaoApi~consultarCartoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConsultarCartaoResponse}
     */
    this.consultarCartoesUsingGET = function(idConta, callback) {
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling consultarCartoesUsingGET";
      }


      var pathParams = {
        'idConta': idConta
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ConsultarCartaoResponse;

      return this.apiClient.callApi(
        '/api/contas/{idConta}/cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desbloquearCartaoUsingPOST operation.
     * @callback module:api/CartaoApi~desbloquearCartaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DesbloquearCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Desbloqueia um cart\u00C3\u00A3o
     * Desbloquear cart\u00C3\u00A3o de uma determinada conta
     * @param {Integer} idConta ID da Conta
     * @param {Integer} idCartao ID do Cart\u00C3\u00A3o que deseja consultar o saldo/limite
     * @param {Object} opts Optional parameters
     * @param {String} opts.codigoSegurancao C\u00C3\u00B3digo seguran\u00C3\u00A7a do cart\u00C3\u00A3o
     * @param {module:api/CartaoApi~desbloquearCartaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DesbloquearCartaoResponse}
     */
    this.desbloquearCartaoUsingPOST = function(idConta, idCartao, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling desbloquearCartaoUsingPOST";
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling desbloquearCartaoUsingPOST";
      }


      var pathParams = {
        'idConta': idConta,
        'idCartao': idCartao
      };
      var queryParams = {
      };
      var headerParams = {
        'codigoSegurancao': opts['codigoSegurancao']
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DesbloquearCartaoResponse;

      return this.apiClient.callApi(
        '/api/contas/{idConta}/cartoes/{idCartao}/desbloquear', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the embossadoCartaoUsingPUT operation.
     * @callback module:api/CartaoApi~embossadoCartaoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmbossadoCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Embossado
     * N\u00C3\u00B3s informe caso tenha embossado algum cart\u00C3\u00A3o.
     * @param {Integer} idConta ID da Conta
     * @param {Integer} idCartao ID do Cart\u00C3\u00A3o que deseja cancelar
     * @param {module:api/CartaoApi~embossadoCartaoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EmbossadoCartaoResponse}
     */
    this.embossadoCartaoUsingPUT = function(idConta, idCartao, callback) {
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling embossadoCartaoUsingPUT";
      }

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling embossadoCartaoUsingPUT";
      }


      var pathParams = {
        'idConta': idConta,
        'idCartao': idCartao
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EmbossadoCartaoResponse;

      return this.apiClient.callApi(
        '/api/contas/{idConta}/cartoes/{idCartao}/embossado', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
