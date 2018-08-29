export default {
    /**
     * Browsers are stupid. This is a safe way to get the browser window height/width.
     * This is take from {@link https://stackoverflow.com/a/1038781 }
     */
    getWidth() {
        return Math.max(
          document.body.scrollWidth,
          document.documentElement.scrollWidth,
          document.body.offsetWidth,
          document.documentElement.offsetWidth,
          document.documentElement.clientWidth
        );
      },
      getHeight() {
        return Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.documentElement.clientHeight
        );
      }
}