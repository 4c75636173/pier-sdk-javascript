(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/AdicionalDetalheResponse', '../model/AdicionalUpdate', '../model/PessoaDetalheResponse', '../model/PessoaResponse', '../model/TelefoneResponse', '../model/EnderecoResponse', '../model/AtribuirAssinaturaClientePersist', '../model/IntegracaoEmissorPersist', '../model/IntegracaoEmissorResponse', '../model/AdicionalPersist', '../model/PagePessoaResponse', '../model/AdicionalResponse', '../model/PageEnderecoResponse', '../model/PagePessoaDetalheResponse', '../model/PageTelefoneResponse', '../model/PessoaFisicaAprovadaPersistValue', '../model/PessoaFisicaAprovadaResponse', '../model/PessoaJuridicaAprovadaResponse', '../model/PessoaJuridicaAprovadaPersist'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AdicionalDetalheResponse'), require('../model/AdicionalUpdate'), require('../model/PessoaDetalheResponse'), require('../model/PessoaResponse'), require('../model/TelefoneResponse'), require('../model/EnderecoResponse'), require('../model/AtribuirAssinaturaClientePersist'), require('../model/IntegracaoEmissorPersist'), require('../model/IntegracaoEmissorResponse'), require('../model/AdicionalPersist'), require('../model/PagePessoaResponse'), require('../model/AdicionalResponse'), require('../model/PageEnderecoResponse'), require('../model/PagePessoaDetalheResponse'), require('../model/PageTelefoneResponse'), require('../model/PessoaFisicaAprovadaPersistValue'), require('../model/PessoaFisicaAprovadaResponse'), require('../model/PessoaJuridicaAprovadaResponse'), require('../model/PessoaJuridicaAprovadaPersist'));
  } else {
    // Browser globals (root is window)
    if (!root.Pier) {
      root.Pier = {};
    }
    root.Pier.GlobaltagcadastroclienteApi = factory(root.Pier.ApiClient, root.Pier.AdicionalDetalheResponse, root.Pier.AdicionalUpdate, root.Pier.PessoaDetalheResponse, root.Pier.PessoaResponse, root.Pier.TelefoneResponse, root.Pier.EnderecoResponse, root.Pier.AtribuirAssinaturaClientePersist, root.Pier.IntegracaoEmissorPersist, root.Pier.IntegracaoEmissorResponse, root.Pier.AdicionalPersist, root.Pier.PagePessoaResponse, root.Pier.AdicionalResponse, root.Pier.PageEnderecoResponse, root.Pier.PagePessoaDetalheResponse, root.Pier.PageTelefoneResponse, root.Pier.PessoaFisicaAprovadaPersistValue, root.Pier.PessoaFisicaAprovadaResponse, root.Pier.PessoaJuridicaAprovadaResponse, root.Pier.PessoaJuridicaAprovadaPersist);
  }
}(this, function(ApiClient, AdicionalDetalheResponse, AdicionalUpdate, PessoaDetalheResponse, PessoaResponse, TelefoneResponse, EnderecoResponse, AtribuirAssinaturaClientePersist, IntegracaoEmissorPersist, IntegracaoEmissorResponse, AdicionalPersist, PagePessoaResponse, AdicionalResponse, PageEnderecoResponse, PagePessoaDetalheResponse, PageTelefoneResponse, PessoaFisicaAprovadaPersistValue, PessoaFisicaAprovadaResponse, PessoaJuridicaAprovadaResponse, PessoaJuridicaAprovadaPersist) {
  'use strict';

  /**
   * globaltagcadastrocliente service.
   * @module api/GlobaltagcadastroclienteApi
   * @version 2.68.0
   */

  /**
   * Constructs a new GlobaltagcadastroclienteApi. 
   * @alias module:api/GlobaltagcadastroclienteApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alterarUsingPUT operation.
     * @callback module:api/GlobaltagcadastroclienteApi~alterarUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AdicionalDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{adicional_resource_alterar}}}
     * {{{adicional_resource_alterar_notes}}}
     * @param {Integer} id {{{adicional_resource_alterar_param_id_conta}}}
     * @param {Integer} idPessoa {{{adicional_resource_alterar_param_id_pessoa}}}
     * @param {module:model/AdicionalUpdate} adicionalUpdate adicionalUpdate
     * @param {module:api/GlobaltagcadastroclienteApi~alterarUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the alterarUsingPUT15 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~alterarUsingPUT15Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{pessoa_detalhe_resource_alterar}}}
     * {{{pessoa_detalhe_resource_alterar_notes}}}
     * @param {Integer} id {{{pessoa_detalhe_resource_alterar_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.nomeMae {{{pessoa_detalhe_update_nome_mae_value}}}
     * @param {Integer} opts.idEstadoCivil {{{pessoa_detalhe_update_id_estado_civil_value}}}
     * @param {String} opts.idProfissao {{{pessoa_detalhe_update_id_profissao_value}}}
     * @param {Integer} opts.idNaturezaOcupacao {{{pessoa_detalhe_update_id_natureza_ocupacao_value}}}
     * @param {Integer} opts.idNacionalidade {{{pessoa_detalhe_update_id_nacionalidade_value}}}
     * @param {Integer} opts.numeroBanco {{{pessoa_detalhe_update_numero_banco_value}}}
     * @param {Integer} opts.numeroAgencia {{{pessoa_detalhe_update_numero_agencia_value}}}
     * @param {String} opts.numeroContaCorrente {{{pessoa_detalhe_update_numero_conta_corrente_value}}}
     * @param {String} opts.email {{{pessoa_detalhe_update_email_value}}}
     * @param {String} opts.nomeEmpresa {{{pessoa_detalhe_update_nome_empresa_value}}}
     * @param {module:api/GlobaltagcadastroclienteApi~alterarUsingPUT15Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaDetalheResponse}
     */
    this.alterarUsingPUT15 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT15";
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
     * Callback function to receive the result of the alterarUsingPUT16 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~alterarUsingPUT16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{pessoa_resource_alterar}}}
     * {{{pessoa_resource_alterar_notes}}}
     * @param {Integer} id {{{pessoa_resource_alterar_param_id}}}
     * @param {String} nome {{{pessoa_persist_nome_value}}}
     * @param {String} tipo {{{pessoa_persist_tipo_value}}}
     * @param {String} dataNascimento {{{pessoa_persist_data_nascimento_value}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.cpf {{{pessoa_persist_cpf_value}}}
     * @param {String} opts.cnpj {{{pessoa_persist_cnpj_value}}}
     * @param {String} opts.sexo {{{pessoa_persist_sexo_value}}}
     * @param {String} opts.numeroIdentidade {{{pessoa_persist_numero_identidade_value}}}
     * @param {String} opts.orgaoExpedidorIdentidade {{{pessoa_persist_orgao_expedidor_identidade_value}}}
     * @param {String} opts.unidadeFederativaIdentidade {{{pessoa_persist_unidade_federativa_identidade_value}}}
     * @param {String} opts.dataEmissaoIdentidade {{{pessoa_persist_data_emissao_identidade_value}}}
     * @param {module:api/GlobaltagcadastroclienteApi~alterarUsingPUT16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaResponse}
     */
    this.alterarUsingPUT16 = function(id, nome, tipo, dataNascimento, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT16";
      }

      // verify the required parameter 'nome' is set
      if (nome == undefined || nome == null) {
        throw "Missing the required parameter 'nome' when calling alterarUsingPUT16";
      }

      // verify the required parameter 'tipo' is set
      if (tipo == undefined || tipo == null) {
        throw "Missing the required parameter 'tipo' when calling alterarUsingPUT16";
      }

      // verify the required parameter 'dataNascimento' is set
      if (dataNascimento == undefined || dataNascimento == null) {
        throw "Missing the required parameter 'dataNascimento' when calling alterarUsingPUT16";
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
     * Callback function to receive the result of the alterarUsingPUT18 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~alterarUsingPUT18Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{telefone_resource_alterar}}}
     * {{{telefone_resource_alterar_notes}}}
     * @param {Integer} id {{{telefone_alterar_persist_id_value}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idTipoTelefone {{{telefone_alterar_persist_id_tipo_telefone_value}}}
     * @param {String} opts.ddd {{{telefone_alterar_persist_ddd_value}}}
     * @param {String} opts.telefone {{{telefone_alterar_persist_telefone_value}}}
     * @param {String} opts.ramal {{{telefone_alterar_persist_ramal_value}}}
     * @param {module:api/GlobaltagcadastroclienteApi~alterarUsingPUT18Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneResponse}
     */
    this.alterarUsingPUT18 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling alterarUsingPUT18";
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
     * @callback module:api/GlobaltagcadastroclienteApi~alterarUsingPUT5Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{endereco_resource_alterar}}}
     * {{{endereco_resource_alterar_notes}}}
     * @param {Integer} id id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idPessoa {{{endereco_persist_id_pessoa_value}}}
     * @param {Integer} opts.idTipoEndereco {{{endereco_persist_id_tipo_endereco_value}}}
     * @param {String} opts.cep {{{endereco_persist_cep_value}}}
     * @param {String} opts.logradouro {{{endereco_persist_logradouro_value}}}
     * @param {Integer} opts.numero {{{endereco_persist_numero_value}}}
     * @param {String} opts.complemento {{{endereco_persist_complemento_value}}}
     * @param {String} opts.pontoReferencia {{{endereco_persist_ponto_referencia_value}}}
     * @param {String} opts.bairro {{{endereco_persist_bairro_value}}}
     * @param {String} opts.cidade {{{endereco_persist_cidade_value}}}
     * @param {String} opts.uf {{{endereco_persist_uf_value}}}
     * @param {String} opts.pais {{{endereco_persist_pais_value}}}
     * @param {module:api/GlobaltagcadastroclienteApi~alterarUsingPUT5Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagcadastroclienteApi~atribuirAssinaturaClienteUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_pessoa_resource_atribuir_assinatura_cliente}}}
     * {{{conta_pessoa_resource_atribuir_assinatura_cliente_notes}}}
     * @param {Integer} id {{{conta_pessoa_resource_atribuir_assinatura_cliente_param_id}}}
     * @param {module:model/AtribuirAssinaturaClientePersist} body {{{conta_pessoa_resource_atribuir_assinatura_cliente_param_body}}}
     * @param {module:api/GlobaltagcadastroclienteApi~atribuirAssinaturaClienteUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the atualizarEnderecoDeCorrespondenciaUsingPUT operation.
     * @callback module:api/GlobaltagcadastroclienteApi~atualizarEnderecoDeCorrespondenciaUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{endereco_resource_atualizar_correspondencia}}}
     * {{{endereco_resource_atualizar_correspondencia_notes}}}
     * @param {Integer} id {{{endereco_resource_atualizar_correspondencia_param_id}}}
     * @param {Integer} idConta {{{endereco_resource_atualizar_correspondencia_param_idConta}}}
     * @param {module:api/GlobaltagcadastroclienteApi~atualizarEnderecoDeCorrespondenciaUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EnderecoResponse}
     */
    this.atualizarEnderecoDeCorrespondenciaUsingPUT = function(id, idConta, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling atualizarEnderecoDeCorrespondenciaUsingPUT";
      }

      // verify the required parameter 'idConta' is set
      if (idConta == undefined || idConta == null) {
        throw "Missing the required parameter 'idConta' when calling atualizarEnderecoDeCorrespondenciaUsingPUT";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'idConta': idConta
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
        '/api/enderecos/{id}/alterar-endereco-correspondencia', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the atualizarUsingPOST operation.
     * @callback module:api/GlobaltagcadastroclienteApi~atualizarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntegracaoEmissorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{integracao_emissor_resource_atualizar}}}
     * {{{integracao_emissor_resource_atualizar_notes}}}
     * @param {Integer} id {{{integracao_emissor_resource_atualizar_param_id_conta}}}
     * @param {Object} opts Optional parameters
     * @param {module:model/IntegracaoEmissorPersist} opts.body {{{integracao_emissor_resource_atualizar_param_body}}}
     * @param {module:api/GlobaltagcadastroclienteApi~atualizarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the cadastrarUsingPOST1 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~cadastrarUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AdicionalDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{adicional_resource_cadastrar}}}
     * {{{adicional_resource_cadastrar_notes}}}
     * @param {Integer} id {{{adicional_resource_cadastrar_param_id_conta}}}
     * @param {module:model/AdicionalPersist} persist persist
     * @param {module:api/GlobaltagcadastroclienteApi~cadastrarUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AdicionalDetalheResponse}
     */
    this.cadastrarUsingPOST1 = function(id, persist, callback) {
      var postBody = persist;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling cadastrarUsingPOST1";
      }

      // verify the required parameter 'persist' is set
      if (persist == undefined || persist == null) {
        throw "Missing the required parameter 'persist' when calling cadastrarUsingPOST1";
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
     * Callback function to receive the result of the consultarUsingGET19 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~consultarUsingGET19Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{endereco_resource_consultar}}}
     * {{{endereco_resource_consultar_notes}}}
     * @param {Integer} id {{{endereco_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagcadastroclienteApi~consultarUsingGET19Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EnderecoResponse}
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
      var returnType = EnderecoResponse;

      return this.apiClient.callApi(
        '/api/enderecos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET2 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~consultarUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AdicionalDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{adicional_resource_consultar}}}
     * {{{adicional_resource_consultar_notes}}}
     * @param {Integer} id {{{adicional_resource_consultar_param_id_conta}}}
     * @param {Integer} idPessoa {{{adicional_resource_consultar_param_id_pessoa}}}
     * @param {module:api/GlobaltagcadastroclienteApi~consultarUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AdicionalDetalheResponse}
     */
    this.consultarUsingGET2 = function(id, idPessoa, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET2";
      }

      // verify the required parameter 'idPessoa' is set
      if (idPessoa == undefined || idPessoa == null) {
        throw "Missing the required parameter 'idPessoa' when calling consultarUsingGET2";
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
     * Callback function to receive the result of the consultarUsingGET30 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~consultarUsingGET30Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{pessoa_detalhe_resource_consultar}}}
     * {{{pessoa_detalhe_resource_consultar_notes}}}
     * @param {Integer} id {{{pessoa_detalhe_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagcadastroclienteApi~consultarUsingGET30Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaDetalheResponse}
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
      var returnType = PessoaDetalheResponse;

      return this.apiClient.callApi(
        '/api/pessoas-detalhes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the consultarUsingGET31 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~consultarUsingGET31Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{pessoa_resource_consultar}}}
     * {{{pessoa_resource_consultar_notes}}}
     * @param {Integer} id {{{pessoa_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagcadastroclienteApi~consultarUsingGET31Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaResponse}
     */
    this.consultarUsingGET31 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET31";
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
     * Callback function to receive the result of the consultarUsingGET39 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~consultarUsingGET39Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{telefone_resource_consultar}}}
     * {{{telefone_resource_consultar_notes}}}
     * @param {Integer} id {{{telefone_resource_consultar_param_id}}}
     * @param {module:api/GlobaltagcadastroclienteApi~consultarUsingGET39Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneResponse}
     */
    this.consultarUsingGET39 = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling consultarUsingGET39";
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
     * @callback module:api/GlobaltagcadastroclienteApi~inativarUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{adicional_resource_inativar}}}
     * {{{adicional_resource_inativar_notes}}}
     * @param {Integer} id {{{adicional_resource_inativar_param_id_conta}}}
     * @param {Integer} idPessoa {{{adicional_resource_inativar_param_id_pessoa}}}
     * @param {module:api/GlobaltagcadastroclienteApi~inativarUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagcadastroclienteApi~listarSociosUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePessoaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_pessoa_resource_listar_socios}}}
     * {{{conta_pessoa_resource_listar_socios_notes}}}
     * @param {Integer} id {{{conta_pessoa_resource_listar_socios_param_id}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcadastroclienteApi~listarSociosUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the listarUsingGET1 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~listarUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AdicionalResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{adicional_resource_listar}}}
     * {{{adicional_resource_listar_notes}}}
     * @param {Integer} id {{{adicional_resource_listar_param_id_conta}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {module:api/GlobaltagcadastroclienteApi~listarUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AdicionalResponse}
     */
    this.listarUsingGET1 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling listarUsingGET1";
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
     * Callback function to receive the result of the listarUsingGET24 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~listarUsingGET24Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageEnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{endereco_resource_listar}}}
     * {{{endereco_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{endereco_request_id_value}}}
     * @param {Integer} opts.idPessoa {{{endereco_request_id_pessoa_value}}}
     * @param {Integer} opts.idTipoEndereco {{{endereco_request_id_tipo_endereco_value}}}
     * @param {String} opts.cep {{{endereco_request_cep_value}}}
     * @param {String} opts.logradouro {{{endereco_request_logradouro_value}}}
     * @param {Integer} opts.numero {{{endereco_request_numero_value}}}
     * @param {String} opts.complemento {{{endereco_request_complemento_value}}}
     * @param {String} opts.pontoReferencia {{{endereco_request_ponto_referencia_value}}}
     * @param {String} opts.bairro {{{endereco_request_bairro_value}}}
     * @param {String} opts.cidade {{{endereco_request_cidade_value}}}
     * @param {String} opts.uf {{{endereco_request_uf_value}}}
     * @param {String} opts.pais {{{endereco_request_pais_value}}}
     * @param {String} opts.dataInclusao {{{endereco_request_data_inclusao_value}}}
     * @param {String} opts.dataUltimaAtualizacao {{{endereco_request_data_ultima_atualizacao_value}}}
     * @param {module:api/GlobaltagcadastroclienteApi~listarUsingGET24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageEnderecoResponse}
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
     * Callback function to receive the result of the listarUsingGET38 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~listarUsingGET38Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePessoaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{pessoa_detalhe_resource_listar}}}
     * {{{pessoa_detalhe_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.idPessoa {{{pessoa_detalhe_request_id_pessoa_value}}}
     * @param {String} opts.nomeMae {{{pessoa_detalhe_request_nome_mae_value}}}
     * @param {Integer} opts.idEstadoCivil {{{pessoa_detalhe_request_id_estado_civil_value}}}
     * @param {String} opts.idProfissao {{{pessoa_detalhe_request_id_profissao_value}}}
     * @param {Integer} opts.idNaturezaOcupacao {{{pessoa_detalhe_request_id_natureza_ocupacao_value}}}
     * @param {Integer} opts.idNacionalidade {{{pessoa_detalhe_request_id_nacionalidade_value}}}
     * @param {Integer} opts.numeroBanco {{{pessoa_detalhe_request_numero_banco_value}}}
     * @param {Integer} opts.numeroAgencia {{{pessoa_detalhe_request_numero_agencia_value}}}
     * @param {String} opts.numeroContaCorrente {{{pessoa_detalhe_request_numero_conta_corrente_value}}}
     * @param {String} opts.email {{{pessoa_detalhe_request_email_value}}}
     * @param {String} opts.nomeEmpresa {{{pessoa_detalhe_request_nome_empresa_value}}}
     * @param {module:api/GlobaltagcadastroclienteApi~listarUsingGET38Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePessoaDetalheResponse}
     */
    this.listarUsingGET38 = function(opts, callback) {
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
     * Callback function to receive the result of the listarUsingGET39 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~listarUsingGET39Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PagePessoaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{pessoa_resource_listar}}}
     * {{{pessoa_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{pessoa_request_id_value}}}
     * @param {String} opts.nome {{{pessoa_request_nome_value}}}
     * @param {String} opts.tipo {{{pessoa_request_tipo_value}}}
     * @param {String} opts.cpf {{{pessoa_request_cpf_value}}}
     * @param {String} opts.cnpj {{{pessoa_request_cnpj_value}}}
     * @param {String} opts.dataNascimento {{{pessoa_request_data_nascimento_value}}}
     * @param {String} opts.sexo {{{pessoa_request_sexo_value}}}
     * @param {String} opts.numeroIdentidade {{{pessoa_request_numero_identidade_value}}}
     * @param {String} opts.orgaoExpedidorIdentidade {{{pessoa_request_orgao_expedidor_identidade_value}}}
     * @param {String} opts.unidadeFederativaIdentidade {{{pessoa_request_unidade_federativa_identidade_value}}}
     * @param {String} opts.dataEmissaoIdentidade {{{pessoa_request_data_emissao_identidade_value}}}
     * @param {module:api/GlobaltagcadastroclienteApi~listarUsingGET39Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PagePessoaResponse}
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
     * Callback function to receive the result of the listarUsingGET50 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~listarUsingGET50Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PageTelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{telefone_resource_listar}}}
     * {{{telefone_resource_listar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.sort {{{global_menssagem_sort_sort}}}
     * @param {Integer} opts.page {{{global_menssagem_sort_page_value}}}
     * @param {Integer} opts.limit {{{global_menssagem_sort_limit}}}
     * @param {Integer} opts.id {{{telefone_request_id_value}}}
     * @param {Integer} opts.idTipoTelefone {{{telefone_request_id_tipo_telefone_value}}}
     * @param {Integer} opts.idPessoa {{{telefone_request_id_pessoa_value}}}
     * @param {String} opts.ddd {{{telefone_request_ddd_value}}}
     * @param {String} opts.telefone {{{telefone_request_telefone_value}}}
     * @param {String} opts.ramal {{{telefone_request_ramal_value}}}
     * @param {Integer} opts.status {{{telefone_request_status_value}}}
     * @param {module:api/GlobaltagcadastroclienteApi~listarUsingGET50Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageTelefoneResponse}
     */
    this.listarUsingGET50 = function(opts, callback) {
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
     * @callback module:api/GlobaltagcadastroclienteApi~salvarPessoaFisicaAprovadaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaFisicaAprovadaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_pessoa_resource_salvar_pessoa_fisica_aprovada}}}
     * {{{conta_pessoa_resource_salvar_pessoa_fisica_aprovada_notes}}}
     * @param {module:model/PessoaFisicaAprovadaPersistValue} pessoaPersist pessoaPersist
     * @param {module:api/GlobaltagcadastroclienteApi~salvarPessoaFisicaAprovadaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/GlobaltagcadastroclienteApi~salvarPessoaJuridicaAprovadaUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaJuridicaAprovadaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{conta_pessoa_resource_salvar_pessoa_juridica_aprovada}}}
     * {{{conta_pessoa_resource_salvar_pessoa_juridica_aprovada_notes}}}
     * @param {module:model/PessoaJuridicaAprovadaPersist} pessoaPersist pessoaPersist
     * @param {module:api/GlobaltagcadastroclienteApi~salvarPessoaJuridicaAprovadaUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the salvarUsingPOST13 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~salvarUsingPOST13Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EnderecoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{endereco_resource_salvar}}}
     * {{{endereco_resource_salvar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idPessoa {{{endereco_persist_id_pessoa_value}}}
     * @param {Integer} opts.idTipoEndereco {{{endereco_persist_id_tipo_endereco_value}}}
     * @param {String} opts.cep {{{endereco_persist_cep_value}}}
     * @param {String} opts.logradouro {{{endereco_persist_logradouro_value}}}
     * @param {Integer} opts.numero {{{endereco_persist_numero_value}}}
     * @param {String} opts.complemento {{{endereco_persist_complemento_value}}}
     * @param {String} opts.pontoReferencia {{{endereco_persist_ponto_referencia_value}}}
     * @param {String} opts.bairro {{{endereco_persist_bairro_value}}}
     * @param {String} opts.cidade {{{endereco_persist_cidade_value}}}
     * @param {String} opts.uf {{{endereco_persist_uf_value}}}
     * @param {String} opts.pais {{{endereco_persist_pais_value}}}
     * @param {module:api/GlobaltagcadastroclienteApi~salvarUsingPOST13Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EnderecoResponse}
     */
    this.salvarUsingPOST13 = function(opts, callback) {
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
     * Callback function to receive the result of the salvarUsingPOST16 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~salvarUsingPOST16Callback
     * @param {String} error Error message, if any.
     * @param {module:model/IntegracaoEmissorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{integracao_emissor_resource_salvar}}}
     * {{{integracao_emissor_resource_salvar_notes}}}
     * @param {Integer} id {{{integracao_emissor_resource_salvar_param_id_conta}}}
     * @param {Object} opts Optional parameters
     * @param {module:model/IntegracaoEmissorPersist} opts.body {{{integracao_emissor_resource_salvar_param_body}}}
     * @param {module:api/GlobaltagcadastroclienteApi~salvarUsingPOST16Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/IntegracaoEmissorResponse}
     */
    this.salvarUsingPOST16 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling salvarUsingPOST16";
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
     * Callback function to receive the result of the salvarUsingPOST24 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~salvarUsingPOST24Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaDetalheResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{pessoa_detalhe_resource_salvar}}}
     * {{{pessoa_detalhe_resource_salvar_notes}}}
     * @param {Integer} idPessoa {{{pessoa_detalhe_persist_id_pessoa_value}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.nomeMae {{{pessoa_detalhe_persist_nome_mae_value}}}
     * @param {Integer} opts.idEstadoCivil {{{pessoa_detalhe_persist_id_estado_civil_value}}}
     * @param {String} opts.idProfissao {{{pessoa_detalhe_persist_id_profissao_value}}}
     * @param {Integer} opts.idNaturezaOcupacao {{{pessoa_detalhe_persist_id_natureza_ocupacao_value}}}
     * @param {Integer} opts.idNacionalidade {{{pessoa_detalhe_persist_id_nacionalidade_value}}}
     * @param {Integer} opts.numeroBanco {{{pessoa_detalhe_persist_numero_banco_value}}}
     * @param {Integer} opts.numeroAgencia {{{pessoa_detalhe_persist_numero_agencia_value}}}
     * @param {String} opts.numeroContaCorrente {{{pessoa_detalhe_persist_numero_conta_corrente_value}}}
     * @param {String} opts.email {{{pessoa_detalhe_persist_email_value}}}
     * @param {String} opts.nomeEmpresa {{{pessoa_detalhe_persist_nome_empresa_value}}}
     * @param {module:api/GlobaltagcadastroclienteApi~salvarUsingPOST24Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaDetalheResponse}
     */
    this.salvarUsingPOST24 = function(idPessoa, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'idPessoa' is set
      if (idPessoa == undefined || idPessoa == null) {
        throw "Missing the required parameter 'idPessoa' when calling salvarUsingPOST24";
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
     * Callback function to receive the result of the salvarUsingPOST25 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~salvarUsingPOST25Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PessoaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{pessoa_resource_salvar}}}
     * {{{pessoa_resource_salvar_notes}}}
     * @param {String} nome {{{pessoa_persist_nome_value}}}
     * @param {String} tipo {{{pessoa_persist_tipo_value}}}
     * @param {String} dataNascimento {{{pessoa_persist_data_nascimento_value}}}
     * @param {Object} opts Optional parameters
     * @param {String} opts.cpf {{{pessoa_persist_cpf_value}}}
     * @param {String} opts.cnpj {{{pessoa_persist_cnpj_value}}}
     * @param {String} opts.sexo {{{pessoa_persist_sexo_value}}}
     * @param {String} opts.numeroIdentidade {{{pessoa_persist_numero_identidade_value}}}
     * @param {String} opts.orgaoExpedidorIdentidade {{{pessoa_persist_orgao_expedidor_identidade_value}}}
     * @param {String} opts.unidadeFederativaIdentidade {{{pessoa_persist_unidade_federativa_identidade_value}}}
     * @param {String} opts.dataEmissaoIdentidade {{{pessoa_persist_data_emissao_identidade_value}}}
     * @param {module:api/GlobaltagcadastroclienteApi~salvarUsingPOST25Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PessoaResponse}
     */
    this.salvarUsingPOST25 = function(nome, tipo, dataNascimento, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nome' is set
      if (nome == undefined || nome == null) {
        throw "Missing the required parameter 'nome' when calling salvarUsingPOST25";
      }

      // verify the required parameter 'tipo' is set
      if (tipo == undefined || tipo == null) {
        throw "Missing the required parameter 'tipo' when calling salvarUsingPOST25";
      }

      // verify the required parameter 'dataNascimento' is set
      if (dataNascimento == undefined || dataNascimento == null) {
        throw "Missing the required parameter 'dataNascimento' when calling salvarUsingPOST25";
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
     * Callback function to receive the result of the salvarUsingPOST28 operation.
     * @callback module:api/GlobaltagcadastroclienteApi~salvarUsingPOST28Callback
     * @param {String} error Error message, if any.
     * @param {module:model/TelefoneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * {{{telefone_resource_salvar}}}
     * {{{telefone_resource_salvar_notes}}}
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.idTipoTelefone {{{telefone_persist_id_tipo_telefone_value}}}
     * @param {Integer} opts.idPessoa {{{telefone_persist_id_pessoa_value}}}
     * @param {String} opts.ddd {{{telefone_persist_ddd_value}}}
     * @param {String} opts.telefone {{{telefone_persist_telefone_value}}}
     * @param {String} opts.ramal {{{telefone_persist_ramal_value}}}
     * @param {module:api/GlobaltagcadastroclienteApi~salvarUsingPOST28Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TelefoneResponse}
     */
    this.salvarUsingPOST28 = function(opts, callback) {
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
