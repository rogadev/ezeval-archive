import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["partytown"]?: typeof import("@nuxtjs/partytown").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["auth"]?: typeof import("@sidebase/nuxt-auth").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    auth: {
        isEnabled: boolean,

        origin: any,

        basePath: string,

        trustHost: boolean,

        enableSessionRefreshPeriodically: boolean,

        enableSessionRefreshOnWindowFocus: boolean,

        enableGlobalAppMiddleware: boolean,

        isOriginSet: boolean,
    },
  }
  interface PublicRuntimeConfig {
     apiBase: string,

    auth: {
        isEnabled: boolean,

        origin: any,

        basePath: string,

        trustHost: boolean,

        enableSessionRefreshPeriodically: boolean,

        enableSessionRefreshOnWindowFocus: boolean,

        enableGlobalAppMiddleware: boolean,
    },
  }
}