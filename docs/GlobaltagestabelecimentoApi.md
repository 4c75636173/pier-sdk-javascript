# Pier.GlobaltagestabelecimentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarOrigemComercialUsingPUT**](GlobaltagestabelecimentoApi.md#alterarOrigemComercialUsingPUT) | **PUT** /api/origens-comerciais/{id} | {{{origem_comercial_resource_alterar_origem_comercial}}}
[**alterarUsingPUT10**](GlobaltagestabelecimentoApi.md#alterarUsingPUT10) | **PUT** /api/maquinetas/{id} | {{{maquineta_resource_alterar}}}
[**alterarUsingPUT11**](GlobaltagestabelecimentoApi.md#alterarUsingPUT11) | **PUT** /api/regras-operacoes-estabelecimentos/{id} | {{{operacao_credor_resource_alterar}}}
[**alterarUsingPUT17**](GlobaltagestabelecimentoApi.md#alterarUsingPUT17) | **PUT** /api/telefones-estabelecimentos/{id} | {{{telefone_estabelecimento_resource_alterar}}}
[**alterarUsingPUT19**](GlobaltagestabelecimentoApi.md#alterarUsingPUT19) | **PUT** /api/terminais/{id} | {{{terminal_resource_alterar}}}
[**alterarUsingPUT6**](GlobaltagestabelecimentoApi.md#alterarUsingPUT6) | **PUT** /api/estabelecimentos/{id} | {{{estabelecimento_resource_alterar}}}
[**alterarUsingPUT8**](GlobaltagestabelecimentoApi.md#alterarUsingPUT8) | **PUT** /api/grupos-economicos/{id} | {{{grupo_economico_resource_alterar}}}
[**cadastrarOrigemComercialUsingPOST**](GlobaltagestabelecimentoApi.md#cadastrarOrigemComercialUsingPOST) | **POST** /api/origens-comerciais | {{{origem_comercial_resource_cadastrar_origem_comercial}}}
[**cadastrarUsingPOST3**](GlobaltagestabelecimentoApi.md#cadastrarUsingPOST3) | **POST** /api/estabelecimentos | {{{estabelecimento_resource_cadastrar}}}
[**cadastrarUsingPOST4**](GlobaltagestabelecimentoApi.md#cadastrarUsingPOST4) | **POST** /api/grupos-economicos | {{{grupo_economico_resource_cadastrar}}}
[**consultaOperacaoUsingGET**](GlobaltagestabelecimentoApi.md#consultaOperacaoUsingGET) | **GET** /api/tipos-operacoes-estabelecimentos/{id} | {{{operacao_resource_consulta_operacao}}}
[**consultarOrigemComercialUsingGET**](GlobaltagestabelecimentoApi.md#consultarOrigemComercialUsingGET) | **GET** /api/origens-comerciais/{id} | {{{origem_comercial_resource_consultar_origem_comercial}}}
[**consultarUsingGET22**](GlobaltagestabelecimentoApi.md#consultarUsingGET22) | **GET** /api/estabelecimentos/{id} | {{{estabelecimento_resource_consultar}}}
[**consultarUsingGET24**](GlobaltagestabelecimentoApi.md#consultarUsingGET24) | **GET** /api/grupos-economicos/{id} | {{{grupo_economico_resource_consultar}}}
[**consultarUsingGET26**](GlobaltagestabelecimentoApi.md#consultarUsingGET26) | **GET** /api/maquinetas/{id} | {{{maquineta_resource_consultar}}}
[**consultarUsingGET27**](GlobaltagestabelecimentoApi.md#consultarUsingGET27) | **GET** /api/regras-operacoes-estabelecimentos/{id} | {{{operacao_credor_resource_consultar}}}
[**consultarUsingGET40**](GlobaltagestabelecimentoApi.md#consultarUsingGET40) | **GET** /api/telefones-estabelecimentos/{id} | {{{telefone_estabelecimento_resource_consultar}}}
[**consultarUsingGET42**](GlobaltagestabelecimentoApi.md#consultarUsingGET42) | **GET** /api/terminais/{id} | {{{terminal_resource_consultar}}}
[**consultarUsingGET54**](GlobaltagestabelecimentoApi.md#consultarUsingGET54) | **GET** /api/adquirentes-estabelecimento/{id} | {{{vinculo_estabelecimento_adquirente_resource_consultar}}}
[**desabilitarVinculoUsingPOST**](GlobaltagestabelecimentoApi.md#desabilitarVinculoUsingPOST) | **POST** /api/adquirentes-estabelecimento/{id}/desabilitar | {{{vinculo_estabelecimento_adquirente_resource_desabilitar_vinculo}}}
[**desabilitarVinculoUsingPOST1**](GlobaltagestabelecimentoApi.md#desabilitarVinculoUsingPOST1) | **POST** /api/estabelecimentos/{id}/desabilitar-operacao | {{{vinculo_operacao_resource_desabilitar_vinculo}}}
[**habilitarVinculoUsingPOST**](GlobaltagestabelecimentoApi.md#habilitarVinculoUsingPOST) | **POST** /api/adquirentes-estabelecimento/{id}/habilitar | {{{vinculo_estabelecimento_adquirente_resource_habilitar_vinculo}}}
[**habilitarVinculoUsingPOST1**](GlobaltagestabelecimentoApi.md#habilitarVinculoUsingPOST1) | **POST** /api/estabelecimentos/{id}/habilitar-operacao | {{{vinculo_operacao_resource_habilitar_vinculo}}}
[**listaOperacaoUsingGET**](GlobaltagestabelecimentoApi.md#listaOperacaoUsingGET) | **GET** /api/tipos-operacoes-estabelecimentos | {{{operacao_resource_lista_operacao}}}
[**listarMCCUsingGET**](GlobaltagestabelecimentoApi.md#listarMCCUsingGET) | **GET** /api/mcc-estabelecimentos | {{{m_c_c_resource_listar_m_c_c}}}
[**listarOrigensComerciaisUsingGET**](GlobaltagestabelecimentoApi.md#listarOrigensComerciaisUsingGET) | **GET** /api/origens-comerciais | {{{origem_comercial_resource_listar_origens_comerciais}}}
[**listarTiposAdquirentesUsingGET**](GlobaltagestabelecimentoApi.md#listarTiposAdquirentesUsingGET) | **GET** /api/tipos-adquirentes | {{{vinculo_estabelecimento_adquirente_resource_listar_tipos_adquirentes}}}
[**listarTiposEstabelecimentosUsingGET**](GlobaltagestabelecimentoApi.md#listarTiposEstabelecimentosUsingGET) | **GET** /api/tipos-estabelecimentos | {{{tipo_estabelecimento_resource_listar_tipos_estabelecimentos}}}
[**listarTiposMaquinetasUsingGET**](GlobaltagestabelecimentoApi.md#listarTiposMaquinetasUsingGET) | **GET** /api/tipos-maquinetas | {{{maquineta_resource_listar_tipos_maquinetas}}}
[**listarTiposOrigensComerciaisUsingGET**](GlobaltagestabelecimentoApi.md#listarTiposOrigensComerciaisUsingGET) | **GET** /api/tipos-origens-comerciais | {{{tipo_origem_comercial_resource_listar_tipos_origens_comerciais}}}
[**listarTiposTerminaisUsingGET1**](GlobaltagestabelecimentoApi.md#listarTiposTerminaisUsingGET1) | **GET** /api/tipos-terminais-estabelecimento | {{{terminal_resource_listar_tipos_terminais}}}
[**listarUsingGET26**](GlobaltagestabelecimentoApi.md#listarUsingGET26) | **GET** /api/estabelecimentos | {{{estabelecimento_resource_listar}}}
[**listarUsingGET29**](GlobaltagestabelecimentoApi.md#listarUsingGET29) | **GET** /api/grupos-economicos | {{{grupo_economico_resource_listar}}}
[**listarUsingGET30**](GlobaltagestabelecimentoApi.md#listarUsingGET30) | **GET** /api/grupos-origens-comerciais | {{{grupo_origem_comercial_resource_listar}}}
[**listarUsingGET33**](GlobaltagestabelecimentoApi.md#listarUsingGET33) | **GET** /api/maquinetas | {{{maquineta_resource_listar}}}
[**listarUsingGET34**](GlobaltagestabelecimentoApi.md#listarUsingGET34) | **GET** /api/tipos-moedas | {{{moeda_resource_listar}}}
[**listarUsingGET35**](GlobaltagestabelecimentoApi.md#listarUsingGET35) | **GET** /api/regras-operacoes-estabelecimentos | {{{operacao_credor_resource_listar}}}
[**listarUsingGET52**](GlobaltagestabelecimentoApi.md#listarUsingGET52) | **GET** /api/telefones-estabelecimentos | {{{telefone_estabelecimento_resource_listar}}}
[**listarUsingGET54**](GlobaltagestabelecimentoApi.md#listarUsingGET54) | **GET** /api/terminais | {{{terminal_resource_listar}}}
[**listarUsingGET67**](GlobaltagestabelecimentoApi.md#listarUsingGET67) | **GET** /api/adquirentes-estabelecimento | {{{vinculo_estabelecimento_adquirente_resource_listar}}}
[**listarUsingGET68**](GlobaltagestabelecimentoApi.md#listarUsingGET68) | **GET** /api/estabelecimentos/{id}/operacoes | {{{vinculo_operacao_resource_listar}}}
[**salvarUsingPOST20**](GlobaltagestabelecimentoApi.md#salvarUsingPOST20) | **POST** /api/maquinetas | {{{maquineta_resource_salvar}}}
[**salvarUsingPOST21**](GlobaltagestabelecimentoApi.md#salvarUsingPOST21) | **POST** /api/regras-operacoes-estabelecimentos | {{{operacao_credor_resource_salvar}}}
[**salvarUsingPOST28**](GlobaltagestabelecimentoApi.md#salvarUsingPOST28) | **POST** /api/telefones-estabelecimentos | {{{telefone_estabelecimento_resource_salvar}}}
[**salvarUsingPOST30**](GlobaltagestabelecimentoApi.md#salvarUsingPOST30) | **POST** /api/terminais | {{{terminal_resource_salvar}}}
[**salvarUsingPOST35**](GlobaltagestabelecimentoApi.md#salvarUsingPOST35) | **POST** /api/adquirentes-estabelecimento | {{{vinculo_estabelecimento_adquirente_resource_salvar}}}


<a name="alterarOrigemComercialUsingPUT"></a>
# **alterarOrigemComercialUsingPUT**
> OrigemComercialResponse alterarOrigemComercialUsingPUT(id, origemComercialUpdate)

{{{origem_comercial_resource_alterar_origem_comercial}}}

{{{origem_comercial_resource_alterar_origem_comercial_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{origem_comercial_resource_alterar_origem_comercial_param_id}}}

var origemComercialUpdate = new Pier.OrigemComercialUpdate(); // {OrigemComercialUpdate} origemComercialUpdate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarOrigemComercialUsingPUT(id, origemComercialUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{origem_comercial_resource_alterar_origem_comercial_param_id}}} | 
 **origemComercialUpdate** | [**OrigemComercialUpdate**](OrigemComercialUpdate.md)| origemComercialUpdate | 

### Return type

[**OrigemComercialResponse**](OrigemComercialResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT10"></a>
# **alterarUsingPUT10**
> MaquinetaResponse alterarUsingPUT10(id, maquinetaUpdate)

{{{maquineta_resource_alterar}}}

{{{maquineta_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{maquineta_resource_alterar_param_id}}}

var maquinetaUpdate = new Pier.MaquinetaUpdate(); // {MaquinetaUpdate} maquinetaUpdate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT10(id, maquinetaUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{maquineta_resource_alterar_param_id}}} | 
 **maquinetaUpdate** | [**MaquinetaUpdate**](MaquinetaUpdate.md)| maquinetaUpdate | 

### Return type

[**MaquinetaResponse**](MaquinetaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT11"></a>
# **alterarUsingPUT11**
> OperacaoCredorResponse alterarUsingPUT11(id, operacaoCredorUpdate)

{{{operacao_credor_resource_alterar}}}

{{{operacao_credor_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{operacao_credor_resource_alterar_param_id}}}

var operacaoCredorUpdate = new Pier.OperacaoCredorUpdate(); // {OperacaoCredorUpdate} operacaoCredorUpdate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT11(id, operacaoCredorUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{operacao_credor_resource_alterar_param_id}}} | 
 **operacaoCredorUpdate** | [**OperacaoCredorUpdate**](OperacaoCredorUpdate.md)| operacaoCredorUpdate | 

### Return type

[**OperacaoCredorResponse**](OperacaoCredorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT17"></a>
# **alterarUsingPUT17**
> TelefoneEstabelecimentoResponse alterarUsingPUT17(id, telefoneEstabelecimentoUpdate)

{{{telefone_estabelecimento_resource_alterar}}}

{{{telefone_estabelecimento_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{telefone_estabelecimento_resource_alterar_param_id}}}

var telefoneEstabelecimentoUpdate = new Pier.TelefoneEstabelecimentoUpdate(); // {TelefoneEstabelecimentoUpdate} telefoneEstabelecimentoUpdate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT17(id, telefoneEstabelecimentoUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{telefone_estabelecimento_resource_alterar_param_id}}} | 
 **telefoneEstabelecimentoUpdate** | [**TelefoneEstabelecimentoUpdate**](TelefoneEstabelecimentoUpdate.md)| telefoneEstabelecimentoUpdate | 

### Return type

[**TelefoneEstabelecimentoResponse**](TelefoneEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT19"></a>
# **alterarUsingPUT19**
> TerminalResponse alterarUsingPUT19(id, terminalUpdate)

{{{terminal_resource_alterar}}}

{{{terminal_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{terminal_resource_alterar_param_id}}}

var terminalUpdate = new Pier.TerminalUpdateValue(); // {TerminalUpdateValue} terminalUpdate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT19(id, terminalUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{terminal_resource_alterar_param_id}}} | 
 **terminalUpdate** | [**TerminalUpdateValue**](TerminalUpdateValue.md)| terminalUpdate | 

### Return type

[**TerminalResponse**](TerminalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT6"></a>
# **alterarUsingPUT6**
> EstabelecimentoResponse alterarUsingPUT6(id, update)

{{{estabelecimento_resource_alterar}}}

{{{estabelecimento_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{estabelecimento_resource_alterar_param_id_estabelecimento}}}

var update = new Pier.EstabelecimentoUpdate(); // {EstabelecimentoUpdate} update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT6(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{estabelecimento_resource_alterar_param_id_estabelecimento}}} | 
 **update** | [**EstabelecimentoUpdate**](EstabelecimentoUpdate.md)| update | 

### Return type

[**EstabelecimentoResponse**](EstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT8"></a>
# **alterarUsingPUT8**
> GrupoEconomicoResponse alterarUsingPUT8(id, grupoEconomicoDTO)

{{{grupo_economico_resource_alterar}}}

{{{grupo_economico_resource_alterar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{grupo_economico_resource_alterar_param_id}}}

var grupoEconomicoDTO = new Pier.GrupoEconomicoDTO(); // {GrupoEconomicoDTO} grupoEconomicoDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT8(id, grupoEconomicoDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{grupo_economico_resource_alterar_param_id}}} | 
 **grupoEconomicoDTO** | [**GrupoEconomicoDTO**](GrupoEconomicoDTO.md)| grupoEconomicoDTO | 

### Return type

[**GrupoEconomicoResponse**](GrupoEconomicoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarOrigemComercialUsingPOST"></a>
# **cadastrarOrigemComercialUsingPOST**
> OrigemComercialResponse cadastrarOrigemComercialUsingPOST(origemComercialPersist)

{{{origem_comercial_resource_cadastrar_origem_comercial}}}

{{{origem_comercial_resource_cadastrar_origem_comercial_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var origemComercialPersist = new Pier.OrigemComercialPersist(); // {OrigemComercialPersist} origemComercialPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarOrigemComercialUsingPOST(origemComercialPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **origemComercialPersist** | [**OrigemComercialPersist**](OrigemComercialPersist.md)| origemComercialPersist | 

### Return type

[**OrigemComercialResponse**](OrigemComercialResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarUsingPOST3"></a>
# **cadastrarUsingPOST3**
> EstabelecimentoResponse cadastrarUsingPOST3(persist)

{{{estabelecimento_resource_cadastrar}}}

{{{estabelecimento_resource_cadastrar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var persist = new Pier.EstabelecimentoPersist(); // {EstabelecimentoPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarUsingPOST3(persist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **persist** | [**EstabelecimentoPersist**](EstabelecimentoPersist.md)| persist | 

### Return type

[**EstabelecimentoResponse**](EstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cadastrarUsingPOST4"></a>
# **cadastrarUsingPOST4**
> GrupoEconomicoResponse cadastrarUsingPOST4(grupoEconomicoDTO)

{{{grupo_economico_resource_cadastrar}}}

{{{grupo_economico_resource_cadastrar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var grupoEconomicoDTO = new Pier.GrupoEconomicoDTO(); // {GrupoEconomicoDTO} GrupoEconomicoDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarUsingPOST4(grupoEconomicoDTO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grupoEconomicoDTO** | [**GrupoEconomicoDTO**](GrupoEconomicoDTO.md)| GrupoEconomicoDTO | 

### Return type

[**GrupoEconomicoResponse**](GrupoEconomicoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultaOperacaoUsingGET"></a>
# **consultaOperacaoUsingGET**
> DetalheOperacaoResponse consultaOperacaoUsingGET(id)

{{{operacao_resource_consulta_operacao}}}

{{{operacao_resource_consulta_operacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{operacao_resource_consulta_operacao_param_id_operacao}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultaOperacaoUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{operacao_resource_consulta_operacao_param_id_operacao}}} | 

### Return type

[**DetalheOperacaoResponse**](DetalheOperacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarOrigemComercialUsingGET"></a>
# **consultarOrigemComercialUsingGET**
> OrigemComercialResponse consultarOrigemComercialUsingGET(id)

{{{origem_comercial_resource_consultar_origem_comercial}}}

{{{origem_comercial_resource_consultar_origem_comercial_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{origem_comercial_resource_consultar_origem_comercial_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarOrigemComercialUsingGET(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{origem_comercial_resource_consultar_origem_comercial_param_id}}} | 

### Return type

[**OrigemComercialResponse**](OrigemComercialResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET22"></a>
# **consultarUsingGET22**
> EstabelecimentoResponse consultarUsingGET22(id)

{{{estabelecimento_resource_consultar}}}

{{{estabelecimento_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{estabelecimento_resource_consultar_param_id_estabelecimento}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET22(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{estabelecimento_resource_consultar_param_id_estabelecimento}}} | 

### Return type

[**EstabelecimentoResponse**](EstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET24"></a>
# **consultarUsingGET24**
> GrupoEconomicoResponse consultarUsingGET24(id)

{{{grupo_economico_resource_consultar}}}

{{{grupo_economico_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{grupo_economico_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET24(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{grupo_economico_resource_consultar_param_id}}} | 

### Return type

[**GrupoEconomicoResponse**](GrupoEconomicoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET26"></a>
# **consultarUsingGET26**
> MaquinetaResponse consultarUsingGET26(id)

{{{maquineta_resource_consultar}}}

{{{maquineta_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{maquineta_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET26(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{maquineta_resource_consultar_param_id}}} | 

### Return type

[**MaquinetaResponse**](MaquinetaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET27"></a>
# **consultarUsingGET27**
> OperacaoCredorResponse consultarUsingGET27(id)

{{{operacao_credor_resource_consultar}}}

{{{operacao_credor_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{operacao_credor_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET27(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{operacao_credor_resource_consultar_param_id}}} | 

### Return type

[**OperacaoCredorResponse**](OperacaoCredorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET40"></a>
# **consultarUsingGET40**
> TelefoneEstabelecimentoResponse consultarUsingGET40(id)

{{{telefone_estabelecimento_resource_consultar}}}

{{{telefone_estabelecimento_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{telefone_estabelecimento_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET40(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{telefone_estabelecimento_resource_consultar_param_id}}} | 

### Return type

[**TelefoneEstabelecimentoResponse**](TelefoneEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET42"></a>
# **consultarUsingGET42**
> TerminalResponse consultarUsingGET42(id)

{{{terminal_resource_consultar}}}

{{{terminal_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{terminal_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET42(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{terminal_resource_consultar_param_id}}} | 

### Return type

[**TerminalResponse**](TerminalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET54"></a>
# **consultarUsingGET54**
> VinculoEstabelecimentoAdquirenteResponse consultarUsingGET54(id)

{{{vinculo_estabelecimento_adquirente_resource_consultar}}}

{{{vinculo_estabelecimento_adquirente_resource_consultar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{vinculo_estabelecimento_adquirente_resource_consultar_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET54(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{vinculo_estabelecimento_adquirente_resource_consultar_param_id}}} | 

### Return type

[**VinculoEstabelecimentoAdquirenteResponse**](VinculoEstabelecimentoAdquirenteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desabilitarVinculoUsingPOST"></a>
# **desabilitarVinculoUsingPOST**
> Object desabilitarVinculoUsingPOST(id)

{{{vinculo_estabelecimento_adquirente_resource_desabilitar_vinculo}}}

{{{vinculo_estabelecimento_adquirente_resource_desabilitar_vinculo_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{vinculo_estabelecimento_adquirente_resource_desabilitar_vinculo_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desabilitarVinculoUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{vinculo_estabelecimento_adquirente_resource_desabilitar_vinculo_param_id}}} | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="desabilitarVinculoUsingPOST1"></a>
# **desabilitarVinculoUsingPOST1**
> Object desabilitarVinculoUsingPOST1(id, vinculoOperacaoPersist)

{{{vinculo_operacao_resource_desabilitar_vinculo}}}

{{{vinculo_operacao_resource_desabilitar_vinculo_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{vinculo_operacao_resource_desabilitar_vinculo_param_id}}}

var vinculoOperacaoPersist = new Pier.VinculoOperacaoPersist(); // {VinculoOperacaoPersist} vinculoOperacaoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.desabilitarVinculoUsingPOST1(id, vinculoOperacaoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{vinculo_operacao_resource_desabilitar_vinculo_param_id}}} | 
 **vinculoOperacaoPersist** | [**VinculoOperacaoPersist**](VinculoOperacaoPersist.md)| vinculoOperacaoPersist | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="habilitarVinculoUsingPOST"></a>
# **habilitarVinculoUsingPOST**
> Object habilitarVinculoUsingPOST(id)

{{{vinculo_estabelecimento_adquirente_resource_habilitar_vinculo}}}

{{{vinculo_estabelecimento_adquirente_resource_habilitar_vinculo_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{vinculo_estabelecimento_adquirente_resource_habilitar_vinculo_param_id}}}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.habilitarVinculoUsingPOST(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{vinculo_estabelecimento_adquirente_resource_habilitar_vinculo_param_id}}} | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="habilitarVinculoUsingPOST1"></a>
# **habilitarVinculoUsingPOST1**
> Object habilitarVinculoUsingPOST1(id, vinculoOperacaoPersist)

{{{vinculo_operacao_resource_habilitar_vinculo}}}

{{{vinculo_operacao_resource_habilitar_vinculo_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{vinculo_operacao_resource_habilitar_vinculo_param_id}}}

var vinculoOperacaoPersist = new Pier.VinculoOperacaoPersist(); // {VinculoOperacaoPersist} vinculoOperacaoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.habilitarVinculoUsingPOST1(id, vinculoOperacaoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{vinculo_operacao_resource_habilitar_vinculo_param_id}}} | 
 **vinculoOperacaoPersist** | [**VinculoOperacaoPersist**](VinculoOperacaoPersist.md)| vinculoOperacaoPersist | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listaOperacaoUsingGET"></a>
# **listaOperacaoUsingGET**
> PageOperacaoResponse listaOperacaoUsingGET(opts)

{{{operacao_resource_lista_operacao}}}

{{{operacao_resource_lista_operacao_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idOperacao': 789, // {Integer} {{{operacao_request_id_operacao_value}}}
  'codigoProcessamento': "codigoProcessamento_example" // {String} {{{operacao_request_codigo_processamento_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listaOperacaoUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idOperacao** | **Integer**| {{{operacao_request_id_operacao_value}}} | [optional] 
 **codigoProcessamento** | **String**| {{{operacao_request_codigo_processamento_value}}} | [optional] 

### Return type

[**PageOperacaoResponse**](PageOperacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarMCCUsingGET"></a>
# **listarMCCUsingGET**
> PageMCCResponse listarMCCUsingGET(opts)

{{{m_c_c_resource_listar_m_c_c}}}

{{{m_c_c_resource_listar_m_c_c_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

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
api.listarMCCUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageMCCResponse**](PageMCCResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarOrigensComerciaisUsingGET"></a>
# **listarOrigensComerciaisUsingGET**
> PageOrigemComercialResponse listarOrigensComerciaisUsingGET(opts)

{{{origem_comercial_resource_listar_origens_comerciais}}}

{{{origem_comercial_resource_listar_origens_comerciais_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{origem_comercial_request_id_value}}}
  'nome': "nome_example", // {String} {{{origem_comercial_request_nome_value}}}
  'status': 56, // {Integer} {{{origem_comercial_request_status_value}}}
  'idEstabelecimento': 789, // {Integer} {{{origem_comercial_request_id_estabelecimento_value}}}
  'idProduto': 789, // {Integer} {{{origem_comercial_request_id_produto_value}}}
  'descricao': "descricao_example", // {String} {{{origem_comercial_request_descricao_value}}}
  'idTipoOrigemComercial': 789, // {Integer} {{{origem_comercial_request_id_tipo_origem_comercial_value}}}
  'idGrupoOrigemComercial': 789, // {Integer} {{{origem_comercial_request_id_grupo_origem_comercial_value}}}
  'flagPreAprovado': true, // {Boolean} {{{origem_comercial_request_flag_pre_aprovado_value}}}
  'flagAprovacaoImediata': true, // {Boolean} {{{origem_comercial_request_flag_aprovacao_imediata_value}}}
  'nomeFantasiaPlastico': "nomeFantasiaPlastico_example", // {String} {{{origem_comercial_request_nome_fantasia_plastico_value}}}
  'flagCartaoProvisorio': true, // {Boolean} {{{origem_comercial_request_flag_cartao_provisorio_value}}}
  'flagCartaoDefinitivo': true, // {Boolean} {{{origem_comercial_request_flag_cartao_definitivo_value}}}
  'usuario': "usuario_example", // {String} {{{origem_comercial_request_usuario_value}}}
  'senha': "senha_example", // {String} {{{origem_comercial_request_senha_value}}}
  'flagOrigemExterna': true, // {Boolean} {{{origem_comercial_request_flag_origem_externa_value}}}
  'flagModificado': true, // {Boolean} {{{origem_comercial_request_flag_modificado_value}}}
  'flagEnviaFaturaUsuario': true, // {Boolean} {{{origem_comercial_request_flag_envia_fatura_usuario_value}}}
  'flagCreditoFaturamento': true, // {Boolean} {{{origem_comercial_request_flag_credito_faturamento_value}}}
  'flagConcedeLimiteProvisorio': true, // {Boolean} {{{origem_comercial_request_flag_concede_limite_provisorio_value}}}
  'flagDigitalizarDoc': true, // {Boolean} {{{origem_comercial_request_flag_digitalizar_doc_value}}}
  'flagEmbossingLoja': true, // {Boolean} {{{origem_comercial_request_flag_embossing_loja_value}}}
  'flagConsultaPrevia': true, // {Boolean} {{{origem_comercial_request_flag_consulta_previa_value}}}
  'tipoPessoa': "tipoPessoa_example" // {String} {{{origem_comercial_request_tipo_pessoa_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarOrigensComerciaisUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{origem_comercial_request_id_value}}} | [optional] 
 **nome** | **String**| {{{origem_comercial_request_nome_value}}} | [optional] 
 **status** | **Integer**| {{{origem_comercial_request_status_value}}} | [optional] 
 **idEstabelecimento** | **Integer**| {{{origem_comercial_request_id_estabelecimento_value}}} | [optional] 
 **idProduto** | **Integer**| {{{origem_comercial_request_id_produto_value}}} | [optional] 
 **descricao** | **String**| {{{origem_comercial_request_descricao_value}}} | [optional] 
 **idTipoOrigemComercial** | **Integer**| {{{origem_comercial_request_id_tipo_origem_comercial_value}}} | [optional] 
 **idGrupoOrigemComercial** | **Integer**| {{{origem_comercial_request_id_grupo_origem_comercial_value}}} | [optional] 
 **flagPreAprovado** | **Boolean**| {{{origem_comercial_request_flag_pre_aprovado_value}}} | [optional] 
 **flagAprovacaoImediata** | **Boolean**| {{{origem_comercial_request_flag_aprovacao_imediata_value}}} | [optional] 
 **nomeFantasiaPlastico** | **String**| {{{origem_comercial_request_nome_fantasia_plastico_value}}} | [optional] 
 **flagCartaoProvisorio** | **Boolean**| {{{origem_comercial_request_flag_cartao_provisorio_value}}} | [optional] 
 **flagCartaoDefinitivo** | **Boolean**| {{{origem_comercial_request_flag_cartao_definitivo_value}}} | [optional] 
 **usuario** | **String**| {{{origem_comercial_request_usuario_value}}} | [optional] 
 **senha** | **String**| {{{origem_comercial_request_senha_value}}} | [optional] 
 **flagOrigemExterna** | **Boolean**| {{{origem_comercial_request_flag_origem_externa_value}}} | [optional] 
 **flagModificado** | **Boolean**| {{{origem_comercial_request_flag_modificado_value}}} | [optional] 
 **flagEnviaFaturaUsuario** | **Boolean**| {{{origem_comercial_request_flag_envia_fatura_usuario_value}}} | [optional] 
 **flagCreditoFaturamento** | **Boolean**| {{{origem_comercial_request_flag_credito_faturamento_value}}} | [optional] 
 **flagConcedeLimiteProvisorio** | **Boolean**| {{{origem_comercial_request_flag_concede_limite_provisorio_value}}} | [optional] 
 **flagDigitalizarDoc** | **Boolean**| {{{origem_comercial_request_flag_digitalizar_doc_value}}} | [optional] 
 **flagEmbossingLoja** | **Boolean**| {{{origem_comercial_request_flag_embossing_loja_value}}} | [optional] 
 **flagConsultaPrevia** | **Boolean**| {{{origem_comercial_request_flag_consulta_previa_value}}} | [optional] 
 **tipoPessoa** | **String**| {{{origem_comercial_request_tipo_pessoa_value}}} | [optional] 

### Return type

[**PageOrigemComercialResponse**](PageOrigemComercialResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposAdquirentesUsingGET"></a>
# **listarTiposAdquirentesUsingGET**
> PageEntidadeResponse listarTiposAdquirentesUsingGET(opts)

{{{vinculo_estabelecimento_adquirente_resource_listar_tipos_adquirentes}}}

{{{vinculo_estabelecimento_adquirente_resource_listar_tipos_adquirentes_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

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
api.listarTiposAdquirentesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageEntidadeResponse**](PageEntidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposEstabelecimentosUsingGET"></a>
# **listarTiposEstabelecimentosUsingGET**
> PageTipoEstabelecimentoResponse listarTiposEstabelecimentosUsingGET(opts)

{{{tipo_estabelecimento_resource_listar_tipos_estabelecimentos}}}

{{{tipo_estabelecimento_resource_listar_tipos_estabelecimentos_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'descricao': "descricao_example" // {String} {{{tipo_estabelecimento_request_descricao_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTiposEstabelecimentosUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **descricao** | **String**| {{{tipo_estabelecimento_request_descricao_value}}} | [optional] 

### Return type

[**PageTipoEstabelecimentoResponse**](PageTipoEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposMaquinetasUsingGET"></a>
# **listarTiposMaquinetasUsingGET**
> PageCampoCodificadoDescricaoResponse listarTiposMaquinetasUsingGET(opts)

{{{maquineta_resource_listar_tipos_maquinetas}}}

{{{maquineta_resource_listar_tipos_maquinetas_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

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
api.listarTiposMaquinetasUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageCampoCodificadoDescricaoResponse**](PageCampoCodificadoDescricaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposOrigensComerciaisUsingGET"></a>
# **listarTiposOrigensComerciaisUsingGET**
> PageTipoOrigemComercialResponse listarTiposOrigensComerciaisUsingGET(opts)

{{{tipo_origem_comercial_resource_listar_tipos_origens_comerciais}}}

{{{tipo_origem_comercial_resource_listar_tipos_origens_comerciais_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'nome': "nome_example" // {String} {{{tipo_origem_comercial_request_nome_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarTiposOrigensComerciaisUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **nome** | **String**| {{{tipo_origem_comercial_request_nome_value}}} | [optional] 

### Return type

[**PageTipoOrigemComercialResponse**](PageTipoOrigemComercialResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposTerminaisUsingGET1"></a>
# **listarTiposTerminaisUsingGET1**
> PageTipoTerminalResponse listarTiposTerminaisUsingGET1(opts)

{{{terminal_resource_listar_tipos_terminais}}}

{{{terminal_resource_listar_tipos_terminais_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

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
api.listarTiposTerminaisUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 

### Return type

[**PageTipoTerminalResponse**](PageTipoTerminalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET26"></a>
# **listarUsingGET26**
> PageEstabelecimentoResponse listarUsingGET26(opts)

{{{estabelecimento_resource_listar}}}

{{{estabelecimento_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{estabelecimento_request_id_value}}}
  'idGrupoEconomico': 789, // {Integer} {{{estabelecimento_request_id_grupo_economico_value}}}
  'numeroReceitaFederal': "numeroReceitaFederal_example", // {String} {{{estabelecimento_request_numero_receita_federal_value}}}
  'nome': "nome_example", // {String} {{{estabelecimento_request_nome_value}}}
  'descricao': "descricao_example", // {String} {{{estabelecimento_request_descricao_value}}}
  'nomeFantasia': "nomeFantasia_example", // {String} {{{estabelecimento_request_nome_fantasia_value}}}
  'cep': "cep_example", // {String} {{{estabelecimento_request_cep_value}}}
  'nomeLogradouro': "nomeLogradouro_example", // {String} {{{estabelecimento_request_nome_logradouro_value}}}
  'numeroEndereco': 56, // {Integer} {{{estabelecimento_request_numero_endereco_value}}}
  'complemento': "complemento_example", // {String} {{{estabelecimento_request_complemento_value}}}
  'bairro': "bairro_example", // {String} {{{estabelecimento_request_bairro_value}}}
  'cidade': "cidade_example", // {String} {{{estabelecimento_request_cidade_value}}}
  'uf': "uf_example", // {String} {{{estabelecimento_request_uf_value}}}
  'pais': "pais_example", // {String} {{{estabelecimento_request_pais_value}}}
  'dataCadastramento': "dataCadastramento_example", // {String} {{{estabelecimento_request_data_cadastramento_value}}}
  'contato': "contato_example", // {String} {{{estabelecimento_request_contato_value}}}
  'email': "email_example", // {String} {{{estabelecimento_request_email_value}}}
  'flagArquivoSecrFazenda': 56, // {Integer} {{{estabelecimento_request_flag_arquivo_secr_fazenda_value}}}
  'flagCartaoDigitado': 56, // {Integer} {{{estabelecimento_request_flag_cartao_digitado_value}}}
  'inativo': 56, // {Integer} {{{estabelecimento_request_inativo_value}}}
  'idPais': 789, // {Integer} {{{estabelecimento_request_id_pais_value}}}
  'mcc': 789, // {Integer} {{{estabelecimento_request_mcc_value}}}
  'idTipoEstabelecimento': 789, // {Integer} {{{estabelecimento_request_id_tipo_estabelecimento_value}}}
  'correspondencia': 56, // {Integer} {{{estabelecimento_request_correspondencia_value}}}
  'idMoeda': 789, // {Integer} {{{estabelecimento_request_id_moeda_value}}}
  'tipoPagamento': "tipoPagamento_example", // {String} {{{estabelecimento_request_tipo_pagamento_value}}}
  'numeroEstabelecimento': "numeroEstabelecimento_example", // {String} {{{estabelecimento_request_numero_estabelecimento_value}}}
  'cep2': "cep2_example", // {String} {{{estabelecimento_request_cep2_value}}}
  'nomeLogradouro2': "nomeLogradouro2_example", // {String} {{{estabelecimento_request_nome_logradouro2_value}}}
  'numeroEndereco2': 56, // {Integer} {{{estabelecimento_request_numero_endereco2_value}}}
  'complemento2': "complemento2_example", // {String} {{{estabelecimento_request_complemento2_value}}}
  'bairro2': "bairro2_example", // {String} {{{estabelecimento_request_bairro2_value}}}
  'cidade2': "cidade2_example", // {String} {{{estabelecimento_request_cidade2_value}}}
  'uf2': "uf2_example", // {String} {{{estabelecimento_request_uf2_value}}}
  'flagMatriz': 56 // {Integer} {{{estabelecimento_request_flag_matriz_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET26(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{estabelecimento_request_id_value}}} | [optional] 
 **idGrupoEconomico** | **Integer**| {{{estabelecimento_request_id_grupo_economico_value}}} | [optional] 
 **numeroReceitaFederal** | **String**| {{{estabelecimento_request_numero_receita_federal_value}}} | [optional] 
 **nome** | **String**| {{{estabelecimento_request_nome_value}}} | [optional] 
 **descricao** | **String**| {{{estabelecimento_request_descricao_value}}} | [optional] 
 **nomeFantasia** | **String**| {{{estabelecimento_request_nome_fantasia_value}}} | [optional] 
 **cep** | **String**| {{{estabelecimento_request_cep_value}}} | [optional] 
 **nomeLogradouro** | **String**| {{{estabelecimento_request_nome_logradouro_value}}} | [optional] 
 **numeroEndereco** | **Integer**| {{{estabelecimento_request_numero_endereco_value}}} | [optional] 
 **complemento** | **String**| {{{estabelecimento_request_complemento_value}}} | [optional] 
 **bairro** | **String**| {{{estabelecimento_request_bairro_value}}} | [optional] 
 **cidade** | **String**| {{{estabelecimento_request_cidade_value}}} | [optional] 
 **uf** | **String**| {{{estabelecimento_request_uf_value}}} | [optional] 
 **pais** | **String**| {{{estabelecimento_request_pais_value}}} | [optional] 
 **dataCadastramento** | **String**| {{{estabelecimento_request_data_cadastramento_value}}} | [optional] 
 **contato** | **String**| {{{estabelecimento_request_contato_value}}} | [optional] 
 **email** | **String**| {{{estabelecimento_request_email_value}}} | [optional] 
 **flagArquivoSecrFazenda** | **Integer**| {{{estabelecimento_request_flag_arquivo_secr_fazenda_value}}} | [optional] 
 **flagCartaoDigitado** | **Integer**| {{{estabelecimento_request_flag_cartao_digitado_value}}} | [optional] 
 **inativo** | **Integer**| {{{estabelecimento_request_inativo_value}}} | [optional] 
 **idPais** | **Integer**| {{{estabelecimento_request_id_pais_value}}} | [optional] 
 **mcc** | **Integer**| {{{estabelecimento_request_mcc_value}}} | [optional] 
 **idTipoEstabelecimento** | **Integer**| {{{estabelecimento_request_id_tipo_estabelecimento_value}}} | [optional] 
 **correspondencia** | **Integer**| {{{estabelecimento_request_correspondencia_value}}} | [optional] 
 **idMoeda** | **Integer**| {{{estabelecimento_request_id_moeda_value}}} | [optional] 
 **tipoPagamento** | **String**| {{{estabelecimento_request_tipo_pagamento_value}}} | [optional] 
 **numeroEstabelecimento** | **String**| {{{estabelecimento_request_numero_estabelecimento_value}}} | [optional] 
 **cep2** | **String**| {{{estabelecimento_request_cep2_value}}} | [optional] 
 **nomeLogradouro2** | **String**| {{{estabelecimento_request_nome_logradouro2_value}}} | [optional] 
 **numeroEndereco2** | **Integer**| {{{estabelecimento_request_numero_endereco2_value}}} | [optional] 
 **complemento2** | **String**| {{{estabelecimento_request_complemento2_value}}} | [optional] 
 **bairro2** | **String**| {{{estabelecimento_request_bairro2_value}}} | [optional] 
 **cidade2** | **String**| {{{estabelecimento_request_cidade2_value}}} | [optional] 
 **uf2** | **String**| {{{estabelecimento_request_uf2_value}}} | [optional] 
 **flagMatriz** | **Integer**| {{{estabelecimento_request_flag_matriz_value}}} | [optional] 

### Return type

[**PageEstabelecimentoResponse**](PageEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET29"></a>
# **listarUsingGET29**
> PageGrupoEconomicoResponse listarUsingGET29(opts)

{{{grupo_economico_resource_listar}}}

{{{grupo_economico_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'razaoSocial': "razaoSocial_example", // {String} {{{grupo_economico_request_razao_social_value}}}
  'nomeCredor': "nomeCredor_example", // {String} {{{grupo_economico_request_nome_credor_value}}}
  'numeroReceitaFederal': "numeroReceitaFederal_example", // {String} {{{grupo_economico_request_numero_receita_federal_value}}}
  'inscricaoEstadual': "inscricaoEstadual_example", // {String} {{{grupo_economico_request_inscricao_estadual_value}}}
  'contato': "contato_example", // {String} {{{grupo_economico_request_contato_value}}}
  'banco': 56, // {Integer} {{{grupo_economico_request_banco_value}}}
  'agencia': 56, // {Integer} {{{grupo_economico_request_agencia_value}}}
  'digitoAgencia': "digitoAgencia_example", // {String} {{{grupo_economico_request_digito_agencia_value}}}
  'contaCorrente': "contaCorrente_example", // {String} {{{grupo_economico_request_conta_corrente_value}}}
  'digitoContaCorrente': "digitoContaCorrente_example", // {String} {{{grupo_economico_request_digito_conta_corrente_value}}}
  'periodicidade': "periodicidade_example", // {String} {{{grupo_economico_request_periodicidade_value}}}
  'pagamentoSemanal': "pagamentoSemanal_example", // {String} {{{grupo_economico_request_pagamento_semanal_value}}}
  'pagamentoMensal': 56, // {Integer} {{{grupo_economico_request_pagamento_mensal_value}}}
  'pagamentoDecendialPrimeiro': 56, // {Integer} {{{grupo_economico_request_pagamento_decendial_primeiro_value}}}
  'pagamentoDecendialSegundo': 56, // {Integer} {{{grupo_economico_request_pagamento_decendial_segundo_value}}}
  'pagamentoDecendialTerceiro': 56, // {Integer} {{{grupo_economico_request_pagamento_decendial_terceiro_value}}}
  'pagamentoQuinzenalPrimeiro': 56, // {Integer} {{{grupo_economico_request_pagamento_quinzenal_primeiro_value}}}
  'pagamentoQuinzenalSegundo': 56, // {Integer} {{{grupo_economico_request_pagamento_quinzenal_segundo_value}}}
  'percentualRAV': 3.4, // {Number} {{{grupo_economico_request_percentual_r_a_v_value}}}
  'recebeRAV': "recebeRAV_example", // {String} {{{grupo_economico_request_recebe_r_a_v_value}}}
  'percentualMultiplica': 3.4, // {Number} {{{grupo_economico_request_percentual_multiplica_value}}}
  'taxaAdm': 3.4, // {Number} {{{grupo_economico_request_taxa_adm_value}}}
  'taxaBanco': 3.4, // {Number} {{{grupo_economico_request_taxa_banco_value}}}
  'limiteRAV': 3.4, // {Number} {{{grupo_economico_request_limite_r_a_v_value}}}
  'idCredorRAV': 789 // {Integer} {{{grupo_economico_request_id_credor_r_a_v_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET29(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **razaoSocial** | **String**| {{{grupo_economico_request_razao_social_value}}} | [optional] 
 **nomeCredor** | **String**| {{{grupo_economico_request_nome_credor_value}}} | [optional] 
 **numeroReceitaFederal** | **String**| {{{grupo_economico_request_numero_receita_federal_value}}} | [optional] 
 **inscricaoEstadual** | **String**| {{{grupo_economico_request_inscricao_estadual_value}}} | [optional] 
 **contato** | **String**| {{{grupo_economico_request_contato_value}}} | [optional] 
 **banco** | **Integer**| {{{grupo_economico_request_banco_value}}} | [optional] 
 **agencia** | **Integer**| {{{grupo_economico_request_agencia_value}}} | [optional] 
 **digitoAgencia** | **String**| {{{grupo_economico_request_digito_agencia_value}}} | [optional] 
 **contaCorrente** | **String**| {{{grupo_economico_request_conta_corrente_value}}} | [optional] 
 **digitoContaCorrente** | **String**| {{{grupo_economico_request_digito_conta_corrente_value}}} | [optional] 
 **periodicidade** | **String**| {{{grupo_economico_request_periodicidade_value}}} | [optional] 
 **pagamentoSemanal** | **String**| {{{grupo_economico_request_pagamento_semanal_value}}} | [optional] 
 **pagamentoMensal** | **Integer**| {{{grupo_economico_request_pagamento_mensal_value}}} | [optional] 
 **pagamentoDecendialPrimeiro** | **Integer**| {{{grupo_economico_request_pagamento_decendial_primeiro_value}}} | [optional] 
 **pagamentoDecendialSegundo** | **Integer**| {{{grupo_economico_request_pagamento_decendial_segundo_value}}} | [optional] 
 **pagamentoDecendialTerceiro** | **Integer**| {{{grupo_economico_request_pagamento_decendial_terceiro_value}}} | [optional] 
 **pagamentoQuinzenalPrimeiro** | **Integer**| {{{grupo_economico_request_pagamento_quinzenal_primeiro_value}}} | [optional] 
 **pagamentoQuinzenalSegundo** | **Integer**| {{{grupo_economico_request_pagamento_quinzenal_segundo_value}}} | [optional] 
 **percentualRAV** | [**Number**](.md)| {{{grupo_economico_request_percentual_r_a_v_value}}} | [optional] 
 **recebeRAV** | **String**| {{{grupo_economico_request_recebe_r_a_v_value}}} | [optional] 
 **percentualMultiplica** | [**Number**](.md)| {{{grupo_economico_request_percentual_multiplica_value}}} | [optional] 
 **taxaAdm** | [**Number**](.md)| {{{grupo_economico_request_taxa_adm_value}}} | [optional] 
 **taxaBanco** | [**Number**](.md)| {{{grupo_economico_request_taxa_banco_value}}} | [optional] 
 **limiteRAV** | [**Number**](.md)| {{{grupo_economico_request_limite_r_a_v_value}}} | [optional] 
 **idCredorRAV** | **Integer**| {{{grupo_economico_request_id_credor_r_a_v_value}}} | [optional] 

### Return type

[**PageGrupoEconomicoResponse**](PageGrupoEconomicoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET30"></a>
# **listarUsingGET30**
> PageGrupoOrigemComercialResponse listarUsingGET30(opts)

{{{grupo_origem_comercial_resource_listar}}}

{{{grupo_origem_comercial_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'nome': "nome_example" // {String} {{{grupo_origem_comercial_request_nome_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET30(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **nome** | **String**| {{{grupo_origem_comercial_request_nome_value}}} | [optional] 

### Return type

[**PageGrupoOrigemComercialResponse**](PageGrupoOrigemComercialResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET33"></a>
# **listarUsingGET33**
> PageMaquinetaResponse listarUsingGET33(opts)

{{{maquineta_resource_listar}}}

{{{maquineta_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idEstabelecimento': 789 // {Integer} {{{maquineta_request_id_estabelecimento_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET33(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idEstabelecimento** | **Integer**| {{{maquineta_request_id_estabelecimento_value}}} | [optional] 

### Return type

[**PageMaquinetaResponse**](PageMaquinetaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET34"></a>
# **listarUsingGET34**
> PageMoedaResponse listarUsingGET34(opts)

{{{moeda_resource_listar}}}

{{{moeda_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'codigoMoeda': "codigoMoeda_example", // {String} {{{moeda_request_codigo_moeda_value}}}
  'simbolo': "simbolo_example", // {String} {{{moeda_request_simbolo_value}}}
  'descricao': "descricao_example" // {String} {{{moeda_request_descricao_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET34(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **codigoMoeda** | **String**| {{{moeda_request_codigo_moeda_value}}} | [optional] 
 **simbolo** | **String**| {{{moeda_request_simbolo_value}}} | [optional] 
 **descricao** | **String**| {{{moeda_request_descricao_value}}} | [optional] 

### Return type

[**PageMoedaResponse**](PageMoedaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET35"></a>
# **listarUsingGET35**
> PageOperacaoCredorResponse listarUsingGET35(opts)

{{{operacao_credor_resource_listar}}}

{{{operacao_credor_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idOperacao': 789, // {Integer} {{{operacao_credor_request_id_operacao_value}}}
  'idCredor': 789, // {Integer} {{{operacao_credor_request_id_credor_value}}}
  'idProduto': 789 // {Integer} {{{operacao_credor_request_id_produto_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET35(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idOperacao** | **Integer**| {{{operacao_credor_request_id_operacao_value}}} | [optional] 
 **idCredor** | **Integer**| {{{operacao_credor_request_id_credor_value}}} | [optional] 
 **idProduto** | **Integer**| {{{operacao_credor_request_id_produto_value}}} | [optional] 

### Return type

[**PageOperacaoCredorResponse**](PageOperacaoCredorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET52"></a>
# **listarUsingGET52**
> PageTelefoneEstabelecimentoResponse listarUsingGET52(opts)

{{{telefone_estabelecimento_resource_listar}}}

{{{telefone_estabelecimento_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idEstabelecimento': 789 // {Integer} {{{telefone_estabelecimento_request_id_estabelecimento_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET52(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idEstabelecimento** | **Integer**| {{{telefone_estabelecimento_request_id_estabelecimento_value}}} | [optional] 

### Return type

[**PageTelefoneEstabelecimentoResponse**](PageTelefoneEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET54"></a>
# **listarUsingGET54**
> PageTerminalResponse listarUsingGET54(opts)

{{{terminal_resource_listar}}}

{{{terminal_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'id': 789, // {Integer} {{{terminal_request_id_value}}}
  'terminal': "terminal_example", // {String} {{{terminal_request_terminal_value}}}
  'numeroEstabelecimento': 789, // {Integer} {{{terminal_request_numero_estabelecimento_value}}}
  'idEstabelecimento': 789 // {Integer} {{{terminal_request_id_estabelecimento_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET54(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **id** | **Integer**| {{{terminal_request_id_value}}} | [optional] 
 **terminal** | **String**| {{{terminal_request_terminal_value}}} | [optional] 
 **numeroEstabelecimento** | **Integer**| {{{terminal_request_numero_estabelecimento_value}}} | [optional] 
 **idEstabelecimento** | **Integer**| {{{terminal_request_id_estabelecimento_value}}} | [optional] 

### Return type

[**PageTerminalResponse**](PageTerminalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET67"></a>
# **listarUsingGET67**
> PageVinculoEstabelecimentoAdquirenteResponse listarUsingGET67(opts)

{{{vinculo_estabelecimento_adquirente_resource_listar}}}

{{{vinculo_estabelecimento_adquirente_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idAdquirente': 789, // {Integer} {{{vinculo_estabelecimento_adquirente_request_id_adquirente_value}}}
  'idEstabelecimento': 789, // {Integer} {{{vinculo_estabelecimento_adquirente_request_id_estabelecimento_value}}}
  'codigoEstabelecimentoAdquirente': "codigoEstabelecimentoAdquirente_example" // {String} {{{vinculo_estabelecimento_adquirente_request_codigo_estabelecimento_adquirente_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET67(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idAdquirente** | **Integer**| {{{vinculo_estabelecimento_adquirente_request_id_adquirente_value}}} | [optional] 
 **idEstabelecimento** | **Integer**| {{{vinculo_estabelecimento_adquirente_request_id_estabelecimento_value}}} | [optional] 
 **codigoEstabelecimentoAdquirente** | **String**| {{{vinculo_estabelecimento_adquirente_request_codigo_estabelecimento_adquirente_value}}} | [optional] 

### Return type

[**PageVinculoEstabelecimentoAdquirenteResponse**](PageVinculoEstabelecimentoAdquirenteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET68"></a>
# **listarUsingGET68**
> PageVinculoOperacaoResponse listarUsingGET68(id, opts)

{{{vinculo_operacao_resource_listar}}}

{{{vinculo_operacao_resource_listar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var id = 789; // {Integer} {{{vinculo_operacao_resource_listar_param_id}}}

var opts = { 
  'sort': ["sort_example"], // {[String]} {{{global_menssagem_sort_sort}}}
  'page': 56, // {Integer} {{{global_menssagem_sort_page_value}}}
  'limit': 56, // {Integer} {{{global_menssagem_sort_limit}}}
  'idProduto': 789, // {Integer} {{{vinculo_operacao_request_id_produto_value}}}
  'idOperacao': 789, // {Integer} {{{vinculo_operacao_request_id_operacao_value}}}
  'codigoMCC': 56 // {Integer} {{{vinculo_operacao_request_codigo_m_c_c_value}}}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET68(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| {{{vinculo_operacao_resource_listar_param_id}}} | 
 **sort** | [**[String]**](String.md)| {{{global_menssagem_sort_sort}}} | [optional] 
 **page** | **Integer**| {{{global_menssagem_sort_page_value}}} | [optional] 
 **limit** | **Integer**| {{{global_menssagem_sort_limit}}} | [optional] 
 **idProduto** | **Integer**| {{{vinculo_operacao_request_id_produto_value}}} | [optional] 
 **idOperacao** | **Integer**| {{{vinculo_operacao_request_id_operacao_value}}} | [optional] 
 **codigoMCC** | **Integer**| {{{vinculo_operacao_request_codigo_m_c_c_value}}} | [optional] 

### Return type

[**PageVinculoOperacaoResponse**](PageVinculoOperacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST20"></a>
# **salvarUsingPOST20**
> MaquinetaResponse salvarUsingPOST20(maquinetaPersist)

{{{maquineta_resource_salvar}}}

{{{maquineta_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var maquinetaPersist = new Pier.MaquinetaPersist(); // {MaquinetaPersist} maquinetaPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST20(maquinetaPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **maquinetaPersist** | [**MaquinetaPersist**](MaquinetaPersist.md)| maquinetaPersist | 

### Return type

[**MaquinetaResponse**](MaquinetaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST21"></a>
# **salvarUsingPOST21**
> OperacaoCredorResponse salvarUsingPOST21(operacaoCredorPersist)

{{{operacao_credor_resource_salvar}}}

{{{operacao_credor_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var operacaoCredorPersist = new Pier.OperacaoCredorPersist(); // {OperacaoCredorPersist} operacaoCredorPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST21(operacaoCredorPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operacaoCredorPersist** | [**OperacaoCredorPersist**](OperacaoCredorPersist.md)| operacaoCredorPersist | 

### Return type

[**OperacaoCredorResponse**](OperacaoCredorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST28"></a>
# **salvarUsingPOST28**
> TelefoneEstabelecimentoResponse salvarUsingPOST28(telefoneEstabelecimentoPersist)

{{{telefone_estabelecimento_resource_salvar}}}

{{{telefone_estabelecimento_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var telefoneEstabelecimentoPersist = new Pier.TelefoneEstabelecimentoPersist(); // {TelefoneEstabelecimentoPersist} telefoneEstabelecimentoPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST28(telefoneEstabelecimentoPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telefoneEstabelecimentoPersist** | [**TelefoneEstabelecimentoPersist**](TelefoneEstabelecimentoPersist.md)| telefoneEstabelecimentoPersist | 

### Return type

[**TelefoneEstabelecimentoResponse**](TelefoneEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST30"></a>
# **salvarUsingPOST30**
> TerminalResponse salvarUsingPOST30(terminalPersist)

{{{terminal_resource_salvar}}}

{{{terminal_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var terminalPersist = new Pier.TerminalPersist(); // {TerminalPersist} terminalPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST30(terminalPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **terminalPersist** | [**TerminalPersist**](TerminalPersist.md)| terminalPersist | 

### Return type

[**TerminalResponse**](TerminalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST35"></a>
# **salvarUsingPOST35**
> VinculoEstabelecimentoAdquirenteResponse salvarUsingPOST35(vinculoEstabelecimentoAdquirentePersist)

{{{vinculo_estabelecimento_adquirente_resource_salvar}}}

{{{vinculo_estabelecimento_adquirente_resource_salvar_notes}}}

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.GlobaltagestabelecimentoApi()

var vinculoEstabelecimentoAdquirentePersist = new Pier.VinculoEstabelecimentoAdquirentePersist(); // {VinculoEstabelecimentoAdquirentePersist} vinculoEstabelecimentoAdquirentePersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST35(vinculoEstabelecimentoAdquirentePersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vinculoEstabelecimentoAdquirentePersist** | [**VinculoEstabelecimentoAdquirentePersist**](VinculoEstabelecimentoAdquirentePersist.md)| vinculoEstabelecimentoAdquirentePersist | 

### Return type

[**VinculoEstabelecimentoAdquirenteResponse**](VinculoEstabelecimentoAdquirenteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

