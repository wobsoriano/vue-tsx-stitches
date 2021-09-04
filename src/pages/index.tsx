import { css } from '@stitches/core'
import { defineComponent } from 'vue'

const hero = css({
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff'
})

const heading = css({
    color: '#000',
    fontSize: '10rem',
    fontWeight: 900
})

export default defineComponent({
    render() {
        return (
            <div class={hero().className}>
                <div class={heading().className}>HOME</div>
            </div>
        )
    }
})