import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Development/victoria-window-cleaning/capstone/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}