# Pier.GlobaltaggrupochagebackApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarCodigosUsingGET**](GlobaltaggrupochagebackApi.md#listarCodigosUsingGET) | **GET** /api/grupos-chargeback/{grupoChargebackId}/codigos | {{{codigo_chargeback_resource_listar}}}
[**listarUsingGET28**](GlobaltaggrupochagebackApi.md#listarUsingGET28) | **GET** /api/grupos-chargeback | {{{grupo_chargeback_resource_listar}}}


<a name="listarCodigosUsingGET"></a>
# **listarCodigosUsingGET**
> PageCodigoChargebackResponse listarCodigosUsingGET(grupoChargebackId, opts)

{{{codigo_chargeback_resource_listar}}}

{{{codigo_chargeback_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltaggrupochagebackApi()

var grupoChargebackId = 789; // {Integer} grupoChargebackId

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} 
  'descricao': "descricao_example", // {String} 
  'flagAtm': true, // {Boolean} 
  'grupoChargebackId2': 789 // {Integer} 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarCodigosUsingGET(grupoChargebackId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grupoChargebackId** | **Integer**| grupoChargebackId | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**|  | [optional] 
 **descricao** | **String**|  | [optional] 
 **flagAtm** | **Boolean**|  | [optional] 
 **grupoChargebackId2** | **Integer**|  | [optional] 

### Return type

[**PageCodigoChargebackResponse**](PageCodigoChargebackResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET28"></a>
# **listarUsingGET28**
> PageGrupoChargebackResponse listarUsingGET28(opts)

{{{grupo_chargeback_resource_listar}}}

{{{grupo_chargeback_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltaggrupochagebackApi()

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
api.listarUsingGET28(opts, callback);
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

