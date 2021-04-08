
const debounce = (fn, wait, loading = false) => {
  /** @type {number} */
  let timer;
  /** @type {number} */
  let lastCallTime;
  /** @type {boolean} */
  let isInvoked = false;
  return function debounced(...args) {
    const context = this;
    const thisCallTime = Date.now();
    if (loading) {
      if (!isInvoked) {
        fn.apply(context, args);
        isInvoked = true;
      }
      if (thisCallTime - lastCallTime >= wait) {
        fn.apply(context, args);
      }
      lastCallTime = Date.now();
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), wait);
  }
}

export default debounce;
