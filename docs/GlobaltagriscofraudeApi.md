# Pier.GlobaltagriscofraudeApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET34**](GlobaltagriscofraudeApi.md#consultarUsingGET34) | **GET** /api/riscos-fraudes/{id} | {{{risco_fraude_resource_consultar}}}
[**listarTiposResolucaoUsingGET**](GlobaltagriscofraudeApi.md#listarTiposResolucaoUsingGET) | **GET** /api/tipos-resolucao | {{{risco_fraude_resource_listar_tipos_resolucao}}}
[**negarUsingPOST**](GlobaltagriscofraudeApi.md#negarUsingPOST) | **POST** /api/riscos-fraudes/{id}/negar | {{{risco_fraude_resource_negar}}}
[**reconhecerUsingPOST**](GlobaltagriscofraudeApi.md#reconhecerUsingPOST) | **POST** /api/riscos-fraudes/{id}/reconhecer | {{{risco_fraude_resource_reconhecer}}}
[**validarDadosPortadorUsingPOST**](GlobaltagriscofraudeApi.md#validarDadosPortadorUsingPOST) | **POST** /api/riscos-fraudes/validar-dados-portador | {{{risco_fraude_resource_validar_dados_portador}}}


<a name="consultarUsingGET34"></a>
# **consultarUsingGET34**
> RiscoFraudeDetalhadoResponse consultarUsingGET34(id)

{{{risco_fraude_resource_consultar}}}

{{{risco_fraude_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagriscofraudeApi()

var id = 789; // {Integer} {{{risco_fraude_resource_consultar_param_id_risco_fraude}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET34(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{risco_fraude_resource_consultar_param_id_risco_fraude}}} | 

### Return type

[**RiscoFraudeDetalhadoResponse**](RiscoFraudeDetalhadoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposResolucaoUsingGET"></a>
# **listarTiposResolucaoUsingGET**
> TipoResolucaoResponse listarTiposResolucaoUsingGET(opts)

{{{risco_fraude_resource_listar_tipos_resolucao}}}

{{{risco_fraude_resource_listar_tipos_resolucao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagriscofraudeApi()

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
api.listarTiposResolucaoUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| P\u00E1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00E7\u00E3o (Default = 50, Max = 50) | [optional] 

### Return type

[**TipoResolucaoResponse**](TipoResolucaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="negarUsingPOST"></a>
# **negarUsingPOST**
> Object negarUsingPOST(id)

{{{risco_fraude_resource_negar}}}

{{{risco_fraude_resource_negar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagriscofraudeApi()

var id = 789; // {Integer} {{{risco_fraude_resource_negar_param_id_risco_fraude}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.negarUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{risco_fraude_resource_negar_param_id_risco_fraude}}} | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reconhecerUsingPOST"></a>
# **reconhecerUsingPOST**
> Object reconhecerUsingPOST(id)

{{{risco_fraude_resource_reconhecer}}}

{{{risco_fraude_resource_reconhecer_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagriscofraudeApi()

var id = 789; // {Integer} {{{risco_fraude_resource_reconhecer_param_id_risco_fraude}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.reconhecerUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{risco_fraude_resource_reconhecer_param_id_risco_fraude}}} | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarDadosPortadorUsingPOST"></a>
# **validarDadosPortadorUsingPOST**
> Object validarDadosPortadorUsingPOST(request)

{{{risco_fraude_resource_validar_dados_portador}}}

{{{risco_fraude_resource_validar_dados_portador_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagriscofraudeApi()

var request = new Pier.DadosPortadorRequest(); // {DadosPortadorRequest} request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarDadosPortadorUsingPOST(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DadosPortadorRequest**](DadosPortadorRequest.md)| request | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

