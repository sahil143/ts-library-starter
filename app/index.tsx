import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import { HelloWorld } from '../src'

ReactDom.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelloWorld />,
)
