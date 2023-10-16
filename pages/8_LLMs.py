import os
import time

from PIL import Image
import streamlit as st
import streamlit.components.v1 as components

from pages.utils.setup_page import setup_page

setup_page()

st.markdown("""## LLMs - Large Language Models""")

__here__ = os.path.dirname(__file__)
IMG_DIR = os.path.join(__here__, '..', 'assets', 'img')

rise_of_llms = Image.open(os.path.join(IMG_DIR, 'rise_of_llms.png'))
st.image(rise_of_llms)
