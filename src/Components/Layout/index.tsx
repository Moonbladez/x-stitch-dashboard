import React from "react"

//components
import { TopNav } from "../TopNav"
import { Footer } from "../Footer"

import "../../styles/global.scss"

export const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      {children}
      <Footer />
    </>
  )
}
