(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/FaqResponse', '../model/PageFaqResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FaqResponse'), require('../model/PageFaqResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagfaqApi = factory(root.Pier.ApiClient, root.Pier.FaqResponse, root.Pier.PageFaqResponse);
  }
}(this, function(ApiClient, FaqResponse, PageFaqResponse) {
  'use strict';

  /**
   * globaltagfaq service.
   * @module api/GlobaltagfaqApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagfaqApi. 
   * @alias module:api/GlobaltagfaqApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the adicionarUsingPOST operation.
     * @callback module:api/GlobaltagfaqApi~adicionarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FaqResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{faq_resource_adicionar}}}
     * {{{faq_resource_adicionar_notes}}}
     * @param {String} pergunta {{{faq_persist_pergunta_value}}}
     * @param {String} resposta {{{faq_persist_resposta_value}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.relevancia {{{faq_persist_relevancia_value}}}
     * @param {String} opts.plataforma {{{faq_persist_plataforma_value}}}
     * @param {String} opts.categoria {{{faq_persist_categoria_value}}}
     * @param {module:model/String} opts.status {{{faq_persist_status_value}}}
     * @param {module:api/GlobaltagfaqApi~adicionarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FaqResponse}
     */
    this.adicionarUsingPOST = function(pergunta, resposta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'pergunta' is set
      if (pergunta == undefined || pergunta == null) {
        throw "Missing the required parameter 'pergunta' when calling adicionarUsingPOST";
      }

      // verify the required parameter 'resposta' is set
      if (resposta == undefined || resposta == null) {
        throw "Missing the required parameter 'resposta' when calling adicionarUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
        'pergunta': pergunta,
        'resposta': resposta,
        'relevancia': opts['relevancia'],
        'plataforma': opts['plataforma'],
        'categoria': opts['categoria'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FaqResponse;

      return this.apiClient.callApi(
        '/api/faqs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT7 operation.
     * @callback module:api/GlobaltagfaqApi~alterarUsingPUT7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/FaqResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{faq_resource_alterar}}}
     * {{{faq_resource_alterar_notes}}}
     * @param {Integer} id {{{faq_resource_alterar_param_id_faq}}}
     * @param {String} pergunta {{{faq_persist_pergunta_value}}}
     * @param {String} resposta {{{faq_persist_resposta_value}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.relevancia {{{faq_persist_relevancia_value}}}
     * @param {String} opts.plataforma {{{faq_persist_plataforma_value}}}
     * @param {String} opts.categoria {{{faq_persist_categoria_value}}}
     * @param {module:model/String} opts.status {{{faq_persist_status_value}}}
     * @param {module:api/GlobaltagfaqApi~alterarUsingPUT7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FaqResponse}
     */
    this.alterarUsingPUT7 = function(id, pergunta, resposta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT7";
      }

      // verify the required parameter 'pergunta' is set
      if (pergunta == undefined || pergunta == null) {
        throw "Missing the required parameter 'pergunta' when calling alterarUsingPUT7";
      }

      // verify the required parameter 'resposta' is set
      if (resposta == undefined || resposta == null) {
        throw "Missing the required parameter 'resposta' when calling alterarUsingPUT7";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'pergunta': pergunta,
        'resposta': resposta,
        'relevancia': opts['relevancia'],
        'plataforma': opts['plataforma'],
        'categoria': opts['categoria'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FaqResponse;

      return this.apiClient.callApi(
        '/api/faqs/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET23 operation.
     * @callback module:api/GlobaltagfaqApi~consultarUsingGET23Callback
     * @param {String} error Error message, if any.
     * @param {module:model/FaqResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{faq_resource_consultar}}}
     * {{{faq_resource_consultar_notes}}}
     * @param {Integer} id {{{faq_resource_consultar_param_id_faq}}}
     * @param {module:api/GlobaltagfaqApi~consultarUsingGET23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FaqResponse}
     */
    this.consultarUsingGET23 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET23";
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
      var returnType = FaqResponse;

      return this.apiClient.callApi(
        '/api/faqs/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET27 operation.
     * @callback module:api/GlobaltagfaqApi~listarUsingGET27Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageFaqResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{faq_resource_listar}}}
     * {{{faq_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idFaq {{{faq_request_id_faq_value}}}
     * @param {String} opts.pergunta {{{faq_request_pergunta_value}}}
     * @param {String} opts.resposta {{{faq_request_resposta_value}}}
     * @param {Integer} opts.relevancia {{{faq_request_relevancia_value}}}
     * @param {String} opts.plataforma {{{faq_request_plataforma_value}}}
     * @param {String} opts.categoria {{{faq_request_categoria_value}}}
     * @param {module:model/String} opts.status {{{faq_request_status_value}}}
     * @param {module:api/GlobaltagfaqApi~listarUsingGET27Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageFaqResponse}
     */
    this.listarUsingGET27 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idFaq': opts['idFaq'],
        'pergunta': opts['pergunta'],
        'resposta': opts['resposta'],
        'relevancia': opts['relevancia'],
        'plataforma': opts['plataforma'],
        'categoria': opts['categoria'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageFaqResponse;

      return this.apiClient.callApi(
        '/api/faqs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
