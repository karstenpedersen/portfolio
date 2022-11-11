<script lang="ts">
	export let icon: string;

	let clazz = '';
	export { clazz as class };
</script>

<i class={clazz}>
	<img src={icon} alt="" />
</i>

<style>
</style>
