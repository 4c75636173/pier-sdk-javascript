(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ConfiguracaoEmailResponse', '../model/ConfiguracaoEmailPersist', '../model/TemplateNotificacaoDetalheResponse', '../model/NotificacaoSMSResponse', '../model/CodigoSegurancaResponse', '../model/CodigoSegurancaSMSPersist', '../model/PageConfiguracaoEmailResponse', '../model/PageCodigoSegurancaResponse', '../model/PagePushResponse', '../model/PageSMSResponse', '../model/PageTemplateNotificacaoResponse', '../model/NotificacaoEmailRequest', '../model/PushFCMGCMPersistValue', '../model/NotificacaoResponse', '../model/PushAPNSPersistValue', '../model/SMSPersistValue', '../model/CodigoSegurancaEMAILPersist', '../model/CodigoSegurancaSMSRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ConfiguracaoEmailResponse'), require('../model/ConfiguracaoEmailPersist'), require('../model/TemplateNotificacaoDetalheResponse'), require('../model/NotificacaoSMSResponse'), require('../model/CodigoSegurancaResponse'), require('../model/CodigoSegurancaSMSPersist'), require('../model/PageConfiguracaoEmailResponse'), require('../model/PageCodigoSegurancaResponse'), require('../model/PagePushResponse'), require('../model/PageSMSResponse'), require('../model/PageTemplateNotificacaoResponse'), require('../model/NotificacaoEmailRequest'), require('../model/PushFCMGCMPersistValue'), require('../model/NotificacaoResponse'), require('../model/PushAPNSPersistValue'), require('../model/SMSPersistValue'), require('../model/CodigoSegurancaEMAILPersist'), require('../model/CodigoSegurancaSMSRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagnotificacaoApi = factory(root.Pier.ApiClient, root.Pier.ConfiguracaoEmailResponse, root.Pier.ConfiguracaoEmailPersist, root.Pier.TemplateNotificacaoDetalheResponse, root.Pier.NotificacaoSMSResponse, root.Pier.CodigoSegurancaResponse, root.Pier.CodigoSegurancaSMSPersist, root.Pier.PageConfiguracaoEmailResponse, root.Pier.PageCodigoSegurancaResponse, root.Pier.PagePushResponse, root.Pier.PageSMSResponse, root.Pier.PageTemplateNotificacaoResponse, root.Pier.NotificacaoEmailRequest, root.Pier.PushFCMGCMPersistValue, root.Pier.NotificacaoResponse, root.Pier.PushAPNSPersistValue, root.Pier.SMSPersistValue, root.Pier.CodigoSegurancaEMAILPersist, root.Pier.CodigoSegurancaSMSRequest);
  }
}(this, function(ApiClient, ConfiguracaoEmailResponse, ConfiguracaoEmailPersist, TemplateNotificacaoDetalheResponse, NotificacaoSMSResponse, CodigoSegurancaResponse, CodigoSegurancaSMSPersist, PageConfiguracaoEmailResponse, PageCodigoSegurancaResponse, PagePushResponse, PageSMSResponse, PageTemplateNotificacaoResponse, NotificacaoEmailRequest, PushFCMGCMPersistValue, NotificacaoResponse, PushAPNSPersistValue, SMSPersistValue, CodigoSegurancaEMAILPersist, CodigoSegurancaSMSRequest) {
  'use strict';

  /**
   * globaltagnotificacao service.
   * @module api/GlobaltagnotificacaoApi
   * @version 2.66.1
   */

  /**
   * Constructs a new GlobaltagnotificacaoApi. 
   * @alias module:api/GlobaltagnotificacaoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarConfiguracaoUsingPUT operation.
     * @callback module:api/GlobaltagnotificacaoApi~alterarConfiguracaoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{email_resource_alterar_configuracao}}}
     * {{{email_resource_alterar_configuracao_notes}}}
     * @param {Integer} id {{{email_resource_alterar_configuracao_param_id}}}
     * @param {module:model/ConfiguracaoEmailPersist} persist persist
     * @param {module:api/GlobaltagnotificacaoApi~alterarConfiguracaoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~alterarTemplateNotificacaoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateNotificacaoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{notificacao_resource_alterar_template_notificacao}}}
     * {{{notificacao_resource_alterar_template_notificacao_notes}}}
     * @param {Integer} id {{{notificacao_resource_alterar_template_notificacao_param_id}}}
     * @param {String} conteudo {{{notificacao_resource_alterar_template_notificacao_param_conteudo}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idConfiguracaoEmail {{{template_notificacao_persist_id_configuracao_email_value}}}
     * @param {module:model/String} opts.tipoLayout {{{template_notificacao_persist_tipo_layout_value}}}
     * @param {module:model/String} opts.tipoNotificacao {{{template_notificacao_persist_tipo_notificacao_value}}}
     * @param {String} opts.remetente {{{template_notificacao_persist_remetente_value}}}
     * @param {String} opts.assunto {{{template_notificacao_persist_assunto_value}}}
     * @param {Boolean} opts.templatePadrao {{{template_notificacao_persist_template_padrao_value}}}
     * @param {module:api/GlobaltagnotificacaoApi~alterarTemplateNotificacaoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~atualizarSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoSMSResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{notificacao_resource_atualizar_s_m_s}}}
     * {{{notificacao_resource_atualizar_s_m_s_notes}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.nsu {{{notificacao_resource_atualizar_s_m_s_param_nsu}}}
     * @param {String} opts.status {{{notificacao_resource_atualizar_s_m_s_param_status}}}
     * @param {String} opts.data {{{notificacao_resource_atualizar_s_m_s_param_data}}}
     * @param {String} opts.textoStatus {{{notificacao_resource_atualizar_s_m_s_param_texto_status}}}
     * @param {String} opts.operadora {{{notificacao_resource_atualizar_s_m_s_param_operadora}}}
     * @param {module:api/GlobaltagnotificacaoApi~atualizarSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~consultarConfiguracaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{email_resource_consultar_configuracao}}}
     * {{{email_resource_consultar_configuracao_notes}}}
     * @param {Integer} id {{{email_resource_consultar_configuracao_param_id}}}
     * @param {module:api/GlobaltagnotificacaoApi~consultarConfiguracaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~consultarPorEmailUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CodigoSegurancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{codigo_seguranca_resource_consultar_por_email}}}
     * {{{codigo_seguranca_resource_consultar_por_email_notes}}}
     * @param {Integer} id {{{codigo_seguranca_resource_consultar_por_email_param_id}}}
     * @param {module:api/GlobaltagnotificacaoApi~consultarPorEmailUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~consultarPorSMSUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CodigoSegurancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{codigo_seguranca_resource_consultar_por_s_m_s}}}
     * {{{codigo_seguranca_resource_consultar_por_s_m_s_notes}}}
     * @param {Integer} id {{{codigo_seguranca_resource_consultar_por_s_m_s_param_id}}}
     * @param {module:api/GlobaltagnotificacaoApi~consultarPorSMSUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~consultarTemplateNotificacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateNotificacaoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{notificacao_resource_consultar_template_notificacao}}}
     * {{{notificacao_resource_consultar_template_notificacao_notes}}}
     * @param {Integer} id {{{notificacao_resource_consultar_template_notificacao_param_id}}}
     * @param {module:api/GlobaltagnotificacaoApi~consultarTemplateNotificacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~gerarTokenEMAILUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{codigo_seguranca_resource_gerar_token_e_m_a_i_l}}}
     * {{{codigo_seguranca_resource_gerar_token_e_m_a_i_l_notes}}}
     * @param {String} email email
     * @param {module:api/GlobaltagnotificacaoApi~gerarTokenEMAILUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~gerarTokenSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{codigo_seguranca_resource_gerar_token_s_m_s}}}
     * {{{codigo_seguranca_resource_gerar_token_s_m_s_notes}}}
     * @param {module:model/CodigoSegurancaSMSPersist} persist persist
     * @param {module:api/GlobaltagnotificacaoApi~gerarTokenSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~listarConfiguracaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageConfiguracaoEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{email_resource_listar_configuracao}}}
     * {{{email_resource_listar_configuracao_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagnotificacaoApi~listarConfiguracaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~listarPorEmailUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCodigoSegurancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{codigo_seguranca_resource_listar_por_email}}}
     * {{{codigo_seguranca_resource_listar_por_email_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagnotificacaoApi~listarPorEmailUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~listarPorSMSUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCodigoSegurancaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{codigo_seguranca_resource_listar_por_s_m_s}}}
     * {{{codigo_seguranca_resource_listar_por_s_m_s_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagnotificacaoApi~listarPorSMSUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~listarPushUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePushResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{notificacao_resource_listar_push}}}
     * {{{notificacao_resource_listar_push_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.dataEnvio {{{notificacao_push_request_data_envio_value}}}
     * @param {module:model/String} opts.tipoEvento {{{notificacao_push_request_tipo_evento_value}}}
     * @param {module:model/String} opts.status {{{notificacao_push_request_status_value}}}
     * @param {module:model/String} opts.plataforma {{{notificacao_push_request_plataforma_value}}}
     * @param {String} opts.protocolo {{{notificacao_push_request_protocolo_value}}}
     * @param {module:api/GlobaltagnotificacaoApi~listarPushUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~listarSMSUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageSMSResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{notificacao_resource_listar_s_m_s}}}
     * {{{notificacao_resource_listar_s_m_s_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {String} opts.dataInclusao {{{notificacao_s_m_s_request_data_inclusao_value}}}
     * @param {module:model/String} opts.tipoEvento {{{notificacao_s_m_s_request_tipo_evento_value}}}
     * @param {module:model/String} opts.status {{{notificacao_s_m_s_request_status_value}}}
     * @param {String} opts.operadora {{{notificacao_s_m_s_request_operadora_value}}}
     * @param {String} opts.protocolo {{{notificacao_s_m_s_request_protocolo_value}}}
     * @param {Integer} opts.nsu {{{notificacao_s_m_s_request_nsu_value}}}
     * @param {module:api/GlobaltagnotificacaoApi~listarSMSUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~listarTemplateNotificacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTemplateNotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{notificacao_resource_listar_template_notificacao}}}
     * {{{notificacao_resource_listar_template_notificacao_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagnotificacaoApi~listarTemplateNotificacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~listarTiposLayoutsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{enum_resource_listar_tipos_layouts}}}
     * {{{enum_resource_listar_tipos_layouts_notes}}}
     * @param {module:api/GlobaltagnotificacaoApi~listarTiposLayoutsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~notificacaoEmailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{notificacao_resource_notificacao_email}}}
     * {{{notificacao_resource_notificacao_email_notes}}}
     * @param {module:model/NotificacaoEmailRequest} request request
     * @param {module:api/GlobaltagnotificacaoApi~notificacaoEmailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~reenviarTokenSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{codigo_seguranca_resource_reenviar_token_s_m_s}}}
     * {{{codigo_seguranca_resource_reenviar_token_s_m_s_notes}}}
     * @param {module:model/CodigoSegurancaSMSPersist} persist persist
     * @param {module:api/GlobaltagnotificacaoApi~reenviarTokenSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~responderSMSGetUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoSMSResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{notificacao_resource_responder_s_m_s_get}}}
     * {{{notificacao_resource_responder_s_m_s_get_notes}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.nsu {{{notificacao_resource_responder_s_m_s_get_param_nsu}}}
     * @param {String} opts.data {{{notificacao_resource_responder_s_m_s_get_param_data}}}
     * @param {String} opts.resposta {{{notificacao_resource_responder_s_m_s_get_param_resposta}}}
     * @param {module:api/GlobaltagnotificacaoApi~responderSMSGetUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~salvarConfiguracaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConfiguracaoEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{email_resource_salvar_configuracao}}}
     * {{{email_resource_salvar_configuracao_notes}}}
     * @param {module:model/ConfiguracaoEmailPersist} persist persist
     * @param {module:api/GlobaltagnotificacaoApi~salvarConfiguracaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~salvarPushFCMUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{notificacao_resource_salvar_push_f_c_m}}}
     * {{{notificacao_resource_salvar_push_f_c_m_notes}}}
     * @param {Array.<module:model/PushFCMGCMPersistValue>} pushPersists pushPersists
     * @param {module:api/GlobaltagnotificacaoApi~salvarPushFCMUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~salvarPushGCMUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{notificacao_resource_salvar_push_g_c_m}}}
     * {{{notificacao_resource_salvar_push_g_c_m_notes}}}
     * @param {Array.<module:model/PushFCMGCMPersistValue>} pushPersists pushPersists
     * @param {module:api/GlobaltagnotificacaoApi~salvarPushGCMUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~salvarPushUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{notificacao_resource_salvar_push}}}
     * {{{notificacao_resource_salvar_push_notes}}}
     * @param {Array.<module:model/PushAPNSPersistValue>} pushPersists pushPersists
     * @param {module:api/GlobaltagnotificacaoApi~salvarPushUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~salvarSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{notificacao_resource_salvar_s_m_s}}}
     * {{{notificacao_resource_salvar_s_m_s_notes}}}
     * @param {Array.<module:model/SMSPersistValue>} listaSMS listaSMS
     * @param {module:api/GlobaltagnotificacaoApi~salvarSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~salvarTemplateNotificacaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateNotificacaoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{notificacao_resource_salvar_template_notificacao}}}
     * {{{notificacao_resource_salvar_template_notificacao_notes}}}
     * @param {String} conteudo {{{notificacao_resource_salvar_template_notificacao_param_conteudo}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idConfiguracaoEmail {{{template_notificacao_persist_id_configuracao_email_value}}}
     * @param {module:model/String} opts.tipoLayout {{{template_notificacao_persist_tipo_layout_value}}}
     * @param {module:model/String} opts.tipoNotificacao {{{template_notificacao_persist_tipo_notificacao_value}}}
     * @param {String} opts.remetente {{{template_notificacao_persist_remetente_value}}}
     * @param {String} opts.assunto {{{template_notificacao_persist_assunto_value}}}
     * @param {Boolean} opts.templatePadrao {{{template_notificacao_persist_template_padrao_value}}}
     * @param {module:api/GlobaltagnotificacaoApi~salvarTemplateNotificacaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~validarTokenEMAILUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{codigo_seguranca_resource_validar_token_e_m_a_i_l}}}
     * {{{codigo_seguranca_resource_validar_token_e_m_a_i_l_notes}}}
     * @param {module:model/CodigoSegurancaEMAILPersist} request request
     * @param {module:api/GlobaltagnotificacaoApi~validarTokenEMAILUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagnotificacaoApi~validarTokenSMSUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{codigo_seguranca_resource_validar_token_s_m_s}}}
     * {{{codigo_seguranca_resource_validar_token_s_m_s_notes}}}
     * @param {module:model/CodigoSegurancaSMSRequest} request request
     * @param {module:api/GlobaltagnotificacaoApi~validarTokenSMSUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
