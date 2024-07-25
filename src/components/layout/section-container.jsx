import React from 'react'


const SectionContainer = ({children,layout}) => {
  return (
    <div className={layout}>
        {children}
    </div>
  )
}

export default SectionContainer;
