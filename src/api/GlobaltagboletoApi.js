(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/BoletoResponse', '../model/BoletoEmailRequest', '../model/BoletoRequest', '../model/PageBoletoListarResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BoletoResponse'), require('../model/BoletoEmailRequest'), require('../model/BoletoRequest'), require('../model/PageBoletoListarResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagboletoApi = factory(root.Pier.ApiClient, root.Pier.BoletoResponse, root.Pier.BoletoEmailRequest, root.Pier.BoletoRequest, root.Pier.PageBoletoListarResponse);
  }
}(this, function(ApiClient, BoletoResponse, BoletoEmailRequest, BoletoRequest, PageBoletoListarResponse) {
  'use strict';

  /**
   * globaltagboleto service.
   * @module api/GlobaltagboletoApi
   * @version 2.68.0
   */

  /**
   * Constructs a new GlobaltagboletoApi. 
   * @alias module:api/GlobaltagboletoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarUsingGET34 operation.
     * @callback module:api/GlobaltagboletoApi~consultarUsingGET34Callback
     * @param {String} error Error message, if any.
     * @param {module:model/BoletoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{boleto_resource_consultar}}}
     * {{{boleto_resource_consultar_notes}}}
     * @param {Integer} id {{{boleto_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagboletoApi~consultarUsingGET34Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BoletoResponse}
     */
    this.consultarUsingGET34 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET34";
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
      var returnType = BoletoResponse;

      return this.apiClient.callApi(
        '/api/boletos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the enviarBoletoEmailUsingPOST operation.
     * @callback module:api/GlobaltagboletoApi~enviarBoletoEmailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{boleto_resource_enviar_boleto_email}}}
     * {{{boleto_resource_enviar_boleto_email_notes}}}
     * @param {Integer} id {{{boleto_resource_enviar_boleto_param_id}}}
     * @param {module:model/BoletoEmailRequest} request request
     * @param {module:api/GlobaltagboletoApi~enviarBoletoEmailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.enviarBoletoEmailUsingPOST = function(id, request, callback) {
      var postBody = request;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling enviarBoletoEmailUsingPOST";
      }

      // verify the required parameter 'request' is set
      if (request == undefined || request == null) {
        throw "Missing the required parameter 'request' when calling enviarBoletoEmailUsingPOST";
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/boletos/{id}/enviar-email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarBoletoUsingPOST operation.
     * @callback module:api/GlobaltagboletoApi~gerarBoletoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoletoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{boleto_resource_gerar_boleto}}}
     * {{{boleto_resource_gerar_boleto_notes}}}
     * @param {module:model/BoletoRequest} boletoRequest boletoRequest
     * @param {module:api/GlobaltagboletoApi~gerarBoletoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BoletoResponse}
     */
    this.gerarBoletoUsingPOST = function(boletoRequest, callback) {
      var postBody = boletoRequest;

      // verify the required parameter 'boletoRequest' is set
      if (boletoRequest == undefined || boletoRequest == null) {
        throw "Missing the required parameter 'boletoRequest' when calling gerarBoletoUsingPOST";
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
      var returnType = BoletoResponse;

      return this.apiClient.callApi(
        '/api/boletos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET45 operation.
     * @callback module:api/GlobaltagboletoApi~listarUsingGET45Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBoletoListarResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{boleto_resource_listar}}}
     * {{{boleto_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idConta {{{boleto_listar_request_id_conta_value}}}
     * @param {String} opts.dataVencimento {{{boleto_listar_request_data_vencimento_value}}}
     * @param {Number} opts.valorBoleto {{{boleto_listar_request_valor_value}}}
     * @param {Integer} opts.idTipoBoleto {{{boleto_listar_request_id_tipo_boleto_value}}}
     * @param {module:api/GlobaltagboletoApi~listarUsingGET45Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageBoletoListarResponse}
     */
    this.listarUsingGET45 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idConta': opts['idConta'],
        'dataVencimento': opts['dataVencimento'],
        'valorBoleto': opts['valorBoleto'],
        'idTipoBoleto': opts['idTipoBoleto']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageBoletoListarResponse;

      return this.apiClient.callApi(
        '/api/boletos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the registrarBoletoUsingPOST operation.
     * @callback module:api/GlobaltagboletoApi~registrarBoletoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoletoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{registro_cobranca_resource_registrar_boleto}}}
     * {{{registro_cobranca_resource_registrar_boleto_notes}}}
     * @param {Integer} id {{{registro_cobranca_resource_registrar_boleto_param_id_boleto}}}
     * @param {module:api/GlobaltagboletoApi~registrarBoletoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BoletoResponse}
     */
    this.registrarBoletoUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling registrarBoletoUsingPOST";
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
      var returnType = BoletoResponse;

      return this.apiClient.callApi(
        '/api/boletos/{id}/registrar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the visualizarBoletoUsingGET operation.
     * @callback module:api/GlobaltagboletoApi~visualizarBoletoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{boleto_resource_visualizar_boleto}}}
     * {{{boleto_resource_visualizar_boleto_notes}}}
     * @param {Integer} id {{{boleto_resource_visualizar_boleto_param_id}}}
     * @param {module:api/GlobaltagboletoApi~visualizarBoletoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.visualizarBoletoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling visualizarBoletoUsingGET";
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
      var accepts = ['application/pdf'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/api/boletos/{id}/arquivo.pdf', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
