function Menumui() {
    const [anchorEl, setAnchorEl] = React.useState(null);

return (
  <>
    <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
      <MoreVertIcon />
    </IconButton>

    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => setAnchorEl(null)}
    >
      <MenuItem onClick={() => setAnchorEl(null)}>
        Edit
      </MenuItem>

      <MenuItem onClick={() => setAnchorEl(null)}>
        Delete
      </MenuItem>
    </Menu>
  </>
);

}

export default Menumui;