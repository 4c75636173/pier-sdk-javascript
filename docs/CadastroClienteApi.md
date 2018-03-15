# Pier.CadastroClienteApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT**](CadastroClienteApi.md#alterarUsingPUT) | **PUT** /api/contas/{id}/adicionais/{idPessoa} | Altera Adicional de uma Conta
[**alterarUsingPUT13**](CadastroClienteApi.md#alterarUsingPUT13) | **PUT** /api/pessoas-detalhes/{id} | Atualiza os detalhes de uma determinada Pessoa
[**alterarUsingPUT14**](CadastroClienteApi.md#alterarUsingPUT14) | **PUT** /api/pessoas/{id} | Atualiza os dados de uma determinada Pessoa
[**alterarUsingPUT16**](CadastroClienteApi.md#alterarUsingPUT16) | **PUT** /api/telefones | Realiza a altera\u00E7\u00E3o de um determinado Telefone
[**alterarUsingPUT5**](CadastroClienteApi.md#alterarUsingPUT5) | **PUT** /api/enderecos | Atualiza os dados de um determinado Endere\u00E7o
[**atribuirAssinaturaClienteUsingPOST**](CadastroClienteApi.md#atribuirAssinaturaClienteUsingPOST) | **POST** /api/contas/{id}/atribuir-assinatura-cliente | Permite atribuir um documento para uma Conta
[**atualizarUsingPOST**](CadastroClienteApi.md#atualizarUsingPOST) | **POST** /api/contas/{id}/atualizar-registro-integracao | Atualiza conta integrada com o emissor
[**cadastrarUsingPOST**](CadastroClienteApi.md#cadastrarUsingPOST) | **POST** /api/contas/{id}/cadastrar-adicional | Realiza o cadastro de Adicionais para uma Conta
[**consultarUsingGET1**](CadastroClienteApi.md#consultarUsingGET1) | **GET** /api/contas/{id}/adicionais/{idPessoa} | Consulta Adicional de uma Conta
[**consultarUsingGET16**](CadastroClienteApi.md#consultarUsingGET16) | **GET** /api/enderecos/{id} | Apresenta os dados de um determinado Endere\u00E7o
[**consultarUsingGET24**](CadastroClienteApi.md#consultarUsingGET24) | **GET** /api/pessoas-detalhes/{id} | Apresenta os detalhes de uma determinada Pessoa
[**consultarUsingGET25**](CadastroClienteApi.md#consultarUsingGET25) | **GET** /api/pessoas/{id} | Apresenta os dados de uma determinada Pessoa
[**consultarUsingGET31**](CadastroClienteApi.md#consultarUsingGET31) | **GET** /api/telefones/{id} | Apresenta os dados de um determinado Telefone
[**inativarUsingPOST**](CadastroClienteApi.md#inativarUsingPOST) | **POST** /api/contas/{id}/adicionais/{idPessoa}/inativar | Inativa Adicional de uma Conta
[**listarSociosUsingGET**](CadastroClienteApi.md#listarSociosUsingGET) | **GET** /api/clientes-pessoas-juridicas/{id}/socios | Listar s\u00F3cios de uma pessoa jur\u00EDdica
[**listarUsingGET1**](CadastroClienteApi.md#listarUsingGET1) | **GET** /api/contas/{id}/adicionais | Lista os Adicionais de uma Conta
[**listarUsingGET21**](CadastroClienteApi.md#listarUsingGET21) | **GET** /api/enderecos | Lista os Endere\u00E7os cadastrados para o Emissor
[**listarUsingGET31**](CadastroClienteApi.md#listarUsingGET31) | **GET** /api/pessoas-detalhes | Lista os Detalhes das Pessoas cadastradas no Emissor
[**listarUsingGET32**](CadastroClienteApi.md#listarUsingGET32) | **GET** /api/pessoas | Lista as Pessoas cadastradas no Emissor
[**listarUsingGET41**](CadastroClienteApi.md#listarUsingGET41) | **GET** /api/telefones | Lista os Telefones cadastrados no Emissor
[**salvarPessoaFisicaAprovadaUsingPOST**](CadastroClienteApi.md#salvarPessoaFisicaAprovadaUsingPOST) | **POST** /api/clientes-pessoas-fisicas | Cadastro de Conta e Pessoa Fisica
[**salvarPessoaJuridicaAprovadaUsingPOST**](CadastroClienteApi.md#salvarPessoaJuridicaAprovadaUsingPOST) | **POST** /api/clientes-pessoas-juridicas | Cadastro de Conta e Pessoa Jur\u00EDdica
[**salvarUsingPOST12**](CadastroClienteApi.md#salvarUsingPOST12) | **POST** /api/enderecos | Realiza o cadastro de um novo Endere\u00E7o
[**salvarUsingPOST14**](CadastroClienteApi.md#salvarUsingPOST14) | **POST** /api/contas/{id}/incluir-registro-integracao | Inclui a conta como registro para integra\u00E7\u00E3o
[**salvarUsingPOST19**](CadastroClienteApi.md#salvarUsingPOST19) | **POST** /api/pessoas-detalhes | Salvar os detalhes de uma determinada Pessoa
[**salvarUsingPOST20**](CadastroClienteApi.md#salvarUsingPOST20) | **POST** /api/pessoas | Realiza o cadastro de um nova Pessoa
[**salvarUsingPOST23**](CadastroClienteApi.md#salvarUsingPOST23) | **POST** /api/telefones | Realiza o cadastro de um novo Telefone


<a name="alterarUsingPUT"></a>
# **alterarUsingPUT**
> AdicionalDetalheResponse alterarUsingPUT(id, idPessoa, adicionalUpdate)

Altera Adicional de uma Conta

Este m\u00E9todo permite que seja alterado um portador Adicional de uma determinada Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da conta (id).

var idPessoa = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da pessoa (id).

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
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da conta (id). | 
 **idPessoa** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da pessoa (id). | 
 **adicionalUpdate** | [**AdicionalUpdate**](AdicionalUpdate.md)| adicionalUpdate | 

### Return type

[**AdicionalDetalheResponse**](AdicionalDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT13"></a>
# **alterarUsingPUT13**
> PessoaDetalheResponse alterarUsingPUT13(id, opts)

Atualiza os detalhes de uma determinada Pessoa

Este m\u00E9todo permite que seja alterado na base do emissor os detalhes de uma determinada Pessoa.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} ID da Pessoa

var opts = { 
  'nomeMae': "nomeMae_example", // {String} Apresenta o nome da m\u00E3e da pessoa fisica
  'idEstadoCivil': 789, // {Integer} Id Estado civil da pessoa fisica
  'idProfissao': "idProfissao_example", // {String} Profiss\u00E3o da pessoa fisica
  'idNaturezaOcupacao': 789, // {Integer} Id Natureza Ocupa\u00E7\u00E3o da pessoa fisica
  'idNacionalidade': 789, // {Integer} Id Nacionalidade da pessoa fisica
  'numeroBanco': 56, // {Integer} N\u00FAmero do banco.
  'numeroAgencia': 56, // {Integer} N\u00FAmero da ag\u00EAncia.
  'numeroContaCorrente': "numeroContaCorrente_example", // {String} N\u00FAmero da conta corrente.
  'email': "email_example", // {String} Email da pessoa fisica
  'nomeEmpresa': "nomeEmpresa_example" // {String} Nome que deve ser impresso no cart\u00E3o
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT13(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID da Pessoa | 
 **nomeMae** | **String**| Apresenta o nome da m\u00E3e da pessoa fisica | [optional] 
 **idEstadoCivil** | **Integer**| Id Estado civil da pessoa fisica | [optional] 
 **idProfissao** | **String**| Profiss\u00E3o da pessoa fisica | [optional] 
 **idNaturezaOcupacao** | **Integer**| Id Natureza Ocupa\u00E7\u00E3o da pessoa fisica | [optional] 
 **idNacionalidade** | **Integer**| Id Nacionalidade da pessoa fisica | [optional] 
 **numeroBanco** | **Integer**| N\u00FAmero do banco. | [optional] 
 **numeroAgencia** | **Integer**| N\u00FAmero da ag\u00EAncia. | [optional] 
 **numeroContaCorrente** | **String**| N\u00FAmero da conta corrente. | [optional] 
 **email** | **String**| Email da pessoa fisica | [optional] 
 **nomeEmpresa** | **String**| Nome que deve ser impresso no cart\u00E3o | [optional] 

### Return type

[**PessoaDetalheResponse**](PessoaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT14"></a>
# **alterarUsingPUT14**
> PessoaResponse alterarUsingPUT14(id, nome, tipo, dataNascimento, opts)

Atualiza os dados de uma determinada Pessoa

Este m\u00E9todo permite que seja alterado na base do emissor um registro de determinada Pessoa.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} ID da Pessoa

var nome = "nome_example"; // {String} Apresenta o 'Nome Completo da PF' ou o 'Nome Completo da Raz\u00E3o Social (Nome Empresarial)'.

var tipo = "tipo_example"; // {String} C\u00F3digo de identifica\u00E7\u00E3o do tipo da Pessoa, sendo: (\"PF\": Pessoa F\u00EDsica), (\"PJ\": Pessoa Jur\u00EDdica).

var dataNascimento = "dataNascimento_example"; // {String} Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd.

var opts = { 
  'cpf': "cpf_example", // {String} N\u00FAmero do CPF, quando PF.
  'cnpj': "cnpj_example", // {String} N\u00FAmero do CNPJ, quando PJ.
  'sexo': "sexo_example", // {String} C\u00F3digo de identifica\u00E7\u00E3o do sexo da Pessoa, quando PF, sendo: (\"M\": Masculino), (\"F\": Feminino), (\"O\": Outro), (\"N\": N\u00E3o Especificado).
  'numeroIdentidade': "numeroIdentidade_example", // {String} N\u00FAmero da Identidade.
  'orgaoExpedidorIdentidade': "orgaoExpedidorIdentidade_example", // {String} Org\u00E3o expedidor do Identidade.
  'unidadeFederativaIdentidade': "unidadeFederativaIdentidade_example", // {String} Sigla da Unidade Federativa de onde foi expedido a Identidade
  'dataEmissaoIdentidade': "dataEmissaoIdentidade_example" // {String} Data emiss\u00E3o da Identidade.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT14(id, nome, tipo, dataNascimento, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID da Pessoa | 
 **nome** | **String**| Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00E3o Social (Nome Empresarial)&#39;. | 
 **tipo** | **String**| C\u00F3digo de identifica\u00E7\u00E3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00EDsica), (\&quot;PJ\&quot;: Pessoa Jur\u00EDdica). | 
 **dataNascimento** | **String**| Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd. | 
 **cpf** | **String**| N\u00FAmero do CPF, quando PF. | [optional] 
 **cnpj** | **String**| N\u00FAmero do CNPJ, quando PJ. | [optional] 
 **sexo** | **String**| C\u00F3digo de identifica\u00E7\u00E3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00E3o Especificado). | [optional] 
 **numeroIdentidade** | **String**| N\u00FAmero da Identidade. | [optional] 
 **orgaoExpedidorIdentidade** | **String**| Org\u00E3o expedidor do Identidade. | [optional] 
 **unidadeFederativaIdentidade** | **String**| Sigla da Unidade Federativa de onde foi expedido a Identidade | [optional] 
 **dataEmissaoIdentidade** | **String**| Data emiss\u00E3o da Identidade. | [optional] 

### Return type

[**PessoaResponse**](PessoaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT16"></a>
# **alterarUsingPUT16**
> TelefoneResponse alterarUsingPUT16(id, opts)

Realiza a altera\u00E7\u00E3o de um determinado Telefone

Este m\u00E9todo permite que seja alterado um determinado Telefone na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Telefone (id).

var opts = { 
  'idTipoTelefone': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Tipo do Telefone (id).
  'ddd': "ddd_example", // {String} C\u00F3digo DDD do telefone (id).
  'telefone': "telefone_example", // {String} N\u00FAmero do telefone.
  'ramal': "ramal_example" // {String} N\u00FAmero do ramal.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT16(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Telefone (id). | 
 **idTipoTelefone** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Tipo do Telefone (id). | [optional] 
 **ddd** | **String**| C\u00F3digo DDD do telefone (id). | [optional] 
 **telefone** | **String**| N\u00FAmero do telefone. | [optional] 
 **ramal** | **String**| N\u00FAmero do ramal. | [optional] 

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

Atualiza os dados de um determinado Endere\u00E7o

Este m\u00E9todo permite que seja alterado na base do emissor um ou mais registros ligados a um determinado Endere\u00E7o.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} id

var opts = { 
  'idPessoa': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa a qual o endere\u00E7o pertence (id)
  'idTipoEndereco': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Tipo Endere\u00E7o (id)
  'cep': "cep_example", // {String} Apresenta o C\u00F3digo de Endere\u00E7amento Postal (CEP) no formaro '58800000'
  'logradouro': "logradouro_example", // {String} Apresenta o nome do Logradouro
  'numero': 56, // {Integer} Apresenta o n\u00FAmero do endere\u00E7o
  'complemento': "complemento_example", // {String} Apresenta descri\u00E7oes complementares referente ao endere\u00E7o
  'pontoReferencia': "pontoReferencia_example", // {String} Apresenta a descri\u00E7\u00E3o de ponto de refer\u00EAncia do endere\u00E7o
  'bairro': "bairro_example", // {String} Apresenta nome do bairro
  'cidade': "cidade_example", // {String} Apresenta nome da cidade
  'uf': "uf_example", // {String} Apresenta sigla da Unidade Federativa
  'pais': "pais_example" // {String} Apresenta nome do Pais
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
 **idPessoa** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa a qual o endere\u00E7o pertence (id) | [optional] 
 **idTipoEndereco** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Tipo Endere\u00E7o (id) | [optional] 
 **cep** | **String**| Apresenta o C\u00F3digo de Endere\u00E7amento Postal (CEP) no formaro &#39;58800000&#39; | [optional] 
 **logradouro** | **String**| Apresenta o nome do Logradouro | [optional] 
 **numero** | **Integer**| Apresenta o n\u00FAmero do endere\u00E7o | [optional] 
 **complemento** | **String**| Apresenta descri\u00E7oes complementares referente ao endere\u00E7o | [optional] 
 **pontoReferencia** | **String**| Apresenta a descri\u00E7\u00E3o de ponto de refer\u00EAncia do endere\u00E7o | [optional] 
 **bairro** | **String**| Apresenta nome do bairro | [optional] 
 **cidade** | **String**| Apresenta nome da cidade | [optional] 
 **uf** | **String**| Apresenta sigla da Unidade Federativa | [optional] 
 **pais** | **String**| Apresenta nome do Pais | [optional] 

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

Permite atribuir um documento para uma Conta

Este m\u00E9todo permite que seja atribu\u00EDdo a uma determinada Conta um documento que esteja armazenado no PIER Cloud, informando qual o tipo do documento e o seu respectivo id.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Conta

var body = new Pier.AtribuirAssinaturaClientePersist(); // {AtribuirAssinaturaClientePersist} C\u00F3digo de Identifica\u00E7\u00E3o do Arquivo


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
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Conta | 
 **body** | [**AtribuirAssinaturaClientePersist**](AtribuirAssinaturaClientePersist.md)| C\u00F3digo de Identifica\u00E7\u00E3o do Arquivo | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atualizarUsingPOST"></a>
# **atualizarUsingPOST**
> IntegracaoEmissorResponse atualizarUsingPOST(id, opts)

Atualiza conta integrada com o emissor

Este recurso permite a atualiza\u00E7\u00E3o de uma conta integrada com o emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).

var opts = { 
  'body': new Pier.IntegracaoEmissorPersist() // {IntegracaoEmissorPersist} Descri\u00E7\u00E3o do canal de entrada
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
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 
 **body** | [**IntegracaoEmissorPersist**](IntegracaoEmissorPersist.md)| Descri\u00E7\u00E3o do canal de entrada | [optional] 

### Return type

[**IntegracaoEmissorResponse**](IntegracaoEmissorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarUsingPOST"></a>
# **cadastrarUsingPOST**
> AdicionalDetalheResponse cadastrarUsingPOST(id, persist)

Realiza o cadastro de Adicionais para uma Conta

Este m\u00E9todo permite que sejam cadastrados um portador Adicional para uma determinada Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da conta (id).

var persist = new Pier.AdicionalPersist(); // {AdicionalPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarUsingPOST(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da conta (id). | 
 **persist** | [**AdicionalPersist**](AdicionalPersist.md)| persist | 

### Return type

[**AdicionalDetalheResponse**](AdicionalDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET1"></a>
# **consultarUsingGET1**
> AdicionalDetalheResponse consultarUsingGET1(id, idPessoa)

Consulta Adicional de uma Conta

Este m\u00E9todo permite que seja consultado um portador Adicional de uma determinada Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da conta (id).

var idPessoa = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da pessoa (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET1(id, idPessoa, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da conta (id). | 
 **idPessoa** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da pessoa (id). | 

### Return type

[**AdicionalDetalheResponse**](AdicionalDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET16"></a>
# **consultarUsingGET16**
> EnderecoResponse consultarUsingGET16(id)

Apresenta os dados de um determinado Endere\u00E7o

Este m\u00E9todo permite consultar um determinado Endere\u00E7o a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Endere\u00E7o (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET16(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Endere\u00E7o (id). | 

### Return type

[**EnderecoResponse**](EnderecoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET24"></a>
# **consultarUsingGET24**
> PessoaDetalheResponse consultarUsingGET24(id)

Apresenta os detalhes de uma determinada Pessoa

Este m\u00E9todo permite a consulta dos detalhes de uma Pessoa existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} ID da Pessoa


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET24(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID da Pessoa | 

### Return type

[**PessoaDetalheResponse**](PessoaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET25"></a>
# **consultarUsingGET25**
> PessoaResponse consultarUsingGET25(id)

Apresenta os dados de uma determinada Pessoa

Este m\u00E9todo permite que sejam listadas as Pessoas existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} ID da Pessoa


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET25(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID da Pessoa | 

### Return type

[**PessoaResponse**](PessoaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET31"></a>
# **consultarUsingGET31**
> TelefoneResponse consultarUsingGET31(id)

Apresenta os dados de um determinado Telefone

Este m\u00E9todo permite consultar um determinado Telefone a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Telefone (id).


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
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Telefone (id). | 

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

Inativa Adicional de uma Conta

Este m\u00E9todo permite que seja inativado um portador Adicional de uma determinada Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da conta (id).

var idPessoa = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da pessoa (id).


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
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da conta (id). | 
 **idPessoa** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da pessoa (id). | 

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

Listar s\u00F3cios de uma pessoa jur\u00EDdica

Lista os s\u00F3cios vinculados \u00E0 uma Pessoa Jur\u00EDdica cadastrada.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa Jur\u00EDdica

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa Jur\u00EDdica | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

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

Lista os Adicionais de uma Conta

Este m\u00E9todo permite que sejam listados portadores Adicionais de uma determinada Conta.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da conta (id).

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
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
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da conta (id). | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**AdicionalResponse**](AdicionalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET21"></a>
# **listarUsingGET21**
> PageEnderecoResponse listarUsingGET21(opts)

Lista os Endere\u00E7os cadastrados para o Emissor

Este m\u00E9todo permite que sejam listados os Endere\u00E7os existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Endere\u00E7o (id).
  'idPessoa': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa a qual o endere\u00E7o pertence (id)
  'idTipoEndereco': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Tipo Endere\u00E7o (id)
  'cep': "cep_example", // {String} Apresenta o C\u00F3digo de Endere\u00E7amento Postal (CEP)
  'logradouro': "logradouro_example", // {String} Apresenta o nome do Logradouro
  'numero': 56, // {Integer} Apresenta o n\u00FAmero do endere\u00E7o
  'complemento': "complemento_example", // {String} Apresenta descri\u00E7oes complementares referente ao endere\u00E7o
  'pontoReferencia': "pontoReferencia_example", // {String} Apresenta a descri\u00E7\u00E3o de ponto de refer\u00EAncia do endere\u00E7o
  'bairro': "bairro_example", // {String} Apresenta nome do bairro
  'cidade': "cidade_example", // {String} Apresenta nome da cidade
  'uf': "uf_example", // {String} Apresenta sigla da Unidade Federativa
  'pais': "pais_example", // {String} Apresenta nome do Pais
  'dataInclusao': "dataInclusao_example", // {String} Apresenta a data em que fora cadastrado o Endere\u00E7o
  'dataUltimaAtualizacao': "dataUltimaAtualizacao_example" // {String} Data em que fora realizada a \u00FAltima mudan\u00E7a neste registro de endere\u00E7o. Quando n\u00E3o tiver ocorrido mudan\u00E7a, conter\u00E1 a mesma informa\u00E7\u00E3o que o campo dataInclusao
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET21(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Endere\u00E7o (id). | [optional] 
 **idPessoa** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa a qual o endere\u00E7o pertence (id) | [optional] 
 **idTipoEndereco** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Tipo Endere\u00E7o (id) | [optional] 
 **cep** | **String**| Apresenta o C\u00F3digo de Endere\u00E7amento Postal (CEP) | [optional] 
 **logradouro** | **String**| Apresenta o nome do Logradouro | [optional] 
 **numero** | **Integer**| Apresenta o n\u00FAmero do endere\u00E7o | [optional] 
 **complemento** | **String**| Apresenta descri\u00E7oes complementares referente ao endere\u00E7o | [optional] 
 **pontoReferencia** | **String**| Apresenta a descri\u00E7\u00E3o de ponto de refer\u00EAncia do endere\u00E7o | [optional] 
 **bairro** | **String**| Apresenta nome do bairro | [optional] 
 **cidade** | **String**| Apresenta nome da cidade | [optional] 
 **uf** | **String**| Apresenta sigla da Unidade Federativa | [optional] 
 **pais** | **String**| Apresenta nome do Pais | [optional] 
 **dataInclusao** | **String**| Apresenta a data em que fora cadastrado o Endere\u00E7o | [optional] 
 **dataUltimaAtualizacao** | **String**| Data em que fora realizada a \u00FAltima mudan\u00E7a neste registro de endere\u00E7o. Quando n\u00E3o tiver ocorrido mudan\u00E7a, conter\u00E1 a mesma informa\u00E7\u00E3o que o campo dataInclusao | [optional] 

### Return type

[**PageEnderecoResponse**](PageEnderecoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET31"></a>
# **listarUsingGET31**
> PagePessoaDetalheResponse listarUsingGET31(opts)

Lista os Detalhes das Pessoas cadastradas no Emissor

Este m\u00E9todo permite que sejam listadas od detalhes das Pessoas existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'idPessoa': 789, // {Integer} C\u00F3digo identificador da pessoa
  'nomeMae': "nomeMae_example", // {String} Apresenta o nome da m\u00E3e da pessoa fisica
  'idEstadoCivil': 789, // {Integer} Id Estado civil da pessoa fisica
  'idProfissao': "idProfissao_example", // {String} Profiss\u00E3o da pessoa fisica
  'idNaturezaOcupacao': 789, // {Integer} Id Natureza Ocupa\u00E7\u00E3o da pessoa fisica
  'idNacionalidade': 789, // {Integer} Id Nacionalidade da pessoa fisica
  'numeroBanco': 56, // {Integer} N\u00FAmero do Banco.
  'numeroAgencia': 56, // {Integer} N\u00FAmero da ag\u00EAncia.
  'numeroContaCorrente': "numeroContaCorrente_example", // {String} N\u00FAmero da conta corrente.
  'email': "email_example", // {String} Email da pessoa fisica
  'nomeEmpresa': "nomeEmpresa_example" // {String} Nome que deve ser impresso no cart\u00E3o
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET31(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **idPessoa** | **Integer**| C\u00F3digo identificador da pessoa | [optional] 
 **nomeMae** | **String**| Apresenta o nome da m\u00E3e da pessoa fisica | [optional] 
 **idEstadoCivil** | **Integer**| Id Estado civil da pessoa fisica | [optional] 
 **idProfissao** | **String**| Profiss\u00E3o da pessoa fisica | [optional] 
 **idNaturezaOcupacao** | **Integer**| Id Natureza Ocupa\u00E7\u00E3o da pessoa fisica | [optional] 
 **idNacionalidade** | **Integer**| Id Nacionalidade da pessoa fisica | [optional] 
 **numeroBanco** | **Integer**| N\u00FAmero do Banco. | [optional] 
 **numeroAgencia** | **Integer**| N\u00FAmero da ag\u00EAncia. | [optional] 
 **numeroContaCorrente** | **String**| N\u00FAmero da conta corrente. | [optional] 
 **email** | **String**| Email da pessoa fisica | [optional] 
 **nomeEmpresa** | **String**| Nome que deve ser impresso no cart\u00E3o | [optional] 

### Return type

[**PagePessoaDetalheResponse**](PagePessoaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET32"></a>
# **listarUsingGET32**
> PagePessoaResponse listarUsingGET32(opts)

Lista as Pessoas cadastradas no Emissor

Este m\u00E9todo permite que sejam listadas as Pessoas existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa (id).
  'nome': "nome_example", // {String} Apresenta o 'Nome Completo da PF' ou o 'Nome Completo da Raz\u00E3o Social (Nome Empresarial)'.
  'tipo': "tipo_example", // {String} C\u00F3digo de identifica\u00E7\u00E3o do tipo da Pessoa, sendo: (\"PF\": Pessoa F\u00EDsica), (\"PJ\": Pessoa Jur\u00EDdica).
  'cpf': "cpf_example", // {String} N\u00FAmero do CPF, quando PF.
  'cnpj': "cnpj_example", // {String} N\u00FAmero do CNPJ, quando PJ.
  'dataNascimento': "dataNascimento_example", // {String} Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ.
  'sexo': "sexo_example", // {String} C\u00F3digo de identifica\u00E7\u00E3o do sexo da Pessoa, quando PF, sendo: (\"M\": Masculino), (\"F\": Feminino), (\"O\": Outro), (\"N\": N\u00E3o Especificado).
  'numeroIdentidade': "numeroIdentidade_example", // {String} N\u00FAmero da Identidade
  'orgaoExpedidorIdentidade': "orgaoExpedidorIdentidade_example", // {String} Org\u00E3o expedidor do RG.
  'unidadeFederativaIdentidade': "unidadeFederativaIdentidade_example", // {String} Sigla da Unidade Federativa de onde foi expedido a Identidade
  'dataEmissaoIdentidade': "dataEmissaoIdentidade_example" // {String} Data emiss\u00E3o da identidade no formato aaaa-MM-dd
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET32(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa (id). | [optional] 
 **nome** | **String**| Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00E3o Social (Nome Empresarial)&#39;. | [optional] 
 **tipo** | **String**| C\u00F3digo de identifica\u00E7\u00E3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00EDsica), (\&quot;PJ\&quot;: Pessoa Jur\u00EDdica). | [optional] 
 **cpf** | **String**| N\u00FAmero do CPF, quando PF. | [optional] 
 **cnpj** | **String**| N\u00FAmero do CNPJ, quando PJ. | [optional] 
 **dataNascimento** | **String**| Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. | [optional] 
 **sexo** | **String**| C\u00F3digo de identifica\u00E7\u00E3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00E3o Especificado). | [optional] 
 **numeroIdentidade** | **String**| N\u00FAmero da Identidade | [optional] 
 **orgaoExpedidorIdentidade** | **String**| Org\u00E3o expedidor do RG. | [optional] 
 **unidadeFederativaIdentidade** | **String**| Sigla da Unidade Federativa de onde foi expedido a Identidade | [optional] 
 **dataEmissaoIdentidade** | **String**| Data emiss\u00E3o da identidade no formato aaaa-MM-dd | [optional] 

### Return type

[**PagePessoaResponse**](PagePessoaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET41"></a>
# **listarUsingGET41**
> PageTelefoneResponse listarUsingGET41(opts)

Lista os Telefones cadastrados no Emissor

Este m\u00E9todo permite que sejam listados os Telefones existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Telefone (id).
  'idTipoTelefone': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Tipo do Telefone (id).
  'idPessoa': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa (id) a qual o telefone pertence.
  'ddd': "ddd_example", // {String} C\u00F3digo DDD do telefone (id).
  'telefone': "telefone_example", // {String} N\u00FAmero do telefone.
  'ramal': "ramal_example", // {String} N\u00FAmero do ramal.
  'status': 56 // {Integer} Apresenta o Status do Telefone, onde: '0': Inativo e '1': Ativo
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET41(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Telefone (id). | [optional] 
 **idTipoTelefone** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Tipo do Telefone (id). | [optional] 
 **idPessoa** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa (id) a qual o telefone pertence. | [optional] 
 **ddd** | **String**| C\u00F3digo DDD do telefone (id). | [optional] 
 **telefone** | **String**| N\u00FAmero do telefone. | [optional] 
 **ramal** | **String**| N\u00FAmero do ramal. | [optional] 
 **status** | **Integer**| Apresenta o Status do Telefone, onde: &#39;0&#39;: Inativo e &#39;1&#39;: Ativo | [optional] 

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

Cadastro de Conta e Pessoa Fisica

Permite realizar o cadastro de uma Conta para um cliente do tipo Pessoa F\u00EDsica, recebendo nesta opera\u00E7\u00E3o todos os dados cadastrais que se fazem necess\u00E1rios para isso. Uma vez criado, poder\u00E1 ser acionado o m\u00E9todo de &#39;Gera\u00E7\u00E3o de Cart\u00E3o&#39; para o cliente e seus adicionais.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var pessoaPersist = new Pier.PessoaFisicaAprovadaPersist(); // {PessoaFisicaAprovadaPersist} pessoaPersist


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
 **pessoaPersist** | [**PessoaFisicaAprovadaPersist**](PessoaFisicaAprovadaPersist.md)| pessoaPersist | 

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

Cadastro de Conta e Pessoa Jur\u00EDdica

Cadastro de Conta e Pessoa Jur\u00EDdica Permite realizar o cadastro de uma Conta para um cliente do tipo Pessoa Jur\u00EDdica, recebendo nesta opera\u00E7\u00E3o todos os dados cadastrais que se fazem necess\u00E1rios para isso, inclu\u00EDndo o registro de cada um dos s\u00F3cios. Uma vez criado, poder\u00E1 ser acionado o m\u00E9todo de &#39;Gera\u00E7\u00E3o de Cart\u00E3o&#39; para o cliente e cada um dos s\u00F3cios vinculados.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

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

<a name="salvarUsingPOST12"></a>
# **salvarUsingPOST12**
> EnderecoResponse salvarUsingPOST12(opts)

Realiza o cadastro de um novo Endere\u00E7o

Este m\u00E9todo permite que seja cadastrado um novo Endere\u00E7o na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var opts = { 
  'idPessoa': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa a qual o endere\u00E7o pertence (id)
  'idTipoEndereco': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Tipo Endere\u00E7o (id)
  'cep': "cep_example", // {String} Apresenta o C\u00F3digo de Endere\u00E7amento Postal (CEP) no formaro '58800000'
  'logradouro': "logradouro_example", // {String} Apresenta o nome do Logradouro
  'numero': 56, // {Integer} Apresenta o n\u00FAmero do endere\u00E7o
  'complemento': "complemento_example", // {String} Apresenta descri\u00E7oes complementares referente ao endere\u00E7o
  'pontoReferencia': "pontoReferencia_example", // {String} Apresenta a descri\u00E7\u00E3o de ponto de refer\u00EAncia do endere\u00E7o
  'bairro': "bairro_example", // {String} Apresenta nome do bairro
  'cidade': "cidade_example", // {String} Apresenta nome da cidade
  'uf': "uf_example", // {String} Apresenta sigla da Unidade Federativa
  'pais': "pais_example" // {String} Apresenta nome do Pais
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST12(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPessoa** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa a qual o endere\u00E7o pertence (id) | [optional] 
 **idTipoEndereco** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Tipo Endere\u00E7o (id) | [optional] 
 **cep** | **String**| Apresenta o C\u00F3digo de Endere\u00E7amento Postal (CEP) no formaro &#39;58800000&#39; | [optional] 
 **logradouro** | **String**| Apresenta o nome do Logradouro | [optional] 
 **numero** | **Integer**| Apresenta o n\u00FAmero do endere\u00E7o | [optional] 
 **complemento** | **String**| Apresenta descri\u00E7oes complementares referente ao endere\u00E7o | [optional] 
 **pontoReferencia** | **String**| Apresenta a descri\u00E7\u00E3o de ponto de refer\u00EAncia do endere\u00E7o | [optional] 
 **bairro** | **String**| Apresenta nome do bairro | [optional] 
 **cidade** | **String**| Apresenta nome da cidade | [optional] 
 **uf** | **String**| Apresenta sigla da Unidade Federativa | [optional] 
 **pais** | **String**| Apresenta nome do Pais | [optional] 

### Return type

[**EnderecoResponse**](EnderecoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST14"></a>
# **salvarUsingPOST14**
> IntegracaoEmissorResponse salvarUsingPOST14(id, opts)

Inclui a conta como registro para integra\u00E7\u00E3o

Este recurso permite incluir uma conta como registro para integra\u00E7\u00E3o.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var id = 789; // {Integer} C\u00F3digo de identifica\u00E7\u00E3o da conta (id).

var opts = { 
  'body': new Pier.IntegracaoEmissorPersist() // {IntegracaoEmissorPersist} Descri\u00E7\u00E3o do canal de entrada
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST14(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de identifica\u00E7\u00E3o da conta (id). | 
 **body** | [**IntegracaoEmissorPersist**](IntegracaoEmissorPersist.md)| Descri\u00E7\u00E3o do canal de entrada | [optional] 

### Return type

[**IntegracaoEmissorResponse**](IntegracaoEmissorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST19"></a>
# **salvarUsingPOST19**
> PessoaDetalheResponse salvarUsingPOST19(idPessoa, opts)

Salvar os detalhes de uma determinada Pessoa

Este m\u00E9todo permite que seja incluido na base do emissor os detalhes de uma determinada Pessoa.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var idPessoa = 789; // {Integer} Apresenta o c\u00F3digo identificador da pessoa

var opts = { 
  'nomeMae': "nomeMae_example", // {String} Apresenta o nome da m\u00E3e da pessoa fisica
  'idEstadoCivil': 789, // {Integer} Id Estado civil da pessoa fisica
  'idProfissao': "idProfissao_example", // {String} Profiss\u00E3o da pessoa fisica
  'idNaturezaOcupacao': 789, // {Integer} Id Natureza Ocupa\u00E7\u00E3o da pessoa fisica
  'idNacionalidade': 789, // {Integer} Id Nacionalidade da pessoa fisica
  'numeroBanco': 56, // {Integer} N\u00FAmero do banco.
  'numeroAgencia': 56, // {Integer} N\u00FAmero da ag\u00EAncia.
  'numeroContaCorrente': "numeroContaCorrente_example", // {String} N\u00FAmero da conta corrente.
  'email': "email_example", // {String} Email da pessoa fisica
  'nomeEmpresa': "nomeEmpresa_example" // {String} Nome que deve ser impresso no cart\u00E3o
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST19(idPessoa, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPessoa** | **Integer**| Apresenta o c\u00F3digo identificador da pessoa | 
 **nomeMae** | **String**| Apresenta o nome da m\u00E3e da pessoa fisica | [optional] 
 **idEstadoCivil** | **Integer**| Id Estado civil da pessoa fisica | [optional] 
 **idProfissao** | **String**| Profiss\u00E3o da pessoa fisica | [optional] 
 **idNaturezaOcupacao** | **Integer**| Id Natureza Ocupa\u00E7\u00E3o da pessoa fisica | [optional] 
 **idNacionalidade** | **Integer**| Id Nacionalidade da pessoa fisica | [optional] 
 **numeroBanco** | **Integer**| N\u00FAmero do banco. | [optional] 
 **numeroAgencia** | **Integer**| N\u00FAmero da ag\u00EAncia. | [optional] 
 **numeroContaCorrente** | **String**| N\u00FAmero da conta corrente. | [optional] 
 **email** | **String**| Email da pessoa fisica | [optional] 
 **nomeEmpresa** | **String**| Nome que deve ser impresso no cart\u00E3o | [optional] 

### Return type

[**PessoaDetalheResponse**](PessoaDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST20"></a>
# **salvarUsingPOST20**
> PessoaResponse salvarUsingPOST20(nome, tipo, dataNascimento, opts)

Realiza o cadastro de um nova Pessoa

Este m\u00E9todo permite que seja cadastrado uma nova Pessoa na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var nome = "nome_example"; // {String} Apresenta o 'Nome Completo da PF' ou o 'Nome Completo da Raz\u00E3o Social (Nome Empresarial)'.

var tipo = "tipo_example"; // {String} C\u00F3digo de identifica\u00E7\u00E3o do tipo da Pessoa, sendo: (\"PF\": Pessoa F\u00EDsica), (\"PJ\": Pessoa Jur\u00EDdica).

var dataNascimento = "dataNascimento_example"; // {String} Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd.

var opts = { 
  'cpf': "cpf_example", // {String} N\u00FAmero do CPF, quando PF.
  'cnpj': "cnpj_example", // {String} N\u00FAmero do CNPJ, quando PJ.
  'sexo': "sexo_example", // {String} C\u00F3digo de identifica\u00E7\u00E3o do sexo da Pessoa, quando PF, sendo: (\"M\": Masculino), (\"F\": Feminino), (\"O\": Outro), (\"N\": N\u00E3o Especificado).
  'numeroIdentidade': "numeroIdentidade_example", // {String} N\u00FAmero da Identidade.
  'orgaoExpedidorIdentidade': "orgaoExpedidorIdentidade_example", // {String} Org\u00E3o expedidor do Identidade.
  'unidadeFederativaIdentidade': "unidadeFederativaIdentidade_example", // {String} Sigla da Unidade Federativa de onde foi expedido a Identidade
  'dataEmissaoIdentidade': "dataEmissaoIdentidade_example" // {String} Data emiss\u00E3o da Identidade.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST20(nome, tipo, dataNascimento, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nome** | **String**| Apresenta o &#39;Nome Completo da PF&#39; ou o &#39;Nome Completo da Raz\u00E3o Social (Nome Empresarial)&#39;. | 
 **tipo** | **String**| C\u00F3digo de identifica\u00E7\u00E3o do tipo da Pessoa, sendo: (\&quot;PF\&quot;: Pessoa F\u00EDsica), (\&quot;PJ\&quot;: Pessoa Jur\u00EDdica). | 
 **dataNascimento** | **String**| Data de Nascimento da Pessoa, quando PF, ou a Data de Abertura da Empresa, quando PJ. Essa data deve ser informada no formato aaaa-MM-dd. | 
 **cpf** | **String**| N\u00FAmero do CPF, quando PF. | [optional] 
 **cnpj** | **String**| N\u00FAmero do CNPJ, quando PJ. | [optional] 
 **sexo** | **String**| C\u00F3digo de identifica\u00E7\u00E3o do sexo da Pessoa, quando PF, sendo: (\&quot;M\&quot;: Masculino), (\&quot;F\&quot;: Feminino), (\&quot;O\&quot;: Outro), (\&quot;N\&quot;: N\u00E3o Especificado). | [optional] 
 **numeroIdentidade** | **String**| N\u00FAmero da Identidade. | [optional] 
 **orgaoExpedidorIdentidade** | **String**| Org\u00E3o expedidor do Identidade. | [optional] 
 **unidadeFederativaIdentidade** | **String**| Sigla da Unidade Federativa de onde foi expedido a Identidade | [optional] 
 **dataEmissaoIdentidade** | **String**| Data emiss\u00E3o da Identidade. | [optional] 

### Return type

[**PessoaResponse**](PessoaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST23"></a>
# **salvarUsingPOST23**
> TelefoneResponse salvarUsingPOST23(opts)

Realiza o cadastro de um novo Telefone

Este m\u00E9todo permite que seja cadastrado um novo Telefone na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.CadastroClienteApi()

var opts = { 
  'idTipoTelefone': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do Tipo do Telefone (id).
  'idPessoa': 789, // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa (id) a qual o telefone pertence.
  'ddd': "ddd_example", // {String} C\u00F3digo DDD do telefone (id).
  'telefone': "telefone_example", // {String} N\u00FAmero do telefone.
  'ramal': "ramal_example" // {String} N\u00FAmero do ramal.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST23(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idTipoTelefone** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do Tipo do Telefone (id). | [optional] 
 **idPessoa** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o da Pessoa (id) a qual o telefone pertence. | [optional] 
 **ddd** | **String**| C\u00F3digo DDD do telefone (id). | [optional] 
 **telefone** | **String**| N\u00FAmero do telefone. | [optional] 
 **ramal** | **String**| N\u00FAmero do ramal. | [optional] 

### Return type

[**TelefoneResponse**](TelefoneResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

