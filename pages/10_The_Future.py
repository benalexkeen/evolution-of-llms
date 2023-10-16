import os
import time

from PIL import Image
import streamlit as st
import streamlit.components.v1 as components

from pages.utils.setup_page import setup_page

setup_page()

st.markdown("""## The Future""")


__here__ = os.path.dirname(__file__)
IMG_DIR = os.path.join(__here__, '..', 'assets', 'img')

mckinsey_gen_ai_future = Image.open(os.path.join(IMG_DIR, 'mckinsey_gen_ai_future.png'))
st.image(mckinsey_gen_ai_future)

st.markdown("""
#### References and Further Reading
- <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier">The economic potential of generative AI: The next productivity frontier - McKinsey</a>
""", unsafe_allow_html=True)