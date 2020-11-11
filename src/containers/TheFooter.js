import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div className="mfs-auto">
        <a href="https://rahulshukla-rs.github.io/" target="_blank" rel="noopener noreferrer">Rahul Shukla</a>
        <span className="ml-1">&copy; 2020</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
