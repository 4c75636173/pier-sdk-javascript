# Pier.GlobaltagtipochaveApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarTipoChaveUsingGET**](GlobaltagtipochaveApi.md#listarTipoChaveUsingGET) | **GET** /api/tipos-chaves | {{{tipo_chave_resource_listar_tipos_chaves}}}


<a name="listarTipoChaveUsingGET"></a>
# **listarTipoChaveUsingGET**
> PageTipoChaveResponse listarTipoChaveUsingGET(opts)

{{{tipo_chave_resource_listar_tipos_chaves}}}

{{{tipo_chave_resource_listar_tipos_chaves_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagtipochaveApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{tipo_chave_request_id_value}}}
  'descricao': "descricao_example" // {String} {{{tipo_chave_request_descricao_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTipoChaveUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{tipo_chave_request_id_value}}} | [optional] 
 **descricao** | **String**| {{{tipo_chave_request_descricao_value}}} | [optional] 

### Return type

[**PageTipoChaveResponse**](PageTipoChaveResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

