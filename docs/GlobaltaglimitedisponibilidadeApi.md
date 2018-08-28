# Pier.GlobaltaglimitedisponibilidadeApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarUsingPUT9**](GlobaltaglimitedisponibilidadeApi.md#alterarUsingPUT9) | **PUT** /api/limites-disponibilidades | {{{limite_disponibilidade_resource_alterar}}}
[**consultarUsingGET25**](GlobaltaglimitedisponibilidadeApi.md#consultarUsingGET25) | **GET** /api/limites-disponibilidades | {{{limite_disponibilidade_resource_consultar}}}
[**sensibilizarSaldoDisponivelGlobalUsingPOST**](GlobaltaglimitedisponibilidadeApi.md#sensibilizarSaldoDisponivelGlobalUsingPOST) | **POST** /api/contas/{id}/limites-disponibilidades/sensibilizar-saldo-disponivel-global | {{{limite_disponibilidade_resource_sensibilizar_credito_disponivel}}}


<a name="alterarUsingPUT9"></a>
# **alterarUsingPUT9**
> LimiteDisponibilidadeResponse alterarUsingPUT9(idConta, opts)

{{{limite_disponibilidade_resource_alterar}}}

{{{limite_disponibilidade_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltaglimitedisponibilidadeApi()

var idConta = 789; // {Integer} {{{limite_disponibilidade_update_id_conta_value}}}

var opts = { 
  'limiteGlobal': 3.4, // {Number} {{{limite_disponibilidade_persist_limite_global_value}}}
  'limiteCompra': 3.4, // {Number} {{{limite_disponibilidade_persist_limite_compra_value}}}
  'limiteParcelado': 3.4, // {Number} {{{limite_disponibilidade_persist_limite_parcelado_value}}}
  'limiteParcelas': 3.4, // {Number} {{{limite_disponibilidade_persist_limite_parcelas_value}}}
  'limiteSaqueGlobal': 3.4, // {Number} {{{limite_disponibilidade_persist_limite_saque_global_value}}}
  'limiteSaquePeriodo': 3.4, // {Number} {{{limite_disponibilidade_persist_limite_saque_periodo_value}}}
  'limiteConsignado': 3.4, // {Number} {{{limite_disponibilidade_persist_limite_consignado_value}}}
  'limiteInternacionalCompra': 3.4, // {Number} {{{limite_disponibilidade_persist_limite_internacional_compra_value}}}
  'limiteInternacionalParcelado': 3.4, // {Number} {{{limite_disponibilidade_persist_limite_internacional_parcelado_value}}}
  'limiteInternacionalParcelas': 3.4, // {Number} {{{limite_disponibilidade_persist_limite_internacional_parcelas_value}}}
  'limiteInternacionalSaqueGlobal': 3.4, // {Number} {{{limite_disponibilidade_persist_limite_internacional_saque_global_value}}}
  'limiteInternacionalSaquePeriodo': 3.4, // {Number} {{{limite_disponibilidade_persist_limite_internacional_saque_periodo_value}}}
  'limiteMaximo': 3.4 // {Number} {{{limite_disponibilidade_persist_limite_maximo_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT9(idConta, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| {{{limite_disponibilidade_update_id_conta_value}}} | 
 **limiteGlobal** | [**Number**](.md)| {{{limite_disponibilidade_persist_limite_global_value}}} | [optional] 
 **limiteCompra** | [**Number**](.md)| {{{limite_disponibilidade_persist_limite_compra_value}}} | [optional] 
 **limiteParcelado** | [**Number**](.md)| {{{limite_disponibilidade_persist_limite_parcelado_value}}} | [optional] 
 **limiteParcelas** | [**Number**](.md)| {{{limite_disponibilidade_persist_limite_parcelas_value}}} | [optional] 
 **limiteSaqueGlobal** | [**Number**](.md)| {{{limite_disponibilidade_persist_limite_saque_global_value}}} | [optional] 
 **limiteSaquePeriodo** | [**Number**](.md)| {{{limite_disponibilidade_persist_limite_saque_periodo_value}}} | [optional] 
 **limiteConsignado** | [**Number**](.md)| {{{limite_disponibilidade_persist_limite_consignado_value}}} | [optional] 
 **limiteInternacionalCompra** | [**Number**](.md)| {{{limite_disponibilidade_persist_limite_internacional_compra_value}}} | [optional] 
 **limiteInternacionalParcelado** | [**Number**](.md)| {{{limite_disponibilidade_persist_limite_internacional_parcelado_value}}} | [optional] 
 **limiteInternacionalParcelas** | [**Number**](.md)| {{{limite_disponibilidade_persist_limite_internacional_parcelas_value}}} | [optional] 
 **limiteInternacionalSaqueGlobal** | [**Number**](.md)| {{{limite_disponibilidade_persist_limite_internacional_saque_global_value}}} | [optional] 
 **limiteInternacionalSaquePeriodo** | [**Number**](.md)| {{{limite_disponibilidade_persist_limite_internacional_saque_periodo_value}}} | [optional] 
 **limiteMaximo** | [**Number**](.md)| {{{limite_disponibilidade_persist_limite_maximo_value}}} | [optional] 

### Return type

[**LimiteDisponibilidadeResponse**](LimiteDisponibilidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET25"></a>
# **consultarUsingGET25**
> LimiteDisponibilidadeResponse consultarUsingGET25(idConta)

{{{limite_disponibilidade_resource_consultar}}}

{{{limite_disponibilidade_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltaglimitedisponibilidadeApi()

var idConta = 789; // {Integer} {{{limite_disponibilidade_resource_consultar_param_id_conta}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET25(idConta, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idConta** | **Integer**| {{{limite_disponibilidade_resource_consultar_param_id_conta}}} | 

### Return type

[**LimiteDisponibilidadeResponse**](LimiteDisponibilidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sensibilizarSaldoDisponivelGlobalUsingPOST"></a>
# **sensibilizarSaldoDisponivelGlobalUsingPOST**
> LimiteDisponibilidadeResponse sensibilizarSaldoDisponivelGlobalUsingPOST(id, sensibilizarSaldoGlobal)

{{{limite_disponibilidade_resource_sensibilizar_credito_disponivel}}}

{{{limite_disponibilidade_resource_sensibilizar_credito_disponivel_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltaglimitedisponibilidadeApi()

var id = 789; // {Integer} {{{sensibilizar_saldo_global_param_id}}}

var sensibilizarSaldoGlobal = new Pier.SensibilizarSaldoGlobalUpdateValue(); // {SensibilizarSaldoGlobalUpdateValue} sensibilizarSaldoGlobal


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.sensibilizarSaldoDisponivelGlobalUsingPOST(id, sensibilizarSaldoGlobal, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{sensibilizar_saldo_global_param_id}}} | 
 **sensibilizarSaldoGlobal** | [**SensibilizarSaldoGlobalUpdateValue**](SensibilizarSaldoGlobalUpdateValue.md)| sensibilizarSaldoGlobal | 

### Return type

[**LimiteDisponibilidadeResponse**](LimiteDisponibilidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

