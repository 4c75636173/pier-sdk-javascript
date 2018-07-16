# Pier.GlobaltagparametroemissorApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET27**](GlobaltagparametroemissorApi.md#consultarUsingGET27) | **GET** /api/parametros-emissor/{codigo} | {{{parametro_emissor_recurso}}}


<a name="consultarUsingGET27"></a>
# **consultarUsingGET27**
> ParametroEmissorResponse consultarUsingGET27(codigo)

{{{parametro_emissor_recurso}}}

{{{parametro_emissor_recurso_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagparametroemissorApi()

var codigo = "codigo_example"; // {String} {{{parametro_emissor_recurso_pesquisa_codigo_param}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET27(codigo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codigo** | **String**| {{{parametro_emissor_recurso_pesquisa_codigo_param}}} | 

### Return type

[**ParametroEmissorResponse**](ParametroEmissorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

