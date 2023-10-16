import os
import time

from PIL import Image
import streamlit as st
import streamlit.components.v1 as components

from pages.utils.setup_page import setup_page

setup_page()

st.markdown("""## LLMs - Large Multimodal Models""")


__here__ = os.path.dirname(__file__)
IMG_DIR = os.path.join(__here__, '..', 'assets', 'img')

gpt4_lmm_1 = Image.open(os.path.join(IMG_DIR, 'gpt4_visual_input_1.png'))
st.image(gpt4_lmm_1)

gpt4_lmm_2 = Image.open(os.path.join(IMG_DIR, 'gpt4_visual_input_2.png'))
st.image(gpt4_lmm_2)

gpt4_lmm_4 = Image.open(os.path.join(IMG_DIR, 'gpt4_visual_input_4.png'))
st.image(gpt4_lmm_4)

gpt4_lmm_3 = Image.open(os.path.join(IMG_DIR, 'gpt4_visual_input_3.png'))
st.image(gpt4_lmm_3)

st.markdown("""
#### References and Further Reading
- <a href="https://huyenchip.com/2023/10/10/multimodal.html">Multimodality and Large Multimodal Models (LMMs)</a>
- <a href="https://arxiv.org/abs/2303.08774">GPT-4 Technical Report</a>
""", unsafe_allow_html=True)