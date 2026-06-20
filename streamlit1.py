import streamlit as st

# Exibindo textos com diferentes hierarquias
st.title("Meu Primeiro App 🚀")
st.header("Este é um cabeçalho")
st.subheader("Este é um sub-cabeçalho")
st.text("Este é um texto simples, sem formatação Markdown.")

# Usando o st.write para formatação flexível
ferramenta = "Streamlit"
st.write(f"Aprendendo a criar interfaces com o **{ferramenta}**!")
