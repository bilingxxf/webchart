<template>
	<div class="content">
		<div class="msglist">
			<contact-search></contact-search>
			<contact-list></contact-list>
		</div>
		<div class="chatbox">
		</div>
	</div>
</template>

<script>
import contactSearch from '../contactsearch/contactsearch'
import contactList from '../contactlist/contactlist'
export default {
   components: {
   	 contactSearch,
   	 contactList
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
