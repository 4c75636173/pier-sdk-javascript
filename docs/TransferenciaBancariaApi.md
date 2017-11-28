# Pier.TransferenciaBancariaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**atualizarUsingPUT1**](TransferenciaBancariaApi.md#atualizarUsingPUT1) | **PUT** /api/contas-bancarias-portador/{id} | Atualiza conta banc\u00C3\u00A1ria portador
[**consultarUsingGET9**](TransferenciaBancariaApi.md#consultarUsingGET9) | **GET** /api/contas-bancarias-portador/{id} | Consulta conta banc\u00C3\u00A1ria portador
[**listarUsingGET11**](TransferenciaBancariaApi.md#listarUsingGET11) | **GET** /api/contas-bancarias-portador | Lista contas banc\u00C3\u00A1rias portador
[**salvarUsingPOST7**](TransferenciaBancariaApi.md#salvarUsingPOST7) | **POST** /api/contas-bancarias-portador | Cadastra uma conta banc\u00C3\u00A1ria do portador


<a name="atualizarUsingPUT1"></a>
# **atualizarUsingPUT1**
> ContaBancariaPortadorResponse atualizarUsingPUT1(id, update)

Atualiza conta banc\u00C3\u00A1ria portador

Esse recurso permite atualizar uma conta banc\u00C3\u00A1ria do portador.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria do portador (id).

var update = new Pier.ContaBancariaPortadorUpdate(); // {ContaBancariaPortadorUpdate} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT1(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria do portador (id). | 
 **update** | [**ContaBancariaPortadorUpdate**](ContaBancariaPortadorUpdate.md)| update | 

### Return type

[**ContaBancariaPortadorResponse**](ContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET9"></a>
# **consultarUsingGET9**
> ContaBancariaPortadorResponse consultarUsingGET9(id)

Consulta conta banc\u00C3\u00A1ria portador

Esse recurso permite consultar uma conta banc\u00C3\u00A1ria do portador a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET9(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da conta banc\u00C3\u00A1ria (id). | 

### Return type

[**ContaBancariaPortadorResponse**](ContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET11"></a>
# **listarUsingGET11**
> PageContaBancariaPortadorResponse listarUsingGET11(opts)

Lista contas banc\u00C3\u00A1rias portador

Esse recurso permite listar contas banc\u00C3\u00A1rias do portador.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var opts = { 
  'idConta': 789, // {Integer} C\u00C3\u00B3digo identificador da conta cart\u00C3\u00A3o
  'nomeAgencia': "nomeAgencia_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o da ag\u00C3\u00AAncia
  'numeroAgencia': "numeroAgencia_example", // {String} N\u00C3\u00BAmero da ag\u00C3\u00AAncia
  'numeroConta': "numeroConta_example", // {String} N\u00C3\u00BAmero da conta
  'flagContaOrigemDoc': 56, // {Integer} Sinaliza se origem \u00C3\u00A9 DOC (1: DOC, 0: TED)
  'idPessoaFisica': 789, // {Integer} C\u00C3\u00B3digo da pessoa
  'favorecido': "favorecido_example", // {String} Nome do favorecido
  'numeroReceiraFederal': "numeroReceiraFederal_example", // {String} Documento do favorecido
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
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
 **idConta** | **Integer**| C\u00C3\u00B3digo identificador da conta cart\u00C3\u00A3o | [optional] 
 **nomeAgencia** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o da ag\u00C3\u00AAncia | [optional] 
 **numeroAgencia** | **String**| N\u00C3\u00BAmero da ag\u00C3\u00AAncia | [optional] 
 **numeroConta** | **String**| N\u00C3\u00BAmero da conta | [optional] 
 **flagContaOrigemDoc** | **Integer**| Sinaliza se origem \u00C3\u00A9 DOC (1: DOC, 0: TED) | [optional] 
 **idPessoaFisica** | **Integer**| C\u00C3\u00B3digo da pessoa | [optional] 
 **favorecido** | **String**| Nome do favorecido | [optional] 
 **numeroReceiraFederal** | **String**| Documento do favorecido | [optional] 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageContaBancariaPortadorResponse**](PageContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST7"></a>
# **salvarUsingPOST7**
> ContaBancariaPortadorResponse salvarUsingPOST7(persist)

Cadastra uma conta banc\u00C3\u00A1ria do portador

Esse recurso permite cadastrar contas banc\u00C3\u00A1rias do portador.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.TransferenciaBancariaApi()

var persist = new Pier.ContaBancariaPortadorPersist(); // {ContaBancariaPortadorPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST7(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**ContaBancariaPortadorPersist**](ContaBancariaPortadorPersist.md)| persist | 

### Return type

[**ContaBancariaPortadorResponse**](ContaBancariaPortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

