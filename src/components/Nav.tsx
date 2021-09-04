import { defineComponent } from 'vue'
import { css } from '@stitches/core'

const nav = css({
    height: '80px',
    background: '#000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff'
})

const link = css({
    padding: '0rem 2rem'
})

const Link = defineComponent({
    props: {
        to: {
            type: String,
            required: true
        }
    },
    setup(props, { slots }) {
        return () => (
            <router-link to={props.to} class={link().className}>
                {slots.default && slots.default()}
            </router-link>
        )
    }
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