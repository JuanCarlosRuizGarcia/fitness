import React from 'react'
import ReactDom from 'react-dom'

const name = 'Juan Carlos';

const element = <h1>Hello {name}</h1>


ReactDom.render(element,document.getElementById('root'))