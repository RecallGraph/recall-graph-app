import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: "#fafafa",
      padding: "10px",
      margin: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <h2>Recall Graph</h2>
    <nav>
      <Link to="/docs/">Docs</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/community">Community</Link>
    </nav>
  </header>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
