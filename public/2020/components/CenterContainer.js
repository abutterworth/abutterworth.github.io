/** @jsx jsx */
import { jsx } from 'theme-ui'
// example Container component
export default props =>
  <div
    {...props}
    sx={{
      maxWidth: 'container',
      mx: 'auto',
      px: 3,
    }}
  />