<template>
  <div class="articles">
    <div class="articles_wrap">
      <div class="articles_sort-radio sort-radio">
        <div class="sort-radio_item radio-item">
          <input
            id="sort_1"
            type="radio"
            value="alphabet"
            v-model="sortMode"
            name="sort"
          />
          <label for="sort_1">
            <div class="radio-item_marker"></div>
            отсортировать блоки по заголовку согласно алфавитного порядка</label
          >
        </div>
        <div class="sort-radio_item radio-item">
          <input
            id="sort_2"
            t
            type="radio"
            value="left"
            v-model="sortMode"
            name="sort"
          />
          <label for="sort_2">
            <div class="radio-item_marker"></div>
            вывести все блоки в формате “изображения - слева, текст -
            справа”</label
          >
        </div>
        <div class="sort-radio_item radio-item">
          <input
            id="sort_3"
            type="radio"
            value="normal"
            v-model="sortMode"
            name="sort"
          />
          <label for="sort_3">
            <div class="radio-item_marker"></div>
            вывести все блоки в формате “изображения - слева, текст - справа” и
            наоборот в шахматном порядке</label
          >
        </div>
      </div>
    </div>

    <div class="articles_group articles-group">
      <div :class="['articles_wrap', 'articles-group_wrap', sortClass()]">
        <div
          :class="['articles-group_item', 'articles-item']"
          v-for="(el, i) in sortedArr"
          :key="i"
        >
          <div class="articles-item_img">
            <img
              :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2${el.poster_path}`"
              alt=""
            />
          </div>
          <div class="articles-item_text-block text-block">
            <div class="text-block_title" v-html="el.original_title"></div>
            <div class="text-block_text" v-html="el.overview"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Articles",
  
  data() {
    return {
      initialAticlesArr: [],
      sortedArr: [],
      maxArticle: 5,
      sortMode: "normal", // normal , left , alphabet
    };
  },
  watch: {
    sortMode() {
      if (this.sortMode !== "alphabet") {
        if (this.initialAticlesArr.results) {
          this.sortedArr = this.initialAticlesArr.results.slice(
            [0],
            [this.maxArticle]
          );
        }
      } else {
        console.log(this.sortedArr);
        this.sortedArr.sort(function (a, b) {
          if (a.original_title.toLowerCase() < b.original_title.toLowerCase()) {
            return -1;
          }
          if (a.original_title.toLowerCase() > b.original_title.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      }
    },
  },
  methods: {
    sortClass() {
      return {
        normal: this.sortMode === "normal",
        left: this.sortMode === "left",
        alphabet: this.sortMode === "alphabet",
      };
    },
  },
  beforeCreate() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=3685d3eb8695f087227e0ee980f3ae4d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {       
        this.initialAticlesArr = data;
        this.sortedArr = this.initialAticlesArr.results.slice(
          [0],
          [this.maxArticle]
        );
      });
  },
};
</script>

<style scoped lang="scss">
.articles {
  padding: 15px 0 59px;
  &_wrap {
    max-width: 1020px;
    margin: 0 auto;
  }

  .sort-radio {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0 auto 72px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    text-transform: lowercase;
    color: #000000;

    &_item {
      margin: 13px 0 13.5px;
      position: relative;

      label {
        display: flex;
        align-items: center;
      }
      input {
        position: absolute;
        visibility: hidden;
        &:checked ~ label .radio-item_marker:before {
          background: #ff0000;
        }
      }
    }
    .radio-item {
      &_marker {
        position: relative;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid #000000;
        box-sizing: border-box;
        margin-right: 19px;
        &::before {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          content: "";
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          box-sizing: border-box;
        }
      }
    }
  }

  &-group {
    &_wrap {
      &.normal {
        .articles-item {
          &:nth-of-type(even) {
            flex-direction: row-reverse;
            justify-content: space-between;
            .text-block {
              margin-right: 40px;
            }
            .articles-item_img {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
  &-item {
    display: flex;
    align-items: center;
    background: #c4c4c4;
    padding: 30px 36px;
    &:not(:last-child) {
      margin-bottom: 37px;
    }

    &_img {
      margin-right: 54px;
      img {
        display: block;
        width: 380px;
        height: 264px;
        object-fit: contain;
        background: #ffffff;
      }
    }

    .text-block {
      margin-right: 0;
      &_title {
        font-family: "Roboto";
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 115%;
        text-transform: lowercase;
        color: #000000;
        margin-bottom: 40px;
      }
      &_text {
        font-family: "Roboto";
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 15px;
        text-transform: lowercase;
        color: #000000;
      }
    }
  }
}
</style>
