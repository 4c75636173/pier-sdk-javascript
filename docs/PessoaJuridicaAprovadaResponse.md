# Pier.PessoaJuridicaAprovadaResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00F3digo de Identifica\u00E7\u00E3o da pessoa jur\u00EDdica (id) | [optional] 
**razaoSocial** | **String** | Apresenta o nome completo da raz\u00E3o social (nome empresarial)&#39;. | [optional] 
**nomeFantasia** | **String** | Apresenta o nome fantasia da empresa. | [optional] 
**cnpj** | **String** | N\u00FAmero do Cadastro Nacional de Pessoa Juridica (CNPJ) | [optional] 
**inscricaoEstadual** | **String** | N\u00FAmero da Inscri\u00E7\u00E3o Estadual (IE). | [optional] 
**dataAberturaEmpresa** | **String** | Data de abertura da empresa, essa data deve ser informada no formato: aaaa-MM-dd. | [optional] 
**idOrigemComercial** | **Integer** | Id da origem comercial | [optional] 
**idProduto** | **Integer** | Id do produto | [optional] 
**numeroAgencia** | **Integer** | N\u00FAmero da ag\u00EAncia. | [optional] 
**numeroContaCorrente** | **String** | N\u00FAmero da conta corrente. | [optional] 
**email** | **String** | Email da empresa | [optional] 
**diaVencimento** | **Integer** | Dia vencimento | [optional] 
**nomeImpresso** | **String** | Nome que deve ser impresso no cart\u00E3o | [optional] 
**idConta** | **Integer** | C\u00F3digo de identifica\u00E7\u00E3o da conta cadastrada | [optional] 
**idProposta** | **Integer** | C\u00F3digo de identifica\u00E7\u00E3o da proposta | [optional] 
**canalEntrada** | **String** | Indica o canal pelo qual o cadastro do cliente foi realizado | [optional] 
**valorPontuacao** | **Integer** | Indica o valor da pontua\u00E7\u00E3o atribuido ao cliente (caso n\u00E3o informado ser\u00E1 atribuido o valor = 0) | [optional] 
**telefones** | [**[TelefonePessoaAprovadaResponse]**](TelefonePessoaAprovadaResponse.md) | Apresenta os telefones da empresa | [optional] 
**enderecos** | [**[EnderecoAprovadoResponse]**](EnderecoAprovadoResponse.md) | Pode ser informado os seguintes tipos de endere\u00E7o: Residencial, Comercial, e Outros | [optional] 
**socios** | [**[SocioAprovadoResponse]**](SocioAprovadoResponse.md) | Apresenta os dados dos s\u00F3cios da empresa, caso exista | [optional] 
**referencias** | [**[ReferenciaComercialAprovadoResponse]**](ReferenciaComercialAprovadoResponse.md) | Apresenta os dados dos s\u00F3cios da empresa, caso exista | [optional] 
**limiteGlobal** | **Number** | Valor do Limite Global | 
**limiteMaximo** | **Number** | Valor m\u00E1ximo do limite de cr\u00E9dito para realizar transa\u00E7\u00F5es | 
**limiteParcelas** | **Number** | Valor do limite de cr\u00E9dito acumulado da soma das parcelas das compras | 


