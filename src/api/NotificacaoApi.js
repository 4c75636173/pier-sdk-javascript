(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ConfiguracaoEmailResponse', '../model/ConfiguracaoEmailPersist', '../model/TemplateNotificacaoDetalheResponse', '../model/NotificacaoSMSResponse', '../model/CodigoSegurancaResponse', '../model/CodigoSegurancaSMSPersist', '../model/PageConfiguracaoEmailResponse', '../model/PageCodigoSegurancaResponse', '../model/PagePushResponse', '../model/PageSMSResponse', '../model/PageTemplateNotificacaoResponse', '../model/NotificacaoEmailRequest', '../model/NotificacaoResponse', '../model/PushFCMEGCM', '../model/PushAPNS', '../model/NotificacaoSMSBody', '../model/CodigoSegurancaEMAILPersist', '../model/CodigoSegurancaSMSRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ConfiguracaoEmailResponse'), require('../model/ConfiguracaoEmailPersist'), require('../model/TemplateNotificacaoDetalheResponse'), require('../model/NotificacaoSMSResponse'), require('../model/CodigoSegurancaResponse'), require('../model/CodigoSegurancaSMSPersist'), require('../model/PageConfiguracaoEmailResponse'), require('../model/PageCodigoSegurancaResponse'), require('../model/PagePushResponse'), require('../model/PageSMSResponse'), require('../model/PageTemplateNotificacaoResponse'), require('../model/NotificacaoEmailRequest'), require('../model/NotificacaoResponse'), require('../model/PushFCMEGCM'), require('../model/PushAPNS'), require('../model/NotificacaoSMSBody'), require('../model/CodigoSegurancaEMAILPersist'), require('../model/CodigoSegurancaSMSRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.NotificacaoApi = factory(root.Pier.ApiClient, root.Pier.ConfiguracaoEmailResponse, root.Pier.ConfiguracaoEmailPersist, root.Pier.TemplateNotificacaoDetalheResponse, root.Pier.NotificacaoSMSResponse, root.Pier.CodigoSegurancaResponse, root.Pier.CodigoSegurancaSMSPersist, root.Pier.PageConfiguracaoEmailResponse, root.Pier.PageCodigoSegurancaResponse, root.Pier.PagePushResponse, root.Pier.PageSMSResponse, root.Pier.PageTemplateNotificacaoResponse, root.Pier.NotificacaoEmailRequest, root.Pier.NotificacaoResponse, root.Pier.PushFCMEGCM, root.Pier.PushAPNS, root.Pier.NotificacaoSMSBody, root.Pier.CodigoSegurancaEMAILPersist, root.Pier.CodigoSegurancaSMSRequest);
  }
}(this, function(ApiClient, ConfiguracaoEmailResponse, ConfiguracaoEmailPersist, TemplateNotificacaoDetalheResponse, NotificacaoSMSResponse, CodigoSegurancaResponse, CodigoSegurancaSMSPersist, PageConfiguracaoEmailResponse, PageCodigoSegurancaResponse, PagePushResponse, PageSMSResponse, PageTemplateNotificacaoResponse, NotificacaoEmailRequest, NotificacaoResponse, PushFCMEGCM, PushAPNS, NotificacaoSMSBody, CodigoSegurancaEMAILPersist, CodigoSegurancaSMSRequest) {
  'use strict';

  /**
   * Notificacao service.
   * @module api/NotificacaoApi
   * @version 2.52.0
   */

  /**
   * Constructs a new NotificacaoApi. 
   * @alias module:api/NotificacaoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarConfiguracaoUsingPUT operation.
     * @callback module:api/NotificacaoApi~alterarConfiguracaoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera configura\u00C3\u00A7\u00C3\u00B5es de E-mail
     * Esse recurso permite salvar altera\u00C3\u00A7\u00C3\u00B5es de configura\u00C3\u00A7\u00C3\u00B5es de E-mail.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail.
     * @param {module:model/ConfiguracaoEmailPersist} persist persist
     * @param {module:api/NotificacaoApi~alterarConfiguracaoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/NotificacaoApi~alterarTemplateNotificacaoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateNotificacaoDetalheResponse} data The data returned by the service call.
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
     * @param {String} opts.remetente Remetente
     * @param {String} opts.assunto Assunto da Notificaca\u00C3\u00A7\u00C3\u00A3o.
     * @param {Boolean} opts.templatePadrao Template Padr\u00C3\u00A3o.
     * @param {module:api/NotificacaoApi~alterarTemplateNotificacaoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TemplateNotificacaoDetalheResponse}
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
        'remetente': opts['remetente'],
        'assunto': opts['assunto'],
        'templatePadrao': opts['templatePadrao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['text/plain'];
      var accepts = ['application/json'];
      var returnType = TemplateNotificacaoDetalheResponse;

      return this.apiClient.callApi(
        '/api/templates-notificacoes/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the atualizarSMSUsingPOST operation.
     * @callback module:api/NotificacaoApi~atualizarSMSUsingPOSTCallback
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
     * @param {module:api/NotificacaoApi~atualizarSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/NotificacaoApi~consultarConfiguracaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta configura\u00C3\u00A7\u00C3\u00A3o de E-mail
     * Esse recurso permite consultar uma configura\u00C3\u00A7\u00C3\u00A3o espec\u00C3\u00ADfica por id.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail.
     * @param {module:api/NotificacaoApi~consultarConfiguracaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the consultarPorEmailUsingGET operation.
     * @callback module:api/NotificacaoApi~consultarPorEmailUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CodigoSegurancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta c\u00C3\u00B3digo de seguran\u00C3\u00A7a E-mail
     * Esse recurso permite consultar um c\u00C3\u00B3digo de seguran\u00C3\u00A7a E-mail espec\u00C3\u00ADfico por id.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail.
     * @param {module:api/NotificacaoApi~consultarPorEmailUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CodigoSegurancaResponse}
     */
    this.consultarPorEmailUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarPorEmailUsingGET";
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
      var returnType = CodigoSegurancaResponse;

      return this.apiClient.callApi(
        '/api/codigos-seguranca-email/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarPorSMSUsingGET operation.
     * @callback module:api/NotificacaoApi~consultarPorSMSUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CodigoSegurancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta c\u00C3\u00B3digo de seguran\u00C3\u00A7a SMS
     * Esse recurso permite consultar um c\u00C3\u00B3digo de seguran\u00C3\u00A7a SMS espec\u00C3\u00ADfico por id.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da configura\u00C3\u00A7\u00C3\u00A3o de e-mail.
     * @param {module:api/NotificacaoApi~consultarPorSMSUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CodigoSegurancaResponse}
     */
    this.consultarPorSMSUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarPorSMSUsingGET";
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
      var returnType = CodigoSegurancaResponse;

      return this.apiClient.callApi(
        '/api/codigos-seguranca-sms/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarTemplateNotificacaoUsingGET operation.
     * @callback module:api/NotificacaoApi~consultarTemplateNotificacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateNotificacaoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta template de notifica\u00C3\u00A7\u00C3\u00A3o
     * Esse recurso permite consultar uma configura\u00C3\u00A7\u00C3\u00A3o espec\u00C3\u00ADfica por id.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do layout de e-mail.
     * @param {module:api/NotificacaoApi~consultarTemplateNotificacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TemplateNotificacaoDetalheResponse}
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
      var returnType = TemplateNotificacaoDetalheResponse;

      return this.apiClient.callApi(
        '/api/templates-notificacoes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarTokenEMAILUsingPOST operation.
     * @callback module:api/NotificacaoApi~gerarTokenEMAILUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gerar c\u00C3\u00B3digo de seguran\u00C3\u00A7a e enviar por e-mail
     * Esse recurso permite gerar e enviar c\u00C3\u00B3digos de seguran\u00C3\u00A7a por e-mail, para valida\u00C3\u00A7\u00C3\u00A3o de dispositivos.
     * @param {String} email email
     * @param {module:api/NotificacaoApi~gerarTokenEMAILUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.gerarTokenEMAILUsingPOST = function(email, callback) {
      var postBody = email;

      // verify the required parameter 'email' is set
      if (email == undefined || email == null) {
        throw "Missing the required parameter 'email' when calling gerarTokenEMAILUsingPOST";
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
        '/api/notificacoes-email/gerar-codigo-seguranca', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarTokenSMSUsingPOST operation.
     * @callback module:api/NotificacaoApi~gerarTokenSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gerar c\u00C3\u00B3digo de seguran\u00C3\u00A7a e enviar por sms
     * Esse recurso permite gerar e enviar c\u00C3\u00B3digos de seguran\u00C3\u00A7a por sms, para valida\u00C3\u00A7\u00C3\u00A3o de dispositivos.
     * @param {module:model/CodigoSegurancaSMSPersist} persist persist
     * @param {module:api/NotificacaoApi~gerarTokenSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.gerarTokenSMSUsingPOST = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling gerarTokenSMSUsingPOST";
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
     * @callback module:api/NotificacaoApi~listarConfiguracaoUsingGETCallback
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
     * @param {module:api/NotificacaoApi~listarConfiguracaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarPorEmailUsingGET operation.
     * @callback module:api/NotificacaoApi~listarPorEmailUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCodigoSegurancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os c\u00C3\u00B3digos de seguran\u00C3\u00A7a E-Mail
     * Esse recurso permite listar os codigos de seguran\u00C3\u00A7a por E-Mail.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/NotificacaoApi~listarPorEmailUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCodigoSegurancaResponse}
     */
    this.listarPorEmailUsingGET = function(opts, callback) {
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
      var returnType = PageCodigoSegurancaResponse;

      return this.apiClient.callApi(
        '/api/codigos-seguranca-email', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarPorSMSUsingGET operation.
     * @callback module:api/NotificacaoApi~listarPorSMSUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCodigoSegurancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os c\u00C3\u00B3digos de seguran\u00C3\u00A7a SMS
     * Esse recurso permite listar os codigos de seguran\u00C3\u00A7a por SMS.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/NotificacaoApi~listarPorSMSUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCodigoSegurancaResponse}
     */
    this.listarPorSMSUsingGET = function(opts, callback) {
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
      var returnType = PageCodigoSegurancaResponse;

      return this.apiClient.callApi(
        '/api/codigos-seguranca-sms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarPushUsingGET operation.
     * @callback module:api/NotificacaoApi~listarPushUsingGETCallback
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
     * @param {module:api/NotificacaoApi~listarPushUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/NotificacaoApi~listarSMSUsingGETCallback
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
     * @param {module:api/NotificacaoApi~listarSMSUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/NotificacaoApi~listarTemplateNotificacaoUsingGETCallback
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
     * @param {module:api/NotificacaoApi~listarTemplateNotificacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/NotificacaoApi~listarTiposLayoutsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos templates de notifica\u00C3\u00A7\u00C3\u00A3o
     * Esse recurso permite listar os tipos de templates dispon\u00C3\u00ADveis os par\u00C3\u00A2metros devem ser usados entre chaves. Ex: {{nomeParametro}} .
     * @param {module:api/NotificacaoApi~listarTiposLayoutsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the notificacaoEmailUsingPOST operation.
     * @callback module:api/NotificacaoApi~notificacaoEmailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar notifica\u00C3\u00A7\u00C3\u00A3o por email
     * Esse recurso permite enviar uma mensagem de notifica\u00C3\u00A7\u00C3\u00A3o por email
     * @param {module:model/NotificacaoEmailRequest} request request
     * @param {module:api/NotificacaoApi~notificacaoEmailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.notificacaoEmailUsingPOST = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request == undefined || request == null) {
        throw "Missing the required parameter 'request' when calling notificacaoEmailUsingPOST";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/notificacoes-email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reenviarTokenSMSUsingPOST operation.
     * @callback module:api/NotificacaoApi~reenviarTokenSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reenviar c\u00C3\u00B3digo de seguran\u00C3\u00A7a por sms
     * Esse recurso permite que seja reenviado para um determinado n\u00C3\u00BAmero de telefone, atrav\u00C3\u00A9s de SMS, o c\u00C3\u00B3digo de seguran\u00C3\u00A7a gerado previamente para ele. Caso o c\u00C3\u00B3digo de seguran\u00C3\u00A7a j\u00C3\u00A1 n\u00C3\u00A3o esteja mais v\u00C3\u00A1lido, o recurso retornar\u00C3\u00A1 uma mensagem orientando que seja solicitada uma nova gera\u00C3\u00A7\u00C3\u00A3o para o telefone em quest\u00C3\u00A3o.
     * @param {module:model/CodigoSegurancaSMSPersist} persist persist
     * @param {module:api/NotificacaoApi~reenviarTokenSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.reenviarTokenSMSUsingPOST = function(persist, callback) {
      var postBody = persist;

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling reenviarTokenSMSUsingPOST";
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
        '/api/notificacoes-sms/reenviar-codigo-seguranca', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the responderSMSGetUsingGET operation.
     * @callback module:api/NotificacaoApi~responderSMSGetUsingGETCallback
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
     * @param {module:api/NotificacaoApi~responderSMSGetUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NotificacaoSMSResponse}
     */
    this.responderSMSGetUsingGET = function(opts, callback) {
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
        '/api/notificacoes/sms/responder', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarConfiguracaoUsingPOST operation.
     * @callback module:api/NotificacaoApi~salvarConfiguracaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Salva configura\u00C3\u00A7\u00C3\u00B5es de E-mail
     * Esse recurso salvar configura\u00C3\u00A7\u00C3\u00B5es de E-mail.
     * @param {module:model/ConfiguracaoEmailPersist} persist persist
     * @param {module:api/NotificacaoApi~salvarConfiguracaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/NotificacaoApi~salvarPushFCMUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar Push FCM
     * Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma FCM (Firebase Cloud Messaging).
     * @param {Array.<module:model/PushFCMEGCM>} pushPersists pushPersists
     * @param {module:api/NotificacaoApi~salvarPushFCMUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/NotificacaoApi~salvarPushGCMUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar Push GCM
     * Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma GCM (Google Cloud Messaging).
     * @param {Array.<module:model/PushFCMEGCM>} pushPersists pushPersists
     * @param {module:api/NotificacaoApi~salvarPushGCMUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/NotificacaoApi~salvarPushUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar Push APNS
     * Esse recurso permite enviar Push para um determinado dipositivo movel atrav\u00C3\u00A9s da plataforma APNS (Apple Push Notification Service).
     * @param {Array.<module:model/PushAPNS>} pushPersists pushPersists
     * @param {module:api/NotificacaoApi~salvarPushUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/NotificacaoApi~salvarSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enviar SMS
     * Esse recurso permite enviar uma lista de SMS.
     * @param {Array.<module:model/NotificacaoSMSBody>} listaSMS listaSMS
     * @param {module:api/NotificacaoApi~salvarSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/NotificacaoApi~salvarTemplateNotificacaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateNotificacaoDetalheResponse} data The data returned by the service call.
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
     * @param {String} opts.remetente Remetente
     * @param {String} opts.assunto Assunto da Notificaca\u00C3\u00A7\u00C3\u00A3o.
     * @param {Boolean} opts.templatePadrao Template Padr\u00C3\u00A3o.
     * @param {module:api/NotificacaoApi~salvarTemplateNotificacaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TemplateNotificacaoDetalheResponse}
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
        'remetente': opts['remetente'],
        'assunto': opts['assunto'],
        'templatePadrao': opts['templatePadrao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['text/plain'];
      var accepts = ['application/json'];
      var returnType = TemplateNotificacaoDetalheResponse;

      return this.apiClient.callApi(
        '/api/templates-notificacoes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarTokenEMAILUsingPOST operation.
     * @callback module:api/NotificacaoApi~validarTokenEMAILUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validar c\u00C3\u00B3digo de seguran\u00C3\u00A7a enviado por e-mail
     * Esse recurso permite validar os c\u00C3\u00B3digos de seguran\u00C3\u00A7a enviador por e-mail, para valida\u00C3\u00A7\u00C3\u00A3o de dispositivos.
     * @param {module:model/CodigoSegurancaEMAILPersist} request request
     * @param {module:api/NotificacaoApi~validarTokenEMAILUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.validarTokenEMAILUsingPOST = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request == undefined || request == null) {
        throw "Missing the required parameter 'request' when calling validarTokenEMAILUsingPOST";
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
        '/api/notificacoes-email/validar-codigo-seguranca', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarTokenSMSUsingPOST operation.
     * @callback module:api/NotificacaoApi~validarTokenSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validar c\u00C3\u00B3digo de seguran\u00C3\u00A7a enviado por sms
     * Esse recurso permite validar os c\u00C3\u00B3digos de seguran\u00C3\u00A7a enviador por sms, para valida\u00C3\u00A7\u00C3\u00A3o de dispositivos.
     * @param {module:model/CodigoSegurancaSMSRequest} request request
     * @param {module:api/NotificacaoApi~validarTokenSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.validarTokenSMSUsingPOST = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request == undefined || request == null) {
        throw "Missing the required parameter 'request' when calling validarTokenSMSUsingPOST";
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
