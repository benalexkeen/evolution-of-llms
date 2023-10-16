import streamlit as st


def setup_page(wide_layout=False):
    if wide_layout:
        layout = 'wide'
    else:
        layout = 'centered'
    st.set_page_config(
        page_icon="🚀",
        layout=layout
    )

    hide_streamlit_style = """
    <style>
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    .stDeployButton {visibility: hidden;}
    </style>
    """
    st.markdown(hide_streamlit_style, unsafe_allow_html=True)


def include_jquery():
    st.markdown(
        """
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        """,
        unsafe_allow_html=True
    )


def include_highcharts():
    st.markdown(
        """
        <script src = "https://d3js.org/d3.v4.min.js"></script>
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/highcharts-more.js"></script>
        """,
        unsafe_allow_html=True
    )
