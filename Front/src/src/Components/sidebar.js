import React from "react";
export const Sidebar = () => {
    return  <div> 	

<div id="wrapper"/>

{/* <!-- Sidebar --> */}
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    {/* <!-- Sidebar - Brand --> */}
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div class="sidebar-brand-icon">
            <i class="fas fa-chart-line"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Admin</div>
    </a>

    {/* <!-- Divider --> */}
    <hr class="sidebar-divider my-0"/>

    {/* <!-- Nav Item - Dashboard --> */}
    <li class="nav-item active">
        <a class="nav-link" href="/">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
    </li>

    {/* <!-- Divider --> */}
    <hr class="sidebar-divider"/>

    {/* <!-- Heading --> */}
    <div class="sidebar-heading">Actions</div>

    {/* <!-- Nav Item - Pages --> */}
    <li class="nav-item">
        <a class="nav-link collapsed" href="/">
            <i class="fas fa-fw fa-folder"></i>
            <span>Pages</span>
        </a>
    </li>

    {/* <!-- Nav Item - Charts --> */}
    <li class="nav-item">
        <a class="nav-link" href="/">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></a>
    </li>

    {/* <!-- Nav Item - Tables --> */}
    <li class="nav-item">
        <a class="nav-link" href="/">
            <i class="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
    </li>

    {/* <!-- Divider --> */}
    <hr class="sidebar-divider d-none d-md-block"/>
</ul>
{/* <!-- End of Sidebar --> */}

</div>
}