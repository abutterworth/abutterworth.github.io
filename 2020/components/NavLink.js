/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const styles = {
  variant: 'links.nav',
}

export default ({ href = '', ...props }) => {
  const hasProtocol = href.indexOf('://') !== -1;
  if (hasProtocol) {
    return <a {...props} href={href} sx={styles} />
  }
  const to = props.to || href
  return <Link {...props} to={to} sx={styles} activeClassName="active" />
}