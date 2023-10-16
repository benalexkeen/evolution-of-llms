import os

import streamlit as st
from PIL import Image

__here__ = os.path.dirname(__file__)
IMG_DIR = os.path.join(__here__, 'assets', 'img')

st.set_page_config(
    page_title="Airlift 2023 - Evolution of LLMs",
    page_icon="🚀",
)

header_img = Image.open(os.path.join(IMG_DIR, 'airlift_header.png'))
st.image(header_img)

st.write("# The Evolution of LLMs")
st.write("## A Fascinating Journey")

st.markdown(
    """
    Thank you for coming to my talk. Over the next 30 minutes, we're going to
    explore the history of LLMs together.
    
    ## About your Presenter
"""
)
col1, col2 = st.columns([1, 2])

with col1:
    image = Image.open(os.path.join(IMG_DIR, 'ben_keen.png'))
    st.image(image)

with col2:
   st.write("### Ben Keen, PhD")
   st.markdown("""
        Ben is a Data Scientist in Industry Solutions Delivery,
        he has been at Microsoft for nearly 5 years.
        
        Ben has a range of experience across:
        - Predictive Maintenance
        - Process Optimisation
        - Dynamic Pricing
        - Energy Trading
        - Computer Vision
        - Natural Language Processing
        """)


hide_streamlit_style = """
<style>
#MainMenu {visibility: hidden;}
footer {visibility: hidden;}
.stDeployButton {visibility: hidden;}
</style>
"""
st.markdown(hide_streamlit_style, unsafe_allow_html=True) 