# Pier.GlobaltagcompracontestadaApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**detalheCartaoUsingGET**](GlobaltagcompracontestadaApi.md#detalheCartaoUsingGET) | **GET** /api/cartoes-com-contestacoes/{idCartao} | {{{compra_contestada_detalhe_cartao_resource_listar}}}
[**listarUsingGET12**](GlobaltagcompracontestadaApi.md#listarUsingGET12) | **GET** /api/cartoes-com-contestacoes | {{{cartao_com_compra_contestada_resource_listar}}}
[**transacaoUsingGET**](GlobaltagcompracontestadaApi.md#transacaoUsingGET) | **GET** /api/cartoes-com-contestacoes/{idCartao}/transacoes | {{{compra_contestada_transacoes_resource_listar}}}


<a name="detalheCartaoUsingGET"></a>
# **detalheCartaoUsingGET**
> PageGrupoChargebackResponse detalheCartaoUsingGET(idCartao)

{{{compra_contestada_detalhe_cartao_resource_listar}}}

{{{compra_contestada_detalhe_cartao_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcompracontestadaApi()

var idCartao = 789; // {Integer} idCartao


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.detalheCartaoUsingGET(idCartao, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idCartao** | **Integer**| idCartao | 

### Return type

[**PageGrupoChargebackResponse**](PageGrupoChargebackResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET12"></a>
# **listarUsingGET12**
> PageGrupoChargebackResponse listarUsingGET12(opts)

{{{cartao_com_compra_contestada_resource_listar}}}

{{{cartao_com_compra_contestada_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcompracontestadaApi()

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
api.listarUsingGET12(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageGrupoChargebackResponse**](PageGrupoChargebackResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transacaoUsingGET"></a>
# **transacaoUsingGET**
> PageGrupoChargebackResponse transacaoUsingGET(idCartao, opts)

{{{compra_contestada_transacoes_resource_listar}}}

{{{compra_contestada_transacoes_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcompracontestadaApi()

var idCartao = 789; // {Integer} idCartao

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
api.transacaoUsingGET(idCartao, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idCartao** | **Integer**| idCartao | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageGrupoChargebackResponse**](PageGrupoChargebackResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

