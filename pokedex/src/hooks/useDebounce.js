function useDebounce(cb, delay = 2000) {
  let timeoutRef;

  return function (...args) {
    clearTimeout(timeoutRef)
    timeoutRef = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

export default useDebounce