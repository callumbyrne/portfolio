const removeHash = () => {
  setTimeout(() => {
    history.replaceState(
      null,
      document.title,
      location.pathname + location.search
    )
  }, 1000)
}

export default removeHash
