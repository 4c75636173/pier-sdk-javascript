# Pier.GlobaltagusuariotokenApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**incrementarTentativaUsingPUT**](GlobaltagusuariotokenApi.md#incrementarTentativaUsingPUT) | **PUT** /api/usuarios-tokens/incrementar-tentativas | {{{usuario_token_recurso_controle_tentativa_cadastro_incrementar}}}
[**verificarTentativaUsingGET**](GlobaltagusuariotokenApi.md#verificarTentativaUsingGET) | **GET** /api/usuarios-tokens/verificar-tentativas | {{{usuario_token_recurso_controle_tentativa_cadastro_verificar}}}


<a name="incrementarTentativaUsingPUT"></a>
# **incrementarTentativaUsingPUT**
> ControleTentativaCadastroResponse incrementarTentativaUsingPUT(cpf)

{{{usuario_token_recurso_controle_tentativa_cadastro_incrementar}}}

{{{usuario_token_recurso_controle_tentativa_cadastro_incrementar_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuariotokenApi()

var cpf = "cpf_example"; // {String} {{{usuario_token_recurso_controle_tentativa_cadastro_incrementar_param_cpf}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.incrementarTentativaUsingPUT(cpf, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cpf** | **String**| {{{usuario_token_recurso_controle_tentativa_cadastro_incrementar_param_cpf}}} | 

### Return type

[**ControleTentativaCadastroResponse**](ControleTentativaCadastroResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="verificarTentativaUsingGET"></a>
# **verificarTentativaUsingGET**
> ControleTentativaCadastroResponse verificarTentativaUsingGET(cpf)

{{{usuario_token_recurso_controle_tentativa_cadastro_verificar}}}

{{{usuario_token_recurso_controle_tentativa_cadastro_verificar_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagusuariotokenApi()

var cpf = "cpf_example"; // {String} {{{usuario_token_recurso_controle_tentativa_cadastro_verificar_param_cpf}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.verificarTentativaUsingGET(cpf, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cpf** | **String**| {{{usuario_token_recurso_controle_tentativa_cadastro_verificar_param_cpf}}} | 

### Return type

[**ControleTentativaCadastroResponse**](ControleTentativaCadastroResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

