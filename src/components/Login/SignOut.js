import React from 'react'

import { auth } from 'src/firebase'

const SignOutButton = () =>
  <button type="button" onClick={auth.doSignOut}>
    Sign Out
  </button>

export default SignOutButton
