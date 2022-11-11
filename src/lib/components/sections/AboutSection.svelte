<script lang="ts">
	import Section from '../layout/Section.svelte';
</script>

<Section id="me" wrapper={false} light>
	<div class="flex gap-8 md:gap-20 relative max-w-[70rem] mx-auto h-full">
		<img
			src="/images/blue-water.jpg"
			alt="Black water"
			class="hidden sm:block w-[100%] min-h-[50px] object-cover"
		/>
		<div class="flex flex-col mx-[2.5vw] md:mr-[2.5vw] md:ml-0">
			<h1>About Me</h1>
			<div class="space-y-10 mb-20">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet, unde ab
					facere adipisci officia? Doloremque iusto quibusdam earum obcaecati quos nisi quo fuga
					molestias quam dolorem distinctio adipisci ipsum dolorum voluptatem temporibus debitis
					delectus aliquid, aspernatur doloribus provident accusantium deleniti repudiandae commodi?
					Dignissimos perferendis beatae, incidun
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio fugiat nemo
					nisi totam maiores suscipit! Qui eaque nisi quia commodi, reprehenderit ea, quos ab, in
					hic suscipit sint officiis ipsam culpa. Minima aliquid consectetur possimus odio beatae!
					Mollitia placeat ratione aliquam tempore magnam, commodi laudantium dicta nam iure
					repellat?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod illo iste minima
					facere esse et amet harum ducimus ad quae unde voluptas, ex, facilis, voluptate officia
					natus? Exercitationem, sapiente.
				</p>
			</div>
			<a href="/" class="bg-dark text-light pt-2 pb-1 px-6 w-max uppercase font-semibold"
				>See Resume</a
			>
		</div>
	</div>
</Section>

<style>
</style>
