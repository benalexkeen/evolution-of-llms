import base64
import os
import time

import altair as alt
import streamlit as st
import streamlit.components.v1 as components
import numpy as np
import pandas as pd

from pages.utils.setup_page import setup_page
from pages.utils.tweet import create_tweet

__here__ = os.path.dirname(__file__)
IMG_DIR = os.path.join(__here__, '..', 'assets', 'img')
HTML_ASSETS_DIR = os.path.join(__here__, '..', 'assets', 'html')

setup_page()

st.markdown('# Bag of Words')

st.markdown(
    """
    ## ```It was the best of times, it was the worst of times```

    """)

if 'bow1_button_clicked' not in st.session_state:
    st.session_state.bow1_button_clicked = False

def click_bow1_button():
    st.session_state.bow1_button_clicked = True

st.button(
    "Create Bag of Words",
    on_click=click_bow1_button
)

if st.session_state.bow1_button_clicked:
    df1 = {
        'Vocabulary': ['age', 'best', 'foolishness', 'it', 'of', 'the', 'times', 'was', 'wisdom', 'worst', '<OOV>'],
        'BoW': [0, 1, 0, 2, 2, 2, 2, 2, 0, 1, 0],
    }
    df1 = pd.DataFrame(df1)

    st.dataframe(df1, height=35*len(df1)+38)

st.markdown(
    """
    ## ```It was the age of wisdom, it was the age of foolishness```

    """
)

if 'bow2_button_clicked' not in st.session_state:
    st.session_state.bow2_button_clicked = False

def click_bow2_button():
    st.session_state.bow2_button_clicked = True

st.button(
    "Create Bag of Words",
    key='create_bow2',
    on_click=click_bow2_button
)

if st.session_state.bow2_button_clicked:
    df2 = {
        'Vocabulary': ['age', 'best', 'foolishness', 'it', 'of', 'the', 'times', 'was', 'wisdom', 'worst', '<OOV>'],
        'BoW': [2, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0],
    }
    df2 = pd.DataFrame(df2)

    st.dataframe(df2, height=35*len(df2)+38)

    with open(os.path.join(IMG_DIR, 'burns_gif.gif'), "rb") as f:
        contents = f.read()
        data_url = base64.b64encode(contents).decode("utf-8")

    st.markdown(
        f'<img src="data:image/gif;base64,{data_url}" alt="burns gif">',
        unsafe_allow_html=True,
    )
    st.markdown("")
    if 'bow3_button_clicked' not in st.session_state:
        st.session_state.bow3_button_clicked = False

    def click_bow3_button():
        st.session_state.bow3_button_clicked = True

    st.button(
        "Create Bag of Words",
        key='create_bow3',
        on_click=click_bow3_button
    )
    if st.session_state.bow3_button_clicked:
        df3 = {
            'Vocabulary': ['age', 'best', 'foolishness', 'it', 'of', 'the', 'times', 'was', 'wisdom', 'worst', '<OOV>'],
            'BoW': [0, 1, 0, 2, 2, 2, 2, 2, 0, 0, 1],
        }
        df3 = pd.DataFrame(df3)

        st.dataframe(df3, height=35*len(df2)+38)

with open(os.path.join(HTML_ASSETS_DIR, 'bow_classifier_svg.svg'), 'r') as f:
    bow_classifier_svg_html_data = f.read()
components.html(bow_classifier_svg_html_data, height=600, width=700)

st.markdown('## Sentiment Analysis')

create_tweet("I love being a developer at Microsoft!")

with open(os.path.join(HTML_ASSETS_DIR, 'sentiment_1.html'), 'r') as f:
    sentiment_1_html_data = f.read()
components.html(sentiment_1_html_data, height=750, width=700)


create_tweet("I hate strawberries")

with open(os.path.join(HTML_ASSETS_DIR, 'sentiment_2.html'), 'r') as f:
    sentiment_2_html_data = f.read()
components.html(sentiment_2_html_data, height=750, width=700)
