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


st.markdown("""## Thank you""")

thank_you_text = """
Saying thank you to an audience after speaking for half an hour about a topic like LLMs is a thoughtful and courteous gesture. Here's a gracious way to express your gratitude:

1. Start with appreciation: Begin by expressing your gratitude for their time and attention. You can say something like, "Thank you all for taking the time to listen to me."

2. Acknowledge their patience: Recognize that your topic might have been complex or lengthy, and acknowledge their patience by saying something like, "I appreciate your patience in allowing me to delve into the details of LLMs."

3. Mention their politeness: Recognize the audience's politeness and attentiveness by saying, "I want to commend you for your politeness and engagement during my presentation."

4. Highlight their importance: Emphasize the significance of the audience's presence, such as, "Your presence and attention mean a lot to me."

5. Express your hope for value: Indicate your desire that they found value in your presentation, saying, "I hope that my discussion on LLMs was valuable to you in some way."

6. Offer further interaction: If appropriate, you can invite questions or follow-up discussions by saying, "If you have any questions or would like to discuss LLMs further, I'm here to help."

7. Conclude with another thank you: Close by reiterating your gratitude. For example, "Once again, thank you for being such a wonderful and attentive audience. Your presence made this presentation a meaningful experience for me."

Remember to deliver your thank-you message with sincerity and a warm tone to show your appreciation for your audience's time and attention.
""".split(' ')

generate_llm_output = st.button("Generate LLM Output")
thankyoutextbox = st.empty()
logtxt = 'How should I say thank you to an audience that has politely listened to me waffle on about LLMs for half an hour? \n\n'
thankyoutextbox.text_area("Output: ", logtxt, height = 750)

if generate_llm_output:
    for word in thank_you_text:
        logtxt += word + ' '
        thankyoutextbox.text_area("Output: ", logtxt, height=750)
        time.sleep(0.1)

st.markdown("""
#### References and Further Reading
- <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier">The economic potential of generative AI: The next productivity frontier - McKinsey</a>
""", unsafe_allow_html=True)