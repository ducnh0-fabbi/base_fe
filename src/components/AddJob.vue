<template>
  <div id="addjob" class="padding-20">
    <VeeForm @submit="onSubmit" >
      <div
        class="infor padding-top-13 padding-bottom-13 padding-left-34 border-radius-14"
      >
        <router-link to="job-manager">
          <img
            src="@/assets/images/back.svg"
            class="margin-right-16 cursor-pointer"
          />
        </router-link>
        <img src="@/assets/images/greenrectangle.svg" class="margin-right-10" />
        <span>{{ $i18n.t("header.information") }}</span>
      </div>
      <div class="infor form d-flex flex-direction-column">
        <div class="d-flex flex-direction-row margin-auto">
          <div class="d-flex flex-direction-column width-360 margin-right-20">
            <label for="" class="margin-bottom-8"
              >{{ $i18n.t("label.job")
              }}<span class="text-danger"> *</span></label
            >
            <VeeField
              v-model="filter['job']"
              :name="$i18n.t('property.job')"
              :placeholder="$i18n.t('placeholder.job')"
              rules="required"
              class="padding-8 border-radius-14"
            />
            <ErrorMessage :name="$i18n.t('property.job')" class="errors" />
          </div>
          <div class="d-flex flex-direction-column width-360">
            <label for="" class="margin-bottom-8"
              >{{ $i18n.t("label.amount")
              }}<span class="text-danger"> *</span></label
            >
            <VeeField
              v-model="filter['amount']"
              :name="$i18n.t('property.amount')"
              :placeholder="$i18n.t('placeholder.amount')"
              rules="required"
              class="padding-8 border-radius-14"
            />
            <ErrorMessage :name="$i18n.t('property.amount')" class="errors" />
          </div>
        </div>
        <div class="d-flex flex-direction-row margin-auto">
          <div class="d-flex flex-direction-column width-360 margin-right-20">
            <label for="" class="margin-bottom-8 margin-top-20"
              >{{ $i18n.t("label.level")
              }}<span class="text-danger"> *</span></label
            >
            <VeeField
              v-model="filter['level']"
              :name="$i18n.t('property.level')"
              :placeholder="$i18n.t('placeholder.job')"
              rules="required"
            >
              <AppSelect
                :options="LIST_LEVEL"
                :emptyOption="false"
                :name="$i18n.t('property.level')"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['level']"
                @changeValue="onSelect($event, 'level')"
                class="border-radius-14"
              />
            </VeeField>
            <ErrorMessage :name="$i18n.t('property.level')" class="errors" />
          </div>
          <div class="d-flex flex-direction-column width-360">
            <label for="" class="margin-bottom-8 margin-top-20"
              >{{ $i18n.t("label.priority")
              }}<span class="text-danger"> *</span></label
            >
            <VeeField
              v-model="filter['priority']"
              :name="$i18n.t('property.priority')"
              :placeholder="$i18n.t('placeholder.job')"
              rules="required"
            >
              <AppSelect
                :options="LIST_PRIORITY"
                :emptyOption="false"
                :name="$i18n.t('property.priority')"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['priority']"
                @changeValue="onSelect($event, 'priority')"
                class="border-radius-14"
              />
            </VeeField>
            <ErrorMessage :name="$i18n.t('property.priority')" class="errors" />
          </div>
        </div>
        <div class="d-flex flex-direction-row margin-auto">
          <div class="d-flex flex-direction-column width-360 margin-right-20">
            <label for="" class="margin-bottom-8 margin-top-20"
              >{{ $i18n.t("label.time_onboard")
              }}<span class="text-danger"> *</span></label
            >
            <VeeField
              v-model="filter['timeOnboard']"
              :name="$i18n.t('property.time_onboard')"
              :placeholder="$i18n.t('placeholder.time_onboard')"
              rules="required"
              class="padding-8 border-radius-14"
            />
            <ErrorMessage
              :name="$i18n.t('property.time_onboard')"
              class="errors"
            />
          </div>
          <div class="d-flex flex-direction-column width-360">
            <label for="" class="margin-bottom-8 margin-top-20"
              >{{ $i18n.t("label.company")
              }}<span class="text-danger"> *</span></label
            >
            <VeeField
              v-model="filter['company']"
              :name="$i18n.t('property.company')"
              :placeholder="$i18n.t('placeholder.company')"
              rules="required"
            >
              <AppSelect
                :options="LIST_COMPANIES"
                :emptyOption="false"
                :name="$i18n.t('property.company')"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['company']"
                @changeValue="onSelect($event, 'company')"
                class="border-radius-14"
              />
            </VeeField>
            <ErrorMessage :name="$i18n.t('property.company')" class="errors" />
          </div>
        </div>
        <div class="d-flex flex-direction-row margin-auto">
          <div class="d-flex flex-direction-column width-360 margin-right-20">
            <label for="" class="margin-bottom-8 margin-top-20"
              >{{ $i18n.t("label.block")
              }}<span class="text-danger"> *</span></label
            >
            <VeeField
              v-model="filter['block']"
              :name="$i18n.t('property.block')"
              :placeholder="$i18n.t('placeholder.job')"
              rules="required"
            >
              <AppSelect
                :options="LIST_BLOCKS"
                :emptyOption="false"
                :name="$i18n.t('property.block')"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['block']"
                @changeValue="onSelect($event, 'block')"
                class="border-radius-14"
              />
            </VeeField>
            <ErrorMessage :name="$i18n.t('property.block')" class="errors" />
          </div>
          <div class="d-flex flex-direction-column width-360">
            <label for="" class="margin-bottom-8 margin-top-20"
              >{{ $i18n.t("label.department")
              }}<span class="text-danger"> *</span></label
            >
            <VeeField
              v-model="filter['department']"
              :name="$i18n.t('property.department')"
              :placeholder="$i18n.t('placeholder.job')"
              rules="required"
            >
              <AppSelect
                :options="LIST_UNITS"
                :emptyOption="false"
                :name="$i18n.t('property.department')"
                :placeholder="$i18n.t('placeholder.change')"
                v-model="filter['department']"
                @changeValue="onSelect($event, 'department')"
                class="border-radius-14"
              />
            </VeeField>
            <ErrorMessage
              :name="$i18n.t('property.department')"
              class="errors"
            />
          </div>
        </div>
      </div>

      <div
        class="detail padding-top-13 padding-bottom-13 padding-left-34 border-radius-14"
      >
        <img
          src="@/assets/images/orangerectangle.svg"
          class="margin-right-10"
        />
        <span>{{ $i18n.t("header.requirement") }}</span>
      </div>
      <div class="detail form" :class="isShow ? 'margin-bottom-80' : 'margin-bottom-20'">
        <div class="max-width-740 margin-auto">
          <label for="" class="margin-bottom-8"
            >{{ $i18n.t("label.skill")
            }}<span class="text-danger"> *</span></label
          >
          <VeeField
            v-model="filter['skill']"
            :name="$i18n.t('property.skill')"
            :placeholder="$i18n.t('placeholder.skill')"
            rules="required"
          >
            <AppSelect
              :options="LIST_LEVEL"
              :emptyOption="false"
              :name="$i18n.t('property.skill')"
              :placeholder="$i18n.t('placeholder.change')"
              v-model="filter['skill']"
              @changeValue="onSelect($event, 'skill')"
              class="border-radius-14"
            />
          </VeeField>
          <ErrorMessage :name="$i18n.t('property.skill')" class="errors" />
          <div class="d-flex margin-top-14 margin-bottom-14">
            <img src="@/assets/images/infor.svg" class="margin-right-8" />
            <p class="font-weight-4 margin-auto">
              Nếu kĩ năng của ứng viên không có trong mục lựa chọn, hãy nhập
              thêm kĩ năng bên dưới, mỗi kĩ năng khác nhau phân biệt bằng dấu
              “,”
            </p>
          </div>
          <input
            v-model="filter['skill']"
            :placeholder="`@${$i18n.t('placeholder.more_skill')}`"
            class="padding-8 border-radius-14 margin-bottom-20 w-100"
          />
          <label for="" class="margin-bottom-8"
            >{{ $i18n.t("label.salary")
            }}<span class="text-danger"> *</span></label
          >
          <VeeField
            v-model="filter['salary']"
            :name="$i18n.t('property.salary')"
            :placeholder="$i18n.t('placeholder.salary')"
            rules="required"
            class="padding-8 border-radius-14 w-100"
          />
          <ErrorMessage :name="$i18n.t('property.salary')" class="errors" />
          <br />
          <label for="" class="margin-bottom-8 margin-top-20"
            >{{ $i18n.t("label.job_description")
            }}<span class="text-danger"> *</span></label
          >
          <VeeField
            v-model="filter['moreInfo']"
            :name="$i18n.t('property.more_info')"
            rules="required"
          >
            <ckeditor
              :editor="editor"
              :name="$i18n.t('property.more_info')"
              :config="editorConfig"
              v-model="filter['moreInfo']"
            ></ckeditor>
          </VeeField>
          <ErrorMessage :name="$i18n.t('property.more_info')" class="errors" />
        </div>
      </div>
      <SaveModal v-if="isShow" :filter="filter" @cancel="cancel" />
    </VeeForm>
  </div>
</template>

<script setup>
import { reactive, watch, ref } from "vue";
import AppSelect from "@/components/AppSelect.vue";
import SaveModal from "@/components/SaveModal.vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  LIST_COMPANIES,
  LIST_BLOCKS,
  LIST_UNITS,
  LIST_PRIORITY,
  LIST_LEVEL,
} from "@/constants/job";
let filter = reactive({
  job: "",
  skill: "",
  amount: "",
  level: "",
  priority: "",
  timeOnboard: "",
  company: "",
  block: "",
  salary: "",
  department: "",
  moreInfo: "<p>Nhập mô tả</p>",
});
let isShow = ref(false);
watch(
  () =>
    filter["job"] ||
    filter["skill"] ||
    filter["amount"] ||
    filter["level"] ||
    filter["priority"] ||
    filter["timeOnboard"] ||
    filter["company"] ||
    filter["block"] ||
    filter["department"] ||
    filter["salary"] ||
    filter["moreInfo"],
  () => {
    if (
      filter["job"] ||
      filter["skill"] ||
      filter["amount"] ||
      filter["level"] ||
      filter["priority"] ||
      filter["timeOnboard"] ||
      filter["company"] ||
      filter["block"] ||
      filter["department"] ||
      filter["salary"]
    ) {
      isShow.value = true;
    } else {
      isShow.value = false;
    }
  }
);
const editor = ClassicEditor;
const editorConfig = {
  // The configuration of the editor.
};
const onSelect = (data, type) => {
  filter[type] = data;
};
const cancel = () => {
  filter["job"] = "";
  filter["skill"] = "";
  filter["amount"] = "";
  filter["level"] = "";
  filter["priority"] = "";
  filter["timeOnboard"] = "";
  filter["company"] = "";
  filter["block"] = "";
  filter["department"] = "";
  filter["salary"] = "";
  isShow.value = false;
};
</script>
