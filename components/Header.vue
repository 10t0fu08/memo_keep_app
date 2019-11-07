<template>
  <b-container>
    <b-row class="justify-content-md-center header">
      <b-col col lg="3" md="3" sm="2" cols="2">
        <div class="main_icon">
          <!-- <i class="fas fa-envelope-open-text"></i> -->
          <img src="../assets/img/favicon.png" class="img_icon" />
        </div>
        <p class="title">memo keep app</p>
      </b-col>
      <b-col col lg="6" md="7" sm="8" cols="8">
        <form class="search_form">
          <button class="search_icon">
            <i class="fas fa-search"></i>
          </button>
          <input
            type="search"
            class="search_input"
            placeholder="search"
            @input="$store.commit('search_memo')"
          />
        </form>
      </b-col>
      <b-col col lg="3" md="2" sm="2" cols="2">
        <!-- モーダル -->
        <div class="plus_icon_wrap">
          <b-button
            variant="warning"
            class="add_icon"
            v-b-modal.modal-prevent-closing
            v-show="width_flag"
          >add</b-button>
          <b-button
            variant="warning"
            class="plus_icon"
            v-b-modal.modal-prevent-closing
            v-show="!width_flag"
          >+</b-button>
          <ModalForm />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ModalForm from "~/components/ModalForm.vue";
export default {
  components: {
    ModalForm
  },
  data: function() {
    return {
      edit_not: this.$store.state.edit_not,
      // スクリーン横幅
      width: window.parent.screen.width,
      width_flag: true
    };
  },
  methods: {
    handleResize: function() {
      // resizeのたびに発火する
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      if (this.width <= 880) {
        this.width_flag = false;
      } else {
        this.width_flag = true;
      }
    }
  },
  mounted: function() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  created: function() {
    this.handleResize();
  }
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  .row {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 64px;
    margin: 0;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    background-color: #fafafa;
    z-index: 1000;
    .col {
      height: 100%;
      box-sizing: border-box;
      display: flex;
      padding: 12px;
      .main_icon {
        margin: 0;
        width: 40px;
        height: 40px;
        // background-color: #eee;
        .img_icon {
          width: 100%;
          display: inline-block;
        }
      }
      .title {
        margin: 0;
        line-height: 40px;
        font-size: 18px;
        font-weight: bold;
        margin-left: 8px;
        @media screen and (max-width: 1100px) {
          font-size: 16px;
        }
        @media screen and (max-width: 970px) {
          display: none;
        }
      }
    }
    .search_form {
      width: 100%;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
      border-radius: 0.25em;
      display: flex;
      padding: 4px;
      // margin: auto;
      .search_icon {
        width: 32px;
        height: 32px;
        // background-color: #eee;
        .fa-search {
          color: #888;
        }
      }
      .search_input {
        height: 32px;
        width: 100%;
      }
    }

    .plus_icon_wrap {
      margin: auto;

      .add_icon {
        width: 112px;
        height: 40px;
        border: none;
        font-size: 16px;
        font-weight: bold;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
      }
      .plus_icon {
        width: 40px;
        height: 40px;
        border: none;
        font-size: 20px;
        font-weight: bold;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        line-height: 28px;
      }
    }
  }
}
</style>