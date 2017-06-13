# Pier.PessoaJuridicaAprovadaResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | C\u00C3\u00B3digo de Identifica\u00C3\u00A7\u00C3\u00A3o do Endere\u00C3\u00A7o (id) | [optional] 
**razaoSocial** | **String** | Apresenta o nome completo da raz\u00C3\u00A3o social (nome empresarial)&#39;. | [optional] 
**nomeFantasia** | **String** | Apresenta o nome fantasia da empresa. | [optional] 
**cnpj** | **String** | N\u00C3\u00BAmero do Cadastro Nacional de Pessoa Juridica (CNPJ) | [optional] 
**inscricaoEstadual** | **String** | N\u00C3\u00BAmero da Inscri\u00C3\u00A7\u00C3\u00A3o Estadual (IE). | [optional] 
**dataAberturaEmpresa** | **String** | Data de abertura da empresa, essa data deve ser informada no formato: aaaa-MM-dd. | [optional] 
**idOrigemComercial** | **Integer** | Id da origem comercial | [optional] 
**idProduto** | **Integer** | Id do produto | [optional] 
**numeroAgencia** | **Integer** | N\u00C3\u00BAmero da ag\u00C3\u00AAncia. | [optional] 
**numeroContaCorrente** | **String** | N\u00C3\u00BAmero da conta corrente. | [optional] 
**email** | **String** | Email da empresa | [optional] 
**diaVencimento** | **Integer** | Dia vencimento | [optional] 
**nomeImpresso** | **String** | Nome que deve ser impresso no cart\u00C3\u00A3o | [optional] 
**telefones** | [**[TelefonePessoaAprovadaResponse]**](TelefonePessoaAprovadaResponse.md) | Apresenta os telefones da empresa | [optional] 
**enderecos** | [**[EnderecoAprovadoResponse]**](EnderecoAprovadoResponse.md) | Pode ser informado os seguintes tipos de endere\u00C3\u00A7o: Residencial, Comercial, e Outros | [optional] 
**socios** | [**[SocioAprovadoResponse]**](SocioAprovadoResponse.md) | Apresenta os dados dos s\u00C3\u00B3cios da empresa, caso exista | [optional] 


