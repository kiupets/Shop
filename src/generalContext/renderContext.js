import React from 'react'
import createDataContext from './createDataContext'

const renderContext = (state, action) => {
  switch (action.type) {
    default:
      return { state }
  }
}

export const { Context, Provider } = createDataContext(renderContext, {}, {})
