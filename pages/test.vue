<template>
	<div>
		<NuxtPicture width="200" src="/logo.png" />

		<div>Token: {{ data }}</div>
	</div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/token');
</script>
