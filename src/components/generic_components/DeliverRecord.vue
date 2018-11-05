<template>
  <!--放入自己的模板-->
  <div>
    <h3>简历投递记录</h3>
    <div  class="record-item" v-for=" record in records">

      <div class="col-md-3" >
        <span>简历编号: </span>
        <span v-text="record.resume.id"></span>
      </div>

      <div class="col-md-4" >
        <span>投递岗位: </span>
        <span v-text="record.position.p_name"></span>
      </div>

      <div class="col-md-4" >
        <span>投递时间: </span>
        <span v-text="record.pr_date"></span>
      </div>

    </div>


    

  </div>

</template>

<script>
  import  axios from 'axios'
export default {
  name: 'deliver_record',
  data() {
    return {
      msg: '这是一个CopyDemo ',
      records: ''
    }
  },
  mounted: function () {
    this.getDeliveRecord()
  },
  methods: {

    getDeliveRecord: function () {
      let vm = this
      axios({
        url: 'http://127.0.0.1:8000/user/getdeliveryrecordbyid/',
        method: "post",
        data: {id: 1},
        headers: {
          "content-type": "multipart/form-data",
          "token": sessionStorage.getItem('token')
        },
      })
        .then(function (res) {
          vm.records=res.data
          console.log(typeof res.data);
          }
        )
        .catch(function (err) {
          console.log(err);
        })
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.record-item{
  width: 95%;
  height: 20px;
  box-shadow: 0 0 1px  1px grey;
  margin-top: 5px;
  cursor: pointer;
}
.record-item:hover{
  box-shadow: 0 0 1px  1px blue;
}




</style>
