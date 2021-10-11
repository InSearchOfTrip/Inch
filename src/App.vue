<template>
  <div id="app">
    <Slider/>
    <Form />
    <Articles />
  </div>
</template>

<script>

import Slider from '@/components/slider/Slider.vue'
import Form from '@/components/form/Form.vue'
import Articles from '@/components/articles/Articles.vue'

import '@/style/main.scss'

export default {
  name: 'App',
  components: {
    Slider,
    Form,
    Articles
  }
}
</script>

<style lang="scss">

</style>
