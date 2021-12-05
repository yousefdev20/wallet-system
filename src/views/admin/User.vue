<template>
  <div>
    <div class="row mb-4">
      <div class="col-lg-12 col-md-12 mb-md-0 mb-4 card">
        <div class="card-body px-0 pb-2">
          <users></users>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Users from "../../components/admin/users";

export default {
  name: "User",
  components: {Users},
  created () {
    this.init()
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    init () {

    }
  }
}
</script>

<style scoped>

</style>