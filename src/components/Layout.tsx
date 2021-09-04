import { defineComponent } from 'vue'
import Nav from './Nav'
import Footer from './Footer'

export default defineComponent({
    setup(_props, { slots }) {
        return () => (
            <div>
                <Nav />
                    {slots.default && slots.default()}
                <Footer />
            </div>
        )
    }
})