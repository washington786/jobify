import React from 'react'

type wrap={
    children:any
}
export const AuthWrapper = (props:wrap) => {
    const { children} = props;
  return (
    <div className='col-5 bg-light rounded-3 pb-4'>{children}</div>
  )
}
