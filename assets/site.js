document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");
function closeMenu(returnFocus = false) {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  if (returnFocus) menuButton.focus();
}
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  navigation?.classList.toggle("is-open", open);
});
navigation?.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton?.getAttribute("aria-expanded") === "true"
  )
    closeMenu(true);
});
document.addEventListener("click", (event) => {
  if (event.target instanceof Element && !event.target.closest(".site-header"))
    closeMenu();
});
window.matchMedia("(min-width: 541px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

const filters = [...document.querySelectorAll("[data-filter]")];
const items = [...document.querySelectorAll("[data-project]")];
filters.forEach((button) =>
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filters.forEach((filter) =>
      filter.setAttribute("aria-pressed", String(filter === button)),
    );
    let visible = 0;
    items.forEach((item) => {
      const show =
        selected === "all" ||
        item.dataset.category.split(" ").includes(selected);
      item.hidden = !show;
      if (show) visible += 1;
    });
    const count = document.querySelector("[data-filter-count]");
    const empty = document.querySelector("[data-filter-empty]");
    if (count)
      count.textContent = `${visible} ${visible === 1 ? "project" : "projects"}`;
    if (empty) empty.hidden = visible > 0;
  }),
);

document
  .querySelector("[data-copy-email]")
  ?.addEventListener("click", async (event) => {
    const button = event.currentTarget;
    const status = document.querySelector("[data-copy-status]");
    if (!(button instanceof HTMLElement) || !status) return;
    try {
      await navigator.clipboard.writeText(button.dataset.copyEmail);
      status.textContent = "Email copied.";
    } catch {
      status.textContent = "Select the email address to copy it.";
    }
  });
