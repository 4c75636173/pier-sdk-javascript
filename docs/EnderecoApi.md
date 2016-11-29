# Pier.EnderecoApi

All URIs are relative to *https://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT**](EnderecoApi.md#alterarUsingPUT) | **PUT** /api/enderecos | Atualiza os dados de um determinado Endere\u00C3\u00A7o
[**consultarUsingGET2**](EnderecoApi.md#consultarUsingGET2) | **GET** /api/enderecos/{id_endereco} | Apresenta os dados de um determinado Endere\u00C3\u00A7o
[**listarUsingGET2**](EnderecoApi.md#listarUsingGET2) | **GET** /api/enderecos | Lista os Endere\u00C3\u00A7os cadastrados para o Emissor
[**salvarUsingPOST**](EnderecoApi.md#salvarUsingPOST) | **POST** /api/enderecos | Realiza o cadastro de um novo Endere\u00C3\u00A7o


<a name="alterarUsingPUT"></a>
# **alterarUsingPUT**
> Endereco alterarUsingPUT(id, opts)

Atualiza os dados de um determinado Endere\u00C3\u00A7o

Este m\u00C3\u00A9todo permite que seja alterado na base do emissor um ou mais registros ligados a um determinado Endere\u00C3\u00A7o.

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.EnderecoApi()

var id = 789; // {Integer} id

var opts = { 
  'idPessoa': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id)
  'idTipoEndereco': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id)
  'cep': "cep_example", // {String} Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) no formaro '58800000'
  'logradouro': "logradouro_example", // {String} Apresenta o nome do Logradouro
  'numero': 56, // {Integer} Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o
  'complemento': "complemento_example", // {String} Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o
  'pontoReferencia': "pontoReferencia_example", // {String} Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o
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
api.alterarUsingPUT(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| id | 
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id) | [optional] 
 **idTipoEndereco** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id) | [optional] 
 **cep** | **String**| Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) no formaro &#39;58800000&#39; | [optional] 
 **logradouro** | **String**| Apresenta o nome do Logradouro | [optional] 
 **numero** | **Integer**| Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o | [optional] 
 **complemento** | **String**| Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o | [optional] 
 **pontoReferencia** | **String**| Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o | [optional] 
 **bairro** | **String**| Apresenta nome do bairro | [optional] 
 **cidade** | **String**| Apresenta nome da cidade | [optional] 
 **uf** | **String**| Apresenta sigla da Unidade Federativa | [optional] 
 **pais** | **String**| Apresenta nome do Pais | [optional] 

### Return type

[**Endereco**](Endereco.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET2"></a>
# **consultarUsingGET2**
> Endereco consultarUsingGET2(idEndereco)

Apresenta os dados de um determinado Endere\u00C3\u00A7o

Este m\u00C3\u00A9todo permite consultar um determinado Endere\u00C3\u00A7o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.EnderecoApi()

var idEndereco = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET2(idEndereco, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idEndereco** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id). | 

### Return type

[**Endereco**](Endereco.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET2"></a>
# **listarUsingGET2**
> PageEnderecos listarUsingGET2(opts)

Lista os Endere\u00C3\u00A7os cadastrados para o Emissor

Este m\u00C3\u00A9todo permite que sejam listados os Endere\u00C3\u00A7os existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.EnderecoApi()

var opts = { 
  'id': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id).
  'idPessoa': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id)
  'idTipoEndereco': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id)
  'cep': "cep_example", // {String} Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP)
  'logradouro': "logradouro_example", // {String} Apresenta o nome do Logradouro
  'numero': 56, // {Integer} Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o
  'complemento': "complemento_example", // {String} Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o
  'pontoReferencia': "pontoReferencia_example", // {String} Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o
  'bairro': "bairro_example", // {String} Apresenta nome do bairro
  'cidade': "cidade_example", // {String} Apresenta nome da cidade
  'uf': "uf_example", // {String} Apresenta sigla da Unidade Federativa
  'pais': "pais_example", // {String} Apresenta nome do Pais
  'dataInclusao': new Pier.ModelDate(), // {ModelDate} Apresenta a data em que fora cadastrado o Endere\u00C3\u00A7o
  'dataUltimaAtualizacao': new Pier.ModelDate(), // {ModelDate} Data em que fora realizada a \u00C3\u00BAltima mudan\u00C3\u00A7a neste registro de endere\u00C3\u00A7o. Quando n\u00C3\u00A3o tiver ocorrido mudan\u00C3\u00A7a, conter\u00C3\u00A1 a mesma informa\u00C3\u00A7\u00C3\u00A3o que o campo dataInclusao
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET2(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id). | [optional] 
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id) | [optional] 
 **idTipoEndereco** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id) | [optional] 
 **cep** | **String**| Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) | [optional] 
 **logradouro** | **String**| Apresenta o nome do Logradouro | [optional] 
 **numero** | **Integer**| Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o | [optional] 
 **complemento** | **String**| Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o | [optional] 
 **pontoReferencia** | **String**| Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o | [optional] 
 **bairro** | **String**| Apresenta nome do bairro | [optional] 
 **cidade** | **String**| Apresenta nome da cidade | [optional] 
 **uf** | **String**| Apresenta sigla da Unidade Federativa | [optional] 
 **pais** | **String**| Apresenta nome do Pais | [optional] 
 **dataInclusao** | **ModelDate**| Apresenta a data em que fora cadastrado o Endere\u00C3\u00A7o | [optional] 
 **dataUltimaAtualizacao** | **ModelDate**| Data em que fora realizada a \u00C3\u00BAltima mudan\u00C3\u00A7a neste registro de endere\u00C3\u00A7o. Quando n\u00C3\u00A3o tiver ocorrido mudan\u00C3\u00A7a, conter\u00C3\u00A1 a mesma informa\u00C3\u00A7\u00C3\u00A3o que o campo dataInclusao | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 100, Max = 100) | [optional] 

### Return type

[**PageEnderecos**](PageEnderecos.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST"></a>
# **salvarUsingPOST**
> Endereco salvarUsingPOST(opts)

Realiza o cadastro de um novo Endere\u00C3\u00A7o

Este m\u00C3\u00A9todo permite que seja cadastrado um novo Endere\u00C3\u00A7o na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');
var defaultClient = Pier.ApiClient.default;

// Configure API key authorization: access_token
var access_token = defaultClient.authentications['access_token'];
access_token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//access_token.apiKeyPrefix['access_token'] = "Token"

var apiInstance = new Pier.EnderecoApi()

var opts = { 
  'idPessoa': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id)
  'idTipoEndereco': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id)
  'cep': "cep_example", // {String} Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) no formaro '58800000'
  'logradouro': "logradouro_example", // {String} Apresenta o nome do Logradouro
  'numero': 56, // {Integer} Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o
  'complemento': "complemento_example", // {String} Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o
  'pontoReferencia': "pontoReferencia_example", // {String} Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o
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
api.salvarUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idPessoa** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Pessoa a qual o endere\u00C3\u00A7o pertence (id) | [optional] 
 **idTipoEndereco** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Tipo Endere\u00C3\u00A7o (id) | [optional] 
 **cep** | **String**| Apresenta o C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP) no formaro &#39;58800000&#39; | [optional] 
 **logradouro** | **String**| Apresenta o nome do Logradouro | [optional] 
 **numero** | **Integer**| Apresenta o n\u00C3\u00BAmero do endere\u00C3\u00A7o | [optional] 
 **complemento** | **String**| Apresenta descri\u00C3\u00A7oes complementares referente ao endere\u00C3\u00A7o | [optional] 
 **pontoReferencia** | **String**| Apresenta a descri\u00C3\u00A7\u00C3\u00A3o de ponto de refer\u00C3\u00AAncia do endere\u00C3\u00A7o | [optional] 
 **bairro** | **String**| Apresenta nome do bairro | [optional] 
 **cidade** | **String**| Apresenta nome da cidade | [optional] 
 **uf** | **String**| Apresenta sigla da Unidade Federativa | [optional] 
 **pais** | **String**| Apresenta nome do Pais | [optional] 

### Return type

[**Endereco**](Endereco.md)

### Authorization

[access_token](../README.md#access_token)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

