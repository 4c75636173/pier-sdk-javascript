(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CartaoPayAtualizarChaveResponse', '../model/CartaoPayUpdate', '../model/CartaoPayResponse', '../model/CartaoPayConfirmarChaveResponse', '../model/CartaoPayKeyUpdate', '../model/CartaoPayDetalheResponse', '../model/PageCartaoPayResponse', '../model/CartaoPayCadastroResponse', '../model/CartaoPayPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CartaoPayAtualizarChaveResponse'), require('../model/CartaoPayUpdate'), require('../model/CartaoPayResponse'), require('../model/CartaoPayConfirmarChaveResponse'), require('../model/CartaoPayKeyUpdate'), require('../model/CartaoPayDetalheResponse'), require('../model/PageCartaoPayResponse'), require('../model/CartaoPayCadastroResponse'), require('../model/CartaoPayPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagpayApi = factory(root.Pier.ApiClient, root.Pier.CartaoPayAtualizarChaveResponse, root.Pier.CartaoPayUpdate, root.Pier.CartaoPayResponse, root.Pier.CartaoPayConfirmarChaveResponse, root.Pier.CartaoPayKeyUpdate, root.Pier.CartaoPayDetalheResponse, root.Pier.PageCartaoPayResponse, root.Pier.CartaoPayCadastroResponse, root.Pier.CartaoPayPersist);
  }
}(this, function(ApiClient, CartaoPayAtualizarChaveResponse, CartaoPayUpdate, CartaoPayResponse, CartaoPayConfirmarChaveResponse, CartaoPayKeyUpdate, CartaoPayDetalheResponse, PageCartaoPayResponse, CartaoPayCadastroResponse, CartaoPayPersist) {
  'use strict';

  /**
   * globaltagpay service.
   * @module api/GlobaltagpayApi
   * @version 2.74.2
   */

  /**
   * Constructs a new GlobaltagpayApi. 
   * @alias module:api/GlobaltagpayApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the atualizarChaveUsingPOST operation.
     * @callback module:api/GlobaltagpayApi~atualizarChaveUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoPayAtualizarChaveResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_pay_resource_atualizar_chave}}}
     * {{{cartao_pay_resource_atualizar_chave_notes}}}
     * @param {String} deviceId {{{cartao_pay_resource_atualizar_chave_param_device_id}}}
     * @param {Integer} id {{{cartao_pay_resource_atualizar_chave_param_id}}}
     * @param {module:api/GlobaltagpayApi~atualizarChaveUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoPayAtualizarChaveResponse}
     */
    this.atualizarChaveUsingPOST = function(deviceId, id, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling atualizarChaveUsingPOST";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarChaveUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'device_id': deviceId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoPayAtualizarChaveResponse;

      return this.apiClient.callApi(
        '/api/cartoes-tokenizados/{id}/atualizar-chave', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the atualizarUsingPUT1 operation.
     * @callback module:api/GlobaltagpayApi~atualizarUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoPayResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_pay_resource_atualizar}}}
     * {{{cartao_pay_resource_atualizar_notes}}}
     * @param {String} deviceId {{{cartao_pay_resource_atualizar_param_device_id}}}
     * @param {Integer} id {{{cartao_pay_resource_atualizar_param_id}}}
     * @param {module:model/CartaoPayUpdate} update update
     * @param {module:api/GlobaltagpayApi~atualizarUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoPayResponse}
     */
    this.atualizarUsingPUT1 = function(deviceId, id, update, callback) {
      var postBody = update;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling atualizarUsingPUT1";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarUsingPUT1";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling atualizarUsingPUT1";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'device_id': deviceId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoPayResponse;

      return this.apiClient.callApi(
        '/api/cartoes-tokenizados/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the confirmaAtualizacaoChaveUsingPOST operation.
     * @callback module:api/GlobaltagpayApi~confirmaAtualizacaoChaveUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoPayConfirmarChaveResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_pay_resource_confirma_atualizacao_chave}}}
     * {{{cartao_pay_resource_confirma_atualizacao_chave_notes}}}
     * @param {String} deviceId {{{cartao_pay_resource_confirma_atualizacao_chave_param_device_id}}}
     * @param {Integer} id {{{cartao_pay_resource_confirma_atualizacao_chave_param_id}}}
     * @param {module:model/CartaoPayKeyUpdate} update update
     * @param {module:api/GlobaltagpayApi~confirmaAtualizacaoChaveUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoPayConfirmarChaveResponse}
     */
    this.confirmaAtualizacaoChaveUsingPOST = function(deviceId, id, update, callback) {
      var postBody = update;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling confirmaAtualizacaoChaveUsingPOST";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling confirmaAtualizacaoChaveUsingPOST";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling confirmaAtualizacaoChaveUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'device_id': deviceId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoPayConfirmarChaveResponse;

      return this.apiClient.callApi(
        '/api/cartoes-tokenizados/{id}/confirmar-chave', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET11 operation.
     * @callback module:api/GlobaltagpayApi~consultarUsingGET11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoPayDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_pay_resource_consultar}}}
     * {{{cartao_pay_resource_consultar_notes}}}
     * @param {String} deviceId {{{cartao_pay_resource_consultar_param_device_id}}}
     * @param {Integer} id {{{cartao_pay_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagpayApi~consultarUsingGET11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoPayDetalheResponse}
     */
    this.consultarUsingGET11 = function(deviceId, id, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling consultarUsingGET11";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET11";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'device_id': deviceId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoPayDetalheResponse;

      return this.apiClient.callApi(
        '/api/cartoes-tokenizados/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarCodigosRespostaUsingGET operation.
     * @callback module:api/GlobaltagpayApi~listarCodigosRespostaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{enum_pay_resource_listar_codigos_resposta}}}
     * {{{enum_pay_resource_listar_codigos_resposta_notes}}}
     * @param {module:api/GlobaltagpayApi~listarCodigosRespostaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<Object>}
     */
    this.listarCodigosRespostaUsingGET = function(callback) {
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
        '/api/codigos-resposta', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarModosEntradaUsingGET operation.
     * @callback module:api/GlobaltagpayApi~listarModosEntradaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{enum_pay_resource_listar_modos_entrada}}}
     * {{{enum_pay_resource_listar_modos_entrada_notes}}}
     * @param {module:api/GlobaltagpayApi~listarModosEntradaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<Object>}
     */
    this.listarModosEntradaUsingGET = function(callback) {
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
        '/api/modos-entrada', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarOperacoesUsingGET operation.
     * @callback module:api/GlobaltagpayApi~listarOperacoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{enum_pay_resource_listar_operacoes}}}
     * {{{enum_pay_resource_listar_operacoes_notes}}}
     * @param {module:api/GlobaltagpayApi~listarOperacoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<Object>}
     */
    this.listarOperacoesUsingGET = function(callback) {
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
        '/api/operacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTiposTerminaisUsingGET operation.
     * @callback module:api/GlobaltagpayApi~listarTiposTerminaisUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{enum_pay_resource_listar_tipos_terminais}}}
     * {{{enum_pay_resource_listar_tipos_terminais_notes}}}
     * @param {module:api/GlobaltagpayApi~listarTiposTerminaisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<Object>}
     */
    this.listarTiposTerminaisUsingGET = function(callback) {
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
        '/api/tipos-terminais', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarTiposTransacoesUsingGET operation.
     * @callback module:api/GlobaltagpayApi~listarTiposTransacoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{enum_pay_resource_listar_tipos_transacoes}}}
     * {{{enum_pay_resource_listar_tipos_transacoes_notes}}}
     * @param {module:api/GlobaltagpayApi~listarTiposTransacoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<Object>}
     */
    this.listarTiposTransacoesUsingGET = function(callback) {
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
        '/api/tipos-transacoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET11 operation.
     * @callback module:api/GlobaltagpayApi~listarUsingGET11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCartaoPayResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_pay_resource_listar}}}
     * {{{cartao_pay_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.deviceId {{{cartao_pay_resource_listar_param_device_id}}}
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:model/String} opts.status {{{cartao_pay_request_status_value}}}
     * @param {String} opts.numeroCartao {{{cartao_pay_request_numero_cartao_value}}}
     * @param {module:api/GlobaltagpayApi~listarUsingGET11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCartaoPayResponse}
     */
    this.listarUsingGET11 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'status': opts['status'],
        'numeroCartao': opts['numeroCartao']
      };
      var headerParams = {
        'device_id': opts['deviceId']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCartaoPayResponse;

      return this.apiClient.callApi(
        '/api/cartoes-tokenizados', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST6 operation.
     * @callback module:api/GlobaltagpayApi~salvarUsingPOST6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoPayCadastroResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{cartao_pay_resource_salvar}}}
     * {{{cartao_pay_resource_salvar_notes}}}
     * @param {String} deviceId {{{cartao_pay_resource_salvar_param_device_id}}}
     * @param {module:model/CartaoPayPersist} persist persist
     * @param {module:api/GlobaltagpayApi~salvarUsingPOST6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoPayCadastroResponse}
     */
    this.salvarUsingPOST6 = function(deviceId, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling salvarUsingPOST6";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST6";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'device_id': deviceId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoPayCadastroResponse;

      return this.apiClient.callApi(
        '/api/cartoes-tokenizados', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
