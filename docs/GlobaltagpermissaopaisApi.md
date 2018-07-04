# Pier.GlobaltagpermissaopaisApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarPaisUsingGET**](GlobaltagpermissaopaisApi.md#consultarPaisUsingGET) | **GET** /api/paises/{id} | {{{permissao_pais_resource_consultar_pais}}}
[**listarContinentesUsingGET**](GlobaltagpermissaopaisApi.md#listarContinentesUsingGET) | **GET** /api/continentes | {{{enum_resource_listar_continentes}}}
[**listarPaisesUsingGET**](GlobaltagpermissaopaisApi.md#listarPaisesUsingGET) | **GET** /api/paises | {{{permissao_pais_resource_listar_paises}}}


<a name="consultarPaisUsingGET"></a>
# **consultarPaisUsingGET**
> PaisResponse consultarPaisUsingGET(id)

{{{permissao_pais_resource_consultar_pais}}}

{{{permissao_pais_resource_consultar_pais_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpermissaopaisApi()

var id = 789; // {Integer} {{{permissao_pais_resource_consultar_pais_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarPaisUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{permissao_pais_resource_consultar_pais_param_id}}} | 

### Return type

[**PaisResponse**](PaisResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarContinentesUsingGET"></a>
# **listarContinentesUsingGET**
> [Object] listarContinentesUsingGET

{{{enum_resource_listar_continentes}}}

{{{enum_resource_listar_continentes_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpermissaopaisApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarContinentesUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarPaisesUsingGET"></a>
# **listarPaisesUsingGET**
> PagePaisResponse listarPaisesUsingGET(opts)

{{{permissao_pais_resource_listar_paises}}}

{{{permissao_pais_resource_listar_paises_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagpermissaopaisApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'codigo': "codigo_example", // {String} {{{pais_request_codigo_value}}}
  'sigla': "sigla_example", // {String} {{{pais_request_sigla_value}}}
  'descricao': "descricao_example", // {String} {{{pais_request_descricao_value}}}
  'continente': "continente_example", // {String} {{{pais_request_continente_value}}}
  'flagAtivo': true // {Boolean} {{{pais_request_flag_ativo_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarPaisesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **codigo** | **String**| {{{pais_request_codigo_value}}} | [optional] 
 **sigla** | **String**| {{{pais_request_sigla_value}}} | [optional] 
 **descricao** | **String**| {{{pais_request_descricao_value}}} | [optional] 
 **continente** | **String**| {{{pais_request_continente_value}}} | [optional] 
 **flagAtivo** | **Boolean**| {{{pais_request_flag_ativo_value}}} | [optional] 

### Return type

[**PagePaisResponse**](PagePaisResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

