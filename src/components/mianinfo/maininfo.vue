<!-- 最左边的选择框 -->
<template>
	<div class="mycard">
        <header>
            <span class="name">Id: 352 yingxiao</span>
            <img :src="down" class="down"/>
        </header>
        <div class="main-search">
            <main-search></main-search>
            <main-list></main-list>
        </div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import downImg from '../../../static/images/down.png';
import mainSearch from '../mainsearch/mainsearch';
import mainList from '../mainlist/mainlist';

export default {
    data () {
        return {
            down: downImg
        }
    },
    computed: {
        ...mapState([
            'user',
        ])
    },
    methods: {
    },
   components: {
        mainSearch,
        mainList
   }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.scss';
.mycard {
    header {
        display: flex;
        align-items: center;
        height: 5rem;
        width: 100%;
        background: $white;
        .name {
            margin-left: 1.2rem;
            color: $levelOneTextColor;
            font-size: $largeFont;
        }
        .down {
            margin-right: 1.2rem;
            margin-left: auto;
        }
    }
    .main-search {
        width: 100%;
        height: 49rem;
        overflow: hidden;
        background: $white;
    }
}

</style>
