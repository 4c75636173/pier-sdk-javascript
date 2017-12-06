# Pier.EstabelecimentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT11**](EstabelecimentoApi.md#alterarUsingPUT11) | **PUT** /api/pessoas-juridicas/{id} | Alterar Pessoa Jur\u00C3\u00ADdica
[**alterarUsingPUT13**](EstabelecimentoApi.md#alterarUsingPUT13) | **PUT** /api/telefones-estabelecimentos/{id} | Altera um Telefone do estabelecimento
[**alterarUsingPUT15**](EstabelecimentoApi.md#alterarUsingPUT15) | **PUT** /api/terminais/{id} | Altera um Terminal
[**alterarUsingPUT5**](EstabelecimentoApi.md#alterarUsingPUT5) | **PUT** /api/credores/{id} | Alterar Credor
[**cadastrarUsingPOST2**](EstabelecimentoApi.md#cadastrarUsingPOST2) | **POST** /api/credores | Cadastrar Credor
[**cadastrarUsingPOST3**](EstabelecimentoApi.md#cadastrarUsingPOST3) | **POST** /api/pessoas-juridicas | Cadastrar Pessoa Jur\u00C3\u00ADdica
[**consultarUsingGET11**](EstabelecimentoApi.md#consultarUsingGET11) | **GET** /api/credores/{id} | Consultar credor
[**consultarUsingGET15**](EstabelecimentoApi.md#consultarUsingGET15) | **GET** /api/estabelecimentos/{id} | Consultar estabelecimento por id
[**consultarUsingGET20**](EstabelecimentoApi.md#consultarUsingGET20) | **GET** /api/pessoas-juridicas/{id} | Consultar pessoa jur\u00C3\u00ADdica
[**consultarUsingGET26**](EstabelecimentoApi.md#consultarUsingGET26) | **GET** /api/telefones-estabelecimentos/{id} | Apresenta os dados de um determinado telefone de um estabelecimento
[**consultarUsingGET28**](EstabelecimentoApi.md#consultarUsingGET28) | **GET** /api/terminais/{id} | Apresenta os dados de um determinado Terminal
[**listarUsingGET14**](EstabelecimentoApi.md#listarUsingGET14) | **GET** /api/credores | Listar credores
[**listarUsingGET19**](EstabelecimentoApi.md#listarUsingGET19) | **GET** /api/estabelecimentos | Lista Estabelecimentos
[**listarUsingGET24**](EstabelecimentoApi.md#listarUsingGET24) | **GET** /api/pessoas-juridicas | Listar pessoas jur\u00C3\u00ADdicas
[**listarUsingGET33**](EstabelecimentoApi.md#listarUsingGET33) | **GET** /api/telefones-estabelecimentos | Lista os Telefones Estabelecimentos
[**listarUsingGET35**](EstabelecimentoApi.md#listarUsingGET35) | **GET** /api/terminais | Lista os Terminais cadastrados no Emissor
[**salvarUsingPOST19**](EstabelecimentoApi.md#salvarUsingPOST19) | **POST** /api/telefones-estabelecimentos | Realiza o cadastro de um novo telefone para um estabelecimento 
[**salvarUsingPOST21**](EstabelecimentoApi.md#salvarUsingPOST21) | **POST** /api/terminais | Realiza o cadastro de um novo Terminal


<a name="alterarUsingPUT11"></a>
# **alterarUsingPUT11**
> PessoaJuridicaResponse alterarUsingPUT11(id, razaoSocial, opts)

Alterar Pessoa Jur\u00C3\u00ADdica

Altera uma pessoa jur\u00C3\u00ADdica.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da pessoa jur\u00C3\u00ADdica

var razaoSocial = "razaoSocial_example"; // {String} Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica

var opts = { 
  'inscricaoEstadual': "inscricaoEstadual_example", // {String} N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual
  'contato': "contato_example", // {String} Nome da pessoa para entrar em contato
  'banco': 56, // {Integer} C\u00C3\u00B3digo do banco
  'agencia': 56, // {Integer} Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
  'digitoVerificadorAgencia': "digitoVerificadorAgencia_example", // {String} D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia
  'contaCorrente': "contaCorrente_example", // {String} C\u00C3\u00B3digo da Conta Corrente
  'digitoVerificadorContaCorrente': "digitoVerificadorContaCorrente_example" // {String} D\u00C3\u00ADgito Verificador da Conta Corrente
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT11(id, razaoSocial, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da pessoa jur\u00C3\u00ADdica | 
 **razaoSocial** | **String**| Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica | 
 **inscricaoEstadual** | **String**| N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual | [optional] 
 **contato** | **String**| Nome da pessoa para entrar em contato | [optional] 
 **banco** | **Integer**| C\u00C3\u00B3digo do banco | [optional] 
 **agencia** | **Integer**| Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica | [optional] 
 **digitoVerificadorAgencia** | **String**| D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia | [optional] 
 **contaCorrente** | **String**| C\u00C3\u00B3digo da Conta Corrente | [optional] 
 **digitoVerificadorContaCorrente** | **String**| D\u00C3\u00ADgito Verificador da Conta Corrente | [optional] 

### Return type

[**PessoaJuridicaResponse**](PessoaJuridicaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT13"></a>
# **alterarUsingPUT13**
> TelefoneEstabelecimentoResponse alterarUsingPUT13(id, ddd, telefone, opts)

Altera um Telefone do estabelecimento

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos telefones dos estabelecimentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone Estabelecimento (id).

var ddd = "ddd_example"; // {String} C\u00C3\u00B3digo DDD do telefone (id).

var telefone = "telefone_example"; // {String} N\u00C3\u00BAmero do telefone.

var opts = { 
  'ramal': "ramal_example" // {String} N\u00C3\u00BAmero do ramal.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT13(id, ddd, telefone, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone Estabelecimento (id). | 
 **ddd** | **String**| C\u00C3\u00B3digo DDD do telefone (id). | 
 **telefone** | **String**| N\u00C3\u00BAmero do telefone. | 
 **ramal** | **String**| N\u00C3\u00BAmero do ramal. | [optional] 

### Return type

[**TelefoneEstabelecimentoResponse**](TelefoneEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT15"></a>
# **alterarUsingPUT15**
> TerminalResponse alterarUsingPUT15(id, terminalUpdate)

Altera um Terminal

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos Terminais.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal (id).

var terminalUpdate = new Pier.TerminalUpdate(); // {TerminalUpdate} terminalUpdate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT15(id, terminalUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal (id). | 
 **terminalUpdate** | [**TerminalUpdate**](TerminalUpdate.md)| terminalUpdate | 

### Return type

[**TerminalResponse**](TerminalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT5"></a>
# **alterarUsingPUT5**
> CredorResponse alterarUsingPUT5(id, credorUpdate)

Alterar Credor

Altera um credor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da credor

var credorUpdate = new Pier.CredorDTO(); // {CredorDTO} credorUpdate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT5(id, credorUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da credor | 
 **credorUpdate** | [**CredorDTO**](CredorDTO.md)| credorUpdate | 

### Return type

[**CredorResponse**](CredorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarUsingPOST2"></a>
# **cadastrarUsingPOST2**
> CredorResponse cadastrarUsingPOST2(credorPersist)

Cadastrar Credor

Cadastra um credor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var credorPersist = new Pier.CredorDTO(); // {CredorDTO} credorPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarUsingPOST2(credorPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credorPersist** | [**CredorDTO**](CredorDTO.md)| credorPersist | 

### Return type

[**CredorResponse**](CredorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarUsingPOST3"></a>
# **cadastrarUsingPOST3**
> PessoaJuridicaResponse cadastrarUsingPOST3(razaoSocial, cnpj, opts)

Cadastrar Pessoa Jur\u00C3\u00ADdica

Cadastra uma pessoa jur\u00C3\u00ADdica.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var razaoSocial = "razaoSocial_example"; // {String} Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica

var cnpj = "cnpj_example"; // {String} C\u00C3\u00B3digo do Cadastro Nacional de Pessoas Jur\u00C3\u00ADdicas

var opts = { 
  'inscricaoEstadual': "inscricaoEstadual_example", // {String} N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual
  'contato': "contato_example", // {String} Nome da pessoa para entrar em contato
  'banco': 56, // {Integer} C\u00C3\u00B3digo do banco
  'agencia': 56, // {Integer} Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
  'digitoVerificadorAgencia': "digitoVerificadorAgencia_example", // {String} D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia
  'contaCorrente': "contaCorrente_example", // {String} C\u00C3\u00B3digo da Conta Corrente
  'digitoVerificadorContaCorrente': "digitoVerificadorContaCorrente_example" // {String} D\u00C3\u00ADgito Verificador da Conta Corrente
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarUsingPOST3(razaoSocial, cnpj, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **razaoSocial** | **String**| Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica | 
 **cnpj** | **String**| C\u00C3\u00B3digo do Cadastro Nacional de Pessoas Jur\u00C3\u00ADdicas | 
 **inscricaoEstadual** | **String**| N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual | [optional] 
 **contato** | **String**| Nome da pessoa para entrar em contato | [optional] 
 **banco** | **Integer**| C\u00C3\u00B3digo do banco | [optional] 
 **agencia** | **Integer**| Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica | [optional] 
 **digitoVerificadorAgencia** | **String**| D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia | [optional] 
 **contaCorrente** | **String**| C\u00C3\u00B3digo da Conta Corrente | [optional] 
 **digitoVerificadorContaCorrente** | **String**| D\u00C3\u00ADgito Verificador da Conta Corrente | [optional] 

### Return type

[**PessoaJuridicaResponse**](PessoaJuridicaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET11"></a>
# **consultarUsingGET11**
> CredorResponse consultarUsingGET11(id)

Consultar credor

Consulta um credor atrav\u00C3\u00A9s do seu identificador.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da credor


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET11(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da credor | 

### Return type

[**CredorResponse**](CredorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET15"></a>
# **consultarUsingGET15**
> EstabelecimentoResponse consultarUsingGET15(id)

Consultar estabelecimento por id

Consulta os detalhes de um determinado estabelecimento

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET15(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id | 

### Return type

[**EstabelecimentoResponse**](EstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET20"></a>
# **consultarUsingGET20**
> PessoaJuridicaResponse consultarUsingGET20(id)

Consultar pessoa jur\u00C3\u00ADdica

Consulta uma pessoa jur\u00C3\u00ADdica atrav\u00C3\u00A9s do seu identificador.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da pessoa jur\u00C3\u00ADdica


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET20(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da pessoa jur\u00C3\u00ADdica | 

### Return type

[**PessoaJuridicaResponse**](PessoaJuridicaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET26"></a>
# **consultarUsingGET26**
> TelefoneEstabelecimentoResponse consultarUsingGET26(id)

Apresenta os dados de um determinado telefone de um estabelecimento

Este m\u00C3\u00A9todo permite consultar um determinado telefone de um estabelecimento a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone Estabelecimento (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET26(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone Estabelecimento (id). | 

### Return type

[**TelefoneEstabelecimentoResponse**](TelefoneEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET28"></a>
# **consultarUsingGET28**
> TerminalResponse consultarUsingGET28(id)

Apresenta os dados de um determinado Terminal

Este m\u00C3\u00A9todo permite consultar um determinado Terminal a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET28(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id). | 

### Return type

[**TerminalResponse**](TerminalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET14"></a>
# **listarUsingGET14**
> PageCredorResponse listarUsingGET14(opts)

Listar credores

Lista credores cadastrados. 

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idPessoaJuridica': 789, // {Integer} Identificador da pessoa jur\u00C3\u00ADdica do credor
  'nome': "nome_example", // {String} Nome do credor
  'periodicidade': "periodicidade_example", // {String} Periodicidade do pagamento
  'pagamentoSemanal': "pagamentoSemanal_example", // {String} Dia para pagamento semanal
  'pagamentoMensal': 56, // {Integer} Dia da data para o pagamento mensal
  'pagamentoDecendialPrimeiro': 56, // {Integer} Dia da data para o primeiro pagamento decendial
  'pagamentoDecendialSegundo': 56, // {Integer} Dia da data para o segundo pagamento decendial
  'pagamentoDecendialTerceiro': 56, // {Integer} Dia da data para o terceiro pagamento decendial
  'pagamentoQuinzenalPrimeiro': 56, // {Integer} Dia da data para o primeiro pagamento quinzenal
  'pagamentoQuinzenalSegundo': 56, // {Integer} Dia da data para o segundo pagamento quinzenal
  'credorBanco': true, // {Boolean} Indica se este credor pode ser um Credor RAV de outros credores
  'percentualRAV': 3.4, // {Number} Valor percentual do RAV do credor
  'recebeRAV': "recebeRAV_example", // {String} Indica se o credor recebe RAV e o tipo
  'percentualMultiplica': 3.4, // {Number} Percentual Multiplica
  'taxaAdm': 3.4, // {Number} Taxa Administrativa
  'taxaBanco': 3.4, // {Number} Taxa do Banco
  'limiteRAV': 3.4, // {Number} Valor limite do RAV
  'idCredorRAV': 789, // {Integer} C\u00C3\u00B3digo identificador do credor RAV
  'banco': 56, // {Integer} C\u00C3\u00B3digo do banco
  'agencia': 56, // {Integer} Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
  'digitoVerificadorAgencia': "digitoVerificadorAgencia_example", // {String} D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia
  'contaCorrente': "contaCorrente_example", // {String} C\u00C3\u00B3digo da Conta Corrente
  'digitoVerificadorContaCorrente': "digitoVerificadorContaCorrente_example" // {String} D\u00C3\u00ADgito Verificador da Conta Corrente
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET14(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idPessoaJuridica** | **Integer**| Identificador da pessoa jur\u00C3\u00ADdica do credor | [optional] 
 **nome** | **String**| Nome do credor | [optional] 
 **periodicidade** | **String**| Periodicidade do pagamento | [optional] 
 **pagamentoSemanal** | **String**| Dia para pagamento semanal | [optional] 
 **pagamentoMensal** | **Integer**| Dia da data para o pagamento mensal | [optional] 
 **pagamentoDecendialPrimeiro** | **Integer**| Dia da data para o primeiro pagamento decendial | [optional] 
 **pagamentoDecendialSegundo** | **Integer**| Dia da data para o segundo pagamento decendial | [optional] 
 **pagamentoDecendialTerceiro** | **Integer**| Dia da data para o terceiro pagamento decendial | [optional] 
 **pagamentoQuinzenalPrimeiro** | **Integer**| Dia da data para o primeiro pagamento quinzenal | [optional] 
 **pagamentoQuinzenalSegundo** | **Integer**| Dia da data para o segundo pagamento quinzenal | [optional] 
 **credorBanco** | **Boolean**| Indica se este credor pode ser um Credor RAV de outros credores | [optional] 
 **percentualRAV** | [**Number**](.md)| Valor percentual do RAV do credor | [optional] 
 **recebeRAV** | **String**| Indica se o credor recebe RAV e o tipo | [optional] 
 **percentualMultiplica** | [**Number**](.md)| Percentual Multiplica | [optional] 
 **taxaAdm** | [**Number**](.md)| Taxa Administrativa | [optional] 
 **taxaBanco** | [**Number**](.md)| Taxa do Banco | [optional] 
 **limiteRAV** | [**Number**](.md)| Valor limite do RAV | [optional] 
 **idCredorRAV** | **Integer**| C\u00C3\u00B3digo identificador do credor RAV | [optional] 
 **banco** | **Integer**| C\u00C3\u00B3digo do banco | [optional] 
 **agencia** | **Integer**| Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica | [optional] 
 **digitoVerificadorAgencia** | **String**| D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia | [optional] 
 **contaCorrente** | **String**| C\u00C3\u00B3digo da Conta Corrente | [optional] 
 **digitoVerificadorContaCorrente** | **String**| D\u00C3\u00ADgito Verificador da Conta Corrente | [optional] 

### Return type

[**PageCredorResponse**](PageCredorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET19"></a>
# **listarUsingGET19**
> PageEstabelecimentoResponse listarUsingGET19(opts)

Lista Estabelecimentos

Lista todas os Estabelecimentos

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id).
  'numeroReceitaFederal': 789, // {Integer} Apresenta o n\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento na Receita Federal.
  'nome': "nome_example", // {String} Nome do Estabelecimento.
  'descricao': "descricao_example", // {String} Raz\u00C3\u00A3o Social do Estabelecimento.
  'nomeFantasia': "nomeFantasia_example", // {String} T\u00C3\u00ADtulo Comercial do Estabelecimento.
  'cep': "cep_example", // {String} C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP).
  'nomeLogradouro': "nomeLogradouro_example", // {String} Nome do Logradouro.
  'numeroEndereco': 789, // {Integer} N\u00C3\u00BAmero do endere\u00C3\u00A7o.
  'complemento': "complemento_example", // {String} Descri\u00C3\u00A7\u00C3\u00B5es complementares referente ao endere\u00C3\u00A7o.
  'bairro': "bairro_example", // {String} Nome do bairro do endere\u00C3\u00A7o.
  'cidade': "cidade_example", // {String} Nome da cidade do endere\u00C3\u00A7o.
  'uf': "uf_example", // {String} Sigla de identifica\u00C3\u00A7\u00C3\u00A3o da Unidade Federativa do endere\u00C3\u00A7o.
  'pais': "pais_example", // {String} Nome do pa\u00C3\u00ADs.
  'dataCadastramento': "dataCadastramento_example", // {String} Data de Cadastro do Estabelecimento, no formato yyyy-MM-dd.
  'contato': "contato_example", // {String} Nome da pessoa para contato com o Estabelecimento.
  'email': "email_example", // {String} E-mail da pessoa para contato com o Estabelecimento.
  'flagArquivoSecrFazenda': 56, // {Integer} Indica se o estabelecimento ser\u00C3\u00A1 inclu\u00C3\u00ADdo no arquivo de registro para a Secretaria da Fazenda Estadual.
  'flagCartaoDigitado': 56, // {Integer} Indica se o estabelecimento poder\u00C3\u00A1 originar transa\u00C3\u00A7\u00C3\u00B5es sem a leitura da tarja ou do chip do cart\u00C3\u00A3o.
  'inativo': 56 // {Integer} Indica se o estabelecimento est\u00C3\u00A1 inativo.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET19(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id). | [optional] 
 **numeroReceitaFederal** | **Integer**| Apresenta o n\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento na Receita Federal. | [optional] 
 **nome** | **String**| Nome do Estabelecimento. | [optional] 
 **descricao** | **String**| Raz\u00C3\u00A3o Social do Estabelecimento. | [optional] 
 **nomeFantasia** | **String**| T\u00C3\u00ADtulo Comercial do Estabelecimento. | [optional] 
 **cep** | **String**| C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP). | [optional] 
 **nomeLogradouro** | **String**| Nome do Logradouro. | [optional] 
 **numeroEndereco** | **Integer**| N\u00C3\u00BAmero do endere\u00C3\u00A7o. | [optional] 
 **complemento** | **String**| Descri\u00C3\u00A7\u00C3\u00B5es complementares referente ao endere\u00C3\u00A7o. | [optional] 
 **bairro** | **String**| Nome do bairro do endere\u00C3\u00A7o. | [optional] 
 **cidade** | **String**| Nome da cidade do endere\u00C3\u00A7o. | [optional] 
 **uf** | **String**| Sigla de identifica\u00C3\u00A7\u00C3\u00A3o da Unidade Federativa do endere\u00C3\u00A7o. | [optional] 
 **pais** | **String**| Nome do pa\u00C3\u00ADs. | [optional] 
 **dataCadastramento** | **String**| Data de Cadastro do Estabelecimento, no formato yyyy-MM-dd. | [optional] 
 **contato** | **String**| Nome da pessoa para contato com o Estabelecimento. | [optional] 
 **email** | **String**| E-mail da pessoa para contato com o Estabelecimento. | [optional] 
 **flagArquivoSecrFazenda** | **Integer**| Indica se o estabelecimento ser\u00C3\u00A1 inclu\u00C3\u00ADdo no arquivo de registro para a Secretaria da Fazenda Estadual. | [optional] 
 **flagCartaoDigitado** | **Integer**| Indica se o estabelecimento poder\u00C3\u00A1 originar transa\u00C3\u00A7\u00C3\u00B5es sem a leitura da tarja ou do chip do cart\u00C3\u00A3o. | [optional] 
 **inativo** | **Integer**| Indica se o estabelecimento est\u00C3\u00A1 inativo. | [optional] 

### Return type

[**PageEstabelecimentoResponse**](PageEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET24"></a>
# **listarUsingGET24**
> PagePessoaJuridicaResponse listarUsingGET24(opts)

Listar pessoas jur\u00C3\u00ADdicas

Lista pessoas jur\u00C3\u00ADdicas cadastradas. 

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'razaoSocial': "razaoSocial_example", // {String} Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
  'cnpj': "cnpj_example", // {String} C\u00C3\u00B3digo do Cadastro Nacional de Pessoas Jur\u00C3\u00ADdicas
  'inscricaoEstadual': "inscricaoEstadual_example", // {String} N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual
  'contato': "contato_example", // {String} Nome da pessoa para entrar em contato
  'banco': 56, // {Integer} C\u00C3\u00B3digo do banco
  'agencia': 56, // {Integer} Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
  'digitoVerificadorAgencia': "digitoVerificadorAgencia_example", // {String} D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia
  'contaCorrente': "contaCorrente_example", // {String} C\u00C3\u00B3digo da Conta Corrente
  'digitoVerificadorContaCorrente': "digitoVerificadorContaCorrente_example" // {String} D\u00C3\u00ADgito Verificador da Conta Corrente
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **razaoSocial** | **String**| Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica | [optional] 
 **cnpj** | **String**| C\u00C3\u00B3digo do Cadastro Nacional de Pessoas Jur\u00C3\u00ADdicas | [optional] 
 **inscricaoEstadual** | **String**| N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual | [optional] 
 **contato** | **String**| Nome da pessoa para entrar em contato | [optional] 
 **banco** | **Integer**| C\u00C3\u00B3digo do banco | [optional] 
 **agencia** | **Integer**| Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica | [optional] 
 **digitoVerificadorAgencia** | **String**| D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia | [optional] 
 **contaCorrente** | **String**| C\u00C3\u00B3digo da Conta Corrente | [optional] 
 **digitoVerificadorContaCorrente** | **String**| D\u00C3\u00ADgito Verificador da Conta Corrente | [optional] 

### Return type

[**PagePessoaJuridicaResponse**](PagePessoaJuridicaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET33"></a>
# **listarUsingGET33**
> PageTelefoneEstabelecimentoResponse listarUsingGET33(opts)

Lista os Telefones Estabelecimentos

Este m\u00C3\u00A9todo permite que sejam listados os telefones dos estabelecimentos existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idEstabelecimento': 789 // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Estabelecimento (id).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET33(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idEstabelecimento** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Estabelecimento (id). | [optional] 

### Return type

[**PageTelefoneEstabelecimentoResponse**](PageTelefoneEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET35"></a>
# **listarUsingGET35**
> PageTerminalResponse listarUsingGET35(opts)

Lista os Terminais cadastrados no Emissor

Este m\u00C3\u00A9todo permite que sejam listados os terminais existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).
  'terminal': "terminal_example", // {String} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal.
  'numeroEstabelecimento': 789, // {Integer} N\u00C3\u00BAmero do estabelecimento a qual o terminal pertence.
  'idEstabelecimento': 789 // {Integer} N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento a qual o terminal pertence.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET35(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id). | [optional] 
 **terminal** | **String**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal. | [optional] 
 **numeroEstabelecimento** | **Integer**| N\u00C3\u00BAmero do estabelecimento a qual o terminal pertence. | [optional] 
 **idEstabelecimento** | **Integer**| N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento a qual o terminal pertence. | [optional] 

### Return type

[**PageTerminalResponse**](PageTerminalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST19"></a>
# **salvarUsingPOST19**
> TelefoneEstabelecimentoResponse salvarUsingPOST19(idEstabelecimento, ddd, telefone, opts)

Realiza o cadastro de um novo telefone para um estabelecimento 

Este m\u00C3\u00A9todo permite que seja cadastrado um novo telefone para um estabelecimento.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var idEstabelecimento = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento (id).

var ddd = "ddd_example"; // {String} C\u00C3\u00B3digo DDD do telefone (id).

var telefone = "telefone_example"; // {String} N\u00C3\u00BAmero do telefone.

var opts = { 
  'ramal': "ramal_example" // {String} N\u00C3\u00BAmero do ramal.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST19(idEstabelecimento, ddd, telefone, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idEstabelecimento** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento (id). | 
 **ddd** | **String**| C\u00C3\u00B3digo DDD do telefone (id). | 
 **telefone** | **String**| N\u00C3\u00BAmero do telefone. | 
 **ramal** | **String**| N\u00C3\u00BAmero do ramal. | [optional] 

### Return type

[**TelefoneEstabelecimentoResponse**](TelefoneEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST21"></a>
# **salvarUsingPOST21**
> TerminalResponse salvarUsingPOST21(idEstabelecimento, flagConsultaExtrato, flagTerminalVirtual)

Realiza o cadastro de um novo Terminal

Este m\u00C3\u00A9todo permite que seja cadastrado um novo Terminal.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var idEstabelecimento = 789; // {Integer} Apresenta o id do estabelecimento.

var flagConsultaExtrato = true; // {Boolean} Flag indicando se o terminal \u00C3\u00A9 f\u00C3\u00ADsico ou virtual, sendo: (true: Sim), (false: N\u00C3\u00A3o)).

var flagTerminalVirtual = true; // {Boolean} Flag indicando se o terminal permite consultar extrato, sendo: (true: Sim), (false: N\u00C3\u00A3o)).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST21(idEstabelecimento, flagConsultaExtrato, flagTerminalVirtual, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idEstabelecimento** | **Integer**| Apresenta o id do estabelecimento. | 
 **flagConsultaExtrato** | **Boolean**| Flag indicando se o terminal \u00C3\u00A9 f\u00C3\u00ADsico ou virtual, sendo: (true: Sim), (false: N\u00C3\u00A3o)). | 
 **flagTerminalVirtual** | **Boolean**| Flag indicando se o terminal permite consultar extrato, sendo: (true: Sim), (false: N\u00C3\u00A3o)). | 

### Return type

[**TerminalResponse**](TerminalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

