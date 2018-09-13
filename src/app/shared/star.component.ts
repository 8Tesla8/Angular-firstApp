import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html' ,
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}

// predicates
// private specialConditionOnNoAnswerWN(displayTag: string): boolean {
//     var state = this.applicationService.application.primaryPersonalInfo.state;

//     var validationList = Array<() => boolean>();

//     var validationPA = () => {
//         return state === 'PA' &&
//             displayTag === 'WN_Q1'
//     };
//     validationList.push(validationPA);

//     var validationСA = () => {
//         return state === 'CA' &&
//             displayTag === 'WN_Q2_KnockNo'
//     };
//     validationList.push(validationСA);

//     var isSpecialCondition = false;
//     _.forEach(validationList, (item) => {
//         if (item()) {
//             isSpecialCondition = true;
//             return;
//         }
//     })

//     return isSpecialCondition;
// }

