const app = {
  sidebar: () => {
    let sidebar = document.querySelector('[data-layout="sidebar"]');
    let toggle = document.querySelectorAll('[data-layout="sidebar-toggle"]'); 
       MetisMenu.attach(document.querySelector('[data-layout="menu"]>ul'));
 
 
 
    if (!sidebar || !toggle) return;
    let isSidebarExpanded = true;
    const sidebarToggle = () => {
      isSidebarExpanded = !isSidebarExpanded;
      sidebar.classList.toggle("classic", isSidebarExpanded);
      sidebar.classList.toggle("compact", !isSidebarExpanded);
    };
    toggle.forEach(item=>{
      item.addEventListener("click", sidebarToggle);

    })
    sidebarToggle();
  },
  menu:()=>{

 new Swiper('.menu-swiper', {
    
      slidesPerView: "auto",
    
      navigation: {
        nextEl: '.menu-swiper-nav-next',
        prevEl: '.menu-swiper-nav-prev',
      },
    
    });

  },
  init: () => {
    app.sidebar();
    app.menu();
  },
};
