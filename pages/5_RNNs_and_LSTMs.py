import os
import time

import streamlit as st
import streamlit.components.v1 as components
from PIL import Image

from pages.utils.setup_page import setup_page

setup_page()

st.markdown('# Recurrent Neural Networks')

st.markdown('You could just put your embeddings into your Neural Networks and this would be fine for tasks like the BBC Article Classification')

st.markdown('But sequences matter for tasks like chatbots, translation and sentiment analysis...')

__here__ = os.path.dirname(__file__)
HTML_ASSETS_DIR = os.path.join(__here__, '..', 'assets', 'html')

with open(os.path.join(HTML_ASSETS_DIR, 'rnn_sequences.html'), 'r', encoding='utf-8') as f:
    rnn_sequences = f.read()
components.html(rnn_sequences, height=800, width=600)

st.markdown('So we can use Recurrent Neural Networks (RNNs) to take into account the sequence of words')

st.markdown('These have a cyclical component to them, which allows them to remember previous words:')

with open(os.path.join(HTML_ASSETS_DIR, 'rnn_diagram.svg'), 'r', encoding='utf-8') as f:
    rnn_diagram_svg = f.read()
components.html(rnn_diagram_svg, height=600, width=750)

st.markdown('Or unravelled:')

with open(os.path.join(HTML_ASSETS_DIR, 'rnn_unravelled.svg'), 'r', encoding='utf-8') as f:
    rnn_unravelled_svg = f.read()
components.html(rnn_unravelled_svg, height=750, width=800)

st.markdown("RNNs have a problem with long term memory:")

st.markdown(
    """
    #### ```I grew up in France, though my mother was from the USA and my father was from the UK. As a result, I speak fluent ______```
    """)

IMG_DIR = os.path.join(__here__, '..', 'assets', 'img')

rnn_long_term = Image.open(os.path.join(IMG_DIR, 'RNN-longtermdependencies.png'))
st.image(rnn_long_term)

st.markdown(
    """
    ## Long Short-Term Memory RNNs
    """)


st.markdown("The repeating module in a standard RNN contains a single layer:")

rnn_simple = Image.open(os.path.join(IMG_DIR, 'LSTM3-SimpleRNN.png'))
st.image(rnn_simple)


st.markdown("LSTMs have 4 interacting layers and they have a 'memory cell' that can maintain information in memory for long periods of time:")

lstm_structure = Image.open(os.path.join(IMG_DIR, 'LSTM3-chain.png'))
st.image(lstm_structure)

st.markdown("### LSTM Example")

st.markdown("The following is an example LSTM trained on Shakespearean text and initialised with the word 'ROMEO:'")

# Create a textbox for input
input_text = st.text_input("Input", value="ROMEO:")

output_text = """
it's a poison,
There was swain'd him in my ears at piteous vault.
Fair will not be put not your its land.
Alas,
Because that you do, sir, thee methink
In hears made here did it that
He is nothing but seeming.

SECOND KEEPER:
I am his huntled frame of death,
Which nark, it will have thy dwell upon;
Find not heres that have been leds the world with deam?
Where Duce worse than true; where my mildne made
His old wilt they lasting.

VIRCITING RICHARD III:
Your pity both princeman in place;
The blessed dead by that Edward,
And do thee that Warwick to come to think,
Tomorrow and lamentation, stand, as it not. Upon
A lightness melting word in
been so sudden; not of patience past it!
Mow These he they shall be myself, all voice:
You have no contents two surment be
daughter, foul your new louring death.
""".split(' ')

generate_lstm_output = st.button("Generate LSTM Output")

# creating a placeholder for the fixed sized textbox
logtxtbox = st.empty()
logtxt = 'ROMEO: '
logtxtbox.text_area("Output: ", logtxt, height = 750)


if generate_lstm_output:
    for word in output_text:
        logtxt += word + ' '
        logtxtbox.text_area("Output: ", logtxt, height=750)
        time.sleep(0.1)

st.markdown("""
#### References and Further Reading
- <a href="http://colah.github.io/posts/2015-08-Understanding-LSTMs/">Understanding LSTMs - Christopher Olah</a>
- <a href="https://www.researchgate.net/publication/13853244_Long_Short-term_Memory">Long-Short Term Memory (1997) Hochreiter and Schmidhuber</a>
- <a href="https://en.wikipedia.org/wiki/Vanishing_gradient_problem">Vanishing Gradient Problem - Wikipedia</a>
- <a href="https://medium.com/deep-writing/harry-potter-written-by-artificial-intelligence-8a9431803da6#.4zhk8cgql"> Harry Potter Written by Artificial Intelligence - Max Deutsche</a>
- <a href="https://www.youtube.com/watch?v=LY7x2Ihqjmc"> Sunspring - A Sci-Fi Short Film Starring Thomas Middleditch</a>
""", unsafe_allow_html=True)
