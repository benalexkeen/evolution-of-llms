import os

import altair as alt
import pandas as pd
import streamlit as st
import streamlit.components.v1 as components
from annotated_text import annotated_text

from pages.utils.setup_page import (setup_page)

setup_page()

st.markdown('# N-Grams')

st.markdown("When it comes to predicting the next word, we can use our bags of words combined with N-grams.")

if 'count' not in st.session_state:
    st.session_state.count = 0

def increment_counter():
    if st.session_state.count < 3:
        st.session_state.count += 1

def reset_counter():
    st.session_state.count = 0

def show_annotated_text():
    if st.session_state.count == 0:
        annotated_text("I ", "want ", "to ", "go ", ("ice ", "unigram"))
    if st.session_state.count == 1:
        annotated_text("I ", "want ", "to ", "go ", ("ice cream ", "bigram"))
    if st.session_state.count == 2:
        annotated_text("I ", "want ", "to ", ("go ice ", "bigram"))
    if st.session_state.count == 3:
        annotated_text("I ", "want ", "to ", ("go ice skating", "trigram"))

show_annotated_text()

col1, col2 = st.columns([1, 1])

with col1:
    next_n_gram_text = st.button(
        "Next",
        on_click=increment_counter
    )
with col2:
    reset_n_gram_text = st.button(
        "Reset",
        type="primary",
        on_click=reset_counter
    )

st.markdown('<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>', unsafe_allow_html=True)

st.markdown('### An Example: He/She Trigrams')

__here__ = os.path.dirname(__file__)
HTML_ASSETS_DIR = os.path.join(__here__, '..', 'assets', 'html')

with open(os.path.join(HTML_ASSETS_DIR, 'n_grams_sankey.html'), 'r') as f:
    bow_classifier_svg_html_data = f.read()
components.html(bow_classifier_svg_html_data, height=1200, width=700)

st.markdown('### N-Grams Example: Spam Classification')

st.markdown("""
    Adapted From: <a href="https://ieeexplore.ieee.org/document/8687020">Spam E-Mail Classification by Utilizing N-Gram Features of Hyperlink Texts</a>
    """,
    unsafe_allow_html=True
)

if 'spam_classifier_count' not in st.session_state:
    st.session_state.spam_classifier_count = 0

def increment_spam_classifier_counter():
    if st.session_state.spam_classifier_count < 4:
        st.session_state.spam_classifier_count += 1

def reset_spam_classifier_counter():
    st.session_state.spam_classifier_count = 0

def show_spam_classifier_example():
    state = st.session_state.spam_classifier_count + 1
    with open(os.path.join(HTML_ASSETS_DIR, f'Spam_Classification_{state}.svg'), 'r') as f:
        spam_classifier_svg_html_data = f.read()
    components.html(spam_classifier_svg_html_data, height=600, width=700)

show_spam_classifier_example()

col1, col2 = st.columns([1, 1])

with col1:
    next_n_gram_text = st.button(
        "Next",
        key='next_spam_classifier',
        on_click=increment_spam_classifier_counter
    )
with col2:
    reset_n_gram_text = st.button(
        "Reset",
        key='reset_spam_classifier',
        type="primary",
        on_click=reset_spam_classifier_counter
    )

st.markdown("""
Example N-Grams:
- "Nigerian Prince"
- "need your assistance"
- "send me"
""", unsafe_allow_html=True)

with open(os.path.join(HTML_ASSETS_DIR, 'spam_classification_chart.html'), 'r') as f:
    spam_classification_chart_html_data = f.read()
components.html(spam_classification_chart_html_data, height=750, width=700)


st.markdown('### Problem of Scale')

st.markdown(
    """
    In 2006, Google <a href="https://catalog.ldc.upenn.edu/LDC2006T13">released a dataset of N-gram frequencies</a>, looking at 1 trillion words of English text.

    This dataset is 24GB in size, and contains over 13 million unique words.

    The following chart shows the scale of the problem when trying to create a bag of words vocabulary for just the N-grams up to 5 words.

    </br></br>
    """,
    unsafe_allow_html=True
)

data = pd.DataFrame([
    {'N-Gram': 'Unigrams', 'Unique N-Grams': 13588391, 'Order': 1},
    {'N-Gram': 'Bigrams', 'Unique N-Grams': 314843401, 'Order': 2},
    {'N-Gram': 'Trigrams', 'Unique N-Grams': 977069902, 'Order': 3},
    {'N-Gram': 'Fourgrams', 'Unique N-Grams': 1313818354, 'Order': 4},
    {'N-Gram': 'Fivegrams', 'Unique N-Grams': 1176470663, 'Order': 5},
])

chart = alt.Chart(data).mark_bar().encode(
    x=alt.X('N-Gram', sort=alt.EncodingSortField(field='Order', order='ascending')),
    y='Unique N-Grams',
    tooltip=alt.Tooltip("sum(Unique N-Grams)", format=",")
).properties(height=500).interactive()

vocabulary = 13588391 + 314843401 + 977069902 + 1313818354 + 1176470663

st.altair_chart(chart, theme="streamlit", use_container_width=True)

st.markdown(
    """
    This is a vocabulary of nearly **3.8 billion** N-grams!
    """,
    unsafe_allow_html=True
)


