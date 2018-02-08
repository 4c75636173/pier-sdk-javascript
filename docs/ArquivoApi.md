# Pier.ArquivoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET2**](ArquivoApi.md#consultarUsingGET2) | **GET** /api/arquivos/{id} | Consulta de arquivo no PIER Cloud
[**integrarUsingPOST**](ArquivoApi.md#integrarUsingPOST) | **POST** /api/arquivos/integrar | Integrar Arquivos
[**listarUsingGET3**](ArquivoApi.md#listarUsingGET3) | **GET** /api/arquivos/{id}/auditorias | Lista as auditorias do arquivo
[**listarUsingGET4**](ArquivoApi.md#listarUsingGET4) | **GET** /api/arquivos | Listar arquivos do Pier Cloud
[**salvarUsingPOST1**](ArquivoApi.md#salvarUsingPOST1) | **POST** /api/arquivos | Permite armazenar arquivos no PIER Cloud


<a name="consultarUsingGET2"></a>
# **consultarUsingGET2**
> ArquivoDetalheResponse consultarUsingGET2(id)

Consulta de arquivo no PIER Cloud

Este recurso permite consultar um determinado arquivo armazenado no PIER Cloud.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ArquivoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do arquivo


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET2(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do arquivo | 

### Return type

[**ArquivoDetalheResponse**](ArquivoDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="integrarUsingPOST"></a>
# **integrarUsingPOST**
> Object integrarUsingPOST(integrarArquivoRequest)

Integrar Arquivos

Este recurso foi desenvolvido para realizar a integra\u00C3\u00A7\u00C3\u00A3o de arquivos do PIER Cloud junto a reposit\u00C3\u00B3rios externos pr\u00C3\u00A9-configurado.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ArquivoApi()

var integrarArquivoRequest = new Pier.IntegrarArquivoRequest(); // {IntegrarArquivoRequest} integrarArquivoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.integrarUsingPOST(integrarArquivoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrarArquivoRequest** | [**IntegrarArquivoRequest**](IntegrarArquivoRequest.md)| integrarArquivoRequest | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET3"></a>
# **listarUsingGET3**
> PageArquivoAUDResponse listarUsingGET3(id, opts)

Lista as auditorias do arquivo

Este recurso permite listar as auditorias de um determinado arquivo a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ArquivoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do arquivo

var opts = { 
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
api.listarUsingGET3(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do arquivo | 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageArquivoAUDResponse**](PageArquivoAUDResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET4"></a>
# **listarUsingGET4**
> PageArquivoResponse listarUsingGET4(opts)

Listar arquivos do Pier Cloud

Este recurso permite a listagem de todos os arquivos dispon\u00C3\u00ADveis no Pier Cloud.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ArquivoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'nome': "nome_example", // {String} Nome do arquivo
  'idTipoArquivo': 789, // {Integer} Tipo do arquivo
  'idStatusArquivo': 789, // {Integer} Identificador do status do arquivo
  'extensao': "extensao_example" // {String} Extens\u00C3\u00A3o do arquivo
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET4(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **nome** | **String**| Nome do arquivo | [optional] 
 **idTipoArquivo** | **Integer**| Tipo do arquivo | [optional] 
 **idStatusArquivo** | **Integer**| Identificador do status do arquivo | [optional] 
 **extensao** | **String**| Extens\u00C3\u00A3o do arquivo | [optional] 

### Return type

[**PageArquivoResponse**](PageArquivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST1"></a>
# **salvarUsingPOST1**
> ArquivoDetalheResponse salvarUsingPOST1(arquivoPersist)

Permite armazenar arquivos no PIER Cloud

Este recurso permite o armazenamento de arquivos no PIER Cloud.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ArquivoApi()

var arquivoPersist = new Pier.ArquivoPersist(); // {ArquivoPersist} arquivoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST1(arquivoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **arquivoPersist** | [**ArquivoPersist**](ArquivoPersist.md)| arquivoPersist | 

### Return type

[**ArquivoDetalheResponse**](ArquivoDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

