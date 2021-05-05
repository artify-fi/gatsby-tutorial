import React from "react"
import Images from '../components/examples/Images'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <>
      <h3>Hello World</h3>
      <Images />
      <Link to='/about/'>About Page</Link>
    </>
  )
}
