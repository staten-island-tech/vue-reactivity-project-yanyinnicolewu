# Vue Reactivity Project Feedback

**Student:** Yanyin / Nicole Wu

This is an ice cream store — the component structure and `v-for` display are present, but the app is a static display only: no reactive state, no click handlers, and no user interaction.

## Vite CLI – Mastery

`package.json` correctly includes `vite` and `vue` with proper scripts.

## Iteration in Vue – Approaching

`v-for` is used in `icecreamstore.vue` with `:key="item.flavor || item.Container"`. This key logic mixes two different properties, which can produce duplicate keys if both are sometimes null. Use a single unique property:

```html
<!-- Current (fragile key logic): -->
<div v-for="item in items" :key="item.flavor || item.Container">
  <!-- Better — use a single unique field: -->
  <div v-for="item in items" :key="item.flavor">
    <!-- Or add an id field to your data and use :key="item.id" -->
  </div>
</div>
```

## Data Binding – Not Yet

No reactive data is declared. The `items` array is a plain `const`, not wrapped in `ref()`. There is no `v-model` or reactive binding anywhere — the component only displays static data:

```js
// Current (not reactive):
const items = [...]

// Fix — make it reactive:
import { ref } from 'vue'
const items = ref([...])
```

## Click Methods – Not Yet

There are no `@click` handlers. The user can view the ice cream list but can't interact with it at all. Add an add-to-cart button:

```js
const cart = ref([]);
function addToCart(item) {
  cart.value.push(item);
}
```

```html
<button @click="addToCart(item)">Add to Cart</button>
```

## Reactive UI – Not Yet

Nothing updates when the user views the page because there are no interactions. `hi.vue` is an empty component. After adding click handlers and a reactive cart, add a cart display section.

## Semantic HTML – Approaching

Items are rendered in `<div>` elements. Use `<ul>/<li>` for the product list or `<article>` for each item card. `App.vue` imports views directly instead of using the router — consider using `<RouterView>` for proper routing.

## BEM CSS – Not Yet

No BEM class names are used. Class names are generic or absent. Add BEM naming:

- `ice-cream-store` (block)
- `ice-cream-store__card` (element)
- `ice-cream-store__button--add` (modifier)

## Bonus – Aesthetics – Approaching

The product display is clean and readable. Adding a color scheme, flavor images, and a visible cart would make this feel like a real ice cream shop.

## Summary of Critical Fixes

1. **Wrap `items` in `ref()`** to make the data reactive.
2. **Add `@click` handlers** and a reactive `cart` array so users can interact with the shop.
3. **Render the `cart` in the template** so users can see what they've selected.
4. **Fix the `:key` logic** — use a single unique property like `item.flavor` or add an `id` field.
5. **Add BEM class names** to your CSS.
