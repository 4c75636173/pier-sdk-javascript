(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Cartao', '../model/PageCartoes', '../model/ModelDate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Cartao'), require('../model/PageCartoes'), require('../model/ModelDate'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CartaoApi = factory(root.Pier.ApiClient, root.Pier.Cartao, root.Pier.PageCartoes, root.Pier.ModelDate);
  }
}(this, function(ApiClient, Cartao, PageCartoes, ModelDate) {
  'use strict';

  /**
   * Cartao service.
   * @module api/CartaoApi
   * @version 1.1.0
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
     * Callback function to receive the result of the consultarUsingGET operation.
     * @callback module:api/CartaoApi~consultarUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cartao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite consultar as informa\u00C3\u00A7\u00C3\u00B5es b\u00C3\u00A1sicas de um determinado Cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} idCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/CartaoApi~consultarUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Cartao}
     */
    this.consultarUsingGET = function(idCartao, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling consultarUsingGET";
      }


      var pathParams = {
        'id_cartao': idCartao
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
      var returnType = Cartao;

      return this.apiClient.callApi(
        '/api/cartoes/{id_cartao}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the debloquearUsingGET operation.
     * @callback module:api/CartaoApi~debloquearUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cartao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o desbloqueio de um determinado Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite que seja desbloqueado um determinado cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} idCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/CartaoApi~debloquearUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Cartao}
     */
    this.debloquearUsingGET = function(idCartao, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling debloquearUsingGET";
      }


      var pathParams = {
        'id_cartao': idCartao
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
      var returnType = Cartao;

      return this.apiClient.callApi(
        '/api/cartoes/{id_cartao}/desbloqueio', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET operation.
     * @callback module:api/CartaoApi~listarUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCartoes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Cart\u00C3\u00B5es gerados pelo Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os cart\u00C3\u00B5es existentes na base do emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {Integer} opts.idStatusCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id).
     * @param {Integer} opts.idEstagioCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Est\u00C3\u00A1gio de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {Integer} opts.idConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o cart\u00C3\u00A3o pertence (id).
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o cart\u00C3\u00A3o pertence (id)
     * @param {Integer} opts.idProduto C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto a qual o cart\u00C3\u00A3o pertence (id).
     * @param {Integer} opts.portador Indica qual \u00C3\u00A9 a rela\u00C3\u00A7\u00C3\u00A3o do portador do cart\u00C3\u00A3o com a conta. Quando &#39;1&#39;, corresponde ao seu titular. Quando diferente disso, corresponde a um cart\u00C3\u00A3o adicional.
     * @param {String} opts.numeroCartao Apresenta o n\u00C3\u00BAmero do cart\u00C3\u00A3o.
     * @param {String} opts.nomeImpresso Apresenta o nome impresso no cart\u00C3\u00A3o.
     * @param {module:model/ModelDate} opts.dataGeracao Apresenta a data em que o cart\u00C3\u00A3o foi gerado.
     * @param {module:model/ModelDate} opts.dataStatusCartao Apresenta a data em que o idStatusCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
     * @param {module:model/ModelDate} opts.dataEstagioCartao Apresenta a data em que o idEstagioCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
     * @param {String} opts.dataValidade Apresenta a data de validade do cart\u00C3\u00A3o em formato MMAAAA, quando houver.
     * @param {module:model/ModelDate} opts.dataImpressao Apresenta a data em que o cart\u00C3\u00A3o fora impresso, caso impress\u00C3\u00A3o em loja, ou a data em que ele fora inclu\u00C3\u00ADdo no arquivo para impress\u00C3\u00A3o via gr\u00C3\u00A1fica.
     * @param {String} opts.arquivoImpressao Apresenta o nome do arquivo onde o cart\u00C3\u00A3o fora inclu\u00C3\u00ADdo para impress\u00C3\u00A3o por uma gr\u00C3\u00A1fica, quando houver.
     * @param {Integer} opts.flagImpressaoOrigemComercial Quando ativa, indica que o cart\u00C3\u00A3o fora impresso na Origem Comercial.
     * @param {Integer} opts.flagProvisorio Quando ativa, indica que o cart\u00C3\u00A3o \u00C3\u00A9 provis\u00C3\u00B3rio. Ou seja, \u00C3\u00A9 um cart\u00C3\u00A3o para uso tempor\u00C3\u00A1rio quando se deseja permitir que o cliente transacione sem que ele tenha recebido um cart\u00C3\u00A3o definitivo.
     * @param {String} opts.codigoDesbloqueio Apresenta um c\u00C3\u00B3digo espec\u00C3\u00ADfico para ser utilizado como vari\u00C3\u00A1vel no processo de desbloqueio do cart\u00C3\u00A3o para emissores que querem usar esta funcionalidade.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/CartaoApi~listarUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCartoes}
     */
    this.listarUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'idStatusCartao': opts['idStatusCartao'],
        'idEstagioCartao': opts['idEstagioCartao'],
        'idConta': opts['idConta'],
        'idPessoa': opts['idPessoa'],
        'idProduto': opts['idProduto'],
        'portador': opts['portador'],
        'numeroCartao': opts['numeroCartao'],
        'nomeImpresso': opts['nomeImpresso'],
        'dataGeracao': opts['dataGeracao'],
        'dataStatusCartao': opts['dataStatusCartao'],
        'dataEstagioCartao': opts['dataEstagioCartao'],
        'dataValidade': opts['dataValidade'],
        'dataImpressao': opts['dataImpressao'],
        'arquivoImpressao': opts['arquivoImpressao'],
        'flagImpressaoOrigemComercial': opts['flagImpressaoOrigemComercial'],
        'flagProvisorio': opts['flagProvisorio'],
        'codigoDesbloqueio': opts['codigoDesbloqueio'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCartoes;

      return this.apiClient.callApi(
        '/api/cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
