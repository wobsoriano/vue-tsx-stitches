import { defineComponent } from 'vue'
import { css } from '@stitches/core'

const link = css({
    padding: '0rem 2rem'
})

export default defineComponent({
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
