(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Endereco', '../model/ModelDate', '../model/PageEnderecos'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Endereco'), require('../model/ModelDate'), require('../model/PageEnderecos'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.EnderecoApi = factory(root.Pier.ApiClient, root.Pier.Endereco, root.Pier.ModelDate, root.Pier.PageEnderecos);
  }
}(this, function(ApiClient, Endereco, ModelDate, PageEnderecos) {
  'use strict';

  /**
   * Endereco service.
   * @module api/EnderecoApi
   * @version 2.0.0
   */

  /**
   * Constructs a new EnderecoApi. 
   * @alias module:api/EnderecoApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT operation.
     * @callback module:api/EnderecoApi~alterarUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Endereco} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualiza os dados de um determinado Endere\u00C3\u00A7o
     * Este m\u00C3\u00A9todo permite que seja alterado na base do emissor um ou mais registros ligados a um determinado Endere\u00C3\u00A7o.
     * @param {Integer} id id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id)
     * @param {Integer} opts.idTipoEndereco C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id)
     * @param {String} opts.cep Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) no formaro &#39;58800000&#39;
     * @param {String} opts.logradouro Apresenta o nome do Logradouro
     * @param {Integer} opts.numero Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o
     * @param {String} opts.complemento Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o
     * @param {String} opts.pontoReferencia Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o
     * @param {String} opts.bairro Apresenta nome do bairro
     * @param {String} opts.cidade Apresenta nome da cidade
     * @param {String} opts.uf Apresenta sigla da Unidade Federativa
     * @param {String} opts.pais Apresenta nome do Pais
     * @param {module:api/EnderecoApi~alterarUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Endereco}
     */
    this.alterarUsingPUT = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
        'idPessoa': opts['idPessoa'],
        'idTipoEndereco': opts['idTipoEndereco'],
        'cep': opts['cep'],
        'logradouro': opts['logradouro'],
        'numero': opts['numero'],
        'complemento': opts['complemento'],
        'pontoReferencia': opts['pontoReferencia'],
        'bairro': opts['bairro'],
        'cidade': opts['cidade'],
        'uf': opts['uf'],
        'pais': opts['pais']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Endereco;

      return this.apiClient.callApi(
        '/api/enderecos', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET2 operation.
     * @callback module:api/EnderecoApi~consultarUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Endereco} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Endere\u00C3\u00A7o
     * Este m\u00C3\u00A9todo permite consultar um determinado Endere\u00C3\u00A7o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} idEndereco C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).
     * @param {module:api/EnderecoApi~consultarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Endereco}
     */
    this.consultarUsingGET2 = function(idEndereco, callback) {
      var postBody = null;

      // verify the required parameter 'idEndereco' is set
      if (idEndereco == undefined || idEndereco == null) {
        throw "Missing the required parameter 'idEndereco' when calling consultarUsingGET2";
      }


      var pathParams = {
        'id_endereco': idEndereco
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
      var returnType = Endereco;

      return this.apiClient.callApi(
        '/api/enderecos/{id_endereco}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET2 operation.
     * @callback module:api/EnderecoApi~listarUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageEnderecos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Endere\u00C3\u00A7os cadastrados para o Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os Endere\u00C3\u00A7os existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id)
     * @param {Integer} opts.idTipoEndereco C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id)
     * @param {String} opts.cep Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP)
     * @param {String} opts.logradouro Apresenta o nome do Logradouro
     * @param {Integer} opts.numero Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o
     * @param {String} opts.complemento Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o
     * @param {String} opts.pontoReferencia Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o
     * @param {String} opts.bairro Apresenta nome do bairro
     * @param {String} opts.cidade Apresenta nome da cidade
     * @param {String} opts.uf Apresenta sigla da Unidade Federativa
     * @param {String} opts.pais Apresenta nome do Pais
     * @param {module:model/ModelDate} opts.dataInclusao Apresenta a data em que fora cadastrado o Endere\u00C3\u00A7o
     * @param {module:model/ModelDate} opts.dataUltimaAtualizacao Data em que fora realizada a \u00C3\u00BAltima mudan\u00C3\u00A7a neste registro de endere\u00C3\u00A7o. Quando n\u00C3\u00A3o tiver ocorrido mudan\u00C3\u00A7a, conter\u00C3\u00A1 a mesma informa\u00C3\u00A7\u00C3\u00A3o que o campo dataInclusao
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/EnderecoApi~listarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageEnderecos}
     */
    this.listarUsingGET2 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'idPessoa': opts['idPessoa'],
        'idTipoEndereco': opts['idTipoEndereco'],
        'cep': opts['cep'],
        'logradouro': opts['logradouro'],
        'numero': opts['numero'],
        'complemento': opts['complemento'],
        'pontoReferencia': opts['pontoReferencia'],
        'bairro': opts['bairro'],
        'cidade': opts['cidade'],
        'uf': opts['uf'],
        'pais': opts['pais'],
        'dataInclusao': opts['dataInclusao'],
        'dataUltimaAtualizacao': opts['dataUltimaAtualizacao'],
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
      var returnType = PageEnderecos;

      return this.apiClient.callApi(
        '/api/enderecos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST operation.
     * @callback module:api/EnderecoApi~salvarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Endereco} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro de um novo Endere\u00C3\u00A7o
     * Este m\u00C3\u00A9todo permite que seja cadastrado um novo Endere\u00C3\u00A7o na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id)
     * @param {Integer} opts.idTipoEndereco C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id)
     * @param {String} opts.cep Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) no formaro &#39;58800000&#39;
     * @param {String} opts.logradouro Apresenta o nome do Logradouro
     * @param {Integer} opts.numero Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o
     * @param {String} opts.complemento Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o
     * @param {String} opts.pontoReferencia Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o
     * @param {String} opts.bairro Apresenta nome do bairro
     * @param {String} opts.cidade Apresenta nome da cidade
     * @param {String} opts.uf Apresenta sigla da Unidade Federativa
     * @param {String} opts.pais Apresenta nome do Pais
     * @param {module:api/EnderecoApi~salvarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Endereco}
     */
    this.salvarUsingPOST = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idPessoa': opts['idPessoa'],
        'idTipoEndereco': opts['idTipoEndereco'],
        'cep': opts['cep'],
        'logradouro': opts['logradouro'],
        'numero': opts['numero'],
        'complemento': opts['complemento'],
        'pontoReferencia': opts['pontoReferencia'],
        'bairro': opts['bairro'],
        'cidade': opts['cidade'],
        'uf': opts['uf'],
        'pais': opts['pais']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Endereco;

      return this.apiClient.callApi(
        '/api/enderecos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
