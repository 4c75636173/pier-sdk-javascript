(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AdicionalDetalheResponse', '../model/AdicionalUpdate', '../model/PessoaDetalheResponse', '../model/PessoaResponse', '../model/TelefoneResponse', '../model/EnderecoResponse', '../model/AtribuirAssinaturaClientePersist', '../model/IntegracaoEmissorPersist', '../model/IntegracaoEmissorResponse', '../model/AdicionalPersist', '../model/PagePessoaResponse', '../model/AdicionalResponse', '../model/PageEnderecoResponse', '../model/PagePessoaDetalheResponse', '../model/PageTelefoneResponse', '../model/PessoaFisicaAprovadaPersist', '../model/PessoaFisicaAprovadaResponse', '../model/PessoaJuridicaAprovadaResponse', '../model/PessoaJuridicaAprovadaPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AdicionalDetalheResponse'), require('../model/AdicionalUpdate'), require('../model/PessoaDetalheResponse'), require('../model/PessoaResponse'), require('../model/TelefoneResponse'), require('../model/EnderecoResponse'), require('../model/AtribuirAssinaturaClientePersist'), require('../model/IntegracaoEmissorPersist'), require('../model/IntegracaoEmissorResponse'), require('../model/AdicionalPersist'), require('../model/PagePessoaResponse'), require('../model/AdicionalResponse'), require('../model/PageEnderecoResponse'), require('../model/PagePessoaDetalheResponse'), require('../model/PageTelefoneResponse'), require('../model/PessoaFisicaAprovadaPersist'), require('../model/PessoaFisicaAprovadaResponse'), require('../model/PessoaJuridicaAprovadaResponse'), require('../model/PessoaJuridicaAprovadaPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CadastroClienteApi = factory(root.Pier.ApiClient, root.Pier.AdicionalDetalheResponse, root.Pier.AdicionalUpdate, root.Pier.PessoaDetalheResponse, root.Pier.PessoaResponse, root.Pier.TelefoneResponse, root.Pier.EnderecoResponse, root.Pier.AtribuirAssinaturaClientePersist, root.Pier.IntegracaoEmissorPersist, root.Pier.IntegracaoEmissorResponse, root.Pier.AdicionalPersist, root.Pier.PagePessoaResponse, root.Pier.AdicionalResponse, root.Pier.PageEnderecoResponse, root.Pier.PagePessoaDetalheResponse, root.Pier.PageTelefoneResponse, root.Pier.PessoaFisicaAprovadaPersist, root.Pier.PessoaFisicaAprovadaResponse, root.Pier.PessoaJuridicaAprovadaResponse, root.Pier.PessoaJuridicaAprovadaPersist);
  }
}(this, function(ApiClient, AdicionalDetalheResponse, AdicionalUpdate, PessoaDetalheResponse, PessoaResponse, TelefoneResponse, EnderecoResponse, AtribuirAssinaturaClientePersist, IntegracaoEmissorPersist, IntegracaoEmissorResponse, AdicionalPersist, PagePessoaResponse, AdicionalResponse, PageEnderecoResponse, PagePessoaDetalheResponse, PageTelefoneResponse, PessoaFisicaAprovadaPersist, PessoaFisicaAprovadaResponse, PessoaJuridicaAprovadaResponse, PessoaJuridicaAprovadaPersist) {
  'use strict';

  /**
   * CadastroCliente service.
   * @module api/CadastroClienteApi
   * @version 2.54.2
   */

  /**
   * Constructs a new CadastroClienteApi. 
   * @alias module:api/CadastroClienteApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT operation.
     * @callback module:api/CadastroClienteApi~alterarUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AdicionalDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Altera Adicional de uma Conta
     * Este m\u00C3\u00A9todo permite que seja alterado um portador Adicional de uma determinada Conta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da pessoa (id).
     * @param {module:model/AdicionalUpdate} adicionalUpdate adicionalUpdate
     * @param {module:api/CadastroClienteApi~alterarUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AdicionalDetalheResponse}
     */
    this.alterarUsingPUT = function(id, idPessoa, adicionalUpdate, callback) {
      var postBody = adicionalUpdate;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT";
      }

      // verify the required parameter 'idPessoa' is set
      if (idPessoa == undefined || idPessoa == null) {
        throw "Missing the required parameter 'idPessoa' when calling alterarUsingPUT";
      }

      // verify the required parameter 'adicionalUpdate' is set
      if (adicionalUpdate == undefined || adicionalUpdate == null) {
        throw "Missing the required parameter 'adicionalUpdate' when calling alterarUsingPUT";
      }


      var pathParams = {
        'id': id,
        'idPessoa': idPessoa
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
      var returnType = AdicionalDetalheResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/adicionais/{idPessoa}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT13 operation.
     * @callback module:api/CadastroClienteApi~alterarUsingPUT13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualiza os detalhes de uma determinada Pessoa
     * Este m\u00C3\u00A9todo permite que seja alterado na base do emissor os detalhes de uma determinada Pessoa.
     * @param {Integer} id ID da Pessoa
     * @param {Object} opts Optional parameters
     * @param {String} opts.nomeMae Apresenta o nome da m\u00C3\u00A3e da pessoa fisica
     * @param {Integer} opts.idEstadoCivil Id Estado civil da pessoa fisica
     * @param {String} opts.idProfissao Profiss\u00C3\u00A3o da pessoa fisica
     * @param {Integer} opts.idNaturezaOcupacao Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica
     * @param {Integer} opts.idNacionalidade Id Nacionalidade da pessoa fisica
     * @param {Integer} opts.numeroBanco N\u00C3\u00BAmero do banco.
     * @param {Integer} opts.numeroAgencia N\u00C3\u00BAmero da ag\u00C3\u00AAncia.
     * @param {String} opts.numeroContaCorrente N\u00C3\u00BAmero da conta corrente.
     * @param {String} opts.email Email da pessoa fisica
     * @param {String} opts.nomeEmpresa Nome que deve ser impresso no cart\u00C3\u00A3o
     * @param {module:api/CadastroClienteApi~alterarUsingPUT13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaDetalheResponse}
     */
    this.alterarUsingPUT13 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT13";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'nomeMae': opts['nomeMae'],
        'idEstadoCivil': opts['idEstadoCivil'],
        'idProfissao': opts['idProfissao'],
        'idNaturezaOcupacao': opts['idNaturezaOcupacao'],
        'idNacionalidade': opts['idNacionalidade'],
        'numeroBanco': opts['numeroBanco'],
        'numeroAgencia': opts['numeroAgencia'],
        'numeroContaCorrente': opts['numeroContaCorrente'],
        'email': opts['email'],
        'nomeEmpresa': opts['nomeEmpresa']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PessoaDetalheResponse;

      return this.apiClient.callApi(
        '/api/pessoas-detalhes/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT14 operation.
     * @callback module:api/CadastroClienteApi~alterarUsingPUT14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualiza os dados de uma determinada Pessoa
     * Este m\u00C3\u00A9todo permite que seja alterado na base do emissor um registro de determinada Pessoa.
     * @param {Integer} id ID da Pessoa
     * @param {String} nome Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)&#39;.
     * @param {String} tipo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00C3\u00ADsica), (\&quot;PJ\&quot;: Pessoa Jur\u00C3\u00ADdica).
     * @param {String} dataNascimento Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cpf N\u00C3\u00BAmero do CPF, quando PF.
     * @param {String} opts.cnpj N\u00C3\u00BAmero do CNPJ, quando PJ.
     * @param {String} opts.sexo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00C3\u00A3o Especificado).
     * @param {String} opts.numeroIdentidade N\u00C3\u00BAmero da Identidade.
     * @param {String} opts.orgaoExpedidorIdentidade Org\u00C3\u00A3o expedidor do Identidade.
     * @param {String} opts.unidadeFederativaIdentidade Sigla da Unidade Federativa de onde foi expedido a Identidade
     * @param {String} opts.dataEmissaoIdentidade Data emiss\u00C3\u00A3o da Identidade.
     * @param {module:api/CadastroClienteApi~alterarUsingPUT14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaResponse}
     */
    this.alterarUsingPUT14 = function(id, nome, tipo, dataNascimento, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT14";
      }

      // verify the required parameter 'nome' is set
      if (nome == undefined || nome == null) {
        throw "Missing the required parameter 'nome' when calling alterarUsingPUT14";
      }

      // verify the required parameter 'tipo' is set
      if (tipo == undefined || tipo == null) {
        throw "Missing the required parameter 'tipo' when calling alterarUsingPUT14";
      }

      // verify the required parameter 'dataNascimento' is set
      if (dataNascimento == undefined || dataNascimento == null) {
        throw "Missing the required parameter 'dataNascimento' when calling alterarUsingPUT14";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'nome': nome,
        'tipo': tipo,
        'cpf': opts['cpf'],
        'cnpj': opts['cnpj'],
        'dataNascimento': dataNascimento,
        'sexo': opts['sexo'],
        'numeroIdentidade': opts['numeroIdentidade'],
        'orgaoExpedidorIdentidade': opts['orgaoExpedidorIdentidade'],
        'unidadeFederativaIdentidade': opts['unidadeFederativaIdentidade'],
        'dataEmissaoIdentidade': opts['dataEmissaoIdentidade']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PessoaResponse;

      return this.apiClient.callApi(
        '/api/pessoas/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT16 operation.
     * @callback module:api/CadastroClienteApi~alterarUsingPUT16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneResponse} data The data returned by the service call.
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
     * @param {module:api/CadastroClienteApi~alterarUsingPUT16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneResponse}
     */
    this.alterarUsingPUT16 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT16";
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TelefoneResponse;

      return this.apiClient.callApi(
        '/api/telefones', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT5 operation.
     * @callback module:api/CadastroClienteApi~alterarUsingPUT5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EnderecoResponse} data The data returned by the service call.
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
     * @param {module:api/CadastroClienteApi~alterarUsingPUT5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EnderecoResponse}
     */
    this.alterarUsingPUT5 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT5";
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EnderecoResponse;

      return this.apiClient.callApi(
        '/api/enderecos', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the atribuirAssinaturaClienteUsingPOST operation.
     * @callback module:api/CadastroClienteApi~atribuirAssinaturaClienteUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permite atribuir um documento para uma Conta
     * Este m\u00C3\u00A9todo permite que seja atribu\u00C3\u00ADdo a uma determinada Conta um documento que esteja armazenado no PIER Cloud, informando qual o tipo do documento e o seu respectivo id.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta
     * @param {module:model/AtribuirAssinaturaClientePersist} body C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Arquivo
     * @param {module:api/CadastroClienteApi~atribuirAssinaturaClienteUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object}
     */
    this.atribuirAssinaturaClienteUsingPOST = function(id, body, callback) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atribuirAssinaturaClienteUsingPOST";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling atribuirAssinaturaClienteUsingPOST";
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
        '/api/contas/{id}/atribuir-assinatura-cliente', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the atualizarUsingPOST operation.
     * @callback module:api/CadastroClienteApi~atualizarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntegracaoEmissorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualiza conta integrada com o emissor
     * Este recurso permite a atualiza\u00C3\u00A7\u00C3\u00A3o de uma conta integrada com o emissor.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {module:model/IntegracaoEmissorPersist} opts.body Descri\u00C3\u00A7\u00C3\u00A3o do canal de entrada
     * @param {module:api/CadastroClienteApi~atualizarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/IntegracaoEmissorResponse}
     */
    this.atualizarUsingPOST = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarUsingPOST";
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
      var returnType = IntegracaoEmissorResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/atualizar-registro-integracao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cadastrarUsingPOST operation.
     * @callback module:api/CadastroClienteApi~cadastrarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AdicionalDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro de Adicionais para uma Conta
     * Este m\u00C3\u00A9todo permite que sejam cadastrados um portador Adicional para uma determinada Conta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {module:model/AdicionalPersist} persist persist
     * @param {module:api/CadastroClienteApi~cadastrarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AdicionalDetalheResponse}
     */
    this.cadastrarUsingPOST = function(id, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling cadastrarUsingPOST";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling cadastrarUsingPOST";
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
      var returnType = AdicionalDetalheResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/cadastrar-adicional', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET operation.
     * @callback module:api/CadastroClienteApi~consultarUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AdicionalDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta Adicional de uma Conta
     * Este m\u00C3\u00A9todo permite que seja consultado um portador Adicional de uma determinada Conta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da pessoa (id).
     * @param {module:api/CadastroClienteApi~consultarUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AdicionalDetalheResponse}
     */
    this.consultarUsingGET = function(id, idPessoa, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET";
      }

      // verify the required parameter 'idPessoa' is set
      if (idPessoa == undefined || idPessoa == null) {
        throw "Missing the required parameter 'idPessoa' when calling consultarUsingGET";
      }


      var pathParams = {
        'id': id,
        'idPessoa': idPessoa
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
      var returnType = AdicionalDetalheResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/adicionais/{idPessoa}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET15 operation.
     * @callback module:api/CadastroClienteApi~consultarUsingGET15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Endere\u00C3\u00A7o
     * Este m\u00C3\u00A9todo permite consultar um determinado Endere\u00C3\u00A7o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).
     * @param {module:api/CadastroClienteApi~consultarUsingGET15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EnderecoResponse}
     */
    this.consultarUsingGET15 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET15";
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
      var returnType = EnderecoResponse;

      return this.apiClient.callApi(
        '/api/enderecos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET23 operation.
     * @callback module:api/CadastroClienteApi~consultarUsingGET23Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os detalhes de uma determinada Pessoa
     * Este m\u00C3\u00A9todo permite a consulta dos detalhes de uma Pessoa existentes na base de dados do Emissor.
     * @param {Integer} id ID da Pessoa
     * @param {module:api/CadastroClienteApi~consultarUsingGET23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaDetalheResponse}
     */
    this.consultarUsingGET23 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET23";
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
      var returnType = PessoaDetalheResponse;

      return this.apiClient.callApi(
        '/api/pessoas-detalhes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET24 operation.
     * @callback module:api/CadastroClienteApi~consultarUsingGET24Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de uma determinada Pessoa
     * Este m\u00C3\u00A9todo permite que sejam listadas as Pessoas existentes na base de dados do Emissor.
     * @param {Integer} id ID da Pessoa
     * @param {module:api/CadastroClienteApi~consultarUsingGET24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaResponse}
     */
    this.consultarUsingGET24 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET24";
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
      var returnType = PessoaResponse;

      return this.apiClient.callApi(
        '/api/pessoas/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET30 operation.
     * @callback module:api/CadastroClienteApi~consultarUsingGET30Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Telefone
     * Este m\u00C3\u00A9todo permite consultar um determinado Telefone a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone (id).
     * @param {module:api/CadastroClienteApi~consultarUsingGET30Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneResponse}
     */
    this.consultarUsingGET30 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET30";
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
      var returnType = TelefoneResponse;

      return this.apiClient.callApi(
        '/api/telefones/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the inativarUsingPOST operation.
     * @callback module:api/CadastroClienteApi~inativarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inativa Adicional de uma Conta
     * Este m\u00C3\u00A9todo permite que seja inativado um portador Adicional de uma determinada Conta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Integer} idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da pessoa (id).
     * @param {module:api/CadastroClienteApi~inativarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.inativarUsingPOST = function(id, idPessoa, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling inativarUsingPOST";
      }

      // verify the required parameter 'idPessoa' is set
      if (idPessoa == undefined || idPessoa == null) {
        throw "Missing the required parameter 'idPessoa' when calling inativarUsingPOST";
      }


      var pathParams = {
        'id': id,
        'idPessoa': idPessoa
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/contas/{id}/adicionais/{idPessoa}/inativar', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarSociosUsingGET operation.
     * @callback module:api/CadastroClienteApi~listarSociosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePessoaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar s\u00C3\u00B3cios de uma pessoa jur\u00C3\u00ADdica
     * Lista os s\u00C3\u00B3cios vinculados \u00C3\u00A0 uma Pessoa Jur\u00C3\u00ADdica cadastrada.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa Jur\u00C3\u00ADdica
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastroClienteApi~listarSociosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePessoaResponse}
     */
    this.listarSociosUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarSociosUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePessoaResponse;

      return this.apiClient.callApi(
        '/api/clientes-pessoas-juridicas/{id}/socios', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET operation.
     * @callback module:api/CadastroClienteApi~listarUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AdicionalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Adicionais de uma Conta
     * Este m\u00C3\u00A9todo permite que sejam listados portadores Adicionais de uma determinada Conta.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastroClienteApi~listarUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AdicionalResponse}
     */
    this.listarUsingGET = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AdicionalResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/adicionais', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET20 operation.
     * @callback module:api/CadastroClienteApi~listarUsingGET20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageEnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Endere\u00C3\u00A7os cadastrados para o Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os Endere\u00C3\u00A7os existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
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
     * @param {String} opts.dataInclusao Apresenta a data em que fora cadastrado o Endere\u00C3\u00A7o
     * @param {String} opts.dataUltimaAtualizacao Data em que fora realizada a \u00C3\u00BAltima mudan\u00C3\u00A7a neste registro de endere\u00C3\u00A7o. Quando n\u00C3\u00A3o tiver ocorrido mudan\u00C3\u00A7a, conter\u00C3\u00A1 a mesma informa\u00C3\u00A7\u00C3\u00A3o que o campo dataInclusao
     * @param {module:api/CadastroClienteApi~listarUsingGET20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageEnderecoResponse}
     */
    this.listarUsingGET20 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
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
        'dataUltimaAtualizacao': opts['dataUltimaAtualizacao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageEnderecoResponse;

      return this.apiClient.callApi(
        '/api/enderecos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET29 operation.
     * @callback module:api/CadastroClienteApi~listarUsingGET29Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePessoaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Detalhes das Pessoas cadastradas no Emissor
     * Este m\u00C3\u00A9todo permite que sejam listadas od detalhes das Pessoas existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo identificador da pessoa
     * @param {String} opts.nomeMae Apresenta o nome da m\u00C3\u00A3e da pessoa fisica
     * @param {Integer} opts.idEstadoCivil Id Estado civil da pessoa fisica
     * @param {String} opts.idProfissao Profiss\u00C3\u00A3o da pessoa fisica
     * @param {Integer} opts.idNaturezaOcupacao Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica
     * @param {Integer} opts.idNacionalidade Id Nacionalidade da pessoa fisica
     * @param {Integer} opts.numeroBanco N\u00C3\u00BAmero do Banco.
     * @param {Integer} opts.numeroAgencia N\u00C3\u00BAmero da ag\u00C3\u00AAncia.
     * @param {String} opts.numeroContaCorrente N\u00C3\u00BAmero da conta corrente.
     * @param {String} opts.email Email da pessoa fisica
     * @param {String} opts.nomeEmpresa Nome que deve ser impresso no cart\u00C3\u00A3o
     * @param {module:api/CadastroClienteApi~listarUsingGET29Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePessoaDetalheResponse}
     */
    this.listarUsingGET29 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'idPessoa': opts['idPessoa'],
        'nomeMae': opts['nomeMae'],
        'idEstadoCivil': opts['idEstadoCivil'],
        'idProfissao': opts['idProfissao'],
        'idNaturezaOcupacao': opts['idNaturezaOcupacao'],
        'idNacionalidade': opts['idNacionalidade'],
        'numeroBanco': opts['numeroBanco'],
        'numeroAgencia': opts['numeroAgencia'],
        'numeroContaCorrente': opts['numeroContaCorrente'],
        'email': opts['email'],
        'nomeEmpresa': opts['nomeEmpresa']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePessoaDetalheResponse;

      return this.apiClient.callApi(
        '/api/pessoas-detalhes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET30 operation.
     * @callback module:api/CadastroClienteApi~listarUsingGET30Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePessoaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as Pessoas cadastradas no Emissor
     * Este m\u00C3\u00A9todo permite que sejam listadas as Pessoas existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id).
     * @param {String} opts.nome Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)&#39;.
     * @param {String} opts.tipo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00C3\u00ADsica), (\&quot;PJ\&quot;: Pessoa Jur\u00C3\u00ADdica).
     * @param {String} opts.cpf N\u00C3\u00BAmero do CPF, quando PF.
     * @param {String} opts.cnpj N\u00C3\u00BAmero do CNPJ, quando PJ.
     * @param {String} opts.dataNascimento Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ.
     * @param {String} opts.sexo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00C3\u00A3o Especificado).
     * @param {String} opts.numeroIdentidade N\u00C3\u00BAmero da Identidade
     * @param {String} opts.orgaoExpedidorIdentidade Org\u00C3\u00A3o expedidor do RG.
     * @param {String} opts.unidadeFederativaIdentidade Sigla da Unidade Federativa de onde foi expedido a Identidade
     * @param {String} opts.dataEmissaoIdentidade Data emiss\u00C3\u00A3o da identidade no formato aaaa-MM-dd
     * @param {module:api/CadastroClienteApi~listarUsingGET30Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePessoaResponse}
     */
    this.listarUsingGET30 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome'],
        'tipo': opts['tipo'],
        'cpf': opts['cpf'],
        'cnpj': opts['cnpj'],
        'dataNascimento': opts['dataNascimento'],
        'sexo': opts['sexo'],
        'numeroIdentidade': opts['numeroIdentidade'],
        'orgaoExpedidorIdentidade': opts['orgaoExpedidorIdentidade'],
        'unidadeFederativaIdentidade': opts['unidadeFederativaIdentidade'],
        'dataEmissaoIdentidade': opts['dataEmissaoIdentidade']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PagePessoaResponse;

      return this.apiClient.callApi(
        '/api/pessoas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET39 operation.
     * @callback module:api/CadastroClienteApi~listarUsingGET39Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Telefones cadastrados no Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os Telefones existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone (id).
     * @param {Integer} opts.idTipoTelefone C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id) a qual o telefone pertence.
     * @param {String} opts.ddd C\u00C3\u00B3digo DDD do telefone (id).
     * @param {String} opts.telefone N\u00C3\u00BAmero do telefone.
     * @param {String} opts.ramal N\u00C3\u00BAmero do ramal.
     * @param {Integer} opts.status Apresenta o Status do Telefone, onde: &#39;0&#39;: Inativo e &#39;1&#39;: Ativo
     * @param {module:api/CadastroClienteApi~listarUsingGET39Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTelefoneResponse}
     */
    this.listarUsingGET39 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi'),
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'idTipoTelefone': opts['idTipoTelefone'],
        'idPessoa': opts['idPessoa'],
        'ddd': opts['ddd'],
        'telefone': opts['telefone'],
        'ramal': opts['ramal'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTelefoneResponse;

      return this.apiClient.callApi(
        '/api/telefones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarPessoaFisicaAprovadaUsingPOST operation.
     * @callback module:api/CadastroClienteApi~salvarPessoaFisicaAprovadaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaFisicaAprovadaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastro de Conta e Pessoa Fisica
     * Permite realizar o cadastro de uma Conta para um cliente do tipo Pessoa F\u00C3\u00ADsica, recebendo nesta opera\u00C3\u00A7\u00C3\u00A3o todos os dados cadastrais que se fazem necess\u00C3\u00A1rios para isso. Uma vez criado, poder\u00C3\u00A1 ser acionado o m\u00C3\u00A9todo de &#39;Gera\u00C3\u00A7\u00C3\u00A3o de Cart\u00C3\u00A3o&#39; para o cliente e seus adicionais.
     * @param {module:model/PessoaFisicaAprovadaPersist} pessoaPersist pessoaPersist
     * @param {module:api/CadastroClienteApi~salvarPessoaFisicaAprovadaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaFisicaAprovadaResponse}
     */
    this.salvarPessoaFisicaAprovadaUsingPOST = function(pessoaPersist, callback) {
      var postBody = pessoaPersist;

      // verify the required parameter 'pessoaPersist' is set
      if (pessoaPersist == undefined || pessoaPersist == null) {
        throw "Missing the required parameter 'pessoaPersist' when calling salvarPessoaFisicaAprovadaUsingPOST";
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
      var returnType = PessoaFisicaAprovadaResponse;

      return this.apiClient.callApi(
        '/api/clientes-pessoas-fisicas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarPessoaJuridicaAprovadaUsingPOST operation.
     * @callback module:api/CadastroClienteApi~salvarPessoaJuridicaAprovadaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaJuridicaAprovadaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastro de Conta e Pessoa Jur\u00C3\u00ADdica
     * Cadastro de Conta e Pessoa Jur\u00C3\u00ADdica Permite realizar o cadastro de uma Conta para um cliente do tipo Pessoa Jur\u00C3\u00ADdica, recebendo nesta opera\u00C3\u00A7\u00C3\u00A3o todos os dados cadastrais que se fazem necess\u00C3\u00A1rios para isso, inclu\u00C3\u00ADndo o registro de cada um dos s\u00C3\u00B3cios. Uma vez criado, poder\u00C3\u00A1 ser acionado o m\u00C3\u00A9todo de &#39;Gera\u00C3\u00A7\u00C3\u00A3o de Cart\u00C3\u00A3o&#39; para o cliente e cada um dos s\u00C3\u00B3cios vinculados.
     * @param {module:model/PessoaJuridicaAprovadaPersist} pessoaPersist pessoaPersist
     * @param {module:api/CadastroClienteApi~salvarPessoaJuridicaAprovadaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaJuridicaAprovadaResponse}
     */
    this.salvarPessoaJuridicaAprovadaUsingPOST = function(pessoaPersist, callback) {
      var postBody = pessoaPersist;

      // verify the required parameter 'pessoaPersist' is set
      if (pessoaPersist == undefined || pessoaPersist == null) {
        throw "Missing the required parameter 'pessoaPersist' when calling salvarPessoaJuridicaAprovadaUsingPOST";
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
      var returnType = PessoaJuridicaAprovadaResponse;

      return this.apiClient.callApi(
        '/api/clientes-pessoas-juridicas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST12 operation.
     * @callback module:api/CadastroClienteApi~salvarUsingPOST12Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EnderecoResponse} data The data returned by the service call.
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
     * @param {module:api/CadastroClienteApi~salvarUsingPOST12Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EnderecoResponse}
     */
    this.salvarUsingPOST12 = function(opts, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EnderecoResponse;

      return this.apiClient.callApi(
        '/api/enderecos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST14 operation.
     * @callback module:api/CadastroClienteApi~salvarUsingPOST14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/IntegracaoEmissorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inclui a conta como registro para integra\u00C3\u00A7\u00C3\u00A3o
     * Este recurso permite incluir uma conta como registro para integra\u00C3\u00A7\u00C3\u00A3o.
     * @param {Integer} id C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta (id).
     * @param {Object} opts Optional parameters
     * @param {module:model/IntegracaoEmissorPersist} opts.body Descri\u00C3\u00A7\u00C3\u00A3o do canal de entrada
     * @param {module:api/CadastroClienteApi~salvarUsingPOST14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/IntegracaoEmissorResponse}
     */
    this.salvarUsingPOST14 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling salvarUsingPOST14";
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
      var returnType = IntegracaoEmissorResponse;

      return this.apiClient.callApi(
        '/api/contas/{id}/incluir-registro-integracao', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST19 operation.
     * @callback module:api/CadastroClienteApi~salvarUsingPOST19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Salvar os detalhes de uma determinada Pessoa
     * Este m\u00C3\u00A9todo permite que seja incluido na base do emissor os detalhes de uma determinada Pessoa.
     * @param {Integer} idPessoa Apresenta o c\u00C3\u00B3digo identificador da pessoa
     * @param {Object} opts Optional parameters
     * @param {String} opts.nomeMae Apresenta o nome da m\u00C3\u00A3e da pessoa fisica
     * @param {Integer} opts.idEstadoCivil Id Estado civil da pessoa fisica
     * @param {String} opts.idProfissao Profiss\u00C3\u00A3o da pessoa fisica
     * @param {Integer} opts.idNaturezaOcupacao Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica
     * @param {Integer} opts.idNacionalidade Id Nacionalidade da pessoa fisica
     * @param {Integer} opts.numeroBanco N\u00C3\u00BAmero do banco.
     * @param {Integer} opts.numeroAgencia N\u00C3\u00BAmero da ag\u00C3\u00AAncia.
     * @param {String} opts.numeroContaCorrente N\u00C3\u00BAmero da conta corrente.
     * @param {String} opts.email Email da pessoa fisica
     * @param {String} opts.nomeEmpresa Nome que deve ser impresso no cart\u00C3\u00A3o
     * @param {module:api/CadastroClienteApi~salvarUsingPOST19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaDetalheResponse}
     */
    this.salvarUsingPOST19 = function(idPessoa, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idPessoa' is set
      if (idPessoa == undefined || idPessoa == null) {
        throw "Missing the required parameter 'idPessoa' when calling salvarUsingPOST19";
      }


      var pathParams = {
      };
      var queryParams = {
        'idPessoa': idPessoa,
        'nomeMae': opts['nomeMae'],
        'idEstadoCivil': opts['idEstadoCivil'],
        'idProfissao': opts['idProfissao'],
        'idNaturezaOcupacao': opts['idNaturezaOcupacao'],
        'idNacionalidade': opts['idNacionalidade'],
        'numeroBanco': opts['numeroBanco'],
        'numeroAgencia': opts['numeroAgencia'],
        'numeroContaCorrente': opts['numeroContaCorrente'],
        'email': opts['email'],
        'nomeEmpresa': opts['nomeEmpresa']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PessoaDetalheResponse;

      return this.apiClient.callApi(
        '/api/pessoas-detalhes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST20 operation.
     * @callback module:api/CadastroClienteApi~salvarUsingPOST20Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Realiza o cadastro de um nova Pessoa
     * Este m\u00C3\u00A9todo permite que seja cadastrado uma nova Pessoa na base de dados do Emissor.
     * @param {String} nome Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00C3\u00A3o Social (Nome Empresarial)&#39;.
     * @param {String} tipo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00C3\u00ADsica), (\&quot;PJ\&quot;: Pessoa Jur\u00C3\u00ADdica).
     * @param {String} dataNascimento Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cpf N\u00C3\u00BAmero do CPF, quando PF.
     * @param {String} opts.cnpj N\u00C3\u00BAmero do CNPJ, quando PJ.
     * @param {String} opts.sexo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00C3\u00A3o Especificado).
     * @param {String} opts.numeroIdentidade N\u00C3\u00BAmero da Identidade.
     * @param {String} opts.orgaoExpedidorIdentidade Org\u00C3\u00A3o expedidor do Identidade.
     * @param {String} opts.unidadeFederativaIdentidade Sigla da Unidade Federativa de onde foi expedido a Identidade
     * @param {String} opts.dataEmissaoIdentidade Data emiss\u00C3\u00A3o da Identidade.
     * @param {module:api/CadastroClienteApi~salvarUsingPOST20Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaResponse}
     */
    this.salvarUsingPOST20 = function(nome, tipo, dataNascimento, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nome' is set
      if (nome == undefined || nome == null) {
        throw "Missing the required parameter 'nome' when calling salvarUsingPOST20";
      }

      // verify the required parameter 'tipo' is set
      if (tipo == undefined || tipo == null) {
        throw "Missing the required parameter 'tipo' when calling salvarUsingPOST20";
      }

      // verify the required parameter 'dataNascimento' is set
      if (dataNascimento == undefined || dataNascimento == null) {
        throw "Missing the required parameter 'dataNascimento' when calling salvarUsingPOST20";
      }


      var pathParams = {
      };
      var queryParams = {
        'nome': nome,
        'tipo': tipo,
        'cpf': opts['cpf'],
        'cnpj': opts['cnpj'],
        'dataNascimento': dataNascimento,
        'sexo': opts['sexo'],
        'numeroIdentidade': opts['numeroIdentidade'],
        'orgaoExpedidorIdentidade': opts['orgaoExpedidorIdentidade'],
        'unidadeFederativaIdentidade': opts['unidadeFederativaIdentidade'],
        'dataEmissaoIdentidade': opts['dataEmissaoIdentidade']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PessoaResponse;

      return this.apiClient.callApi(
        '/api/pessoas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST23 operation.
     * @callback module:api/CadastroClienteApi~salvarUsingPOST23Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneResponse} data The data returned by the service call.
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
     * @param {module:api/CadastroClienteApi~salvarUsingPOST23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneResponse}
     */
    this.salvarUsingPOST23 = function(opts, callback) {
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TelefoneResponse;

      return this.apiClient.callApi(
        '/api/telefones', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
