<template>
	<div class="content">
        <div class="search-wrapper">
            <img :src="searchIcon" class="search-icon"/>
            <input type="text" placeholder="输入字母或汉子搜索联系人" class="search-content"/>
        </div>
	</div>
</template>

<script>
import searchImg from '../../../static/images/search.png'
export default {
    data () {
        return {
            searchIcon: searchImg
        }
    },
    components: {
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.scss';
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    background: #f5f5f5;
    .search-wrapper {
        position: relative;
        .search-content {
            padding-left: 1.5rem;
            width: 15.6rem;
            height: 1.5rem;
            border: $border;
            box-sizing: border-box;
        }
        .search-icon {
            position: absolute;
            margin-top: 0.35rem;
            margin-left: 0.35rem;
            width: 0.75rem;
            height: 0.75rem;
        }
    }
}
</style>
