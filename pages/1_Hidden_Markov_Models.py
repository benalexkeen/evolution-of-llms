import streamlit as st
import graphviz

from pages.utils.setup_page import setup_page

setup_page()

def update_graph(state=0):
    graph = graphviz.Digraph()
    if state == 0:
        graph.node('Home', color='white', fontcolor='white')
        graph.node('Back', color='white', fontcolor='white')
        graph.node('to', color='white', fontcolor='white')
        graph.node('from', color='white', fontcolor='white')
        graph.edge('Welcome', 'Home', color='white')
        graph.edge('Welcome', 'Back', color='white')
        graph.edge('Welcome', 'to', color='white')
        graph.edge('Welcome', 'from', color='white')
    if state == 1:
        graph.edge('Welcome', 'Home', label='35%')
        graph.edge('Welcome', 'Back', label='25%')
        graph.edge('Welcome', 'to', label='25%')
        graph.edge('Welcome', 'from', label='10%')
        graph.edge('Welcome', 'Welcome', label='5%')
    if state >= 2:
        graph.edge('Welcome', 'Home', label='35%')
        graph.edge('Welcome', 'Back', label='25%')
        graph.edge('Welcome', 'to', label='25%', color='red')
        graph.edge('Welcome', 'from', label='10%')
        graph.edge('Welcome', 'Welcome', label='5%')
    if state == 3:
        graph.edge('to', 'London', label='25%')
        graph.edge('to', 'England', label='25%')
        graph.edge('to', 'Microsoft', label='25%')
        graph.edge('to', 'my', label='25%')
    if state >= 4:
        graph.edge('to', 'London', label='25%')
        graph.edge('to', 'England', label='25%')
        graph.edge('to', 'Microsoft', label='25%')
        graph.edge('to', 'my', label='25%', color='red')
    if state >= 5:
        graph.edge('my', 'presentation', label='50%', color='red')
        graph.edge('my', 'home', label='50%')
    st.graphviz_chart(graph)

if 'graph_state' not in st.session_state:
    st.session_state.graph_state = 0

def set_graph_state(i):
    if i >= 5:
        st.session_state.graph_state = 5
    else:
        st.session_state.graph_state = i

update_graph(st.session_state.graph_state)
col1, col2 = st.columns([1, 1])

with col1:
    next_graph = st.button(
        "Next",
        on_click=set_graph_state,
        args=[(st.session_state.graph_state + 1)]
    )
with col2:
    reset_graph = st.button(
        "Reset",
        type="primary",
        on_click=set_graph_state,
        args=[0]
    )
