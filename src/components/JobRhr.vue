<template>
  <div id="job-rhr">
    <div class="header d-flex justify-content-between">
      <div class="header__left font-size-16 d-flex justify-content-between">
        <div 
          class="header__left--button h-100 d-flex align-items-center justify-content-center" 
          :class="activeTab === TAB_ACTIVE  ? 'active' : ''"
          @click="changeTab(TAB_ACTIVE)"
        >
          {{ $i18n.t('button.active') }}
        </div>
        <div 
          class="header__left--button h-100 d-flex align-items-center justify-content-center"
          :class="activeTab === TAB_INACTIVE  ? 'active' : ''"
          @click="changeTab(TAB_INACTIVE)"
        >
          {{ $i18n.t('button.inactive') }}
        </div>
      </div>
      <div class="header__right">
        <button class="header__right-export font-size-14">
          <img src="@/assets/images/icon-export.svg" class="margin-right-13" alt="">
          {{ $i18n.t('button.export') }}
        </button>
      </div>
    </div>
    <div class="content">
      <div class="content_header">
        <div class="content_header--top">
          <div class="content_header--top-filter margin-bottom-20">
            <p class="font-size-18 font-weight-7 mb-0">{{ $i18n.t('header.filter') }}</p>
          </div>
          <div class="margin-bottom-20 content_header--top__border" />
          <div class="d-flex flex-wrap margin-bottom-20">
            <div class="text-left d-flex flex-column">
              <label for="job" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.job') }}
              </label>
              <input
                :placeholder="$i18n.t('placeholder.job')"
                v-model="filter['job']"
                class="content_header__input __job border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="company" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.company') }}
              </label>
              <AppSelect
                :options="LIST_COMPANIES"
                :emptyOption="false"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['company']"
                @changeValue="onSelect($event, 'company')"
                class="content_header__input border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="block" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.block') }}
              </label>
              <AppSelect
                :options="LIST_COMPANIES"
                :emptyOption="false"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['block']"
                @changeValue="onSelect($event, 'block')"
                class="content_header__input border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="group" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.group') }}
              </label>
              <AppSelect
                :options="LIST_COMPANIES"
                :emptyOption="false"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['group']"
                @changeValue="onSelect($event, 'group')"
                class="content_header__input border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="time_start" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.time_start') }}
              </label>
              <div class="date-picker-input content_header__input">
                <a-date-picker
                  class="f-height w-100 h-100 border-radius-14"
                  format="YYYY/MM/DD"
                  placeholder="YYYY/MM/DD"
                  v-model:value="filter['timeStart']"
                  :allowClear="false"
                  :showToday="false"
                  :inputReadOnly="true"
                >
                  <template #suffixIcon>
                    <img src="@/assets/images/calendar.svg" height="18" width="18"/>
                  </template>
                </a-date-picker>
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap">
            <div class="text-left d-flex flex-column  margin-right-20">
              <label for="time_end" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.time_end') }}
              </label>
              <div class="date-picker-input content_header__input">
                <a-date-picker
                  class="f-height w-100 h-100 border-radius-14"
                  format="YYYY/MM/DD"
                  placeholder="YYYY/MM/DD"
                  v-model:value="filter['timeEnd']"
                  :allowClear="false"
                  :showToday="false"
                  :inputReadOnly="true"
                >
                  <template #suffixIcon>
                    <img src="@/assets/images/calendar.svg" height="18" width="18"/>
                  </template>
                </a-date-picker>
              </div>
            </div>
            <div class="text-left d-flex flex-column">
              <label for="skill" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.skill') }}
              </label>
              <AppSelect
                :options="LIST_COMPANIES"
                :emptyOption="false"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['skill']"
                @changeValue="onSelect($event, 'skill')"
                class="content_header__input border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="level" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.level') }}
              </label>
              <AppSelect
                :options="LIST_COMPANIES"
                :emptyOption="false"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['level']"
                @changeValue="onSelect($event, 'level')"
                class="content_header__input border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="priority" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.priority') }}
              </label>
              <AppSelect
                :options="LIST_COMPANIES"
                :emptyOption="false"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['priority']"
                @changeValue="onSelect($event, 'priority')"
                class="content_header__input border-radius-14 margin-right-20"
              />
            </div>
            <div class="text-left d-flex flex-column margin-top-22">
              <button class="content_header__input border-radius-14 __button">
                <img src="@/assets/images/icon-search.svg" class="margin-right-10" alt="">
                {{ $i18n.t('button.search') }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="content_center">

      </div>
    </div>
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue';
  import { TAB_ACTIVE, TAB_INACTIVE, LIST_COMPANIES } from '@/constants/job';
  import AppSelect from '@/components/AppSelect.vue';

  let activeTab = ref(TAB_ACTIVE);

  const filter = reactive({
    company:  null,
    job: null,
    timeStart: null,
    block: null,
    group: null,
    timeEnd: null,
    skill: null,
    level: null,
    priority: null,
  });

  const changeTab = (tab) => {
    if (activeTab.value != tab) {
      activeTab.value = tab
    }
  }

  const onSelect = (data, type) => {
    filter[type] = data;
  }

</script>
