import streamlit as st

st.title("Calculadora de Boas-vindas 👋")

# 1. Recebendo os Inputs
nome = st.text_input("Digite seu nome:")
# Usando o ano atual (2026) como referência base
ano_nascimento = st.number_input("Ano de nascimento:", min_value=1900, max_value=2026, step=1)

# 2. Criando um botão de ação
if st.button("Calcular Idade"):
    
    # 3. Lógica e Outputs
    if nome and ano_nascimento:
        idade = 2026 - ano_nascimento
        # st.success cria um balão verde de sucesso
        st.success(f"Olá, {nome}! Você tem (ou fará) {idade} anos em 2026.")
        st.write(f"E sua linguagem favorita provavelmente é Python, já que estamos usando Streamlit!")
    else:
        # st.warning cria um alerta amarelo
        st.warning("Por favor, preencha todos os campos antes de calcular.")
