import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
    <footer style={{height:'200px',backgroundColor:'rgba(0,0,0,0.4)'}}>
        © {new Date().getFullYear()}, All rights reserved
        {` `}
        <a href="https://docs.recallgraph.tech/">Recall Graph</a>
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}

export default Footer


