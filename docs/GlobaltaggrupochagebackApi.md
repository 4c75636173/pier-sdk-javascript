# Pier.GlobaltaggrupochagebackApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarCodigosUsingGET**](GlobaltaggrupochagebackApi.md#listarCodigosUsingGET) | **GET** /api/grupos-chargeback/{id}/codigos | {{{codigo_chargeback_resource_listar}}}
[**listarUsingGET27**](GlobaltaggrupochagebackApi.md#listarUsingGET27) | **GET** /api/grupos-chargeback | {{{grupo_chargeback_resource_listar}}}


<a name="listarCodigosUsingGET"></a>
# **listarCodigosUsingGET**
> PageCodigoChargebackResponse listarCodigosUsingGET(id, opts)

{{{codigo_chargeback_resource_listar}}}

{{{codigo_chargeback_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltaggrupochagebackApi()

var id = 789; // {Integer} id

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'flagAtm': true, // {Boolean} 
  'idBandeira': 789, // {Integer} 
  'groupId': 789 // {Integer} 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarCodigosUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| id | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **flagAtm** | **Boolean**|  | [optional] 
 **idBandeira** | **Integer**|  | [optional] 
 **groupId** | **Integer**|  | [optional] 

### Return type

[**PageCodigoChargebackResponse**](PageCodigoChargebackResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET27"></a>
# **listarUsingGET27**
> PageGrupoChargebackResponse listarUsingGET27(opts)

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
api.listarUsingGET27(opts, callback);
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

