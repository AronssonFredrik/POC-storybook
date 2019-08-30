import {
    trigger,
    animate,
    transition,
    style,
    state,
    query,
    stagger
} from '@angular/animations';

export const toggleExpandedState = trigger('toggleExpandedState', [
    transition(':enter', [
        style({ height: '0' }),
        animate('{{speed}}', style({ height: '*' }))
    ], { params: { speed: '0.4s' } }),
    transition(':leave', [
        style({ height: '*' }),
        animate('{{speed}}', style({ height: '0', overflow: 'hidden' })),
    ], { params: { speed: '0.4s' } }),
]);

export const listStagger = trigger('listStagger', [
    transition('* <=> *', [
        query(
            ':enter',
            [
                style({ opacity: 0, transform: 'translateY(-15px)' }),
                stagger(
                    '50ms',
                    animate(
                        '550ms ease-out',
                        style({ opacity: 1, transform: 'translateY(0px)' })
                    )
                )
            ],
            { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
            optional: true
        })
    ])
]);