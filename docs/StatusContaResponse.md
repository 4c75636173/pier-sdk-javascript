# Pier.StatusContaResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o do Status da Conta (id). | 
**nome** | **String** | Nome atribu\u00EDdo ao Status da Conta. | 
**permiteAlterarVencimento** | **Integer** | Par\u00E2metro que define se o Status da conta permite a solicita\u00E7\u00E3o da altera\u00E7\u00E3o do Dia para Vencimento das Faturas, sendo: 0: Inativo e 1: Ativo. | [optional] 
**permiteAlterarLimite** | **Integer** | Par\u00E2metro que define se o Status da conta permite altera\u00E7\u00E3o de Limites, sendo: 0: Inativo e 1: Ativo. | [optional] 
**permiteEmitirNovaViaCartao** | **Integer** | Par\u00E2metro que define se o Status da conta permite solicitar uma nova via de Cart\u00E3o, sendo: 0: Inativo e 1: Ativo. | [optional] 
**permiteFazerTransferencia** | **Integer** | Par\u00E2metro que define se o Status da conta permite originar Transfer\u00EAncias de Cr\u00E9dito para outras Contas do mesmo Emissor ou para uma Conta Banc\u00E1ria, sendo: 0: Inativo e 1: Ativo. | [optional] 
**permiteReceberTransferencia** | **Integer** | Par\u00E2metro que define se o Status da conta permite  receber Transfer\u00EAncias de Cr\u00E9dito originadas de outras Contas do mesmo emissor, sendo: 0: Inativo e 1: Ativo. | [optional] 
**permiteCriarAcordoCobranca** | **Integer** | Par\u00E2metro que define se o Status da conta permite ter um Acordo de Cobran\u00E7a de D\u00EDvida criado para ela, sendo: 0: Inativo e 1: Ativo. | [optional] 
**permiteAtribuirComoBloqueio** | **Integer** | Par\u00E2metro que define se o Status da conta permite ser atribu\u00EDdo para Bloquear temporariamente uma Conta, sendo: 0: Inativo e 1: Ativo. | [optional] 
**permiteDesbloquear** | **Integer** | Par\u00E2metro que define se o Status da conta permite ser desbloqueada, sendo: 0: Inativo e 1: Ativo. | [optional] 
**permiteAtribuirComoCancelamento** | **Integer** | Par\u00E2metro que define se o Status da conta permite ser atribu\u00EDdo para realizar o cancelamento definitivo de uma conta, sendo: 0: Inativo e 1: Ativo. | [optional] 


