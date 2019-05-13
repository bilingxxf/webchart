<template>
	<div class="content">
        <div class="search-wrapper">
            <img :src="searchIcon" class="search-icon"/>
            <input type="text" placeholder="搜索联系人" class="search-content"/>
            <img :src="addFriends" class="add"/>
            <img :src="refresh" class="refresh"/>
        </div>
	</div>
</template>

<script>
import searchImg from '../../../static/images/search.png'
import addFriendsImg from '../../../static/images/add_friends.png'
import refreshImg from '../../../static/images/refresh.png'
export default {
    data () {
        return {
            searchIcon: searchImg,
            addFriends: addFriendsImg,
            refresh: refreshImg
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
    align-items: center;
    width: 100%;
    height: 5rem;
    background: #f5f5f5;
    .search-wrapper {
        display: flex;
        position: relative;
        align-items: center;
        margin-left: 1.2rem;
        .search-content {
            padding-left: 1.25rem;
            width: 10.8rem;
            height: 1.5rem;
            border: $border;
            box-sizing: border-box;
        }
        .add {
            margin: 0 1rem;
        }
        .search-icon {
            position: absolute;
            left: 0.35rem;
            width: 0.75rem;
            height: 0.75rem;
        }
    }
}
</style>
