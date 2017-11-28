(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PessoaJuridicaResponse', '../model/TerminalUpdate', '../model/TerminalResponse', '../model/EstabelecimentoResponse', '../model/PageEstabelecimentoResponse', '../model/PagePessoaJuridicaResponse', '../model/PageTerminalResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PessoaJuridicaResponse'), require('../model/TerminalUpdate'), require('../model/TerminalResponse'), require('../model/EstabelecimentoResponse'), require('../model/PageEstabelecimentoResponse'), require('../model/PagePessoaJuridicaResponse'), require('../model/PageTerminalResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.EstabelecimentoApi = factory(root.Pier.ApiClient, root.Pier.PessoaJuridicaResponse, root.Pier.TerminalUpdate, root.Pier.TerminalResponse, root.Pier.EstabelecimentoResponse, root.Pier.PageEstabelecimentoResponse, root.Pier.PagePessoaJuridicaResponse, root.Pier.PageTerminalResponse);
  }
}(this, function(ApiClient, PessoaJuridicaResponse, TerminalUpdate, TerminalResponse, EstabelecimentoResponse, PageEstabelecimentoResponse, PagePessoaJuridicaResponse, PageTerminalResponse) {
  'use strict';

  /**
   * Estabelecimento service.
   * @module api/EstabelecimentoApi
   * @version 2.46.3
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
     * Callback function to receive the result of the alterarUsingPUT10 operation.
     * @callback module:api/EstabelecimentoApi~alterarUsingPUT10Callback
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
     * @param {module:api/EstabelecimentoApi~alterarUsingPUT10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaJuridicaResponse}
     */
    this.alterarUsingPUT10 = function(id, razaoSocial, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT10";
      }

      // verify the required parameter 'razaoSocial' is set
      if (razaoSocial == undefined || razaoSocial == null) {
        throw "Missing the required parameter 'razaoSocial' when calling alterarUsingPUT10";
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
     * @param {module:model/TerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera um Terminal
     * Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos Terminais.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal (id).
     * @param {module:model/TerminalUpdate} terminalUpdate terminalUpdate
     * @param {module:api/EstabelecimentoApi~alterarUsingPUT13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TerminalResponse}
     */
    this.alterarUsingPUT13 = function(id, terminalUpdate, callback) {
      var postBody = terminalUpdate;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT13";
      }

      // verify the required parameter 'terminalUpdate' is set
      if (terminalUpdate == undefined || terminalUpdate == null) {
        throw "Missing the required parameter 'terminalUpdate' when calling alterarUsingPUT13";
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
     * Callback function to receive the result of the cadastrarUsingPOST2 operation.
     * @callback module:api/EstabelecimentoApi~cadastrarUsingPOST2Callback
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
     * @param {module:api/EstabelecimentoApi~cadastrarUsingPOST2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaJuridicaResponse}
     */
    this.cadastrarUsingPOST2 = function(razaoSocial, cnpj, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'razaoSocial' is set
      if (razaoSocial == undefined || razaoSocial == null) {
        throw "Missing the required parameter 'razaoSocial' when calling cadastrarUsingPOST2";
      }

      // verify the required parameter 'cnpj' is set
      if (cnpj == undefined || cnpj == null) {
        throw "Missing the required parameter 'cnpj' when calling cadastrarUsingPOST2";
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
     * Callback function to receive the result of the consultarUsingGET14 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EstabelecimentoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar estabelecimento por id
     * Consulta os detalhes de um determinado estabelecimento
     * @param {Integer} id Id
     * @param {module:api/EstabelecimentoApi~consultarUsingGET14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EstabelecimentoResponse}
     */
    this.consultarUsingGET14 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET14";
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
     * Callback function to receive the result of the consultarUsingGET19 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaJuridicaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consultar pessoa jur\u00C3\u00ADdica
     * Consulta uma pessoa jur\u00C3\u00ADdica atrav\u00C3\u00A9s do seu identificador.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da pessoa jur\u00C3\u00ADdica
     * @param {module:api/EstabelecimentoApi~consultarUsingGET19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaJuridicaResponse}
     */
    this.consultarUsingGET19 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET19";
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
     * Callback function to receive the result of the consultarUsingGET26 operation.
     * @callback module:api/EstabelecimentoApi~consultarUsingGET26Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TerminalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Terminal
     * Este m\u00C3\u00A9todo permite consultar um determinado Terminal a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).
     * @param {module:api/EstabelecimentoApi~consultarUsingGET26Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TerminalResponse}
     */
    this.consultarUsingGET26 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET26";
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
     * Callback function to receive the result of the listarUsingGET18 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET18Callback
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
     * @param {module:api/EstabelecimentoApi~listarUsingGET18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageEstabelecimentoResponse}
     */
    this.listarUsingGET18 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET23 operation.
     * @callback module:api/EstabelecimentoApi~listarUsingGET23Callback
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
     * @param {module:api/EstabelecimentoApi~listarUsingGET23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePessoaJuridicaResponse}
     */
    this.listarUsingGET23 = function(opts, callback) {
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
     * @param {module:api/EstabelecimentoApi~listarUsingGET33Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTerminalResponse}
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
     * Callback function to receive the result of the salvarUsingPOST20 operation.
     * @callback module:api/EstabelecimentoApi~salvarUsingPOST20Callback
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
     * @param {module:api/EstabelecimentoApi~salvarUsingPOST20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TerminalResponse}
     */
    this.salvarUsingPOST20 = function(idEstabelecimento, flagConsultaExtrato, flagTerminalVirtual, callback) {
      var postBody = null;

      // verify the required parameter 'idEstabelecimento' is set
      if (idEstabelecimento == undefined || idEstabelecimento == null) {
        throw "Missing the required parameter 'idEstabelecimento' when calling salvarUsingPOST20";
      }

      // verify the required parameter 'flagConsultaExtrato' is set
      if (flagConsultaExtrato == undefined || flagConsultaExtrato == null) {
        throw "Missing the required parameter 'flagConsultaExtrato' when calling salvarUsingPOST20";
      }

      // verify the required parameter 'flagTerminalVirtual' is set
      if (flagTerminalVirtual == undefined || flagTerminalVirtual == null) {
        throw "Missing the required parameter 'flagTerminalVirtual' when calling salvarUsingPOST20";
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
