# Pier.GlobaltagcartaoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarAlterarSenhaUsingPUT**](GlobaltagcartaoApi.md#alterarAlterarSenhaUsingPUT) | **PUT** /api/cartoes/{id}/alterar-senha | {{{cartao_resource_alterar_alterar_senha}}}
[**alterarEstagioUsingPOST**](GlobaltagcartaoApi.md#alterarEstagioUsingPOST) | **POST** /api/cartoes/{id}/alterar-estagio | {{{cartao_resource_alterar_estagio}}}
[**alterarStatusImpressaoUsingPUT**](GlobaltagcartaoApi.md#alterarStatusImpressaoUsingPUT) | **PUT** /api/cartoes/{id}/alterar-status-impressao | {{{cartao_resource_alterar_status_impressao}}}
[**atribuirPessoaUsingPUT**](GlobaltagcartaoApi.md#atribuirPessoaUsingPUT) | **PUT** /api/cartoes/{id}/atribuir-titular | {{{cartao_resource_atribuir_pessoa}}}
[**bloquearUsingPOST**](GlobaltagcartaoApi.md#bloquearUsingPOST) | **POST** /api/cartoes/{id}/bloquear | {{{cartao_resource_bloquear}}}
[**cadastrarAlterarSenhaUsingPOST**](GlobaltagcartaoApi.md#cadastrarAlterarSenhaUsingPOST) | **POST** /api/cartoes/{id}/cadastrar-senha | {{{cartao_resource_cadastrar_alterar_senha}}}
[**cancelarUsingPOST**](GlobaltagcartaoApi.md#cancelarUsingPOST) | **POST** /api/cartoes/{id}/cancelar | {{{cartao_resource_cancelar}}}
[**consultarCartaoImpressaoUsingGET**](GlobaltagcartaoApi.md#consultarCartaoImpressaoUsingGET) | **GET** /api/cartoes/{id}/consultar-dados-impressao | {{{cartao_resource_consultar_cartao_impressao}}}
[**consultarDadosReaisCartaoUsingGET**](GlobaltagcartaoApi.md#consultarDadosReaisCartaoUsingGET) | **GET** /api/cartoes/{id}/consultar-dados-reais | {{{cartao_resource_consultar_dados_reais_cartao}}}
[**consultarLimiteDisponibilidadeUsingGET**](GlobaltagcartaoApi.md#consultarLimiteDisponibilidadeUsingGET) | **GET** /api/cartoes/{id}/limites-disponibilidades | {{{cartao_resource_consultar_limite_disponibilidade}}}
[**consultarLotesCartoesPrePagosUsingGET**](GlobaltagcartaoApi.md#consultarLotesCartoesPrePagosUsingGET) | **GET** /api/cartoes/lotes-cartoes-pre-pagos/{id} | {{{cartao_resource_consultar_lotes_cartoes_pre_pagos}}}
[**consultarPortadorUsingGET**](GlobaltagcartaoApi.md#consultarPortadorUsingGET) | **GET** /api/cartoes/{id}/portadores | {{{cartao_resource_consultar_portador}}}
[**consultarUsingGET10**](GlobaltagcartaoApi.md#consultarUsingGET10) | **GET** /api/cartoes/{id} | {{{cartao_resource_consultar}}}
[**desbloquearSenhaIncorretaUsingPOST**](GlobaltagcartaoApi.md#desbloquearSenhaIncorretaUsingPOST) | **POST** /api/cartoes/{id}/desbloquear-senha-incorreta | {{{cartao_resource_desbloquear_senha_incorreta}}}
[**desbloquearUsingPOST**](GlobaltagcartaoApi.md#desbloquearUsingPOST) | **POST** /api/cartoes/{id}/desbloquear | {{{cartao_resource_desbloquear}}}
[**gerarLotesCartoesPrePagosUsingPOST**](GlobaltagcartaoApi.md#gerarLotesCartoesPrePagosUsingPOST) | **POST** /api/cartoes/lotes-cartoes-pre-pagos | {{{cartao_resource_gerar_lotes_cartoes_pre_pagos}}}
[**gerarNovaViaCartaoMultiAppUsingPOST**](GlobaltagcartaoApi.md#gerarNovaViaCartaoMultiAppUsingPOST) | **POST** /api/cartoes/{id}/gerar-nova-via-multiplo | {{{cartao_resource_gerar_nova_via_multiplo}}}
[**gerarNovaViaUsingPOST**](GlobaltagcartaoApi.md#gerarNovaViaUsingPOST) | **POST** /api/cartoes/{id}/gerar-nova-via | {{{cartao_resource_gerar_nova_via}}}
[**lancarTarifaSegundaViaUsingPOST**](GlobaltagcartaoApi.md#lancarTarifaSegundaViaUsingPOST) | **POST** /api/cartoes/{id}/lancar-tarifa-reemissao | {{{cartao_resource_lancar_tarifa_segunda_via}}}
[**listarLotesCartoesPrePagosUsingGET**](GlobaltagcartaoApi.md#listarLotesCartoesPrePagosUsingGET) | **GET** /api/cartoes/lotes-cartoes-pre-pagos | {{{cartao_resource_listar_lotes_cartoes_pre_pagos}}}
[**listarUsingGET11**](GlobaltagcartaoApi.md#listarUsingGET11) | **GET** /api/cartoes | {{{cartao_resource_listar}}}
[**reativarUsingPOST**](GlobaltagcartaoApi.md#reativarUsingPOST) | **POST** /api/cartoes/{id}/reativar | {{{cartao_resource_reativar}}}
[**validarCVVUsingPOST**](GlobaltagcartaoApi.md#validarCVVUsingPOST) | **POST** /api/cartoes/{id}/validar-cvv | {{{cartao_resource_validar_c_v_v}}}
[**validarDadosImpressosBandeiradoUsingGET**](GlobaltagcartaoApi.md#validarDadosImpressosBandeiradoUsingGET) | **GET** /api/cartoes/validar-dados-impressos-bandeirados | {{{cartao_resource_validar_dados_impressos_bandeirado}}}
[**validarDadosImpressosNaoBandeiradoUsingGET**](GlobaltagcartaoApi.md#validarDadosImpressosNaoBandeiradoUsingGET) | **GET** /api/cartoes/validar-dados-impressos-nao-bandeirados | {{{cartao_resource_validar_dados_impressos_nao_bandeirado}}}
[**validarDe55CartaoMastercardUsingGET**](GlobaltagcartaoApi.md#validarDe55CartaoMastercardUsingGET) | **GET** /api/cartoes/validar-de55-mastercard | {{{cartao_resource_validar_de55_cartao_mastercard}}}
[**validarSenhaUsingGET**](GlobaltagcartaoApi.md#validarSenhaUsingGET) | **GET** /api/cartoes/{id}/validar-senha | {{{cartao_resource_validar_senha}}}
[**validarTarjaUsingGET**](GlobaltagcartaoApi.md#validarTarjaUsingGET) | **GET** /api/cartoes/validar-tarja | {{{cartao_resource_validar_tarja}}}


<a name="alterarAlterarSenhaUsingPUT"></a>
# **alterarAlterarSenhaUsingPUT**
> &#39;String&#39; alterarAlterarSenhaUsingPUT(id, senha, opts)

{{{cartao_resource_alterar_alterar_senha}}}

{{{cartao_resource_alterar_alterar_senha_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_alterar_alterar_senha_param_id}}}

var senha = "senha_example"; // {String} {{{cartao_resource_alterar_alterar_senha_param_nova_senha}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarAlterarSenhaUsingPUT(id, senha, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_alterar_alterar_senha_param_id}}} | 
 **senha** | **String**| {{{cartao_resource_alterar_alterar_senha_param_nova_senha}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarEstagioUsingPOST"></a>
# **alterarEstagioUsingPOST**
> CartaoResponse alterarEstagioUsingPOST(id, update, opts)

{{{cartao_resource_alterar_estagio}}}

{{{cartao_resource_alterar_estagio_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_alterar_estagio_param_id}}}

var update = new Pier.EstagioCartaoUpdate(); // {EstagioCartaoUpdate} {{{cartao_resource_alterar_estagio_param_id_estagio_cartao}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarEstagioUsingPOST(id, update, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_alterar_estagio_param_id}}} | 
 **update** | [**EstagioCartaoUpdate**](EstagioCartaoUpdate.md)| {{{cartao_resource_alterar_estagio_param_id_estagio_cartao}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarStatusImpressaoUsingPUT"></a>
# **alterarStatusImpressaoUsingPUT**
> HistoricoImpressaoCartaoResponse alterarStatusImpressaoUsingPUT(id, idStatusImpressao, opts)

{{{cartao_resource_alterar_status_impressao}}}

{{{cartao_resource_alterar_status_impressao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_alterar_status_impressao_param_id}}}

var idStatusImpressao = 789; // {Integer} {{{cartao_resource_alterar_status_impressao_param_id_status_impressao}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarStatusImpressaoUsingPUT(id, idStatusImpressao, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_alterar_status_impressao_param_id}}} | 
 **idStatusImpressao** | **Integer**| {{{cartao_resource_alterar_status_impressao_param_id_status_impressao}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**HistoricoImpressaoCartaoResponse**](HistoricoImpressaoCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="atribuirPessoaUsingPUT"></a>
# **atribuirPessoaUsingPUT**
> CartaoResponse atribuirPessoaUsingPUT(id, idPessoa, opts)

{{{cartao_resource_atribuir_pessoa}}}

{{{cartao_resource_atribuir_pessoa_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_atribuir_pessoa_param_id_cartao}}}

var idPessoa = 789; // {Integer} {{{cartao_resource_atribuir_pessoa_param_id_pessoa}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.atribuirPessoaUsingPUT(id, idPessoa, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_atribuir_pessoa_param_id_cartao}}} | 
 **idPessoa** | **Integer**| {{{cartao_resource_atribuir_pessoa_param_id_pessoa}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bloquearUsingPOST"></a>
# **bloquearUsingPOST**
> CartaoResponse bloquearUsingPOST(id, idStatus, observacao, opts)

{{{cartao_resource_bloquear}}}

{{{cartao_resource_bloquear_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_bloquear_param_id}}}

var idStatus = 789; // {Integer} {{{cartao_resource_bloquear_param_id_status}}}

var observacao = "observacao_example"; // {String} {{{cartao_resource_bloquear_param_observacao}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.bloquearUsingPOST(id, idStatus, observacao, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_bloquear_param_id}}} | 
 **idStatus** | **Integer**| {{{cartao_resource_bloquear_param_id_status}}} | 
 **observacao** | **String**| {{{cartao_resource_bloquear_param_observacao}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarAlterarSenhaUsingPOST"></a>
# **cadastrarAlterarSenhaUsingPOST**
> &#39;String&#39; cadastrarAlterarSenhaUsingPOST(id, senha, opts)

{{{cartao_resource_cadastrar_alterar_senha}}}

{{{cartao_resource_cadastrar_alterar_senha_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_cadastrar_alterar_senha_param_id}}}

var senha = "senha_example"; // {String} {{{cartao_resource_cadastrar_alterar_senha_param_nova_senha}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarAlterarSenhaUsingPOST(id, senha, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_cadastrar_alterar_senha_param_id}}} | 
 **senha** | **String**| {{{cartao_resource_cadastrar_alterar_senha_param_nova_senha}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelarUsingPOST"></a>
# **cancelarUsingPOST**
> CartaoResponse cancelarUsingPOST(id, idStatus, observacao, opts)

{{{cartao_resource_cancelar}}}

{{{cartao_resource_cancelar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_cancelar_param_id}}}

var idStatus = 789; // {Integer} {{{cartao_resource_cancelar_param_id_status}}}

var observacao = "observacao_example"; // {String} {{{cartao_resource_cancelar_param_observacao}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cancelarUsingPOST(id, idStatus, observacao, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_cancelar_param_id}}} | 
 **idStatus** | **Integer**| {{{cartao_resource_cancelar_param_id_status}}} | 
 **observacao** | **String**| {{{cartao_resource_cancelar_param_observacao}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarCartaoImpressaoUsingGET"></a>
# **consultarCartaoImpressaoUsingGET**
> DadosCartaoImpressaoResponse consultarCartaoImpressaoUsingGET(id, opts)

{{{cartao_resource_consultar_cartao_impressao}}}

{{{cartao_resource_consultar_cartao_impressao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_consultar_cartao_impressao_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarCartaoImpressaoUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_consultar_cartao_impressao_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**DadosCartaoImpressaoResponse**](DadosCartaoImpressaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarDadosReaisCartaoUsingGET"></a>
# **consultarDadosReaisCartaoUsingGET**
> DadosCartaoResponse consultarDadosReaisCartaoUsingGET(id, opts)

{{{cartao_resource_consultar_dados_reais_cartao}}}

{{{cartao_resource_consultar_dados_reais_cartao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} id

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarDadosReaisCartaoUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| id | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**DadosCartaoResponse**](DadosCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarLimiteDisponibilidadeUsingGET"></a>
# **consultarLimiteDisponibilidadeUsingGET**
> LimiteDisponibilidadeResponse consultarLimiteDisponibilidadeUsingGET(id, opts)

{{{cartao_resource_consultar_limite_disponibilidade}}}

{{{cartao_resource_consultar_limite_disponibilidade_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_consultar_limite_disponibilidade_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarLimiteDisponibilidadeUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_consultar_limite_disponibilidade_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**LimiteDisponibilidadeResponse**](LimiteDisponibilidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarLotesCartoesPrePagosUsingGET"></a>
# **consultarLotesCartoesPrePagosUsingGET**
> LoteCartoesPrePagosResponse consultarLotesCartoesPrePagosUsingGET(id, opts)

{{{cartao_resource_consultar_lotes_cartoes_pre_pagos}}}

{{{cartao_resource_consultar_lotes_cartoes_pre_pagos_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_consultar_lotes_cartoes_pre_pagos_param_id_lote}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarLotesCartoesPrePagosUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_consultar_lotes_cartoes_pre_pagos_param_id_lote}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**LoteCartoesPrePagosResponse**](LoteCartoesPrePagosResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarPortadorUsingGET"></a>
# **consultarPortadorUsingGET**
> PortadorResponse consultarPortadorUsingGET(id, opts)

{{{cartao_resource_consultar_portador}}}

{{{cartao_resource_consultar_portador_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_consultar_portador_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarPortadorUsingGET(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_consultar_portador_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**PortadorResponse**](PortadorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET10"></a>
# **consultarUsingGET10**
> CartaoDetalheResponse consultarUsingGET10(id, opts)

{{{cartao_resource_consultar}}}

{{{cartao_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_consultar_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET10(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_consultar_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**CartaoDetalheResponse**](CartaoDetalheResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desbloquearSenhaIncorretaUsingPOST"></a>
# **desbloquearSenhaIncorretaUsingPOST**
> CartaoResponse desbloquearSenhaIncorretaUsingPOST(id, opts)

{{{cartao_resource_desbloquear_senha_incorreta}}}

{{{cartao_resource_desbloquear_senha_incorreta_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_desbloquear_senha_incorreta_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desbloquearSenhaIncorretaUsingPOST(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_desbloquear_senha_incorreta_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desbloquearUsingPOST"></a>
# **desbloquearUsingPOST**
> CartaoResponse desbloquearUsingPOST(id, opts)

{{{cartao_resource_desbloquear}}}

{{{cartao_resource_desbloquear_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_desbloquear_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desbloquearUsingPOST(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_desbloquear_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarLotesCartoesPrePagosUsingPOST"></a>
# **gerarLotesCartoesPrePagosUsingPOST**
> LoteCartoesPrePagosResponse gerarLotesCartoesPrePagosUsingPOST(opts)

{{{cartao_resource_gerar_lotes_cartoes_pre_pagos}}}

{{{cartao_resource_gerar_lotes_cartoes_pre_pagos_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var opts = { 
  'authorization': "authorization_example", // {String} Authorization
  'idOrigemComercial': 789, // {Integer} {{{lote_cartoes_pre_pagos_persist_id_origem_comercial_value}}}
  'idProduto': 789, // {Integer} {{{lote_cartoes_pre_pagos_persist_id_produto_value}}}
  'idTipoCartao': 789, // {Integer} {{{lote_cartoes_pre_pagos_persist_id_tipo_cartao_value}}}
  'idImagem': 789, // {Integer} {{{lote_cartoes_pre_pagos_persist_id_imagem_value}}}
  'idEndereco': 789, // {Integer} {{{lote_cartoes_pre_pagos_persist_id_endereco_value}}}
  'quantidadeCartoes': 56, // {Integer} {{{lote_cartoes_pre_pagos_persist_quantidade_cartoes_value}}}
  'identificadorExterno': "identificadorExterno_example" // {String} {{{lote_cartoes_pre_pagos_persist_identificador_externo_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarLotesCartoesPrePagosUsingPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization | [optional] 
 **idOrigemComercial** | **Integer**| {{{lote_cartoes_pre_pagos_persist_id_origem_comercial_value}}} | [optional] 
 **idProduto** | **Integer**| {{{lote_cartoes_pre_pagos_persist_id_produto_value}}} | [optional] 
 **idTipoCartao** | **Integer**| {{{lote_cartoes_pre_pagos_persist_id_tipo_cartao_value}}} | [optional] 
 **idImagem** | **Integer**| {{{lote_cartoes_pre_pagos_persist_id_imagem_value}}} | [optional] 
 **idEndereco** | **Integer**| {{{lote_cartoes_pre_pagos_persist_id_endereco_value}}} | [optional] 
 **quantidadeCartoes** | **Integer**| {{{lote_cartoes_pre_pagos_persist_quantidade_cartoes_value}}} | [optional] 
 **identificadorExterno** | **String**| {{{lote_cartoes_pre_pagos_persist_identificador_externo_value}}} | [optional] 

### Return type

[**LoteCartoesPrePagosResponse**](LoteCartoesPrePagosResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarNovaViaCartaoMultiAppUsingPOST"></a>
# **gerarNovaViaCartaoMultiAppUsingPOST**
> CartaoMultiAppImpressaoResponse gerarNovaViaCartaoMultiAppUsingPOST(id, opts)

{{{cartao_resource_gerar_nova_via_multiplo}}}

{{{cartao_resource_gerar_nova_via_multiplo_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_gerar_nova_via_param_id_cartao}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarNovaViaCartaoMultiAppUsingPOST(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_gerar_nova_via_param_id_cartao}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**CartaoMultiAppImpressaoResponse**](CartaoMultiAppImpressaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="gerarNovaViaUsingPOST"></a>
# **gerarNovaViaUsingPOST**
> CartaoResponse gerarNovaViaUsingPOST(id, opts)

{{{cartao_resource_gerar_nova_via}}}

{{{cartao_resource_gerar_nova_via_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_gerar_nova_via_param_id_cartao}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.gerarNovaViaUsingPOST(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_gerar_nova_via_param_id_cartao}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lancarTarifaSegundaViaUsingPOST"></a>
# **lancarTarifaSegundaViaUsingPOST**
> Object lancarTarifaSegundaViaUsingPOST(id, opts)

{{{cartao_resource_lancar_tarifa_segunda_via}}}

{{{cartao_resource_lancar_tarifa_segunda_via_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_lancar_tarifa_segunda_via_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.lancarTarifaSegundaViaUsingPOST(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_lancar_tarifa_segunda_via_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarLotesCartoesPrePagosUsingGET"></a>
# **listarLotesCartoesPrePagosUsingGET**
> PageLoteCartoesPrePagosResponse listarLotesCartoesPrePagosUsingGET(opts)

{{{cartao_resource_listar_lotes_cartoes_pre_pagos}}}

{{{cartao_resource_listar_lotes_cartoes_pre_pagos_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var opts = { 
  'authorization': "authorization_example", // {String} Authorization
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idOrigemComercial': 789, // {Integer} {{{lote_cartoes_pre_pagos_request_id_origem_comercial_value}}}
  'idProduto': 789, // {Integer} {{{lote_cartoes_pre_pagos_request_id_produto_value}}}
  'idTipoCartao': 789, // {Integer} {{{lote_cartoes_pre_pagos_request_id_tipo_cartao_value}}}
  'idImagem': 789, // {Integer} {{{lote_cartoes_pre_pagos_request_id_imagem_value}}}
  'idEndereco': 789, // {Integer} {{{lote_cartoes_pre_pagos_request_id_endereco_value}}}
  'quantidadeCartoes': 56, // {Integer} {{{lote_cartoes_pre_pagos_request_quantidade_cartoes_value}}}
  'dataCadastro': "dataCadastro_example", // {String} {{{lote_cartoes_pre_pagos_request_data_cadastro_value}}}
  'usuarioCadastro': "usuarioCadastro_example", // {String} {{{lote_cartoes_pre_pagos_request_usuario_cadastro_value}}}
  'statusProcessamento': 56, // {Integer} {{{lote_cartoes_pre_pagos_request_status_processamento_value}}}
  'identificadorExterno': "identificadorExterno_example" // {String} {{{lote_cartoes_pre_pagos_request_identificador_externo_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarLotesCartoesPrePagosUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idOrigemComercial** | **Integer**| {{{lote_cartoes_pre_pagos_request_id_origem_comercial_value}}} | [optional] 
 **idProduto** | **Integer**| {{{lote_cartoes_pre_pagos_request_id_produto_value}}} | [optional] 
 **idTipoCartao** | **Integer**| {{{lote_cartoes_pre_pagos_request_id_tipo_cartao_value}}} | [optional] 
 **idImagem** | **Integer**| {{{lote_cartoes_pre_pagos_request_id_imagem_value}}} | [optional] 
 **idEndereco** | **Integer**| {{{lote_cartoes_pre_pagos_request_id_endereco_value}}} | [optional] 
 **quantidadeCartoes** | **Integer**| {{{lote_cartoes_pre_pagos_request_quantidade_cartoes_value}}} | [optional] 
 **dataCadastro** | **String**| {{{lote_cartoes_pre_pagos_request_data_cadastro_value}}} | [optional] 
 **usuarioCadastro** | **String**| {{{lote_cartoes_pre_pagos_request_usuario_cadastro_value}}} | [optional] 
 **statusProcessamento** | **Integer**| {{{lote_cartoes_pre_pagos_request_status_processamento_value}}} | [optional] 
 **identificadorExterno** | **String**| {{{lote_cartoes_pre_pagos_request_identificador_externo_value}}} | [optional] 

### Return type

[**PageLoteCartoesPrePagosResponse**](PageLoteCartoesPrePagosResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET11"></a>
# **listarUsingGET11**
> PageCartaoResponse listarUsingGET11(opts)

{{{cartao_resource_listar}}}

{{{cartao_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var opts = { 
  'authorization': "authorization_example", // {String} Authorization
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idStatusCartao': 789, // {Integer} {{{cartao_request_id_status_cartao_value}}}
  'idEstagioCartao': 789, // {Integer} {{{cartao_request_id_estagio_cartao_value}}}
  'idConta': 789, // {Integer} {{{cartao_request_id_conta_value}}}
  'idPessoa': 789, // {Integer} {{{cartao_request_id_pessoa_value}}}
  'idProduto': 789, // {Integer} {{{cartao_request_id_produto_value}}}
  'tipoPortador': "tipoPortador_example", // {String} {{{cartao_request_tipo_portador_value}}}
  'numeroCartao': "numeroCartao_example", // {String} {{{cartao_request_numero_cartao_value}}}
  'nomeImpresso': "nomeImpresso_example", // {String} {{{cartao_request_nome_impresso_value}}}
  'dataGeracao': "dataGeracao_example", // {String} {{{cartao_request_data_geracao_value}}}
  'dataStatusCartao': "dataStatusCartao_example", // {String} {{{cartao_request_data_status_cartao_value}}}
  'dataEstagioCartao': "dataEstagioCartao_example", // {String} {{{cartao_request_data_estagio_cartao_value}}}
  'dataValidade': "dataValidade_example", // {String} {{{cartao_request_data_validade_value}}}
  'dataImpressao': "dataImpressao_example", // {String} {{{cartao_request_data_impressao_value}}}
  'arquivoImpressao': "arquivoImpressao_example", // {String} {{{cartao_request_arquivo_impressao_value}}}
  'flagImpressaoOrigemComercial': 56, // {Integer} {{{cartao_request_flag_impressao_origem_comercial_value}}}
  'flagProvisorio': 56, // {Integer} {{{cartao_request_flag_provisorio_value}}}
  'codigoDesbloqueio': "codigoDesbloqueio_example", // {String} {{{cartao_request_codigo_desbloqueio_value}}}
  'sequencialCartao': 56 // {Integer} {{{cartao_request_sequencial_cartao_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET11(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Authorization | [optional] 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idStatusCartao** | **Integer**| {{{cartao_request_id_status_cartao_value}}} | [optional] 
 **idEstagioCartao** | **Integer**| {{{cartao_request_id_estagio_cartao_value}}} | [optional] 
 **idConta** | **Integer**| {{{cartao_request_id_conta_value}}} | [optional] 
 **idPessoa** | **Integer**| {{{cartao_request_id_pessoa_value}}} | [optional] 
 **idProduto** | **Integer**| {{{cartao_request_id_produto_value}}} | [optional] 
 **tipoPortador** | **String**| {{{cartao_request_tipo_portador_value}}} | [optional] 
 **numeroCartao** | **String**| {{{cartao_request_numero_cartao_value}}} | [optional] 
 **nomeImpresso** | **String**| {{{cartao_request_nome_impresso_value}}} | [optional] 
 **dataGeracao** | **String**| {{{cartao_request_data_geracao_value}}} | [optional] 
 **dataStatusCartao** | **String**| {{{cartao_request_data_status_cartao_value}}} | [optional] 
 **dataEstagioCartao** | **String**| {{{cartao_request_data_estagio_cartao_value}}} | [optional] 
 **dataValidade** | **String**| {{{cartao_request_data_validade_value}}} | [optional] 
 **dataImpressao** | **String**| {{{cartao_request_data_impressao_value}}} | [optional] 
 **arquivoImpressao** | **String**| {{{cartao_request_arquivo_impressao_value}}} | [optional] 
 **flagImpressaoOrigemComercial** | **Integer**| {{{cartao_request_flag_impressao_origem_comercial_value}}} | [optional] 
 **flagProvisorio** | **Integer**| {{{cartao_request_flag_provisorio_value}}} | [optional] 
 **codigoDesbloqueio** | **String**| {{{cartao_request_codigo_desbloqueio_value}}} | [optional] 
 **sequencialCartao** | **Integer**| {{{cartao_request_sequencial_cartao_value}}} | [optional] 

### Return type

[**PageCartaoResponse**](PageCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reativarUsingPOST"></a>
# **reativarUsingPOST**
> CartaoResponse reativarUsingPOST(id, opts)

{{{cartao_resource_reativar}}}

{{{cartao_resource_reativar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_reativar_param_id}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.reativarUsingPOST(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_reativar_param_id}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**CartaoResponse**](CartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarCVVUsingPOST"></a>
# **validarCVVUsingPOST**
> &#39;String&#39; validarCVVUsingPOST(id, validaCVV, opts)

{{{cartao_resource_validar_c_v_v}}}

{{{cartao_resource_validar_c_v_v_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_validar_c_v_v_param_id}}}

var validaCVV = new Pier.ValidaCVVRequest(); // {ValidaCVVRequest} validaCVV

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarCVVUsingPOST(id, validaCVV, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_validar_c_v_v_param_id}}} | 
 **validaCVV** | [**ValidaCVVRequest**](ValidaCVVRequest.md)| validaCVV | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarDadosImpressosBandeiradoUsingGET"></a>
# **validarDadosImpressosBandeiradoUsingGET**
> ValidaCartaoResponse validarDadosImpressosBandeiradoUsingGET(numeroCartao, nomePortador, dataValidade, codigoSeguranca, opts)

{{{cartao_resource_validar_dados_impressos_bandeirado}}}

{{{cartao_resource_validar_dados_impressos_bandeirado_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var numeroCartao = "numeroCartao_example"; // {String} {{{cartao_resource_validar_dados_impressos_bandeirado_param_numero_cartao}}}

var nomePortador = "nomePortador_example"; // {String} {{{cartao_resource_validar_dados_impressos_bandeirado_param_nome_portador}}}

var dataValidade = "dataValidade_example"; // {String} {{{cartao_resource_validar_dados_impressos_bandeirado_param_data_validade}}}

var codigoSeguranca = "codigoSeguranca_example"; // {String} {{{cartao_resource_validar_dados_impressos_bandeirado_param_codigo_seguranca}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarDadosImpressosBandeiradoUsingGET(numeroCartao, nomePortador, dataValidade, codigoSeguranca, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numeroCartao** | **String**| {{{cartao_resource_validar_dados_impressos_bandeirado_param_numero_cartao}}} | 
 **nomePortador** | **String**| {{{cartao_resource_validar_dados_impressos_bandeirado_param_nome_portador}}} | 
 **dataValidade** | **String**| {{{cartao_resource_validar_dados_impressos_bandeirado_param_data_validade}}} | 
 **codigoSeguranca** | **String**| {{{cartao_resource_validar_dados_impressos_bandeirado_param_codigo_seguranca}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**ValidaCartaoResponse**](ValidaCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarDadosImpressosNaoBandeiradoUsingGET"></a>
# **validarDadosImpressosNaoBandeiradoUsingGET**
> ValidaCartaoResponse validarDadosImpressosNaoBandeiradoUsingGET(numeroCartao, nomePortador, dataValidade, codigoSeguranca, opts)

{{{cartao_resource_validar_dados_impressos_nao_bandeirado}}}

{{{cartao_resource_validar_dados_impressos_nao_bandeirado_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var numeroCartao = "numeroCartao_example"; // {String} {{{cartao_resource_validar_dados_impressos_nao_bandeirado_param_numero_cartao}}}

var nomePortador = "nomePortador_example"; // {String} {{{cartao_resource_validar_dados_impressos_nao_bandeirado_param_nome_portador}}}

var dataValidade = "dataValidade_example"; // {String} {{{cartao_resource_validar_dados_impressos_nao_bandeirado_param_data_validade}}}

var codigoSeguranca = "codigoSeguranca_example"; // {String} {{{cartao_resource_validar_dados_impressos_nao_bandeirado_param_codigo_seguranca}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarDadosImpressosNaoBandeiradoUsingGET(numeroCartao, nomePortador, dataValidade, codigoSeguranca, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numeroCartao** | **String**| {{{cartao_resource_validar_dados_impressos_nao_bandeirado_param_numero_cartao}}} | 
 **nomePortador** | **String**| {{{cartao_resource_validar_dados_impressos_nao_bandeirado_param_nome_portador}}} | 
 **dataValidade** | **String**| {{{cartao_resource_validar_dados_impressos_nao_bandeirado_param_data_validade}}} | 
 **codigoSeguranca** | **String**| {{{cartao_resource_validar_dados_impressos_nao_bandeirado_param_codigo_seguranca}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**ValidaCartaoResponse**](ValidaCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarDe55CartaoMastercardUsingGET"></a>
# **validarDe55CartaoMastercardUsingGET**
> ValidaCartaoResponse validarDe55CartaoMastercardUsingGET(numeroCartao, criptograma, opts)

{{{cartao_resource_validar_de55_cartao_mastercard}}}

{{{cartao_resource_validar_de55_cartao_mastercard_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var numeroCartao = "numeroCartao_example"; // {String} {{{cartao_resource_validar_de55_cartao_mastercard_param_numero_cartao}}}

var criptograma = "criptograma_example"; // {String} {{{cartao_resource_validar_de55_cartao_mastercard_param_criptograma}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarDe55CartaoMastercardUsingGET(numeroCartao, criptograma, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numeroCartao** | **String**| {{{cartao_resource_validar_de55_cartao_mastercard_param_numero_cartao}}} | 
 **criptograma** | **String**| {{{cartao_resource_validar_de55_cartao_mastercard_param_criptograma}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**ValidaCartaoResponse**](ValidaCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarSenhaUsingGET"></a>
# **validarSenhaUsingGET**
> ValidaSenhaCartaoResponse validarSenhaUsingGET(id, senha, opts)

{{{cartao_resource_validar_senha}}}

{{{cartao_resource_validar_senha_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var id = 789; // {Integer} {{{cartao_resource_validar_senha_param_id}}}

var senha = "senha_example"; // {String} {{{cartao_resource_validar_senha_param_senha}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarSenhaUsingGET(id, senha, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{cartao_resource_validar_senha_param_id}}} | 
 **senha** | **String**| {{{cartao_resource_validar_senha_param_senha}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**ValidaSenhaCartaoResponse**](ValidaSenhaCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validarTarjaUsingGET"></a>
# **validarTarjaUsingGET**
> ValidaCartaoResponse validarTarjaUsingGET(numeroCartao, trilha1, trilha2, opts)

{{{cartao_resource_validar_tarja}}}

{{{cartao_resource_validar_tarja_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagcartaoApi()

var numeroCartao = "numeroCartao_example"; // {String} {{{cartao_resource_validar_tarja_param_numero_cartao}}}

var trilha1 = "trilha1_example"; // {String} {{{cartao_resource_validar_tarja_param_trilha1}}}

var trilha2 = "trilha2_example"; // {String} {{{cartao_resource_validar_tarja_param_trilha2}}}

var opts = { 
  'authorization': "authorization_example" // {String} Authorization
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.validarTarjaUsingGET(numeroCartao, trilha1, trilha2, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numeroCartao** | **String**| {{{cartao_resource_validar_tarja_param_numero_cartao}}} | 
 **trilha1** | **String**| {{{cartao_resource_validar_tarja_param_trilha1}}} | 
 **trilha2** | **String**| {{{cartao_resource_validar_tarja_param_trilha2}}} | 
 **authorization** | **String**| Authorization | [optional] 

### Return type

[**ValidaCartaoResponse**](ValidaCartaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

