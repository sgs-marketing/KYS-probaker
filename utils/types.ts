import type { InjectionKey, WritableComputedRef } from 'vue'

export const injectKeys = {
    lang: Symbol() as InjectionKey<WritableComputedRef<string>>
}