import os

import streamlit as st
import streamlit.components.v1 as components
from annotated_text import annotated_text

from pages.utils.setup_page import (setup_page)

setup_page()

st.markdown('# Word2Vec Word Embeddings')

st.markdown("""
Word embeddings are a way of representing similar words in a vector space. 

This allows us to more effectively use words as features in machine learning models.
""")

st.markdown("""
- Similarity(Prince, King) >>> Similarity(Prince, Cat)
- Similarity(Prince, Royal) >>> Similarity(Prince, Houses)
- Similarity(Prince, Man) >>> Similarity(Prince, Running)
<br/><br/>
- Similarity(Prince, King) ~ Similarity(Princess, Queen)
- Similarity(Prince, Royal) ~ Similarity(Princess, Royal)
- Similarity(Prince, Man) ~ Similarity(Princess, Woman)
""", unsafe_allow_html=True)


st.markdown("""
**Training Sentences**:
- When the prince was coronated, he became king
- The prince is a brave young man
- The prince will be carrying out his royal duties
<br/><br/>
- When the princess was coronated, she became queeen
- The princess is a brave young woman
- The princess will be carrying out her royal duties
""", unsafe_allow_html=True)

st.markdown('## Continuous Bag of Words (CBOW)')

st.markdown("""CBOW takes the surrounding words as input and predicts the middle word""")

__here__ = os.path.dirname(__file__)
HTML_ASSETS_DIR = os.path.join(__here__, '..', 'assets', 'html')
MODEL_ASSETS_DIR = os.path.join(__here__, '..', 'assets', 'models')

with open(os.path.join(HTML_ASSETS_DIR, 'cbow_arc_diagram.html'), 'r') as f:
    cbow_arc_diagram_html_data = f.read()
components.html(cbow_arc_diagram_html_data, height=500, width=700)

with open(os.path.join(HTML_ASSETS_DIR, 'CBOW.svg'), 'r', encoding='utf-8') as f:
    cbow_svg = f.read()
components.html(cbow_svg, height=700, width=850)

st.markdown('## Word Embeddings')

st.markdown('**2D-Representation (Dimensionality Reduction)**')

with open(os.path.join(HTML_ASSETS_DIR, 'word_embeddings_scatter.html'), 'r', encoding='utf-8') as f:
    word_embeddings_scatter_html_data = f.read()
components.html(word_embeddings_scatter_html_data, height=650, width=750)

st.markdown('**7D-Representation (Dimensionality Reduction)**')

with open(os.path.join(HTML_ASSETS_DIR, 'embeddings_7d.svg'), 'r', encoding='utf-8') as f:
    embeddings_table_svg = f.read()
components.html(embeddings_table_svg, height=750, width=750)

st.markdown('## Skip-Gram')

st.markdown("""Skip-Grams take a middle word as input and predicts the surrounding words""")

with open(os.path.join(HTML_ASSETS_DIR, 'skip_gram_arc_diagram.html'), 'r') as f:
    cbow_arc_diagram_html_data = f.read()
components.html(cbow_arc_diagram_html_data, height=500, width=700)

with open(os.path.join(HTML_ASSETS_DIR, 'skipgrams.svg'), 'r', encoding='utf-8') as f:
    skipgram_svg = f.read()
components.html(skipgram_svg, height=700, width=850)

import spacy
from spacy_streamlit import visualize_similarity


model_path = os.path.join(MODEL_ASSETS_DIR, 'en_core_web_md-3.7.0', 'en_core_web_md', 'en_core_web_md-3.7.0')
# nlp = spacy.load("en_core_web_md")
nlp = spacy.load(model_path)
visualize_similarity(nlp, ("King", "Prince"))

st.markdown('#### References')

st.markdown("""
<ul>
<li><a href="http://arxiv.org/pdf/1310.4546.pdf"><em>Distributed Representations of Words and Phrases and their Compositionality.</em></a> (2013) Mikolov et al. In Proceedings of NIPS</li>
<li><a href="https://nlp.stanford.edu/pubs/glove.pdf"><em>GloVe: Global Vectors for Word Representation</em></a> (2014) Pennington et al.</li>
</ul>
""", unsafe_allow_html=True)
