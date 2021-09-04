import { css } from '@stitches/core'
import { defineComponent } from 'vue'

const footer = css({
    background: '#000',
    color: '#fff',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export default defineComponent({
    render() {
        return (
            <footer class={footer().className}>
                <p>Vue Stitches 2021 All Rights Reserved</p>
            </footer>
        )
    }
})