<template>
  <div>
    <div>
      <div class="d-inline mx-3 px-3">
        <label for="from">from date</label>
        <input type="date" class="form-control w-25 d-inline px-3" id="from" v-model="from_date" @change="init"/>
      </div>
      <div class="d-inline mx-3 px-3">
        <label for="to">to date</label>
        <input type="date" class="form-control w-25 d-inline px-3" id="to" v-model="to_date" @change="init"/>
      </div>
    </div>
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
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">action</th>
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
          <td class="align-middle text-center text-sm">
            <div v-if="item.status === 'pending'">
              <button class="btn btn-outline-primary btn-sm mb-0 mx-1" @click="reject(index, item.id)">reject</button>
              <button class="btn btn-outline-success btn-sm mb-0 mx-1" @click="approve(index, item.id)">approve</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
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
      from_date: '',
      to_date: ''
    }
  },
  methods: {
    init () {
      this.axios.get('/admin/transactions?from_date=' + this.from_date + '&to_date=' + this.to_date).then(response => {
        this.transactions = response.data.data
      })
    },
    reject (index, id) {
      this.axios.put('/admin/transaction/reject/' + id).then(response => {
        console.log(response)
        this.transactions[index].status = "rejected"
      }).catch(err => {
        console.log(err)
      })
    },
    approve (index, id) {
      this.axios.put('/admin/transaction/accept/' + id).then(response => {
        console.log(response)
        this.transactions[index].status = "approved"
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>

<style scoped>

</style>