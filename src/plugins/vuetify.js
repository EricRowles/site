import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md2 } from 'vuetify/blueprints'

export default createVuetify({
  components,
  directives,
  blueprint: md2,
  theme: {
    defaultTheme:'dark'
  },
})