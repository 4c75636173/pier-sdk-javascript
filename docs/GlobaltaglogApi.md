# Pier.GlobaltaglogApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**salvarUsingPOST18**](GlobaltaglogApi.md#salvarUsingPOST18) | **POST** /api/logs/log-acessos-usuario | {{{log_acesso_usuario_recurso_salvar}}}


<a name="salvarUsingPOST18"></a>
# **salvarUsingPOST18**
> LogAcessoUsuarioResposta salvarUsingPOST18(logAcessoUsuarioPersist)

{{{log_acesso_usuario_recurso_salvar}}}

{{{log_acesso_usuario_recurso_salvar_notas}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltaglogApi()

var logAcessoUsuarioPersist = new Pier.LogAcessoUsuarioPersistencia(); // {LogAcessoUsuarioPersistencia} logAcessoUsuarioPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST18(logAcessoUsuarioPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logAcessoUsuarioPersist** | [**LogAcessoUsuarioPersistencia**](LogAcessoUsuarioPersistencia.md)| logAcessoUsuarioPersist | 

### Return type

[**LogAcessoUsuarioResposta**](LogAcessoUsuarioResposta.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

