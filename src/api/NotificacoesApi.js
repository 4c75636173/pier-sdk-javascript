(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ConfiguracaoEmailResponse', '../model/ConfiguracaoEmailPersist', '../model/TemplateNotificacaoResponse', '../model/NotificacaoSMSResponse', '../model/CodigoSegurancaSMSPersist', '../model/PageConfiguracaoEmailResponse', '../model/PagePushResponse', '../model/PageSMSResponse', '../model/PageTemplateNotificacaoResponse', '../model/NotificacaoResponse', '../model/PushFCMEGCM', '../model/PushAPNS', '../model/NotificacaoSMSBody', '../model/CodigoSegurancaSMSRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ConfiguracaoEmailResponse'), require('../model/ConfiguracaoEmailPersist'), require('../model/TemplateNotificacaoResponse'), require('../model/NotificacaoSMSResponse'), require('../model/CodigoSegurancaSMSPersist'), require('../model/PageConfiguracaoEmailResponse'), require('../model/PagePushResponse'), require('../model/PageSMSResponse'), require('../model/PageTemplateNotificacaoResponse'), require('../model/NotificacaoResponse'), require('../model/PushFCMEGCM'), require('../model/PushAPNS'), require('../model/NotificacaoSMSBody'), require('../model/CodigoSegurancaSMSRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.NotificacoesApi = factory(root.Pier.ApiClient, root.Pier.ConfiguracaoEmailResponse, root.Pier.ConfiguracaoEmailPersist, root.Pier.TemplateNotificacaoResponse, root.Pier.NotificacaoSMSResponse, root.Pier.CodigoSegurancaSMSPersist, root.Pier.PageConfiguracaoEmailResponse, root.Pier.PagePushResponse, root.Pier.PageSMSResponse, root.Pier.PageTemplateNotificacaoResponse, root.Pier.NotificacaoResponse, root.Pier.PushFCMEGCM, root.Pier.PushAPNS, root.Pier.NotificacaoSMSBody, root.Pier.CodigoSegurancaSMSRequest);
  }
}(this, function(ApiClient, ConfiguracaoEmailResponse, ConfiguracaoEmailPersist, TemplateNotificacaoResponse, NotificacaoSMSResponse, CodigoSegurancaSMSPersist, PageConfiguracaoEmailResponse, PagePushResponse, PageSMSResponse, PageTemplateNotificacaoResponse, NotificacaoResponse, PushFCMEGCM, PushAPNS, NotificacaoSMSBody, CodigoSegurancaSMSRequest) {
  'use strict';

  /**
   * Notificacoes service.
   * @module api/NotificacoesApi
   * @version 2.28.3
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
     * Callback function to receive the result of the alterarConfiguracaoUsingPUT operation.
     * @callback module:api/NotificacoesApi~alterarConfiguracaoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera configura\u00C3\u00A7\u00C3\u00B5es de E-mail
     * Esse recurso permite salvar altera\u00C3\u00A7\u00C3\u00B5es de configura\u00C3\u00A7\u00C3\u00B5es de E-mail.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail.
     * @param {module:model/ConfiguracaoEmailPersist} persist persist
     * @param {module:api/NotificacoesApi~alterarConfiguracaoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoEmailResponse}
     */
    this.alterarConfiguracaoUsingPUT = function(id, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarConfiguracaoUsingPUT";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling alterarConfiguracaoUsingPUT";
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
      var returnType = ConfiguracaoEmailResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-email/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarTemplateNotificacaoUsingPUT operation.
     * @callback module:api/NotificacoesApi~alterarTemplateNotificacaoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateNotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar template de notifica\u00C3\u00A7\u00C3\u00A3o
     * Esse recurso permite salvar altera\u00C3\u00A7\u00C3\u00B5es de templates notifica\u00C3\u00A7\u00C3\u00B5es.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do layout de e-mail.
     * @param {String} conteudo Template HTML
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idConfiguracaoEmail C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da configra\u00C3\u00A7\u00C3\u00A3o de EMAIL.
     * @param {module:model/String} opts.tipoLayout Tipo do layout.
     * @param {module:model/String} opts.tipoNotificacao Tipo da notifica\u00C3\u00A7\u00C3\u00A3o.
     * @param {String} opts.assunto Assunto da Notificaca\u00C3\u00A7\u00C3\u00A3o.
     * @param {module:api/NotificacoesApi~alterarTemplateNotificacaoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TemplateNotificacaoResponse}
     */
    this.alterarTemplateNotificacaoUsingPUT = function(id, conteudo, opts, callback) {
      opts = opts || {};
      var postBody = conteudo;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarTemplateNotificacaoUsingPUT";
      }

      // verify the required parameter 'conteudo' is set
      if (conteudo == undefined || conteudo == null) {
        throw "Missing the required parameter 'conteudo' when calling alterarTemplateNotificacaoUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'idConfiguracaoEmail': opts['idConfiguracaoEmail'],
        'tipoLayout': opts['tipoLayout'],
        'tipoNotificacao': opts['tipoNotificacao'],
        'assunto': opts['assunto']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['text/plain'];
      var accepts = ['application/json'];
      var returnType = TemplateNotificacaoResponse;

      return this.apiClient.callApi(
        '/api/templates-notificacoes/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the atualizarSMSUsingPOST operation.
     * @callback module:api/NotificacoesApi~atualizarSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoSMSResponse} data The data returned by the service call.
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
     * data is of type: {module:model/NotificacaoSMSResponse}
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NotificacaoSMSResponse;

      return this.apiClient.callApi(
        '/api/notificacoes/sms/atualizar-status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarConfiguracaoUsingGET operation.
     * @callback module:api/NotificacoesApi~consultarConfiguracaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta configura\u00C3\u00A7\u00C3\u00A3o de E-mail
     * Esse recurso permite consultar uma configura\u00C3\u00A7\u00C3\u00A3o espec\u00C3\u00ADfica por id.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail.
     * @param {module:api/NotificacoesApi~consultarConfiguracaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoEmailResponse}
     */
    this.consultarConfiguracaoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarConfiguracaoUsingGET";
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
      var returnType = ConfiguracaoEmailResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-email/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarTemplateNotificacaoUsingGET operation.
     * @callback module:api/NotificacoesApi~consultarTemplateNotificacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateNotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta template de notifica\u00C3\u00A7\u00C3\u00A3o
     * Esse recurso permite consultar uma configura\u00C3\u00A7\u00C3\u00A3o espec\u00C3\u00ADfica por id.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do layout de e-mail.
     * @param {module:api/NotificacoesApi~consultarTemplateNotificacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TemplateNotificacaoResponse}
     */
    this.consultarTemplateNotificacaoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarTemplateNotificacaoUsingGET";
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
      var returnType = TemplateNotificacaoResponse;

      return this.apiClient.callApi(
        '/api/templates-notificacoes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarTokenUsingPOST operation.
     * @callback module:api/NotificacoesApi~gerarTokenUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gerar c\u00C3\u00B3digo de seguran\u00C3\u00A7a e enviar por sms
     * Esse recurso permite gerar e enviar c\u00C3\u00B3digos de seguran\u00C3\u00A7a por sms, para valida\u00C3\u00A7\u00C3\u00A3o de dispositivos.
     * @param {module:model/CodigoSegurancaSMSPersist} persist persist
     * @param {module:api/NotificacoesApi~gerarTokenUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.gerarTokenUsingPOST = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling gerarTokenUsingPOST";
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/notificacoes-sms/gerar-codigo-seguranca', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarConfiguracaoUsingGET operation.
     * @callback module:api/NotificacoesApi~listarConfiguracaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageConfiguracaoEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista configura\u00C3\u00A7\u00C3\u00B5es de E-mails
     * Esse recurso permite listar as configura\u00C3\u00A7\u00C3\u00B5es de E-mails.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/NotificacoesApi~listarConfiguracaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageConfiguracaoEmailResponse}
     */
    this.listarConfiguracaoUsingGET = function(opts, callback) {
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
      var returnType = PageConfiguracaoEmailResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-email', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarPushUsingGET operation.
     * @callback module:api/NotificacoesApi~listarPushUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePushResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Push
     * Esse recurso permite listar os Pushes do emissor
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.dataEnvio Apresenta a data e em que o registro foi enviado para o dispositivo.
     * @param {module:model/String} opts.tipoEvento Nome do tipoEvento da notifica\u00C3\u00A7\u00C3\u00A3o
     * @param {module:model/String} opts.status Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o
     * @param {module:model/String} opts.plataforma Plataforma de Push notifications.
     * @param {String} opts.protocolo N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es
     * @param {module:api/NotificacoesApi~listarPushUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePushResponse}
     */
    this.listarPushUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePushResponse;

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
     * @param {module:model/PageSMSResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar SMS
     * Esse recurso permite listar os SMS do emissor
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.dataInclusao Apresenta a data e em que o registro foi inclu\u00C3\u00ADdo na base para ser enviado
     * @param {module:model/String} opts.tipoEvento Nome do tipoEvento da notifica\u00C3\u00A7\u00C3\u00A3o
     * @param {module:model/String} opts.status Status de envio da notifica\u00C3\u00A7\u00C3\u00A3o
     * @param {String} opts.operadora Nome da operadora a qual a notifica\u00C3\u00A7\u00C3\u00A3o foi enviada.
     * @param {String} opts.protocolo N\u00C3\u00BAmero do protocolo de envio de notifica\u00C3\u00A7\u00C3\u00B5es
     * @param {Integer} opts.nsu Apresenta o nsu da notifica\u00C3\u00A7\u00C3\u00A3o
     * @param {module:api/NotificacoesApi~listarSMSUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageSMSResponse}
     */
    this.listarSMSUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'dataInclusao': opts['dataInclusao'],
        'tipoEvento': opts['tipoEvento'],
        'status': opts['status'],
        'operadora': opts['operadora'],
        'protocolo': opts['protocolo'],
        'nsu': opts['nsu']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageSMSResponse;

      return this.apiClient.callApi(
        '/api/notificacoes/sms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTemplateNotificacaoUsingGET operation.
     * @callback module:api/NotificacoesApi~listarTemplateNotificacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTemplateNotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista templates de notifica\u00C3\u00A7\u00C3\u00B5es
     * Esse recurso permite listar templates notifica\u00C3\u00A7\u00C3\u00B5es.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/NotificacoesApi~listarTemplateNotificacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTemplateNotificacaoResponse}
     */
    this.listarTemplateNotificacaoUsingGET = function(opts, callback) {
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
      var returnType = PageTemplateNotificacaoResponse;

      return this.apiClient.callApi(
        '/api/templates-notificacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTiposLayoutsUsingGET operation.
     * @callback module:api/NotificacoesApi~listarTiposLayoutsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos templates de notifica\u00C3\u00A7\u00C3\u00A3o
     * Esse recurso permite listar os tipos de templates dispon\u00C3\u00ADveis os par\u00C3\u00A2metros devem ser usados entre chaves. Ex: {{nomeParametro}} .
     * @param {module:api/NotificacoesApi~listarTiposLayoutsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<Object>}
     */
    this.listarTiposLayoutsUsingGET = function(callback) {
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
        '/api/tipos-layouts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the responderSMSUsingPOST operation.
     * @callback module:api/NotificacoesApi~responderSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoSMSResponse} data The data returned by the service call.
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
     * data is of type: {module:model/NotificacaoSMSResponse}
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NotificacaoSMSResponse;

      return this.apiClient.callApi(
        '/api/notificacoes/sms/responder', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarConfiguracaoUsingPOST operation.
     * @callback module:api/NotificacoesApi~salvarConfiguracaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Salva configura\u00C3\u00A7\u00C3\u00B5es de E-mail
     * Esse recurso salvar configura\u00C3\u00A7\u00C3\u00B5es de E-mail.
     * @param {module:model/ConfiguracaoEmailPersist} persist persist
     * @param {module:api/NotificacoesApi~salvarConfiguracaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ConfiguracaoEmailResponse}
     */
    this.salvarConfiguracaoUsingPOST = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarConfiguracaoUsingPOST";
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
      var returnType = ConfiguracaoEmailResponse;

      return this.apiClient.callApi(
        '/api/configuracoes-email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarPushFCMUsingPOST operation.
     * @callback module:api/NotificacoesApi~salvarPushFCMUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar Push FCM
     * Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma FCM (Firebase Cloud Messaging).
     * @param {Array.<module:model/PushFCMEGCM>} pushPersists pushPersists
     * @param {module:api/NotificacoesApi~salvarPushFCMUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NotificacaoResponse}
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NotificacaoResponse;

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
     * @param {module:model/NotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar Push GCM
     * Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma GCM (Google Cloud Messaging).
     * @param {Array.<module:model/PushFCMEGCM>} pushPersists pushPersists
     * @param {module:api/NotificacoesApi~salvarPushGCMUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NotificacaoResponse}
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NotificacaoResponse;

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
     * @param {module:model/NotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar Push APNS
     * Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma APNS (Apple Push Notification Service).
     * @param {Array.<module:model/PushAPNS>} pushPersists pushPersists
     * @param {module:api/NotificacoesApi~salvarPushUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NotificacaoResponse}
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NotificacaoResponse;

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
     * @param {module:model/NotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar SMS
     * Esse recurso permite enviar uma lista de SMS.
     * @param {Array.<module:model/NotificacaoSMSBody>} listaSMS listaSMS
     * @param {module:api/NotificacoesApi~salvarSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NotificacaoResponse}
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NotificacaoResponse;

      return this.apiClient.callApi(
        '/api/notificacoes/sms', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarTemplateNotificacaoUsingPOST operation.
     * @callback module:api/NotificacoesApi~salvarTemplateNotificacaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateNotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Salva template de notifica\u00C3\u00A7\u00C3\u00A3o
     * Esse recurso salvar template notifica\u00C3\u00A7\u00C3\u00B5e.
     * @param {String} conteudo Template HTML
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idConfiguracaoEmail C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da configra\u00C3\u00A7\u00C3\u00A3o de EMAIL.
     * @param {module:model/String} opts.tipoLayout Tipo do layout.
     * @param {module:model/String} opts.tipoNotificacao Tipo da notifica\u00C3\u00A7\u00C3\u00A3o.
     * @param {String} opts.assunto Assunto da Notificaca\u00C3\u00A7\u00C3\u00A3o.
     * @param {module:api/NotificacoesApi~salvarTemplateNotificacaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TemplateNotificacaoResponse}
     */
    this.salvarTemplateNotificacaoUsingPOST = function(conteudo, opts, callback) {
      opts = opts || {};
      var postBody = conteudo;

      // verify the required parameter 'conteudo' is set
      if (conteudo == undefined || conteudo == null) {
        throw "Missing the required parameter 'conteudo' when calling salvarTemplateNotificacaoUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
        'idConfiguracaoEmail': opts['idConfiguracaoEmail'],
        'tipoLayout': opts['tipoLayout'],
        'tipoNotificacao': opts['tipoNotificacao'],
        'assunto': opts['assunto']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['text/plain'];
      var accepts = ['application/json'];
      var returnType = TemplateNotificacaoResponse;

      return this.apiClient.callApi(
        '/api/templates-notificacoes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarTokenUsingPOST operation.
     * @callback module:api/NotificacoesApi~validarTokenUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validar c\u00C3\u00B3digo de seguran\u00C3\u00A7a enviado por sms
     * Esse recurso permite validar os c\u00C3\u00B3digos de seguran\u00C3\u00A7a enviador por sms, para valida\u00C3\u00A7\u00C3\u00A3o de dispositivos.
     * @param {module:model/CodigoSegurancaSMSRequest} request request
     * @param {module:api/NotificacoesApi~validarTokenUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.validarTokenUsingPOST = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request == undefined || request == null) {
        throw "Missing the required parameter 'request' when calling validarTokenUsingPOST";
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/notificacoes-sms/validar-codigo-seguranca', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
