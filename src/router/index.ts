import { createRouter, createWebHistory } from "vue-router";
import Props from "@/pages/01_props/Father.vue";
import CustomEvent from "@/pages/02_custom-event/Father.vue";
import Mitt from "@/pages/03_mitt/Father.vue";
import VModel from "@/pages/04_v-model/Father.vue";
import Attrs from "@/pages/05_$attrs/Father.vue";
import RefsAndParent from "@/pages/06_$refs_$parent/Father.vue";
import ProvideAndInject from "@/pages/07_provide_inject/Father.vue";
import Pinia from "@/pages/08_pinia/Father.vue";
import Slot from "@/pages/09_slot/Father.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/props",
			name: "props",
			component: Props,
		},
		{
			path: "/custom-event",
			name: "custom-event",
			component: CustomEvent,
		},
		{
			path: "/mitt",
			name: "mitt",
			component: Mitt,
		},
		{
			path: "/v-model",
			name: "v-model",
			component: VModel,
		},
		{
			path: "/attrs",
			name: "attrs",
			component: Attrs,
		},
		{
			path: "/refs_and_parent",
			name: "refs",
			component: RefsAndParent,
		},
		{
			path: "/provide_and_inject",
			name: "provide",
			component: ProvideAndInject,
		},
		{
			path: "/pinia",
			name: "pinia",
			component: Pinia,
		},
		{
			path: "/slot",
			name: "slot",
			component: Slot,
		},
	],
});

export default router;
