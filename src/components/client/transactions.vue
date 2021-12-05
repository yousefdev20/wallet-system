<template>
<div>
  <div class="table-responsive">
    <table class="table align-items-center mb-0">
      <thead>
      <tr>
        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Amount</th>
        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Hash</th>
        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">type</th>
        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">status</th>
        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">created at</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in transactions" :key="index">
        <td class="align-middle text-center text-sm">
          {{ item.id }}
        </td>
        <td class="align-middle text-center text-sm">
          {{ item.amount }}
        </td>
        <td class="align-middle text-center text-sm">
          {{ item.hash }}
        </td>
        <td class="align-middle text-center text-sm">
          {{ item.type }}
        </td>
        <td class="align-middle text-center text-sm">
          {{ item.status }}
        </td>
        <td class="align-middle text-center text-sm">
          {{ item.created_at }}
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
</div>
</template>

<script>
export default {
  name: "transactions",
  created () {
    this.init()
  },
  data () {
    return {
      transactions: [],
      paginations: {
        pre_page: '',
        next_page: ''
      },
    }
  },
  methods: {
    init () {
      this.axios.get('/transactions').then(response => {
        this.transactions = response.data.data.transactions.data
        this.paginations.pre_page = response.data.data.transactions.prev_page_url
        this.paginations.next_page = response.data.data.transactions.next_page_url
      })
    },
    pagination (action) {
      let path = action === 'next'
          ? this.paginations.next_page.split('api/')[1]
          : this.paginations.pre_page.split('api/')[1]
      this.axios.get(path, this.header).then(response => {
        this.transactions = response.data.data.transactions.data
        this.paginations.pre_page = response.data.data.transactions.prev_page_url
        this.paginations.next_page = response.data.data.transactions.next_page_url
      })
    },
  }
}
</script>

<style scoped>

</style>