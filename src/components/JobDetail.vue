<template>
  <div id="job-detail">
    <p class="mb-0 font-size-18 font-weight-7">{{ props.job?.name }}</p>
    <div class="d-flex job-detail__header align-items-center flex-wrap">
      <span class="font-size-13 font-weight-4">{{ props.job?.company }}</span>
      <div class="job-detail__header-dot margin-left-9 margin-right-9" />
      <div class="job-detail__header-status">
        {{ props.job?.status }}
      </div>
    </div>
    <div class="job-detail__center d-flex flex-wrap margin-bottom-18">
      <div class="job-detail__center--left margin-right-35">
        <label for="time_request">{{ $i18n.t('label.time_request') }}</label>
        <p class="font-size-18 font-weight-7">{{ props.job?.time_request }}</p>
        <label for="amount">{{ $i18n.t('label.amount') }}</label>
        <p class="font-size-18 font-weight-7">{{ props.job?.amount }}</p>
      </div>
      <div class="job-detail__center--right">
        <label for="time_onboard">{{ $i18n.t('label.time_onboard') }}</label>
        <p class="font-size-18 font-weight-7">{{ props.job?.time_onboard }}</p>
        <label for="men_request">{{ $i18n.t('label.men_request') }}</label>
        <p class="font-size-18 font-weight-7">{{ props.job?.men_request }}</p>
      </div>
    </div>
    <router-link :to="{ name: 'Login' }" class="font-size-14 font-weight-5">{{ $i18n.t('label.review') }}</router-link>
  </div>
</template>

<script setup>
  // eslint-disable-next-line no-undef
  const props = defineProps({
    job: {
      type: Object,
      require: true,
      description: 'Job object data',
    }
  });
</script>
