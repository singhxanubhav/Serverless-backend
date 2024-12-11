export default {
	async fetch(request, env, ctx){
		return Response.json({
			message: "Hello Anubhav"
		});
		
	},
} satisfies ExportedHandler<Env>;
