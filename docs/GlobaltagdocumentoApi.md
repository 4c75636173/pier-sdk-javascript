# Pier.GlobaltagdocumentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT21**](GlobaltagdocumentoApi.md#alterarUsingPUT21) | **PUT** /api/tipos-templates/{id} | {{{tipo_template_resource_alterar}}}
[**atualizarUsingPUT4**](GlobaltagdocumentoApi.md#atualizarUsingPUT4) | **PUT** /api/templates-documentos/{id} | {{{documento_template_resource_atualizar}}}
[**consultarUsingGET19**](GlobaltagdocumentoApi.md#consultarUsingGET19) | **GET** /api/documentos/{id} | {{{documento_resource_consultar}}}
[**consultarUsingGET20**](GlobaltagdocumentoApi.md#consultarUsingGET20) | **GET** /api/templates-documentos/{id} | {{{documento_template_resource_consultar}}}
[**consultarUsingGET49**](GlobaltagdocumentoApi.md#consultarUsingGET49) | **GET** /api/tipos-templates/{id} | {{{tipo_template_resource_consultar}}}
[**integrarUsingPOST1**](GlobaltagdocumentoApi.md#integrarUsingPOST1) | **POST** /api/documentos/integrar | {{{documento_resource_integrar}}}
[**listarUsingGET22**](GlobaltagdocumentoApi.md#listarUsingGET22) | **GET** /api/documentos | {{{documento_resource_listar}}}
[**listarUsingGET23**](GlobaltagdocumentoApi.md#listarUsingGET23) | **GET** /api/templates-documentos | {{{documento_template_resource_listar}}}
[**listarUsingGET60**](GlobaltagdocumentoApi.md#listarUsingGET60) | **GET** /api/tipos-templates | {{{tipo_template_resource_listar}}}
[**salvarUsingPOST12**](GlobaltagdocumentoApi.md#salvarUsingPOST12) | **POST** /api/documentos | {{{documento_resource_salvar}}}
[**salvarUsingPOST13**](GlobaltagdocumentoApi.md#salvarUsingPOST13) | **POST** /api/templates-documentos | {{{documento_template_resource_salvar}}}
[**salvarUsingPOST32**](GlobaltagdocumentoApi.md#salvarUsingPOST32) | **POST** /api/tipos-templates | {{{tipo_template_resource_salvar}}}


<a name="alterarUsingPUT21"></a>
# **alterarUsingPUT21**
> TipoTemplateResponse alterarUsingPUT21(id, persist)

{{{tipo_template_resource_alterar}}}

{{{tipo_template_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdocumentoApi()

var id = 789; // {Integer} {{{tipo_template_resource_alterar_param_id}}}

var persist = new Pier.TipoTemplateRequest(); // {TipoTemplateRequest} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT21(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{tipo_template_resource_alterar_param_id}}} | 
 **persist** | [**TipoTemplateRequest**](TipoTemplateRequest.md)| persist | 

### Return type

[**TipoTemplateResponse**](TipoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atualizarUsingPUT4"></a>
# **atualizarUsingPUT4**
> DocumentoTemplateResponse atualizarUsingPUT4(id, persist)

{{{documento_template_resource_atualizar}}}

{{{documento_template_resource_atualizar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdocumentoApi()

var id = 789; // {Integer} {{{documento_template_resource_atualizar_param_id}}}

var persist = new Pier.DocumentoTemplatePersist(); // {DocumentoTemplatePersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atualizarUsingPUT4(id, persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{documento_template_resource_atualizar_param_id}}} | 
 **persist** | [**DocumentoTemplatePersist**](DocumentoTemplatePersist.md)| persist | 

### Return type

[**DocumentoTemplateResponse**](DocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET19"></a>
# **consultarUsingGET19**
> DocumentoDetalhadoResponse consultarUsingGET19(id)

{{{documento_resource_consultar}}}

{{{documento_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdocumentoApi()

var id = 789; // {Integer} {{{documento_resource_consultar_param_id}}}


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
 **id** | **Integer**| {{{documento_resource_consultar_param_id}}} | 

### Return type

[**DocumentoDetalhadoResponse**](DocumentoDetalhadoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET20"></a>
# **consultarUsingGET20**
> DocumentoTemplateResponse consultarUsingGET20(id)

{{{documento_template_resource_consultar}}}

{{{documento_template_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdocumentoApi()

var id = 789; // {Integer} {{{documento_template_resource_consultar_param_id}}}


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
 **id** | **Integer**| {{{documento_template_resource_consultar_param_id}}} | 

### Return type

[**DocumentoTemplateResponse**](DocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET49"></a>
# **consultarUsingGET49**
> TipoTemplateResponse consultarUsingGET49(id)

{{{tipo_template_resource_consultar}}}

{{{tipo_template_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdocumentoApi()

var id = 789; // {Integer} {{{tipo_template_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET49(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{tipo_template_resource_consultar_param_id}}} | 

### Return type

[**TipoTemplateResponse**](TipoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="integrarUsingPOST1"></a>
# **integrarUsingPOST1**
> DocumentoIntegracaoResponse integrarUsingPOST1(integrarDocumentoRequest)

{{{documento_resource_integrar}}}

{{{documento_resource_integrar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdocumentoApi()

var integrarDocumentoRequest = new Pier.IntegrarDocumentoRequest(); // {IntegrarDocumentoRequest} integrarDocumentoRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.integrarUsingPOST1(integrarDocumentoRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrarDocumentoRequest** | [**IntegrarDocumentoRequest**](IntegrarDocumentoRequest.md)| integrarDocumentoRequest | 

### Return type

[**DocumentoIntegracaoResponse**](DocumentoIntegracaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET22"></a>
# **listarUsingGET22**
> PageDocumentoResponse listarUsingGET22(opts)

{{{documento_resource_listar}}}

{{{documento_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdocumentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idTemplateDocumento': 789, // {Integer} {{{documento_request_id_template_documento_value}}}
  'nome': "nome_example", // {String} {{{documento_request_nome_value}}}
  'extensao': "extensao_example" // {String} {{{documento_request_extensao_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET22(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idTemplateDocumento** | **Integer**| {{{documento_request_id_template_documento_value}}} | [optional] 
 **nome** | **String**| {{{documento_request_nome_value}}} | [optional] 
 **extensao** | **String**| {{{documento_request_extensao_value}}} | [optional] 

### Return type

[**PageDocumentoResponse**](PageDocumentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET23"></a>
# **listarUsingGET23**
> PageDocumentoTemplateResponse listarUsingGET23(opts)

{{{documento_template_resource_listar}}}

{{{documento_template_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdocumentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idTipoTemplate': 789 // {Integer} {{{documento_template_request_id_tipo_template_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET23(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idTipoTemplate** | **Integer**| {{{documento_template_request_id_tipo_template_value}}} | [optional] 

### Return type

[**PageDocumentoTemplateResponse**](PageDocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET60"></a>
# **listarUsingGET60**
> PageTipoTemplateResponse listarUsingGET60(opts)

{{{tipo_template_resource_listar}}}

{{{tipo_template_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdocumentoApi()

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
api.listarUsingGET60(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageTipoTemplateResponse**](PageTipoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST12"></a>
# **salvarUsingPOST12**
> DocumentoDetalhadoResponse salvarUsingPOST12(persist)

{{{documento_resource_salvar}}}

{{{documento_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdocumentoApi()

var persist = new Pier.DocumentoParametrosRequest(); // {DocumentoParametrosRequest} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST12(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**DocumentoParametrosRequest**](DocumentoParametrosRequest.md)| persist | 

### Return type

[**DocumentoDetalhadoResponse**](DocumentoDetalhadoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST13"></a>
# **salvarUsingPOST13**
> DocumentoTemplateResponse salvarUsingPOST13(persist)

{{{documento_template_resource_salvar}}}

{{{documento_template_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdocumentoApi()

var persist = new Pier.DocumentoTemplatePersist(); // {DocumentoTemplatePersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST13(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**DocumentoTemplatePersist**](DocumentoTemplatePersist.md)| persist | 

### Return type

[**DocumentoTemplateResponse**](DocumentoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST32"></a>
# **salvarUsingPOST32**
> TipoTemplateResponse salvarUsingPOST32(persist)

{{{tipo_template_resource_salvar}}}

{{{tipo_template_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagdocumentoApi()

var persist = new Pier.TipoTemplateRequest(); // {TipoTemplateRequest} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST32(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**TipoTemplateRequest**](TipoTemplateRequest.md)| persist | 

### Return type

[**TipoTemplateResponse**](TipoTemplateResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

