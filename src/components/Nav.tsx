import { defineComponent } from 'vue'
import { css } from '@stitches/core'
import Link from './Link'

const nav = css({
    height: '80px',
    background: '#000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff'
})
export default defineComponent({
    render() {
        return (
            <nav class={nav().className}>
                <div>
                    <Link to="/">Vue</Link>
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        )
    }
})