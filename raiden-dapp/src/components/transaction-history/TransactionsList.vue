<template>
  <v-container class="transaction-history" fluid>
    <v-row class="transaction-history__title" no-gutters>
      {{ $t('transfer-history.title') }}
    </v-row>
    <v-list class="transaction-history__list" color="transparent">
      <div
        v-for="(transfer, index) in orderedTransfers"
        :key="index"
        class="transaction-history__list__item"
      >
        <v-lazy
          transition="fade-transition"
          :options="{ threshold: 0.7 }"
          min-height="74"
        >
          <transaction :transfer="transfer" />
        </v-lazy>
      </div>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { Transfers } from '../../types';
import Transaction from '@/components/transaction-history/Transaction.vue';

@Component({
  components: {
    Transaction
  },
  computed: {
    ...mapState(['transfers'])
  }
})
export default class TransactionLists extends Vue {
  transfers!: Transfers;

  get orderedTransfers() {
    return Object.values(this.transfers).sort(
      (a: any, b: any) => b.changedAt - a.changedAt
    );
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/colors';

.transaction-history {
  &__title {
    color: $secondary-text-color;
    font-weight: bold;
  }

  &__list {
    > div {
      &:first-of-type {
        border: none;
      }
    }

    &__item {
      border-top: solid 1px $input-background;
      padding-top: 22px;
    }
  }
}
</style>
