(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/SMS', '../model/ModelDate', '../model/PagePush', '../model/PageSMS', '../model/NotificacaoSMSResponse', '../model/PushFCMEGCM', '../model/PushAPNS', '../model/NotificacaoSMSBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SMS'), require('../model/ModelDate'), require('../model/PagePush'), require('../model/PageSMS'), require('../model/NotificacaoSMSResponse'), require('../model/PushFCMEGCM'), require('../model/PushAPNS'), require('../model/NotificacaoSMSBody'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.NotificacoesApi = factory(root.Pier.ApiClient, root.Pier.SMS, root.Pier.ModelDate, root.Pier.PagePush, root.Pier.PageSMS, root.Pier.NotificacaoSMSResponse, root.Pier.PushFCMEGCM, root.Pier.PushAPNS, root.Pier.NotificacaoSMSBody);
  }
}(this, function(ApiClient, SMS, ModelDate, PagePush, PageSMS, NotificacaoSMSResponse, PushFCMEGCM, PushAPNS, NotificacaoSMSBody) {
  'use strict';

  /**
   * Notificacoes service.
   * @module api/NotificacoesApi
   * @version 2.6.1
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
     * Callback function to receive the result of the atualizarSMSUsingPOST operation.
     * @callback module:api/NotificacoesApi~atualizarSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SMS} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualizar SMS
     * Esse recurso permite atualizar o status do SMS do emissor
     * @param {Object} opts Optional parameters
     * @param {String} opts.nsu Seu n\u00C3\u00BAmero
     * @param {String} opts.status Status
     * @param {String} opts.data Data
     * @param {String} opts.textoStatus TextoStatus
     * @param {String} opts.operadora Operadora
     * @param {module:api/NotificacoesApi~atualizarSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SMS}
     */
    this.atualizarSMSUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'nsu': opts['nsu'],
        'status': opts['status'],
        'data': opts['data'],
        'texto_status': opts['textoStatus'],
        'operadora': opts['operadora']
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
        '/api/notificacoes/sms/atualizar-status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarPushUsingGET operation.
     * @callback module:api/NotificacoesApi~listarPushUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePush} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Push
     * Esse recurso permite listar os Pushes do emissor
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:model/ModelDate} opts.dataEnvio Apresenta a data e em que o registro foi enviado para o dispositivo.
     * @param {module:model/String} opts.tipoEvento Nome do tipoEvento da notifica\u00C3\u00A7\u00C3\u00A3o
     * @param {module:model/String} opts.status Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o
     * @param {module:model/String} opts.plataforma Plataforma de Push notifications.
     * @param {String} opts.protocolo N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es
     * @param {module:api/NotificacoesApi~listarPushUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePush}
     */
    this.listarPushUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'dataEnvio': opts['dataEnvio'],
        'tipoEvento': opts['tipoEvento'],
        'status': opts['status'],
        'plataforma': opts['plataforma'],
        'protocolo': opts['protocolo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePush;

      return this.apiClient.callApi(
        '/api/notificacoes/push', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarSMSUsingGET operation.
     * @callback module:api/NotificacoesApi~listarSMSUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageSMS} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar SMS
     * Esse recurso permite listar os SMS do emissor
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Date} opts.dataInclusao Apresenta a data e em que o registro foi inclu\u00C3\u00ADdo na base para ser enviado
     * @param {module:model/String} opts.tipoEvento Nome do tipoEvento da notifica\u00C3\u00A7\u00C3\u00A3o
     * @param {module:model/String} opts.status Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o
     * @param {String} opts.operadora Nome da operadora a qual a notifica\u00C3\u00A7\u00C3\u00A3o foi enviada.
     * @param {String} opts.protocolo N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es
     * @param {module:api/NotificacoesApi~listarSMSUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageSMS}
     */
    this.listarSMSUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'dataInclusao': opts['dataInclusao'],
        'tipoEvento': opts['tipoEvento'],
        'status': opts['status'],
        'operadora': opts['operadora'],
        'protocolo': opts['protocolo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageSMS;

      return this.apiClient.callApi(
        '/api/notificacoes/sms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the responderSMSUsingPOST operation.
     * @callback module:api/NotificacoesApi~responderSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SMS} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Responder SMS
     * Esse recurso permite atualizar a resposta do SMS, fornecida pedo usu\u00C3\u00A1rio
     * @param {Object} opts Optional parameters
     * @param {String} opts.nsu Seu n\u00C3\u00BAmero
     * @param {String} opts.data Data
     * @param {String} opts.resposta TextoStatus
     * @param {module:api/NotificacoesApi~responderSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SMS}
     */
    this.responderSMSUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'nsu': opts['nsu'],
        'data': opts['data'],
        'resposta': opts['resposta']
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
        '/api/notificacoes/sms/responder', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarPushFCMUsingPOST operation.
     * @callback module:api/NotificacoesApi~salvarPushFCMUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoSMSResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar Push FCM
     * Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma FCM (Firebase Cloud Messaging).
     * @param {Array.<module:model/PushFCMEGCM>} pushPersists pushPersists
     * @param {module:api/NotificacoesApi~salvarPushFCMUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NotificacaoSMSResponse}
     */
    this.salvarPushFCMUsingPOST = function(pushPersists, callback) {
      var postBody = pushPersists;

      // verify the required parameter 'pushPersists' is set
      if (pushPersists == undefined || pushPersists == null) {
        throw "Missing the required parameter 'pushPersists' when calling salvarPushFCMUsingPOST";
      }


      var pathParams = {
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
      var returnType = NotificacaoSMSResponse;

      return this.apiClient.callApi(
        '/api/notificacoes/push/fcm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarPushGCMUsingPOST operation.
     * @callback module:api/NotificacoesApi~salvarPushGCMUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoSMSResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar Push GCM
     * Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma GCM (Google Cloud Messaging).
     * @param {Array.<module:model/PushFCMEGCM>} pushPersists pushPersists
     * @param {module:api/NotificacoesApi~salvarPushGCMUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NotificacaoSMSResponse}
     */
    this.salvarPushGCMUsingPOST = function(pushPersists, callback) {
      var postBody = pushPersists;

      // verify the required parameter 'pushPersists' is set
      if (pushPersists == undefined || pushPersists == null) {
        throw "Missing the required parameter 'pushPersists' when calling salvarPushGCMUsingPOST";
      }


      var pathParams = {
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
      var returnType = NotificacaoSMSResponse;

      return this.apiClient.callApi(
        '/api/notificacoes/push/gcm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarPushUsingPOST operation.
     * @callback module:api/NotificacoesApi~salvarPushUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoSMSResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar Push APNS
     * Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma APNS (Apple Push Notification Service).
     * @param {Array.<module:model/PushAPNS>} pushPersists pushPersists
     * @param {module:api/NotificacoesApi~salvarPushUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NotificacaoSMSResponse}
     */
    this.salvarPushUsingPOST = function(pushPersists, callback) {
      var postBody = pushPersists;

      // verify the required parameter 'pushPersists' is set
      if (pushPersists == undefined || pushPersists == null) {
        throw "Missing the required parameter 'pushPersists' when calling salvarPushUsingPOST";
      }


      var pathParams = {
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
      var returnType = NotificacaoSMSResponse;

      return this.apiClient.callApi(
        '/api/notificacoes/push/apns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarSMSUsingPOST operation.
     * @callback module:api/NotificacoesApi~salvarSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoSMSResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar SMS
     * Esse recurso permite enviar uma lista de SMS.
     * @param {Array.<module:model/NotificacaoSMSBody>} listaSMS listaSMS
     * @param {module:api/NotificacoesApi~salvarSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NotificacaoSMSResponse}
     */
    this.salvarSMSUsingPOST = function(listaSMS, callback) {
      var postBody = listaSMS;

      // verify the required parameter 'listaSMS' is set
      if (listaSMS == undefined || listaSMS == null) {
        throw "Missing the required parameter 'listaSMS' when calling salvarSMSUsingPOST";
      }


      var pathParams = {
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
      var returnType = NotificacaoSMSResponse;

      return this.apiClient.callApi(
        '/api/notificacoes/sms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
