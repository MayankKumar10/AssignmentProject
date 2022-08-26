import React from 'react'
import { notfound } from '../../assets'

export const ErrorPage = () => {
  return (
    <div class="empty sv2fzdw eadtx5o">
      <img src={notfound}/>
        <div class="msg">
          <div>Uh Oh! The page you're looking for cannot be found!</div>
          Redirecting to 
          <a class="cl-primary" href="../index.html">home</a> 
          in <span>4s</span>
          </div>
      </div>
  ) 
}
