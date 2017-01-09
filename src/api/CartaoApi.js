(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/HistoricoImpressaoCartao', '../model/Cartao', '../model/LimiteDisponibilidade', '../model/Portador', '../model/PageCartoes', '../model/ModelDate', '../model/ValidaCartao'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HistoricoImpressaoCartao'), require('../model/Cartao'), require('../model/LimiteDisponibilidade'), require('../model/Portador'), require('../model/PageCartoes'), require('../model/ModelDate'), require('../model/ValidaCartao'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CartaoApi = factory(root.Pier.ApiClient, root.Pier.HistoricoImpressaoCartao, root.Pier.Cartao, root.Pier.LimiteDisponibilidade, root.Pier.Portador, root.Pier.PageCartoes, root.Pier.ModelDate, root.Pier.ValidaCartao);
  }
}(this, function(ApiClient, HistoricoImpressaoCartao, Cartao, LimiteDisponibilidade, Portador, PageCartoes, ModelDate, ValidaCartao) {
  'use strict';

  /**
   * Cartao service.
   * @module api/CartaoApi
   * @version 2.0.0
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
     * Callback function to receive the result of the alterarStatusImpressaoUsingPUT operation.
     * @callback module:api/CartaoApi~alterarStatusImpressaoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricoImpressaoCartao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a altera\u00C3\u00A7\u00C3\u00A3o do Status de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite que uma Aplica\u00C3\u00A7\u00C3\u00A3o que realize a impress\u00C3\u00A3o de cart\u00C3\u00B5es possa indicar que um determinado idCartao fora impresso ou est\u00C3\u00A1 em processo de impress\u00C3\u00A3o. Para isso, basta informar o respectivo c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id) que deseja ter seu um determinado id_status_impressao atribu\u00C3\u00ADdo a ele. Por padr\u00C3\u00A3o, cart\u00C3\u00B5es provis\u00C3\u00B3rios ou que j\u00C3\u00A1 tenham sido inclu\u00C3\u00ADdos em um arquivo para impress\u00C3\u00A3o via gr\u00C3\u00A1fica ter\u00C3\u00A3o esta requisi\u00C3\u00A7\u00C3\u00A3o negada, se utilizada.
     * @param {Integer} idCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {Integer} idStatusImpressao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status Impress\u00C3\u00A3o (Id).
     * @param {module:api/CartaoApi~alterarStatusImpressaoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/HistoricoImpressaoCartao}
     */
    this.alterarStatusImpressaoUsingPUT = function(idCartao, idStatusImpressao, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling alterarStatusImpressaoUsingPUT";
      }

      // verify the required parameter 'idStatusImpressao' is set
      if (idStatusImpressao == undefined || idStatusImpressao == null) {
        throw "Missing the required parameter 'idStatusImpressao' when calling alterarStatusImpressaoUsingPUT";
      }


      var pathParams = {
        'id_cartao': idCartao,
        'id_status_impressao': idStatusImpressao
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
      var returnType = HistoricoImpressaoCartao;

      return this.apiClient.callApi(
        '/api/cartoes/{id_cartao}/impressao/{id_status_impressao} ', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the atribuirPessoaUsingPUT operation.
     * @callback module:api/CartaoApi~atribuirPessoaUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cartao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a atribui\u00C3\u00A7\u00C3\u00A3o de um cart\u00C3\u00A3o pr\u00C3\u00A9-pago a uma pessoa.
     * Esta m\u00C3\u00A9todo tem como permite que um cart\u00C3\u00A3o de cr\u00C3\u00A9dito impresso de forma avulsa e an\u00C3\u00B4nimo seja atribu\u00C3\u00ADdo a uma pessoa para que esta passe a ser a portadora titular deste cart\u00C3\u00A3o.
     * @param {Integer} idCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id)
     * @param {Integer} idPessoa C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de uma Pessoa (id).
     * @param {module:api/CartaoApi~atribuirPessoaUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Cartao}
     */
    this.atribuirPessoaUsingPUT = function(idCartao, idPessoa, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling atribuirPessoaUsingPUT";
      }

      // verify the required parameter 'idPessoa' is set
      if (idPessoa == undefined || idPessoa == null) {
        throw "Missing the required parameter 'idPessoa' when calling atribuirPessoaUsingPUT";
      }


      var pathParams = {
        'id_cartao': idCartao
      };
      var queryParams = {
        'id_pessoa': idPessoa
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
        '/api/cartoes/{id_cartao}/atribuir-pessoa', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bloquearUsingPUT operation.
     * @callback module:api/CartaoApi~bloquearUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cartao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o bloqueio de um determinado Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite a realiza\u00C3\u00A7\u00C3\u00A3o do bloqueio (tempor\u00C3\u00A1rio) ou do cancelamento (definitivo) de um determinado cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id). Para isso, \u00C3\u00A9 preciso informar qual o motivo deste bloqueio que nada mais \u00C3\u00A9 do que atribuir um novo StatusCartao para ele dentre as op\u00C3\u00A7\u00C3\u00B5es praticadas pelo emissor.
     * @param {Integer} idCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {Integer} idStatus C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Novo Status Cart\u00C3\u00A3o.
     * @param {String} observacao Texto informando uma observa\u00C3\u00A7\u00C3\u00A3o sobre o bloqueio.
     * @param {module:api/CartaoApi~bloquearUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Cartao}
     */
    this.bloquearUsingPUT = function(idCartao, idStatus, observacao, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling bloquearUsingPUT";
      }

      // verify the required parameter 'idStatus' is set
      if (idStatus == undefined || idStatus == null) {
        throw "Missing the required parameter 'idStatus' when calling bloquearUsingPUT";
      }

      // verify the required parameter 'observacao' is set
      if (observacao == undefined || observacao == null) {
        throw "Missing the required parameter 'observacao' when calling bloquearUsingPUT";
      }


      var pathParams = {
        'id_cartao': idCartao
      };
      var queryParams = {
        'id_status': idStatus,
        'observacao': observacao
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
        '/api/cartoes/{id_cartao}/bloqueio', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarAlterarSenhaUsingPUT operation.
     * @callback module:api/CartaoApi~cadastrarAlterarSenhaUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro ou altera\u00C3\u00A7\u00C3\u00A3o da senha de um Cart\u00C3\u00A3o
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que o portador de um determinado cart\u00C3\u00A3o possa definir uma senha a sua escolha.
     * @param {Integer} idCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {String} senha Senha para ser cadastrada ou alterada.
     * @param {module:api/CartaoApi~cadastrarAlterarSenhaUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.cadastrarAlterarSenhaUsingPUT = function(idCartao, senha, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling cadastrarAlterarSenhaUsingPUT";
      }

      // verify the required parameter 'senha' is set
      if (senha == undefined || senha == null) {
        throw "Missing the required parameter 'senha' when calling cadastrarAlterarSenhaUsingPUT";
      }


      var pathParams = {
      };
      var queryParams = {
        'id_cartao': idCartao
      };
      var headerParams = {
        'senha': senha
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/cartoes/{id_cartao}/alterar-senha', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarLimiteDisponibilidadeUsingGET operation.
     * @callback module:api/CartaoApi~consultarLimiteDisponibilidadeUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LimiteDisponibilidade} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os limites do Portador do Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite consultar os Limites configurados para o Portador de um determinado Cart\u00C3\u00A3o, seja ele o titular da conta ou um adicional, a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {Integer} idCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/CartaoApi~consultarLimiteDisponibilidadeUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidade}
     */
    this.consultarLimiteDisponibilidadeUsingGET = function(idCartao, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling consultarLimiteDisponibilidadeUsingGET";
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
      var returnType = LimiteDisponibilidade;

      return this.apiClient.callApi(
        '/api/cartoes/{id_cartao}/limites-disponibilidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarPortadorUsingGET operation.
     * @callback module:api/CartaoApi~consultarPortadorUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Portador} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados do Portador do Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite consultar as informa\u00C3\u00A7\u00C3\u00B5es do Portador de um determinado Cart\u00C3\u00A3o a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {Integer} idCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/CartaoApi~consultarPortadorUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Portador}
     */
    this.consultarPortadorUsingGET = function(idCartao, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling consultarPortadorUsingGET";
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
      var returnType = Portador;

      return this.apiClient.callApi(
        '/api/cartoes/{id_cartao}/portadores', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

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
     * Callback function to receive the result of the desbloquearUsingPUT operation.
     * @callback module:api/CartaoApi~desbloquearUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cartao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o desbloqueio de um determinado Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite que seja desbloqueado um determinado cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} idCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/CartaoApi~desbloquearUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Cartao}
     */
    this.desbloquearUsingPUT = function(idCartao, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling desbloquearUsingPUT";
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
        '/api/cartoes/{id_cartao}/desbloqueio', 'PUT',
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
     * @param {String} opts.tipoPortador Apresenta o tipo do Portador do cart\u00C3\u00A3o, sendo: (&#39;T&#39;: Titular, &#39;A&#39;: Adicional).
     * @param {String} opts.numeroCartao Apresenta o n\u00C3\u00BAmero do cart\u00C3\u00A3o.
     * @param {String} opts.nomeImpresso Apresenta o nome impresso no cart\u00C3\u00A3o.
     * @param {module:model/ModelDate} opts.dataGeracao Apresenta a data em que o cart\u00C3\u00A3o foi gerado.
     * @param {module:model/ModelDate} opts.dataStatusCartao Apresenta a data em que o idStatusCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
     * @param {module:model/ModelDate} opts.dataEstagioCartao Apresenta a data em que o idEstagioCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
     * @param {String} opts.dataValidade Apresenta a data de validade do cart\u00C3\u00A3o em formato yyyy-MM, quando houver.
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
        'tipoPortador': opts['tipoPortador'],
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

    /**
     * Callback function to receive the result of the validarCartaoChipBandeiradoUsingGET operation.
     * @callback module:api/CartaoApi~validarCartaoChipBandeiradoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaCartao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite validar um Cart\u00C3\u00A3o Mastercard a partir do chip
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores validem o criptograma gerado a partir da leitura de um chip EMV de um Cart\u00C3\u00A3o Mastercard a fim de verificar a sua autenticidade.
     * @param {String} numeroCartao N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado.
     * @param {String} criptograma Criptograma do cart\u00C3\u00A3o no formato de55
     * @param {module:api/CartaoApi~validarCartaoChipBandeiradoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaCartao}
     */
    this.validarCartaoChipBandeiradoUsingGET = function(numeroCartao, criptograma, callback) {
      var postBody = null;

      // verify the required parameter 'numeroCartao' is set
      if (numeroCartao == undefined || numeroCartao == null) {
        throw "Missing the required parameter 'numeroCartao' when calling validarCartaoChipBandeiradoUsingGET";
      }

      // verify the required parameter 'criptograma' is set
      if (criptograma == undefined || criptograma == null) {
        throw "Missing the required parameter 'criptograma' when calling validarCartaoChipBandeiradoUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numeroCartao': numeroCartao,
        'criptograma': criptograma
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaCartao;

      return this.apiClient.callApi(
        '/api/cartoes/bandeirados/validar/chip', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarCartaoDigitadoBandeiradoUsingGET operation.
     * @callback module:api/CartaoApi~validarCartaoDigitadoBandeiradoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaCartao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite validar um Cart\u00C3\u00A3o bandeirado a partir dos dados Impressos
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores validem a autenticidade de um determinado Cart\u00C3\u00A3o a partir do envio dos dados sens\u00C3\u00ADveis impressos nele.
     * @param {String} numeroCartao N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado.
     * @param {String} nomePortador Nome do portador do cart\u00C3\u00A3o
     * @param {String} dataValidade Data de validade do cart\u00C3\u00A3o no formato yyyy-MM
     * @param {String} codigoSeguranca C\u00C3\u00B3digo de seguran\u00C3\u00A7a do cart\u00C3\u00A3o com tr\u00C3\u00AAs n\u00C3\u00BAmeros
     * @param {module:api/CartaoApi~validarCartaoDigitadoBandeiradoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaCartao}
     */
    this.validarCartaoDigitadoBandeiradoUsingGET = function(numeroCartao, nomePortador, dataValidade, codigoSeguranca, callback) {
      var postBody = null;

      // verify the required parameter 'numeroCartao' is set
      if (numeroCartao == undefined || numeroCartao == null) {
        throw "Missing the required parameter 'numeroCartao' when calling validarCartaoDigitadoBandeiradoUsingGET";
      }

      // verify the required parameter 'nomePortador' is set
      if (nomePortador == undefined || nomePortador == null) {
        throw "Missing the required parameter 'nomePortador' when calling validarCartaoDigitadoBandeiradoUsingGET";
      }

      // verify the required parameter 'dataValidade' is set
      if (dataValidade == undefined || dataValidade == null) {
        throw "Missing the required parameter 'dataValidade' when calling validarCartaoDigitadoBandeiradoUsingGET";
      }

      // verify the required parameter 'codigoSeguranca' is set
      if (codigoSeguranca == undefined || codigoSeguranca == null) {
        throw "Missing the required parameter 'codigoSeguranca' when calling validarCartaoDigitadoBandeiradoUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numeroCartao': numeroCartao,
        'nomePortador': nomePortador,
        'dataValidade': dataValidade,
        'codigoSeguranca': codigoSeguranca
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaCartao;

      return this.apiClient.callApi(
        '/api/cartoes/bandeirados/validar/digitado', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarCartaoDigitadoNaoBandeiradoUsingGET operation.
     * @callback module:api/CartaoApi~validarCartaoDigitadoNaoBandeiradoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaCartao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite validar um Cart\u00C3\u00A3o a partir dos dados Impressos
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores validem a autenticidade de um determinado Cart\u00C3\u00A3o a partir do envio dos dados sens\u00C3\u00ADveis impressos nele.
     * @param {String} numeroCartao N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado.
     * @param {String} nomePortador Nome do portador do cart\u00C3\u00A3o
     * @param {String} dataValidade Data de validade do cart\u00C3\u00A3o no formato yyyy-MM
     * @param {String} codigoSeguranca C\u00C3\u00B3digo de seguran\u00C3\u00A7a do cart\u00C3\u00A3o com tr\u00C3\u00AAs n\u00C3\u00BAmeros
     * @param {module:api/CartaoApi~validarCartaoDigitadoNaoBandeiradoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaCartao}
     */
    this.validarCartaoDigitadoNaoBandeiradoUsingGET = function(numeroCartao, nomePortador, dataValidade, codigoSeguranca, callback) {
      var postBody = null;

      // verify the required parameter 'numeroCartao' is set
      if (numeroCartao == undefined || numeroCartao == null) {
        throw "Missing the required parameter 'numeroCartao' when calling validarCartaoDigitadoNaoBandeiradoUsingGET";
      }

      // verify the required parameter 'nomePortador' is set
      if (nomePortador == undefined || nomePortador == null) {
        throw "Missing the required parameter 'nomePortador' when calling validarCartaoDigitadoNaoBandeiradoUsingGET";
      }

      // verify the required parameter 'dataValidade' is set
      if (dataValidade == undefined || dataValidade == null) {
        throw "Missing the required parameter 'dataValidade' when calling validarCartaoDigitadoNaoBandeiradoUsingGET";
      }

      // verify the required parameter 'codigoSeguranca' is set
      if (codigoSeguranca == undefined || codigoSeguranca == null) {
        throw "Missing the required parameter 'codigoSeguranca' when calling validarCartaoDigitadoNaoBandeiradoUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numeroCartao': numeroCartao,
        'nomePortador': nomePortador,
        'dataValidade': dataValidade,
        'codigoSeguranca': codigoSeguranca
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaCartao;

      return this.apiClient.callApi(
        '/api/cartoes/nao-bandeirados/validar/digitado', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarCartaoTarjaBandeiradoUsingGET operation.
     * @callback module:api/CartaoApi~validarCartaoTarjaBandeiradoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaCartao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite validar um Cart\u00C3\u00A3o Bandeirado a partir da Tarja
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores validem a autenticidade de um determinado Cart\u00C3\u00A3o a partir da leitura da tarja magn\u00C3\u00A9tica do mesmo.
     * @param {String} numeroCartao N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado.
     * @param {String} trilha1 Trilha 1 do cart\u00C3\u00A3o a ser validado
     * @param {String} trilha2 Trilha 2 do cart\u00C3\u00A3o a ser validado
     * @param {module:api/CartaoApi~validarCartaoTarjaBandeiradoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaCartao}
     */
    this.validarCartaoTarjaBandeiradoUsingGET = function(numeroCartao, trilha1, trilha2, callback) {
      var postBody = null;

      // verify the required parameter 'numeroCartao' is set
      if (numeroCartao == undefined || numeroCartao == null) {
        throw "Missing the required parameter 'numeroCartao' when calling validarCartaoTarjaBandeiradoUsingGET";
      }

      // verify the required parameter 'trilha1' is set
      if (trilha1 == undefined || trilha1 == null) {
        throw "Missing the required parameter 'trilha1' when calling validarCartaoTarjaBandeiradoUsingGET";
      }

      // verify the required parameter 'trilha2' is set
      if (trilha2 == undefined || trilha2 == null) {
        throw "Missing the required parameter 'trilha2' when calling validarCartaoTarjaBandeiradoUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numeroCartao': numeroCartao,
        'trilha1': trilha1,
        'trilha2': trilha2
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaCartao;

      return this.apiClient.callApi(
        '/api/cartoes/bandeirados/validar/tarja', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarSenhaUsingPOST operation.
     * @callback module:api/CartaoApi~validarSenhaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite validar a senha de um Cart\u00C3\u00A3o
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir validar que a senha informada pelo portador de um determinado cart\u00C3\u00A3o est\u00C3\u00A1 correta.
     * @param {Integer} idCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {String} senha Senha para ser validada.
     * @param {module:api/CartaoApi~validarSenhaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.validarSenhaUsingPOST = function(idCartao, senha, callback) {
      var postBody = null;

      // verify the required parameter 'idCartao' is set
      if (idCartao == undefined || idCartao == null) {
        throw "Missing the required parameter 'idCartao' when calling validarSenhaUsingPOST";
      }

      // verify the required parameter 'senha' is set
      if (senha == undefined || senha == null) {
        throw "Missing the required parameter 'senha' when calling validarSenhaUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
        'id_cartao': idCartao
      };
      var headerParams = {
        'senha': senha
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/cartoes/{id_cartao}/validar-senha', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
