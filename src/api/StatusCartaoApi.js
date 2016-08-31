(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/StatusCartao', '../model/ListaStatusCartoes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/StatusCartao'), require('../model/ListaStatusCartoes'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.StatusCartaoApi = factory(root.Pier.ApiClient, root.Pier.StatusCartao, root.Pier.ListaStatusCartoes);
  }
}(this, function(ApiClient, StatusCartao, ListaStatusCartoes) {
  'use strict';

  /**
   * StatusCartao service.
   * @module api/StatusCartaoApi
   * @version 1.1.0
   */

  /**
   * Constructs a new StatusCartaoApi. 
   * @alias module:api/StatusCartaoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the consultarStatusCartaoUsingGET operation.
     * @callback module:api/StatusCartaoApi~consultarStatusCartaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusCartao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Status Cart\u00C3\u00A3o 
     * Este m\u00C3\u00A9todo permite consultar os par\u00C3\u00A2metros de um determinado Status de Cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).  
     * @param {Integer} idStatusCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Est\u00C3\u00A1gio de Entrega do Cart\u00C3\u00A3o (id).
     * @param {module:api/StatusCartaoApi~consultarStatusCartaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/StatusCartao}
     */
    this.consultarStatusCartaoUsingGET = function(idStatusCartao, callback) {
      var postBody = null;

      // verify the required parameter 'idStatusCartao' is set
      if (idStatusCartao == undefined || idStatusCartao == null) {
        throw "Missing the required parameter 'idStatusCartao' when calling consultarStatusCartaoUsingGET";
      }


      var pathParams = {
        'id_status_cartao': idStatusCartao
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
      var returnType = StatusCartao;

      return this.apiClient.callApi(
        '/api/status-cartoes/{id_status_cartao}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarStatusCartoesUsingGET operation.
     * @callback module:api/StatusCartaoApi~listarStatusCartoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListaStatusCartoes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as op\u00C3\u00A7\u00C3\u00B5es de Status do Cart\u00C3\u00A3o 
     * Este m\u00C3\u00A9todo permite que sejam listadas as possibilidades de Status que podem ser atribu\u00C3\u00ADdas aos Cart\u00C3\u00B5es.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id) 
     * @param {String} opts.nome Nome atribu\u00C3\u00ADdo ao Status de Entrega do Cart\u00C3\u00A3o.
     * @param {Integer} opts.flagAlteraStatus Quando ativa, indica que ao ser atribu\u00C3\u00ADdo um idStatusCartao com essa caracter\u00C3\u00ADstica, o cart\u00C3\u00A3o ter\u00C3\u00A1 o seu idStatusCartao alterado para o que fora escolhido. Caso contr\u00C3\u00A1rio, o idStatusCartao s\u00C3\u00B3 ser\u00C3\u00A1 alterado ap\u00C3\u00B3s o desbloqueio de um novo cart\u00C3\u00A3o do mesmo Portador e Conta.
     * @param {Integer} opts.flagCancelaNoDesbloqueio Quando ativa, indica que o cart\u00C3\u00A3o ativo que o portador possuir na mesma conta do cart\u00C3\u00A3o a ser desbloqueado, e que o status dele possua essa caracter\u00C3\u00ADstica, dever\u00C3\u00A1 ser cancelado quando um novo cart\u00C3\u00A3o for desbloqueado.
     * @param {Integer} opts.idStatusDestinoDesbloqueio Indica qual o idStatusCartao que que ser\u00C3\u00A1 atribu\u00C3\u00ADdo aos cart\u00C3\u00B5es que forem cancelados devido ao desbloqueio de um novo cart\u00C3\u00A3o.
     * @param {Integer} opts.flagCancelaConta Quando ativa, indica que cart\u00C3\u00B5es que tiverem um idStatusCartao atribu\u00C3\u00ADdo com essa caracter\u00C3\u00ADstica, e tal cart\u00C3\u00A3o seja de um titular (portador = 1), ter\u00C3\u00A3o a conta a qual o cart\u00C3\u00A3o pertence cancelada.
     * @param {Integer} opts.idStatusDestinoConta Indica qual o idStatusCartao que ser\u00C3\u00A1 atribu\u00C3\u00ADdo a conta, caso ela seja cancelada devido ao bloqueio de um cart\u00C3\u00A3o quando for utilizado um idStatusCartao no processo de Bloqueio que possua essa caracter\u00C3\u00ADstica.
     * @param {Integer} opts.flagCobraTarifa Quando ativa, indica que cart\u00C3\u00B5es que tiverem um idStatusCartao atribu\u00C3\u00ADdo com essa caracter\u00C3\u00ADstica, incluir\u00C3\u00A3o a cobran\u00C3\u00A7a de uma tarifa para a conta de acordo com os valores definidos nos par\u00C3\u00A2metros do emissor.
     * @param {Integer} opts.flagReemiteCartao Quando ativa, indica que cart\u00C3\u00B5es que tiverem este status atribu\u00C3\u00ADdo ter\u00C3\u00A3o um novo cart\u00C3\u00A3o gerado para o portador, para a mesma conta, automaticamente.
     * @param {Integer} opts.flagEmiteProvisorio Quando ativa, indica que poder\u00C3\u00A1 ser criado um novo cart\u00C3\u00A3o provis\u00C3\u00B3rio para o portador.
     * @param {Integer} opts.flagCadastroNovaSenha Quando ativa, indica que a senha cadastrada ser\u00C3\u00A1 exclu\u00C3\u00ADda no momento do Bloqueio do cart\u00C3\u00A3o com um idStatusCartao que possua essa caracter\u00C3\u00ADstica, sendo ent\u00C3\u00A3o necess\u00C3\u00A1rio o cadastro de uma nova senha.
     * @param {Integer} opts.flagOrigemTransferencia Quando ativa, indica que Cart\u00C3\u00B5es com este idStatusCartao podem realizar a transfer\u00C3\u00AAncia de cr\u00C3\u00A9ditos/d\u00C3\u00A9bitos para outros cart\u00C3\u00B5es.
     * @param {Integer} opts.flagDestinoTransferencia Quando ativa, indica que Cart\u00C3\u00B5es com este idStatusCartao podem receber transfer\u00C3\u00AAncias de cr\u00C3\u00A9ditos/d\u00C3\u00A9bitos oriundos de outros cart\u00C3\u00B5es.
     * @param {Integer} opts.flagExcecaoBandeira Quando ativa, indica que os Cart\u00C3\u00B5es que tiverem este idStatusCartao atribu\u00C3\u00ADdo dever\u00C3\u00A3o ter a respectiva informa\u00C3\u00A7\u00C3\u00A3o de mudan\u00C3\u00A7a de status inclu\u00C3\u00ADda no arquivo de exce\u00C3\u00A7\u00C3\u00A3o da Bandeira, a fim de manter atualizado o cadastro do cart\u00C3\u00A3o nela para nortear o que fazer com as transa\u00C3\u00A7\u00C3\u00B5es quando o autorizador estiver indispon\u00C3\u00ADvel.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/StatusCartaoApi~listarStatusCartoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ListaStatusCartoes}
     */
    this.listarStatusCartoesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'nome': opts['nome'],
        'flagAlteraStatus': opts['flagAlteraStatus'],
        'flagCancelaNoDesbloqueio': opts['flagCancelaNoDesbloqueio'],
        'idStatusDestinoDesbloqueio': opts['idStatusDestinoDesbloqueio'],
        'flagCancelaConta': opts['flagCancelaConta'],
        'idStatusDestinoConta': opts['idStatusDestinoConta'],
        'flagCobraTarifa': opts['flagCobraTarifa'],
        'flagReemiteCartao': opts['flagReemiteCartao'],
        'flagEmiteProvisorio': opts['flagEmiteProvisorio'],
        'flagCadastroNovaSenha': opts['flagCadastroNovaSenha'],
        'flagOrigemTransferencia': opts['flagOrigemTransferencia'],
        'flagDestinoTransferencia': opts['flagDestinoTransferencia'],
        'flagExcecaoBandeira': opts['flagExcecaoBandeira'],
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
      var returnType = ListaStatusCartoes;

      return this.apiClient.callApi(
        '/api/status-cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
