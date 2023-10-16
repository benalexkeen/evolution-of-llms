import streamlit as st

def include_custom_button(button_text, button_id):
    st.markdown(
        f"""
        <div data-stale="false" width="626" class="element-container st-emotion-cache-1cjmpkf e1f1d6gn2" data-testid="element-container">
        <div class="row-widget stButton" data-testid="stButton" style="width: 626px;">
        <button kind="secondary" data-testid="baseButton-secondary" class="st-emotion-cache-7ym5gk ef3psqc11">
        <div data-testid="stMarkdownContainer" class="st-emotion-cache-1vbkxwb e1nzilvr5">
        <p><a id={button_id} href="javascript:void(0)">{button_text}</a></p>
        </div>
        </button>
        </div>
        </div>
        """,
        unsafe_allow_html=True
    )
