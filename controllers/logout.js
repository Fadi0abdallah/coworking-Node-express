const logout = (req, res) => {
    res.clearCookie('access_token')
    res.json({ message: "logout scssusfly" })
}
module.exports = { logout }