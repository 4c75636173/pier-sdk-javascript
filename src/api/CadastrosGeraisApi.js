(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Endereco', '../model/PessoaDetalheResponse', '../model/Pessoa', '../model/Telefone', '../model/ProdutoDetalhesResponse', '../model/ParametroProdutoResponse', '../model/TaxaAntecipacaoRequest', '../model/OrigemComercial', '../model/Banco', '../model/PageTipoAjuste', '../model/PageTipoBoleto', '../model/TipoEndereco', '../model/TipoTelefone', '../model/PageContasDetalhe', '../model/PageCampoCodificadoDescricao', '../model/HistoricoTelefone', '../model/PageOrigensComerciais', '../model/PagePessoas', '../model/PagePortador', '../model/ListaProdutos', '../model/PageBancos', '../model/PageTelefones', '../model/PageTiposEndereco', '../model/PageTipoTelefones', '../model/PageEnderecos', '../model/PessoaFisicaAprovadaPersist', '../model/PessoaFisicaAprovadaResponse', '../model/PessoaJuridicaAprovadaResponse', '../model/PessoaJuridicaAprovadaPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Endereco'), require('../model/PessoaDetalheResponse'), require('../model/Pessoa'), require('../model/Telefone'), require('../model/ProdutoDetalhesResponse'), require('../model/ParametroProdutoResponse'), require('../model/TaxaAntecipacaoRequest'), require('../model/OrigemComercial'), require('../model/Banco'), require('../model/PageTipoAjuste'), require('../model/PageTipoBoleto'), require('../model/TipoEndereco'), require('../model/TipoTelefone'), require('../model/PageContasDetalhe'), require('../model/PageCampoCodificadoDescricao'), require('../model/HistoricoTelefone'), require('../model/PageOrigensComerciais'), require('../model/PagePessoas'), require('../model/PagePortador'), require('../model/ListaProdutos'), require('../model/PageBancos'), require('../model/PageTelefones'), require('../model/PageTiposEndereco'), require('../model/PageTipoTelefones'), require('../model/PageEnderecos'), require('../model/PessoaFisicaAprovadaPersist'), require('../model/PessoaFisicaAprovadaResponse'), require('../model/PessoaJuridicaAprovadaResponse'), require('../model/PessoaJuridicaAprovadaPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.CadastrosGeraisApi = factory(root.Pier.ApiClient, root.Pier.Endereco, root.Pier.PessoaDetalheResponse, root.Pier.Pessoa, root.Pier.Telefone, root.Pier.ProdutoDetalhesResponse, root.Pier.ParametroProdutoResponse, root.Pier.TaxaAntecipacaoRequest, root.Pier.OrigemComercial, root.Pier.Banco, root.Pier.PageTipoAjuste, root.Pier.PageTipoBoleto, root.Pier.TipoEndereco, root.Pier.TipoTelefone, root.Pier.PageContasDetalhe, root.Pier.PageCampoCodificadoDescricao, root.Pier.HistoricoTelefone, root.Pier.PageOrigensComerciais, root.Pier.PagePessoas, root.Pier.PagePortador, root.Pier.ListaProdutos, root.Pier.PageBancos, root.Pier.PageTelefones, root.Pier.PageTiposEndereco, root.Pier.PageTipoTelefones, root.Pier.PageEnderecos, root.Pier.PessoaFisicaAprovadaPersist, root.Pier.PessoaFisicaAprovadaResponse, root.Pier.PessoaJuridicaAprovadaResponse, root.Pier.PessoaJuridicaAprovadaPersist);
  }
}(this, function(ApiClient, Endereco, PessoaDetalheResponse, Pessoa, Telefone, ProdutoDetalhesResponse, ParametroProdutoResponse, TaxaAntecipacaoRequest, OrigemComercial, Banco, PageTipoAjuste, PageTipoBoleto, TipoEndereco, TipoTelefone, PageContasDetalhe, PageCampoCodificadoDescricao, HistoricoTelefone, PageOrigensComerciais, PagePessoas, PagePortador, ListaProdutos, PageBancos, PageTelefones, PageTiposEndereco, PageTipoTelefones, PageEnderecos, PessoaFisicaAprovadaPersist, PessoaFisicaAprovadaResponse, PessoaJuridicaAprovadaResponse, PessoaJuridicaAprovadaPersist) {
  'use strict';

  /**
   * CadastrosGerais service.
   * @module api/CadastrosGeraisApi
   * @version 2.16.2
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
     * Callback function to receive the result of the alterarUsingPUT1 operation.
     * @callback module:api/CadastrosGeraisApi~alterarUsingPUT1Callback
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
     * @param {module:api/CadastrosGeraisApi~alterarUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Endereco}
     */
    this.alterarUsingPUT1 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT1";
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
      var returnType = Endereco;

      return this.apiClient.callApi(
        '/api/enderecos', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT4 operation.
     * @callback module:api/CadastrosGeraisApi~alterarUsingPUT4Callback
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
     * @param {String} opts.profissao Profiss\u00C3\u00A3o da pessoa fisica
     * @param {Integer} opts.idNaturezaOcupacao Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica
     * @param {Integer} opts.idNacionalidade Id Nacionalidade da pessoa fisica
     * @param {Integer} opts.numeroAgencia N\u00C3\u00BAmero da ag\u00C3\u00AAncia.
     * @param {String} opts.numeroContaCorrente N\u00C3\u00BAmero da conta corrente.
     * @param {String} opts.email Email da pessoa fisica
     * @param {String} opts.nomeEmpresa Nome que deve ser impresso no cart\u00C3\u00A3o
     * @param {module:api/CadastrosGeraisApi~alterarUsingPUT4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaDetalheResponse}
     */
    this.alterarUsingPUT4 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT4";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'nomeMae': opts['nomeMae'],
        'idEstadoCivil': opts['idEstadoCivil'],
        'profissao': opts['profissao'],
        'idNaturezaOcupacao': opts['idNaturezaOcupacao'],
        'idNacionalidade': opts['idNacionalidade'],
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
     * Callback function to receive the result of the alterarUsingPUT5 operation.
     * @callback module:api/CadastrosGeraisApi~alterarUsingPUT5Callback
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
     * @param {String} opts.dataNascimento Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd.
     * @param {String} opts.sexo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00C3\u00A3o Especificado).
     * @param {String} opts.numeroIdentidade N\u00C3\u00BAmero da Identidade.
     * @param {String} opts.orgaoExpedidorIdentidade Org\u00C3\u00A3o expedidor do Identidade.
     * @param {String} opts.unidadeFederativaIdentidade Sigla da Unidade Federativa de onde foi expedido a Identidade
     * @param {String} opts.dataEmissaoIdentidade Data emiss\u00C3\u00A3o da Identidade.
     * @param {module:api/CadastrosGeraisApi~alterarUsingPUT5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Pessoa}
     */
    this.alterarUsingPUT5 = function(id, nome, tipo, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT5";
      }

      // verify the required parameter 'nome' is set
      if (nome == undefined || nome == null) {
        throw "Missing the required parameter 'nome' when calling alterarUsingPUT5";
      }

      // verify the required parameter 'tipo' is set
      if (tipo == undefined || tipo == null) {
        throw "Missing the required parameter 'tipo' when calling alterarUsingPUT5";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'nome': nome,
        'tipo': tipo,
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
      var returnType = Pessoa;

      return this.apiClient.callApi(
        '/api/pessoas/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alterarUsingPUT6 operation.
     * @callback module:api/CadastrosGeraisApi~alterarUsingPUT6Callback
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
     * @param {module:api/CadastrosGeraisApi~alterarUsingPUT6Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Telefone}
     */
    this.alterarUsingPUT6 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT6";
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
      var returnType = Telefone;

      return this.apiClient.callApi(
        '/api/telefones', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the ativarUsoExteriorUsingPOST operation.
     * @callback module:api/CadastrosGeraisApi~ativarUsoExteriorUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProdutoDetalhesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ativa o par\u00C3\u00A2metro uso exterior para o produto
     * Este m\u00C3\u00A9todo permite ativar o uso no exterior para o produto atrav\u00C3\u00A9s do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id)
     * @param {module:api/CadastrosGeraisApi~ativarUsoExteriorUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProdutoDetalhesResponse}
     */
    this.ativarUsoExteriorUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling ativarUsoExteriorUsingPOST";
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
      var returnType = ProdutoDetalhesResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}/ativar-uso-exterior', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the configurarTaxaAntecipacaoUsingPOST operation.
     * @callback module:api/CadastrosGeraisApi~configurarTaxaAntecipacaoUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParametroProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configura a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto
     * Este recurso permite configurar a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto, a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id Id Produto
     * @param {module:model/TaxaAntecipacaoRequest} taxaAntecipacaoRequest taxaAntecipacaoRequest
     * @param {module:api/CadastrosGeraisApi~configurarTaxaAntecipacaoUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParametroProdutoResponse}
     */
    this.configurarTaxaAntecipacaoUsingPOST = function(id, taxaAntecipacaoRequest, callback) {
      var postBody = taxaAntecipacaoRequest;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling configurarTaxaAntecipacaoUsingPOST";
      }

      // verify the required parameter 'taxaAntecipacaoRequest' is set
      if (taxaAntecipacaoRequest == undefined || taxaAntecipacaoRequest == null) {
        throw "Missing the required parameter 'taxaAntecipacaoRequest' when calling configurarTaxaAntecipacaoUsingPOST";
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
      var returnType = ParametroProdutoResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}/configurar-taxa-antecipacao', 'POST',
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
     * @param {Integer} id ID da Origem Comercial
     * @param {module:api/CadastrosGeraisApi~consultarOrigemComercialUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/OrigemComercial}
     */
    this.consultarOrigemComercialUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarOrigemComercialUsingGET";
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
      var returnType = OrigemComercial;

      return this.apiClient.callApi(
        '/api/origens-comerciais/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarTaxaAntecipacaoUsingGET operation.
     * @callback module:api/CadastrosGeraisApi~consultarTaxaAntecipacaoUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParametroProdutoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Consulta a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto
     * Este recurso permite consultar a Taxa de Antecipa\u00C3\u00A7\u00C3\u00A3o de um Produto, a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id Id Produto
     * @param {module:model/String} tipoTransacao Tipo da Transa\u00C3\u00A7\u00C3\u00A3o (ON-US ou OFF-US)
     * @param {module:api/CadastrosGeraisApi~consultarTaxaAntecipacaoUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ParametroProdutoResponse}
     */
    this.consultarTaxaAntecipacaoUsingGET = function(id, tipoTransacao, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarTaxaAntecipacaoUsingGET";
      }

      // verify the required parameter 'tipoTransacao' is set
      if (tipoTransacao == undefined || tipoTransacao == null) {
        throw "Missing the required parameter 'tipoTransacao' when calling consultarTaxaAntecipacaoUsingGET";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'tipoTransacao': tipoTransacao
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ParametroProdutoResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}/consultar-taxa-antecipacao', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET1 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Banco} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Banco
     * Este m\u00C3\u00A9todo permite consultar um determinado Banco a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Banco (id).
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Banco}
     */
    this.consultarUsingGET1 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET1";
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
      var returnType = Banco;

      return this.apiClient.callApi(
        '/api/bancos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET10 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET10Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Pessoa} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de uma determinada Pessoa
     * Este m\u00C3\u00A9todo permite que sejam listadas as Pessoas existentes na base de dados do Emissor.
     * @param {Integer} id ID da Pessoa
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Pessoa}
     */
    this.consultarUsingGET10 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET10";
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
      var returnType = Pessoa;

      return this.apiClient.callApi(
        '/api/pessoas/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET11 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET11Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ProdutoDetalhesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Produto
     * Este m\u00C3\u00A9todo permite consultar um determinado Produto a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id)
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProdutoDetalhesResponse}
     */
    this.consultarUsingGET11 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET11";
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
      var returnType = ProdutoDetalhesResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET15 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Telefone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Telefone
     * Este m\u00C3\u00A9todo permite consultar um determinado Telefone a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone (id).
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Telefone}
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
      var returnType = Telefone;

      return this.apiClient.callApi(
        '/api/telefones/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET17 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoAjuste} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos de ajustes do emissor 
     * Este recurso permite que sejam listados os tipos de ajustes existentes na base de dados do emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo identificador do tipo de ajuste.
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do tipo de ajuste.
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoAjuste}
     */
    this.consultarUsingGET17 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'descricao': opts['descricao']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoAjuste;

      return this.apiClient.callApi(
        '/api/tipos-ajustes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET18 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET18Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoBoleto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os tipos de boletos do emissor 
     * Este recurso permite que sejam listados os tipos de boletos existentes na base de dados do emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo identificador do tipo de boleto.
     * @param {String} opts.descricao Descri\u00C3\u00A7\u00C3\u00A3o do tipo de boleto.
     * @param {Integer} opts.banco C\u00C3\u00B3digo identificador do banco.
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoBoleto}
     */
    this.consultarUsingGET18 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'descricao': opts['descricao'],
        'banco': opts['banco']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTipoBoleto;

      return this.apiClient.callApi(
        '/api/tipos-boletos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET19 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoEndereco} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Tipo de Endere\u00C3\u00A7o
     * Este m\u00C3\u00A9todo permite consultar um determinado Tipo de Endere\u00C3\u00A7o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoEndereco}
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
      var returnType = TipoEndereco;

      return this.apiClient.callApi(
        '/api/tipos-enderecos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET21 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TipoTelefone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Tipo de Telefone
     * Este m\u00C3\u00A9todo permite consultar um determinado Tipo de Telefone a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id)
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TipoTelefone}
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
      var returnType = TipoTelefone;

      return this.apiClient.callApi(
        '/api/tipos-telefones/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET5 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Endereco} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os dados de um determinado Endere\u00C3\u00A7o
     * Este m\u00C3\u00A9todo permite consultar um determinado Endere\u00C3\u00A7o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET5Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Endereco}
     */
    this.consultarUsingGET5 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET5";
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
      var returnType = Endereco;

      return this.apiClient.callApi(
        '/api/enderecos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET9 operation.
     * @callback module:api/CadastrosGeraisApi~consultarUsingGET9Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apresenta os detalhes de uma determinada Pessoa
     * Este m\u00C3\u00A9todo permite a consulta dos detalhes de uma Pessoa existentes na base de dados do Emissor.
     * @param {Integer} id ID da Pessoa
     * @param {module:api/CadastrosGeraisApi~consultarUsingGET9Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaDetalheResponse}
     */
    this.consultarUsingGET9 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET9";
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
     * Callback function to receive the result of the desativarUsoExteriorUsingPOST operation.
     * @callback module:api/CadastrosGeraisApi~desativarUsoExteriorUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProdutoDetalhesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Desativa o par\u00C3\u00A2metro uso exterior para o produto
     * Este m\u00C3\u00A9todo permite desativar o uso no exterior para o produto atrav\u00C3\u00A9s do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id)
     * @param {module:api/CadastrosGeraisApi~desativarUsoExteriorUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProdutoDetalhesResponse}
     */
    this.desativarUsoExteriorUsingPOST = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling desativarUsoExteriorUsingPOST";
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
      var returnType = ProdutoDetalhesResponse;

      return this.apiClient.callApi(
        '/api/produtos/{id}/desativar-uso-exterior', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarContasPorPessoaUsingGET operation.
     * @callback module:api/CadastrosGeraisApi~listarContasPorPessoaUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageContasDetalhe} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as contas da pessoa
     * Permite listar as contas de um pessoa a partir do seu numero na receita federal.
     * @param {String} numeroReceitaFederal N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do cliente na Receita Federal (CPF ou CNPJ)
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastrosGeraisApi~listarContasPorPessoaUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageContasDetalhe}
     */
    this.listarContasPorPessoaUsingGET = function(numeroReceitaFederal, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'numeroReceitaFederal' is set
      if (numeroReceitaFederal == undefined || numeroReceitaFederal == null) {
        throw "Missing the required parameter 'numeroReceitaFederal' when calling listarContasPorPessoaUsingGET";
      }


      var pathParams = {
      };
      var queryParams = {
        'numeroReceitaFederal': numeroReceitaFederal,
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
      var returnType = PageContasDetalhe;

      return this.apiClient.callApi(
        '/api/pessoas/listar-contas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarEstadosCivisUsingGET operation.
     * @callback module:api/CadastrosGeraisApi~listarEstadosCivisUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Estados C\u00C3\u00ADvis
     * Este m\u00C3\u00A9todo permite que sejam listados os Estados C\u00C3\u00ADvis na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastrosGeraisApi~listarEstadosCivisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricao}
     */
    this.listarEstadosCivisUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageCampoCodificadoDescricao;

      return this.apiClient.callApi(
        '/api/estados-civis', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarHistoricoTelefonesUsingGET operation.
     * @callback module:api/CadastrosGeraisApi~listarHistoricoTelefonesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HistoricoTelefone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar altera\u00C3\u00A7\u00C3\u00B5es de telefones realizadas nos \u00C3\u00BAltimos 60 dias
     * Este m\u00C3\u00A9todo permite verificar quais os telefones de um determinado que cliente que sofreram altera\u00C3\u00A7\u00C3\u00A3o nos \u00C3\u00BAltimos 60 dias.
     * @param {Integer} id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da pessoa (id).
     * @param {module:api/CadastrosGeraisApi~listarHistoricoTelefonesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/HistoricoTelefone}
     */
    this.listarHistoricoTelefonesUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarHistoricoTelefonesUsingGET";
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
      var returnType = HistoricoTelefone;

      return this.apiClient.callApi(
        '/api/pessoas/{id}/historico-telefones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarNacionalidadesUsingGET operation.
     * @callback module:api/CadastrosGeraisApi~listarNacionalidadesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista nacionalidades
     * Este m\u00C3\u00A9todo permite que sejam listados as nacionalidades na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastrosGeraisApi~listarNacionalidadesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricao}
     */
    this.listarNacionalidadesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageCampoCodificadoDescricao;

      return this.apiClient.callApi(
        '/api/nacionalidades', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarNaturezasOcupacoesUsingGET operation.
     * @callback module:api/CadastrosGeraisApi~listarNaturezasOcupacoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as Ocupa\u00C3\u00A7\u00C3\u00B5es
     * Este m\u00C3\u00A9todo permite que sejam listados as naturezas de opera\u00C3\u00A7\u00C3\u00B5es na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastrosGeraisApi~listarNaturezasOcupacoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricao}
     */
    this.listarNaturezasOcupacoesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageCampoCodificadoDescricao;

      return this.apiClient.callApi(
        '/api/ocupacoes', 'GET',
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
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id Id da origem comercial
     * @param {String} opts.nome Nome da origem comercial
     * @param {Integer} opts.status Status da origem comercial
     * @param {module:api/CadastrosGeraisApi~listarOrigensComerciaisUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOrigensComerciais}
     */
    this.listarOrigensComerciaisUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
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
     * Callback function to receive the result of the listarProfissoesUsingGET operation.
     * @callback module:api/CadastrosGeraisApi~listarProfissoesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageCampoCodificadoDescricao} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista profiss\u00C3\u00B5es
     * Este m\u00C3\u00A9todo permite que sejam listados as profiss\u00C3\u00B5es na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastrosGeraisApi~listarProfissoesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageCampoCodificadoDescricao}
     */
    this.listarProfissoesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageCampoCodificadoDescricao;

      return this.apiClient.callApi(
        '/api/profissoes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET13 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Detalhes das Pessoas cadastradas no Emissor
     * Este m\u00C3\u00A9todo permite que sejam listadas od detalhes das Pessoas existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo identificador da pessoa
     * @param {String} opts.nomeMae Apresenta o nome da m\u00C3\u00A3e da pessoa fisica
     * @param {Integer} opts.idEstadoCivil Id Estado civil da pessoa fisica
     * @param {String} opts.profissao Profiss\u00C3\u00A3o da pessoa fisica
     * @param {Integer} opts.idNaturezaOcupacao Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica
     * @param {Integer} opts.idNacionalidade Id Nacionalidade da pessoa fisica
     * @param {Integer} opts.numeroAgencia N\u00C3\u00BAmero da ag\u00C3\u00AAncia.
     * @param {String} opts.numeroContaCorrente N\u00C3\u00BAmero da conta corrente.
     * @param {String} opts.email Email da pessoa fisica
     * @param {String} opts.nomeEmpresa Nome que deve ser impresso no cart\u00C3\u00A3o
     * @param {module:api/CadastrosGeraisApi~listarUsingGET13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaDetalheResponse}
     */
    this.listarUsingGET13 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'idPessoa': opts['idPessoa'],
        'nomeMae': opts['nomeMae'],
        'idEstadoCivil': opts['idEstadoCivil'],
        'profissao': opts['profissao'],
        'idNaturezaOcupacao': opts['idNaturezaOcupacao'],
        'idNacionalidade': opts['idNacionalidade'],
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
        '/api/pessoas-detalhes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET14 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET14Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePessoas} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as Pessoas cadastradas no Emissor
     * Este m\u00C3\u00A9todo permite que sejam listadas as Pessoas existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
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
     * @param {module:api/CadastrosGeraisApi~listarUsingGET14Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePessoas}
     */
    this.listarUsingGET14 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PagePessoas;

      return this.apiClient.callApi(
        '/api/pessoas', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET16 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePortador} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Portadores existentes
     * Este m\u00C3\u00A9todo permite que sejam listados os portadores cadastrados na base do emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.idConta C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Conta (id).
     * @param {Integer} opts.idProduto C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id).
     * @param {Integer} opts.idParentesco C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Parentesco (id)
     * @param {String} opts.tipoPortador Apresenta o tipo do Portador do cart\u00C3\u00A3o, sendo: (&#39;T&#39;: Titular, &#39;A&#39;: Adicional).
     * @param {String} opts.nomeImpresso Apresenta o nome a ser impresso no cart\u00C3\u00A3o.
     * @param {Integer} opts.idTipoCartao Apresenta o c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do tipo do cart\u00C3\u00A3o (id), que ser\u00C3\u00A1 utilizado para gerar os cart\u00C3\u00B5es deste portador, vinculados a sua respectiva conta atrav\u00C3\u00A9s do campo idConta.
     * @param {Integer} opts.flagAtivo Quanto ativa, indica que o cadastro do Portador est\u00C3\u00A1 ativo, em emissores que realizam este tipo de gest\u00C3\u00A3o.
     * @param {String} opts.dataCadastroPortador Apresenta a data em que o Portador fora cadastrado, quando possuir esta informa\u00C3\u00A7\u00C3\u00A3o.
     * @param {String} opts.dataCancelamentoPortador Apresenta a data em que o Portador fora cancelado, quando possuir esta informa\u00C3\u00A7\u00C3\u00A3o.
     * @param {module:api/CadastrosGeraisApi~listarUsingGET16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePortador}
     */
    this.listarUsingGET16 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'idConta': opts['idConta'],
        'idProduto': opts['idProduto'],
        'idPessoa': opts['idPessoa'],
        'idParentesco': opts['idParentesco'],
        'tipoPortador': opts['tipoPortador'],
        'nomeImpresso': opts['nomeImpresso'],
        'idTipoCartao': opts['idTipoCartao'],
        'flagAtivo': opts['flagAtivo'],
        'dataCadastroPortador': opts['dataCadastroPortador'],
        'dataCancelamentoPortador': opts['dataCancelamentoPortador']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
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
     * Callback function to receive the result of the listarUsingGET17 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET17Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ListaProdutos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Produtos do Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os Produtos existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {String} opts.nome Descri\u00C3\u00A7\u00C3\u00A3o do Nome do Produto.
     * @param {Integer} opts.status Representa o Status do Produto, onde: (\&quot;0\&quot;: Inativo), (\&quot;1\&quot;: Ativo).
     * @param {Integer} opts.idFantasiaBasica C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Fantasia B\u00C3\u00A1sica (id) a qual o produto pertence.
     * @param {module:api/CadastrosGeraisApi~listarUsingGET17Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ListaProdutos}
     */
    this.listarUsingGET17 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'nome': opts['nome'],
        'status': opts['status'],
        'idFantasiaBasica': opts['idFantasiaBasica']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
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
     * @param {module:model/PageBancos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Bancos cadastrados para o Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os Bancos existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {module:api/CadastrosGeraisApi~listarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageBancos}
     */
    this.listarUsingGET2 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageBancos;

      return this.apiClient.callApi(
        '/api/bancos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET21 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET21Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTelefones} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Telefones cadastrados no Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os Telefones existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone (id).
     * @param {Integer} opts.idTipoTelefone C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
     * @param {Integer} opts.idPessoa C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa (id) a qual o telefone pertence.
     * @param {String} opts.ddd C\u00C3\u00B3digo DDD do telefone (id).
     * @param {String} opts.telefone N\u00C3\u00BAmero do telefone.
     * @param {String} opts.ramal N\u00C3\u00BAmero do ramal.
     * @param {Integer} opts.status Apresenta o Status do Telefone, onde: &#39;0&#39;: Inativo e &#39;1&#39;: Ativo
     * @param {module:api/CadastrosGeraisApi~listarUsingGET21Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTelefones}
     */
    this.listarUsingGET21 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageTelefones;

      return this.apiClient.callApi(
        '/api/telefones', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET23 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET23Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTiposEndereco} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista as op\u00C3\u00B5es de Tipos de Endere\u00C3\u00A7os do Emissor 
     * Este m\u00C3\u00A9todo permite que sejam listados os Tipos de Endere\u00C3\u00A7os existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Endere\u00C3\u00A7o (id)
     * @param {String} opts.nome Nome do Tipo do Endere\u00C3\u00A7o
     * @param {module:api/CadastrosGeraisApi~listarUsingGET23Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTiposEndereco}
     */
    this.listarUsingGET23 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageTiposEndereco;

      return this.apiClient.callApi(
        '/api/tipos-enderecos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listarUsingGET25 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET25Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTipoTelefones} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Tipos de Telefones
     * Este m\u00C3\u00A9todo permite que sejam listados os Tipos de Telefones existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page P\u00C3\u00A1gina solicitada (Default = 0)
     * @param {Integer} opts.limit Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
     * @param {Integer} opts.id C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Telefone (id).
     * @param {String} opts.nome Nome do Tipo do Telefone
     * @param {module:api/CadastrosGeraisApi~listarUsingGET25Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTipoTelefones}
     */
    this.listarUsingGET25 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'limit': opts['limit'],
        'id': opts['id'],
        'nome': opts['nome']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
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
     * Callback function to receive the result of the listarUsingGET8 operation.
     * @callback module:api/CadastrosGeraisApi~listarUsingGET8Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageEnderecos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lista os Endere\u00C3\u00A7os cadastrados para o Emissor
     * Este m\u00C3\u00A9todo permite que sejam listados os Endere\u00C3\u00A7os existentes na base de dados do Emissor.
     * @param {Object} opts Optional parameters
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
     * @param {module:api/CadastrosGeraisApi~listarUsingGET8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageEnderecos}
     */
    this.listarUsingGET8 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = PageEnderecos;

      return this.apiClient.callApi(
        '/api/enderecos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarPessoaFisicaAprovadaUsingPOST operation.
     * @callback module:api/CadastrosGeraisApi~salvarPessoaFisicaAprovadaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaFisicaAprovadaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastro de Conta e Pessoa Fisica
     * Permite realizar o cadastro de uma Conta para um cliente do tipo Pessoa F\u00C3\u00ADsica, recebendo nesta opera\u00C3\u00A7\u00C3\u00A3o todos os dados cadastrais que se fazem necess\u00C3\u00A1rios para isso. Uma vez criado, poder\u00C3\u00A1 ser acionado o m\u00C3\u00A9todo de &#39;Gera\u00C3\u00A7\u00C3\u00A3o de Cart\u00C3\u00A3o&#39; para o cliente e seus adicionais.
     * @param {module:model/PessoaFisicaAprovadaPersist} pessoaPersist pessoaPersist
     * @param {module:api/CadastrosGeraisApi~salvarPessoaFisicaAprovadaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/CadastrosGeraisApi~salvarPessoaJuridicaAprovadaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaJuridicaAprovadaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastro de Conta e Pessoa Jur\u00C3\u00ADdica
     * Cadastro de Conta e Pessoa Jur\u00C3\u00ADdica Permite realizar o cadastro de uma Conta para um cliente do tipo Pessoa Jur\u00C3\u00ADdica, recebendo nesta opera\u00C3\u00A7\u00C3\u00A3o todos os dados cadastrais que se fazem necess\u00C3\u00A1rios para isso, inclu\u00C3\u00ADndo o registro de cada um dos s\u00C3\u00B3cios. Uma vez criado, poder\u00C3\u00A1 ser acionado o m\u00C3\u00A9todo de &#39;Gera\u00C3\u00A7\u00C3\u00A3o de Cart\u00C3\u00A3o&#39; para o cliente e cada um dos s\u00C3\u00B3cios vinculados.
     * @param {module:model/PessoaJuridicaAprovadaPersist} pessoaPersist pessoaPersist
     * @param {module:api/CadastrosGeraisApi~salvarPessoaJuridicaAprovadaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the salvarUsingPOST10 operation.
     * @callback module:api/CadastrosGeraisApi~salvarUsingPOST10Callback
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
     * @param {module:api/CadastrosGeraisApi~salvarUsingPOST10Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Telefone}
     */
    this.salvarUsingPOST10 = function(opts, callback) {
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
      var returnType = Telefone;

      return this.apiClient.callApi(
        '/api/telefones', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST4 operation.
     * @callback module:api/CadastrosGeraisApi~salvarUsingPOST4Callback
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
     * @param {module:api/CadastrosGeraisApi~salvarUsingPOST4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Endereco}
     */
    this.salvarUsingPOST4 = function(opts, callback) {
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
      var returnType = Endereco;

      return this.apiClient.callApi(
        '/api/enderecos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the salvarUsingPOST7 operation.
     * @callback module:api/CadastrosGeraisApi~salvarUsingPOST7Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Salvar os detalhes de uma determinada Pessoa
     * Este m\u00C3\u00A9todo permite que seja incluido na base do emissor os detalhes de uma determinada Pessoa.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idPessoa Apresenta o c\u00C3\u00B3digo identificador da pessoa
     * @param {String} opts.nomeMae Apresenta o nome da m\u00C3\u00A3e da pessoa fisica
     * @param {Integer} opts.idEstadoCivil Id Estado civil da pessoa fisica
     * @param {String} opts.profissao Profiss\u00C3\u00A3o da pessoa fisica
     * @param {Integer} opts.idNaturezaOcupacao Id Natureza Ocupa\u00C3\u00A7\u00C3\u00A3o da pessoa fisica
     * @param {Integer} opts.idNacionalidade Id Nacionalidade da pessoa fisica
     * @param {Integer} opts.numeroAgencia N\u00C3\u00BAmero da ag\u00C3\u00AAncia.
     * @param {String} opts.numeroContaCorrente N\u00C3\u00BAmero da conta corrente.
     * @param {String} opts.email Email da pessoa fisica
     * @param {String} opts.nomeEmpresa Nome que deve ser impresso no cart\u00C3\u00A3o
     * @param {module:api/CadastrosGeraisApi~salvarUsingPOST7Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaDetalheResponse}
     */
    this.salvarUsingPOST7 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'idPessoa': opts['idPessoa'],
        'nomeMae': opts['nomeMae'],
        'idEstadoCivil': opts['idEstadoCivil'],
        'profissao': opts['profissao'],
        'idNaturezaOcupacao': opts['idNaturezaOcupacao'],
        'idNacionalidade': opts['idNacionalidade'],
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
     * Callback function to receive the result of the salvarUsingPOST8 operation.
     * @callback module:api/CadastrosGeraisApi~salvarUsingPOST8Callback
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
     * @param {String} opts.dataNascimento Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd.
     * @param {String} opts.sexo C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00C3\u00A3o Especificado).
     * @param {String} opts.numeroIdentidade N\u00C3\u00BAmero da Identidade.
     * @param {String} opts.orgaoExpedidorIdentidade Org\u00C3\u00A3o expedidor do Identidade.
     * @param {String} opts.unidadeFederativaIdentidade Sigla da Unidade Federativa de onde foi expedido a Identidade
     * @param {String} opts.dataEmissaoIdentidade Data emiss\u00C3\u00A3o da Identidade.
     * @param {module:api/CadastrosGeraisApi~salvarUsingPOST8Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Pessoa}
     */
    this.salvarUsingPOST8 = function(nome, tipo, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nome' is set
      if (nome == undefined || nome == null) {
        throw "Missing the required parameter 'nome' when calling salvarUsingPOST8";
      }

      // verify the required parameter 'tipo' is set
      if (tipo == undefined || tipo == null) {
        throw "Missing the required parameter 'tipo' when calling salvarUsingPOST8";
      }


      var pathParams = {
      };
      var queryParams = {
        'nome': nome,
        'tipo': tipo,
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
      var returnType = Pessoa;

      return this.apiClient.callApi(
        '/api/pessoas', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
