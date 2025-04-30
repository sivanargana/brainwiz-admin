const app = {
  sidebar: () => {
    let sidebar = document.querySelector('[data-layout="sidebar"]');
    let toggle = document.querySelectorAll('[data-layout="sidebar-toggle"]');
    if (!sidebar || !toggle) return;
    MetisMenu.attach(document.querySelector('[data-layout="menu"]>ul'));
    let isSidebarExpanded = true;
    const sidebarToggle = () => {
      isSidebarExpanded = !isSidebarExpanded;
      sidebar.classList.toggle("classic", isSidebarExpanded);
      sidebar.classList.toggle("compact", !isSidebarExpanded);
    };
    toggle.forEach((item) => {
      item.addEventListener("click", sidebarToggle);
    });
    sidebarToggle();
  },
  menu: () => {
    new Swiper(".menu-swiper", {
      slidesPerView: "auto",
      navigation: {
        nextEl: ".menu-swiper-nav-next",
        prevEl: ".menu-swiper-nav-prev",
      },
    });
  },
  init: () => {
    app.sidebar();
    app.menu();
 

    new TomSelect(".bw-select-multi",{create: true});


    document.querySelector(".bw-dropdown-filter-close")?.addEventListener("click",(e)=>{
      let filterDropdown =  new bootstrap.Dropdown(e.target.closest(".dropdown").querySelector('[data-bs-toggle="dropdown"]'))
      filterDropdown.hide()

    },false)
 
  },
};
