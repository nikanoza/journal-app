import { Component } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-marks',
    templateUrl: './marks.html',
    styleUrls: ['./marks.css']
})

export class MarksComponent {
    faPlus = faPlusCircle;

}