(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Endereco', '../model/ModelDate', '../model/Pessoa', '../model/Telefone', '../model/OrigemComercial', '../model/Produto', '../model/TipoEndereco', '../model/TipoTelefone', '../model/PageOrigensComerciais', '../model/ListaProdutos', '../model/PageEnderecos', '../model/PagePessoas', '../model/PagePortador', '../model/PageTelefones', '../model/PageTiposEndereco', '../model/PageTipoTelefones'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Endereco'), require('../model/ModelDate'), require('../model/Pessoa'), require('../model/Telefone'), require('../model/OrigemComercial'), require('../model/Produto'), require('../model/TipoEndereco'), require('../model/TipoTelefone'), require('../model/PageOrigensComerciais'), require('../model/ListaProdutos'), require('../model/PageEnderecos'), require('../model/PagePessoas'), require('../model/PagePortador'), require('../model/PageTelefones'), require('../model/PageTiposEndereco'), require('../model/PageTipoTelefones'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CadastrosGeraisApi = factory(root.Pier.ApiClient, root.Pier.Endereco, root.Pier.ModelDate, root.Pier.Pessoa, root.Pier.Telefone, root.Pier.OrigemComercial, root.Pier.Produto, root.Pier.TipoEndereco, root.Pier.TipoTelefone, root.Pier.PageOrigensComerciais, root.Pier.ListaProdutos, root.Pier.PageEnderecos, root.Pier.PagePessoas, root.Pier.PagePortador, root.Pier.PageTelefones, root.Pier.PageTiposEndereco, root.Pier.PageTipoTelefones);
  }
}(this, function(ApiClient, Endereco, ModelDate, Pessoa, Telefone, OrigemComercial, Produto, TipoEndereco, TipoTelefone, PageOrigensComerciais, ListaProdutos, PageEnderecos, PagePessoas, PagePortador, PageTelefones, PageTiposEndereco, PageTipoTelefones) {
  'use strict';

  /**
   * CadastrosGerais service.
   * @module api/CadastrosGeraisApi
   * @version 2.0.0
   */

  /**
   * Constructs a new CadastrosGeraisApi. 
   * @alias module:api/CadastrosGeraisApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT operation.
     * @callback module:api/CadastrosGeraisApi~alterarUsingPUTCallback
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
     * @param {module:api/CadastrosGeraisApi~alterarUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the alterarUsingPUT1 operation.
     * @callback module:api/CadastrosGeraisApi~alterarUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Pessoa} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualiza os dados de uma determinada Pessoa
     * Este m\u00C3\u00A9todo permite que seja alterado na base do emissor um registro de determinada Pessoa.
     * @param {Integer} id ID da Pessoa
     * @param {String} nome Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)&#39;.
     * @param {String} tipo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00C3\u00ADsica), (\&quot;PJ\&quot;: Pessoa Jur\u00C3\u00ADdica).
     * @param {Object} opts Optional parameters
     * @param {String} opts.cpf N\u00C3\u00BAmero do CPF, quando PF.
     * @param {String} opts.cnpj N\u00C3\u00BAmero do CNPJ, quando PJ.
     * @param {module:model/ModelDate} opts.dataNascimento Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ.
     * @param {String} opts.sexo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00C3\u00A3o Especificado).
     * @param {module:api/CadastrosGeraisApi~alterarUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Pessoa}
     */
    this.alterarUsingPUT1 = function(id, nome, tipo, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT1";
      }

      // verify the required parameter 'nome' is set
      if (nome == undefined || nome == null) {
        throw "Missing the required parameter 'nome' when calling alterarUsingPUT1";
      }

      // verify the required parameter 'tipo' is set
      if (tipo == undefined || tipo == null) {
        throw "Missing the required parameter 'tipo' when calling alterarUsingPUT1";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
        'nome': nome,
        'tipo': tipo,
        'cpf': opts['cpf'],
        'cnpj': opts['cnpj'],
        'dataNascimento': opts['dataNascimento'],
        'sexo': opts['sexo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Pessoa;

      return this.apiClient.callApi(
        '/api/pessoas', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT2 operation.
     * @callback module:api/CadastrosGeraisApi~alterarUsingPUT2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Telefone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza a altera\u00C3\u00A7\u00C3\u00A3o de um determinado Telefone
     * Este m\u00C3\u00A9todo permite que seja alterado um determinado Telefone na base de dados do Emissor.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone (id).
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idTipoTelefone C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
     * @param {String} opts.ddd C\u00C3\u00B3digo DDD do telefone (id).
     * @param {String} opts.telefone N\u00C3\u00BAmero do telefone.
     * @param {String} opts.ramal N\u00C3\u00BAmero do ramal.
     * @param {module:api/CadastrosGeraisApi~alterarUsingPUT2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Telefone}
     */
    this.alterarUsingPUT2 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT2";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
        'idTipoTelefone': opts['idTipoTelefone'],
        'ddd': opts['ddd'],
        'telefone': opts['telefone'],
        'ramal': opts['ramal']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Telefone;

      return this.apiClient.callApi(
        '/api/telefones', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarOrigemComercialUsingGET operation.
     * @callback module:api/CadastrosGeraisApi~consultarOrigemComercialUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrigemComercial} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Opera\u00C3\u00A7\u00C3\u00A3o utilizada para consultar uma determinada Origem Comercial
     * Este m\u00C3\u00A9todo permite que sejam listados os registros de uma determinada Origem Comercial existente na base do emissor. Para isso, \u00C3\u00A9 preciso informar o seu respectivo c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} idOrigemComercial ID da Origem Comercial
     * @param {module:api/CadastrosGeraisApi~consultarOrigemComercialUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrigemComercial}
     */
    this.consultarOrigemComercialUsingGET = function(idOrigemComercial, callback) {
      var postBody = null;

      // verify the required parameter 'idOrigemComercial' is set
      if (idOrigemComercial == undefined || idOrigemComercial == null) {
        throw "Missing the required parameter 'idOrigemComercial' when calling consultarOrigemComercialUsingGET";
      }


      var pathParams = {
        'id_origem_comercial': idOrigemComercial
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
      var returnType = OrigemComercial;

      return this.apiClient.callApi(
        '/api/origens-comerciais/{id_origem_comercial}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarProdutoUsingGET operation.
     * @callback module:api/CadastrosGeraisApi~consultarProdutoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Produto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Produto
     * Este m\u00C3\u00A9todo permite consultar um determinado Produto a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} idProduto C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id)
     * @param {module:api/CadastrosGeraisApi~consultarProdutoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Produto}
     */
    this.consultarProdutoUsingGET = function(idProduto, callback) {
      var postBody = null;

      // verify the required parameter 'idProduto' is set
      if (idProduto == undefined || idProduto == null) {
        throw "Missing the required parameter 'idProduto' when calling consultarProdutoUsingGET";
      }


      var pathParams = {
        'id_produto': idProduto
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
      var returnType = Produto;

      return this.apiClient.callApi(
        '/api/produtos/{id_produto}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET2 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Endereco} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Endere\u00C3\u00A7o
     * Este m\u00C3\u00A9todo permite consultar um determinado Endere\u00C3\u00A7o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} idEndereco C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the consultarUsingGET3 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Pessoa} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de uma determinada Pessoa
     * Este m\u00C3\u00A9todo permite que sejam listadas as Pessoas existentes na base de dados do Emissor.
     * @param {Integer} idPessoa ID da Pessoa
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Pessoa}
     */
    this.consultarUsingGET3 = function(idPessoa, callback) {
      var postBody = null;

      // verify the required parameter 'idPessoa' is set
      if (idPessoa == undefined || idPessoa == null) {
        throw "Missing the required parameter 'idPessoa' when calling consultarUsingGET3";
      }


      var pathParams = {
        'id_pessoa': idPessoa
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
      var returnType = Pessoa;

      return this.apiClient.callApi(
        '/api/pessoas/{id_pessoa}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET6 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET6Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Telefone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Telefone
     * Este m\u00C3\u00A9todo permite consultar um determinado Telefone a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} idTelefone C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone (id).
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Telefone}
     */
    this.consultarUsingGET6 = function(idTelefone, callback) {
      var postBody = null;

      // verify the required parameter 'idTelefone' is set
      if (idTelefone == undefined || idTelefone == null) {
        throw "Missing the required parameter 'idTelefone' when calling consultarUsingGET6";
      }


      var pathParams = {
        'id_telefone': idTelefone
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
      var returnType = Telefone;

      return this.apiClient.callApi(
        '/api/telefones/{id_telefone}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET7 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoEndereco} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Tipo de Endere\u00C3\u00A7o
     * Este m\u00C3\u00A9todo permite consultar um determinado Tipo de Endere\u00C3\u00A7o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} idTipoEndereco C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoEndereco}
     */
    this.consultarUsingGET7 = function(idTipoEndereco, callback) {
      var postBody = null;

      // verify the required parameter 'idTipoEndereco' is set
      if (idTipoEndereco == undefined || idTipoEndereco == null) {
        throw "Missing the required parameter 'idTipoEndereco' when calling consultarUsingGET7";
      }


      var pathParams = {
        'id_tipo_endereco': idTipoEndereco
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
      var returnType = TipoEndereco;

      return this.apiClient.callApi(
        '/api/tipos-endereco/{id_tipo_endereco}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET8 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoTelefone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Tipo de Telefone
     * Este m\u00C3\u00A9todo permite consultar um determinado Tipo de Telefone a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} idTipoTelefone C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id)
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoTelefone}
     */
    this.consultarUsingGET8 = function(idTipoTelefone, callback) {
      var postBody = null;

      // verify the required parameter 'idTipoTelefone' is set
      if (idTipoTelefone == undefined || idTipoTelefone == null) {
        throw "Missing the required parameter 'idTipoTelefone' when calling consultarUsingGET8";
      }


      var pathParams = {
        'id_tipo_telefone': idTipoTelefone
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
      var returnType = TipoTelefone;

      return this.apiClient.callApi(
        '/api/tipos-telefones/{id_tipo_telefone}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarOrigensComerciaisUsingGET operation.
     * @callback module:api/CadastrosGeraisApi~listarOrigensComerciaisUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOrigensComerciais} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Opera\u00C3\u00A7\u00C3\u00A3o utilizada para listar Origens Comerciais
     * Este m\u00C3\u00A9todo permite que sejam listadas as Origens Comerciais existentes na base do emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id Id da origem comercial
     * @param {String} opts.nome Nome da origem comercial
     * @param {Integer} opts.status Status da origem comercial
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/CadastrosGeraisApi~listarOrigensComerciaisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOrigensComerciais}
     */
    this.listarOrigensComerciaisUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'nome': opts['nome'],
        'status': opts['status'],
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
      var returnType = PageOrigensComerciais;

      return this.apiClient.callApi(
        '/api/origens-comerciais', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarProdutosUsingGET operation.
     * @callback module:api/CadastrosGeraisApi~listarProdutosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListaProdutos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Produtos do Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os Produtos existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
     * @param {String} opts.nome Descri\u00C3\u00A7\u00C3\u00A3o do Nome do Produto.
     * @param {Integer} opts.status Representa o Status do Produto, onde: (\&quot;0\&quot;: Inativo), (\&quot;1\&quot;: Ativo).
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/CadastrosGeraisApi~listarProdutosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ListaProdutos}
     */
    this.listarProdutosUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'nome': opts['nome'],
        'status': opts['status'],
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
      var returnType = ListaProdutos;

      return this.apiClient.callApi(
        '/api/produtos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET2 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET2Callback
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
     * @param {module:api/CadastrosGeraisApi~listarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarUsingGET3 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePessoas} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as Pessoas cadastradas no Emissor
     * Este m\u00C3\u00A9todo permite que sejam listadas as Pessoas existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id).
     * @param {String} opts.nome Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)&#39;.
     * @param {String} opts.tipo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00C3\u00ADsica), (\&quot;PJ\&quot;: Pessoa Jur\u00C3\u00ADdica).
     * @param {String} opts.cpf N\u00C3\u00BAmero do CPF, quando PF.
     * @param {String} opts.cnpj N\u00C3\u00BAmero do CNPJ, quando PJ.
     * @param {module:model/ModelDate} opts.dataNascimento Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ.
     * @param {String} opts.sexo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00C3\u00A3o Especificado).
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/CadastrosGeraisApi~listarUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePessoas}
     */
    this.listarUsingGET3 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'nome': opts['nome'],
        'tipo': opts['tipo'],
        'cpf': opts['cpf'],
        'cnpj': opts['cnpj'],
        'dataNascimento': opts['dataNascimento'],
        'sexo': opts['sexo'],
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
      var returnType = PagePessoas;

      return this.apiClient.callApi(
        '/api/pessoas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET4 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePortador} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Portadores existentes
     * Este m\u00C3\u00A9todo permite que sejam listados os portadores cadastrados na base do emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id).
     * @param {Integer} opts.idProduto C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id).
     * @param {Integer} opts.idParentesco C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Parentesco (id)
     * @param {String} opts.tipoPortador Apresenta o tipo do Portador do cart\u00C3\u00A3o, sendo: (&#39;T&#39;: Titular, &#39;A&#39;: Adicional).
     * @param {String} opts.nomeImpresso Apresenta o nome a ser impresso no cart\u00C3\u00A3o.
     * @param {Integer} opts.idImagem Apresenta o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da imagem do cart\u00C3\u00A3o.
     * @param {Integer} opts.idTipoCartao Apresenta o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo do cart\u00C3\u00A3o (id), que ser\u00C3\u00A1 utilizado para gerar os cart\u00C3\u00B5es deste portador, vinculados a sua respectiva conta atrav\u00C3\u00A9s do campo idConta.
     * @param {Integer} opts.flagAtivo Quanto ativa, indica que o cadastro do Portador est\u00C3\u00A1 ativo, em emissores que realizam este tipo de gest\u00C3\u00A3o.
     * @param {module:model/ModelDate} opts.dataCadastroPortador Apresenta a data em que o Portador fora cadastrado, quando possuir esta informa\u00C3\u00A7\u00C3\u00A3o.
     * @param {module:model/ModelDate} opts.dataCancelamentoPortador Apresenta a data em que o Portador fora cancelado, quando possuir esta informa\u00C3\u00A7\u00C3\u00A3o.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/CadastrosGeraisApi~listarUsingGET4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePortador}
     */
    this.listarUsingGET4 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idConta': opts['idConta'],
        'idProduto': opts['idProduto'],
        'idPessoa': opts['idPessoa'],
        'idParentesco': opts['idParentesco'],
        'tipoPortador': opts['tipoPortador'],
        'nomeImpresso': opts['nomeImpresso'],
        'idImagem': opts['idImagem'],
        'idTipoCartao': opts['idTipoCartao'],
        'flagAtivo': opts['flagAtivo'],
        'dataCadastroPortador': opts['dataCadastroPortador'],
        'dataCancelamentoPortador': opts['dataCancelamentoPortador'],
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
      var returnType = PagePortador;

      return this.apiClient.callApi(
        '/api/portadores', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET7 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTelefones} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Telefones cadastrados no Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os Telefones existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone (id).
     * @param {Integer} opts.idTipoTelefone C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id) a qual o telefone pertence.
     * @param {String} opts.ddd C\u00C3\u00B3digo DDD do telefone (id).
     * @param {String} opts.telefone N\u00C3\u00BAmero do telefone.
     * @param {String} opts.ramal N\u00C3\u00BAmero do ramal.
     * @param {Integer} opts.status Apresenta o Status do Telefone, onde: &#39;0&#39;: Inativo e &#39;1&#39;: Ativo
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/CadastrosGeraisApi~listarUsingGET7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTelefones}
     */
    this.listarUsingGET7 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'idTipoTelefone': opts['idTipoTelefone'],
        'idPessoa': opts['idPessoa'],
        'ddd': opts['ddd'],
        'telefone': opts['telefone'],
        'ramal': opts['ramal'],
        'status': opts['status'],
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
      var returnType = PageTelefones;

      return this.apiClient.callApi(
        '/api/telefones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET8 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTiposEndereco} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as op\u00C3\u00B5es de Tipos de Endere\u00C3\u00A7os do Emissor 
     * Este m\u00C3\u00A9todo permite que sejam listados os Tipos de Endere\u00C3\u00A7os existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)
     * @param {String} opts.nome Nome do Tipo do Endere\u00C3\u00A7o
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/CadastrosGeraisApi~listarUsingGET8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTiposEndereco}
     */
    this.listarUsingGET8 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'nome': opts['nome'],
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
      var returnType = PageTiposEndereco;

      return this.apiClient.callApi(
        '/api/tipos-endereco', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET9 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoTelefones} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Tipos de Telefones
     * Este m\u00C3\u00A9todo permite que sejam listados os Tipos de Telefones existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
     * @param {String} opts.nome Nome do Tipo do Telefone
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
     * @param {module:api/CadastrosGeraisApi~listarUsingGET9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoTelefones}
     */
    this.listarUsingGET9 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id'],
        'nome': opts['nome'],
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
      var returnType = PageTipoTelefones;

      return this.apiClient.callApi(
        '/api/tipos-telefones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST operation.
     * @callback module:api/CadastrosGeraisApi~salvarUsingPOSTCallback
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
     * @param {module:api/CadastrosGeraisApi~salvarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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

    /**
     * Callback function to receive the result of the salvarUsingPOST1 operation.
     * @callback module:api/CadastrosGeraisApi~salvarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Pessoa} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro de um nova Pessoa
     * Este m\u00C3\u00A9todo permite que seja cadastrado uma nova Pessoa na base de dados do Emissor.
     * @param {String} nome Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)&#39;.
     * @param {String} tipo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00C3\u00ADsica), (\&quot;PJ\&quot;: Pessoa Jur\u00C3\u00ADdica).
     * @param {Object} opts Optional parameters
     * @param {String} opts.cpf N\u00C3\u00BAmero do CPF, quando PF.
     * @param {String} opts.cnpj N\u00C3\u00BAmero do CNPJ, quando PJ.
     * @param {module:model/ModelDate} opts.dataNascimento Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ.
     * @param {String} opts.sexo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00C3\u00A3o Especificado).
     * @param {module:api/CadastrosGeraisApi~salvarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Pessoa}
     */
    this.salvarUsingPOST1 = function(nome, tipo, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nome' is set
      if (nome == undefined || nome == null) {
        throw "Missing the required parameter 'nome' when calling salvarUsingPOST1";
      }

      // verify the required parameter 'tipo' is set
      if (tipo == undefined || tipo == null) {
        throw "Missing the required parameter 'tipo' when calling salvarUsingPOST1";
      }


      var pathParams = {
      };
      var queryParams = {
        'nome': nome,
        'tipo': tipo,
        'cpf': opts['cpf'],
        'cnpj': opts['cnpj'],
        'dataNascimento': opts['dataNascimento'],
        'sexo': opts['sexo']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Pessoa;

      return this.apiClient.callApi(
        '/api/pessoas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST2 operation.
     * @callback module:api/CadastrosGeraisApi~salvarUsingPOST2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Telefone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro de um novo Telefone
     * Este m\u00C3\u00A9todo permite que seja cadastrado um novo Telefone na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idTipoTelefone C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id) a qual o telefone pertence.
     * @param {String} opts.ddd C\u00C3\u00B3digo DDD do telefone (id).
     * @param {String} opts.telefone N\u00C3\u00BAmero do telefone.
     * @param {String} opts.ramal N\u00C3\u00BAmero do ramal.
     * @param {module:api/CadastrosGeraisApi~salvarUsingPOST2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Telefone}
     */
    this.salvarUsingPOST2 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idTipoTelefone': opts['idTipoTelefone'],
        'idPessoa': opts['idPessoa'],
        'ddd': opts['ddd'],
        'telefone': opts['telefone'],
        'ramal': opts['ramal']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Telefone;

      return this.apiClient.callApi(
        '/api/telefones', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
