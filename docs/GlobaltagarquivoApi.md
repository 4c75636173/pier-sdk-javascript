# Pier.GlobaltagarquivoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET4**](GlobaltagarquivoApi.md#consultarUsingGET4) | **GET** /api/arquivos/{id} | {{{arquivo_resource_consultar}}}
[**integrarUsingPOST**](GlobaltagarquivoApi.md#integrarUsingPOST) | **POST** /api/arquivos/integrar | {{{arquivo_resource_integrar}}}
[**listarPorNumeroReceitaFederalUsingGET**](GlobaltagarquivoApi.md#listarPorNumeroReceitaFederalUsingGET) | **GET** /api/arquivos-auditorias | {{{arquivo_a_u_d_resource_listar_por_numero_receita_federal}}}
[**listarStatusArquivosUsingGET**](GlobaltagarquivoApi.md#listarStatusArquivosUsingGET) | **GET** /api/status-arquivos | {{{arquivo_resource_listar_status_arquivos}}}
[**listarTiposArquivosUsingGET**](GlobaltagarquivoApi.md#listarTiposArquivosUsingGET) | **GET** /api/tipos-arquivos | {{{arquivo_resource_listar_tipos_arquivos}}}
[**listarUsingGET5**](GlobaltagarquivoApi.md#listarUsingGET5) | **GET** /api/arquivos/{id}/auditorias | {{{arquivo_a_u_d_resource_listar}}}
[**listarUsingGET6**](GlobaltagarquivoApi.md#listarUsingGET6) | **GET** /api/arquivos | {{{arquivo_resource_listar}}}
[**salvarUsingPOST1**](GlobaltagarquivoApi.md#salvarUsingPOST1) | **POST** /api/arquivos | {{{arquivo_resource_salvar}}}


<a name="consultarUsingGET4"></a>
# **consultarUsingGET4**
> ArquivoDetalheResponse consultarUsingGET4(id)

{{{arquivo_resource_consultar}}}

{{{arquivo_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagarquivoApi()

var id = 789; // {Integer} {{{arquivo_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET4(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{arquivo_resource_consultar_param_id}}} | 

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

{{{arquivo_resource_integrar}}}

{{{arquivo_resource_integrar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagarquivoApi()

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

{{{arquivo_a_u_d_resource_listar_por_numero_receita_federal}}}

{{{arquivo_a_u_d_resource_listar_por_numero_receita_federal_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagarquivoApi()

var numeroReceitaFederal = "numeroReceitaFederal_example"; // {String} {{{arquivo_a_u_d_resource_listar_por_numero_receita_federal_param_numero_receita_federal}}}

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
 **numeroReceitaFederal** | **String**| {{{arquivo_a_u_d_resource_listar_por_numero_receita_federal_param_numero_receita_federal}}} | 
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

{{{arquivo_resource_listar_status_arquivos}}}

{{{arquivo_resource_listar_status_arquivos_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagarquivoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'nome': "nome_example", // {String} {{{status_arquivo_request_nome_value}}}
  'descricao': "descricao_example" // {String} {{{status_arquivo_request_descricao_value}}}
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
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **nome** | **String**| {{{status_arquivo_request_nome_value}}} | [optional] 
 **descricao** | **String**| {{{status_arquivo_request_descricao_value}}} | [optional] 

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

{{{arquivo_resource_listar_tipos_arquivos}}}

{{{arquivo_resource_listar_tipos_arquivos_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagarquivoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'nome': "nome_example", // {String} {{{tipo_arquivo_request_nome_value}}}
  'descricao': "descricao_example" // {String} {{{tipo_arquivo_request_descricao_value}}}
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
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **nome** | **String**| {{{tipo_arquivo_request_nome_value}}} | [optional] 
 **descricao** | **String**| {{{tipo_arquivo_request_descricao_value}}} | [optional] 

### Return type

[**PageTipoArquivoResponse**](PageTipoArquivoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET5"></a>
# **listarUsingGET5**
> PageArquivoAUDResponse listarUsingGET5(id, opts)

{{{arquivo_a_u_d_resource_listar}}}

{{{arquivo_a_u_d_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagarquivoApi()

var id = 789; // {Integer} {{{arquivo_a_u_d_resource_listar_param_id}}}

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
api.listarUsingGET5(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{arquivo_a_u_d_resource_listar_param_id}}} | 
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageArquivoAUDResponse**](PageArquivoAUDResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET6"></a>
# **listarUsingGET6**
> PageArquivoResponse listarUsingGET6(opts)

{{{arquivo_resource_listar}}}

{{{arquivo_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagarquivoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'nome': "nome_example", // {String} {{{arquivo_request_nome_value}}}
  'idTipoArquivo': 789, // {Integer} {{{arquivo_request_id_tipo_arquivo_value}}}
  'idStatusArquivo': 789, // {Integer} {{{arquivo_request_id_status_arquivo_value}}}
  'extensao': "extensao_example" // {String} {{{arquivo_request_extensao_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET6(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **nome** | **String**| {{{arquivo_request_nome_value}}} | [optional] 
 **idTipoArquivo** | **Integer**| {{{arquivo_request_id_tipo_arquivo_value}}} | [optional] 
 **idStatusArquivo** | **Integer**| {{{arquivo_request_id_status_arquivo_value}}} | [optional] 
 **extensao** | **String**| {{{arquivo_request_extensao_value}}} | [optional] 

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

{{{arquivo_resource_salvar}}}

{{{arquivo_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagarquivoApi()

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

