import { defineComponent } from 'vue'
import { globalCss } from '@stitches/core'
import Layout from './components/Layout'

const globalStyles = globalCss({
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`
  },
  a: {
    color: 'inherit',
    textDecoration: 'none'
  },
  '*': {
    boxSizing: 'border-box'
  }
})

export default defineComponent({
  setup() {
    globalStyles()
    return () => (
      <Layout>
        <router-view></router-view>
      </Layout>
    )
  }
})