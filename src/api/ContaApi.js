(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Conta', '../model/ModelDate', '../model/DividaClienteResponse', '../model/FaturaResponse', '../model/LimiteDisponibilidade', '../model/PageTransferencias', '../model/CartaoImpressao', '../model/PageFaturas', '../model/PageTransacaoResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Conta'), require('../model/ModelDate'), require('../model/DividaClienteResponse'), require('../model/FaturaResponse'), require('../model/LimiteDisponibilidade'), require('../model/PageTransferencias'), require('../model/CartaoImpressao'), require('../model/PageFaturas'), require('../model/PageTransacaoResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.ContaApi = factory(root.Pier.ApiClient, root.Pier.Conta, root.Pier.ModelDate, root.Pier.DividaClienteResponse, root.Pier.FaturaResponse, root.Pier.LimiteDisponibilidade, root.Pier.PageTransferencias, root.Pier.CartaoImpressao, root.Pier.PageFaturas, root.Pier.PageTransacaoResponse);
  }
}(this, function(ApiClient, Conta, ModelDate, DividaClienteResponse, FaturaResponse, LimiteDisponibilidade, PageTransferencias, CartaoImpressao, PageFaturas, PageTransacaoResponse) {
  'use strict';

  /**
   * Conta service.
   * @module api/ContaApi
   * @version 2.8.0
   */

  /**
   * Constructs a new ContaApi. 
   * @alias module:api/ContaApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarLimiteUsingPUT operation.
     * @callback module:api/ContaApi~alterarLimiteUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Conta} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar limite
     * Esse recurso permite realizar a altera\u00C3\u00A7\u00C3\u00A3o dos Limites de uma determinada Conta.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Number} limiteGlobal Apresenta o valor do limite de cr\u00C3\u00A9dito que o portador do cart\u00C3\u00A3o possui.
     * @param {Number} limiteCompra Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Nacionais.
     * @param {Number} limiteParcelado Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es de compras parceladas.
     * @param {Number} limiteParcelas Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras que forem realizadas nesta modalidade.
     * @param {Number} limiteSaqueGlobal Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional.
     * @param {Number} limiteSaquePeriodo Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Nacional dentro de cada ciclo de faturamento.
     * @param {Number} limiteConsignado Quando utilizado pelo emissor, este campo apresenta o valor da margem de cr\u00C3\u00A9dito que ele poder\u00C3\u00A1 utilizar para ser cobrado de forma consignada (desconto em folha) em seu sal\u00C3\u00A1rio/vencimentos.
     * @param {Number} limiteInternacionalCompra Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para uso exclusivo em Compras Internacionais.
     * @param {Number} limiteInternacionalParcelado Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador possui para realizar transa\u00C3\u00A7\u00C3\u00B5es Internacionais de Compras Parceladas.
     * @param {Number} limiteInternacionalParcelas Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que portador pode acumular a partir da soma das parcelas das compras internacionais que forem realizadas nesta modalidade.
     * @param {Number} limiteInternacionalSaqueGlobal Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional.
     * @param {Number} limiteInternacionalSaquePeriodo Quando utilizado pelo emissor, este campo apresenta o valor do limite de cr\u00C3\u00A9dito que o portador pode utilizar para realizar transa\u00C3\u00A7\u00C3\u00B5es de Saque Internacional dentro de cada ciclo de faturamento.
     * @param {module:api/ContaApi~alterarLimiteUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Conta}
     */
    this.alterarLimiteUsingPUT = function(id, limiteGlobal, limiteCompra, limiteParcelado, limiteParcelas, limiteSaqueGlobal, limiteSaquePeriodo, limiteConsignado, limiteInternacionalCompra, limiteInternacionalParcelado, limiteInternacionalParcelas, limiteInternacionalSaqueGlobal, limiteInternacionalSaquePeriodo, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteGlobal' is set
      if (limiteGlobal == undefined || limiteGlobal == null) {
        throw "Missing the required parameter 'limiteGlobal' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteCompra' is set
      if (limiteCompra == undefined || limiteCompra == null) {
        throw "Missing the required parameter 'limiteCompra' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteParcelado' is set
      if (limiteParcelado == undefined || limiteParcelado == null) {
        throw "Missing the required parameter 'limiteParcelado' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteParcelas' is set
      if (limiteParcelas == undefined || limiteParcelas == null) {
        throw "Missing the required parameter 'limiteParcelas' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteSaqueGlobal' is set
      if (limiteSaqueGlobal == undefined || limiteSaqueGlobal == null) {
        throw "Missing the required parameter 'limiteSaqueGlobal' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteSaquePeriodo' is set
      if (limiteSaquePeriodo == undefined || limiteSaquePeriodo == null) {
        throw "Missing the required parameter 'limiteSaquePeriodo' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteConsignado' is set
      if (limiteConsignado == undefined || limiteConsignado == null) {
        throw "Missing the required parameter 'limiteConsignado' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalCompra' is set
      if (limiteInternacionalCompra == undefined || limiteInternacionalCompra == null) {
        throw "Missing the required parameter 'limiteInternacionalCompra' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalParcelado' is set
      if (limiteInternacionalParcelado == undefined || limiteInternacionalParcelado == null) {
        throw "Missing the required parameter 'limiteInternacionalParcelado' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalParcelas' is set
      if (limiteInternacionalParcelas == undefined || limiteInternacionalParcelas == null) {
        throw "Missing the required parameter 'limiteInternacionalParcelas' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalSaqueGlobal' is set
      if (limiteInternacionalSaqueGlobal == undefined || limiteInternacionalSaqueGlobal == null) {
        throw "Missing the required parameter 'limiteInternacionalSaqueGlobal' when calling alterarLimiteUsingPUT";
      }

      // verify the required parameter 'limiteInternacionalSaquePeriodo' is set
      if (limiteInternacionalSaquePeriodo == undefined || limiteInternacionalSaquePeriodo == null) {
        throw "Missing the required parameter 'limiteInternacionalSaquePeriodo' when calling alterarLimiteUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'limiteGlobal': limiteGlobal,
        'limiteCompra': limiteCompra,
        'limiteParcelado': limiteParcelado,
        'limiteParcelas': limiteParcelas,
        'limiteSaqueGlobal': limiteSaqueGlobal,
        'limiteSaquePeriodo': limiteSaquePeriodo,
        'limiteConsignado': limiteConsignado,
        'limiteInternacionalCompra': limiteInternacionalCompra,
        'limiteInternacionalParcelado': limiteInternacionalParcelado,
        'limiteInternacionalParcelas': limiteInternacionalParcelas,
        'limiteInternacionalSaqueGlobal': limiteInternacionalSaqueGlobal,
        'limiteInternacionalSaquePeriodo': limiteInternacionalSaquePeriodo
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Conta;

      return this.apiClient.callApi(
        '/api/contas/{id}/alterar-limites', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarVencimentoUsingPUT operation.
     * @callback module:api/ContaApi~alterarVencimentoUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Conta} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar vencimento
     * Esse recurso permite alterar o vencimento de uma conta especifica.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} novoDiaVencimento Novo dia de vencimento.
     * @param {module:api/ContaApi~alterarVencimentoUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Conta}
     */
    this.alterarVencimentoUsingPUT = function(id, novoDiaVencimento, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarVencimentoUsingPUT";
      }

      // verify the required parameter 'novoDiaVencimento' is set
      if (novoDiaVencimento == undefined || novoDiaVencimento == null) {
        throw "Missing the required parameter 'novoDiaVencimento' when calling alterarVencimentoUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'novo_dia_vencimento': novoDiaVencimento
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Conta;

      return this.apiClient.callApi(
        '/api/contas/{id}/alterar-vencimento', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarDividaAtualizadaClienteUsingGET operation.
     * @callback module:api/ContaApi~consultarDividaAtualizadaClienteUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DividaClienteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar a d\u00C3\u00ADvida atualizada do cliente
     * Este recurso consulta a d\u00C3\u00ADvida atualizada do cliente
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.idConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id)
     * @param {module:model/ModelDate} opts.dataVencimento Data do vencimento
     * @param {Integer} opts.idEscritorioCobranca C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do escrit\u00C3\u00B3rio de cobran\u00C3\u00A7a
     * @param {module:api/ContaApi~consultarDividaAtualizadaClienteUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DividaClienteResponse}
     */
    this.consultarDividaAtualizadaClienteUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'idConta': opts['idConta'],
        'dataVencimento': opts['dataVencimento'],
        'idEscritorioCobranca': opts['idEscritorioCobranca']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DividaClienteResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/divida', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarFaturaConsignadaUsingGET operation.
     * @callback module:api/ContaApi~consultarFaturaConsignadaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FaturaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de uma determinada fatura consignada
     * Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar uma fatura, atrav\u00C3\u00A9s do id da conta e o id da fatura.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idHistorico C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da fatura (idHistorico).
     * @param {module:api/ContaApi~consultarFaturaConsignadaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FaturaResponse}
     */
    this.consultarFaturaConsignadaUsingGET = function(id, idHistorico, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarFaturaConsignadaUsingGET";
      }

      // verify the required parameter 'idHistorico' is set
      if (idHistorico == undefined || idHistorico == null) {
        throw "Missing the required parameter 'idHistorico' when calling consultarFaturaConsignadaUsingGET";
      }


      var pathParams = {
        'id': id,
        'idHistorico': idHistorico
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
      var returnType = FaturaResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/faturas-consignadas/{idHistorico}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarLimiteDisponibilidadeUsingGET1 operation.
     * @callback module:api/ContaApi~consultarLimiteDisponibilidadeUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/LimiteDisponibilidade} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os limites da conta
     * Este m\u00C3\u00A9todo permite consultar os Limites configurados para uma determinada Conta, a partir do c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Cart\u00C3\u00A3o (id).
     * @param {module:api/ContaApi~consultarLimiteDisponibilidadeUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/LimiteDisponibilidade}
     */
    this.consultarLimiteDisponibilidadeUsingGET1 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarLimiteDisponibilidadeUsingGET1";
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

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LimiteDisponibilidade;

      return this.apiClient.callApi(
        '/api/contas/{id}/limites-disponibilidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET15 operation.
     * @callback module:api/ContaApi~consultarUsingGET15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferencias} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta os detalhes de uma determinada transfer\u00C3\u00AAncia
     * Este m\u00C3\u00A9todo permite consultar os detalhes de uma determinada transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito realizada entre contas.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idTransferencia C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da transfer\u00C3\u00AAncia (id_transferencia).
     * @param {module:api/ContaApi~consultarUsingGET15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferencias}
     */
    this.consultarUsingGET15 = function(id, idTransferencia, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET15";
      }

      // verify the required parameter 'idTransferencia' is set
      if (idTransferencia == undefined || idTransferencia == null) {
        throw "Missing the required parameter 'idTransferencia' when calling consultarUsingGET15";
      }


      var pathParams = {
        'id': id,
        'id_transferencia': idTransferencia
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
      var returnType = PageTransferencias;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias/{id_transferencia}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET3 operation.
     * @callback module:api/ContaApi~consultarUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Conta} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de uma determinada conta
     * Este m\u00C3\u00A9todo permite consultar dados de uma determinada conta a partir de seu codigo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {module:api/ContaApi~consultarUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Conta}
     */
    this.consultarUsingGET3 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET3";
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

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Conta;

      return this.apiClient.callApi(
        '/api/contas/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the gerarCartaoUsingPOST operation.
     * @callback module:api/ContaApi~gerarCartaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CartaoImpressao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a gera\u00C3\u00A7\u00C3\u00A3o de um novo cart\u00C3\u00A3o para impress\u00C3\u00A3o avulsa
     * Este recurso permite que seja gerado um novo Cart\u00C3\u00A3o para um determinado Portador que esteja vinculado a uma Conta. Para isso, ser\u00C3\u00A1 preciso informar o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id), o idPessoa do Portador e o idTipoPlastico do Cart\u00C3\u00A3o que dever\u00C3\u00A1 ser gerado para impress\u00C3\u00A3o. Esta funcionalidade poder\u00C3\u00A1 ser utilizada para realizar a impress\u00C3\u00A3o de cart\u00C3\u00B5es em Lojas, Quiosques, Escrit\u00C3\u00B3rios, Terminais de Auto Atendimento, ou outro local que o Emissor escolher, desde que se possua uma impressora de Cart\u00C3\u00B5es habilidade para o fazer, no local.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idPessoa C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da pessoa (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idTipoPlastico C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do TipoPlastico (id).
     * @param {module:api/ContaApi~gerarCartaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CartaoImpressao}
     */
    this.gerarCartaoUsingPOST = function(id, idPessoa, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling gerarCartaoUsingPOST";
      }

      // verify the required parameter 'idPessoa' is set
      if (idPessoa == undefined || idPessoa == null) {
        throw "Missing the required parameter 'idPessoa' when calling gerarCartaoUsingPOST";
      }


      var pathParams = {
        'id': id,
        'id_pessoa': idPessoa
      };
      var queryParams = {
        'id_tipo_plastico': opts['idTipoPlastico']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CartaoImpressao;

      return this.apiClient.callApi(
        '/api/contas/{id}/pessoas/{id_pessoa}/gerar-cartao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarFaturasConsignadasUsingGET operation.
     * @callback module:api/ContaApi~listarFaturasConsignadasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageFaturas} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Faturas consignadas da Conta
     * Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar todo o Hist\u00C3\u00B3rico de Faturas vinculados a uma determinada Conta, independentemente do valor delas.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:model/ModelDate} opts.dataVencimeno Apresenta a data de vencimento da fatura.
     * @param {module:api/ContaApi~listarFaturasConsignadasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageFaturas}
     */
    this.listarFaturasConsignadasUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarFaturasConsignadasUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'dataVencimeno': opts['dataVencimeno']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageFaturas;

      return this.apiClient.callApi(
        '/api/contas/{id}/faturas-consignadas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarFaturasUsingGET operation.
     * @callback module:api/ContaApi~listarFaturasUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageFaturas} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar Faturas da Conta
     * Atrav\u00C3\u00A9s desta opera\u00C3\u00A7\u00C3\u00A3o os Emissores ou Portadores poder\u00C3\u00A3o consultar todo o Hist\u00C3\u00B3rico de Faturas vinculados a uma determinada Conta, independentemente do valor delas.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:model/ModelDate} opts.dataVencimento Data de Vencimento da Fatura.
     * @param {module:api/ContaApi~listarFaturasUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageFaturas}
     */
    this.listarFaturasUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarFaturasUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'dataVencimento': opts['dataVencimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageFaturas;

      return this.apiClient.callApi(
        '/api/contas/{id}/faturas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET15 operation.
     * @callback module:api/ContaApi~listarUsingGET15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferencias} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as transfer\u00C3\u00AAncias realizadas pela conta
     * Este m\u00C3\u00A9todo permite que sejam listadas as transfer\u00C3\u00AAncias realizadas pela conta existentes na base do emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.idTransferencia C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da transfer\u00C3\u00AAncia (id).
     * @param {Integer} opts.idContaOrigem C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta em que o valor ser\u00C3\u00A1 debitado para a transfer\u00C3\u00AAncia. (id).
     * @param {Integer} opts.idContaDestino C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta em que o valor ser\u00C3\u00A1 creditado para a transfer\u00C3\u00AAncia. (id).
     * @param {Number} opts.valorTransferencia Valor estabelecido para ser transferido.
     * @param {module:model/ModelDate} opts.dataTransferencia Data estabelecida para ocorrer a transfer\u00C3\u00AAncia.
     * @param {module:api/ContaApi~listarUsingGET15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferencias}
     */
    this.listarUsingGET15 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET15";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'idTransferencia': opts['idTransferencia'],
        'idContaOrigem': opts['idContaOrigem'],
        'idContaDestino': opts['idContaDestino'],
        'valorTransferencia': opts['valorTransferencia'],
        'dataTransferencia': opts['dataTransferencia']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTransferencias;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET3 operation.
     * @callback module:api/ContaApi~listarUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Conta} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista contas existentes na base de dados do Emissor
     * Este recurso permite listar contas existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {Integer} opts.id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o de conta (id).
     * @param {Integer} opts.idProduto C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do produto ao qual a conta faz parte. (id).
     * @param {Integer} opts.idOrigemComercial C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Origem Comercial (id) que deu origem a Conta.
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa Titular da Conta (id).
     * @param {Integer} opts.idStatusConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto a qual o cart\u00C3\u00A3o pertence (id).
     * @param {Integer} opts.diaVencimento Apresenta o dia de vencimento.
     * @param {Integer} opts.melhorDiaCompra Apresenta o melhor dia de compra.
     * @param {module:model/ModelDate} opts.dataStatusConta Apresenta a data em que o idStatusConta atual fora atribu\u00C3\u00ADdo para ela.
     * @param {module:model/ModelDate} opts.dataCadastro Apresenta a data em que o cart\u00C3\u00A3o foi gerado.
     * @param {module:model/ModelDate} opts.dataUltimaAlteracaoVencimento Apresenta a data da ultima altera\u00C3\u00A7\u00C3\u00A3o de vencimento.
     * @param {module:api/ContaApi~listarUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Conta}
     */
    this.listarUsingGET3 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'idProduto': opts['idProduto'],
        'idOrigemComercial': opts['idOrigemComercial'],
        'idPessoa': opts['idPessoa'],
        'idStatusConta': opts['idStatusConta'],
        'diaVencimento': opts['diaVencimento'],
        'melhorDiaCompra': opts['melhorDiaCompra'],
        'dataStatusConta': opts['dataStatusConta'],
        'dataCadastro': opts['dataCadastro'],
        'dataUltimaAlteracaoVencimento': opts['dataUltimaAlteracaoVencimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Conta;

      return this.apiClient.callApi(
        '/api/contas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transacoesUsingGET operation.
     * @callback module:api/ContaApi~transacoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite listar uma linha do tempo com os eventos da conta
     * Esta opera\u00C3\u00A7\u00C3\u00A3o tem como objetivo permitir a listagem, em formato de timeline, dos eventos vinculados a uma detemrinada conta. Transa\u00C3\u00A7\u00C3\u00B5es, fechamento da fatura, pagamentos, gera\u00C3\u00A7\u00C3\u00A3o de cart\u00C3\u00B5es e altera\u00C3\u00A7\u00C3\u00A3o de limite s\u00C3\u00A3o exemplos de eventos contemplados por esta funcionalidade. Neste m\u00C3\u00A9todo, as opera\u00C3\u00A7\u00C3\u00B5es s\u00C3\u00A3o ordenadas de forma decrescente.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/ContaApi~transacoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransacaoResponse}
     */
    this.transacoesUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling transacoesUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
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
      var returnType = PageTransacaoResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/timeline', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transferirUsingPOST operation.
     * @callback module:api/ContaApi~transferirUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTransferencias} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza uma transfer\u00C3\u00AAncia de Cr\u00C3\u00A9dito para outro cliente do mesmo Emissor
     * Este m\u00C3\u00A9todo permite que um portador de um cart\u00C3\u00A3o possa realizar auma transfer\u00C3\u00AAncia de cr\u00C3\u00A9dito para outro cliente do mesmo emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do cliente portador do cart\u00C3\u00A3o que ser\u00C3\u00A1 debitado (id).
     * @param {Integer} idContaDestino C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do cliente portador do cart\u00C3\u00A3o que ser\u00C3\u00A1 creditado (id).
     * @param {Number} valorTransferencia Valor da Transfer\u00C3\u00AAncia.
     * @param {module:api/ContaApi~transferirUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTransferencias}
     */
    this.transferirUsingPOST = function(id, idContaDestino, valorTransferencia, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling transferirUsingPOST";
      }

      // verify the required parameter 'idContaDestino' is set
      if (idContaDestino == undefined || idContaDestino == null) {
        throw "Missing the required parameter 'idContaDestino' when calling transferirUsingPOST";
      }

      // verify the required parameter 'valorTransferencia' is set
      if (valorTransferencia == undefined || valorTransferencia == null) {
        throw "Missing the required parameter 'valorTransferencia' when calling transferirUsingPOST";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'id_conta_destino': idContaDestino,
        'valor_transferencia': valorTransferencia
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTransferencias;

      return this.apiClient.callApi(
        '/api/contas/{id}/transferencias', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
