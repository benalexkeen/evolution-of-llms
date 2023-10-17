import os

import streamlit as st
import spacy
import spacy_streamlit
from annotated_text import annotated_text

from pages.utils.setup_page import setup_page

setup_page(wide_layout=True)


st.markdown("""## Sequence Tagging""")

st.markdown("""<blockquote><em>Ben Keen likes being a developer at Microsoft!</em></blockquote>""", unsafe_allow_html=True)

annotated_text(
    ("Ben Keen ", "Proper Noun"),
    ("likes ", "Verb"),
    ("being ", "Verb Gerund"),
    ("a ", "Determiner"),
    ("developer ", "Noun"),
    ("at ", "Preposition"),
    ("Microsoft", "Proper Noun"),
    ("! ", "Punctuation"),
)

__here__ = os.path.dirname(__file__)
MODEL_ASSETS_DIR = os.path.join(__here__, '..', 'assets', 'models')
model_path = os.path.join(MODEL_ASSETS_DIR, 'en_core_web_md-3.7.0', 'en_core_web_md', 'en_core_web_md-3.7.0')
nlp = spacy.load(model_path)
# nlp = spacy.load("en_core_web_md")
doc = nlp("Ben Keen likes being a developer at Microsoft!")
spacy_streamlit.visualize_parser(doc)

spacy_streamlit.visualize_ner(doc, labels=nlp.get_pipe("ner").labels)

st.markdown('## Example from a Project')

annotated_text(
    "This Agreement and any claim or dispute arising out of or related to this Agreement shall be governed by and construed in accordance with the laws in effect in the ",
    ("State of New York  ", "Location"),
    "without giving effect to its conflicts of law principles.",
)
annotated_text(
    "This JOINT PROMOTION AGREEMENT (this “Agreement”) is made and entered into as of ",
    ("March 8th, 2016", "Date"),
    " (the “Effective Date”), by and between ",
    ("Conopco, Inc.", "Org"),
    " d/b/a ",
    ("Unilever", "Org"),
    ", a New York corporation (“Unilever”), and ",
    ("Kimberly-Clark Corporation. ", "Org"),
)


st.markdown("""
#### References and Further Reading
- <a href="https://arxiv.org/abs/1508.01991">Bidirectional LSTM-CRF models for sequence tagging (2015) Huang et al.</a>
- <a href="https://arxiv.org/abs/1603.01354">Neural Architectures for Named Entity Recognition (2016) Lample et al.</a>
- <a href="https://spacy.io/api/dependencyparser">spaCy Dependency Parser</a>
""", unsafe_allow_html=True)
