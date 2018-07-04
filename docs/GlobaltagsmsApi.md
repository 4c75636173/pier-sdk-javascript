# Pier.GlobaltagsmsApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listarSMSUsingGET1**](GlobaltagsmsApi.md#listarSMSUsingGET1) | **GET** /api/sms | {{{sms_resource_listar_sms}}}


<a name="listarSMSUsingGET1"></a>
# **listarSMSUsingGET1**
> PageSMSEnvioResponse listarSMSUsingGET1(idConta, opts)

{{{sms_resource_listar_sms}}}

{{{sms_resource_listar_sms_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagsmsApi()

var idConta = 789; // {Integer} {{{sms_envio_request_id_conta_value}}}

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'dataInicio': "dataInicio_example", // {String} {{{sms_envio_request_data_inicio_value}}}
  'dataFim': "dataFim_example" // {String} {{{sms_envio_request_data_fim_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarSMSUsingGET1(idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| {{{sms_envio_request_id_conta_value}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **dataInicio** | **String**| {{{sms_envio_request_data_inicio_value}}} | [optional] 
 **dataFim** | **String**| {{{sms_envio_request_data_fim_value}}} | [optional] 

### Return type

[**PageSMSEnvioResponse**](PageSMSEnvioResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

