(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PageTipoDebitoRecorrenteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageTipoDebitoRecorrenteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.DebitoRecorrenteApi = factory(root.Pier.ApiClient, root.Pier.PageTipoDebitoRecorrenteResponse);
  }
}(this, function(ApiClient, PageTipoDebitoRecorrenteResponse) {
  'use strict';

  /**
   * DebitoRecorrente service.
   * @module api/DebitoRecorrenteApi
   * @version 2.54.1
   */

  /**
   * Constructs a new DebitoRecorrenteApi. 
   * @alias module:api/DebitoRecorrenteApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the listarUsingGET15 operation.
     * @callback module:api/DebitoRecorrenteApi~listarUsingGET15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoDebitoRecorrenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os d\u00C3\u00A9bitos recorrentes de uma Conta
     * A entidade D\u00C3\u00A9bito Recorrente trata dos registros contratados por um determinado cliente (idConta) onde a cobran\u00C3\u00A7a dele se d\u00C3\u00A1 de forma cont\u00C3\u00ADnua, consistindo em uma \u00E2\u0080\u009Cassinatura\u00E2\u0080\u009D ou pagamento de mensalidades. Isso significa que, enquanto o servi\u00C3\u00A7o continuar a ser prestado, o cliente dever\u00C3\u00A1 continuar realizando os pagamentos. A determina\u00C3\u00A7\u00C3\u00A3o de quanto tempo essa rela\u00C3\u00A7\u00C3\u00A3o ir\u00C3\u00A1 durar \u00C3\u00A9 feita em contrato. Na maioria das vezes, existe um per\u00C3\u00ADodo m\u00C3\u00ADnimo e, caso o servi\u00C3\u00A7o seja cancelado ou o pagamento n\u00C3\u00A3o seja realizado, o status do D\u00C3\u00A9bito Recorrente ter\u00C3\u00A1 a FlagAtivo com valor false. Assim, este m\u00C3\u00A9todo lista todas as opera\u00C3\u00A7\u00C3\u00B5es de D\u00C3\u00A9bitos Recorrentes que um determinado idConta j\u00C3\u00A1 contratou, esteja ele ativo ou n\u00C3\u00A3o.
     * @param {Integer} idConta C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id)
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idTipoDebitoRecorrente C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de d\u00C3\u00A9bito recorrente (id)
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.dataHoraInicio Data inicio do d\u00C3\u00A9bito recorrente.
     * @param {String} opts.dataHoraFim Data fim do d\u00C3\u00A9bito recorrente.
     * @param {Boolean} opts.ativo Identifica se o d\u00C3\u00A9bito recorrente est\u00C3\u00A1 ativo.
     * @param {String} opts.dataHoraUltimoPagamento Data do \u00C3\u00BAltimo pagamento efetuado.
     * @param {module:api/DebitoRecorrenteApi~listarUsingGET15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoDebitoRecorrenteResponse}
     */
    this.listarUsingGET15 = function(idConta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling listarUsingGET15";
      }


      var pathParams = {
      };
      var queryParams = {
        'idConta': idConta,
        'idTipoDebitoRecorrente': opts['idTipoDebitoRecorrente'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'dataHoraInicio': opts['dataHoraInicio'],
        'dataHoraFim': opts['dataHoraFim'],
        'ativo': opts['ativo'],
        'dataHoraUltimoPagamento': opts['dataHoraUltimoPagamento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoDebitoRecorrenteResponse;

      return this.apiClient.callApi(
        '/api/debitos-recorrentes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET41 operation.
     * @callback module:api/DebitoRecorrenteApi~listarUsingGET41Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoDebitoRecorrenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Tipos Debitos Recorrentes
     * Para os emissores que utilizam a entidade Debitos Recorrentes precisam previamente solicitar a Conductor o cadastro de quais Tipos eles poder\u00C3\u00A3o comercializar. Por isso, este recurso tem como objetivo apresentar todos os Tipos de D\u00C3\u00A9bitos Recorrentes que est\u00C3\u00A3o cadastrados para um determinado Emissor, independente do status dele.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo de d\u00C3\u00A9bito recorrente (id).
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do tipo de d\u00C3\u00A9bito recorrente.
     * @param {Number} opts.valor Valor do tipo de d\u00C3\u00A9bito recorrente.
     * @param {Boolean} opts.flagAtivo Flag que identifica se o tipo d\u00C3\u00A9bito recorrente est\u00C3\u00A1 ativo.
     * @param {module:api/DebitoRecorrenteApi~listarUsingGET41Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoDebitoRecorrenteResponse}
     */
    this.listarUsingGET41 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'descricao': opts['descricao'],
        'valor': opts['valor'],
        'flagAtivo': opts['flagAtivo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoDebitoRecorrenteResponse;

      return this.apiClient.callApi(
        '/api/tipos-debitos-recorrentes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
