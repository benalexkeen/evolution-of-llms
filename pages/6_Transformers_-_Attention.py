import os

from PIL import Image
import streamlit as st
import streamlit.components.v1 as components

from pages.utils.setup_page import setup_page

setup_page()

st.markdown("""## Transformers""")


def update_attention_examples(state=1):
    if state >= 1:
        st.markdown(
            """
            #### ```I grew up in France, though my mother was from the USA and my father was from the UK ... I speak fluent ______```
            """
        )
    if state >= 2:
        st.markdown(
            """
            #### ```The animal didn't cross the street because it was too tired. What does "it" refer to?```
            """
        )
    if state >= 3:
        st.markdown(
            """
            #### ```The animal didn't cross the street because it was too wide. What does "it" refer to?```
            """
        )
    if state >= 4:
        st.markdown(
            """
            #### ```It’s dark, who turned off the light?```
            """
        )
    if state >= 5:
        st.markdown(
            """
            #### ```Wow, this parcel is really light!```
            """
        )

if 'attention_example_state' not in st.session_state:
    st.session_state.attention_example_state = 1

def set_attention_example_state(i):
    if i >= 8:
        st.session_state.attention_example_state = 5
    else:
        st.session_state.attention_example_state = i

col1, col2 = st.columns([1, 1])

next_graph = st.button(
    "Show Next Example",
    on_click=set_attention_example_state,
    args=[(st.session_state.attention_example_state + 1)]
)

update_attention_examples(st.session_state.attention_example_state)

st.markdown("""### Attention""")

__here__ = os.path.dirname(__file__)
IMG_DIR = os.path.join(__here__, '..', 'assets', 'img')
HTML_ASSETS_DIR = os.path.join(__here__, '..', 'assets', 'html')
attention_translation_example = Image.open(os.path.join(IMG_DIR, 'attention_translation_example.png'))
st.image(attention_translation_example)

attention_token_relationship = Image.open(os.path.join(IMG_DIR, 'attention_token_relationship.png'))
st.image(attention_token_relationship)

def update_attention_encoder_decoder_svg(state=1):
    with open(os.path.join(HTML_ASSETS_DIR, f'Attention_Encoder_Decoder_{state}.svg'), 'r', encoding='utf-8') as f:
        attention_encoder_decoder = f.read()
    components.html(attention_encoder_decoder, height=800, width=700)

if 'attn_svg_state' not in st.session_state:
    st.session_state.attn_svg_state = 0

def set_attn_svg_state(i):
    if i >= 3:
        st.session_state.attn_svg_state = 3
    else:
        st.session_state.attn_svg_state = i

col1, col2 = st.columns([1, 1])

with col1:
    next_graph = st.button(
        "Next",
        on_click=set_attn_svg_state,
        args=[(st.session_state.attn_svg_state + 1)]
    )
with col2:
    reset_graph = st.button(
        "Reset",
        type="primary",
        on_click=set_attn_svg_state,
        args=[0]
    )

update_attention_encoder_decoder_svg(st.session_state.attn_svg_state)

st.markdown("""
#### References and Further Reading
- <a href="https://arxiv.org/pdf/1409.0473.pdf">Neural Machine Translation by Jointly Learning to Align and Translate (2015) Bahdanau, Cho, and Bengio</a>
- <a href="https://arxiv.org/abs/1706.03762">Attention is all you need (2017) Vaswani et al.</a>
- <a href="https://ai.googleblog.com/2017/08/transformer-novel-neural-network.html"> Attending to a Single Word (2017) Uszkoreit</a>
- <a href="https://towardsdatascience.com/de-coded-transformers-explained-in-plain-english-877814ba6429">De-coded: Transformers explained in plain English - Chris Hughes</a>
""", unsafe_allow_html=True)