<template>
	<div class="content">
		<div class="msglist">
			<search></search>
			<chatlist></chatlist>
		</div>
		<div class="chatbox flex flex-item">
      <chatbox />
		</div>
	</div>
</template>

<script>
import search from '../search/search'
import chatlist from '../chatlist/chatlist'
import chatbox from '../chatbox/chatbox'
export default {
   components: {
   	 search,
   	 chatlist,
     chatbox
   }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.scss';
.content {
  display: flex;
  width: 100%;
  height: 100%;
  background: pink;
  .msglist {
      width: 18rem;
      background: $white;
  }
}
</style>
