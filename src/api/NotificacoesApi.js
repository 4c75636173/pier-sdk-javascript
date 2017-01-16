(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/SMS'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SMS'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.NotificacoesApi = factory(root.Pier.ApiClient, root.Pier.SMS);
  }
}(this, function(ApiClient, SMS) {
  'use strict';

  /**
   * Notificacoes service.
   * @module api/NotificacoesApi
   * @version 2.0.0
   */

  /**
   * Constructs a new NotificacoesApi. 
   * @alias module:api/NotificacoesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the atualizarSMSUsingPUT operation.
     * @callback module:api/NotificacoesApi~atualizarSMSUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SMS} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualizar SMS
     * Esse recurso permite atualizar o status do SMS do emissor
     * @param {String} seuNum Seu n\u00C3\u00BAmero
     * @param {String} status Status
     * @param {String} data Data
     * @param {String} textoStatus TextoStatus
     * @param {String} operadora Operadora
     * @param {module:api/NotificacoesApi~atualizarSMSUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SMS}
     */
    this.atualizarSMSUsingPUT = function(seuNum, status, data, textoStatus, operadora, callback) {
      var postBody = null;

      // verify the required parameter 'seuNum' is set
      if (seuNum == undefined || seuNum == null) {
        throw "Missing the required parameter 'seuNum' when calling atualizarSMSUsingPUT";
      }

      // verify the required parameter 'status' is set
      if (status == undefined || status == null) {
        throw "Missing the required parameter 'status' when calling atualizarSMSUsingPUT";
      }

      // verify the required parameter 'data' is set
      if (data == undefined || data == null) {
        throw "Missing the required parameter 'data' when calling atualizarSMSUsingPUT";
      }

      // verify the required parameter 'textoStatus' is set
      if (textoStatus == undefined || textoStatus == null) {
        throw "Missing the required parameter 'textoStatus' when calling atualizarSMSUsingPUT";
      }

      // verify the required parameter 'operadora' is set
      if (operadora == undefined || operadora == null) {
        throw "Missing the required parameter 'operadora' when calling atualizarSMSUsingPUT";
      }


      var pathParams = {
      };
      var queryParams = {
        'SeuNum': seuNum,
        'Status': status,
        'Data': data,
        'TextoStatus': textoStatus,
        'Operadora': operadora
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SMS;

      return this.apiClient.callApi(
        '/api/notificacoes/sms/atualizar-status', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the responderSMSUsingPUT operation.
     * @callback module:api/NotificacoesApi~responderSMSUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SMS} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responder SMS
     * Esse recurso permite atualizar a resposta do SMS, fornecida pedo usu\u00C3\u00A1rio
     * @param {String} seunum Seu n\u00C3\u00BAmero
     * @param {String} data Data
     * @param {String} textoSmsMo TextoStatus
     * @param {module:api/NotificacoesApi~responderSMSUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SMS}
     */
    this.responderSMSUsingPUT = function(seunum, data, textoSmsMo, callback) {
      var postBody = null;

      // verify the required parameter 'seunum' is set
      if (seunum == undefined || seunum == null) {
        throw "Missing the required parameter 'seunum' when calling responderSMSUsingPUT";
      }

      // verify the required parameter 'data' is set
      if (data == undefined || data == null) {
        throw "Missing the required parameter 'data' when calling responderSMSUsingPUT";
      }

      // verify the required parameter 'textoSmsMo' is set
      if (textoSmsMo == undefined || textoSmsMo == null) {
        throw "Missing the required parameter 'textoSmsMo' when calling responderSMSUsingPUT";
      }


      var pathParams = {
      };
      var queryParams = {
        'Seunum': seunum,
        'Data': data,
        'TextoSmsMo': textoSmsMo
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SMS;

      return this.apiClient.callApi(
        '/api/notificacoes/sms/responder', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
