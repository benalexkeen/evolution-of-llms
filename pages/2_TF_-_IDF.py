import os

import streamlit as st
import streamlit.components.v1 as components

from pages.utils.setup_page import (setup_page)

setup_page()

st.markdown('# TF-IDF')

st.markdown('## Categorisation of BBC Articles')

st.markdown('### Term Frequency')

__here__ = os.path.dirname(__file__)
HTML_ASSETS_DIR = os.path.join(__here__, '..', 'assets', 'html')

with open(os.path.join(HTML_ASSETS_DIR, 'tf_idf_venn.html'), 'r') as f:
    tf_idf_venn_html_data = f.read()
components.html(tf_idf_venn_html_data, height=800, width=700)


st.markdown('### Term Frequency - Inverse Document Frequency')

with open(os.path.join(HTML_ASSETS_DIR, 'tf_idf_treegraph.html'), 'r') as f:
    tf_idf_venn_html_data = f.read()
components.html(tf_idf_venn_html_data, height=1200, width=700)
