(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PessoaJuridicaResponse', '../model/TelefoneEstabelecimentoResponse', '../model/TerminalUpdate', '../model/TerminalResponse', '../model/CredorResponse', '../model/CredorDTO', '../model/DetalheOperacaoResponse', '../model/EstabelecimentoResponse', '../model/PageOperacaoResponse', '../model/PageCredorResponse', '../model/PageEstabelecimentoResponse', '../model/PagePessoaJuridicaResponse', '../model/PageTelefoneEstabelecimentoResponse', '../model/PageTerminalResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PessoaJuridicaResponse'), require('../model/TelefoneEstabelecimentoResponse'), require('../model/TerminalUpdate'), require('../model/TerminalResponse'), require('../model/CredorResponse'), require('../model/CredorDTO'), require('../model/DetalheOperacaoResponse'), require('../model/EstabelecimentoResponse'), require('../model/PageOperacaoResponse'), require('../model/PageCredorResponse'), require('../model/PageEstabelecimentoResponse'), require('../model/PagePessoaJuridicaResponse'), require('../model/PageTelefoneEstabelecimentoResponse'), require('../model/PageTerminalResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.EstabelecimentoApi = factory(root.Pier.ApiClient, root.Pier.PessoaJuridicaResponse, root.Pier.TelefoneEstabelecimentoResponse, root.Pier.TerminalUpdate, root.Pier.TerminalResponse, root.Pier.CredorResponse, root.Pier.CredorDTO, root.Pier.DetalheOperacaoResponse, root.Pier.EstabelecimentoResponse, root.Pier.PageOperacaoResponse, root.Pier.PageCredorResponse, root.Pier.PageEstabelecimentoResponse, root.Pier.PagePessoaJuridicaResponse, root.Pier.PageTelefoneEstabelecimentoResponse, root.Pier.PageTerminalResponse);
  }
}(this, function(ApiClient, PessoaJuridicaResponse, TelefoneEstabelecimentoResponse, TerminalUpdate, TerminalResponse, CredorResponse, CredorDTO, DetalheOperacaoResponse, EstabelecimentoResponse, PageOperacaoResponse, PageCredorResponse, PageEstabelecimentoResponse, PagePessoaJuridicaResponse, PageTelefoneEstabelecimentoResponse, PageTerminalResponse) {
  'use strict';

  /**
   * Estabelecimento service.
   * @module api/EstabelecimentoApi
   * @version 2.50.4
   */

  /**
   * Constructs a new EstabelecimentoApi. 
   * @alias module:api/EstabelecimentoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT11 operation.
     * @callback module:api/EstabelecimentoApi~alterarUsingPUT11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaJuridicaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar Pessoa Jur\u00C3\u00ADdica
     * Altera uma pessoa jur\u00C3\u00ADdica.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da pessoa jur\u00C3\u00ADdica
     * @param {String} razaoSocial Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
     * @param {Object} opts Optional parameters
     * @param {String} opts.inscricaoEstadual N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual
     * @param {String} opts.contato Nome da pessoa para entrar em contato
     * @param {Integer} opts.banco C\u00C3\u00B3digo do banco
     * @param {Integer} opts.agencia Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
     * @param {String} opts.digitoVerificadorAgencia D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia
     * @param {String} opts.contaCorrente C\u00C3\u00B3digo da Conta Corrente
     * @param {String} opts.digitoVerificadorContaCorrente D\u00C3\u00ADgito Verificador da Conta Corrente
     * @param {module:api/EstabelecimentoApi~alterarUsingPUT11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaJuridicaResponse}
     */
    this.alterarUsingPUT11 = function(id, razaoSocial, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT11";
      }

      // verify the required parameter 'razaoSocial' is set
      if (razaoSocial == undefined || razaoSocial == null) {
        throw "Missing the required parameter 'razaoSocial' when calling alterarUsingPUT11";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'razaoSocial': razaoSocial,
        'inscricaoEstadual': opts['inscricaoEstadual'],
        'contato': opts['contato'],
        'banco': opts['banco'],
        'agencia': opts['agencia'],
        'digitoVerificadorAgencia': opts['digitoVerificadorAgencia'],
        'contaCorrente': opts['contaCorrente'],
        'digitoVerificadorContaCorrente': opts['digitoVerificadorContaCorrente']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PessoaJuridicaResponse;

      return this.apiClient.callApi(
        '/api/pessoas-juridicas/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT13 operation.
     * @callback module:api/EstabelecimentoApi~alterarUsingPUT13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera um Telefone do estabelecimento
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos telefones dos estabelecimentos.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone Estabelecimento (id).
     * @param {String} ddd C\u00C3\u00B3digo DDD do telefone (id).
     * @param {String} telefone N\u00C3\u00BAmero do telefone.
     * @param {Object} opts Optional parameters
     * @param {String} opts.ramal N\u00C3\u00BAmero do ramal.
     * @param {module:api/EstabelecimentoApi~alterarUsingPUT13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneEstabelecimentoResponse}
     */
    this.alterarUsingPUT13 = function(id, ddd, telefone, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT13";
      }

      // verify the required parameter 'ddd' is set
      if (ddd == undefined || ddd == null) {
        throw "Missing the required parameter 'ddd' when calling alterarUsingPUT13";
      }

      // verify the required parameter 'telefone' is set
      if (telefone == undefined || telefone == null) {
        throw "Missing the required parameter 'telefone' when calling alterarUsingPUT13";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'ddd': ddd,
        'telefone': telefone,
        'ramal': opts['ramal']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TelefoneEstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/telefones-estabelecimentos/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT15 operation.
     * @callback module:api/EstabelecimentoApi~alterarUsingPUT15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera um Terminal
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos Terminais.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal (id).
     * @param {module:model/TerminalUpdate} terminalUpdate terminalUpdate
     * @param {module:api/EstabelecimentoApi~alterarUsingPUT15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TerminalResponse}
     */
    this.alterarUsingPUT15 = function(id, terminalUpdate, callback) {
      var postBody = terminalUpdate;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT15";
      }

      // verify the required parameter 'terminalUpdate' is set
      if (terminalUpdate == undefined || terminalUpdate == null) {
        throw "Missing the required parameter 'terminalUpdate' when calling alterarUsingPUT15";
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
      var returnType = TerminalResponse;

      return this.apiClient.callApi(
        '/api/terminais/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT5 operation.
     * @callback module:api/EstabelecimentoApi~alterarUsingPUT5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CredorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alterar Credor
     * Altera um credor.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da credor
     * @param {module:model/CredorDTO} credorUpdate credorUpdate
     * @param {module:api/EstabelecimentoApi~alterarUsingPUT5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredorResponse}
     */
    this.alterarUsingPUT5 = function(id, credorUpdate, callback) {
      var postBody = credorUpdate;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT5";
      }

      // verify the required parameter 'credorUpdate' is set
      if (credorUpdate == undefined || credorUpdate == null) {
        throw "Missing the required parameter 'credorUpdate' when calling alterarUsingPUT5";
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
      var returnType = CredorResponse;

      return this.apiClient.callApi(
        '/api/credores/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarUsingPOST2 operation.
     * @callback module:api/EstabelecimentoApi~cadastrarUsingPOST2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CredorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastrar Credor
     * Cadastra um credor.
     * @param {module:model/CredorDTO} credorPersist credorPersist
     * @param {module:api/EstabelecimentoApi~cadastrarUsingPOST2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredorResponse}
     */
    this.cadastrarUsingPOST2 = function(credorPersist, callback) {
      var postBody = credorPersist;

      // verify the required parameter 'credorPersist' is set
      if (credorPersist == undefined || credorPersist == null) {
        throw "Missing the required parameter 'credorPersist' when calling cadastrarUsingPOST2";
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
      var returnType = CredorResponse;

      return this.apiClient.callApi(
        '/api/credores', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarUsingPOST3 operation.
     * @callback module:api/EstabelecimentoApi~cadastrarUsingPOST3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaJuridicaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastrar Pessoa Jur\u00C3\u00ADdica
     * Cadastra uma pessoa jur\u00C3\u00ADdica.
     * @param {String} razaoSocial Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
     * @param {String} cnpj C\u00C3\u00B3digo do Cadastro Nacional de Pessoas Jur\u00C3\u00ADdicas
     * @param {Object} opts Optional parameters
     * @param {String} opts.inscricaoEstadual N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual
     * @param {String} opts.contato Nome da pessoa para entrar em contato
     * @param {Integer} opts.banco C\u00C3\u00B3digo do banco
     * @param {Integer} opts.agencia Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
     * @param {String} opts.digitoVerificadorAgencia D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia
     * @param {String} opts.contaCorrente C\u00C3\u00B3digo da Conta Corrente
     * @param {String} opts.digitoVerificadorContaCorrente D\u00C3\u00ADgito Verificador da Conta Corrente
     * @param {module:api/EstabelecimentoApi~cadastrarUsingPOST3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaJuridicaResponse}
     */
    this.cadastrarUsingPOST3 = function(razaoSocial, cnpj, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'razaoSocial' is set
      if (razaoSocial == undefined || razaoSocial == null) {
        throw "Missing the required parameter 'razaoSocial' when calling cadastrarUsingPOST3";
      }

      // verify the required parameter 'cnpj' is set
      if (cnpj == undefined || cnpj == null) {
        throw "Missing the required parameter 'cnpj' when calling cadastrarUsingPOST3";
      }


      var pathParams = {
      };
      var queryParams = {
        'razaoSocial': razaoSocial,
        'cnpj': cnpj,
        'inscricaoEstadual': opts['inscricaoEstadual'],
        'contato': opts['contato'],
        'banco': opts['banco'],
        'agencia': opts['agencia'],
        'digitoVerificadorAgencia': opts['digitoVerificadorAgencia'],
        'contaCorrente': opts['contaCorrente'],
        'digitoVerificadorContaCorrente': opts['digitoVerificadorContaCorrente']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PessoaJuridicaResponse;

      return this.apiClient.callApi(
        '/api/pessoas-juridicas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultaOperacaoUsingGET operation.
     * @callback module:api/EstabelecimentoApi~consultaOperacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DetalheOperacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de um determinado tipo de opera\u00C3\u00A7\u00C3\u00A3o
     * Este recurso permite consultar dados de um determinado tipo opera\u00C3\u00A7\u00C3\u00A3o a partir do idoperacao
     * @param {Integer} id C\u00C3\u00B3digo de processamento da opera\u00C3\u00A7\u00C3\u00A3o (idOperacao).
     * @param {module:api/EstabelecimentoApi~consultaOperacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DetalheOperacaoResponse}
     */
    this.consultaOperacaoUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultaOperacaoUsingGET";
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
      var returnType = DetalheOperacaoResponse;

      return this.apiClient.callApi(
        '/api/tipos-operacoes-estabelecimentos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET12 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CredorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar credor
     * Consulta um credor atrav\u00C3\u00A9s do seu identificador.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da credor
     * @param {module:api/EstabelecimentoApi~consultarUsingGET12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CredorResponse}
     */
    this.consultarUsingGET12 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET12";
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
      var returnType = CredorResponse;

      return this.apiClient.callApi(
        '/api/credores/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET16 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar estabelecimento por id
     * Consulta os detalhes de um determinado estabelecimento
     * @param {Integer} id Id
     * @param {module:api/EstabelecimentoApi~consultarUsingGET16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstabelecimentoResponse}
     */
    this.consultarUsingGET16 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET16";
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
      var returnType = EstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/estabelecimentos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET21 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaJuridicaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar pessoa jur\u00C3\u00ADdica
     * Consulta uma pessoa jur\u00C3\u00ADdica atrav\u00C3\u00A9s do seu identificador.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da pessoa jur\u00C3\u00ADdica
     * @param {module:api/EstabelecimentoApi~consultarUsingGET21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaJuridicaResponse}
     */
    this.consultarUsingGET21 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET21";
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
      var returnType = PessoaJuridicaResponse;

      return this.apiClient.callApi(
        '/api/pessoas-juridicas/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET27 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET27Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado telefone de um estabelecimento
     * Este m\u00C3\u00A9todo permite consultar um determinado telefone de um estabelecimento a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone Estabelecimento (id).
     * @param {module:api/EstabelecimentoApi~consultarUsingGET27Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneEstabelecimentoResponse}
     */
    this.consultarUsingGET27 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET27";
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
      var returnType = TelefoneEstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/telefones-estabelecimentos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET29 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET29Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Terminal
     * Este m\u00C3\u00A9todo permite consultar um determinado Terminal a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).
     * @param {module:api/EstabelecimentoApi~consultarUsingGET29Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TerminalResponse}
     */
    this.consultarUsingGET29 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET29";
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
      var returnType = TerminalResponse;

      return this.apiClient.callApi(
        '/api/terminais/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listaOperacaoUsingGET operation.
     * @callback module:api/EstabelecimentoApi~listaOperacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOperacaoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta dados de opera\u00C3\u00A7\u00C3\u00B5es em uma lista
     * Este recurso permite listar as opera\u00C3\u00A7\u00C3\u00A3o
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idOperacao C\u00C3\u00B3digo que identifica a opera\u00C3\u00A7\u00C3\u00A3o
     * @param {String} opts.codigoProcessamento C\u00C3\u00B3digo de processamento usado em transa\u00C3\u00A7\u00C3\u00B5es com o autorizador
     * @param {module:api/EstabelecimentoApi~listaOperacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOperacaoResponse}
     */
    this.listaOperacaoUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idOperacao': opts['idOperacao'],
        'codigoProcessamento': opts['codigoProcessamento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageOperacaoResponse;

      return this.apiClient.callApi(
        '/api/tipos-operacoes-estabelecimentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET14 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCredorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar credores
     * Lista credores cadastrados. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idPessoaJuridica Identificador da pessoa jur\u00C3\u00ADdica do credor
     * @param {String} opts.nome Nome do credor
     * @param {module:model/String} opts.periodicidade Periodicidade do pagamento
     * @param {module:model/String} opts.pagamentoSemanal Dia para pagamento semanal
     * @param {Integer} opts.pagamentoMensal Dia da data para o pagamento mensal
     * @param {Integer} opts.pagamentoDecendialPrimeiro Dia da data para o primeiro pagamento decendial
     * @param {Integer} opts.pagamentoDecendialSegundo Dia da data para o segundo pagamento decendial
     * @param {Integer} opts.pagamentoDecendialTerceiro Dia da data para o terceiro pagamento decendial
     * @param {Integer} opts.pagamentoQuinzenalPrimeiro Dia da data para o primeiro pagamento quinzenal
     * @param {Integer} opts.pagamentoQuinzenalSegundo Dia da data para o segundo pagamento quinzenal
     * @param {Boolean} opts.credorBanco Indica se este credor pode ser um Credor RAV de outros credores
     * @param {Number} opts.percentualRAV Valor percentual do RAV do credor
     * @param {module:model/String} opts.recebeRAV Indica se o credor recebe RAV e o tipo
     * @param {Number} opts.percentualMultiplica Percentual Multiplica
     * @param {Number} opts.taxaAdm Taxa Administrativa
     * @param {Number} opts.taxaBanco Taxa do Banco
     * @param {Number} opts.limiteRAV Valor limite do RAV
     * @param {Integer} opts.idCredorRAV C\u00C3\u00B3digo identificador do credor RAV
     * @param {Integer} opts.banco C\u00C3\u00B3digo do banco
     * @param {Integer} opts.agencia Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
     * @param {String} opts.digitoVerificadorAgencia D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia
     * @param {String} opts.contaCorrente C\u00C3\u00B3digo da Conta Corrente
     * @param {String} opts.digitoVerificadorContaCorrente D\u00C3\u00ADgito Verificador da Conta Corrente
     * @param {module:api/EstabelecimentoApi~listarUsingGET14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCredorResponse}
     */
    this.listarUsingGET14 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idPessoaJuridica': opts['idPessoaJuridica'],
        'nome': opts['nome'],
        'periodicidade': opts['periodicidade'],
        'pagamentoSemanal': opts['pagamentoSemanal'],
        'pagamentoMensal': opts['pagamentoMensal'],
        'pagamentoDecendialPrimeiro': opts['pagamentoDecendialPrimeiro'],
        'pagamentoDecendialSegundo': opts['pagamentoDecendialSegundo'],
        'pagamentoDecendialTerceiro': opts['pagamentoDecendialTerceiro'],
        'pagamentoQuinzenalPrimeiro': opts['pagamentoQuinzenalPrimeiro'],
        'pagamentoQuinzenalSegundo': opts['pagamentoQuinzenalSegundo'],
        'credorBanco': opts['credorBanco'],
        'percentualRAV': opts['percentualRAV'],
        'recebeRAV': opts['recebeRAV'],
        'percentualMultiplica': opts['percentualMultiplica'],
        'taxaAdm': opts['taxaAdm'],
        'taxaBanco': opts['taxaBanco'],
        'limiteRAV': opts['limiteRAV'],
        'idCredorRAV': opts['idCredorRAV'],
        'banco': opts['banco'],
        'agencia': opts['agencia'],
        'digitoVerificadorAgencia': opts['digitoVerificadorAgencia'],
        'contaCorrente': opts['contaCorrente'],
        'digitoVerificadorContaCorrente': opts['digitoVerificadorContaCorrente']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageCredorResponse;

      return this.apiClient.callApi(
        '/api/credores', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET19 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista Estabelecimentos
     * Lista todas os Estabelecimentos
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id).
     * @param {Integer} opts.numeroReceitaFederal Apresenta o n\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento na Receita Federal.
     * @param {String} opts.nome Nome do Estabelecimento.
     * @param {String} opts.descricao Raz\u00C3\u00A3o Social do Estabelecimento.
     * @param {String} opts.nomeFantasia T\u00C3\u00ADtulo Comercial do Estabelecimento.
     * @param {String} opts.cep C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP).
     * @param {String} opts.nomeLogradouro Nome do Logradouro.
     * @param {Integer} opts.numeroEndereco N\u00C3\u00BAmero do endere\u00C3\u00A7o.
     * @param {String} opts.complemento Descri\u00C3\u00A7\u00C3\u00B5es complementares referente ao endere\u00C3\u00A7o.
     * @param {String} opts.bairro Nome do bairro do endere\u00C3\u00A7o.
     * @param {String} opts.cidade Nome da cidade do endere\u00C3\u00A7o.
     * @param {String} opts.uf Sigla de identifica\u00C3\u00A7\u00C3\u00A3o da Unidade Federativa do endere\u00C3\u00A7o.
     * @param {String} opts.pais Nome do pa\u00C3\u00ADs.
     * @param {String} opts.dataCadastramento Data de Cadastro do Estabelecimento, no formato yyyy-MM-dd.
     * @param {String} opts.contato Nome da pessoa para contato com o Estabelecimento.
     * @param {String} opts.email E-mail da pessoa para contato com o Estabelecimento.
     * @param {Integer} opts.flagArquivoSecrFazenda Indica se o estabelecimento ser\u00C3\u00A1 inclu\u00C3\u00ADdo no arquivo de registro para a Secretaria da Fazenda Estadual.
     * @param {Integer} opts.flagCartaoDigitado Indica se o estabelecimento poder\u00C3\u00A1 originar transa\u00C3\u00A7\u00C3\u00B5es sem a leitura da tarja ou do chip do cart\u00C3\u00A3o.
     * @param {Integer} opts.inativo Indica se o estabelecimento est\u00C3\u00A1 inativo.
     * @param {module:api/EstabelecimentoApi~listarUsingGET19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageEstabelecimentoResponse}
     */
    this.listarUsingGET19 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'numeroReceitaFederal': opts['numeroReceitaFederal'],
        'nome': opts['nome'],
        'descricao': opts['descricao'],
        'nomeFantasia': opts['nomeFantasia'],
        'cep': opts['cep'],
        'nomeLogradouro': opts['nomeLogradouro'],
        'numeroEndereco': opts['numeroEndereco'],
        'complemento': opts['complemento'],
        'bairro': opts['bairro'],
        'cidade': opts['cidade'],
        'uf': opts['uf'],
        'pais': opts['pais'],
        'dataCadastramento': opts['dataCadastramento'],
        'contato': opts['contato'],
        'email': opts['email'],
        'flagArquivoSecrFazenda': opts['flagArquivoSecrFazenda'],
        'flagCartaoDigitado': opts['flagCartaoDigitado'],
        'inativo': opts['inativo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageEstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/estabelecimentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET24 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET24Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePessoaJuridicaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar pessoas jur\u00C3\u00ADdicas
     * Lista pessoas jur\u00C3\u00ADdicas cadastradas. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.razaoSocial Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
     * @param {String} opts.cnpj C\u00C3\u00B3digo do Cadastro Nacional de Pessoas Jur\u00C3\u00ADdicas
     * @param {String} opts.inscricaoEstadual N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual
     * @param {String} opts.contato Nome da pessoa para entrar em contato
     * @param {Integer} opts.banco C\u00C3\u00B3digo do banco
     * @param {Integer} opts.agencia Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
     * @param {String} opts.digitoVerificadorAgencia D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia
     * @param {String} opts.contaCorrente C\u00C3\u00B3digo da Conta Corrente
     * @param {String} opts.digitoVerificadorContaCorrente D\u00C3\u00ADgito Verificador da Conta Corrente
     * @param {module:api/EstabelecimentoApi~listarUsingGET24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePessoaJuridicaResponse}
     */
    this.listarUsingGET24 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'razaoSocial': opts['razaoSocial'],
        'cnpj': opts['cnpj'],
        'inscricaoEstadual': opts['inscricaoEstadual'],
        'contato': opts['contato'],
        'banco': opts['banco'],
        'agencia': opts['agencia'],
        'digitoVerificadorAgencia': opts['digitoVerificadorAgencia'],
        'contaCorrente': opts['contaCorrente'],
        'digitoVerificadorContaCorrente': opts['digitoVerificadorContaCorrente']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePessoaJuridicaResponse;

      return this.apiClient.callApi(
        '/api/pessoas-juridicas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET33 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET33Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTelefoneEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Telefones Estabelecimentos
     * Este m\u00C3\u00A9todo permite que sejam listados os telefones dos estabelecimentos existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idEstabelecimento C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Estabelecimento (id).
     * @param {module:api/EstabelecimentoApi~listarUsingGET33Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTelefoneEstabelecimentoResponse}
     */
    this.listarUsingGET33 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idEstabelecimento': opts['idEstabelecimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTelefoneEstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/telefones-estabelecimentos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET35 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET35Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Terminais cadastrados no Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os terminais existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).
     * @param {String} opts.terminal C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal.
     * @param {Integer} opts.numeroEstabelecimento N\u00C3\u00BAmero do estabelecimento a qual o terminal pertence.
     * @param {Integer} opts.idEstabelecimento N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento a qual o terminal pertence.
     * @param {module:api/EstabelecimentoApi~listarUsingGET35Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTerminalResponse}
     */
    this.listarUsingGET35 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'terminal': opts['terminal'],
        'numeroEstabelecimento': opts['numeroEstabelecimento'],
        'idEstabelecimento': opts['idEstabelecimento']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTerminalResponse;

      return this.apiClient.callApi(
        '/api/terminais', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST19 operation.
     * @callback module:api/EstabelecimentoApi~salvarUsingPOST19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneEstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro de um novo telefone para um estabelecimento 
     * Este m\u00C3\u00A9todo permite que seja cadastrado um novo telefone para um estabelecimento.
     * @param {Integer} idEstabelecimento C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento (id).
     * @param {String} ddd C\u00C3\u00B3digo DDD do telefone (id).
     * @param {String} telefone N\u00C3\u00BAmero do telefone.
     * @param {Object} opts Optional parameters
     * @param {String} opts.ramal N\u00C3\u00BAmero do ramal.
     * @param {module:api/EstabelecimentoApi~salvarUsingPOST19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneEstabelecimentoResponse}
     */
    this.salvarUsingPOST19 = function(idEstabelecimento, ddd, telefone, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idEstabelecimento' is set
      if (idEstabelecimento == undefined || idEstabelecimento == null) {
        throw "Missing the required parameter 'idEstabelecimento' when calling salvarUsingPOST19";
      }

      // verify the required parameter 'ddd' is set
      if (ddd == undefined || ddd == null) {
        throw "Missing the required parameter 'ddd' when calling salvarUsingPOST19";
      }

      // verify the required parameter 'telefone' is set
      if (telefone == undefined || telefone == null) {
        throw "Missing the required parameter 'telefone' when calling salvarUsingPOST19";
      }


      var pathParams = {
      };
      var queryParams = {
        'idEstabelecimento': idEstabelecimento,
        'ddd': ddd,
        'telefone': telefone,
        'ramal': opts['ramal']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TelefoneEstabelecimentoResponse;

      return this.apiClient.callApi(
        '/api/telefones-estabelecimentos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST21 operation.
     * @callback module:api/EstabelecimentoApi~salvarUsingPOST21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro de um novo Terminal
     * Este m\u00C3\u00A9todo permite que seja cadastrado um novo Terminal.
     * @param {Integer} idEstabelecimento Apresenta o id do estabelecimento.
     * @param {Boolean} flagConsultaExtrato Flag indicando se o terminal \u00C3\u00A9 f\u00C3\u00ADsico ou virtual, sendo: (true: Sim), (false: N\u00C3\u00A3o)).
     * @param {Boolean} flagTerminalVirtual Flag indicando se o terminal permite consultar extrato, sendo: (true: Sim), (false: N\u00C3\u00A3o)).
     * @param {module:api/EstabelecimentoApi~salvarUsingPOST21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TerminalResponse}
     */
    this.salvarUsingPOST21 = function(idEstabelecimento, flagConsultaExtrato, flagTerminalVirtual, callback) {
      var postBody = null;

      // verify the required parameter 'idEstabelecimento' is set
      if (idEstabelecimento == undefined || idEstabelecimento == null) {
        throw "Missing the required parameter 'idEstabelecimento' when calling salvarUsingPOST21";
      }

      // verify the required parameter 'flagConsultaExtrato' is set
      if (flagConsultaExtrato == undefined || flagConsultaExtrato == null) {
        throw "Missing the required parameter 'flagConsultaExtrato' when calling salvarUsingPOST21";
      }

      // verify the required parameter 'flagTerminalVirtual' is set
      if (flagTerminalVirtual == undefined || flagTerminalVirtual == null) {
        throw "Missing the required parameter 'flagTerminalVirtual' when calling salvarUsingPOST21";
      }


      var pathParams = {
      };
      var queryParams = {
        'idEstabelecimento': idEstabelecimento,
        'flagConsultaExtrato': flagConsultaExtrato,
        'flagTerminalVirtual': flagTerminalVirtual
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TerminalResponse;

      return this.apiClient.callApi(
        '/api/terminais', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
