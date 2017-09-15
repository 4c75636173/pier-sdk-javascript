# Pier.EstabelecimentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET18**](EstabelecimentoApi.md#consultarUsingGET18) | **GET** /api/terminais/{id} | Apresenta os dados de um determinado Terminal
[**consultarUsingGET8**](EstabelecimentoApi.md#consultarUsingGET8) | **GET** /api/estabelecimentos/{id} | Consultar estabelecimento por id
[**listarUsingGET11**](EstabelecimentoApi.md#listarUsingGET11) | **GET** /api/estabelecimentos | Lista Estabelecimentos
[**listarUsingGET25**](EstabelecimentoApi.md#listarUsingGET25) | **GET** /api/terminais | Lista os Terminais cadastrados no Emissor


<a name="consultarUsingGET18"></a>
# **consultarUsingGET18**
> TerminalResponse consultarUsingGET18(id)

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
api.consultarUsingGET18(id, callback);
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

<a name="consultarUsingGET8"></a>
# **consultarUsingGET8**
> EstabelecimentoResponse consultarUsingGET8(id)

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
api.consultarUsingGET8(id, callback);
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

<a name="listarUsingGET11"></a>
# **listarUsingGET11**
> PageEstabelecimentoResponse listarUsingGET11(opts)

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
api.listarUsingGET11(opts, callback);
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

<a name="listarUsingGET25"></a>
# **listarUsingGET25**
> PageTerminalResponse listarUsingGET25(opts)

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
api.listarUsingGET25(opts, callback);
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

