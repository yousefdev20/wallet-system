<template>
  <div class="table-responsive">
    <table class="table align-items-center mb-0">
      <thead>
      <tr>
        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Name</th>
        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">email</th>
        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">status</th>
        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">created at</th>
        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in users" :key="index">
        <td class="align-middle text-center text-sm">
          {{ item.id }}
        </td>
        <td class="align-middle text-center text-sm">
          {{ item.name }}
        </td>
        <td class="align-middle text-center text-sm">
          {{ item.email }}
        </td>
        <td class="align-middle text-center text-sm">
          {{ item.deleted_at ? 'Blocked' : 'Active' }}
        </td>
        <td class="align-middle text-center text-sm">
          {{ item.created_at }}
        </td>
        <td class="align-middle text-center text-sm">
          <button class="btn btn-outline-primary btn-sm mb-0" @click="block(index, item.id)">Block</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="float-right pt-4 float-end px-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item mx-2 rounded-0">
            <a style="cursor: pointer" :class="{ 'page-link': true, 'disabled text-secondary': paginations.pre_page === null }" @click="pagination('back')">Previous</a>
          </li>
          <li class="page-item mx-2 rounded-0">
            <a style="cursor: pointer" :class="{ 'page-link': true, 'disabled text-secondary': (paginations.next_page === null) }" @click="pagination('next')">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "users",
  created () {
    this.init()
  },
  data () {
    return {
      users: [],
      paginations: {
        pre_page: '',
        next_page: ''
      },
    }
  },
  methods: {
    init () {
      this.axios.get('/admin/accounts').then(response => {
        this.users = response.data.data.data
        this.paginations.pre_page = response.data.data.prev_page_url
        this.paginations.next_page = response.data.data.next_page_url
      })
    },
    block (index, id) {
      if (confirm('Are you sure to block this account')) {
        this.axios.delete('/admin/account/delete/' + id).then(response => {
          if (response.status === 200) {
            this.users[index].deleted_at = 'generate time'
            this.$notify({text: "Account has been deleted", type: 'success'})
          }else if (response.status == '404'){
            this.$notify({text: "some thing wrong meybay the account already deleted!", type: 'error'})
          }
        }).catch(err => {
          console.log(err)
          this.$notify({text: "some thing wrong meybay the account already deleted!", type: 'error'})
        })
      }
    },
    pagination (action) {
      let path = action === 'next'
          ? this.paginations.next_page.split('api/')[1]
          : this.paginations.pre_page.split('api/')[1]
      this.axios.get(path, this.header).then(response => {
        this.users = response.data.data.data
        this.paginations.pre_page = response.data.data.prev_page_url
        this.paginations.next_page = response.data.data.next_page_url
      })
    },
  },
}
</script>

<style scoped>

</style>