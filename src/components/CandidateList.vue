<template>
  <div class="card border-0" id="user-candidate">
    <div class="content mt-3">
      <div class="content_header mb-3">
        <!-- Manager filter -->
        <div v-if="accountRole == 'MNG'" class="content_header--top">
          <div class="content_header--top-filter margin-bottom-20">
            <p class="fs-6 font-weight-7 mb-0">{{ $i18n.t('header.filter') }}</p>
          </div>
          <div class="margin-bottom-20 content_header--top__border" />
          <div class="d-flex flex-wrap margin-bottom-20">
            <div class="text-left d-flex flex-column">
              <label for="username" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.username') }}
              </label>
              <input :placeholder="$i18n.t('placeholder.username')" v-model="filter['username']"
                class="content_header__input __user border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="company" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.position') }}
              </label>
              <AppSelect :options="LIST_POSITION" :emptyOption="false" :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['position']" @changeValue="onSelect($event, 'position')"
                class="content_header__input border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="salary" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.salary') }}
              </label>
              <input :placeholder="$i18n.t('placeholder.salary_min')" v-model="filter['salary_min']"
                class="content_header__input __user border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="group" class="font-weight-7 font-size-14">
                &nbsp;
              </label>
              <input :placeholder="$i18n.t('placeholder.salary_max')" v-model="filter['salary_max']"
                class="content_header__input __user border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="stage" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.stage') }}
              </label>
              <div class="border-0 content_header__input">
                <AppSelect :options="LIST_STAGE" :emptyOption="false" :placeholder="$i18n.t('placeholder.change')"
                  v-model="filter['stage']" @changeValue="onSelect($event, 'stage')"
                  class="content_header__input border-radius-14 margin-right-20" />
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap">
            <div class="text-left d-flex flex-column">
              <button class="content_header__input border-radius-14 __button">
                <img src="@/assets/images/icon-search.svg" class="margin-right-10" alt="">
                {{ $i18n.t('button.search') }}
              </button>
            </div>
          </div>
        </div>
        <!-- End MNG filter -->

        <!-- RHR filter-->
        <div v-if="accountRole == 'RHR'" class="content_header--top">
          <div class="content_header--top-filter margin-bottom-20">
            <p class="fs-6 font-weight-7 mb-0">{{ $i18n.t('header.filter') }}</p>
          </div>
          <div class="margin-bottom-20 content_header--top__border" />
          <!-- Row 1 -->
          <div class="d-flex flex-wrap margin-bottom-20">
            <div class="text-left d-flex flex-column">
              <label for="username" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.username') }}
              </label>
              <input :placeholder="$i18n.t('placeholder.username')" v-model="filter['username']"
                class="content_header__input __user border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="position" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.position') }}
              </label>
              <AppSelect :options="LIST_POSITION" :emptyOption="false" :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['position']" @changeValue="onSelect($event, 'position')"
                class="content_header__input border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="company" class="font-weight-7 font-size-14">
                Level
              </label>
              <AppSelect :options="LIST_POSITION" :emptyOption="false" :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['position']" @changeValue="onSelect($event, 'position')"
                class="content_header__input border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="company" class="font-weight-7 font-size-14">
                Skill
              </label>
              <AppSelect :options="LIST_POSITION" :emptyOption="false" :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['position']" @changeValue="onSelect($event, 'position')"
                class="content_header__input border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="company" class="font-weight-7 font-size-14">
                Category
              </label>
              <AppSelect :options="LIST_POSITION" :emptyOption="false" :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['position']" @changeValue="onSelect($event, 'position')"
                class="content_header__input border-radius-14 margin-right-20" />
            </div>
          </div>
          <!-- Row 2 -->
          <div class="d-flex flex-wrap margin-bottom-20">
            <div class="text-left d-flex flex-column">
              <label for="source" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.source') }}
              </label>
              <AppSelect :options="LIST_POSITION" :emptyOption="false" :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['source']" @changeValue="onSelect($event, 'source')"
                class="content_header__input border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="email" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.email') }}
              </label>
              <input :placeholder="$i18n.t('placeholder.email')" v-model="filter['email']"
                class="content_header__input __user border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="phone_number" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.phone_number') }}
              </label>
              <input :placeholder="$i18n.t('placeholder.phone_number')" v-model="filter['phone_number']"
                class="content_header__input __user border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="salary" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.salary') }}
              </label>
              <input :placeholder="$i18n.t('placeholder.salary_min')" v-model="filter['salary_min']"
                class="content_header__input __user border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="group" class="font-weight-7 font-size-14">
                &nbsp;
              </label>
              <input :placeholder="$i18n.t('placeholder.salary_max')" v-model="filter['salary_max']"
                class="content_header__input __user border-radius-14 margin-right-20" />
            </div>
          </div>
          <!-- Row 3 -->
          <div class="d-flex flex-wrap margin-bottom-20">
            <div class="text-left d-flex flex-column">
              <label for="stage" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.stage') }}
              </label>
              <AppSelect :options="LIST_STAGE" :emptyOption="false" :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['stage']" @changeValue="onSelect($event, 'stage')"
                class="content_header__input border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="company" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.company') }}
              </label>
              <AppSelect :options="LIST_POSITION" :emptyOption="false" :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['company']" @changeValue="onSelect($event, 'company')"
                class="content_header__input border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="block" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.block') }}
              </label>
              <AppSelect :options="LIST_POSITION" :emptyOption="false" :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['block']" @changeValue="onSelect($event, 'block')"
                class="content_header__input border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="group" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.group') }}
              </label>
              <AppSelect :options="LIST_POSITION" :emptyOption="false" :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['group']" @changeValue="onSelect($event, 'group')"
                class="content_header__input border-radius-14 margin-right-20" />
            </div>
            <div class="text-left d-flex flex-column">
              <label for="time_sent" class="font-weight-7 font-size-14">
                {{ $i18n.t('label.time_sent') }}
              </label>
              <div class="date-picker-input content_header__input">
                <a-date-picker class="f-height w-100 h-100 border-radius-14" format="YYYY/MM/DD"
                  placeholder="YYYY/MM/DD" v-model:value="filter['timeSent']" :allowClear="false" :showToday="false"
                  :inputReadOnly="true">
                  <template #suffixIcon>
                    <img src="@/assets/images/calendar.svg" height="18" width="18" />
                  </template>
                </a-date-picker>
              </div>
            </div>
          </div>
          <!-- Search button -->
          <div class="d-flex flex-wrap">
            <div class="text-left d-flex flex-column">
              <button class="content_header__input border-radius-14 __button">
                <img src="@/assets/images/icon-search.svg" class="margin-right-10" alt="">
                {{ $i18n.t('button.search') }}
              </button>
            </div>
          </div>
        </div>
        <!-- End RHR filter -->
      </div>
      <div class="content_center">
        <div class="d-flex justify-content-between align-items-center content_center--top py-2">
          <p class="font-size-18 font-weight-7 mb-0">{{ $i18n.t('header.list_user') }}</p>
          <a v-if="accountRole == 'RHR'" class="btn border-0">
            <img src="@/assets/images/btnAdd.svg" />
            <label class="fw-bold text-purple">Thêm ứng viên</label>
          </a>
        </div>
        <div class="content_center--body px-3">
          <table>
            <tr class="p-2">
              <th>{{ $i18n.t('label.username') }}</th>
              <th>{{ $i18n.t('label.position') }}</th>
              <th>Level</th>
              <th v-if="accountRole == 'RHR'">{{ $i18n.t('label.email') }}</th>
              <th v-if="accountRole == 'RHR'">{{ $i18n.t('label.phone_number') }}</th>
              <th>Stage hiện tại</th>
              <th v-if="accountRole == 'RHR'">{{ $i18n.t('label.men_request') }}</th>
              <th>{{ $i18n.t('label.hr_receive') }}</th>
              <th>{{ $i18n.t('label.action') }}</th>
            </tr>
            <tr v-for="(candidate, index) in LIST_CANDIDATE" :key="index">
              <td>{{ candidate.name }}</td>
              <td>{{ candidate.position }}</td>
              <td>{{ candidate.level }}</td>
              <td v-if="accountRole == 'RHR'">{{ candidate.email }}</td>
              <td v-if="accountRole == 'RHR'">{{ candidate.phone_number }}</td>
              <td>{{ candidate.stage }}</td>
              <td v-if="accountRole == 'RHR'">{{ candidate.men_request }}</td>
              <td>{{ candidate.hr_receive }}</td>
              <td v-if="accountRole == 'RHR'">
                <div class="d-flex align-items-center justify-content-center list-action">
                  <img v-if="action" src="@/assets/images/actionactive.svg" @click="hideAction" />
                  <div class="dropdown">
                    <img class="dropbtn" v-if="!action" src="@/assets/images/action.svg" @click="showAction(index)" />
                    <div class="dropdown-content rounded-3">
                      <a href="/user-detail">
                        <img src="@/assets/images/icon-detail.svg" alt="icon detail">&nbsp;
                        <label for="">Chi tiết</label>
                      </a>
                      <a href="#">
                        <img src="@/assets/images/icon-add.svg" alt="icon add">&nbsp;
                        <label for="">Tạo phỏng vấn</label>
                      </a>
                      <a href="#">
                        <img src="@/assets/images/icon-try.svg" alt="icon try">&nbsp;
                        <label for="">Thử việc</label>
                      </a>
                      <a href="#">
                        <img src="@/assets/images/icon-change.svg" alt="icon change">&nbsp;
                        <label for="">Assign owner</label>
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td v-if="accountRole == 'MNG'">
                <div class="d-flex align-items-center justify-content-center">
                  <img src="@/assets/images/icon-detail.svg" alt="icon detail">&nbsp;
                  <a href="/user-detail">Chi tiết</a>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { LIST_STAGE, LIST_POSITION, LIST_CANDIDATE } from '@/constants/user-candidate';
import AppSelect from '@/components/AppSelect.vue';

let accountRole = ref('RHR');
const filter = reactive({
  username: null,
  position: null,
  level: null,
  block: null,
  group: null,
  email: null,
  skill: null,
  phone_number: null,
});

const onSelect = (data, type) => {
  filter[type] = data;
}

const showAction = (index) => {
  this.LIST_CANDIDATE[index].action = true;
}

</script>