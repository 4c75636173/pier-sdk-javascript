(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/HistoricoImpressaoCartaoResponse', '../model/CartaoResponse', '../model/DadosCartaoImpressaoResponse', '../model/DadosCartaoResponse', '../model/LimiteDisponibilidadeResponse', '../model/LoteCartoesPrePagosResponse', '../model/PortadorResponse', '../model/CartaoDetalheResponse', '../model/PageLoteCartoesPrePagosResponse', '../model/PageCartaoResponse', '../model/ValidaCartaoResponse', '../model/ValidaSenhaCartaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HistoricoImpressaoCartaoResponse'), require('../model/CartaoResponse'), require('../model/DadosCartaoImpressaoResponse'), require('../model/DadosCartaoResponse'), require('../model/LimiteDisponibilidadeResponse'), require('../model/LoteCartoesPrePagosResponse'), require('../model/PortadorResponse'), require('../model/CartaoDetalheResponse'), require('../model/PageLoteCartoesPrePagosResponse'), require('../model/PageCartaoResponse'), require('../model/ValidaCartaoResponse'), require('../model/ValidaSenhaCartaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CartaoApi = factory(root.Pier.ApiClient, root.Pier.HistoricoImpressaoCartaoResponse, root.Pier.CartaoResponse, root.Pier.DadosCartaoImpressaoResponse, root.Pier.DadosCartaoResponse, root.Pier.LimiteDisponibilidadeResponse, root.Pier.LoteCartoesPrePagosResponse, root.Pier.PortadorResponse, root.Pier.CartaoDetalheResponse, root.Pier.PageLoteCartoesPrePagosResponse, root.Pier.PageCartaoResponse, root.Pier.ValidaCartaoResponse, root.Pier.ValidaSenhaCartaoResponse);
  }
}(this, function(ApiClient, HistoricoImpressaoCartaoResponse, CartaoResponse, DadosCartaoImpressaoResponse, DadosCartaoResponse, LimiteDisponibilidadeResponse, LoteCartoesPrePagosResponse, PortadorResponse, CartaoDetalheResponse, PageLoteCartoesPrePagosResponse, PageCartaoResponse, ValidaCartaoResponse, ValidaSenhaCartaoResponse) {
  'use strict';

  /**
   * Cartao service.
   * @module api/CartaoApi
   * @version 2.50.5
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
     * Callback function to receive the result of the alterarAlterarSenhaUsingPUT operation.
     * @callback module:api/CartaoApi~alterarAlterarSenhaUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a altera\u00C3\u00A7\u00C3\u00A3o da senha de um Cart\u00C3\u00A3o
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que o portador de um determinado cart\u00C3\u00A3o possa definir uma senha a sua escolha.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {String} senha Senha para ser cadastrada ou alterada.
     * @param {module:api/CartaoApi~alterarAlterarSenhaUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.alterarAlterarSenhaUsingPUT = function(id, senha, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarAlterarSenhaUsingPUT";
      }

      // verify the required parameter 'senha' is set
      if (senha == undefined || senha == null) {
        throw "Missing the required parameter 'senha' when calling alterarAlterarSenhaUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'senha': senha
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/cartoes/{id}/alterar-senha', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarStatusImpressaoUsingPUT operation.
     * @callback module:api/CartaoApi~alterarStatusImpressaoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricoImpressaoCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a altera\u00C3\u00A7\u00C3\u00A3o do Status de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite que uma Aplica\u00C3\u00A7\u00C3\u00A3o que realize a impress\u00C3\u00A3o de cart\u00C3\u00B5es possa indicar que um determinado idCartao fora impresso ou est\u00C3\u00A1 em processo de impress\u00C3\u00A3o. Para isso, basta informar o respectivo c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id) que deseja ter seu um determinado id_status_impressao atribu\u00C3\u00ADdo a ele. Por padr\u00C3\u00A3o, cart\u00C3\u00B5es provis\u00C3\u00B3rios ou que j\u00C3\u00A1 tenham sido inclu\u00C3\u00ADdos em um arquivo para impress\u00C3\u00A3o via gr\u00C3\u00A1fica ter\u00C3\u00A3o esta requisi\u00C3\u00A7\u00C3\u00A3o negada, se utilizada.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {Integer} idStatusImpressao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status Impress\u00C3\u00A3o (Id).
     * @param {module:api/CartaoApi~alterarStatusImpressaoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/HistoricoImpressaoCartaoResponse}
     */
    this.alterarStatusImpressaoUsingPUT = function(id, idStatusImpressao, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarStatusImpressaoUsingPUT";
      }

      // verify the required parameter 'idStatusImpressao' is set
      if (idStatusImpressao == undefined || idStatusImpressao == null) {
        throw "Missing the required parameter 'idStatusImpressao' when calling alterarStatusImpressaoUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_status_impressao': idStatusImpressao
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = HistoricoImpressaoCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/alterar-status-impressao', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the atribuirPessoaUsingPUT operation.
     * @callback module:api/CartaoApi~atribuirPessoaUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a atribui\u00C3\u00A7\u00C3\u00A3o de um cart\u00C3\u00A3o pr\u00C3\u00A9-pago a uma pessoa
     * Esta m\u00C3\u00A9todo permite que um cart\u00C3\u00A3o pr\u00C3\u00A9-pago impresso de forma avulsa e an\u00C3\u00B4nimo seja atribu\u00C3\u00ADdo a uma pessoa para que esta passe a ser a portadora titular dele.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id)
     * @param {Integer} idPessoa C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de uma Pessoa (id).
     * @param {module:api/CartaoApi~atribuirPessoaUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.atribuirPessoaUsingPUT = function(id, idPessoa, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atribuirPessoaUsingPUT";
      }

      // verify the required parameter 'idPessoa' is set
      if (idPessoa == undefined || idPessoa == null) {
        throw "Missing the required parameter 'idPessoa' when calling atribuirPessoaUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_pessoa': idPessoa
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/atribuir-titular', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the bloquearUsingPOST operation.
     * @callback module:api/CartaoApi~bloquearUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o bloqueio de um determinado Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite a realiza\u00C3\u00A7\u00C3\u00A3o do bloqueio (tempor\u00C3\u00A1rio) ou do cancelamento (definitivo) de um determinado cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id). Para isso, \u00C3\u00A9 preciso informar qual o motivo deste bloqueio que nada mais \u00C3\u00A9 do que atribuir um novo StatusCartao para ele dentre as op\u00C3\u00A7\u00C3\u00B5es praticadas pelo emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {Integer} idStatus C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Novo Status Cart\u00C3\u00A3o.
     * @param {String} observacao Texto informando uma observa\u00C3\u00A7\u00C3\u00A3o sobre o bloqueio.
     * @param {module:api/CartaoApi~bloquearUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.bloquearUsingPOST = function(id, idStatus, observacao, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling bloquearUsingPOST";
      }

      // verify the required parameter 'idStatus' is set
      if (idStatus == undefined || idStatus == null) {
        throw "Missing the required parameter 'idStatus' when calling bloquearUsingPOST";
      }

      // verify the required parameter 'observacao' is set
      if (observacao == undefined || observacao == null) {
        throw "Missing the required parameter 'observacao' when calling bloquearUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_status': idStatus,
        'observacao': observacao
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/bloquear', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarAlterarSenhaUsingPOST operation.
     * @callback module:api/CartaoApi~cadastrarAlterarSenhaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro da senha de um Cart\u00C3\u00A3o
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que o portador de um determinado cart\u00C3\u00A3o possa definir uma senha a sua escolha.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {String} senha Senha para ser cadastrada ou alterada.
     * @param {module:api/CartaoApi~cadastrarAlterarSenhaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.cadastrarAlterarSenhaUsingPOST = function(id, senha, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling cadastrarAlterarSenhaUsingPOST";
      }

      // verify the required parameter 'senha' is set
      if (senha == undefined || senha == null) {
        throw "Missing the required parameter 'senha' when calling cadastrarAlterarSenhaUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'senha': senha
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/cartoes/{id}/cadastrar-senha', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelarUsingPOST operation.
     * @callback module:api/CartaoApi~cancelarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cancelamento de um determinado Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite a realiza\u00C3\u00A7\u00C3\u00A3o cancelamento de um determinado cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id). Para isso, \u00C3\u00A9 preciso informar qual o motivo deste bloqueio que nada mais \u00C3\u00A9 do que atribuir um novo StatusCartao para ele dentre as op\u00C3\u00A7\u00C3\u00B5es praticadas pelo emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {Integer} idStatus C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Novo Status Cart\u00C3\u00A3o.
     * @param {String} observacao Texto informando uma observa\u00C3\u00A7\u00C3\u00A3o sobre o cancelamento.
     * @param {module:api/CartaoApi~cancelarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.cancelarUsingPOST = function(id, idStatus, observacao, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling cancelarUsingPOST";
      }

      // verify the required parameter 'idStatus' is set
      if (idStatus == undefined || idStatus == null) {
        throw "Missing the required parameter 'idStatus' when calling cancelarUsingPOST";
      }

      // verify the required parameter 'observacao' is set
      if (observacao == undefined || observacao == null) {
        throw "Missing the required parameter 'observacao' when calling cancelarUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_status': idStatus,
        'observacao': observacao
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/cancelar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarCartaoImpressaoUsingGET operation.
     * @callback module:api/CartaoApi~consultarCartaoImpressaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DadosCartaoImpressaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar os dados de impress\u00C3\u00A3o de um Cart\u00C3\u00A3o
     * Esse recurso permite consultar os dados de impress\u00C3\u00A3o de um cart\u00C3\u00A3o
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id).
     * @param {module:api/CartaoApi~consultarCartaoImpressaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DadosCartaoImpressaoResponse}
     */
    this.consultarCartaoImpressaoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarCartaoImpressaoUsingGET";
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
      var returnType = DadosCartaoImpressaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/consultar-dados-impressao', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarDadosReaisCartaoUsingGET operation.
     * @callback module:api/CartaoApi~consultarDadosReaisCartaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DadosCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar Detalhes do Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite que seja consultado os dados necessarios de um cart\u00C3\u00A3o para executar servi\u00C3\u00A7os de autoriza\u00C3\u00A7\u00C3\u00A3o.
     * @param {Integer} id id
     * @param {module:api/CartaoApi~consultarDadosReaisCartaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DadosCartaoResponse}
     */
    this.consultarDadosReaisCartaoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarDadosReaisCartaoUsingGET";
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
      var returnType = DadosCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/consultar-dados-reais', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarLimiteDisponibilidadeUsingGET operation.
     * @callback module:api/CartaoApi~consultarLimiteDisponibilidadeUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LimiteDisponibilidadeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os limites do Portador do Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite consultar os Limites configurados para o Portador de um determinado Cart\u00C3\u00A3o, seja ele o titular da conta ou um adicional, a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/CartaoApi~consultarLimiteDisponibilidadeUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidadeResponse}
     */
    this.consultarLimiteDisponibilidadeUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarLimiteDisponibilidadeUsingGET";
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
      var returnType = LimiteDisponibilidadeResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/limites-disponibilidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarLotesCartoesPrePagosUsingGET operation.
     * @callback module:api/CartaoApi~consultarLotesCartoesPrePagosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoteCartoesPrePagosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite consultar um determinado Lote de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pago
     * Este m\u00C3\u00A9todo permite consultar os cart\u00C3\u00B5es pr\u00C3\u00A9-pagos existentes na base do emissor atrav\u00C3\u00A9s do id do lote.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do lote de cart\u00C3\u00B5es (id)
     * @param {module:api/CartaoApi~consultarLotesCartoesPrePagosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LoteCartoesPrePagosResponse}
     */
    this.consultarLotesCartoesPrePagosUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarLotesCartoesPrePagosUsingGET";
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
      var returnType = LoteCartoesPrePagosResponse;

      return this.apiClient.callApi(
        '/api/cartoes/lotes-cartoes-pre-pagos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarPortadorUsingGET operation.
     * @callback module:api/CartaoApi~consultarPortadorUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PortadorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados do Portador do Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite consultar as informa\u00C3\u00A7\u00C3\u00B5es do Portador de um determinado Cart\u00C3\u00A3o a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/CartaoApi~consultarPortadorUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PortadorResponse}
     */
    this.consultarPortadorUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarPortadorUsingGET";
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
      var returnType = PortadorResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/portadores', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET7 operation.
     * @callback module:api/CartaoApi~consultarUsingGET7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite consultar as informa\u00C3\u00A7\u00C3\u00B5es b\u00C3\u00A1sicas de um determinado Cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/CartaoApi~consultarUsingGET7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoDetalheResponse}
     */
    this.consultarUsingGET7 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET7";
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
      var returnType = CartaoDetalheResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desbloquearSenhaIncorretaUsingPOST operation.
     * @callback module:api/CartaoApi~desbloquearSenhaIncorretaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o desbloqueio de um cart\u00C3\u00A3o bloqueado por tentativas de senha incorretas
     * Este m\u00C3\u00A9todo permite que seja desbloqueado um determinado cart\u00C3\u00A3o que foi bloqueado por tentativas de senha incorretas, a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/CartaoApi~desbloquearSenhaIncorretaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.desbloquearSenhaIncorretaUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desbloquearSenhaIncorretaUsingPOST";
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
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/desbloquear-senha-incorreta', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the desbloquearUsingPOST operation.
     * @callback module:api/CartaoApi~desbloquearUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o desbloqueio de um determinado Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite que seja desbloqueado um determinado cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/CartaoApi~desbloquearUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.desbloquearUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desbloquearUsingPOST";
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
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/desbloquear', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarLotesCartoesPrePagosUsingPOST operation.
     * @callback module:api/CartaoApi~gerarLotesCartoesPrePagosUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoteCartoesPrePagosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite gerar um novo Lote de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pago
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores gerem uma determinada quantidade de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pagos, de forma n\u00C3\u00A3o nominal, os quais poder\u00C3\u00A3o ser comercializados e posteriormente vinculados a um cliente que o adquirir. Para isso, al\u00C3\u00A9m de definir quantos cart\u00C3\u00B5es dever\u00C3\u00A3o ser gerados, ser\u00C3\u00A1 poss\u00C3\u00ADvel definir qual a Origem Comercial, o Produto, o Tipo do Cart\u00C3\u00A3o, a Imagem e o Endere\u00C3\u00A7o para entrega dos Cart\u00C3\u00B5es presentes no lote gerado. Por padr\u00C3\u00A3o, todos os cart\u00C3\u00B5es ser\u00C3\u00A3o associados a um idPessoa fict\u00C3\u00ADcio e receber\u00C3\u00A1 um idConta \u00C3\u00BAnico para cada um deles. Feito isso, os Cart\u00C3\u00B5es gerados por esta opera\u00C3\u00A7\u00C3\u00A3o seguir\u00C3\u00A3o os mesmos processos de impress\u00C3\u00A3o via gr\u00C3\u00A1fica previamente definidos entre o Emissor e a Conductor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idOrigemComercial C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id).
     * @param {Integer} opts.idProduto C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
     * @param {Integer} opts.idTipoCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Cart\u00C3\u00A3o (id).
     * @param {Integer} opts.idImagem C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Imagem (id).
     * @param {Integer} opts.idEndereco C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).
     * @param {Integer} opts.quantidadeCartoes N\u00C3\u00BAmero de cart\u00C3\u00B5es existentes no Lote.
     * @param {module:api/CartaoApi~gerarLotesCartoesPrePagosUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LoteCartoesPrePagosResponse}
     */
    this.gerarLotesCartoesPrePagosUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idOrigemComercial': opts['idOrigemComercial'],
        'idProduto': opts['idProduto'],
        'idTipoCartao': opts['idTipoCartao'],
        'idImagem': opts['idImagem'],
        'idEndereco': opts['idEndereco'],
        'quantidadeCartoes': opts['quantidadeCartoes']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LoteCartoesPrePagosResponse;

      return this.apiClient.callApi(
        '/api/cartoes/lotes-cartoes-pre-pagos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarNovaViaUsingPOST operation.
     * @callback module:api/CartaoApi~gerarNovaViaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gerar uma nova via de Cart\u00C3\u00A3o
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores ou seus clientes possam solicitar a gera\u00C3\u00A7\u00C3\u00A3o de uma nova via de Cart\u00C3\u00A3o que ser\u00C3\u00A1 encaminhando para impress\u00C3\u00A3o e postagem de acordo com os fluxos padr\u00C3\u00B5es j\u00C3\u00A1 definidos pelo emissor. Para isso, \u00C3\u00A9 preciso que o cliente j\u00C3\u00A1 possua um cart\u00C3\u00A3o gerado e informar o C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o deste (idCartao) para que ele possa utilizar esta opera\u00C3\u00A7\u00C3\u00A3o. Assim, esta funcionalidade se aplica apenas para a gera\u00C3\u00A7\u00C3\u00A3o de cart\u00C3\u00B5es f\u00C3\u00ADsicos.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id)
     * @param {module:api/CartaoApi~gerarNovaViaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.gerarNovaViaUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling gerarNovaViaUsingPOST";
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
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/gerar-nova-via', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the lancarTarifaSegundaViaUsingPOST operation.
     * @callback module:api/CartaoApi~lancarTarifaSegundaViaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adiciona tarifa de ajuste da segunda via do cart\u00C3\u00A3o
     * Esse recurso permite adicionar tar\u00C3\u00ADfa de ajuste pela emiss\u00C3\u00A3o da segunda via do cart\u00C3\u00A3o.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do cart\u00C3\u00A3o (id).
     * @param {module:api/CartaoApi~lancarTarifaSegundaViaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.lancarTarifaSegundaViaUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling lancarTarifaSegundaViaUsingPOST";
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
        '/api/cartoes/{id}/lancar-tarifa-reemissao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarLotesCartoesPrePagosUsingGET operation.
     * @callback module:api/CartaoApi~listarLotesCartoesPrePagosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageLoteCartoesPrePagosResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite listar os Lotes de Cart\u00C3\u00B5es Pr\u00C3\u00A9-Pago
     * Este m\u00C3\u00A9todo permite que sejam listados os cart\u00C3\u00B5es pr\u00C3\u00A9-pagos existentes na base do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idOrigemComercial C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id).
     * @param {Integer} opts.idProduto C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
     * @param {Integer} opts.idTipoCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Cart\u00C3\u00A3o (id).
     * @param {Integer} opts.idImagem C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Imagem (id).
     * @param {Integer} opts.idEndereco C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).
     * @param {Integer} opts.quantidadeCartoes N\u00C3\u00BAmero de cart\u00C3\u00B5es existentes no Lote.
     * @param {String} opts.dataCadastro Data de Cadastro do Lote de Cart\u00C3\u00B5es N\u00C3\u00A3o Nominais.
     * @param {String} opts.usuarioCadastro Nome do Usu\u00C3\u00A1rio que criou o Lote.
     * @param {Integer} opts.statusProcessamento Indica o Status de Processamento do Lote.
     * @param {module:api/CartaoApi~listarLotesCartoesPrePagosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageLoteCartoesPrePagosResponse}
     */
    this.listarLotesCartoesPrePagosUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idOrigemComercial': opts['idOrigemComercial'],
        'idProduto': opts['idProduto'],
        'idTipoCartao': opts['idTipoCartao'],
        'idImagem': opts['idImagem'],
        'idEndereco': opts['idEndereco'],
        'quantidadeCartoes': opts['quantidadeCartoes'],
        'dataCadastro': opts['dataCadastro'],
        'usuarioCadastro': opts['usuarioCadastro'],
        'statusProcessamento': opts['statusProcessamento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageLoteCartoesPrePagosResponse;

      return this.apiClient.callApi(
        '/api/cartoes/lotes-cartoes-pre-pagos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET7 operation.
     * @callback module:api/CartaoApi~listarUsingGET7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Cart\u00C3\u00B5es gerados pelo Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os cart\u00C3\u00B5es existentes na base do emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idStatusCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Status do Cart\u00C3\u00A3o (id).
     * @param {Integer} opts.idEstagioCartao C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Est\u00C3\u00A1gio de Impress\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {Integer} opts.idConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta a qual o cart\u00C3\u00A3o pertence (id).
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o cart\u00C3\u00A3o pertence (id)
     * @param {Integer} opts.idProduto C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto a qual o cart\u00C3\u00A3o pertence (id).
     * @param {String} opts.tipoPortador Apresenta o tipo do Portador do cart\u00C3\u00A3o, sendo: (&#39;T&#39;: Titular, &#39;A&#39;: Adicional).
     * @param {String} opts.numeroCartao Apresenta o n\u00C3\u00BAmero do cart\u00C3\u00A3o.
     * @param {String} opts.nomeImpresso Apresenta o nome impresso no cart\u00C3\u00A3o.
     * @param {String} opts.dataGeracao Apresenta a data em que o cart\u00C3\u00A3o foi gerado.
     * @param {String} opts.dataStatusCartao Apresenta a data em que o idStatusCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
     * @param {String} opts.dataEstagioCartao Apresenta a data em que o idEstagioCartao atual do cart\u00C3\u00A3o fora aplicado, quando houver.
     * @param {String} opts.dataValidade Apresenta a data de validade do cart\u00C3\u00A3o em formato yyyy-MM, quando houver.
     * @param {String} opts.dataImpressao Apresenta a data em que o cart\u00C3\u00A3o fora impresso, caso impress\u00C3\u00A3o em loja, ou a data em que ele fora inclu\u00C3\u00ADdo no arquivo para impress\u00C3\u00A3o via gr\u00C3\u00A1fica.
     * @param {String} opts.arquivoImpressao Apresenta o nome do arquivo onde o cart\u00C3\u00A3o fora inclu\u00C3\u00ADdo para impress\u00C3\u00A3o por uma gr\u00C3\u00A1fica, quando houver.
     * @param {Integer} opts.flagImpressaoOrigemComercial Quando ativa, indica que o cart\u00C3\u00A3o fora impresso na Origem Comercial.
     * @param {Integer} opts.flagProvisorio Quando ativa, indica que o cart\u00C3\u00A3o \u00C3\u00A9 provis\u00C3\u00B3rio. Ou seja, \u00C3\u00A9 um cart\u00C3\u00A3o para uso tempor\u00C3\u00A1rio quando se deseja permitir que o cliente transacione sem que ele tenha recebido um cart\u00C3\u00A3o definitivo.
     * @param {String} opts.codigoDesbloqueio Apresenta um c\u00C3\u00B3digo espec\u00C3\u00ADfico para ser utilizado como vari\u00C3\u00A1vel no processo de desbloqueio do cart\u00C3\u00A3o para emissores que querem usar esta funcionalidade.
     * @param {Integer} opts.sequencialCartao N\u00C3\u00BAmero sequencial do cart\u00C3\u00A3o
     * @param {module:api/CartaoApi~listarUsingGET7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCartaoResponse}
     */
    this.listarUsingGET7 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
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
        'sequencialCartao': opts['sequencialCartao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reativarUsingPOST operation.
     * @callback module:api/CartaoApi~reativarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a reativa\u00C3\u00A7\u00C3\u00A3o de um determinado Cart\u00C3\u00A3o
     * Este m\u00C3\u00A9todo permite a realiza\u00C3\u00A7\u00C3\u00A3o da reativa\u00C3\u00A7\u00C3\u00A3o de um determinado cart\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/CartaoApi~reativarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoResponse}
     */
    this.reativarUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling reativarUsingPOST";
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
      var returnType = CartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/reativar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarDadosImpressosBandeiradoUsingGET operation.
     * @callback module:api/CartaoApi~validarDadosImpressosBandeiradoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite validar os dados impressos em um cart\u00C3\u00A3o bandeirado
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores validem a autenticidade de um determinado Cart\u00C3\u00A3o a partir do envio dos dados sens\u00C3\u00ADveis impressos nele. A utiliza\u00C3\u00A7\u00C3\u00A3o desde m\u00C3\u00A9todo tem diversas aplica\u00C3\u00A7\u00C3\u00B5es, sendo a principal delas a de Identifica\u00C3\u00A7\u00C3\u00A3o Positiva do Cart\u00C3\u00A3o para a realiza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00B5es e-commerce ou por meio de Centrais de Atendimento Eletr\u00C3\u00B4nico (URA), dentre outras.
     * @param {String} numeroCartao N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado.
     * @param {String} nomePortador Nome do portador do cart\u00C3\u00A3o
     * @param {String} dataValidade Data de validade do cart\u00C3\u00A3o no formato yyyy-MM
     * @param {String} codigoSeguranca C\u00C3\u00B3digo de seguran\u00C3\u00A7a do cart\u00C3\u00A3o com tr\u00C3\u00AAs n\u00C3\u00BAmeros
     * @param {module:api/CartaoApi~validarDadosImpressosBandeiradoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaCartaoResponse}
     */
    this.validarDadosImpressosBandeiradoUsingGET = function(numeroCartao, nomePortador, dataValidade, codigoSeguranca, callback) {
      var postBody = null;

      // verify the required parameter 'numeroCartao' is set
      if (numeroCartao == undefined || numeroCartao == null) {
        throw "Missing the required parameter 'numeroCartao' when calling validarDadosImpressosBandeiradoUsingGET";
      }

      // verify the required parameter 'nomePortador' is set
      if (nomePortador == undefined || nomePortador == null) {
        throw "Missing the required parameter 'nomePortador' when calling validarDadosImpressosBandeiradoUsingGET";
      }

      // verify the required parameter 'dataValidade' is set
      if (dataValidade == undefined || dataValidade == null) {
        throw "Missing the required parameter 'dataValidade' when calling validarDadosImpressosBandeiradoUsingGET";
      }

      // verify the required parameter 'codigoSeguranca' is set
      if (codigoSeguranca == undefined || codigoSeguranca == null) {
        throw "Missing the required parameter 'codigoSeguranca' when calling validarDadosImpressosBandeiradoUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numero_cartao': numeroCartao,
        'nome_portador': nomePortador,
        'data_validade': dataValidade,
        'codigo_seguranca': codigoSeguranca
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/validar-dados-impressos-bandeirados', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarDadosImpressosNaoBandeiradoUsingGET operation.
     * @callback module:api/CartaoApi~validarDadosImpressosNaoBandeiradoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite validar os dados impressos de um cartao n\u00C3\u00A3o bandeirado
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores validem a autenticidade de um determinado Cart\u00C3\u00A3o a partir do envio dos dados sens\u00C3\u00ADveis impressos nele. A utiliza\u00C3\u00A7\u00C3\u00A3o desde m\u00C3\u00A9todo tem diversas aplica\u00C3\u00A7\u00C3\u00B5es, sendo a principal delas a de Identifica\u00C3\u00A7\u00C3\u00A3o Positiva do Cart\u00C3\u00A3o para a realiza\u00C3\u00A7\u00C3\u00A3o de transa\u00C3\u00A7\u00C3\u00B5es e-commerce ou por meio de Centrais de Atendimento Eletr\u00C3\u00B4nico (URA), dentre outras.
     * @param {String} numeroCartao N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado.
     * @param {String} nomePortador Nome do portador do cart\u00C3\u00A3o
     * @param {String} dataValidade Data de validade do cart\u00C3\u00A3o no formato yyyy-MM
     * @param {String} codigoSeguranca C\u00C3\u00B3digo de seguran\u00C3\u00A7a do cart\u00C3\u00A3o com tr\u00C3\u00AAs n\u00C3\u00BAmeros
     * @param {module:api/CartaoApi~validarDadosImpressosNaoBandeiradoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaCartaoResponse}
     */
    this.validarDadosImpressosNaoBandeiradoUsingGET = function(numeroCartao, nomePortador, dataValidade, codigoSeguranca, callback) {
      var postBody = null;

      // verify the required parameter 'numeroCartao' is set
      if (numeroCartao == undefined || numeroCartao == null) {
        throw "Missing the required parameter 'numeroCartao' when calling validarDadosImpressosNaoBandeiradoUsingGET";
      }

      // verify the required parameter 'nomePortador' is set
      if (nomePortador == undefined || nomePortador == null) {
        throw "Missing the required parameter 'nomePortador' when calling validarDadosImpressosNaoBandeiradoUsingGET";
      }

      // verify the required parameter 'dataValidade' is set
      if (dataValidade == undefined || dataValidade == null) {
        throw "Missing the required parameter 'dataValidade' when calling validarDadosImpressosNaoBandeiradoUsingGET";
      }

      // verify the required parameter 'codigoSeguranca' is set
      if (codigoSeguranca == undefined || codigoSeguranca == null) {
        throw "Missing the required parameter 'codigoSeguranca' when calling validarDadosImpressosNaoBandeiradoUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numero_cartao': numeroCartao,
        'nome_portador': nomePortador,
        'data_validade': dataValidade,
        'codigo_seguranca': codigoSeguranca
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/validar-dados-impressos-nao-bandeirados', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarDe55CartaoMastercardUsingGET operation.
     * @callback module:api/CartaoApi~validarDe55CartaoMastercardUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite validar um Cart\u00C3\u00A3o com bandeira Mastercard a partir do de55
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores validem o DE55 gerado a partir da leitura de um chip EMV de um Cart\u00C3\u00A3o com bandeira Mastercard a fim de verificar a sua autenticidade. A utiliza\u00C3\u00A7\u00C3\u00A3o desde m\u00C3\u00A9todo tem diversas aplica\u00C3\u00A7\u00C3\u00B5es, sendo a principal delas a de Identifica\u00C3\u00A7\u00C3\u00A3o Positiva do Cart\u00C3\u00A3o antes de permitir que o portador realize transa\u00C3\u00A7\u00C3\u00B5es diversas, como as de compra e saque na modalidade d\u00C3\u00A9bito em conta corrente, dentre outras.
     * @param {String} numeroCartao N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado.
     * @param {String} criptograma Criptograma do cart\u00C3\u00A3o no formato de55
     * @param {module:api/CartaoApi~validarDe55CartaoMastercardUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaCartaoResponse}
     */
    this.validarDe55CartaoMastercardUsingGET = function(numeroCartao, criptograma, callback) {
      var postBody = null;

      // verify the required parameter 'numeroCartao' is set
      if (numeroCartao == undefined || numeroCartao == null) {
        throw "Missing the required parameter 'numeroCartao' when calling validarDe55CartaoMastercardUsingGET";
      }

      // verify the required parameter 'criptograma' is set
      if (criptograma == undefined || criptograma == null) {
        throw "Missing the required parameter 'criptograma' when calling validarDe55CartaoMastercardUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numero_cartao': numeroCartao,
        'criptograma': criptograma
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/validar-de55-mastercard', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarSenhaUsingGET operation.
     * @callback module:api/CartaoApi~validarSenhaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaSenhaCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite validar a senha de um Cart\u00C3\u00A3o
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir validar que a senha informada pelo portador de um determinado cart\u00C3\u00A3o est\u00C3\u00A1 correta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {String} senha Senha para ser validada.
     * @param {module:api/CartaoApi~validarSenhaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaSenhaCartaoResponse}
     */
    this.validarSenhaUsingGET = function(id, senha, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling validarSenhaUsingGET";
      }

      // verify the required parameter 'senha' is set
      if (senha == undefined || senha == null) {
        throw "Missing the required parameter 'senha' when calling validarSenhaUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'senha': senha
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaSenhaCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/{id}/validar-senha', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validarTarjaUsingGET operation.
     * @callback module:api/CartaoApi~validarTarjaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ValidaCartaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite validar um Cart\u00C3\u00A3o Bandeirado a partir da Tarja
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir que os Emissores validem a autenticidade de um determinado Cart\u00C3\u00A3o a partir da leitura da tarja magn\u00C3\u00A9tica do mesmo. A utiliza\u00C3\u00A7\u00C3\u00A3o desde m\u00C3\u00A9todo tem diversas aplica\u00C3\u00A7\u00C3\u00B5es, sendo a principal delas a de Identifica\u00C3\u00A7\u00C3\u00A3o Positiva do Cart\u00C3\u00A3o antes de permitir que o portador realize transa\u00C3\u00A7\u00C3\u00B5es diversas, como as de compra e saque na modalidade d\u00C3\u00A9bito em conta corrente, dentre outras.
     * @param {String} numeroCartao N\u00C3\u00BAmero do cart\u00C3\u00A3o a ser validado.
     * @param {String} trilha1 Trilha 1 do cart\u00C3\u00A3o a ser validado
     * @param {String} trilha2 Trilha 2 do cart\u00C3\u00A3o a ser validado
     * @param {module:api/CartaoApi~validarTarjaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ValidaCartaoResponse}
     */
    this.validarTarjaUsingGET = function(numeroCartao, trilha1, trilha2, callback) {
      var postBody = null;

      // verify the required parameter 'numeroCartao' is set
      if (numeroCartao == undefined || numeroCartao == null) {
        throw "Missing the required parameter 'numeroCartao' when calling validarTarjaUsingGET";
      }

      // verify the required parameter 'trilha1' is set
      if (trilha1 == undefined || trilha1 == null) {
        throw "Missing the required parameter 'trilha1' when calling validarTarjaUsingGET";
      }

      // verify the required parameter 'trilha2' is set
      if (trilha2 == undefined || trilha2 == null) {
        throw "Missing the required parameter 'trilha2' when calling validarTarjaUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numero_cartao': numeroCartao,
        'trilha1': trilha1,
        'trilha2': trilha2
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ValidaCartaoResponse;

      return this.apiClient.callApi(
        '/api/cartoes/validar-tarja', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
