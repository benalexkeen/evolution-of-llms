import os

import streamlit as st
import streamlit.components.v1 as components

from pages.utils.setup_page import setup_page

setup_page()

st.markdown("""## Sequence to Sequence Models""")

st.markdown("""#### Translation""")

__here__ = os.path.dirname(__file__)
HTML_ASSETS_DIR = os.path.join(__here__, '..', 'assets', 'html')

def update_encoder_decoder_svg(state=1):
    with open(os.path.join(HTML_ASSETS_DIR, f'Encoder_Decoder_{state}.svg'), 'r', encoding='utf-8') as f:
        encoder_decoder = f.read()
    components.html(encoder_decoder, height=800, width=700)

if 'svg_state' not in st.session_state:
    st.session_state.svg_state = 1

def set_svg_state(i):
    if i >= 8:
        st.session_state.svg_state = 8
    else:
        st.session_state.svg_state = i

col1, col2 = st.columns([1, 1])

with col1:
    next_graph = st.button(
        "Next",
        on_click=set_svg_state,
        args=[(st.session_state.svg_state + 1)]
    )
with col2:
    reset_graph = st.button(
        "Reset",
        type="primary",
        on_click=set_svg_state,
        args=[1]
    )

update_encoder_decoder_svg(st.session_state.svg_state)

if st.session_state.svg_state == 8:
    st.markdown("""#### Question-Answering/Text Completion""")
    with open(os.path.join(HTML_ASSETS_DIR, f'Encoder_Decoder_9.svg'), 'r', encoding='utf-8') as f:
        encoder_decoder = f.read()
    components.html(encoder_decoder, height=800, width=700)

st.markdown("""
#### References and Further Reading
- <a href="https://arxiv.org/abs/1409.3215">Sequence to Sequence Learning with Neural Networks (2014) Sutskever, Vinyals, and Le</a>
- <a href="https://github.com/bentrevett/pytorch-seq2seq">PyTorch Seq2Seq Tutorials - Ben Trevett</a>
- <a href="https://lena-voita.github.io/nlp_course/seq2seq_and_attention.html">Seq2Seq and Attention - Lena Voita</a>
""", unsafe_allow_html=True)

