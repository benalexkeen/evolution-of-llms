import os
import time

from PIL import Image
import streamlit as st
import streamlit.components.v1 as components

from pages.utils.setup_page import setup_page

setup_page()

st.markdown("""## Transformers""")

st.markdown("""### Positionally-Encoded Embeddings""")

__here__ = os.path.dirname(__file__)
HTML_ASSETS_DIR = os.path.join(__here__, '..', 'assets', 'html')
IMG_DIR = os.path.join(__here__, '..', 'assets', 'img')

with open(os.path.join(HTML_ASSETS_DIR, f'Positionally_Encoded_Word_Embedding.svg'), 'r', encoding='utf-8') as f:
    positionally_encoded_word_embedding_svg = f.read()

components.html(positionally_encoded_word_embedding_svg, height=300, width=700)

st.markdown("""### Self-Attention and Multi-Head Attention""")

playback = st.button("Loop through Self Attention")
self_attention_container = st.empty()
if 'self_attention_svg_state' not in st.session_state:
    st.session_state.self_attention_svg_state = 1

if playback:
    while st.session_state.self_attention_svg_state < 6:
        with self_attention_container:
            state = st.session_state.self_attention_svg_state
            with open(os.path.join(HTML_ASSETS_DIR, f'Self_Attention_{state}.svg'), 'r', encoding='utf-8') as f:
                self_attention = f.read()
            components.html(self_attention, height=200, width=700)
            time.sleep(1.5)
            st.session_state.self_attention_svg_state += 1

if st.session_state.self_attention_svg_state == 6:
    with open(os.path.join(HTML_ASSETS_DIR, f'Multi_Head_Self_Attention.svg'), 'r', encoding='utf-8') as f:
        multi_head_attention_svg = f.read()
    components.html(multi_head_attention_svg, height=400, width=700)


st.markdown("""### Transformer Architecture""")


transformer_architecture = Image.open(os.path.join(IMG_DIR, 'transformer_architecture.png'))
st.image(transformer_architecture)


st.markdown("""### Masked Self Attention""")

with open(os.path.join(HTML_ASSETS_DIR, f'Masked_Self_Attention.svg'), 'r', encoding='utf-8') as f:
        masked_self_attention = f.read()

components.html(masked_self_attention, height=750, width=700)

st.markdown("""#### Decoder Only Models""")

st.markdown("""Example: GPT""")

decoder_only_model = Image.open(os.path.join(IMG_DIR, 'decoder_only_model.png'))
st.image(decoder_only_model)

st.markdown("""#### Encoder Only Models""")

st.markdown("""Example: BERT""")

encoder_only_model = Image.open(os.path.join(IMG_DIR, 'encoder_only_model.png'))
st.image(encoder_only_model)

st.markdown("""
#### References and Further Reading
- <a href="https://arxiv.org/pdf/1409.0473.pdf">Neural Machine Translation by Jointly Learning to Align and Translate (2015) Bahdanau, Cho, and Bengio</a>
- <a href="https://arxiv.org/abs/1706.03762">Attention is all you need (2017) Vaswani et al.</a>
- <a href="https://ai.googleblog.com/2017/08/transformer-novel-neural-network.html"> Attending to a Single Word (2017) Uszkoreit</a>
- <a href="https://towardsdatascience.com/de-coded-transformers-explained-in-plain-english-877814ba6429">De-coded: Transformers explained in plain English - Chris Hughes</a>
""", unsafe_allow_html=True)
