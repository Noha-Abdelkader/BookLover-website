import React, { Fragment } from 'react'
import AboutAuthor from '../AboutAuthor/AboutAuthor'
import AuthorOfMonth from '../AuthorOfMonth/AuthorOfMonth'
import AuthorGallery from '../AuthorGallery/AuthorGallery'

export default function Author() {
  return <Fragment>
    <AboutAuthor/>
    <AuthorOfMonth/>
    <AuthorGallery/>
  </Fragment>
}
