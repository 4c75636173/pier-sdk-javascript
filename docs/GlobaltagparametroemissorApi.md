# Pier.GlobaltagparametroemissorApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consultarUsingGET26**](GlobaltagparametroemissorApi.md#consultarUsingGET26) | **GET** /api/parametros-emissor/{codigo} | {{{parametro_emissor_recurso}}}


<a name="consultarUsingGET26"></a>
# **consultarUsingGET26**
> ParametroEmissorResponse consultarUsingGET26(codigo)

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
api.consultarUsingGET26(codigo, callback);
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

