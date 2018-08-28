# Pier.GlobaltagparametrosprodutoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarUsingGET37**](GlobaltagparametrosprodutoApi.md#listarUsingGET37) | **GET** /api/parametros-produto | {{{parametro_produto_listar}}}


<a name="listarUsingGET37"></a>
# **listarUsingGET37**
> ParametroProdutoResponse listarUsingGET37(opts)

{{{parametro_produto_listar}}}

{{{parametro_produto_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagparametrosprodutoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{parametro_produto_request_id_value}}}
  'codigo': "codigo_example", // {String} {{{parametro_produto_request_codigo_value}}}
  'tipo': "tipo_example", // {String} {{{parametro_produto_request_tipo_value}}}
  'idProduto': 789 // {Integer} {{{parametro_produto_request_id_produto_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET37(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{parametro_produto_request_id_value}}} | [optional] 
 **codigo** | **String**| {{{parametro_produto_request_codigo_value}}} | [optional] 
 **tipo** | **String**| {{{parametro_produto_request_tipo_value}}} | [optional] 
 **idProduto** | **Integer**| {{{parametro_produto_request_id_produto_value}}} | [optional] 

### Return type

[**ParametroProdutoResponse**](ParametroProdutoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

