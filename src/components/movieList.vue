<template>

  <div class="movieList">
    <template v-for="(item, index) in movieList" :key="index">
      <div class="movie-item">
        <div class="cover">
          <img :src="item.poster" alt="" />
        </div>

        <div class="item-info">
          <div class="tittle">{{ item.name }}</div>
          <div class="info">
            <div class="score" v-if="item.grade">
              观众评分
              <div class="star">{{ item.grade }}</div>
            </div>
            <div class="director">导演：{{ item.director }}</div>
            <div class="actors">
              演员：
              <template v-for="iten in item.actors" :key="index">
                <span class="actor" v-show="iten.role !== '导演'">
                  {{ iten.name }}&nbsp;
                </span>
              </template>
            </div>
          </div>
        </div>

        <div class="buybtn">购票</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { getMovieList } from "@/servies/modules/movie_list"
import { ref, defineProps} from "vue"

//组件通信,接收数据
const props = defineProps({
  apiURL: "",
})
// 创建movieList变量存储下面拿到的res数据
const movieList = ref([]) 

//请求接口数据
getMovieList(props.apiURL).then(res => {
    movieList.value = res.data.films   //把请求到的数据存起来
  })
</script>

<style lang="scss" scoped>
.movieList {
  padding-top: 6px;
  margin: 5px;
  .movie-item {
    display: flex;
    align-items: center;
    margin: 5px;
    .cover {
      img {
        width: 64px;
        height: 90px;
      }
    }
    .item-info {
      padding: 0 10px;
      .tittle {
        font-size: 14px;
        margin-bottom: 5px;
      }
      .info {
        color: #8c8c8c;
        .score {
          margin-bottom: 3px;
          display: flex;
          .star {
            margin-left: 2px;
            font-weight: 500;
            color: #ff5f16;
          }
        }
        .director {
          margin-bottom: 3px;
        }
        .actors {
          display: flex;
          width: 240px;
          margin-bottom: 3px;
          white-space: nowrap; //文本不会换行
          text-overflow: ellipsis; //文本溢出显示省略号
          overflow: hidden;
        }
      }
    }

    .buybtn {
      width: 45px;
      background-color: #ff5f16;
      color: #fff;
      padding: 5px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>

@/servies/axios_request/index @/servies/new_class_axios
