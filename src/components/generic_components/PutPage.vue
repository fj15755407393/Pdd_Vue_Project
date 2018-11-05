<template>
  <nav aria-label="Page navigation" class="page_index">

    <ul class="pagination ">
      <li>
        <a href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="i in count"><a href="#" @click.prevent.stop="getIndex(i)" v-text="i"></a></li>

      <li>
        <a href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>

  </nav>
</template>

<script>
    export default {
        name: "putPage",

      props:[
        'count'
      ],

      data: function () {
        return {
          pageindex:1,
        }
      },
      mounted:function(){

      },
      methods: {
        getIndex:function (i) {
          this.$emit('indexclick',i);
        },
      }

    }
</script>

<style scoped>
  .pagination{
    margin: 0 auto;
  }
</style>
