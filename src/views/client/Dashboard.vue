<template>
  <div>
      <div class="row mb-4">
        <div class="col-lg-12 col-md-12 mb-md-0 mb-4">
          <div class="card">
            <div class="card-header pb-0">
              <balance></balance>
            </div>
            <div class="card-body px-0 pb-2">
              <transactions></transactions>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Balance from "../../components/client/balance";
import transactions from "../../components/client/transactions";
export default {
  name: "Client.Dashboard",
  components: {Balance, transactions }

}
</script>

<style scoped>

</style>