# Pier.GlobaltagcadastroclienteApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT**](GlobaltagcadastroclienteApi.md#alterarUsingPUT) | **PUT** /api/contas/{id}/adicionais/{idPessoa} | {{{adicional_resource_alterar}}}
[**alterarUsingPUT15**](GlobaltagcadastroclienteApi.md#alterarUsingPUT15) | **PUT** /api/pessoas-detalhes/{id} | {{{pessoa_detalhe_resource_alterar}}}
[**alterarUsingPUT16**](GlobaltagcadastroclienteApi.md#alterarUsingPUT16) | **PUT** /api/pessoas/{id} | {{{pessoa_resource_alterar}}}
[**alterarUsingPUT18**](GlobaltagcadastroclienteApi.md#alterarUsingPUT18) | **PUT** /api/telefones | {{{telefone_resource_alterar}}}
[**alterarUsingPUT5**](GlobaltagcadastroclienteApi.md#alterarUsingPUT5) | **PUT** /api/enderecos | {{{endereco_resource_alterar}}}
[**atribuirAssinaturaClienteUsingPOST**](GlobaltagcadastroclienteApi.md#atribuirAssinaturaClienteUsingPOST) | **POST** /api/contas/{id}/atribuir-assinatura-cliente | {{{conta_pessoa_resource_atribuir_assinatura_cliente}}}
[**atualizarEnderecoDeCorrespondenciaUsingPUT**](GlobaltagcadastroclienteApi.md#atualizarEnderecoDeCorrespondenciaUsingPUT) | **PUT** /api/enderecos/{id}/alterar-endereco-correspondencia | {{{endereco_resource_atualizar_correspondencia}}}
[**atualizarUsingPOST**](GlobaltagcadastroclienteApi.md#atualizarUsingPOST) | **POST** /api/contas/{id}/atualizar-registro-integracao | {{{integracao_emissor_resource_atualizar}}}
[**cadastrarUsingPOST1**](GlobaltagcadastroclienteApi.md#cadastrarUsingPOST1) | **POST** /api/contas/{id}/cadastrar-adicional | {{{adicional_resource_cadastrar}}}
[**consultarUsingGET19**](GlobaltagcadastroclienteApi.md#consultarUsingGET19) | **GET** /api/enderecos/{id} | {{{endereco_resource_consultar}}}
[**consultarUsingGET2**](GlobaltagcadastroclienteApi.md#consultarUsingGET2) | **GET** /api/contas/{id}/adicionais/{idPessoa} | {{{adicional_resource_consultar}}}
[**consultarUsingGET30**](GlobaltagcadastroclienteApi.md#consultarUsingGET30) | **GET** /api/pessoas-detalhes/{id} | {{{pessoa_detalhe_resource_consultar}}}
[**consultarUsingGET31**](GlobaltagcadastroclienteApi.md#consultarUsingGET31) | **GET** /api/pessoas/{id} | {{{pessoa_resource_consultar}}}
[**consultarUsingGET39**](GlobaltagcadastroclienteApi.md#consultarUsingGET39) | **GET** /api/telefones/{id} | {{{telefone_resource_consultar}}}
[**inativarUsingPOST**](GlobaltagcadastroclienteApi.md#inativarUsingPOST) | **POST** /api/contas/{id}/adicionais/{idPessoa}/inativar | {{{adicional_resource_inativar}}}
[**listarSociosUsingGET**](GlobaltagcadastroclienteApi.md#listarSociosUsingGET) | **GET** /api/clientes-pessoas-juridicas/{id}/socios | {{{conta_pessoa_resource_listar_socios}}}
[**listarUsingGET1**](GlobaltagcadastroclienteApi.md#listarUsingGET1) | **GET** /api/contas/{id}/adicionais | {{{adicional_resource_listar}}}
[**listarUsingGET24**](GlobaltagcadastroclienteApi.md#listarUsingGET24) | **GET** /api/enderecos | {{{endereco_resource_listar}}}
[**listarUsingGET38**](GlobaltagcadastroclienteApi.md#listarUsingGET38) | **GET** /api/pessoas-detalhes | {{{pessoa_detalhe_resource_listar}}}
[**listarUsingGET39**](GlobaltagcadastroclienteApi.md#listarUsingGET39) | **GET** /api/pessoas | {{{pessoa_resource_listar}}}
[**listarUsingGET50**](GlobaltagcadastroclienteApi.md#listarUsingGET50) | **GET** /api/telefones | {{{telefone_resource_listar}}}
[**salvarPessoaFisicaAprovadaUsingPOST**](GlobaltagcadastroclienteApi.md#salvarPessoaFisicaAprovadaUsingPOST) | **POST** /api/clientes-pessoas-fisicas | {{{conta_pessoa_resource_salvar_pessoa_fisica_aprovada}}}
[**salvarPessoaJuridicaAprovadaUsingPOST**](GlobaltagcadastroclienteApi.md#salvarPessoaJuridicaAprovadaUsingPOST) | **POST** /api/clientes-pessoas-juridicas | {{{conta_pessoa_resource_salvar_pessoa_juridica_aprovada}}}
[**salvarUsingPOST13**](GlobaltagcadastroclienteApi.md#salvarUsingPOST13) | **POST** /api/enderecos | {{{endereco_resource_salvar}}}
[**salvarUsingPOST16**](GlobaltagcadastroclienteApi.md#salvarUsingPOST16) | **POST** /api/contas/{id}/incluir-registro-integracao | {{{integracao_emissor_resource_salvar}}}
[**salvarUsingPOST24**](GlobaltagcadastroclienteApi.md#salvarUsingPOST24) | **POST** /api/pessoas-detalhes | {{{pessoa_detalhe_resource_salvar}}}
[**salvarUsingPOST25**](GlobaltagcadastroclienteApi.md#salvarUsingPOST25) | **POST** /api/pessoas | {{{pessoa_resource_salvar}}}
[**salvarUsingPOST28**](GlobaltagcadastroclienteApi.md#salvarUsingPOST28) | **POST** /api/telefones | {{{telefone_resource_salvar}}}


<a name="alterarUsingPUT"></a>
# **alterarUsingPUT**
> AdicionalDetalheResponse alterarUsingPUT(id, idPessoa, adicionalUpdate)

{{{adicional_resource_alterar}}}

{{{adicional_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{adicional_resource_alterar_param_id_conta}}}

var idPessoa = 789; // {Integer} {{{adicional_resource_alterar_param_id_pessoa}}}

var adicionalUpdate = new Pier.AdicionalUpdate(); // {AdicionalUpdate} adicionalUpdate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT(id, idPessoa, adicionalUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{adicional_resource_alterar_param_id_conta}}} | 
 **idPessoa** | **Integer**| {{{adicional_resource_alterar_param_id_pessoa}}} | 
 **adicionalUpdate** | [**AdicionalUpdate**](AdicionalUpdate.md)| adicionalUpdate | 

### Return type

[**AdicionalDetalheResponse**](AdicionalDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT15"></a>
# **alterarUsingPUT15**
> PessoaDetalheResponse alterarUsingPUT15(id, opts)

{{{pessoa_detalhe_resource_alterar}}}

{{{pessoa_detalhe_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{pessoa_detalhe_resource_alterar_param_id}}}

var opts = { 
  'nomeMae': "nomeMae_example", // {String} {{{pessoa_detalhe_update_nome_mae_value}}}
  'idEstadoCivil': 789, // {Integer} {{{pessoa_detalhe_update_id_estado_civil_value}}}
  'idProfissao': "idProfissao_example", // {String} {{{pessoa_detalhe_update_id_profissao_value}}}
  'idNaturezaOcupacao': 789, // {Integer} {{{pessoa_detalhe_update_id_natureza_ocupacao_value}}}
  'idNacionalidade': 789, // {Integer} {{{pessoa_detalhe_update_id_nacionalidade_value}}}
  'numeroBanco': 56, // {Integer} {{{pessoa_detalhe_update_numero_banco_value}}}
  'numeroAgencia': 56, // {Integer} {{{pessoa_detalhe_update_numero_agencia_value}}}
  'numeroContaCorrente': "numeroContaCorrente_example", // {String} {{{pessoa_detalhe_update_numero_conta_corrente_value}}}
  'email': "email_example", // {String} {{{pessoa_detalhe_update_email_value}}}
  'nomeEmpresa': "nomeEmpresa_example" // {String} {{{pessoa_detalhe_update_nome_empresa_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT15(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{pessoa_detalhe_resource_alterar_param_id}}} | 
 **nomeMae** | **String**| {{{pessoa_detalhe_update_nome_mae_value}}} | [optional] 
 **idEstadoCivil** | **Integer**| {{{pessoa_detalhe_update_id_estado_civil_value}}} | [optional] 
 **idProfissao** | **String**| {{{pessoa_detalhe_update_id_profissao_value}}} | [optional] 
 **idNaturezaOcupacao** | **Integer**| {{{pessoa_detalhe_update_id_natureza_ocupacao_value}}} | [optional] 
 **idNacionalidade** | **Integer**| {{{pessoa_detalhe_update_id_nacionalidade_value}}} | [optional] 
 **numeroBanco** | **Integer**| {{{pessoa_detalhe_update_numero_banco_value}}} | [optional] 
 **numeroAgencia** | **Integer**| {{{pessoa_detalhe_update_numero_agencia_value}}} | [optional] 
 **numeroContaCorrente** | **String**| {{{pessoa_detalhe_update_numero_conta_corrente_value}}} | [optional] 
 **email** | **String**| {{{pessoa_detalhe_update_email_value}}} | [optional] 
 **nomeEmpresa** | **String**| {{{pessoa_detalhe_update_nome_empresa_value}}} | [optional] 

### Return type

[**PessoaDetalheResponse**](PessoaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT16"></a>
# **alterarUsingPUT16**
> PessoaResponse alterarUsingPUT16(id, nome, tipo, dataNascimento, opts)

{{{pessoa_resource_alterar}}}

{{{pessoa_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{pessoa_resource_alterar_param_id}}}

var nome = "nome_example"; // {String} {{{pessoa_persist_nome_value}}}

var tipo = "tipo_example"; // {String} {{{pessoa_persist_tipo_value}}}

var dataNascimento = "dataNascimento_example"; // {String} {{{pessoa_persist_data_nascimento_value}}}

var opts = { 
  'cpf': "cpf_example", // {String} {{{pessoa_persist_cpf_value}}}
  'cnpj': "cnpj_example", // {String} {{{pessoa_persist_cnpj_value}}}
  'sexo': "sexo_example", // {String} {{{pessoa_persist_sexo_value}}}
  'numeroIdentidade': "numeroIdentidade_example", // {String} {{{pessoa_persist_numero_identidade_value}}}
  'orgaoExpedidorIdentidade': "orgaoExpedidorIdentidade_example", // {String} {{{pessoa_persist_orgao_expedidor_identidade_value}}}
  'unidadeFederativaIdentidade': "unidadeFederativaIdentidade_example", // {String} {{{pessoa_persist_unidade_federativa_identidade_value}}}
  'dataEmissaoIdentidade': "dataEmissaoIdentidade_example" // {String} {{{pessoa_persist_data_emissao_identidade_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT16(id, nome, tipo, dataNascimento, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{pessoa_resource_alterar_param_id}}} | 
 **nome** | **String**| {{{pessoa_persist_nome_value}}} | 
 **tipo** | **String**| {{{pessoa_persist_tipo_value}}} | 
 **dataNascimento** | **String**| {{{pessoa_persist_data_nascimento_value}}} | 
 **cpf** | **String**| {{{pessoa_persist_cpf_value}}} | [optional] 
 **cnpj** | **String**| {{{pessoa_persist_cnpj_value}}} | [optional] 
 **sexo** | **String**| {{{pessoa_persist_sexo_value}}} | [optional] 
 **numeroIdentidade** | **String**| {{{pessoa_persist_numero_identidade_value}}} | [optional] 
 **orgaoExpedidorIdentidade** | **String**| {{{pessoa_persist_orgao_expedidor_identidade_value}}} | [optional] 
 **unidadeFederativaIdentidade** | **String**| {{{pessoa_persist_unidade_federativa_identidade_value}}} | [optional] 
 **dataEmissaoIdentidade** | **String**| {{{pessoa_persist_data_emissao_identidade_value}}} | [optional] 

### Return type

[**PessoaResponse**](PessoaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT18"></a>
# **alterarUsingPUT18**
> TelefoneResponse alterarUsingPUT18(id, opts)

{{{telefone_resource_alterar}}}

{{{telefone_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{telefone_alterar_persist_id_value}}}

var opts = { 
  'idTipoTelefone': 789, // {Integer} {{{telefone_alterar_persist_id_tipo_telefone_value}}}
  'ddd': "ddd_example", // {String} {{{telefone_alterar_persist_ddd_value}}}
  'telefone': "telefone_example", // {String} {{{telefone_alterar_persist_telefone_value}}}
  'ramal': "ramal_example" // {String} {{{telefone_alterar_persist_ramal_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT18(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{telefone_alterar_persist_id_value}}} | 
 **idTipoTelefone** | **Integer**| {{{telefone_alterar_persist_id_tipo_telefone_value}}} | [optional] 
 **ddd** | **String**| {{{telefone_alterar_persist_ddd_value}}} | [optional] 
 **telefone** | **String**| {{{telefone_alterar_persist_telefone_value}}} | [optional] 
 **ramal** | **String**| {{{telefone_alterar_persist_ramal_value}}} | [optional] 

### Return type

[**TelefoneResponse**](TelefoneResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT5"></a>
# **alterarUsingPUT5**
> EnderecoResponse alterarUsingPUT5(id, opts)

{{{endereco_resource_alterar}}}

{{{endereco_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} id

var opts = { 
  'idPessoa': 789, // {Integer} {{{endereco_persist_id_pessoa_value}}}
  'idTipoEndereco': 789, // {Integer} {{{endereco_persist_id_tipo_endereco_value}}}
  'cep': "cep_example", // {String} {{{endereco_persist_cep_value}}}
  'logradouro': "logradouro_example", // {String} {{{endereco_persist_logradouro_value}}}
  'numero': 56, // {Integer} {{{endereco_persist_numero_value}}}
  'complemento': "complemento_example", // {String} {{{endereco_persist_complemento_value}}}
  'pontoReferencia': "pontoReferencia_example", // {String} {{{endereco_persist_ponto_referencia_value}}}
  'bairro': "bairro_example", // {String} {{{endereco_persist_bairro_value}}}
  'cidade': "cidade_example", // {String} {{{endereco_persist_cidade_value}}}
  'uf': "uf_example", // {String} {{{endereco_persist_uf_value}}}
  'pais': "pais_example" // {String} {{{endereco_persist_pais_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT5(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| id | 
 **idPessoa** | **Integer**| {{{endereco_persist_id_pessoa_value}}} | [optional] 
 **idTipoEndereco** | **Integer**| {{{endereco_persist_id_tipo_endereco_value}}} | [optional] 
 **cep** | **String**| {{{endereco_persist_cep_value}}} | [optional] 
 **logradouro** | **String**| {{{endereco_persist_logradouro_value}}} | [optional] 
 **numero** | **Integer**| {{{endereco_persist_numero_value}}} | [optional] 
 **complemento** | **String**| {{{endereco_persist_complemento_value}}} | [optional] 
 **pontoReferencia** | **String**| {{{endereco_persist_ponto_referencia_value}}} | [optional] 
 **bairro** | **String**| {{{endereco_persist_bairro_value}}} | [optional] 
 **cidade** | **String**| {{{endereco_persist_cidade_value}}} | [optional] 
 **uf** | **String**| {{{endereco_persist_uf_value}}} | [optional] 
 **pais** | **String**| {{{endereco_persist_pais_value}}} | [optional] 

### Return type

[**EnderecoResponse**](EnderecoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atribuirAssinaturaClienteUsingPOST"></a>
# **atribuirAssinaturaClienteUsingPOST**
> Object atribuirAssinaturaClienteUsingPOST(id, body)

{{{conta_pessoa_resource_atribuir_assinatura_cliente}}}

{{{conta_pessoa_resource_atribuir_assinatura_cliente_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{conta_pessoa_resource_atribuir_assinatura_cliente_param_id}}}

var body = new Pier.AtribuirAssinaturaClientePersist(); // {AtribuirAssinaturaClientePersist} {{{conta_pessoa_resource_atribuir_assinatura_cliente_param_body}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atribuirAssinaturaClienteUsingPOST(id, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_pessoa_resource_atribuir_assinatura_cliente_param_id}}} | 
 **body** | [**AtribuirAssinaturaClientePersist**](AtribuirAssinaturaClientePersist.md)| {{{conta_pessoa_resource_atribuir_assinatura_cliente_param_body}}} | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atualizarEnderecoDeCorrespondenciaUsingPUT"></a>
# **atualizarEnderecoDeCorrespondenciaUsingPUT**
> EnderecoResponse atualizarEnderecoDeCorrespondenciaUsingPUT(id, idConta)

{{{endereco_resource_atualizar_correspondencia}}}

{{{endereco_resource_atualizar_correspondencia_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{endereco_resource_atualizar_correspondencia_param_id}}}

var idConta = 789; // {Integer} {{{endereco_resource_atualizar_correspondencia_param_idConta}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarEnderecoDeCorrespondenciaUsingPUT(id, idConta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{endereco_resource_atualizar_correspondencia_param_id}}} | 
 **idConta** | **Integer**| {{{endereco_resource_atualizar_correspondencia_param_idConta}}} | 

### Return type

[**EnderecoResponse**](EnderecoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atualizarUsingPOST"></a>
# **atualizarUsingPOST**
> IntegracaoEmissorResponse atualizarUsingPOST(id, opts)

{{{integracao_emissor_resource_atualizar}}}

{{{integracao_emissor_resource_atualizar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{integracao_emissor_resource_atualizar_param_id_conta}}}

var opts = { 
  'body': new Pier.IntegracaoEmissorPersist() // {IntegracaoEmissorPersist} {{{integracao_emissor_resource_atualizar_param_body}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPOST(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{integracao_emissor_resource_atualizar_param_id_conta}}} | 
 **body** | [**IntegracaoEmissorPersist**](IntegracaoEmissorPersist.md)| {{{integracao_emissor_resource_atualizar_param_body}}} | [optional] 

### Return type

[**IntegracaoEmissorResponse**](IntegracaoEmissorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarUsingPOST1"></a>
# **cadastrarUsingPOST1**
> AdicionalDetalheResponse cadastrarUsingPOST1(id, persist)

{{{adicional_resource_cadastrar}}}

{{{adicional_resource_cadastrar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{adicional_resource_cadastrar_param_id_conta}}}

var persist = new Pier.AdicionalPersist(); // {AdicionalPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarUsingPOST1(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{adicional_resource_cadastrar_param_id_conta}}} | 
 **persist** | [**AdicionalPersist**](AdicionalPersist.md)| persist | 

### Return type

[**AdicionalDetalheResponse**](AdicionalDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET19"></a>
# **consultarUsingGET19**
> EnderecoResponse consultarUsingGET19(id)

{{{endereco_resource_consultar}}}

{{{endereco_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{endereco_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET19(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{endereco_resource_consultar_param_id}}} | 

### Return type

[**EnderecoResponse**](EnderecoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET2"></a>
# **consultarUsingGET2**
> AdicionalDetalheResponse consultarUsingGET2(id, idPessoa)

{{{adicional_resource_consultar}}}

{{{adicional_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{adicional_resource_consultar_param_id_conta}}}

var idPessoa = 789; // {Integer} {{{adicional_resource_consultar_param_id_pessoa}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET2(id, idPessoa, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{adicional_resource_consultar_param_id_conta}}} | 
 **idPessoa** | **Integer**| {{{adicional_resource_consultar_param_id_pessoa}}} | 

### Return type

[**AdicionalDetalheResponse**](AdicionalDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET30"></a>
# **consultarUsingGET30**
> PessoaDetalheResponse consultarUsingGET30(id)

{{{pessoa_detalhe_resource_consultar}}}

{{{pessoa_detalhe_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{pessoa_detalhe_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET30(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{pessoa_detalhe_resource_consultar_param_id}}} | 

### Return type

[**PessoaDetalheResponse**](PessoaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET31"></a>
# **consultarUsingGET31**
> PessoaResponse consultarUsingGET31(id)

{{{pessoa_resource_consultar}}}

{{{pessoa_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{pessoa_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET31(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{pessoa_resource_consultar_param_id}}} | 

### Return type

[**PessoaResponse**](PessoaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET39"></a>
# **consultarUsingGET39**
> TelefoneResponse consultarUsingGET39(id)

{{{telefone_resource_consultar}}}

{{{telefone_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{telefone_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET39(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{telefone_resource_consultar_param_id}}} | 

### Return type

[**TelefoneResponse**](TelefoneResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="inativarUsingPOST"></a>
# **inativarUsingPOST**
> &#39;String&#39; inativarUsingPOST(id, idPessoa)

{{{adicional_resource_inativar}}}

{{{adicional_resource_inativar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{adicional_resource_inativar_param_id_conta}}}

var idPessoa = 789; // {Integer} {{{adicional_resource_inativar_param_id_pessoa}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.inativarUsingPOST(id, idPessoa, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{adicional_resource_inativar_param_id_conta}}} | 
 **idPessoa** | **Integer**| {{{adicional_resource_inativar_param_id_pessoa}}} | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarSociosUsingGET"></a>
# **listarSociosUsingGET**
> PagePessoaResponse listarSociosUsingGET(id, opts)

{{{conta_pessoa_resource_listar_socios}}}

{{{conta_pessoa_resource_listar_socios_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{conta_pessoa_resource_listar_socios_param_id}}}

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56 // {Integer} {{{global_menssagem_sort_limit}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarSociosUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{conta_pessoa_resource_listar_socios_param_id}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PagePessoaResponse**](PagePessoaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET1"></a>
# **listarUsingGET1**
> AdicionalResponse listarUsingGET1(id, opts)

{{{adicional_resource_listar}}}

{{{adicional_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{adicional_resource_listar_param_id_conta}}}

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56 // {Integer} {{{global_menssagem_sort_limit}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{adicional_resource_listar_param_id_conta}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**AdicionalResponse**](AdicionalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET24"></a>
# **listarUsingGET24**
> PageEnderecoResponse listarUsingGET24(opts)

{{{endereco_resource_listar}}}

{{{endereco_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{endereco_request_id_value}}}
  'idPessoa': 789, // {Integer} {{{endereco_request_id_pessoa_value}}}
  'idTipoEndereco': 789, // {Integer} {{{endereco_request_id_tipo_endereco_value}}}
  'cep': "cep_example", // {String} {{{endereco_request_cep_value}}}
  'logradouro': "logradouro_example", // {String} {{{endereco_request_logradouro_value}}}
  'numero': 56, // {Integer} {{{endereco_request_numero_value}}}
  'complemento': "complemento_example", // {String} {{{endereco_request_complemento_value}}}
  'pontoReferencia': "pontoReferencia_example", // {String} {{{endereco_request_ponto_referencia_value}}}
  'bairro': "bairro_example", // {String} {{{endereco_request_bairro_value}}}
  'cidade': "cidade_example", // {String} {{{endereco_request_cidade_value}}}
  'uf': "uf_example", // {String} {{{endereco_request_uf_value}}}
  'pais': "pais_example", // {String} {{{endereco_request_pais_value}}}
  'dataInclusao': "dataInclusao_example", // {String} {{{endereco_request_data_inclusao_value}}}
  'dataUltimaAtualizacao': "dataUltimaAtualizacao_example" // {String} {{{endereco_request_data_ultima_atualizacao_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET24(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{endereco_request_id_value}}} | [optional] 
 **idPessoa** | **Integer**| {{{endereco_request_id_pessoa_value}}} | [optional] 
 **idTipoEndereco** | **Integer**| {{{endereco_request_id_tipo_endereco_value}}} | [optional] 
 **cep** | **String**| {{{endereco_request_cep_value}}} | [optional] 
 **logradouro** | **String**| {{{endereco_request_logradouro_value}}} | [optional] 
 **numero** | **Integer**| {{{endereco_request_numero_value}}} | [optional] 
 **complemento** | **String**| {{{endereco_request_complemento_value}}} | [optional] 
 **pontoReferencia** | **String**| {{{endereco_request_ponto_referencia_value}}} | [optional] 
 **bairro** | **String**| {{{endereco_request_bairro_value}}} | [optional] 
 **cidade** | **String**| {{{endereco_request_cidade_value}}} | [optional] 
 **uf** | **String**| {{{endereco_request_uf_value}}} | [optional] 
 **pais** | **String**| {{{endereco_request_pais_value}}} | [optional] 
 **dataInclusao** | **String**| {{{endereco_request_data_inclusao_value}}} | [optional] 
 **dataUltimaAtualizacao** | **String**| {{{endereco_request_data_ultima_atualizacao_value}}} | [optional] 

### Return type

[**PageEnderecoResponse**](PageEnderecoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET38"></a>
# **listarUsingGET38**
> PagePessoaDetalheResponse listarUsingGET38(opts)

{{{pessoa_detalhe_resource_listar}}}

{{{pessoa_detalhe_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idPessoa': 789, // {Integer} {{{pessoa_detalhe_request_id_pessoa_value}}}
  'nomeMae': "nomeMae_example", // {String} {{{pessoa_detalhe_request_nome_mae_value}}}
  'idEstadoCivil': 789, // {Integer} {{{pessoa_detalhe_request_id_estado_civil_value}}}
  'idProfissao': "idProfissao_example", // {String} {{{pessoa_detalhe_request_id_profissao_value}}}
  'idNaturezaOcupacao': 789, // {Integer} {{{pessoa_detalhe_request_id_natureza_ocupacao_value}}}
  'idNacionalidade': 789, // {Integer} {{{pessoa_detalhe_request_id_nacionalidade_value}}}
  'numeroBanco': 56, // {Integer} {{{pessoa_detalhe_request_numero_banco_value}}}
  'numeroAgencia': 56, // {Integer} {{{pessoa_detalhe_request_numero_agencia_value}}}
  'numeroContaCorrente': "numeroContaCorrente_example", // {String} {{{pessoa_detalhe_request_numero_conta_corrente_value}}}
  'email': "email_example", // {String} {{{pessoa_detalhe_request_email_value}}}
  'nomeEmpresa': "nomeEmpresa_example" // {String} {{{pessoa_detalhe_request_nome_empresa_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET38(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idPessoa** | **Integer**| {{{pessoa_detalhe_request_id_pessoa_value}}} | [optional] 
 **nomeMae** | **String**| {{{pessoa_detalhe_request_nome_mae_value}}} | [optional] 
 **idEstadoCivil** | **Integer**| {{{pessoa_detalhe_request_id_estado_civil_value}}} | [optional] 
 **idProfissao** | **String**| {{{pessoa_detalhe_request_id_profissao_value}}} | [optional] 
 **idNaturezaOcupacao** | **Integer**| {{{pessoa_detalhe_request_id_natureza_ocupacao_value}}} | [optional] 
 **idNacionalidade** | **Integer**| {{{pessoa_detalhe_request_id_nacionalidade_value}}} | [optional] 
 **numeroBanco** | **Integer**| {{{pessoa_detalhe_request_numero_banco_value}}} | [optional] 
 **numeroAgencia** | **Integer**| {{{pessoa_detalhe_request_numero_agencia_value}}} | [optional] 
 **numeroContaCorrente** | **String**| {{{pessoa_detalhe_request_numero_conta_corrente_value}}} | [optional] 
 **email** | **String**| {{{pessoa_detalhe_request_email_value}}} | [optional] 
 **nomeEmpresa** | **String**| {{{pessoa_detalhe_request_nome_empresa_value}}} | [optional] 

### Return type

[**PagePessoaDetalheResponse**](PagePessoaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET39"></a>
# **listarUsingGET39**
> PagePessoaResponse listarUsingGET39(opts)

{{{pessoa_resource_listar}}}

{{{pessoa_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{pessoa_request_id_value}}}
  'nome': "nome_example", // {String} {{{pessoa_request_nome_value}}}
  'tipo': "tipo_example", // {String} {{{pessoa_request_tipo_value}}}
  'cpf': "cpf_example", // {String} {{{pessoa_request_cpf_value}}}
  'cnpj': "cnpj_example", // {String} {{{pessoa_request_cnpj_value}}}
  'dataNascimento': "dataNascimento_example", // {String} {{{pessoa_request_data_nascimento_value}}}
  'sexo': "sexo_example", // {String} {{{pessoa_request_sexo_value}}}
  'numeroIdentidade': "numeroIdentidade_example", // {String} {{{pessoa_request_numero_identidade_value}}}
  'orgaoExpedidorIdentidade': "orgaoExpedidorIdentidade_example", // {String} {{{pessoa_request_orgao_expedidor_identidade_value}}}
  'unidadeFederativaIdentidade': "unidadeFederativaIdentidade_example", // {String} {{{pessoa_request_unidade_federativa_identidade_value}}}
  'dataEmissaoIdentidade': "dataEmissaoIdentidade_example" // {String} {{{pessoa_request_data_emissao_identidade_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET39(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{pessoa_request_id_value}}} | [optional] 
 **nome** | **String**| {{{pessoa_request_nome_value}}} | [optional] 
 **tipo** | **String**| {{{pessoa_request_tipo_value}}} | [optional] 
 **cpf** | **String**| {{{pessoa_request_cpf_value}}} | [optional] 
 **cnpj** | **String**| {{{pessoa_request_cnpj_value}}} | [optional] 
 **dataNascimento** | **String**| {{{pessoa_request_data_nascimento_value}}} | [optional] 
 **sexo** | **String**| {{{pessoa_request_sexo_value}}} | [optional] 
 **numeroIdentidade** | **String**| {{{pessoa_request_numero_identidade_value}}} | [optional] 
 **orgaoExpedidorIdentidade** | **String**| {{{pessoa_request_orgao_expedidor_identidade_value}}} | [optional] 
 **unidadeFederativaIdentidade** | **String**| {{{pessoa_request_unidade_federativa_identidade_value}}} | [optional] 
 **dataEmissaoIdentidade** | **String**| {{{pessoa_request_data_emissao_identidade_value}}} | [optional] 

### Return type

[**PagePessoaResponse**](PagePessoaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET50"></a>
# **listarUsingGET50**
> PageTelefoneResponse listarUsingGET50(opts)

{{{telefone_resource_listar}}}

{{{telefone_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{telefone_request_id_value}}}
  'idTipoTelefone': 789, // {Integer} {{{telefone_request_id_tipo_telefone_value}}}
  'idPessoa': 789, // {Integer} {{{telefone_request_id_pessoa_value}}}
  'ddd': "ddd_example", // {String} {{{telefone_request_ddd_value}}}
  'telefone': "telefone_example", // {String} {{{telefone_request_telefone_value}}}
  'ramal': "ramal_example", // {String} {{{telefone_request_ramal_value}}}
  'status': 56 // {Integer} {{{telefone_request_status_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET50(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{telefone_request_id_value}}} | [optional] 
 **idTipoTelefone** | **Integer**| {{{telefone_request_id_tipo_telefone_value}}} | [optional] 
 **idPessoa** | **Integer**| {{{telefone_request_id_pessoa_value}}} | [optional] 
 **ddd** | **String**| {{{telefone_request_ddd_value}}} | [optional] 
 **telefone** | **String**| {{{telefone_request_telefone_value}}} | [optional] 
 **ramal** | **String**| {{{telefone_request_ramal_value}}} | [optional] 
 **status** | **Integer**| {{{telefone_request_status_value}}} | [optional] 

### Return type

[**PageTelefoneResponse**](PageTelefoneResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarPessoaFisicaAprovadaUsingPOST"></a>
# **salvarPessoaFisicaAprovadaUsingPOST**
> PessoaFisicaAprovadaResponse salvarPessoaFisicaAprovadaUsingPOST(pessoaPersist)

{{{conta_pessoa_resource_salvar_pessoa_fisica_aprovada}}}

{{{conta_pessoa_resource_salvar_pessoa_fisica_aprovada_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var pessoaPersist = new Pier.PessoaFisicaAprovadaPersistValue(); // {PessoaFisicaAprovadaPersistValue} pessoaPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarPessoaFisicaAprovadaUsingPOST(pessoaPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pessoaPersist** | [**PessoaFisicaAprovadaPersistValue**](PessoaFisicaAprovadaPersistValue.md)| pessoaPersist | 

### Return type

[**PessoaFisicaAprovadaResponse**](PessoaFisicaAprovadaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarPessoaJuridicaAprovadaUsingPOST"></a>
# **salvarPessoaJuridicaAprovadaUsingPOST**
> PessoaJuridicaAprovadaResponse salvarPessoaJuridicaAprovadaUsingPOST(pessoaPersist)

{{{conta_pessoa_resource_salvar_pessoa_juridica_aprovada}}}

{{{conta_pessoa_resource_salvar_pessoa_juridica_aprovada_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var pessoaPersist = new Pier.PessoaJuridicaAprovadaPersist(); // {PessoaJuridicaAprovadaPersist} pessoaPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarPessoaJuridicaAprovadaUsingPOST(pessoaPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pessoaPersist** | [**PessoaJuridicaAprovadaPersist**](PessoaJuridicaAprovadaPersist.md)| pessoaPersist | 

### Return type

[**PessoaJuridicaAprovadaResponse**](PessoaJuridicaAprovadaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST13"></a>
# **salvarUsingPOST13**
> EnderecoResponse salvarUsingPOST13(opts)

{{{endereco_resource_salvar}}}

{{{endereco_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var opts = { 
  'idPessoa': 789, // {Integer} {{{endereco_persist_id_pessoa_value}}}
  'idTipoEndereco': 789, // {Integer} {{{endereco_persist_id_tipo_endereco_value}}}
  'cep': "cep_example", // {String} {{{endereco_persist_cep_value}}}
  'logradouro': "logradouro_example", // {String} {{{endereco_persist_logradouro_value}}}
  'numero': 56, // {Integer} {{{endereco_persist_numero_value}}}
  'complemento': "complemento_example", // {String} {{{endereco_persist_complemento_value}}}
  'pontoReferencia': "pontoReferencia_example", // {String} {{{endereco_persist_ponto_referencia_value}}}
  'bairro': "bairro_example", // {String} {{{endereco_persist_bairro_value}}}
  'cidade': "cidade_example", // {String} {{{endereco_persist_cidade_value}}}
  'uf': "uf_example", // {String} {{{endereco_persist_uf_value}}}
  'pais': "pais_example" // {String} {{{endereco_persist_pais_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST13(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPessoa** | **Integer**| {{{endereco_persist_id_pessoa_value}}} | [optional] 
 **idTipoEndereco** | **Integer**| {{{endereco_persist_id_tipo_endereco_value}}} | [optional] 
 **cep** | **String**| {{{endereco_persist_cep_value}}} | [optional] 
 **logradouro** | **String**| {{{endereco_persist_logradouro_value}}} | [optional] 
 **numero** | **Integer**| {{{endereco_persist_numero_value}}} | [optional] 
 **complemento** | **String**| {{{endereco_persist_complemento_value}}} | [optional] 
 **pontoReferencia** | **String**| {{{endereco_persist_ponto_referencia_value}}} | [optional] 
 **bairro** | **String**| {{{endereco_persist_bairro_value}}} | [optional] 
 **cidade** | **String**| {{{endereco_persist_cidade_value}}} | [optional] 
 **uf** | **String**| {{{endereco_persist_uf_value}}} | [optional] 
 **pais** | **String**| {{{endereco_persist_pais_value}}} | [optional] 

### Return type

[**EnderecoResponse**](EnderecoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST16"></a>
# **salvarUsingPOST16**
> IntegracaoEmissorResponse salvarUsingPOST16(id, opts)

{{{integracao_emissor_resource_salvar}}}

{{{integracao_emissor_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var id = 789; // {Integer} {{{integracao_emissor_resource_salvar_param_id_conta}}}

var opts = { 
  'body': new Pier.IntegracaoEmissorPersist() // {IntegracaoEmissorPersist} {{{integracao_emissor_resource_salvar_param_body}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST16(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{integracao_emissor_resource_salvar_param_id_conta}}} | 
 **body** | [**IntegracaoEmissorPersist**](IntegracaoEmissorPersist.md)| {{{integracao_emissor_resource_salvar_param_body}}} | [optional] 

### Return type

[**IntegracaoEmissorResponse**](IntegracaoEmissorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST24"></a>
# **salvarUsingPOST24**
> PessoaDetalheResponse salvarUsingPOST24(idPessoa, opts)

{{{pessoa_detalhe_resource_salvar}}}

{{{pessoa_detalhe_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var idPessoa = 789; // {Integer} {{{pessoa_detalhe_persist_id_pessoa_value}}}

var opts = { 
  'nomeMae': "nomeMae_example", // {String} {{{pessoa_detalhe_persist_nome_mae_value}}}
  'idEstadoCivil': 789, // {Integer} {{{pessoa_detalhe_persist_id_estado_civil_value}}}
  'idProfissao': "idProfissao_example", // {String} {{{pessoa_detalhe_persist_id_profissao_value}}}
  'idNaturezaOcupacao': 789, // {Integer} {{{pessoa_detalhe_persist_id_natureza_ocupacao_value}}}
  'idNacionalidade': 789, // {Integer} {{{pessoa_detalhe_persist_id_nacionalidade_value}}}
  'numeroBanco': 56, // {Integer} {{{pessoa_detalhe_persist_numero_banco_value}}}
  'numeroAgencia': 56, // {Integer} {{{pessoa_detalhe_persist_numero_agencia_value}}}
  'numeroContaCorrente': "numeroContaCorrente_example", // {String} {{{pessoa_detalhe_persist_numero_conta_corrente_value}}}
  'email': "email_example", // {String} {{{pessoa_detalhe_persist_email_value}}}
  'nomeEmpresa': "nomeEmpresa_example" // {String} {{{pessoa_detalhe_persist_nome_empresa_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST24(idPessoa, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPessoa** | **Integer**| {{{pessoa_detalhe_persist_id_pessoa_value}}} | 
 **nomeMae** | **String**| {{{pessoa_detalhe_persist_nome_mae_value}}} | [optional] 
 **idEstadoCivil** | **Integer**| {{{pessoa_detalhe_persist_id_estado_civil_value}}} | [optional] 
 **idProfissao** | **String**| {{{pessoa_detalhe_persist_id_profissao_value}}} | [optional] 
 **idNaturezaOcupacao** | **Integer**| {{{pessoa_detalhe_persist_id_natureza_ocupacao_value}}} | [optional] 
 **idNacionalidade** | **Integer**| {{{pessoa_detalhe_persist_id_nacionalidade_value}}} | [optional] 
 **numeroBanco** | **Integer**| {{{pessoa_detalhe_persist_numero_banco_value}}} | [optional] 
 **numeroAgencia** | **Integer**| {{{pessoa_detalhe_persist_numero_agencia_value}}} | [optional] 
 **numeroContaCorrente** | **String**| {{{pessoa_detalhe_persist_numero_conta_corrente_value}}} | [optional] 
 **email** | **String**| {{{pessoa_detalhe_persist_email_value}}} | [optional] 
 **nomeEmpresa** | **String**| {{{pessoa_detalhe_persist_nome_empresa_value}}} | [optional] 

### Return type

[**PessoaDetalheResponse**](PessoaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST25"></a>
# **salvarUsingPOST25**
> PessoaResponse salvarUsingPOST25(nome, tipo, dataNascimento, opts)

{{{pessoa_resource_salvar}}}

{{{pessoa_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var nome = "nome_example"; // {String} {{{pessoa_persist_nome_value}}}

var tipo = "tipo_example"; // {String} {{{pessoa_persist_tipo_value}}}

var dataNascimento = "dataNascimento_example"; // {String} {{{pessoa_persist_data_nascimento_value}}}

var opts = { 
  'cpf': "cpf_example", // {String} {{{pessoa_persist_cpf_value}}}
  'cnpj': "cnpj_example", // {String} {{{pessoa_persist_cnpj_value}}}
  'sexo': "sexo_example", // {String} {{{pessoa_persist_sexo_value}}}
  'numeroIdentidade': "numeroIdentidade_example", // {String} {{{pessoa_persist_numero_identidade_value}}}
  'orgaoExpedidorIdentidade': "orgaoExpedidorIdentidade_example", // {String} {{{pessoa_persist_orgao_expedidor_identidade_value}}}
  'unidadeFederativaIdentidade': "unidadeFederativaIdentidade_example", // {String} {{{pessoa_persist_unidade_federativa_identidade_value}}}
  'dataEmissaoIdentidade': "dataEmissaoIdentidade_example" // {String} {{{pessoa_persist_data_emissao_identidade_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST25(nome, tipo, dataNascimento, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nome** | **String**| {{{pessoa_persist_nome_value}}} | 
 **tipo** | **String**| {{{pessoa_persist_tipo_value}}} | 
 **dataNascimento** | **String**| {{{pessoa_persist_data_nascimento_value}}} | 
 **cpf** | **String**| {{{pessoa_persist_cpf_value}}} | [optional] 
 **cnpj** | **String**| {{{pessoa_persist_cnpj_value}}} | [optional] 
 **sexo** | **String**| {{{pessoa_persist_sexo_value}}} | [optional] 
 **numeroIdentidade** | **String**| {{{pessoa_persist_numero_identidade_value}}} | [optional] 
 **orgaoExpedidorIdentidade** | **String**| {{{pessoa_persist_orgao_expedidor_identidade_value}}} | [optional] 
 **unidadeFederativaIdentidade** | **String**| {{{pessoa_persist_unidade_federativa_identidade_value}}} | [optional] 
 **dataEmissaoIdentidade** | **String**| {{{pessoa_persist_data_emissao_identidade_value}}} | [optional] 

### Return type

[**PessoaResponse**](PessoaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST28"></a>
# **salvarUsingPOST28**
> TelefoneResponse salvarUsingPOST28(opts)

{{{telefone_resource_salvar}}}

{{{telefone_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcadastroclienteApi()

var opts = { 
  'idTipoTelefone': 789, // {Integer} {{{telefone_persist_id_tipo_telefone_value}}}
  'idPessoa': 789, // {Integer} {{{telefone_persist_id_pessoa_value}}}
  'ddd': "ddd_example", // {String} {{{telefone_persist_ddd_value}}}
  'telefone': "telefone_example", // {String} {{{telefone_persist_telefone_value}}}
  'ramal': "ramal_example" // {String} {{{telefone_persist_ramal_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST28(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTipoTelefone** | **Integer**| {{{telefone_persist_id_tipo_telefone_value}}} | [optional] 
 **idPessoa** | **Integer**| {{{telefone_persist_id_pessoa_value}}} | [optional] 
 **ddd** | **String**| {{{telefone_persist_ddd_value}}} | [optional] 
 **telefone** | **String**| {{{telefone_persist_telefone_value}}} | [optional] 
 **ramal** | **String**| {{{telefone_persist_ramal_value}}} | [optional] 

### Return type

[**TelefoneResponse**](TelefoneResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

