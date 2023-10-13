<template>
  <div class="movieList">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="已经到我的底线了>_<"
      @load="onLoad"
    >
      <template v-for="(item, index) in movieList" :key="index">
        <div class="movie-item" @click="movieItemClick(item.filmId)">
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
    </van-list>
  </div>
</template>

<script setup>
import { getMovieList } from "@/servies/modules/movie_list"
import { ref, defineProps } from "vue"
import { useRouter } from "vue-router"
//下拉列表组件
const loading = ref(false)
const finished = ref(false)
const pageSize = ref(1)
const totalPages = ref()
const movieList = ref([])

//组件通信,接收数据
const props = defineProps({
  apiURL: String,
})

// 下拉更新
const onLoad = () => {
  pageSize.value += 5

  // 异步更新数据
  setTimeout(() => {
    getMovieList(props.apiURL + pageSize.value).then(res => {
      //把请求到的数据存在变量里
      movieList.value = res.data.films
      totalPages.value = res.data.total
      // 加载状态结束
      loading.value = false
    })

    if (pageSize.value >= totalPages.value) {
      finished.value = true
    }
  }, 1000)
}

//路由穿参（query或者动态路由）
const router = useRouter()
const movieItemClick = id => {
  // console.log(id)
  router.push({
    path: "/movieDetail",
    query: { id },
  })
}
</script>

<style lang="scss" scoped>
.movieList {
  padding-top: 0.375rem;
  margin: 0.3125rem;
  .movie-item {
    display: flex;
    align-items: center;
    margin: 0.3125rem;
    .cover {
      img {
        width: 4rem;
        height: 5.625rem;
      }
    }
    .item-info {
      padding: 0 0.625rem;
      .tittle {
        font-size: 0.875rem;
        margin-bottom: 0.3125rem;
      }
      .info {
        color: #8c8c8c;
        .score {
          margin-bottom: 0.1875rem;
          display: flex;
          .star {
            margin-left: 0.125rem;
            font-weight: 500;
            color: var(--main-color);
          }
        }
        .director {
          margin-bottom: 0.1875rem;
        }
        .actors {
          display: flex;
          width: 15rem;
          margin-bottom: 0.1875rem;
          white-space: nowrap; //文本不会换行
          text-overflow: ellipsis; //文本溢出显示省略号
          overflow: hidden;
        }
      }
    }

    .buybtn {
      width: 2.8125rem;
      background-color: var(--main-color);
      color: #fff;
      padding: 0.3125rem;
      border-radius: 0.3125rem;
      display: flex;
      justify-content: center;
    }
  }
}
</style>

@/servies/axios_request/index @/servies/new_class_axios
