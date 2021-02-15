import React from 'react'
import {Provider} from 'mobx-react'
import ActiveSectionStore from './stores/activeSectionStore'

export default ({element}) => (
  <Provider activeSection={ActiveSectionStore}>
    {element}
  </Provider>
)