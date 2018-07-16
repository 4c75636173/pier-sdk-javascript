# Pier.GlobaltagdocumentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT21**](GlobaltagdocumentoApi.md#alterarUsingPUT21) | **PUT** /api/tipos-templates/{id} | {{{tipo_template_resource_alterar}}}
[**atualizarUsingPUT3**](GlobaltagdocumentoApi.md#atualizarUsingPUT3) | **PUT** /api/templates-documentos/{id} | {{{documento_template_resource_atualizar}}}
[**consultarUsingGET17**](GlobaltagdocumentoApi.md#consultarUsingGET17) | **GET** /api/documentos/{id} | {{{documento_resource_consultar}}}
[**consultarUsingGET18**](GlobaltagdocumentoApi.md#consultarUsingGET18) | **GET** /api/templates-documentos/{id} | {{{documento_template_resource_consultar}}}
[**consultarUsingGET47**](GlobaltagdocumentoApi.md#consultarUsingGET47) | **GET** /api/tipos-templates/{id} | {{{tipo_template_resource_consultar}}}
[**integrarUsingPOST1**](GlobaltagdocumentoApi.md#integrarUsingPOST1) | **POST** /api/documentos/integrar | {{{documento_resource_integrar}}}
[**listarUsingGET21**](GlobaltagdocumentoApi.md#listarUsingGET21) | **GET** /api/documentos | {{{documento_resource_listar}}}
[**listarUsingGET22**](GlobaltagdocumentoApi.md#listarUsingGET22) | **GET** /api/templates-documentos | {{{documento_template_resource_listar}}}
[**listarUsingGET57**](GlobaltagdocumentoApi.md#listarUsingGET57) | **GET** /api/tipos-templates | {{{tipo_template_resource_listar}}}
[**salvarUsingPOST11**](GlobaltagdocumentoApi.md#salvarUsingPOST11) | **POST** /api/documentos | {{{documento_resource_salvar}}}
[**salvarUsingPOST12**](GlobaltagdocumentoApi.md#salvarUsingPOST12) | **POST** /api/templates-documentos | {{{documento_template_resource_salvar}}}
[**salvarUsingPOST31**](GlobaltagdocumentoApi.md#salvarUsingPOST31) | **POST** /api/tipos-templates | {{{tipo_template_resource_salvar}}}


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

<a name="atualizarUsingPUT3"></a>
# **atualizarUsingPUT3**
> DocumentoTemplateResponse atualizarUsingPUT3(id, persist)

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
api.atualizarUsingPUT3(id, persist, callback);
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

<a name="consultarUsingGET17"></a>
# **consultarUsingGET17**
> DocumentoDetalhadoResponse consultarUsingGET17(id)

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
api.consultarUsingGET17(id, callback);
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

<a name="consultarUsingGET18"></a>
# **consultarUsingGET18**
> DocumentoTemplateResponse consultarUsingGET18(id)

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
api.consultarUsingGET18(id, callback);
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

<a name="consultarUsingGET47"></a>
# **consultarUsingGET47**
> TipoTemplateResponse consultarUsingGET47(id)

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
api.consultarUsingGET47(id, callback);
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

<a name="listarUsingGET21"></a>
# **listarUsingGET21**
> PageDocumentoResponse listarUsingGET21(opts)

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
api.listarUsingGET21(opts, callback);
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

<a name="listarUsingGET22"></a>
# **listarUsingGET22**
> PageDocumentoTemplateResponse listarUsingGET22(opts)

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
api.listarUsingGET22(opts, callback);
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

<a name="listarUsingGET57"></a>
# **listarUsingGET57**
> PageTipoTemplateResponse listarUsingGET57(opts)

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
api.listarUsingGET57(opts, callback);
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

<a name="salvarUsingPOST11"></a>
# **salvarUsingPOST11**
> DocumentoDetalhadoResponse salvarUsingPOST11(persist)

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
api.salvarUsingPOST11(persist, callback);
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

<a name="salvarUsingPOST12"></a>
# **salvarUsingPOST12**
> DocumentoTemplateResponse salvarUsingPOST12(persist)

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
api.salvarUsingPOST12(persist, callback);
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

<a name="salvarUsingPOST31"></a>
# **salvarUsingPOST31**
> TipoTemplateResponse salvarUsingPOST31(persist)

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
api.salvarUsingPOST31(persist, callback);
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

