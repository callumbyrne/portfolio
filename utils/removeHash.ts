const removeHash = () => {
  setTimeout(() => {
    history.replaceState(
      null,
      document.title,
      location.pathname + location.search
    )
  }, 5)
}

export default removeHash
