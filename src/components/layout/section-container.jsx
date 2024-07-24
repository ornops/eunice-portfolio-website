import React from 'react'


const SectionContainer = ({children,customClass}) => {
  return (
    <div className={customClass}>
        {children}
    </div>
  )
}

export default SectionContainer;
