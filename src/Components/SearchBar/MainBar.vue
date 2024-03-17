<script setup lang="ts">
import { ref } from 'vue';
import { getURL, SearchSite, SiteSelection } from './search';
// import { Icon } from '@iconify/vue';
import $ from 'jquery';
import { Search } from '@element-plus/icons-vue'


$(() => {
	$('#search').height(Number($('#icon').height()));
});

const select = ref(SearchSite.BING)

const search_input = ref('');

const searchButton = () => {
	window.open(getURL(search_input.value, select.value));
};



</script>
<template>
	<form>
		<el-input v-model="search_input" id="icon" style="max-width: 600px" class="input-with-select">
			<template #prepend>
				<el-select style="width: 115px" filterable v-model="select">
					<el-option v-for="site in SiteSelection" :key="site.value" :value="site.value"
						:label="site.label" />
				</el-select>
			</template>
			<template #append>
				<el-button @click="searchButton" :icon="Search" circle />
			</template>
		</el-input>
	</form>
</template>
