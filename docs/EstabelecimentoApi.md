# Pier.EstabelecimentoApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterarOrigemComercialUsingPUT**](EstabelecimentoApi.md#alterarOrigemComercialUsingPUT) | **PUT** /api/origens-comerciais/{id} | Alterar Origem Comercial
[**alterarUsingPUT10**](EstabelecimentoApi.md#alterarUsingPUT10) | **PUT** /api/maquinetas/{id} | Altera uma Maquineta
[**alterarUsingPUT11**](EstabelecimentoApi.md#alterarUsingPUT11) | **PUT** /api/regras-operacoes-estabelecimentos/{id} | Altera uma Regra Opera\u00C3\u00A7\u00C3\u00A3o
[**alterarUsingPUT15**](EstabelecimentoApi.md#alterarUsingPUT15) | **PUT** /api/telefones-estabelecimentos/{id} | Altera um Telefone do estabelecimento
[**alterarUsingPUT17**](EstabelecimentoApi.md#alterarUsingPUT17) | **PUT** /api/terminais/{id} | Altera um Terminal
[**alterarUsingPUT6**](EstabelecimentoApi.md#alterarUsingPUT6) | **PUT** /api/estabelecimentos/{id} | Alterar um estabelecimento
[**alterarUsingPUT8**](EstabelecimentoApi.md#alterarUsingPUT8) | **PUT** /api/grupos-economicos/{id} | Alterar Grupo Econ\u00C3\u00B4mico
[**cadastrarOrigemComercialUsingPOST**](EstabelecimentoApi.md#cadastrarOrigemComercialUsingPOST) | **POST** /api/origens-comerciais | Cadastrar Origem Comercial
[**cadastrarUsingPOST2**](EstabelecimentoApi.md#cadastrarUsingPOST2) | **POST** /api/estabelecimentos | Cadastrar um estabelecimento
[**cadastrarUsingPOST3**](EstabelecimentoApi.md#cadastrarUsingPOST3) | **POST** /api/grupos-economicos | Cadastrar Grupo Econ\u00C3\u00B4mico
[**consultaOperacaoUsingGET**](EstabelecimentoApi.md#consultaOperacaoUsingGET) | **GET** /api/tipos-operacoes-estabelecimentos/{id} | Apresenta dados de um determinado tipo de opera\u00C3\u00A7\u00C3\u00A3o
[**consultarOrigemComercialUsingGET**](EstabelecimentoApi.md#consultarOrigemComercialUsingGET) | **GET** /api/origens-comerciais/{id} | Consultar Origem Comercial
[**consultarUsingGET15**](EstabelecimentoApi.md#consultarUsingGET15) | **GET** /api/estabelecimentos/{id} | Consultar estabelecimento por id
[**consultarUsingGET17**](EstabelecimentoApi.md#consultarUsingGET17) | **GET** /api/grupos-economicos/{id} | Consultar grupo econ\u00C3\u00B4mico
[**consultarUsingGET19**](EstabelecimentoApi.md#consultarUsingGET19) | **GET** /api/maquinetas/{id} | Apresenta os dados de uma determinada maquineta
[**consultarUsingGET20**](EstabelecimentoApi.md#consultarUsingGET20) | **GET** /api/regras-operacoes-estabelecimentos/{id} | Apresenta os dados de uma determinada Regra Opera\u00C3\u00A7\u00C3\u00A3o
[**consultarUsingGET28**](EstabelecimentoApi.md#consultarUsingGET28) | **GET** /api/telefones-estabelecimentos/{id} | Apresenta os dados de um determinado telefone de um estabelecimento
[**consultarUsingGET30**](EstabelecimentoApi.md#consultarUsingGET30) | **GET** /api/terminais/{id} | Apresenta os dados de um determinado Terminal
[**consultarUsingGET42**](EstabelecimentoApi.md#consultarUsingGET42) | **GET** /api/adquirentes-estabelecimento/{id} | Apresenta os dados de um determinado V\u00C3\u00ADnculo
[**desabilitarVinculoUsingPOST**](EstabelecimentoApi.md#desabilitarVinculoUsingPOST) | **POST** /api/adquirentes-estabelecimento/{id}/desabilitar | Desabilitar um V\u00C3\u00ADnculo
[**desabilitarVinculoUsingPOST1**](EstabelecimentoApi.md#desabilitarVinculoUsingPOST1) | **POST** /api/estabelecimentos/{id}/desabilitar-operacao | Desabilitar um v\u00C3\u00ADnculo opera\u00C3\u00A7\u00C3\u00A3o
[**habilitarVinculoUsingPOST**](EstabelecimentoApi.md#habilitarVinculoUsingPOST) | **POST** /api/adquirentes-estabelecimento/{id}/habilitar | Habilitar um V\u00C3\u00ADnculo
[**habilitarVinculoUsingPOST1**](EstabelecimentoApi.md#habilitarVinculoUsingPOST1) | **POST** /api/estabelecimentos/{id}/habilitar-operacao | Habilitar um v\u00C3\u00ADnculo opera\u00C3\u00A7\u00C3\u00A3o
[**listaOperacaoUsingGET**](EstabelecimentoApi.md#listaOperacaoUsingGET) | **GET** /api/tipos-operacoes-estabelecimentos | Apresenta dados de opera\u00C3\u00A7\u00C3\u00B5es em uma lista
[**listarMCCUsingGET**](EstabelecimentoApi.md#listarMCCUsingGET) | **GET** /api/mcc-estabelecimentos | Lista os MCCs
[**listarOrigensComerciaisUsingGET**](EstabelecimentoApi.md#listarOrigensComerciaisUsingGET) | **GET** /api/origens-comerciais | Listar Origens Comerciais
[**listarTiposAdquirentesUsingGET**](EstabelecimentoApi.md#listarTiposAdquirentesUsingGET) | **GET** /api/tipos-adquirentes | Lista os Tipos de adquirentes
[**listarTiposMaquinetasUsingGET**](EstabelecimentoApi.md#listarTiposMaquinetasUsingGET) | **GET** /api/tipos-maquinetas | Lista os Tipos de  Maquinetas
[**listarTiposTerminaisUsingGET1**](EstabelecimentoApi.md#listarTiposTerminaisUsingGET1) | **GET** /api/tipos-terminais-estabelecimento | Lista os Tipos Terminais
[**listarUsingGET19**](EstabelecimentoApi.md#listarUsingGET19) | **GET** /api/estabelecimentos | Lista Estabelecimentos
[**listarUsingGET21**](EstabelecimentoApi.md#listarUsingGET21) | **GET** /api/grupos-economicos | Listar grupos econ\u00C3\u00B4micos
[**listarUsingGET23**](EstabelecimentoApi.md#listarUsingGET23) | **GET** /api/maquinetas | Lista as Maquinetas
[**listarUsingGET24**](EstabelecimentoApi.md#listarUsingGET24) | **GET** /api/tipos-moedas | Lista os tipos de moedas do emissor 
[**listarUsingGET25**](EstabelecimentoApi.md#listarUsingGET25) | **GET** /api/regras-operacoes-estabelecimentos | Lista as Regras Opera\u00C3\u00A7\u00C3\u00B5es
[**listarUsingGET36**](EstabelecimentoApi.md#listarUsingGET36) | **GET** /api/telefones-estabelecimentos | Lista os Telefones Estabelecimentos
[**listarUsingGET38**](EstabelecimentoApi.md#listarUsingGET38) | **GET** /api/terminais | Lista os Terminais cadastrados no Emissor
[**listarUsingGET49**](EstabelecimentoApi.md#listarUsingGET49) | **GET** /api/adquirentes-estabelecimento | Lista os V\u00C3\u00ADnculos dos estabelecimento com os adquirentes
[**listarUsingGET50**](EstabelecimentoApi.md#listarUsingGET50) | **GET** /api/estabelecimentos/{id}/operacoes | Lista os v\u00C3\u00ADnculos cadastrados no Emissor
[**salvarUsingPOST15**](EstabelecimentoApi.md#salvarUsingPOST15) | **POST** /api/maquinetas | Realiza o cadastro de uma nova maquineta para um estabelecimento 
[**salvarUsingPOST16**](EstabelecimentoApi.md#salvarUsingPOST16) | **POST** /api/regras-operacoes-estabelecimentos | Realiza o cadastro de uma nova Regra Opera\u00C3\u00A7\u00C3\u00A3o
[**salvarUsingPOST21**](EstabelecimentoApi.md#salvarUsingPOST21) | **POST** /api/telefones-estabelecimentos | Realiza o cadastro de um novo telefone para um estabelecimento 
[**salvarUsingPOST23**](EstabelecimentoApi.md#salvarUsingPOST23) | **POST** /api/terminais | Realiza o cadastro de um novo Terminal
[**salvarUsingPOST28**](EstabelecimentoApi.md#salvarUsingPOST28) | **POST** /api/adquirentes-estabelecimento | Realiza o cadastro de um novo VinculoEstabelecimentoAdquirente


<a name="alterarOrigemComercialUsingPUT"></a>
# **alterarOrigemComercialUsingPUT**
> OrigemComercialResponse alterarOrigemComercialUsingPUT(id, origemComercialUpdate)

Alterar Origem Comercial

Altera uma origem comercial.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da origem comercial

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
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da origem comercial | 
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

Altera uma Maquineta

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o das maquinetas dos estabelecimentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Maquineta (id).

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
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Maquineta (id). | 
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

Altera uma Regra Opera\u00C3\u00A7\u00C3\u00A3o

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o de uma regra opera\u00C3\u00A7\u00C3\u00A3o.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Regra Opera\u00C3\u00A7\u00C3\u00A3o (id).

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
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Regra Opera\u00C3\u00A7\u00C3\u00A3o (id). | 
 **operacaoCredorUpdate** | [**OperacaoCredorUpdate**](OperacaoCredorUpdate.md)| operacaoCredorUpdate | 

### Return type

[**OperacaoCredorResponse**](OperacaoCredorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT15"></a>
# **alterarUsingPUT15**
> TelefoneEstabelecimentoResponse alterarUsingPUT15(id, ddd, telefone, opts)

Altera um Telefone do estabelecimento

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos telefones dos estabelecimentos.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone Estabelecimento (id).

var ddd = "ddd_example"; // {String} C\u00C3\u00B3digo DDD do telefone (id).

var telefone = "telefone_example"; // {String} N\u00C3\u00BAmero do telefone.

var opts = { 
  'ramal': "ramal_example" // {String} N\u00C3\u00BAmero do ramal.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT15(id, ddd, telefone, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone Estabelecimento (id). | 
 **ddd** | **String**| C\u00C3\u00B3digo DDD do telefone (id). | 
 **telefone** | **String**| N\u00C3\u00BAmero do telefone. | 
 **ramal** | **String**| N\u00C3\u00BAmero do ramal. | [optional] 

### Return type

[**TelefoneEstabelecimentoResponse**](TelefoneEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alterarUsingPUT17"></a>
# **alterarUsingPUT17**
> TerminalResponse alterarUsingPUT17(id, terminalUpdate)

Altera um Terminal

Este m\u00C3\u00A9todo realiza a altera\u00C3\u00A7\u00C3\u00A3o dos Terminais.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal (id).

var terminalUpdate = new Pier.TerminalUpdate(); // {TerminalUpdate} terminalUpdate


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.alterarUsingPUT17(id, terminalUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal (id). | 
 **terminalUpdate** | [**TerminalUpdate**](TerminalUpdate.md)| terminalUpdate | 

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

Alterar um estabelecimento

Altera um estabelecimento

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} Id

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
 **id** | **Integer**| Id | 
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

Alterar Grupo Econ\u00C3\u00B4mico

Altera um grupo econ\u00C3\u00B4mico.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do grupo econ\u00C3\u00B4mico

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
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do grupo econ\u00C3\u00B4mico | 
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

Cadastrar Origem Comercial

Cadastra uma origem comercial.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

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

<a name="cadastrarUsingPOST2"></a>
# **cadastrarUsingPOST2**
> EstabelecimentoResponse cadastrarUsingPOST2(persist)

Cadastrar um estabelecimento

Cadastra um novo estabelecimento

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var persist = new Pier.EstabelecimentoPersist(); // {EstabelecimentoPersist} persist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarUsingPOST2(persist, callback);
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

<a name="cadastrarUsingPOST3"></a>
# **cadastrarUsingPOST3**
> GrupoEconomicoResponse cadastrarUsingPOST3(grupoEconomicoDTO)

Cadastrar Grupo Econ\u00C3\u00B4mico

Cadastra um grupo econ\u00C3\u00B4mico.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var grupoEconomicoDTO = new Pier.GrupoEconomicoDTO(); // {GrupoEconomicoDTO} GrupoEconomicoDTO


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cadastrarUsingPOST3(grupoEconomicoDTO, callback);
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

Apresenta dados de um determinado tipo de opera\u00C3\u00A7\u00C3\u00A3o

Este recurso permite consultar dados de um determinado tipo opera\u00C3\u00A7\u00C3\u00A3o a partir do idoperacao

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de processamento da opera\u00C3\u00A7\u00C3\u00A3o (idOperacao).


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
 **id** | **Integer**| C\u00C3\u00B3digo de processamento da opera\u00C3\u00A7\u00C3\u00A3o (idOperacao). | 

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

Consultar Origem Comercial

Consulta uma origem comercial atrav\u00C3\u00A9s do seu identificador.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da origem comercial


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
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o da origem comercial | 

### Return type

[**OrigemComercialResponse**](OrigemComercialResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET15"></a>
# **consultarUsingGET15**
> EstabelecimentoResponse consultarUsingGET15(id)

Consultar estabelecimento por id

Consulta os detalhes de um determinado estabelecimento

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET15(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| Id | 

### Return type

[**EstabelecimentoResponse**](EstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET17"></a>
# **consultarUsingGET17**
> GrupoEconomicoResponse consultarUsingGET17(id)

Consultar grupo econ\u00C3\u00B4mico

Consulta um grupo econ\u00C3\u00B4mico atrav\u00C3\u00A9s do seu identificador.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do grupo econ\u00C3\u00B4mico


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET17(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do grupo econ\u00C3\u00B4mico | 

### Return type

[**GrupoEconomicoResponse**](GrupoEconomicoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET19"></a>
# **consultarUsingGET19**
> MaquinetaResponse consultarUsingGET19(id)

Apresenta os dados de uma determinada maquineta

Este m\u00C3\u00A9todo permite consultar uma determinada maquineta a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Maquineta (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET19(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Maquineta (id). | 

### Return type

[**MaquinetaResponse**](MaquinetaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET20"></a>
# **consultarUsingGET20**
> OperacaoCredorResponse consultarUsingGET20(id)

Apresenta os dados de uma determinada Regra Opera\u00C3\u00A7\u00C3\u00A3o

Este m\u00C3\u00A9todo permite consultar uma determinada regra opera\u00C3\u00A7\u00C3\u00A3o a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Regra Opera\u00C3\u00A7\u00C3\u00A3o (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET20(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Regra Opera\u00C3\u00A7\u00C3\u00A3o (id). | 

### Return type

[**OperacaoCredorResponse**](OperacaoCredorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET28"></a>
# **consultarUsingGET28**
> TelefoneEstabelecimentoResponse consultarUsingGET28(id)

Apresenta os dados de um determinado telefone de um estabelecimento

Este m\u00C3\u00A9todo permite consultar um determinado telefone de um estabelecimento a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone Estabelecimento (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET28(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Telefone Estabelecimento (id). | 

### Return type

[**TelefoneEstabelecimentoResponse**](TelefoneEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET30"></a>
# **consultarUsingGET30**
> TerminalResponse consultarUsingGET30(id)

Apresenta os dados de um determinado Terminal

Este m\u00C3\u00A9todo permite consultar um determinado Terminal a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.consultarUsingGET30(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id). | 

### Return type

[**TerminalResponse**](TerminalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="consultarUsingGET42"></a>
# **consultarUsingGET42**
> VinculoEstabelecimentoAdquirenteResponse consultarUsingGET42(id)

Apresenta os dados de um determinado V\u00C3\u00ADnculo

Este m\u00C3\u00A9todo permite consultar um determinado V\u00C3\u00ADnculo a partir do seu c\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o (id).

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do V\u00C3\u008Dnculo (id).


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
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do V\u00C3\u008Dnculo (id). | 

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

Desabilitar um V\u00C3\u00ADnculo

Este m\u00C3\u00A9todo realiza a desativa\u00C3\u00A7\u00C3\u00A3o de um v\u00C3\u00ADnculo.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do V\u00C3\u00ADnculo (id).


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
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do V\u00C3\u00ADnculo (id). | 

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

Desabilitar um v\u00C3\u00ADnculo opera\u00C3\u00A7\u00C3\u00A3o

Este m\u00C3\u00A9todo permite desabilitar um v\u00C3\u00ADnculo.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id).

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
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id). | 
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

Habilitar um V\u00C3\u00ADnculo

Este m\u00C3\u00A9todo realiza a ativa\u00C3\u00A7\u00C3\u00A3o de um v\u00C3\u00ADnculo.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do V\u00C3\u00ADnculo (id).


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
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do V\u00C3\u00ADnculo (id). | 

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

Habilitar um v\u00C3\u00ADnculo opera\u00C3\u00A7\u00C3\u00A3o

Este m\u00C3\u00A9todo permite habilitar um v\u00C3\u00ADnculo.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id).

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
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id). | 
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

Apresenta dados de opera\u00C3\u00A7\u00C3\u00B5es em uma lista

Este recurso permite listar as opera\u00C3\u00A7\u00C3\u00A3o

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idOperacao': 789, // {Integer} C\u00C3\u00B3digo que identifica a opera\u00C3\u00A7\u00C3\u00A3o
  'codigoProcessamento': "codigoProcessamento_example" // {String} C\u00C3\u00B3digo de processamento usado em transa\u00C3\u00A7\u00C3\u00B5es com o autorizador
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idOperacao** | **Integer**| C\u00C3\u00B3digo que identifica a opera\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **codigoProcessamento** | **String**| C\u00C3\u00B3digo de processamento usado em transa\u00C3\u00A7\u00C3\u00B5es com o autorizador | [optional] 

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

Lista os MCCs

Este m\u00C3\u00A9todo permite que sejam listados os MCCs existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

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

Listar Origens Comerciais

Lista origens comerciais cadastradas.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} Id da origem comercial
  'nome': "nome_example", // {String} Nome da origem comercial
  'status': 56, // {Integer} Indica o status da origem comercial
  'idEstabelecimento': 789, // {Integer} Identificador do estabelecimento
  'idProduto': 789, // {Integer} Identificador do produto
  'descricao': "descricao_example", // {String} Descri\u00C3\u00A7\u00C3\u00A3o da origem comercial
  'idTipoOrigemComercial': 789, // {Integer} Identificador do tipo de origem comercial
  'idGrupoOrigemComercial': 789, // {Integer} Identificador do grupo de origem comercial
  'flagPreAprovado': true, // {Boolean} Indica se permite pr\u00C3\u00A9 aprova\u00C3\u00A7\u00C3\u00A3o
  'flagAprovacaoImediata': true, // {Boolean} Indica se permite aprova\u00C3\u00A7\u00C3\u00A3o imediata
  'nomeFantasiaPlastico': "nomeFantasiaPlastico_example", // {String} Nome fantasia impresso no pl\u00C3\u00A1stico
  'flagCartaoProvisorio': true, // {Boolean} Indica se permite cart\u00C3\u00A3o provis\u00C3\u00B3rio
  'flagCartaoDefinitivo': true, // {Boolean} Indica se permite cart\u00C3\u00A3o definitivo
  'usuario': "usuario_example", // {String} Usu\u00C3\u00A1rio para autentica\u00C3\u00A7\u00C3\u00A3o
  'senha': "senha_example", // {String} Senha para autentica\u00C3\u00A7\u00C3\u00A3o
  'flagOrigemExterna': true, // {Boolean} Indica se \u00C3\u00A9 origem externa
  'flagModificado': true, // {Boolean} Indica se h\u00C3\u00A1 modifica\u00C3\u00A7\u00C3\u00A3o
  'flagEnviaFaturaUsuario': true, // {Boolean} Indica se envia fatura
  'flagCreditoFaturamento': true, // {Boolean} Indica se permite cr\u00C3\u00A9dito de faturamento
  'flagConcedeLimiteProvisorio': true, // {Boolean} Indica se concede limite provis\u00C3\u00B3rio
  'flagDigitalizarDoc': true, // {Boolean} Indica se digitaliza documento
  'flagEmbossingLoja': true, // {Boolean} Indica se realiza embossing em loja
  'flagConsultaPrevia': true, // {Boolean} Indica se realiza consulta pr\u00C3\u00A9via
  'tipoPessoa': "tipoPessoa_example" // {String} Tipo de pessoa
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| Id da origem comercial | [optional] 
 **nome** | **String**| Nome da origem comercial | [optional] 
 **status** | **Integer**| Indica o status da origem comercial | [optional] 
 **idEstabelecimento** | **Integer**| Identificador do estabelecimento | [optional] 
 **idProduto** | **Integer**| Identificador do produto | [optional] 
 **descricao** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o da origem comercial | [optional] 
 **idTipoOrigemComercial** | **Integer**| Identificador do tipo de origem comercial | [optional] 
 **idGrupoOrigemComercial** | **Integer**| Identificador do grupo de origem comercial | [optional] 
 **flagPreAprovado** | **Boolean**| Indica se permite pr\u00C3\u00A9 aprova\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **flagAprovacaoImediata** | **Boolean**| Indica se permite aprova\u00C3\u00A7\u00C3\u00A3o imediata | [optional] 
 **nomeFantasiaPlastico** | **String**| Nome fantasia impresso no pl\u00C3\u00A1stico | [optional] 
 **flagCartaoProvisorio** | **Boolean**| Indica se permite cart\u00C3\u00A3o provis\u00C3\u00B3rio | [optional] 
 **flagCartaoDefinitivo** | **Boolean**| Indica se permite cart\u00C3\u00A3o definitivo | [optional] 
 **usuario** | **String**| Usu\u00C3\u00A1rio para autentica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **senha** | **String**| Senha para autentica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **flagOrigemExterna** | **Boolean**| Indica se \u00C3\u00A9 origem externa | [optional] 
 **flagModificado** | **Boolean**| Indica se h\u00C3\u00A1 modifica\u00C3\u00A7\u00C3\u00A3o | [optional] 
 **flagEnviaFaturaUsuario** | **Boolean**| Indica se envia fatura | [optional] 
 **flagCreditoFaturamento** | **Boolean**| Indica se permite cr\u00C3\u00A9dito de faturamento | [optional] 
 **flagConcedeLimiteProvisorio** | **Boolean**| Indica se concede limite provis\u00C3\u00B3rio | [optional] 
 **flagDigitalizarDoc** | **Boolean**| Indica se digitaliza documento | [optional] 
 **flagEmbossingLoja** | **Boolean**| Indica se realiza embossing em loja | [optional] 
 **flagConsultaPrevia** | **Boolean**| Indica se realiza consulta pr\u00C3\u00A9via | [optional] 
 **tipoPessoa** | **String**| Tipo de pessoa | [optional] 

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

Lista os Tipos de adquirentes

Este m\u00C3\u00A9todo permite que sejam listados os tipos de adquirentes.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageEntidadeResponse**](PageEntidadeResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposMaquinetasUsingGET"></a>
# **listarTiposMaquinetasUsingGET**
> PageCampoCodificadoDescricaoResponse listarTiposMaquinetasUsingGET(opts)

Lista os Tipos de  Maquinetas

Este m\u00C3\u00A9todo permite que sejam listadas os Tipos de maquinetas existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageCampoCodificadoDescricaoResponse**](PageCampoCodificadoDescricaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarTiposTerminaisUsingGET1"></a>
# **listarTiposTerminaisUsingGET1**
> PageTipoTerminalResponse listarTiposTerminaisUsingGET1(opts)

Lista os Tipos Terminais

Este m\u00C3\u00A9todo permite que sejam listados os tipos de terminais existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56 // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
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
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 

### Return type

[**PageTipoTerminalResponse**](PageTipoTerminalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET19"></a>
# **listarUsingGET19**
> PageEstabelecimentoResponse listarUsingGET19(opts)

Lista Estabelecimentos

Lista todas os Estabelecimentos

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id).
  'idCredor': 789, // {Integer} Apresenta o n\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Credor.
  'numeroReceitaFederal': "numeroReceitaFederal_example", // {String} Apresenta o n\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento na Receita Federal.
  'nome': "nome_example", // {String} Nome do Estabelecimento.
  'descricao': "descricao_example", // {String} Raz\u00C3\u00A3o Social do Estabelecimento.
  'nomeFantasia': "nomeFantasia_example", // {String} T\u00C3\u00ADtulo Comercial do Estabelecimento.
  'cep': "cep_example", // {String} C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP).
  'nomeLogradouro': "nomeLogradouro_example", // {String} Nome do Logradouro.
  'numeroEndereco': 56, // {Integer} N\u00C3\u00BAmero do endere\u00C3\u00A7o.
  'complemento': "complemento_example", // {String} Descri\u00C3\u00A7\u00C3\u00B5es complementares referente ao endere\u00C3\u00A7o.
  'bairro': "bairro_example", // {String} Nome do bairro do endere\u00C3\u00A7o.
  'cidade': "cidade_example", // {String} Nome da cidade do endere\u00C3\u00A7o.
  'uf': "uf_example", // {String} Sigla de identifica\u00C3\u00A7\u00C3\u00A3o da Unidade Federativa do endere\u00C3\u00A7o.
  'pais': "pais_example", // {String} Nome do pa\u00C3\u00ADs.
  'dataCadastramento': "dataCadastramento_example", // {String} Data de Cadastro do Estabelecimento, no formato yyyy-MM-dd.
  'contato': "contato_example", // {String} Nome da pessoa para contato com o Estabelecimento.
  'email': "email_example", // {String} E-mail da pessoa para contato com o Estabelecimento.
  'flagArquivoSecrFazenda': 56, // {Integer} Indica se o estabelecimento ser\u00C3\u00A1 inclu\u00C3\u00ADdo no arquivo de registro para a Secretaria da Fazenda Estadual.
  'flagCartaoDigitado': 56, // {Integer} Indica se o estabelecimento poder\u00C3\u00A1 originar transa\u00C3\u00A7\u00C3\u00B5es sem a leitura da tarja ou do chip do cart\u00C3\u00A3o.
  'inativo': 56, // {Integer} Indica se o estabelecimento est\u00C3\u00A1 inativo.
  'idPais': 789, // {Integer} Identificador de Pa\u00C3\u00ADs.
  'mcc': 789, // {Integer} C\u00C3\u00B3digo de Categoria de Mercado
  'idTipoEstabelecimento': 789, // {Integer} C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento.
  'idMoeda': 789, // {Integer} C\u00C3\u00B3digo identificador da moeda.
  'tipoPagamento': "tipoPagamento_example", // {String} Tipo do regime de pagamento do estabelecimento.
  'numeroEstabelecimento': "numeroEstabelecimento_example", // {String} N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento na Conductor.
  'cep2': "cep2_example", // {String} C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP).
  'nomeLogradouro2': "nomeLogradouro2_example", // {String} Nome do Logradouro.
  'numeroEndereco2': 56, // {Integer} N\u00C3\u00BAmero do endere\u00C3\u00A7o.
  'complemento2': "complemento2_example", // {String} Descri\u00C3\u00A7\u00C3\u00B5es complementares referente ao endere\u00C3\u00A7o.
  'bairro2': "bairro2_example", // {String} Nome do bairro do endere\u00C3\u00A7o.
  'cidade2': "cidade2_example", // {String} Nome da cidade do endere\u00C3\u00A7o.
  'uf2': "uf2_example", // {String} Sigla de identifica\u00C3\u00A7\u00C3\u00A3o da Unidade Federativa do endere\u00C3\u00A7o.
  'flagMatriz': 56 // {Integer} Indica se \u00C3\u00A9 matriz ou filial.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET19(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id). | [optional] 
 **idCredor** | **Integer**| Apresenta o n\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Credor. | [optional] 
 **numeroReceitaFederal** | **String**| Apresenta o n\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento na Receita Federal. | [optional] 
 **nome** | **String**| Nome do Estabelecimento. | [optional] 
 **descricao** | **String**| Raz\u00C3\u00A3o Social do Estabelecimento. | [optional] 
 **nomeFantasia** | **String**| T\u00C3\u00ADtulo Comercial do Estabelecimento. | [optional] 
 **cep** | **String**| C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP). | [optional] 
 **nomeLogradouro** | **String**| Nome do Logradouro. | [optional] 
 **numeroEndereco** | **Integer**| N\u00C3\u00BAmero do endere\u00C3\u00A7o. | [optional] 
 **complemento** | **String**| Descri\u00C3\u00A7\u00C3\u00B5es complementares referente ao endere\u00C3\u00A7o. | [optional] 
 **bairro** | **String**| Nome do bairro do endere\u00C3\u00A7o. | [optional] 
 **cidade** | **String**| Nome da cidade do endere\u00C3\u00A7o. | [optional] 
 **uf** | **String**| Sigla de identifica\u00C3\u00A7\u00C3\u00A3o da Unidade Federativa do endere\u00C3\u00A7o. | [optional] 
 **pais** | **String**| Nome do pa\u00C3\u00ADs. | [optional] 
 **dataCadastramento** | **String**| Data de Cadastro do Estabelecimento, no formato yyyy-MM-dd. | [optional] 
 **contato** | **String**| Nome da pessoa para contato com o Estabelecimento. | [optional] 
 **email** | **String**| E-mail da pessoa para contato com o Estabelecimento. | [optional] 
 **flagArquivoSecrFazenda** | **Integer**| Indica se o estabelecimento ser\u00C3\u00A1 inclu\u00C3\u00ADdo no arquivo de registro para a Secretaria da Fazenda Estadual. | [optional] 
 **flagCartaoDigitado** | **Integer**| Indica se o estabelecimento poder\u00C3\u00A1 originar transa\u00C3\u00A7\u00C3\u00B5es sem a leitura da tarja ou do chip do cart\u00C3\u00A3o. | [optional] 
 **inativo** | **Integer**| Indica se o estabelecimento est\u00C3\u00A1 inativo. | [optional] 
 **idPais** | **Integer**| Identificador de Pa\u00C3\u00ADs. | [optional] 
 **mcc** | **Integer**| C\u00C3\u00B3digo de Categoria de Mercado | [optional] 
 **idTipoEstabelecimento** | **Integer**| C\u00C3\u00B3digo de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento. | [optional] 
 **idMoeda** | **Integer**| C\u00C3\u00B3digo identificador da moeda. | [optional] 
 **tipoPagamento** | **String**| Tipo do regime de pagamento do estabelecimento. | [optional] 
 **numeroEstabelecimento** | **String**| N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento na Conductor. | [optional] 
 **cep2** | **String**| C\u00C3\u00B3digo de Endere\u00C3\u00A7amento Postal (CEP). | [optional] 
 **nomeLogradouro2** | **String**| Nome do Logradouro. | [optional] 
 **numeroEndereco2** | **Integer**| N\u00C3\u00BAmero do endere\u00C3\u00A7o. | [optional] 
 **complemento2** | **String**| Descri\u00C3\u00A7\u00C3\u00B5es complementares referente ao endere\u00C3\u00A7o. | [optional] 
 **bairro2** | **String**| Nome do bairro do endere\u00C3\u00A7o. | [optional] 
 **cidade2** | **String**| Nome da cidade do endere\u00C3\u00A7o. | [optional] 
 **uf2** | **String**| Sigla de identifica\u00C3\u00A7\u00C3\u00A3o da Unidade Federativa do endere\u00C3\u00A7o. | [optional] 
 **flagMatriz** | **Integer**| Indica se \u00C3\u00A9 matriz ou filial. | [optional] 

### Return type

[**PageEstabelecimentoResponse**](PageEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET21"></a>
# **listarUsingGET21**
> PageGrupoEconomicoResponse listarUsingGET21(opts)

Listar grupos econ\u00C3\u00B4micos

Lista grupos econ\u00C3\u00B4micos cadastrados. 

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'razaoSocial': "razaoSocial_example", // {String} Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
  'nomeCredor': "nomeCredor_example", // {String} Nome do credor
  'numeroReceitaFederal': "numeroReceitaFederal_example", // {String} N\u00C3\u00BAmero da Receita Federal
  'inscricaoEstadual': "inscricaoEstadual_example", // {String} N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual
  'contato': "contato_example", // {String} Nome da pessoa para entrar em contato
  'banco': 56, // {Integer} C\u00C3\u00B3digo do banco
  'agencia': 56, // {Integer} Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica
  'digitoAgencia': "digitoAgencia_example", // {String} D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia
  'contaCorrente': "contaCorrente_example", // {String} C\u00C3\u00B3digo da Conta Corrente
  'digitoContaCorrente': "digitoContaCorrente_example", // {String} D\u00C3\u00ADgito Verificador da Conta Corrente
  'periodicidade': "periodicidade_example", // {String} Periodicidade do pagamento
  'pagamentoSemanal': "pagamentoSemanal_example", // {String} Dia para pagamento semanal
  'pagamentoMensal': 56, // {Integer} Dia da data para o pagamento mensal
  'pagamentoDecendialPrimeiro': 56, // {Integer} Dia da data para o primeiro pagamento decendial
  'pagamentoDecendialSegundo': 56, // {Integer} Dia da data para o segundo pagamento decendial
  'pagamentoDecendialTerceiro': 56, // {Integer} Dia da data para o terceiro pagamento decendial
  'pagamentoQuinzenalPrimeiro': 56, // {Integer} Dia da data para o primeiro pagamento quinzenal
  'pagamentoQuinzenalSegundo': 56, // {Integer} Dia da data para o segundo pagamento quinzenal
  'percentualRAV': 3.4, // {Number} Valor percentual do RAV do credor
  'recebeRAV': "recebeRAV_example", // {String} Indica se o credor recebe RAV e o tipo
  'percentualMultiplica': 3.4, // {Number} Percentual Multiplica
  'taxaAdm': 3.4, // {Number} Taxa Administrativa
  'taxaBanco': 3.4, // {Number} Taxa do Banco
  'limiteRAV': 3.4, // {Number} Valor limite do RAV
  'idCredorRAV': 789 // {Integer} C\u00C3\u00B3digo identificador do credor RAV
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET21(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **razaoSocial** | **String**| Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica | [optional] 
 **nomeCredor** | **String**| Nome do credor | [optional] 
 **numeroReceitaFederal** | **String**| N\u00C3\u00BAmero da Receita Federal | [optional] 
 **inscricaoEstadual** | **String**| N\u00C3\u00BAmero da inscri\u00C3\u00A7\u00C3\u00A3o estadual | [optional] 
 **contato** | **String**| Nome da pessoa para entrar em contato | [optional] 
 **banco** | **Integer**| C\u00C3\u00B3digo do banco | [optional] 
 **agencia** | **Integer**| Raz\u00C3\u00A3o social da pessoa jur\u00C3\u00ADdica | [optional] 
 **digitoAgencia** | **String**| D\u00C3\u00ADgito Verificador da ag\u00C3\u00AAncia | [optional] 
 **contaCorrente** | **String**| C\u00C3\u00B3digo da Conta Corrente | [optional] 
 **digitoContaCorrente** | **String**| D\u00C3\u00ADgito Verificador da Conta Corrente | [optional] 
 **periodicidade** | **String**| Periodicidade do pagamento | [optional] 
 **pagamentoSemanal** | **String**| Dia para pagamento semanal | [optional] 
 **pagamentoMensal** | **Integer**| Dia da data para o pagamento mensal | [optional] 
 **pagamentoDecendialPrimeiro** | **Integer**| Dia da data para o primeiro pagamento decendial | [optional] 
 **pagamentoDecendialSegundo** | **Integer**| Dia da data para o segundo pagamento decendial | [optional] 
 **pagamentoDecendialTerceiro** | **Integer**| Dia da data para o terceiro pagamento decendial | [optional] 
 **pagamentoQuinzenalPrimeiro** | **Integer**| Dia da data para o primeiro pagamento quinzenal | [optional] 
 **pagamentoQuinzenalSegundo** | **Integer**| Dia da data para o segundo pagamento quinzenal | [optional] 
 **percentualRAV** | [**Number**](.md)| Valor percentual do RAV do credor | [optional] 
 **recebeRAV** | **String**| Indica se o credor recebe RAV e o tipo | [optional] 
 **percentualMultiplica** | [**Number**](.md)| Percentual Multiplica | [optional] 
 **taxaAdm** | [**Number**](.md)| Taxa Administrativa | [optional] 
 **taxaBanco** | [**Number**](.md)| Taxa do Banco | [optional] 
 **limiteRAV** | [**Number**](.md)| Valor limite do RAV | [optional] 
 **idCredorRAV** | **Integer**| C\u00C3\u00B3digo identificador do credor RAV | [optional] 

### Return type

[**PageGrupoEconomicoResponse**](PageGrupoEconomicoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET23"></a>
# **listarUsingGET23**
> PageMaquinetaResponse listarUsingGET23(opts)

Lista as Maquinetas

Este m\u00C3\u00A9todo permite que sejam listadas as maquinetas existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idEstabelecimento': 789 // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Estabelecimento (id).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET23(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idEstabelecimento** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Estabelecimento (id). | [optional] 

### Return type

[**PageMaquinetaResponse**](PageMaquinetaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET24"></a>
# **listarUsingGET24**
> PageMoedaResponse listarUsingGET24(opts)

Lista os tipos de moedas do emissor 

Este recurso permite que sejam listados os tipos de moedas existentes na base de dados do emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'codigoMoeda': "codigoMoeda_example", // {String} C\u00C3\u00B3digo identificador do tipo de moeda.
  'simbolo': "simbolo_example", // {String} S\u00C3\u00ADmbolo da Moeda.
  'descricao': "descricao_example" // {String} Descri\u00C3\u00A7\u00C3\u00A3o do tipo da moeda.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET24(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **codigoMoeda** | **String**| C\u00C3\u00B3digo identificador do tipo de moeda. | [optional] 
 **simbolo** | **String**| S\u00C3\u00ADmbolo da Moeda. | [optional] 
 **descricao** | **String**| Descri\u00C3\u00A7\u00C3\u00A3o do tipo da moeda. | [optional] 

### Return type

[**PageMoedaResponse**](PageMoedaResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET25"></a>
# **listarUsingGET25**
> PageOperacaoCredorResponse listarUsingGET25(opts)

Lista as Regras Opera\u00C3\u00A7\u00C3\u00B5es

Este m\u00C3\u00A9todo permite que sejam listados as Regras opera\u00C3\u00A7\u00C3\u00B5es existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idOperacao': 789, // {Integer} Apresenta o id da Opera\u00C3\u00A7\u00C3\u00A3o.
  'idCredor': 789, // {Integer} Apresenta o id do Credor.
  'idProduto': 789 // {Integer} Apresenta o id do produto que vai ser alterado.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET25(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idOperacao** | **Integer**| Apresenta o id da Opera\u00C3\u00A7\u00C3\u00A3o. | [optional] 
 **idCredor** | **Integer**| Apresenta o id do Credor. | [optional] 
 **idProduto** | **Integer**| Apresenta o id do produto que vai ser alterado. | [optional] 

### Return type

[**PageOperacaoCredorResponse**](PageOperacaoCredorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET36"></a>
# **listarUsingGET36**
> PageTelefoneEstabelecimentoResponse listarUsingGET36(opts)

Lista os Telefones Estabelecimentos

Este m\u00C3\u00A9todo permite que sejam listados os telefones dos estabelecimentos existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idEstabelecimento': 789 // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Estabelecimento (id).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET36(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idEstabelecimento** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Tipo do Estabelecimento (id). | [optional] 

### Return type

[**PageTelefoneEstabelecimentoResponse**](PageTelefoneEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET38"></a>
# **listarUsingGET38**
> PageTerminalResponse listarUsingGET38(opts)

Lista os Terminais cadastrados no Emissor

Este m\u00C3\u00A9todo permite que sejam listados os terminais existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'id': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id).
  'terminal': "terminal_example", // {String} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal.
  'numeroEstabelecimento': 789, // {Integer} N\u00C3\u00BAmero do estabelecimento a qual o terminal pertence.
  'idEstabelecimento': 789 // {Integer} N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento a qual o terminal pertence.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET38(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Terminal (id). | [optional] 
 **terminal** | **String**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do terminal. | [optional] 
 **numeroEstabelecimento** | **Integer**| N\u00C3\u00BAmero do estabelecimento a qual o terminal pertence. | [optional] 
 **idEstabelecimento** | **Integer**| N\u00C3\u00BAmero de identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento a qual o terminal pertence. | [optional] 

### Return type

[**PageTerminalResponse**](PageTerminalResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET49"></a>
# **listarUsingGET49**
> PageVinculoEstabelecimentoAdquirenteResponse listarUsingGET49(opts)

Lista os V\u00C3\u00ADnculos dos estabelecimento com os adquirentes

Este m\u00C3\u00A9todo permite que sejam listados os V\u00C3\u00ADnculos dos estabelecimento com os adquirentes.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idAdquirente': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do adquirente (id).
  'idEstabelecimento': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento.
  'codigoEstabelecimentoAdquirente': "codigoEstabelecimentoAdquirente_example" // {String} C\u00C3\u00B3digo do v\u00C3\u00ADnculo entre o estabelecimento e o adquirente.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET49(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idAdquirente** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do adquirente (id). | [optional] 
 **idEstabelecimento** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento. | [optional] 
 **codigoEstabelecimentoAdquirente** | **String**| C\u00C3\u00B3digo do v\u00C3\u00ADnculo entre o estabelecimento e o adquirente. | [optional] 

### Return type

[**PageVinculoEstabelecimentoAdquirenteResponse**](PageVinculoEstabelecimentoAdquirenteResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listarUsingGET50"></a>
# **listarUsingGET50**
> PageVinculoOperacaoResponse listarUsingGET50(id, opts)

Lista os v\u00C3\u00ADnculos cadastrados no Emissor

Este m\u00C3\u00A9todo permite que sejam listados os v\u00C3\u00ADnculos opera\u00C3\u00A7\u00C3\u00B5es existentes na base de dados do Emissor.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var id = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id).

var opts = { 
  'sort': ["sort_example"], // {[String]} Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros.
  'page': 56, // {Integer} P\u00C3\u00A1gina solicitada (Default = 0)
  'limit': 56, // {Integer} Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50)
  'idProduto': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id).
  'idOperacao': 789, // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Opera\u00C3\u00A7\u00C3\u00A3o (id).
  'codigoMCC': 56 // {Integer} C\u00C3\u00B3digo MCC.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listarUsingGET50(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do estabelecimento (id). | 
 **sort** | [**[String]**](String.md)| Tipo de ordena\u00C3\u00A7\u00C3\u00A3o dos registros. | [optional] 
 **page** | **Integer**| P\u00C3\u00A1gina solicitada (Default = 0) | [optional] 
 **limit** | **Integer**| Limite de elementos por solicita\u00C3\u00A7\u00C3\u00A3o (Default = 50, Max = 50) | [optional] 
 **idProduto** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Produto (id). | [optional] 
 **idOperacao** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o da Opera\u00C3\u00A7\u00C3\u00A3o (id). | [optional] 
 **codigoMCC** | **Integer**| C\u00C3\u00B3digo MCC. | [optional] 

### Return type

[**PageVinculoOperacaoResponse**](PageVinculoOperacaoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST15"></a>
# **salvarUsingPOST15**
> MaquinetaResponse salvarUsingPOST15(maquinetaPersist)

Realiza o cadastro de uma nova maquineta para um estabelecimento 

Este m\u00C3\u00A9todo permite que seja cadastrada uma nova maquineta para um estabelecimento.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var maquinetaPersist = new Pier.MaquinetaPersist(); // {MaquinetaPersist} maquinetaPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST15(maquinetaPersist, callback);
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

<a name="salvarUsingPOST16"></a>
# **salvarUsingPOST16**
> OperacaoCredorResponse salvarUsingPOST16(oprecaoCredorPersist)

Realiza o cadastro de uma nova Regra Opera\u00C3\u00A7\u00C3\u00A3o

Este m\u00C3\u00A9todo permite que seja cadastrada uma nova Regra Opera\u00C3\u00A7\u00C3\u00A3o.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var oprecaoCredorPersist = new Pier.OperacaoCredorPersist(); // {OperacaoCredorPersist} oprecaoCredorPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST16(oprecaoCredorPersist, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oprecaoCredorPersist** | [**OperacaoCredorPersist**](OperacaoCredorPersist.md)| oprecaoCredorPersist | 

### Return type

[**OperacaoCredorResponse**](OperacaoCredorResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST21"></a>
# **salvarUsingPOST21**
> TelefoneEstabelecimentoResponse salvarUsingPOST21(idEstabelecimento, ddd, telefone, opts)

Realiza o cadastro de um novo telefone para um estabelecimento 

Este m\u00C3\u00A9todo permite que seja cadastrado um novo telefone para um estabelecimento.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var idEstabelecimento = 789; // {Integer} C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento (id).

var ddd = "ddd_example"; // {String} C\u00C3\u00B3digo DDD do telefone (id).

var telefone = "telefone_example"; // {String} N\u00C3\u00BAmero do telefone.

var opts = { 
  'ramal': "ramal_example" // {String} N\u00C3\u00BAmero do ramal.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST21(idEstabelecimento, ddd, telefone, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idEstabelecimento** | **Integer**| C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Estabelecimento (id). | 
 **ddd** | **String**| C\u00C3\u00B3digo DDD do telefone (id). | 
 **telefone** | **String**| N\u00C3\u00BAmero do telefone. | 
 **ramal** | **String**| N\u00C3\u00BAmero do ramal. | [optional] 

### Return type

[**TelefoneEstabelecimentoResponse**](TelefoneEstabelecimentoResponse.md)

### Authorization

No authorization required

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="salvarUsingPOST23"></a>
# **salvarUsingPOST23**
> TerminalResponse salvarUsingPOST23(terminalPersist)

Realiza o cadastro de um novo Terminal

Este m\u00C3\u00A9todo permite que seja cadastrado um novo Terminal.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var terminalPersist = new Pier.TerminalPersist(); // {TerminalPersist} terminalPersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST23(terminalPersist, callback);
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

<a name="salvarUsingPOST28"></a>
# **salvarUsingPOST28**
> VinculoEstabelecimentoAdquirenteResponse salvarUsingPOST28(vinculoEstabelecimentoAdquirentePersist)

Realiza o cadastro de um novo VinculoEstabelecimentoAdquirente

Este m\u00C3\u00A9todo permite que seja cadastrado um novo VinculoEstabelecimentoAdquirente.

### Example
```javascript
var Pier = require('Pier');

var apiInstance = new Pier.EstabelecimentoApi()

var vinculoEstabelecimentoAdquirentePersist = new Pier.VinculoEstabelecimentoAdquirentePersist(); // {VinculoEstabelecimentoAdquirentePersist} vinculoEstabelecimentoAdquirentePersist


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.salvarUsingPOST28(vinculoEstabelecimentoAdquirentePersist, callback);
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

