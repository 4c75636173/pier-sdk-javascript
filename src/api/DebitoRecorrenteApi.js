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
   * @version 2.57.0
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
     * Callback function to receive the result of the listarUsingGET16 operation.
     * @callback module:api/DebitoRecorrenteApi~listarUsingGET16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoDebitoRecorrenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os d\u00E9bitos recorrentes de uma Conta
     * A entidade D\u00E9bito Recorrente trata dos registros contratados por um determinado cliente (idConta) onde a cobran\u00E7a dele se d\u00E1 de forma cont\u00EDnua, consistindo em uma \u201Cassinatura\u201D ou pagamento de mensalidades. Isso significa que, enquanto o servi\u00E7o continuar a ser prestado, o cliente dever\u00E1 continuar realizando os pagamentos. A determina\u00E7\u00E3o de quanto tempo essa rela\u00E7\u00E3o ir\u00E1 durar \u00E9 feita em contrato. Na maioria das vezes, existe um per\u00EDodo m\u00EDnimo e, caso o servi\u00E7o seja cancelado ou o pagamento n\u00E3o seja realizado, o status do D\u00E9bito Recorrente ter\u00E1 a FlagAtivo com valor false. Assim, este m\u00E9todo lista todas as opera\u00E7\u00F5es de D\u00E9bitos Recorrentes que um determinado idConta j\u00E1 contratou, esteja ele ativo ou n\u00E3o.
     * @param {Integer} idConta C\u00F3digo de identifica\u00E7\u00E3o da Conta (id)
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idTipoDebitoRecorrente C\u00F3digo de identifica\u00E7\u00E3o do tipo de d\u00E9bito recorrente (id)
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {String} opts.dataHoraInicio Data inicio do d\u00E9bito recorrente.
     * @param {String} opts.dataHoraFim Data fim do d\u00E9bito recorrente.
     * @param {Boolean} opts.ativo Identifica se o d\u00E9bito recorrente est\u00E1 ativo.
     * @param {String} opts.dataHoraUltimoPagamento Data do \u00FAltimo pagamento efetuado.
     * @param {module:api/DebitoRecorrenteApi~listarUsingGET16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoDebitoRecorrenteResponse}
     */
    this.listarUsingGET16 = function(idConta, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling listarUsingGET16";
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
     * Callback function to receive the result of the listarUsingGET43 operation.
     * @callback module:api/DebitoRecorrenteApi~listarUsingGET43Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoDebitoRecorrenteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Tipos Debitos Recorrentes
     * Para os emissores que utilizam a entidade Debitos Recorrentes precisam previamente solicitar a Conductor o cadastro de quais Tipos eles poder\u00E3o comercializar. Por isso, este recurso tem como objetivo apresentar todos os Tipos de D\u00E9bitos Recorrentes que est\u00E3o cadastrados para um determinado Emissor, independente do status dele.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00E7\u00E3o dos registros.
     * @param {Integer} opts.page P\u00E1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00F3digo de identifica\u00E7\u00E3o do tipo de d\u00E9bito recorrente (id).
     * @param {String} opts.descricao Descri\u00E7\u00E3o do tipo de d\u00E9bito recorrente.
     * @param {Number} opts.valor Valor do tipo de d\u00E9bito recorrente.
     * @param {Boolean} opts.flagAtivo Flag que identifica se o tipo d\u00E9bito recorrente est\u00E1 ativo.
     * @param {module:api/DebitoRecorrenteApi~listarUsingGET43Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoDebitoRecorrenteResponse}
     */
    this.listarUsingGET43 = function(opts, callback) {
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
