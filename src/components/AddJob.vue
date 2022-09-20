<template>
  <div id="addjob" class="padding-20">
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
    <div class="infor form">
      <div class="infor__left margin-right-20">
        <label for="" class="margin-bottom-8"
          >{{ $i18n.t("label.job") }}<span class="text-danger"> *</span></label
        >
        <input
          v-model="filter['job']"
          :placeholder="$i18n.t('placeholder.job')"
          class="padding-8 border-radius-14 margin-bottom-20"
        />
        <label for="" class="margin-bottom-8"
          >{{ $i18n.t("label.level")
          }}<span class="text-danger"> *</span></label
        >
        <AppSelect
          :options="LIST_LEVEL"
          :emptyOption="false"
          :placeholder="$i18n.t('placeholder.change')"
          v-model="filter['level']"
          @changeValue="onSelect($event, 'level')"
          class="border-radius-14 margin-right-20 margin-bottom-20"
        />
        <label for="" class="margin-bottom-8"
          >{{ $i18n.t("label.time_onboard")
          }}<span class="text-danger"> *</span></label
        >
        <input
          v-model="filter['time_onboard']"
          :placeholder="$i18n.t('placeholder.time_onboard')"
          class="padding-8 border-radius-14 margin-bottom-20"
        />
        <label for="" class="margin-bottom-8"
          >{{ $i18n.t("label.block")
          }}<span class="text-danger"> *</span></label
        >
        <AppSelect
          :options="LIST_BLOCKS"
          :emptyOption="false"
          :placeholder="$i18n.t('placeholder.change')"
          v-model="filter['block']"
          @changeValue="onSelect($event, 'block')"
          class="border-radius-14 margin-right-20"
        />
      </div>
      <div class="infor__right">
        <label for="" class="margin-bottom-8"
          >{{ $i18n.t("label.amount")
          }}<span class="text-danger"> *</span></label
        >
        <input
          v-model="filter['amount']"
          :placeholder="$i18n.t('placeholder.amount')"
          class="padding-8 border-radius-14 margin-bottom-20"
        />
        <label for="" class="margin-bottom-8"
          >{{ $i18n.t("label.priority")
          }}<span class="text-danger"> *</span></label
        >
        <AppSelect
          :options="LIST_PRIORITY"
          :emptyOption="false"
          :placeholder="$i18n.t('placeholder.change')"
          v-model="filter['priority']"
          @changeValue="onSelect($event, 'priority')"
          class="border-radius-14 margin-right-20 margin-bottom-20"
        />
        <label for="" class="margin-bottom-8"
          >{{ $i18n.t("label.company")
          }}<span class="text-danger"> *</span></label
        >
        <AppSelect
          :options="LIST_COMPANIES"
          :emptyOption="false"
          :placeholder="$i18n.t('placeholder.change')"
          v-model="filter['company']"
          @changeValue="onSelect($event, 'company')"
          class="border-radius-14 margin-right-20 margin-bottom-20"
        />
        <label for="" class="margin-bottom-8"
          >{{ $i18n.t("label.department")
          }}<span class="text-danger"> *</span></label
        >
        <AppSelect
          :options="LIST_UNITS"
          :emptyOption="false"
          :placeholder="$i18n.t('placeholder.change')"
          v-model="filter['department']"
          @changeValue="onSelect($event, 'department')"
          class="border-radius-14 margin-right-20"
        />
      </div>
    </div>
    <div
      class="detail padding-top-13 padding-bottom-13 padding-left-34 border-radius-14"
    >
      <img src="@/assets/images/orangerectangle.svg" class="margin-right-10" />
      <span>{{ $i18n.t("header.requirement") }}</span>
    </div>
    <div
      class="detail form"
      :class="isShow ? 'margin-bottom-80' : 'margin-bottom-20'"
    >
      <div class="margin-auto">
        <label for="" class="margin-bottom-8"
          >{{ $i18n.t("label.skill")
          }}<span class="text-danger"> *</span></label
        >
        <AppSelect
          :options="LIST_COMPANIES"
          :emptyOption="false"
          :placeholder="$i18n.t('placeholder.change')"
          v-model="filter['skill']"
          @changeValue="onSelect($event, 'skill')"
          class="border-radius-14 margin-right-20"
        />
        <div class="d-flex margin-top-14 margin-bottom-14">
          <img src="@/assets/images/infor.svg" class="margin-right-8" />
          <p class="font-weight-4 margin-auto">
            Nếu kĩ năng của ứng viên không có trong mục lựa chọn, hãy nhập thêm
            kĩ năng bên dưới, mỗi kĩ năng khác nhau phân biệt bằng dấu “,”
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
        <input
          v-model="filter['salary']"
          :placeholder="$i18n.t('placeholder.salary')"
          class="padding-8 border-radius-14 margin-bottom-20 w-100"
        />
        <label for="" class="margin-bottom-8"
          >{{ $i18n.t("label.job_description")
          }}<span class="text-danger"> *</span></label
        >
        <ckeditor
          :editor="editor"
          v-model="filter['more_info']"
          :config="editorConfig"
        ></ckeditor>
      </div>
    </div>
  </div>
  <SaveModal v-if="isShow" :filter="filter" @cancel="cancel" />
</template>

<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import DocumentEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import AppSelect from "@/components/AppSelect.vue";
import SaveModal from "@/components/SaveModal.vue";
import { reactive, watch, ref } from "vue";
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
  time_onboard: "",
  company: "",
  block: "",
  department: "",
  more_info: "<p>Nhập mô tả</p>",
});
let isShow = ref(false);

watch(
  () =>
    filter["job"] ||
    filter["skill"] ||
    filter["amount"] ||
    filter["level"] ||
    filter["priority"] ||
    filter["time_onboard"] ||
    filter["company"] ||
    filter["block"] ||
    filter["department"] ||
    filter["salary"] ||
    filter["more_info"],
  () => {
    if (
      filter["job"] ||
      filter["skill"] ||
      filter["amount"] ||
      filter["level"] ||
      filter["priority"] ||
      filter["time_onboard"] ||
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

const cancel = () => {
  filter["job"] = "";
  filter["skill"] = "";
  filter["amount"] = "";
  filter["level"] = "";
  filter["priority"] = "";
  filter["time_onboard"] = "";
  filter["company"] = "";
  filter["block"] = "";
  filter["department"] = "";
  filter["salary"] = "";
  isShow.value = false;
};

const editor = ClassicEditor;
const editorConfig = {
  // The configuration of the editor.
};
const onSelect = (data, type) => {
  filter[type] = data;
};
</script>
