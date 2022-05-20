const removeHash = () => {
  setTimeout(() => {
    history.replaceState(
      null,
      document.title,
      location.pathname + location.search
    )
  }, 100)
}

export default removeHash
