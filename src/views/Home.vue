<template>
  <div class="home">
    <div class="list">
      <Item
        v-for="whisper in orderBy(whispers, 'data', -1)"
        v-bind:key="whisper.id"
        v-bind:id="whisper.id"
        v-bind:uid="whisper.uid"
      />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { db } from "../main"
import Vue2Filters from 'vue2-filters'
import Item from "@/components/Item.vue"

export default {
  name: 'Home',
  components: {
    Item
  },
  data() {
    return {
      whispers: []
    }
  },
  firestore () {
    return {
      whispers: db.collection('whispers')
    }
  },
  mixins: [Vue2Filters.mixin] 
}
</script>

<style lang="stylus" scoped>

/* ここから追加 */
.home 
  margin-top 100px
.item
  list-style none
  border-top 1px solid #eee
  padding 5px 15px
  display flex
  flex-wrap no-wrap
  justify-content flex-start
  position relative
  &:first-child
    border none
  &:hover
    background rgba(0,0,0,.02)
  .user-box
    margin 10px 10px 10px 0
    .avatar
      height 50px
      width 50px
      border-radius 50%
      border 1px solid #eee
      background-size cover
    .user-name
      margin 5px 0 0 0
      text-align center
      font-size .7rem
      line-height .7rem
      width 50px
  .content
    padding 10px
/* ここまで追加 */
  
</style>