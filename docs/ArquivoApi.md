# Pier.ArquivoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET3**](ArquivoApi.md#consultarUsingGET3) | **GET** /api/arquivos/{id} | Consulta de arquivo no PIER Cloud
[**integrarUsingPOST**](ArquivoApi.md#integrarUsingPOST) | **POST** /api/arquivos/integrar | Integrar Arquivos
[**listarPorNumeroReceitaFederalUsingGET**](ArquivoApi.md#listarPorNumeroReceitaFederalUsingGET) | **GET** /api/arquivos-auditorias | Lista as auditorias de arquivos vinculadas a um N\u00FAmero da Receita Federal
[**listarStatusArquivosUsingGET**](ArquivoApi.md#listarStatusArquivosUsingGET) | **GET** /api/status-arquivos | Listar Status de Arquivo
[**listarTiposArquivosUsingGET**](ArquivoApi.md#listarTiposArquivosUsingGET) | **GET** /api/tipos-arquivos | Listar Tipos de Arquivo
[**listarUsingGET4**](ArquivoApi.md#listarUsingGET4) | **GET** /api/arquivos/{id}/auditorias | Lista as auditorias do arquivo
[**listarUsingGET5**](ArquivoApi.md#listarUsingGET5) | **GET** /api/arquivos | Listar arquivos do Pier Cloud
[**salvarUsingPOST1**](ArquivoApi.md#salvarUsingPOST1) | **POST** /api/arquivos | Permite armazenar arquivos no PIER Cloud


<a name="consultarUsingGET3"></a>
# **consultarUsingGET3**
> ArquivoDetalheResponse consultarUsingGET3(id)

Consulta de arquivo no PIER Cloud

Este recurso permite consultar um determinado arquivo armazenado no PIER Cloud.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ArquivoApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do arquivo


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET3(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do arquivo | 

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

Este recurso foi desenvolvido para realizar a integra\u00E7\u00E3o de arquivos do PIER Cloud junto a reposit\u00F3rios externos pr\u00E9-configurado.

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

<a name="listarPorNumeroReceitaFederalUsingGET"></a>
# **listarPorNumeroReceitaFederalUsingGET**
> PageArquivoAUDResponse listarPorNumeroReceitaFederalUsingGET(numeroReceitaFederal, opts)

Lista as auditorias de arquivos vinculadas a um N\u00FAmero da Receita Federal

Este recurso permite listar as auditorias de arquivos vinculadas a um N\u00FAmero da Receita Federal que ser\u00E1 passado como par\u00E2metro.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ArquivoApi()

var numeroReceitaFederal = "numeroReceitaFederal_example"; // {String} Par\u00E2metro vinculado a um arquivo no ato de seu cadastro

var opts = { 
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
api.listarPorNumeroReceitaFederalUsingGET(numeroReceitaFederal, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numeroReceitaFederal** | **String**| Par\u00E2metro vinculado a um arquivo no ato de seu cadastro | 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageArquivoAUDResponse**](PageArquivoAUDResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarStatusArquivosUsingGET"></a>
# **listarStatusArquivosUsingGET**
> PageStatusArquivoResponse listarStatusArquivosUsingGET(opts)

Listar Status de Arquivo

Este recurso permite a listagem de todos os Status de Arquivo.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ArquivoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'nome': "nome_example", // {String} Nome do status de arquivo
  'descricao': "descricao_example" // {String} Descri\u00E7\u00E3o do status de arquivo
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarStatusArquivosUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **nome** | **String**| Nome do status de arquivo | [optional] 
 **descricao** | **String**| Descri\u00E7\u00E3o do status de arquivo | [optional] 

### Return type

[**PageStatusArquivoResponse**](PageStatusArquivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposArquivosUsingGET"></a>
# **listarTiposArquivosUsingGET**
> PageTipoArquivoResponse listarTiposArquivosUsingGET(opts)

Listar Tipos de Arquivo

Este recurso permite a listagem de todos os Tipos de Arquivo.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ArquivoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'nome': "nome_example", // {String} Nome do tipo de arquivo
  'descricao': "descricao_example" // {String} Descri\u00E7\u00E3o do tipo de arquivo
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTiposArquivosUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **nome** | **String**| Nome do tipo de arquivo | [optional] 
 **descricao** | **String**| Descri\u00E7\u00E3o do tipo de arquivo | [optional] 

### Return type

[**PageTipoArquivoResponse**](PageTipoArquivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET4"></a>
# **listarUsingGET4**
> PageArquivoAUDResponse listarUsingGET4(id, opts)

Lista as auditorias do arquivo

Este recurso permite listar as auditorias de um determinado arquivo a partir do seu c\u00F3digo de identifica\u00E7\u00E3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ArquivoApi()

var id = 789; // {Integer} C\u00F3digo de Identifica\u00E7\u00E3o do arquivo

var opts = { 
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
api.listarUsingGET4(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00F3digo de Identifica\u00E7\u00E3o do arquivo | 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageArquivoAUDResponse**](PageArquivoAUDResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET5"></a>
# **listarUsingGET5**
> PageArquivoResponse listarUsingGET5(opts)

Listar arquivos do Pier Cloud

Este recurso permite a listagem de todos os arquivos dispon\u00EDveis no Pier Cloud.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.ArquivoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00E7\u00E3o dos registros.
  'page': 56, // {Integer} P\u00E1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50)
  'nome': "nome_example", // {String} Nome do arquivo
  'idTipoArquivo': 789, // {Integer} Tipo do arquivo
  'idStatusArquivo': 789, // {Integer} Identificador do status do arquivo
  'extensao': "extensao_example" // {String} Extens\u00E3o do arquivo
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET5(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00E7\u00E3o dos registros. | [optional] 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 
 **nome** | **String**| Nome do arquivo | [optional] 
 **idTipoArquivo** | **Integer**| Tipo do arquivo | [optional] 
 **idStatusArquivo** | **Integer**| Identificador do status do arquivo | [optional] 
 **extensao** | **String**| Extens\u00E3o do arquivo | [optional] 

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

