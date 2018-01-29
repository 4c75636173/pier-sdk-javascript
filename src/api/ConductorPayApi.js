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
    root.Pier.ConductorPayApi = factory(root.Pier.ApiClient, root.Pier.CartaoPayAtualizarChaveResponse, root.Pier.CartaoPayUpdate, root.Pier.CartaoPayResponse, root.Pier.CartaoPayConfirmarChaveResponse, root.Pier.CartaoPayKeyUpdate, root.Pier.CartaoPayDetalheResponse, root.Pier.PageCartaoPayResponse, root.Pier.CartaoPayCadastroResponse, root.Pier.CartaoPayPersist);
  }
}(this, function(ApiClient, CartaoPayAtualizarChaveResponse, CartaoPayUpdate, CartaoPayResponse, CartaoPayConfirmarChaveResponse, CartaoPayKeyUpdate, CartaoPayDetalheResponse, PageCartaoPayResponse, CartaoPayCadastroResponse, CartaoPayPersist) {
  'use strict';

  /**
   * ConductorPay service.
   * @module api/ConductorPayApi
   * @version 2.50.15
   */

  /**
   * Constructs a new ConductorPayApi. 
   * @alias module:api/ConductorPayApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the atualizarChaveUsingPOST operation.
     * @callback module:api/ConductorPayApi~atualizarChaveUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoPayAtualizarChaveResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualiza a chave de gera\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite atualizar a chave de gera\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00A3o de um dispositivo a partir do seu identificador (id).
     * @param {String} deviceId Device id criptografado
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id).
     * @param {module:api/ConductorPayApi~atualizarChaveUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the atualizarUsingPUT operation.
     * @callback module:api/ConductorPayApi~atualizarUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoPayResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualiza os dados do cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite atualizar os dados do cart\u00C3\u00A3o tokenizados de um dispositivo a partir do seu identificador (id).
     * @param {String} deviceId Device id criptografado
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id).
     * @param {module:model/CartaoPayUpdate} update update
     * @param {module:api/ConductorPayApi~atualizarUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoPayResponse}
     */
    this.atualizarUsingPUT = function(deviceId, id, update, callback) {
      var postBody = update;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling atualizarUsingPUT";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarUsingPUT";
      }

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling atualizarUsingPUT";
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
     * @callback module:api/ConductorPayApi~confirmaAtualizacaoChaveUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoPayConfirmarChaveResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirma a atualiza\u00C3\u00A7\u00C3\u00A3o da chave de transa\u00C3\u00A7\u00C3\u00A3o
     * Este met\u00C3\u00B3do recebe confirma\u00C3\u00A7\u00C3\u00A3o de atualiza\u00C3\u00A7\u00C3\u00A3o de chave transa\u00C3\u00A7\u00C3\u00A3o.
     * @param {String} deviceId Device id criptografado
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id).
     * @param {module:model/CartaoPayKeyUpdate} update update
     * @param {module:api/ConductorPayApi~confirmaAtualizacaoChaveUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the consultarUsingGET6 operation.
     * @callback module:api/ConductorPayApi~consultarUsingGET6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoPayDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite consultar as informa\u00C3\u00A7\u00C3\u00B5es de um determinado cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {String} deviceId Device id criptografado
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id).
     * @param {module:api/ConductorPayApi~consultarUsingGET6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoPayDetalheResponse}
     */
    this.consultarUsingGET6 = function(deviceId, id, callback) {
      var postBody = null;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling consultarUsingGET6";
      }

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET6";
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
     * @callback module:api/ConductorPayApi~listarCodigosRespostaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os c\u00C3\u00B3digos de resposta dos recursos de transa\u00C3\u00A7\u00C3\u00A3o e consulta de conta
     * Este m\u00C3\u00A9todo retorna a lista dos c\u00C3\u00B3digos de resposta das transa\u00C3\u00A7\u00C3\u00B5es e consulta de saque realizada no Pay.
     * @param {module:api/ConductorPayApi~listarCodigosRespostaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ConductorPayApi~listarModosEntradaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os modos entradas
     * Este recurso permite listar os modos de entrada para transa\u00C3\u00A7\u00C3\u00A3o
     * @param {module:api/ConductorPayApi~listarModosEntradaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ConductorPayApi~listarOperacoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as opera\u00C3\u00A7\u00C3\u00B5es
     * Este recurso permite listar as opera\u00C3\u00A7\u00C3\u00B5es disponiveis de transa\u00C3\u00A7\u00C3\u00A3o
     * @param {module:api/ConductorPayApi~listarOperacoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ConductorPayApi~listarTiposTerminaisUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos de terminais
     * Este m\u00C3\u00A9todo retorna a lista dos tipos de terminais.
     * @param {module:api/ConductorPayApi~listarTiposTerminaisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ConductorPayApi~listarTiposTransacoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos de transa\u00C3\u00A7\u00C3\u00B5es
     * Este m\u00C3\u00A9todo retorna a lista dos tipos de transa\u00C3\u00A7\u00C3\u00B5es realizadas no Pay.
     * @param {module:api/ConductorPayApi~listarTiposTransacoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarUsingGET6 operation.
     * @callback module:api/ConductorPayApi~listarUsingGET6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCartaoPayResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os cart\u00C3\u00B5es cadastrados
     * Este m\u00C3\u00A9todo permite listar os cart\u00C3\u00B5es cadastrado em um dispositivo.
     * @param {Object} opts Optional parameters
     * @param {String} opts.deviceId Device id criptografado
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:model/String} opts.status Status do cart\u00C3\u00A3o tokenizado
     * @param {String} opts.numeroCartao Numero do cart\u00C3\u00A3o tokenizado
     * @param {module:api/ConductorPayApi~listarUsingGET6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCartaoPayResponse}
     */
    this.listarUsingGET6 = function(opts, callback) {
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
     * Callback function to receive the result of the salvarUsingPOST5 operation.
     * @callback module:api/ConductorPayApi~salvarUsingPOST5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoPayCadastroResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cria\u00C3\u00A7\u00C3\u00A3o de cart\u00C3\u00A3o
     * Este met\u00C3\u00B3do permite a tokeniza\u00C3\u00A7\u00C3\u00A3o de um cart\u00C3\u00A3o a partir dos seus dados impressos.
     * @param {String} deviceId Device id criptografado
     * @param {module:model/CartaoPayPersist} persist persist
     * @param {module:api/ConductorPayApi~salvarUsingPOST5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoPayCadastroResponse}
     */
    this.salvarUsingPOST5 = function(deviceId, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'deviceId' is set
      if (deviceId == undefined || deviceId == null) {
        throw "Missing the required parameter 'deviceId' when calling salvarUsingPOST5";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling salvarUsingPOST5";
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
