import { Component } from '@angular/core';

@Component({
    selector: 'navi-bar',
    template: `
        <div class="top-bar">
            <div class="top-bar-title">Pablo Company</div>
            <div>
                <ul class="menu">
                    <li class="nav-menu"><a href="#">Manu item 1</a></li>
                </ul>
            </div>
        </div>
    `,
    styleUrls: ['./navbar.component.css']
})
export class NavComponent {}