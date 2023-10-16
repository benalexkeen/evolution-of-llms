import os

import streamlit as st
import streamlit.components.v1 as components

from pages.utils.setup_page import (setup_page)

setup_page(wide_layout=True)

st.markdown('# Neural Networks')


__here__ = os.path.dirname(__file__)
HTML_ASSETS_DIR = os.path.join(__here__, '..', 'assets', 'html')

with open(os.path.join(HTML_ASSETS_DIR, 'neural_networks.html'), 'r', encoding='utf-8') as f:
    nn_html_data = f.read()
components.html(nn_html_data, height=800, width=1200)